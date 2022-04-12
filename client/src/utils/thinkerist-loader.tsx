// credits to craftz.dog and three.js samples

import { forwardRef } from 'react'
import { Box, Spinner } from '@chakra-ui/react'
import { motion } from 'framer-motion'

export const ThinkeristSpinner = () => (
  <Spinner
    size="xl"
    position={'absolute'}
    ml="calc(0px - var(--spinner-size) / 2)"
    mt="calc(0px - var(--spinner-size))"
  />
)

export const ThinkeristContainer = forwardRef(({ children }:any, ref:any) => (
  <motion.div
    animate={{ y: -50 }}
    transition={{
    repeat: Infinity,
    repeatType: "reverse",
    duration: 2.5,
    repeatDelay: 0.2
  }}>
  <Box
    ref={ref}
    display='flex'
    zIndex={1}
    justifyContent={'center'}
    alignItems={'center'}
    alignSelf={'start'}
    ml={{base: 0, md: -150, lg:-220, xl:-250}}
    mr={{base: 0, md: -150, lg: -200, xl:-150}}
    mb={{base: -100}}
    mt={'-5vh'}
    w={'90vw'}
    h={'90vw'}
    maxW={'1000px'}
    maxH={'1000px'}
  >
    {children}
  </Box>
  </motion.div>
))

const Loader = () => {
  return (
    <ThinkeristContainer>
      <ThinkeristSpinner />
    </ThinkeristContainer>
  )
}

export default Loader
