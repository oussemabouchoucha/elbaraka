import {
    Button,
    FormControl,
    Flex,
    Heading,
    Input,
    Stack,
    Text,
    useColorModeValue,
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
  } from '@chakra-ui/react';
import Link from 'next/link';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useState } from 'react';
  type ForgotPasswordFormInputs = {
    email: string;
  };
const Forgot_pass = () => {
    const router = useRouter();
    const [email, setEmail] = useState()
    const [message, setMessage] = useState()
    const forgetFunction = async () => {
      const res_ax = await axios({
        url : 'http://localhost:5000/users/forgotPassword', 
        method: 'post',
        data:{
          email: email
        }
      }).then(res => {setMessage(res.data.message)
        localStorage.setItem("email", email || "")
        if(res.data.message == "Code reset password sent"){
          router.push("/admin/VerifyEmail")
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
      <Stack
        spacing={4}
        w={'full'}
        maxW={'md'}
        bg={useColorModeValue('white', 'gray.700')}
        rounded={'xl'}
        boxShadow={'lg'}
        p={6}
        my={12}>
            {
          message ? <>
          {
            message == "Code reset password sent" ? <Alert status='success'>
            <AlertIcon />
            <AlertTitle>{message}</AlertTitle>
          </Alert> : <Alert status='error'>
            <AlertIcon />
            <AlertTitle>{message}</AlertTitle>
            </Alert> 
          }
          </> : <></>
        }
        <Heading lineHeight={1.1} fontSize={{ base: '2xl', md: '3xl' }}>
          Forgot your password?
        </Heading>
        <Text
          fontSize={{ base: 'sm', sm: 'md' }}
          color={useColorModeValue('gray.800', 'gray.400')}>
          You&apos;ll get an email with a reset link
        </Text>
        <FormControl id="email">
          <Input
            onChange={(e: any)=> setEmail(e.target.value)}
            placeholder="your-email@example.com"
            _placeholder={{ color: 'gray.500' }}
            type="email"
          />
        </FormControl>
        <Stack spacing={6}>
          <Button
            onClick={() => forgetFunction()}
            bg={'blue.400'}
            color={'white'}
            _hover={{
              bg: 'blue.500',
            }}>
            Request Reset
          </Button>
        </Stack>
      </Stack>
    </Flex>
        </>
     );
}
 
export default Forgot_pass;