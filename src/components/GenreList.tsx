import {
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
  Button,
  Heading,
} from "@chakra-ui/react";
import UseGenre, { Genre } from "../hooks/useGenre";
import getCroppedImage from "../services/image-url";
interface Props {
  onSelectedGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}
const GenreList = ({ selectedGenre, onSelectedGenre }: Props) => {
  const { data, isLoading, error } = UseGenre();

  if (isLoading) return <Spinner />;
  if (error) return null;
  return (
    <>
      <Heading fontSize='2xl' marginBottom={2} >Genres</Heading>
      <List>
        {data.map((genre) => {
          return (
            <ListItem paddingY={2} key={genre.id}>
              <HStack>
                <Image
                  boxSize="32px"
                  objectFit="cover"
                  borderRadius={8}
                  src={getCroppedImage(genre.image_background)}
                />
                <Button
                  whiteSpace="normal"
                  textAlign="left"
                  fontWeight={
                    genre.id === selectedGenre?.id ? "bold" : "normal"
                  }
                  onClick={() => {
                    onSelectedGenre(genre);
                  }}
                  fontSize="lg"
                  variant="link"
                >
                  {genre.name}
                </Button>
              </HStack>
            </ListItem>
          );
        })}
      </List>
    </>
  );
};

export default GenreList;
