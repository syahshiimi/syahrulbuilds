import { Flex, Link, Heading, Button, Spacer, useColorMode, useColorModeValue } from "@chakra-ui/react";
import Head from "next/head";
import NextLink from 'next/link'; // aliased from link to NextLink

export default function Header() {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
        <Flex
            className="c-topbar"
            pt={10}
            px={4}
            maxW={['container.sm', 'container.md']}
        >
            <NextLink href="/" passHref>
                <Link className="c-title" >
                    <Heading color={'gray.50'} size={['md', 'lg', 'lg']} >
                        SA.
                    </Heading>
                </Link>
            </NextLink>
            <Spacer />
            <Button onClick={toggleColorMode} className="c-colormodetoggle">Toggle</Button>
        </Flex>
    );
}
