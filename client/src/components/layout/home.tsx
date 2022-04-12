import {  Button,  Heading, Link, Stack } from '@chakra-ui/react';
import { FaPlayCircle } from 'react-icons/fa';
import CustomContainer from '../container';
import { Link as ReactLink } from 'react-router-dom';

function Home() {

  return(
    <>
      <CustomContainer>
        <Stack align={'end'}>
          <Heading textAlign={'right'} textShadow='4px 4px 0px black' lineHeight={1} fontSize={{base:65, sm: 100}}>
            grab a burger now
          </Heading>
          <Heading textAlign={'right'} textShadow='3px 3px 0px black'>
            via COD delivery
          </Heading>
          <Link as={ReactLink} to='/order'>
          <Button
            w={215}
            fontWeight={'700'}
            color={'#000'}
            rightIcon={<FaPlayCircle/>}
            bg={'#ffcf4a'}>
            START ORDER
          </Button>
          </Link>
        </Stack>
      </CustomContainer>
    </>
  )
}

export default Home