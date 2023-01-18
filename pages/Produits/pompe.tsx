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
  
  export default function pompe() {
    return (
      <WithSidebarLayout >
      <Container maxW={'5xl'} py={12}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Stack spacing={4}>
        
            <Text>Chez Nous, nous sommes fiers de proposer des solutions de chauffage efficaces et écologiques pour 
                les maisons et les entreprises. Les pompes à chaleur sont un excellent choix pour les propriétaires 
                soucieux de réduire leur consommation d'énergie et leur empreinte carbone. Ces dispositifs transfèrent 
                l'énergie thermique d'un endroit à un autre en utilisant l'électricité pour déplacer un réfrigérant dans 
                un circuit, entraînant ainsi un changement de température. Cette technologie est de plus en plus populaire 
                en raison de son rendement élevé, jusqu'à 3 fois plus élevé que les systèmes de chauffage traditionnels.
                Nous sommes là pour vous guider tout au long du processus d'installation d'une pompe à chaleur pour votre maison ou votre entreprise. 
                Nous vous offrons une expertise personnalisée pour vous aider à choisir la solution la plus adaptée à vos besoins et à votre budget. 
                Contactez-nous dès maintenant pour en savoir plus sur nos solutions innovantes de pompes à chaleur et pour obtenir un devis gratuit.</Text>
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
              alt={'pompe'}
              src={'/pompe.jpg'}
              objectFit={'cover'}
            />   
          </Flex>
        </SimpleGrid>
        <Text  fontSize='4xl' py='12'>
        Quel est le coût de l’installation d’une pompe à chaleur ?
         </Text>
         <text>
         Chez Nous, nous comprenons que les propriétaires souhaitent économiser de l'argent sur les coûts de chauffage tout en investissant dans 
         des solutions écologiques. Les pompes à chaleur sont un excellent choix pour cela, mais il est important de comprendre les coûts liés à 
         l'installation de ces équipements.
         Le coût d'installation d'une pompe à chaleur varie en fonction de plusieurs facteurs, tels que la taille de l'unité, le type de pompe à 
         chaleur et les coûts supplémentaires liés à une installation professionnelle. Le coût total peut varier de quelques centaines d'euros à plus de 8 000€.
         Chez Nous, nous vous offrons des solutions sur mesure pour répondre à vos besoins et à votre budget, en utilisant des matériaux de qualité 
         supérieure pour assurer une longue durée de vie de votre système. Nous vous offrons également des devis gratuits pour vous aider à comprendre les 
         coûts associés à l'installation d'une pompe à chaleur. Bien que les coûts initiaux puissent sembler élevés, les économies à long terme associées à 
         une pompe à chaleur correctement installée peuvent potentiellement compenser ces dépenses initiales. Contactez-nous dès maintenant pour en savoir 
         plus sur nos solutions innovantes de pompes à chaleur et pour obtenir un devis gratuit.
         </text>
     
      </Container>
      </WithSidebarLayout>
    );
  }