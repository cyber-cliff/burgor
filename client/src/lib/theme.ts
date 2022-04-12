import { extendTheme } from '@chakra-ui/react'
import { mode, StyleFunctionProps } from '@chakra-ui/theme-tools'
import { Dict } from '@chakra-ui/utils'

const styles = {
  global: (props: Dict<any> | StyleFunctionProps) => ({
    body: {
      bg: '#22488a'
    }
  })
}

const components = {
  Link: {
    baseStyle: (props: Dict<any> | StyleFunctionProps) => ({
      color: '#ffcf4a',
      textUnderlineOffset: 3
    })
  }
}

const fonts = {
  heading: "'M PLUS Rounded 1c'"
}

const colors = {
  grassTeal: '#88ccca'
}

const config = {
  initialColorMode: 'dark'
  // useSystemColorMode: true
}

const theme = extendTheme({ config, styles, components, fonts, colors });

export default theme
