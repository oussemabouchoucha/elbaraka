import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
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
      
          <Text>Chez Nous, nous croyons que l&apos;énergie solaire est la voie à suivre pour alimenter 
            les maisons et les entreprises de manière efficace et durable. Nous sommes convaincus 
            que cette technologie offre de nombreux avantages pour nos clients, tels que </Text>
          <Stack
            spacing={4}
            divider={
              <StackDivider
              />
            }>
            <Feature
             
              text={"une source d'énergie inépuisable, contrairement aux combustibles fossiles"}
            />
            <Feature

              text={'une empreinte environnementale minimal, contribuant ainsi à préserver notre planète pour les générations futures.'}
            />
            <Link href="/contact">
              <Button colorScheme='messenger' size='lg' rounded={'3xl'}>
                Recever des devis
                </Button> 
             </Link>
          </Stack>
        </Stack>
        
        <Flex>
          <Image
            rounded={'md'}
            alt={'photovoltaiques'}
            src={'/photovoltaiques.png'}
            objectFit={'cover'}
          />   
        </Flex>
      </SimpleGrid>
      <Text  fontSize='4xl' py='12'>
       Installation des panneaux solaires photovoltaïques
       </Text>
       <text>
        Nous comprenons que l&apos;installation de panneaux solaires peut sembler complexe, c&apos;est pourquoi nous mettons tout en œuvre pour simplifier le 
        processus pour nos clients. Nous savons que l&apos;emplacement est crucial pour maximiser l&apos;efficacité des panneaux solaires, c&apos;est pourquoi nous 
        commençons par une analyse approfondie de votre propriété pour trouver le meilleur emplacement pour votre système. Nous nous assurerons que 
        votre propriété dispose de suffisamment d&apos;espace pour accueillir le nombre de panneaux souhaités.
        Une fois l&apos;emplacement idéal identifié, notre équipe d&apos;experts procédera à l&apos;installation avec précision et efficacité. Nous utilisons des 
        matériaux de qualité supérieure pour garantir une longue durée de vie de votre système. Le processus complet de l&apos;installation est généralement 
        achevé en quelques jours seulement, vous permettant de bénéficier de l&apos;énergie solaire dans les meilleurs délais. Contactez-nous dès maintenant 
        pour un devis gratuit et pour en savoir plus sur nos solutions d&apos;installation de panneaux solaires innovantes et éco-responsables.
       </text>
      <Text  fontSize='4xl' py='12'>
      Le prix de l&apos;installation des panneaux solaires photovoltaïques       
      </Text>
       <text>
          Chez Nous, nous croyons que les panneaux solaires photovoltaïques sont un investissement judicieux pour les propriétaires désireux de produire 
          de l&apos;énergie de manière efficace et durable. Nous comprenons que l&apos;installation de panneaux solaires peut sembler coûteuse, mais nous voulons 
          rassurer nos clients en leur indiquant que les coûts ont considérablement diminué ces dernières années, rendant les panneaux solaires plus 
          abordables que jamais. En outre, le coût de l&apos;électricité produite par les panneaux solaires photovoltaïques est souvent inférieur au coût de 
          l&apos;électricité provenant de sources traditionnelles, ce qui en fait un investissement à long terme rentable.
          Notre équipe d&apos;experts est là pour vous aider à comprendre les coûts et les avantages de l&apos;installation de panneaux solaires photovoltaïques, 
          et pour vous offrir un devis gratuit et personnalisé. Nous sommes convaincus que l&apos;énergie solaire est l&apos;avenir et nous sommes fiers de contribuer 
          à la transition énergétique en proposant des solutions éco-responsables à nos clients. N&apos;hésitez pas à nous contacter pour en savoir plus sur nos 
          solutions d&apos;installation de panneaux solaires photovoltaïques de qualité supérieure.
       </text>
    </Container>
    </WithSidebarLayout>
  );
}