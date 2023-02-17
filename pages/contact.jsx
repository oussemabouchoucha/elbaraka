import {
  Button,
  Container,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Text,
  Textarea,
  useToast,
  Flex,
  Stack,
  Checkbox,
} from "@chakra-ui/react";
import { useState,useEffect } from "react";
import { sendContactForm } from "../lib/api";
import axios from "axios";
import test from './test'

const initValues = { name: "", email: "", message: "", prenom: "", adresse: "", code: "", ville: "" , natel: "" , produit: true, };

const initState = { isLoading: false, error: "", values: initValues };
const Contact = () => {
  const toast = useToast();
  const [state, setState] = useState(initState);
  const [touched, setTouched] = useState({});

  const { values, isLoading, error } = state;

  const onBlur = ({ target }) =>
    setTouched((prev) => ({ ...prev, [target.name]: true }));

  

  const onSubmit = async () => {
    setState((prev) => ({
      ...prev,
      isLoading: true,
    }));
    try {
      console.log(initValues)
      const res_ax = await axios({
        url : '/back/devis/save', 
        method: 'post',
        data:{
          nom : values.name,
          email: values.email,
          prenom: values.prenom,
          code_postal: values.code,
          adresse: values.adresse,
          ville: values.ville,
          natel: values.natel,
          message: values.message,
          produit: produitArray.join(' , '),
        }
      }).then(res => console.log(res.data));
      await sendContactForm(values);
      setTouched({});
      setState(initState);
      toast({
        title: "Message sent.",
        status: "success",
        duration: 2000,
        position: "top",
      });

    } catch (error) {
      setState((prev) => ({
        ...prev,
        isLoading: false,
        error: error.message,
      }));
    }
  };
  

//   const [idList, setIdList] = useState([]);
// const [checked, setChecked] = useState(false);
const [produitArray, setProduitArray] = useState([]);

const handleChange = (event) => {
  // if (event.target.type === "checkbox") {
  //   if (event.target.checked === true) {
  //     setIdList(idList + event.target.id + ";");
  //   } else {
  //     setIdList(idList.replace(";" + event.target.id + ";", ";"));
  //   }
  //   setChecked(event.target.checked);
  //   setState((prev) => ({
  //     ...prev,
  //     values: {
  //       ...prev.values,
  //       [event.target.name]: event.target.value,
  //     },
  //   }));
  // }
  if (event.target.type === "checkbox") {
    const value = event.target.value;
    const checked = event.target.checked;
    console.log(value, checked);
    if (checked) {
        setProduitArray([
            ...produitArray, value
        ])
        setState((prev) => ({
          ...prev,
          values: {
            ...prev.values,
            [event.target.name]: event.target.value,
          },
        }));
    }
    else { 
      setProduitArray(produitArray.filter( (e) => (e !== value) ));  
 }
 
  }
   else {
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [event.target.name]: event.target.value,
      },
    }));
   }
};
const handleSubmit =(e) => {
  e.preventDefault()
  console.log(produitArray)
}

    return ( 
      <Container maxW="450px" mt={12}>
      <Heading>Contact</Heading>
      {error && (
        <Text color="red.300" my={4} fontSize="xl">
          {error}
        </Text>
      )}
      <Flex >
      <FormControl isRequired isInvalid={touched.name && !values.name} mb={5} mr={8}>
        <FormLabel>Nom</FormLabel>
        <Input
          type="text"
          name="name"
          errorBorderColor="red.300"
          value={values.name}
          onChange={handleChange}
          onBlur={onBlur}
        />
        <FormErrorMessage>Obligatoire</FormErrorMessage>
      </FormControl>
      <FormControl isRequired isInvalid={touched.prenom && !values.prenom} mb={5}>
        <FormLabel>Prénom</FormLabel>
        <Input
          type="text"
          name="prenom"
          errorBorderColor="red.300"
          value={values.prenom}
          onChange={handleChange}
          onBlur={onBlur}
        />
        <FormErrorMessage>Obligatoire</FormErrorMessage>
      </FormControl>
      </Flex>
      <FormControl isRequired isInvalid={touched.adresse && !values.adresse} mb={5} mr={12}>
        <FormLabel>Adresse</FormLabel>
        <Input
          type="text"
          name="adresse"
          errorBorderColor="red.300"
          value={values.adresse}
          onChange={handleChange}
          onBlur={onBlur}
        />
        <FormErrorMessage>Obligatoire</FormErrorMessage>
      </FormControl>
      <Flex >
      <FormControl isRequired isInvalid={touched.code && !values.code} mb={5} mr={12}>
        <FormLabel>Code Postal</FormLabel>
        <Input
          type="number"
          name="code"
          errorBorderColor="red.300"
          value={values.code}
          onChange={handleChange}
          onBlur={onBlur}
        />
        <FormErrorMessage>Obligatoire</FormErrorMessage>
      </FormControl>
      <FormControl isRequired isInvalid={touched.ville && !values.ville} mb={5}>
        <FormLabel>Ville</FormLabel>
        <Input
          type="text"
          name="ville"
          errorBorderColor="red.300"
          value={values.ville}
          onChange={handleChange}
          onBlur={onBlur}
        />
        <FormErrorMessage>Obligatoire</FormErrorMessage>
      </FormControl>
      </Flex>
      <FormControl isRequired isInvalid={touched.email && !values.email} mb={5}>
        <FormLabel>Email</FormLabel>
        <Input
          type="email"
          name="email"
          errorBorderColor="red.300"
          value={values.email}
          onChange={handleChange}
          onBlur={onBlur}
        />
        <FormErrorMessage>Obligatoire</FormErrorMessage>
      </FormControl>
      <FormControl isRequired isInvalid={touched.natel && !values.natel} mb={5}>
        <FormLabel>Natel</FormLabel>
        <Input
          type='number'
          name="natel"
          errorBorderColor="red.300"
          value={values.natel}
          onChange={handleChange}
          onBlur={onBlur}
        />
        <FormErrorMessage>Obligatoire</FormErrorMessage>
      </FormControl>

      {/* <FormControl
        mb={5}
        isRequired
        isInvalid={touched.subject && !values.subject}
      >
        <FormLabel>Sujet</FormLabel>
        <Input
          type="text"
          name="subject"
          errorBorderColor="red.300"
          value={values.subject}
          onChange={handleChange}
          onBlur={onBlur}
        />
        <FormErrorMessage>Obligatoire</FormErrorMessage>
      </FormControl> */}
      <FormControl isRequired mb={5}>
  <FormLabel>Type d&apos;énergies renouvelables</FormLabel>
  <Stack mb={5}>
    <FormControl  mb={5}>
      <Checkbox
        type="checkbox"
        name="produit"
        value={'Photovoltaïques'}
        onChange={handleChange}
        onBlur={onBlur}
      >Photovoltaïques</Checkbox>
    </FormControl>
    <FormControl  mb={5}>
      <Checkbox
        type="checkbox"
        name="produit"
        value={'Pompe à chaleur'}
        onChange={handleChange}
        onBlur={onBlur}
      >Pompe à chaleur</Checkbox>
    </FormControl>
    </Stack>
    <Stack>
    {/* <FormControl mb={5}>
      <Checkbox
        type="checkbox"
        name="produit"
        value={'Chauffe-eau solaire / Chauffage solaire'}
        onChange={handleChange}
        onBlur={onBlur}
      >Chauffe-eau solaire / Chauffage solaire</Checkbox>
    </FormControl> */}
    <FormControl mb={5}>
      <Checkbox
        type="checkbox"
        name="produit"
        value={'Chauffe-eau thermodynamique'}
        onChange={handleChange}
        onBlur={onBlur}
      >Chauffe-eau thermodynamique</Checkbox>
    </FormControl>
  </Stack>
  <FormErrorMessage>At least one checkbox is required</FormErrorMessage>
</FormControl>

      <FormControl
        isRequired
        isInvalid={touched.message && !values.message}
        mb={5}
      >
        <FormLabel  >Message</FormLabel>
        <Textarea
          type="text"
          name="message"
          rows={4}
          errorBorderColor="red.300"
          value={values.message}
          onChange={handleChange}
          onBlur={onBlur}
        />
        <FormErrorMessage>Obligatoire</FormErrorMessage>
      </FormControl>

      


{/* <form >
<input type="checkbox" name='produit' value="aaa"
onChange={handleChange} 
/><label htmlFor=''>aaa </label>
<input type="checkbox" name='produit' value="bbb"
onChange={handleChange}
/><label htmlFor=''>bbb </label>
<input type="checkbox" name='produit' value="ccc"
onChange={handleChange}
/><label htmlFor=''>ccc </label><br></br>

<input type="text"
 />{...produitArray}
</form> */}

      <Button
      type="submit"
      value="submit"
      id="button"
        className="mb-3"
        variant="outline"
        colorScheme="blue"
        isLoading={isLoading}
        disabled={
          !values.name || !values.email || !values.message || !values.prenom || !values.adresse || !values.code || !values.ville || !values.natel
          || !produitArray.length > 0 
        }
        onSubmit={handleSubmit}
        onClick={onSubmit}
      >
        Envoyer
      </Button>
    </Container>
    )
  }
  
     

 
export default Contact;