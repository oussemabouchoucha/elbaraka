import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'next/image'
import Cards from './cards';
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
    <>
    <Carousel>
      
      <Carousel.Item /* interval={1000} */>
        <Image
       height={200}
       width={2000}
        className="h-96 d-block  w-100"
          src={'/cellule-solaire.png'}
          alt="First slide" />
          
        <Carousel.Caption>
          <Text 
          fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
          bg={'blackAlpha.500'}
          color={'white'}
          >
            Circuit court</Text>
          <Text  
          bg={'blackAlpha.500'}
          fontSize={{ base: 'xl', sm: '2xl', md: '4xl' }}
          color={'white'}>
            Nos experts achetent vos garanties d&apos;origine en circuit court.

          </Text>
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
          <Text
          fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
          bg={'blackAlpha.500'}
          color={'white'}>Prix compétitif</Text>
          <Text fontSize={{ base: 'xl', sm: '2xl', md: '4xl' }}
          bg={'blackAlpha.500'}
          color={'white'}>
            L&apos;achat en direct nous permet de vous faire bénéficier des meilleurs prix.</Text>
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
          <Text fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
          bg={'blackAlpha.500'}
          color={'white'}>
            Sur-mesure</Text>
          <Text fontSize={{ base: 'xl', sm: '2xl', md: '4xl' }}
          bg={'blackAlpha.500'}
          color={'white'}>
          Notre equipe vous propose un large choix de garantie d&apos;origine selon la technologie et la localisation de votre choix.
          </Text>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    <Cards/>
    
    <Container maxW={'8xl'} >
    <div className="mx-auto max-w-2xl py-16 px-4  sm:px-6 lg:max-w-7xl lg:px-8" > 
    
    <h2 className="text-2xl font-bold tracking-tight text-gray-900">
      Pourquoi nous choisir ?
      </h2>
    

        <div  className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        
          <Feature 
            icon={<Icon as={FcApproval}  w={10} h={10} />}
            title={'Expertise'}
            text={'Notre expertise en énergie vous garantit des devis sur mesure pour répondre à vos besoins énergétiques les plus exigeants.'} />
                     
          <Feature
          
            icon={<Icon as={FcDonate} w={10} h={10} />}
            title={'Confiance'}
            text={'Nous sommes fiers de bâtir une relation de confiance avec nos clients en offrant des services énergétiques fiables et de qualité supérieure.'} />
          <Feature
            icon={<Icon as={FcCollaboration} w={10} h={10} />}
            title={'Engagement'}
            text={'Notre engagement envers nos clients est de leur offrir des solutions énergétiques durables et innovantes pour contribuer à un avenir plus vert et plus responsable.'} />
              <Feature
            icon={<Icon as={FcBullish} w={10} h={10} />}
            title={'Ambition'}
            text={"Notre ambition est d'être un leader de l'industrie énergétique en offrant des solutions novatrices et en repoussant les limites pour répondre aux besoins énergétiques de demain."} />
            
        </div>
        
      </div>
      </Container>
      </>
  );
}

export default Home;