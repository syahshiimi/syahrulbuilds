import { Tag, TagLabel } from '@chakra-ui/react';

const AppsTag = ({ object }) => {
    const { apps = [] } = object;
    return (
        <>
            {(apps) ? apps.map((item, index) => {
                return (
                    <Tag
                        key={index}
                        className="c-apps_tag"
                        size={'sm'}
                        variant={'solid'}
                        colorScheme='pink'>
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

export default AppsTag
