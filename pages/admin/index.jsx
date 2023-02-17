import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Stack,
    Button,
    Heading,
    Alert,
    AlertIcon,
    AlertTitle,
    useColorModeValue,
  } from '@chakra-ui/react';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState,useEffect } from 'react';
const Login = () => {
    const router = useRouter();
    useEffect(() => {
      const permission = localStorage.getItem("login")
      if(permission && permission === "true"){
        router.push("/admin/dashboard")
      }
    }, [router]);
    const [email, setEmail ] = useState("")
    const [password, setPassword ] = useState("")
    const [message, setMessage ] = useState()
    const loginFunction = async () =>{
      const res_ax = await axios({
        url : '/back/users/login', 
        method: 'post',
        data:{
          email: email,
          password: password
        }
      }).then(res => {
        if(res?.data.info){
          localStorage.setItem("login", "true")
          setMessage()
          router.push("/admin/dashboard")
        }else{
          localStorage.setItem("login", "false")
          setMessage(res.data)
        }
      });
    }
    return (  
        <>
         <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Connectez-vous à votre compte</Heading>

        </Stack>
        {
          message ? <> 
          <Alert status='error'>
              <AlertIcon />
              <AlertTitle> {message.message || message.error} </AlertTitle>
          </Alert> </> : 
          <></>
        }
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Adresse e-mail</FormLabel>
              <Input type="email" defaultValue="" onChange={(e) => setEmail(e.target.value)} />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Mot de passe</FormLabel>
              <Input type="password" defaultValue="" onChange={(e) => setPassword(e.target.value)}/>
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                
                <Link className='text-blue-400' href='/admin/forgot_pass' >Mot de passe oublié?</Link>
              </Stack>
              <Button
                onClick={()=> loginFunction()}
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}>
                S&apos;identifier
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
        </>
    );
}
 
export default Login;