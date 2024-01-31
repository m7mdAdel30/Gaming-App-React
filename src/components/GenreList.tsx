import { HStack, Image, List, ListItem, Spinner, Button } from "@chakra-ui/react";
import UseGenre from "../hooks/useGenre";
import getCroppedImage from "../services/image-url";

const GenreList = () => {
  const { data , isLoading  , error} = UseGenre();

  if (isLoading) return <Spinner/>
  if (error) return null;
  return (
    <List>
      {data.map((genre) => {
        return (
          <ListItem paddingY={2} key={genre.id}>
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                src={getCroppedImage(genre.image_background)}
              />
              <Button onClick={() => { console.log(genre) }} fontSize='lg' variant='link'>{genre.name}</Button>
            </HStack>
          </ListItem>
        );
      })}
    </List>
  );
};

export default GenreList;
