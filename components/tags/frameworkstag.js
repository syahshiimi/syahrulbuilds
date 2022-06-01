import { Tag, TagLabel } from '@chakra-ui/react';

const FrameworksTag = ({ object }) => {
    const { frameworks = [] } = object;
    return (
        <>
            {(frameworks) ? frameworks.map((item, index) => {
                return (
                    <Tag
                        key={index}
                        className="c-frameworks_tag"
                        size={'sm'}
                        variant={'solid'}
                        colorScheme='blue'>
                        <TagLabel>
                            {item}
                        </TagLabel>
                    </Tag>
                )
            }) : null
            }
        </>
    )
}

export default FrameworksTag;
