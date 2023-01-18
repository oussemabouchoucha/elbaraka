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
  
  export default function photovoltaiques() {
    return (
      <WithSidebarLayout >
      <Container maxW={'5xl'} py={12}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Stack spacing={4}>
        
            <Text>Chez Nous, nous comprenons que le choix d'un système de chauffage solaire peut sembler déroutant, avec de nombreux produits et 
                options disponibles sur le marché. C'est pourquoi nous sommes là pour vous guider dans votre décision en vous offrant des solutions 
                sur mesure pour répondre à vos besoins et à votre budget.
                Afin de déterminer le système de chauffage solaire le plus adapté à votre situation, il est important de prendre en compte plusieurs 
                facteurs tels que: la taille de votre propriété, les besoins de votre famille, vos objectifs énergétiques et financiers, ainsi que les 
                conditions climatiques de votre région.
                Notre équipe d'experts vous aidera à évaluer ces facteurs et à choisir le système de chauffage solaire le plus approprié pour votre 
                maison ou votre entreprise. Nous vous offrons une expertise personnalisée pour vous aider à choisir la solution la plus adaptée à vos 
                besoins et à votre budget. Contactez-nous dès maintenant pour en savoir plus sur nos solutions innovantes de chauffage solaire et pour 
                obtenir un devis gratuit. </Text>
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
              alt={'chauffage_solaire'}
              src={'/chauffage_solaire.jpg'}
              objectFit={'cover'}
            />   
          </Flex>
        </SimpleGrid>
        <Text  fontSize='4xl' py='12'>
         Installation
         </Text>
         <text>
            L'installation est un facteur clé à prendre en compte lors de l'achat d'un système de chauffage solaire. Chez Nous, nous comprenons 
            que chaque propriété a des besoins différents en matière d'installation. C'est pourquoi nous vous offrons des options flexibles pour 
            répondre à vos besoins.
            Nous proposons des systèmes préassemblés, des kits d'installation, ainsi que des options d'installation professionnelle. En fonction 
            de vos compétences en matière d'installation et de votre budget, vous pourrez choisir l'option qui convient le mieux à vos besoins. 
            Nous vous proposons des solutions adaptées pour que l'installation de votre système de chauffage solaire soit simple et efficace. 
            Contactez-nous dès maintenant pour obtenir un devis gratuit et pour en savoir plus sur nos options d'installation.
         </text>
        <Text  fontSize='4xl' py='12'>
        Le devis pour des travaux de chauffage solaire et chauffe-eau solaire
        </Text>
         <text>
         Investir dans des solutions énergétiques durables comme les chauffe-eau solaires et les systèmes de chauffage solaire est un excellent 
         moyen de réduire les coûts énergétiques et de contribuer à l'environnement.
        Chez Nous, nous comprenons que chaque propriété a des besoins uniques en matière d'investissement en énergie solaire. C'est pourquoi nous 
        vous offrons des options adaptées à votre budget et à vos besoins.
        Les coûts d'installation varient selon la région, mais vous pouvez vous attendre à des coûts compris entre 5 000 et 10 000 euros pour un 
        chauffe-eau solaire, et entre 2 000 et 4 000 euros pour un système de chauffage solaire.
        Bien que cela puisse sembler être un investissement important, le retour sur investissement à long terme est immédiatement visible grâce à 
        la réduction des factures d'énergie.
        N'hésitez pas à nous contacter pour obtenir un devis gratuit pour l'installation de votre système de chauffage solaire ou pour tout renseignement 
        complémentaire. Nous sommes à votre disposition pour vous aider à réaliser votre projet d'énergie renouvelable.
         </text>
      </Container>
      </WithSidebarLayout>
    );
  }