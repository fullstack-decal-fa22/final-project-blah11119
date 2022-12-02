import {
  ChakraProvider,
  Button,
  Heading,
  Link,
  Box,
  Grid,
  GridItem,
  Image,
  SimpleGrid,
} from "@chakra-ui/react";
import React from "react";

export function Visualization() {
  return (
    <ChakraProvider>
      <Box
        w="100%"
        h="1800px"
        bgGradient="linear(to-b, purple.400, pink.300, orange.200, yellow.100)"
      >
        <Grid
          templateAreas={`"empty"
                       "header"
                       "1" "2" "3"
                       "4" "5" "6"
                       "7" "8" "9"`}
          gridTemplateRows={"100px 120px 80px 80px 80px"}
          gap="10"
          color="blackAlpha.700"
          fontWeight="bold"
        >
          <GridItem align="center" area={"empty"}></GridItem>
          <GridItem align="center" area={"header"}>
            <Heading as="b" fontSize="80px" noOfLines={1} color="black">
              Your Spotify Visualized
            </Heading>
          </GridItem>
          <GridItem align="left" area={"1"}>
            <Image
              src="https://i.scdn.co/image/ab67616d0000b2731f19507516efc7db09d3171b"
              alt="img1"
              boxSize="200px"
            />
          </GridItem>
          <GridItem align="center" area={"2"}>
            <Image
              src="https://i.scdn.co/image/ab67616d0000b273411393166f4604ce6a603f25"
              alt="img2"
              boxSize="200px"
            />
          </GridItem>
          <GridItem align="right" area={"3"}>
            <Image
              src="https://i.scdn.co/image/ab67616d0000b2732b1a62237771427afb899387"
              alt="img3"
              boxSize="200px"
            />
          </GridItem>
          <GridItem align="left" area={"4"}>
            <Image
              src="https://i.scdn.co/image/ab67616d0000b273d1f8b8c925bf417b50d4fdec"
              alt="img4"
              boxSize="200px"
            />
          </GridItem>
          <GridItem align="center" area={"5"}>
            <Image
              src="https://i.scdn.co/image/ab67616d0000b273379023ee54719df0d63e8185"
              alt="img5"
              boxSize="200px"
            />
          </GridItem>
          <GridItem align="right" area={"6"}>
            <Image
              src="https://i.scdn.co/image/ab67616d0000b273fa35b2cb09571453125898c5"
              alt="img6"
              boxSize="200px"
            />
          </GridItem>
          <GridItem align="left" area={"7"}>
            <Image
              src="https://i.scdn.co/image/ab67616d0000b273a6ec746354ac9c48b9118839"
              alt="img7"
              boxSize="200px"
            />
          </GridItem>
          <GridItem align="center" area={"8"}>
            <Image
              src="https://i.scdn.co/image/ab67616d0000b27358ebd661a51fcf2968db3ea1"
              alt="img8"
              boxSize="200px"
            />
          </GridItem>
          <GridItem align="right" area={"9"}>
            <Image
              src="https://i.scdn.co/image/ab67616d0000b27302401c3ee1c1a73b3256256c"
              alt="img9"
              boxSize="200px"
            />
          </GridItem>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}
