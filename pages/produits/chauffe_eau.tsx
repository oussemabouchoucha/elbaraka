import {
    Container,
    SimpleGrid,
    Image,
    Flex,
    Text,
    Stack,
    StackDivider,
    useColorModeValue,
    Button,
    List,
    ListItem,
    UnorderedList
  } from '@chakra-ui/react';
  
  import  Link  from "next/link";
  import WithSidebarLayout from '../../components/layout/withSidebar'
  
  interface FeatureProps {
    text: string;
  
  }
  
  const Feature = ({ text }: FeatureProps) => {
    return (
      <Stack direction={'row'} align={'center'}>
        <Flex
       
          align={'center'}
          justify={'center'}
          rounded={'full'} >
        </Flex>
        <Text fontWeight={600}>{text}</Text>
      </Stack>
    );
  };
  
  
  export default function chauffe_eau() {
    
    return (
      <WithSidebarLayout >
      <Container maxW={'5xl'} py={12}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Stack spacing={4}>
        
            <Text>Si vous êtes à la recherche d'une solution de chauffage de l'eau efficace et rentable pour votre maison, notre système de 
              chauffe-eau thermodynamique est peut-être la solution idéale pour vous. Chez Nous, nous avons une grande expertise sur les 
              chauffe-eau thermodynamique et sommes prêts à vous fournir toutes les informations nécessaires pour vous aider à comprendre comment 
              ces systèmes fonctionnent, comment ils sont installés, les avantages qu'ils offrent et comment ils peuvent réduire les coûts d'énergie 
              pour votre maison. N'hésitez pas à nous contacter pour obtenir un devis ou pour tout renseignement complémentaire. Nous sommes à votre 
              disposition pour vous aider à réaliser votre projet d'énergie renouvelable.
            </Text>
            <Stack
              spacing={4}
              divider={
                <StackDivider
                  borderColor={useColorModeValue('gray.100', 'gray.700')}
                />
              }>
            
              <Link href="/Contact">
                <Button colorScheme='messenger' size='lg' rounded={'3xl'}>
                  Recever des devis
                  </Button> 
               </Link>
            </Stack>
          </Stack>
          
          <Flex>
            <Image
              rounded={'md'}
              alt={'chauffe_eau'}
              src={'/chauffe-eau.jpg'}
              objectFit={'cover'}
            />   
          </Flex>
        </SimpleGrid>
        <Text  fontSize='4xl' py='12'>
         Installation
         </Text>
         <text>
          L'installation d'un système de chauffe-eau thermodynamique est un travail qui peut être réalisé par un bricoleur expérimenté. Cependant, 
          chez Nous, nous comprenons que tout le monde n'est pas à l'aise avec les projets de bricolage. C'est pourquoi nous offrons des services 
          d'installation professionnels pour assurer un montage efficace et optimal de votre système de chauffe-eau thermodynamique. Nous nous 
          engageons à garantir que votre système est installé correctement pour une performance optimale et une économie d'énergie maximale. 
          Contactez-nous pour obtenir un devis ou pour tout renseignement complémentaire. Nous sommes à votre disposition pour vous aider à réaliser 
          votre projet d'énergie renouvelable.
         </text>
        <Text  fontSize='4xl' py='12'>
        Exploitez tous les avantages d'un chauffe-eau thermodynamique: économies d'énergie, facilité d'installation et respect de l'environnement
        </Text>
         <text>
          Le chauffe-eau thermodynamique est un choix judicieux pour les propriétaires soucieux de leur facture d'énergie et de leur empreinte écologique. 
          Il offre des avantages tels que :



          <UnorderedList>
          <ListItem>
          <Feature
             
             text={"une haute efficacité énergétique qui permet de réaliser des économies sur les coûts de chauffage"}
           />
          </ListItem>
          <ListItem>
            <Feature

              text={'une installation relativement simple et peu coûteuse.'}
            />
          </ListItem>
          <ListItem>
          <Feature
             
             text={"une technologie respectueuse de l'environnement qui émet peu ou pas de gaz à effet de serre"}
           /></ListItem>  
          <ListItem>
            <Feature

             text={"des garanties prolongées pour une tranquillité d'esprit supplémentaire"}
           /></ListItem> 
          <ListItem>
          <Feature
             
             text={"des incitations financières disponibles pour l'installation d'un système de chauffage thermodynamique."}
           />
          </ListItem>
              </UnorderedList>
        
          En somme, Investir dans un chauffe-eau thermodynamique est un choix judicieux pour les propriétaires soucieux de leur consommation énergétique 
          et de leur impact environnemental. N'hésitez pas à nous contacter pour obtenir des informations complémentaires sur les avantages et les coûts 
          d'installation d'un chauffe-eau thermodynamique pour votre maison. Nous sommes là pour vous accompagner dans votre projet d'énergie renouvelable.
         </text>
      </Container>
      </WithSidebarLayout>
    );
  }