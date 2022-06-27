import { Flex, Link, Heading, Button, Spacer, useColorMode, useColorModeValue, Icon } from "@chakra-ui/react";
import Head from "next/head";
import NextLink from 'next/link'; // aliased from link to NextLink

import { MoonIcon, SunIcon } from "@chakra-ui/icons";


export default function Header() {
    const { colorMode, toggleColorMode } = useColorMode();
    const color = useColorModeValue('gray.700', 'gray.50')
    return (
        <Flex
            className="c-topbar"
            pt={10}
            px={4}
            maxW={['container.sm', 'container.md']}
        >
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
    );
}
