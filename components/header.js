import { Flex, Link, Heading, Button, Spacer, useColorMode, useColorModeValue, Icon, Container } from "@chakra-ui/react";
import Head from "next/head";
import NextLink from 'next/link'; // aliased from link to NextLink

import { MoonIcon, SunIcon } from "@chakra-ui/icons";


export default function Header() {
    const { colorMode, toggleColorMode } = useColorMode();
    const color = useColorModeValue('gray.700', 'gray.50')
    return (
        <Container
            className="c-topbar"
            pt={10}
            maxW={['container.sm', 'container.md']}
            as={'nav'}
        >
            <Flex grow={'1'}>
                <NextLink href="/" passHref>
                    <Link className="c-title" >
                        <Heading color={color} size={['md', 'lg', 'lg']} >
                            SA.
                        </Heading>
                    </Link>
                </NextLink>
                <Spacer />
                <Button onClick={toggleColorMode}>
                    {colorMode === 'dark' ? (<MoonIcon />) : (<SunIcon />)}
                </Button>
            </Flex>
        </Container>
    );
}
