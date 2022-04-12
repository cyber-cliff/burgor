import { Box, Container, Heading, Text } from '@chakra-ui/react';
import { lazy, ReactElement, Suspense } from 'react';
import ThinkeristLoader from '../../utils/thinkerist-loader';

import Header from '../header';

const Thinkerist  = lazy(() => import('../thinkerist'));


function Main({children}:any) {

  return(
      <>
        <Header />
        <Container 
        display={'flex'} 
        flexDirection={{base:'column', md:'row'}}
        justifyContent={'space-between'}
        alignItems={'center'}
        color='white'
        pl={{base:10, xl: 0}}
        pr={{base:10, xl: 0}}
        pt={{base:100, md: 20}}
        pb={10}
        maxW={'container.lg'}>
          <Box position={{base:'relative', md:'absolute'}}>
            <Suspense fallback={<ThinkeristLoader />}>
                 <Thinkerist />
            </Suspense>
          </Box>
          <Box 
            w={'100%'} 
            h={'40vw'}
            maxH={'1000px'}
            display={{base:'none', md:'inline'}}/>
          {children}
        </Container>
      </>
  )
}

export default Main
