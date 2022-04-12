import { Container } from '@chakra-ui/react';
import Section from './section';

function CustomContainer({children, delay}:any) {

  return(
    
      <Container 
        display={'flex'} 
        flexDirection={'column'}  
        position={'relative'}
        m={0}
        p={0}
        alignItems={{base:'center',md:'end' }}
        justifyContent='center'
        minW={{base:0, md:343}}
        zIndex={10}>
            <Section delay={0.1}>
            {children}
            </Section>
      </Container>
  )
}

export default CustomContainer