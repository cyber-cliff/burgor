import {  Box, Button, Heading, Input, Link, Stack, Textarea } from '@chakra-ui/react';
import { FaBackward, FaForward } from 'react-icons/fa';
import CustomContainer from '../container';
import { Link as ReactLink } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Checkout() {
  const [demoMail, setDemoMail] = useState('');
  const [receipt, setReceipt] = useState('\n\n---');
  const [input, setInput] = useState('Name: \nContact #: \nAddress: \nNote: ');
  const [valid, setValid] = useState(false);

  const handleDemoMail = () => {
    const detect = input.match(/(?<=Contact #: )(.*)(?=\nAddress:)/g);
    //@ts-ignore
    console.log(detect, /.+[@].+[.].+/g.test(detect[0]))
    if(detect) /.+[@].+[.].+/g.test(detect[0]) && setDemoMail(detect[0])
  }

  useEffect(()=>{
    console.log(demoMail)
  }, [demoMail])

  useEffect(()=>{
    const session = sessionStorage.getItem('burgorSesh');
    if(session !== '{}' && session) {
      const sesh = JSON.parse(session);
      let count = 0;
      let tmp = ''
      for(let key in sesh) {
        if(JSON.stringify(sesh[key]) !== '{}') tmp += `\n${key}\n`
        for(let moreKey in sesh[key]) {
          const arr = sesh[key][moreKey]
          count += arr[0]*arr[1]
          tmp += `₱${arr[0]*arr[1]} = ${arr[0]}x ${moreKey} at ₱${arr[1]}\n`
        }
      }
      setReceipt(receipt + tmp + `\nTotal amount\n₱${count}`);
    } else setReceipt(receipt + '\nNO ORDER SELECTED')
  }, [])

  const details = ['Name: ', '\nContact #: ', '\nAddress: ', '\nNote: ']

  const handleInput = (e:any) => {
    if(!receipt) return
    const val = e.target.value
    const arrRegex = details.map(n => new RegExp(`${n}`, "gi"))
    if( val.slice(val.length-receipt.length) !== receipt 
    || arrRegex.some(reg => reg.test(val) === false) 
    //@ts-ignore
    || val.match(/[\n]/g).length > 3 + receipt.match(/[\n]/g).length  
    ) return
    setInput(val.slice(0, val.length-receipt.length))
  }

  useEffect(()=>{
    if(/NO ORDER SELECTED/g.test(receipt)) return setValid(false);
    handleDemoMail();

    const lastArrRegex = details.slice(0,-1).map(n => new RegExp(`${n}.+\n`, "gi"))
    if(lastArrRegex.every(reg => reg.test(input) === true)) setValid(true);
    else setValid(false);
  },[input])
  
  return(
    <form
      method='POST'
      action='/post'>
      <CustomContainer>
        <Stack 
          align={'end'} 
          m={0} 
          w={'100%'}>
          <Input name='demomail' display={'none'} value={demoMail} onChange={()=>{}}/>
          <Heading 
            textAlign={'right'} 
            textShadow='4px 4px 0px black' 
            lineHeight={1} 
            fontSize={{base:50, sm: 60}}>
            Custom note
          </Heading>
          <Heading textAlign={'right'} textShadow='3px 3px 0px black' fontSize={{base: 'lg', md:'md'}}>
          ⚠️ Name, Contact &#38; Address are important ⚠️
          </Heading>
          <Textarea 
            name='order'
            minH={400}
            pt={5}
            pl={8}
            value={input + receipt}
            onInput={handleInput}
            color='black'
            bg={'whiteAlpha.700'}
            />
          <Heading textAlign={'right'} textShadow='3px 3px 0px black' fontSize={{base: 'md', md:'sm'}}>
          ⚠️ Since this is also a nodemailer demo, if you'd like, you can enter your email at Contact # and the order details will be automatically sent
          </Heading>
          <Box 
            display={'flex'} 
            flexDirection={'row'} 
            justifyContent={'space-between'} 
            w={'100%'}>
            <Link 
              as={ReactLink} 
              to='/order'>
              <Button
                w={150}
                type={'button'}
                fontWeight={'700'}
                color={'#000'}
                leftIcon={<FaBackward/>}
                bg={'#ffcf4a'}>
                BACK
              </Button>
            </Link>
            <Button
              w={150}
              type={'submit'}
              fontWeight={'700'}
              color={'#000'}
              rightIcon={<FaForward/>}
              isDisabled={!valid}
              bg={'#ffcf4a'}>
              SUBMIT
            </Button>
          </Box>
        </Stack>
      </CustomContainer>
    </form>
  )
}

export default Checkout