import { Center, Heading } from '@chakra-ui/react';
import {
  Button,
  FormControl,
  Flex,
  Stack,
  useColorModeValue,
  HStack,
  Input
} from '@chakra-ui/react';
import { PinInput, PinInputField } from '@chakra-ui/react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';


export default function VerifyEmailForm() {
  const [message, setMessage] = useState()
  const [password, setPassword] = useState()
  const [status, setStatus] = useState("")
  const [mail, setMail] = useState("")
  const [code1, setCode1] = useState("")
  const [code2, setCode2] = useState("")
  const [code3, setCode3] = useState("")
  const [code4, setCode4] = useState("")
  const router = useRouter();
  useEffect(()=>{
    setMail(localStorage.getItem("email") || "")
  },[])
  const verif =async () => {
    const email = localStorage.getItem("email")
    const code = code1 + code2 + code3 + code4
    console.log(code)
    const res_ax = await axios({
      url : 'http://localhost:5000/users/verifCode', 
      method: 'post',
      data:{
        email: email,
        code: code
      }
    }).then(res => {
      setMessage(res.data.message)
      setStatus(res.data.status)
    })
  }

  const change =async () => {
    const email = localStorage.getItem("email")
    const res_ax = await axios({
      url : 'http://localhost:5000/users/changePassword', 
      method: 'patch',
      data:{
        email: email,
        password: password
      }
    }).then(res => {
     if (res.data.status =="success"){
      router.push("/admin")
     }
    })
  }
  return (
    <>
    {
      status=="success" ? <>
      <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}>
      <Stack
        spacing={4}
        w={'full'}
        maxW={'sm'}
        rounded={'xl'}
        boxShadow={'lg'}
        p={6}
        my={10}>
        <Center>
          <Heading lineHeight={1.1} fontSize={{ base: '2xl', md: '3xl' }}>
            Change password
          </Heading>
        </Center>
        <Center
          fontSize={{ base: 'sm', sm: 'md' }}>
          New password for this email
        </Center>
        <Center
          fontSize={{ base: 'sm', sm: 'md' }}
          fontWeight="bold">
          {mail}
        </Center>
        <FormControl>
          <Center>
          <FormControl id="newpassword">
          <Input
            onChange={(e)=> setPassword(e.target.value)}
            _placeholder={{ color: 'gray.500' }}
            type="password"
          />
        </FormControl>
          </Center>
        </FormControl>
        <Stack spacing={6}>
          <Button
            bg={'blue.400'}
            color={'white'}
            _hover={{
              bg: 'blue.500',
            }}
            onClick={()=> change()}
            >
            Change password
          </Button>
        </Stack>
      </Stack>
    </Flex>
      </>:
      <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}>
      <Stack
        spacing={4}
        w={'full'}
        maxW={'sm'}
        rounded={'xl'}
        boxShadow={'lg'}
        p={6}
        my={10}>
        <Center>
          <Heading lineHeight={1.1} fontSize={{ base: '2xl', md: '3xl' }}>
            Verify your Email
          </Heading>
        </Center>
        <Center
          fontSize={{ base: 'sm', sm: 'md' }}>
          We have sent code to your email
        </Center>
        <Center
          fontSize={{ base: 'sm', sm: 'md' }}
          fontWeight="bold">
          {mail}
        </Center>
        <FormControl>
          <Center>
            <HStack>
              <PinInput>
                <PinInputField onChange={(e)=> setCode1(e.target.value)} />
                <PinInputField onChange={(e)=> setCode2(e.target.value)}/>
                <PinInputField onChange={(e)=> setCode3(e.target.value)}/>
                <PinInputField onChange={(e)=> setCode4(e.target.value)}/>
              </PinInput>
            </HStack>
          </Center>
        </FormControl>
        <Stack spacing={6}>
          <Button
            bg={'blue.400'}
            color={'white'}
            _hover={{
              bg: 'blue.500',
            }}
            onClick={()=> verif()}
            >
            Verify
          </Button>
        </Stack>
      </Stack>
    </Flex>
    }
  </>
  );
}