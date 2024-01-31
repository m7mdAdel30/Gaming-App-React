import React from 'react'
import {Game} from '../hooks/useGames';
import { Card, CardBody, HStack, Heading, Image, Text } from '@chakra-ui/react';
import PlatformIconList from './PlatformIconList';
import CriticScore from './CriticScore';
import getCroppedImage from '../services/image-url';
interface Props {
  game: Game;
}
const GameCard = ( { game } : Props ) => (
  <Card width='300px' borderRadius={10} overflow={'hidden'}>
    <Image src={ getCroppedImage ( game.background_image)} />
    <CardBody>
      <Heading fontSize={'2xl'}> {game.name} </Heading>
    <HStack justifyContent={'space-between'} >
      <PlatformIconList key={game.id}  platforms={game.parent_platforms.map(p => p.platform )} />
      <CriticScore score={game.metacritic} />
    </HStack>
    </CardBody>
  </Card>
)

export default GameCard