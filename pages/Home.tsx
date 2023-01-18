import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'next/image'

import { ReactElement } from 'react';
import { Box, SimpleGrid, Icon, Text, Stack, Flex, Heading,Container } from '@chakra-ui/react';
import { FcApproval, FcCollaboration, FcBullish, FcDonate } from 'react-icons/fc';

interface FeatureProps {
  title: string;
  text: string;
  icon: ReactElement;
}

const Feature = ({ title, text, icon }: FeatureProps) => {
  return (
    <Stack>
      <Flex
        w={16}
        h={16}
        align={'center'}
        justify={'center'}
        color={'white'}
        rounded={'full'}
        bg={'gray.100'}
        mb={1}>
        {icon}
      </Flex>
      <Text fontWeight={600}>{title}</Text>
      <Text color={'gray.600'}>{text}</Text>
    </Stack>
  );
  
};



function Home() {
    
  return (
    <><Carousel>
      
      <Carousel.Item /* interval={1000} */>
        <Image
       height={200}
       width={2000}
        className="h-96 d-block  w-100"
          src={'/cellule-solaire.png'}
          alt="First slide" />
          
        <Carousel.Caption>
          <h1 >First slide label</h1>
          <p >Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
          height={200}
          width={2000}
           className="h-96 d-block  w-100"
             src={'/clima.jpg'}
             alt="second slide" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
        width={2000}
        height={200}
          className=" h-96 d-block w-100"
          src={'/thirdside.png'}
          alt="Third slide" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    
    <Container maxW={'8xl'} py={12}>
    <Box p={4} > 
    <Stack p={50} spacing={12} textAlign={'center'}>
    <Heading>
      Pourquoi nous choisir ?
      </Heading>
    </Stack>

        <SimpleGrid  alignItems={'center'}   columns={{ base: 2, md: 4 }} spacing={10}>
        
          <Feature 
            icon={<Icon as={FcApproval}  w={10} h={10} />}
            title={'Expertise'}
            text={'Depuis plus de 60 ans, fournisseur d’énergie pour des millions de foyers en Europe'} />
                     
          <Feature
          
            icon={<Icon as={FcDonate} w={10} h={10} />}
            title={'Confiance'}
            text={'Plus de 10 millions de clients dans 6 pays d’Europe dont 1,4 million en France   '} />
          <Feature
            icon={<Icon as={FcCollaboration} w={10} h={10} />}
            title={'Engagement'}
            text={'Plus de 2.000 collaborateurs passionnés pour vous offrir l’énergie dont vous avez besoin'} />
              <Feature
            icon={<Icon as={FcBullish} w={10} h={10} />}
            title={'Ambition'}
            text={'Devenir le leader dans la transition énergétique et atteindre la neutralité carbone d’ici 2040'} />
            
        </SimpleGrid>
        
      </Box>
      </Container>
      </>
  );
}

export default Home;