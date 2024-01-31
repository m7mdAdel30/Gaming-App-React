import { Badge } from '@chakra-ui/react'
import React from 'react'

interface Props{
  score:number
}

const CriticScore = ({score}: Props ) => {
  let colorScore = score > 94 ? 'red' : score > 85 ? 'green' : 'orange' 
  return (
    <Badge colorScheme={colorScore} fontSize={'14px'} paddingX={2} borderRadius={'4px'} >{score}</Badge>
  )
}

export default CriticScore