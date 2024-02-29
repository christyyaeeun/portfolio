const { Firestore } = require('@google-cloud/firestore');
const { Storage } = require('@google-cloud/storage');

const firestore = new Firestore();
const storage = new Storage();
const bucketName = process.env.BUCKET_NAME;
const bucket = storage.bucket(bucketName);
const validApiKey = process.env.API_KEY;

exports.fileAPI = async (req, res) => {
    try {
        validateRequest(req);

        const { locationId, outputId, date } = req.query;
        console.log('Received locationId:', locationId);
        console.log('Received outputId:', outputId);
        console.log('Received date:', date);

        validateLocationId(locationId);
        validateOutputId(parseInt(outputId, 10)); // Parse outputId to ensure it's a number

        const result = await getResultByOutputId(parseInt(outputId, 10), locationId, date);

        res.status(200).json(result);
    } catch (error) {
        console.error('Error:', error);
        handleError(error, res);
    }
};

async function getResultByOutputId(outputId, locationId, date) {
    switch (outputId) {
        case 1:
            return getContentOfLatestFile(locationId, date);
        case 2:
            return getContentOfFirstFile(locationId, date);
        case 3:
            return getContentOfAllFiles(locationId, date);
        case 4:
            return getTotalFileCount(locationId, date);
        case 5:
            return getFilesInfoForLocation(locationId, date);
        case 6:
            return getFileByDate(locationId, date); // Added case for getFileByDate
        default:
            throw new Error('Bad Request: Invalid OutputId');
    }
}

async function getContentOfLatestFile(locationId, date) {
    // Use the date parameter to filter files
    const fileName = await getLatestCreatedFile(locationId, date);
    const [ file ] = await bucket.file(fileName).download();
    return JSON.parse(file.toString('utf-8'));
}

async function getContentOfFirstFile(locationId, date) {
    // Use the date parameter to filter files
    const fileName = await getFirstCreatedFile(locationId, date);
    const [ file ] = await bucket.file(fileName).download();
    return JSON.parse(file.toString('utf-8'));
}

async function getContentOfAllFiles(locationId, date) {
    // Use the date parameter to filter files
    const [ files ] = await bucket.getFiles({
        prefix: `aggregated_response_${ locationId }_${ date }`,
    });
    const fileContents = await Promise.all(files.map(async (file) => {
        const [ content ] = await file.download();
        return JSON.parse(content.toString('utf-8'));
    }));
    return fileContents;
}

async function getTotalFileCount(locationId, date) {
    // Use the date parameter to filter files
    const [ files ] = await bucket.getFiles({
        prefix: `aggregated_response_${ locationId }_${ date }`,
        delimiter: '/',
    });
    return { totalFiles: files.length };
}

async function getFilesInfoForLocation(locationId, date) {
    // Use the date parameter to filter files
    const [ files ] = await bucket.getFiles({
        prefix: `aggregated_response_${ locationId }_${ date }`,
        delimiter: '/',
    });
    return {
        count: files.length,
        fileNames: files.map(file => file.name),
    };
}

async function getFileByDate(locationId, date) {
    const fileName = `aggregated_response_${ locationId }_${ date }.json`;
    const file = bucket.file(fileName);

    if (!(await file.exists())[ 0 ]) {
        throw new Error('Not Found: No file found for the specified locationId and date');
    }

    const [ content ] = await file.download();
    return JSON.parse(content.toString('utf-8'));
}

async function getFirstCreatedFile(locationId, date) {
    // Use the date parameter to filter files
    const [ files ] = await bucket.getFiles({
        prefix: `aggregated_response_${ locationId }_${ date }`,
        autoPaginate: false,
    });
    if (!files.length) {
        throw new Error('Not Found: No files found for the specified locationId and date');
    }
    const sortedFiles = files.sort((a, b) => a.metadata.timeCreated - b.metadata.timeCreated);
    return sortedFiles[ 0 ].name;
}

async function getLatestCreatedFile(locationId, date) {
    // Use the date parameter to filter files
    const [ files ] = await bucket.getFiles({
        prefix: `aggregated_response_${ locationId }_${ date }`,
        autoPaginate: false,
    });
    if (!files.length) {
        throw new Error('Not Found: No files found for the specified locationId and date');
    }

    // Sort files based on extracted date from file names
    const sortedFiles = files.sort((a, b) => {
        const dateA = extractDateFromFileName(a.name);
        const dateB = extractDateFromFileName(b.name);
        return dateB - dateA; // Sort by descending order of date
    });

    return sortedFiles[ 0 ].name;
}

function extractDateFromFileName(fileName) {
    const dateRegex = /(\d{4}-\d{2}-\d{2})/; // Matches "YYYY-MM-DD"
    const match = fileName.match(dateRegex);
    if (match && match[ 1 ]) {
        return new Date(match[ 1 ]);
    }
    return null; // Return null if date is not found or invalid
}

async function validateLocationId(locationId) {
    const locationsCollection = firestore.collection('locationIds');
    const locationSnapshot = await locationsCollection.where('locationId', '==', locationId).get();

    if (locationSnapshot.empty) {
        throw new Error('Bad Request: Invalid locationId');
    }
}

function validateOutputId(outputId) {
    const validOutputIds = new Set([ 1, 2, 3, 4, 5, 6 ]); // Added 6 as a valid OutputId
    if (!validOutputIds.has(outputId)) {
        throw new Error('Bad Request: Invalid OutputId');
    }
}

function validateRequest(req) {
    const apiKey = req.headers[ 'x-api-key' ];
    if (!apiKey || apiKey !== validApiKey) {
        throw new Error('Forbidden: Invalid API key');
    }
}

function handleError(error, res) {
    const status = error instanceof Error ? 500 : error.status || 500;
    const message = error.message || 'Internal Server Error';
    res.status(status).json({ error: message });
}