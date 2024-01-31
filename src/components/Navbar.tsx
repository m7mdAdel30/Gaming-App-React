import { HStack, Image, Text } from '@chakra-ui/react'
import Logo from '../assets/Logo.jpg'
import ColorModeSwitch from './ColorModeSwitch'
const Navbar = () => {
  return (
    <HStack justifyContent='space-between' padding='10px'>
      <Image src={Logo} boxSize='80px' />
      <ColorModeSwitch/>
    </HStack>
  )
}

export default Navbar