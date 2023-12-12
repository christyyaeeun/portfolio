import { HStack, Tag } from '@chakra-ui/react';

interface ISkillTagsProps {
    tags: string[];
    marginTop?: string;
}

const SkillTags: React.FC<ISkillTagsProps> = ({ tags, marginTop }) => {
    return (
        <HStack mb="4" spacing={ 2 } marginTop={ marginTop }>
            { tags.map((tag) => (
                <Tag size="md" variant="solid" bg="#e7d64d" color="black" key={ tag }>
                    { tag }
                </Tag>
            )) }
        </HStack>
    );
};

export default SkillTags;
