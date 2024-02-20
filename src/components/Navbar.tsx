import { HStack, Image, Text } from '@chakra-ui/react'
import Logo from '../assets/Logo.jpg'
import Logo2 from '../assets/Logo2.jpg'
import ColorModeSwitch from './ColorModeSwitch'
import SearchInput from './SearchInput'

interface Props {
  onSearch: (searchText: string) => void;
}

const Navbar = ({onSearch}: Props) => {
  return (
    <HStack  padding='10px'>
      <Image src={Logo2} boxSize='80px' />
      <SearchInput onSearch={onSearch}/>
      <ColorModeSwitch/>
    </HStack>
  )
}

export default Navbar