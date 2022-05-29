import { Heading } from '@chakra-ui/react';
import Layout from '../../components/layouts';

export default function Post() {
    return (
        <Layout>
            <Heading>
                This is a post page
            </Heading>
        </Layout>
    )
}

export async function getStaticPaths() {
    // Return a list of possible value for id

}

export async function getStaticProps({ params }) {
    // Fetch necessary data for the blog post using params.id

}
