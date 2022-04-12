import { Box, Button, Heading, Link, Spinner, Stack } from '@chakra-ui/react';
import { FaBackward, FaForward, FaUndo } from 'react-icons/fa';
import CustomContainer from '../container';
import { Link as ReactLink } from 'react-router-dom';
import Slider from '../slider';
import { useEffect, useRef, useState } from 'react';
import Section from '../section';

export const Categories = ({name}:any) => (
  <Heading  
    textShadow='3px 3px 0px black' 
    textAlign={'right'}>
    {name}
  </Heading>
)

function Order() {
  const [categoryArr, setCategoryArr] = useState([]);
  const [togReset, setTogReset] = useState(0);
  const [add, setAdd] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  
  
  const handleReset = () => {
    setTogReset(togReset + 1);
  }
  
  // read session JSON
  const didFetch = () => {
    const session = sessionStorage.getItem('burgorSesh');
    if(session) {
      const sesh = JSON.parse(session);
      let count = 0;
      for(let key in sesh) {
        for(let moreKey in sesh[key]) {
          const arr = sesh[key][moreKey]
          count += arr[0]*arr[1]
        }
      }
      setAdd(count);
    }
  }
  
  useEffect(()=> {
    fetch('/api/data').then(res=>
        res.json().then(obj => {
          setCategoryArr(obj.data)
          setIsLoading(false);
          didFetch();
        }).catch(err => {
          console.log('fetch error:',err);
        })
    ).catch(err=>setIsLoading(true));

  }, [])
  
  const didMount = useRef(false);

  useEffect(()=>{
      if (didMount.current) {
        setAdd(0);
      }
      else didMount.current = true;
  }, [togReset])

  return(
    <>
      <CustomContainer>
        <Stack 
          align={'end'} 
          m={0} 
          w={'100%'}>
          <Heading 
            textAlign={'right'} 
            textShadow='4px 4px 0px black' 
            lineHeight={1} 
            fontSize={{base:50, sm: 70}}>
            Order menu
          </Heading>
          {
            isLoading ? 
            (
              <Box display={'flex'} alignItems='center' justifyContent={'center'} width='100%' h={200}>
                <Spinner size={'xl'} />
              </Box>
            ) :
            categoryArr.map((obj:any, i) => (
              <>
                <Section
                  delay={(i+2)*0.1}>
                  <Categories 
                    name={obj.name}/>
                  <Slider 
                    category={obj.name}
                    arr={obj.data} 
                    reset={togReset} 
                    add={setAdd}/>
                </Section>
              </>
            ))
          }
          <Categories name={'=== Total'} />
          <Box 
            display={'flex'} 
            flexDirection={'row'} 
            justifyContent={'space-between'} 
            w={'100%'}>
          <Button
            w={150}
            alignSelf='start'
            fontWeight={'700'}
            color={'#fff'}
            leftIcon={<FaUndo/>}
            onClick={handleReset}
            isDisabled={isLoading}
            bg={'red.600'}>
            RESET
          </Button>
          <Categories name={`₱ ${add}`} />
          </Box>
          <Categories name={'======='} />
          <Box 
            display={'flex'} 
            flexDirection={'row'} 
            justifyContent={'space-between'} 
            w={'100%'}>
            <Link 
              as={ReactLink} 
              to='/'>
              <Button
                w={150}
                fontWeight={'700'}
                color={'#000'}
                leftIcon={<FaBackward/>}
                bg={'#ffcf4a'}>
                BACK
              </Button>
            </Link>
            <Link 
              as={ReactLink} 
              to='/checkout'>
              <Button
                w={150}
                fontWeight={'700'}
                color={'#000'}
                rightIcon={<FaForward/>}
                isDisabled={isLoading}
                bg={'#ffcf4a'}>
                CHECK OUT
              </Button>
            </Link>
          </Box>
        </Stack>
      </CustomContainer>
    </>
  )
}

export default Order