import { Box, Container, Flex } from "@chakra-ui/react";
import Footer from "./footer";
import Header from "./header";

export default function Layout({ children }) {
    return (
        <Container
            px={[4, 10]}
            bg='gray.700'
            minH={'100vh'}
            className="c-layoutcontainer"
            maxW={['container.sm', 'container.md', 'container.lg', 'container.xl', '100%']}>
            <Header />
            <Container
                className='c-children'
                pb={'2vh'}
                maxW={['container.sm', 'container.md', 'container.lg', 'container.xl', 'container.2xl']}>{children}</Container>
            <Footer />
        </Container >
    );
}
