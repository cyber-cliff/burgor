import { Box, Link, Stack, Text } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaIdCard } from "react-icons/fa";

function Footer() {
    return(
        <Box
            display={'flex'}
            justifyContent='center'
            alignItems={'center'}
            p={10}
            w='100%'>
            <Stack alignItems={'center'}>
                <Text color='white' textAlign={'center'} textShadow='1px 1px 0px black' fontSize={'sm'} zIndex={50}>
                    Bored? visit the hamburger's{' '}
                    <Link href="https://www.artstation.com/jakecircles/profile" target={'_blank'}>3d artist</Link>
                </Text>
            </Stack>
        </Box>
    )
}

export default Footer
