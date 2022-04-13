import { Box, ButtonGroup, Stack, Image, Button } from "@chakra-ui/react"
import { useEffect, useRef, useState } from "react"

function Item({category='', obj={name: 'null', src: '', price: 1}, reset, add}:any) {
    const [count, setCount] = useState(0);
    
    const handleMinus = () => {
        if(count <= 0) return
        
        setCount(count-1);
        add((prevAdd:any) => prevAdd - obj.price)
    }
    
    const handleAdd = () => {
        if(count >= 99) return

        setCount(count+1);
        add((prevAdd:any) => prevAdd + obj.price)
    }

    // read session JSON
    useEffect(()=>{
      const session = sessionStorage.getItem('burgorSesh');
      if(session) {
        const sesh = JSON.parse(session);
        if(category in sesh) {
          if(obj.name in sesh[category]) {
            setCount(sesh[category][obj.name][0])
          }
        }
      }
    }, [])

    const didMount = useRef(false);

    // modify session JSON
    useEffect(()=>{
      if (didMount.current) {
        const session = sessionStorage.getItem('burgorSesh')
        if(!session) {
          sessionStorage.setItem('burgorSesh', JSON.stringify({[category]: {[obj.name]: [count, obj.price]}}))
        } else {
          const sesh = JSON.parse(session);
          sessionStorage.clear();
          if(category in sesh) {
            if(!count) {
              const copy =  sesh[category]
              delete copy[obj.name]
              if(JSON.stringify(copy) === '{}') delete sesh[category]
              else sesh[category] = copy
            }
            else sesh[category][obj.name] = [count, obj.price];
          } else {
            if(!count) delete sesh[category]
            else sesh[category] = {[obj.name]: [count, obj.price]};
          }
          sessionStorage.setItem('burgorSesh', JSON.stringify(sesh))
        }  
      } else didMount.current = true
    }, [count])

    const didMountAgain = useRef(false);

    useEffect(()=>{
        if (didMountAgain.current) {
          setCount(0);
        } else didMountAgain.current = true;
    }, [reset])

    return(
        <Box 
            h={180} 
            w={150} 
            border='1px 1px '>
            <Stack
              w={150}
              spacing={0}>
            <Box boxSize={150} bg={'whiteAlpha.400'} borderTopRadius={15}>
              <Image 
                boxSize={'100%'} 
                objectFit='cover'
                borderTopRadius={15}
                src={obj.src}
                alt={`${obj.name} picture`}/>
            </Box>
            <ButtonGroup
              w={'100%'}
              isAttached>
              <Button
                bg={'#d4534c'}
                color={'black'}
                fontWeight={'800'}
                borderTopRadius={0}
                borderBottomRadius={15}
                w={'30%'}
                onClick={handleMinus}
                variant={'solid'}>
                {count}
              </Button>
              <Button
                bg={'#4cd44e'}
                color={'black'}
                w={'70%'}
                fontWeight={'800'}
                borderTopRadius={0}
                borderBottomRadius={15}
                textOverflow={'ellipsis'}
                onClick={handleAdd}
                variant={'solid'}>
                {`₱${obj.price}`}
              </Button>
            </ButtonGroup>
            </Stack>
        </Box>
    )
}

export default Item