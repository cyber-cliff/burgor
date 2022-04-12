import { FaFacebookSquare, FaTwitterSquare, FaInstagramSquare } from 'react-icons/fa';
import { Box, Container, Flex, Heading, Link, Stack, } from '@chakra-ui/react';

function Header() {
    return(
      <Box
        as="nav"
        w="100%"
        top={0}
        position={'fixed'}
        bg={'#ffcf4a'}
        zIndex={99}
      >
        <Container
          display="flex"
          p={2}
          pl={{base:10, xl: 0}}
          pr={{base:10, xl: 0}}
          maxW="container.lg"
          minW={343}
          flexWrap="wrap"
          alignItems="center"
          justifyContent="space-between"
        >
          <Flex align="center">
            <Heading textShadow='2px 2px 0px black' as="h1" fontSize={20}>
            🍔 Burgor Manila
            </Heading>
          </Flex>
          <Stack 
            direction={'row'}
            alignItems={'center'}  
          >
          <Stack direction={'row'} alignItems={'center'} css={{filter:'drop-shadow(2px 2px 0px black)'}}>
            <Link href='https://suntoes.vercel.app/' target={'_blank'} color='inherit'><FaInstagramSquare size={35}/></Link>
            <Link href='https://suntoes.vercel.app/' target={'_blank'} color='inherit'><FaFacebookSquare size={35}/></Link>
            <Link href='https://suntoes.vercel.app/' target={'_blank'} color='inherit'><FaTwitterSquare size={35}/></Link>
          </Stack>
          </Stack>
        </Container>
      </Box>
    )
}

export default Header