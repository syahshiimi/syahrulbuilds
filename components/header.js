import { Box, Container, Text, Link } from "@chakra-ui/react";
import NextLink from 'next/link'; // aliased from link to NextLink

export default function Header() {
    return (
        <Container className="c-title">
            <NextLink href="/" passHref>
                <Link >
                    Syahrul{"\n "} Anuar
                </Link>
            </NextLink>
        </Container>
    );
}
