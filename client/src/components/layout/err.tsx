import {  Button,  Heading, Link, Stack } from '@chakra-ui/react';
import { FaPlayCircle } from 'react-icons/fa';
import CustomContainer from '../container';
import { Link as ReactLink } from 'react-router-dom';
import { useEffect } from 'react';

function Error() {

  useEffect(()=>{
    sessionStorage.clear();
  },[])

  return(
    <>
      <CustomContainer>
        <Stack align={'end'}>
          <Heading textAlign={'right'} textShadow='4px 4px 0px black' lineHeight={1} fontSize={{base:65, sm: 100}}>
            Oooopppss
          </Heading>
          <Heading textAlign={'right'} textShadow='3px 3px 0px black'>
            error with the email
          </Heading>
          <Link as={ReactLink} to='/'>
          <Button
            w={215}
            fontWeight={'700'}
            color={'#000'}
            rightIcon={<FaPlayCircle/>}
            bg={'#ffcf4a'}>
            TRY AGAIN
          </Button>
          </Link>
        </Stack>
      </CustomContainer>
    </>
  )
}

export default Error