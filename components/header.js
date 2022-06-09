import { Box, Container, Text, Link, Heading } from "@chakra-ui/react";
import Head from "next/head";
import NextLink from 'next/link'; // aliased from link to NextLink

export default function Header() {
    return (
        <Container
            className="c-title"
            pt={10}
            maxW={['container.sm', 'container.md']}
        >
            <NextLink href="/" passHref>
                <Link >
                    <Heading color={'gray.50'} size='md' >
                        Syahrul{"\n "} Anuar
                    </Heading>
                </Link>
            </NextLink>
        </Container>
    );
}
