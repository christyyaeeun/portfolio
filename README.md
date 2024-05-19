# Personal Portfolio Website

The website is built using React, TypeScript, and Chakra UI. Below, you'll find an overview of the project, its features, and how to set it up locally.

## Project Overview

### Technologies Used

- **React:** A JavaScript library for building user interfaces.
- **TypeScript:** A statically typed superset of JavaScript.
- **Chakra UI:** A simple and modular component library for React applications.

### Props and Interfaces

The use of TypeScript and interfaces for prop types enhances code readability and helps catch potential errors during development. This practice ensures a robust and scalable codebase as the project grows.

### Reuse of Components

Components like ProjectCard and ProjectModal are intentionally designed for reuse. This design choice allows for easy addition of new projects or modifications to existing ones without affecting other parts of the application. This contributes to a more maintainable and extensible codebase.

### Data Separation

Project data is centrally stored in a JSON file (data.json), providing a clear separation between data and components. This approach simplifies the process of updating and expanding the list of projects without the need to modify the React components directly. This separation of concerns is crucial for scalability and ease of maintenance.

### Project Structure

The project follows a modular structure, with separate pages and components for different sections. Key files include:

- **App.js:** The main entry point of the application, where routes are defined and ChakraProvider is used to apply the Chakra UI theme.

- **Pages (Lazy Loaded):**
  - Home
  - About
  - Contact
  - Portfolio
  - Layout
  - Error

### Features

- **Lazy Loading:** The application utilizes lazy loading for improved performance by loading components only when they are needed.

- **Chakra UI Theming:** The UI is styled using Chakra UI, providing a consistent and responsive design.

- **Routing:** React Router is used for managing navigation between different pages.

- **Loading Spinner:** A loading spinner is displayed during the initial loading of the application.

## Getting Started

### Prerequisites

- Node.js and npm should be installed on your machine.

### AWS Amplify Configuration

Before running the application, you need to configure AWS Amplify with your own AWS credentials. Follow these steps:

1. Open the `src/aws-exports.js` file.
2. Replace the placeholder values in this file with your own AWS Amplify configuration.
3. Save the changes.

Now, you should be ready to run the application with your own AWS Amplify setup.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

Bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
