import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from 'next/router';
import { Button } from "react-bootstrap";
import moment from "moment";
import 'moment/locale/fr'
import Badge from 'react-bootstrap/Badge';
import {
    Alert,
    AlertIcon,
    AlertTitle,
    Input,
    Table,
    TableContainer,
    Thead,
    Tr,
    Th,
    Tbody,
    Td,
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverArrow,
    PopoverCloseButton,
    Tabs,
    TabPanels,
    TabPanel,
    Flex,
  } from '@chakra-ui/react'

const Dashboard = () => {
    moment.locale('fr')
    const router = useRouter();
    const [data, setData] = useState([]);
    const [dataAux, setDataAux] = useState([]);
    const [message, setMessage] = useState();
    const logout = () =>{
        localStorage.setItem("login", "false")
        router.push('/admin')
    }
    const getData = async () => {
        const { data } = await axios.get(`http://localhost:5000/devis/getAll`);
        const permission = await localStorage.getItem("login")
        if(!permission || permission === "false"){
            setMessage("Veuillez vous connecter pour obtenir des données !")
            router.push("/admin")
        }else{
            setDataAux(data.reverse());
            setData(data.reverse());
        }
    };

    useEffect(() => {
        getData();
    },[]);

    const update = async (id) =>{
        await axios.patch(`http://localhost:5000/devis/update/${id}`, {
            headers: {
                "Content-Type": "application/json",
            },
        });
        let list = [...dataAux]
        const found = list.findIndex(element => element._id == id );
        const item = list.find(element => element._id == id );
        item.is_done = true;
        list[found] = item;
        setData(list)
        setDataAux(list)
    };

    const search = (element) =>{
        let list = [...dataAux]
        list = list.filter((e)=>e.message.toLowerCase().indexOf(element.toLowerCase()) > -1 || e.nom.toLowerCase().indexOf(element.toLowerCase()) > -1)
        setData(list)
    }
    return ( 
        <>
       
            <div className='d-flex justify-content-around'>
            <div >
                    <button className="btn btn-primary mt-5" onClick={()=>setData([...data].reverse())} >Inverser par date</button>
                </div>
                <div >
                    <Input placeholder='Recherche' className="form-control mt-5"  type="search" onChange={(e) => search(e.target.value)}/>

                </div>    
                <div >
                    <Button className="btn btn-danger mt-5 d-flex justify-content-end" onClick={() => logout()}>Se déconnecter</Button>
                </div>
            </div>
            
            
            
            
        
            {
                message ? 
                <>
                
                    <Alert status='error'>
                        <AlertIcon />
                        <AlertTitle>{message}</AlertTitle>
                    </Alert>
                    
                </> : 
                
                <TableContainer>
                <Table variant='simple'>
                <Thead>
                    
                  <Tr>
                    <Th>#</Th>
                    <Th>Nom</Th>
                    <Th>Prenom</Th>
                    <Th>Email</Th>
                    <Th>Code postal</Th>
                    <Th>Adresse</Th>
                    <Th>Ville</Th>
                    <Th>Natel</Th>
                    <Th>Produit</Th>
                    <Th>Message</Th>
                    <Th onClick={()=>setData([...data].reverse())}>Date</Th>
                    <Th>Terminé</Th>
                    <Th>Marqué Terminée</Th>
                  </Tr>
                </Thead>
                <Tbody className="w-100">
                {data.map((e, index) =>
                    <Tr key={index}>
                        <Td>{index+1}</Td>
                        <Td>{e.nom} </Td>
                        <Td>{e.prenom}</Td>
                        <Td>{e.email}</Td>
                        <Td>{e.code_postal}</Td>
                        <Td>{e.adresse}</Td>
                        <Td>{e.ville}</Td>
                        <Td>{e.natel}</Td>
                        <Td><textarea name="" id="" cols="24" >
                    {e.produit}
                    </textarea></Td>
                        <Td >
                        <Flex justifyContent="center" mt={4}>
        <Popover placement="bottom" isLazy>
          <PopoverTrigger>
            <Button
              className="btn btn-secondary">
              Voir
            </Button>
          </PopoverTrigger>
          <PopoverContent _focus={{ boxShadown: 'none' }}>
            <PopoverArrow />
            <PopoverCloseButton />
            <PopoverHeader fontWeight="bold">MESSAGE</PopoverHeader>
            <PopoverBody w="full">
              <Tabs isLazy colorScheme="green">
               
                <TabPanels >
                  <TabPanel>
                    <textarea name="" id="" cols="28" rows="10">
                    {e.message}
                    </textarea>
                    
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </PopoverBody>
          </PopoverContent>
        </Popover>
      </Flex>
                            </Td>
                         
                        <Td>{moment(e.createdAt).format('MMMM Do YYYY, h:mm:ss a')}</Td>
                        <Td>
                            {
                                e.is_done ? <Badge bg="success" className="table-secondary">OUI</Badge> : <Badge bg="danger">NON</Badge>
                            }
                        </Td>
                        <Td><Button onClick={() => update(e._id)}>
                        mettre à jour
                            </Button></Td>
                    </Tr>
                    
                )}
                </Tbody>
              </Table>
              </TableContainer>
            }

             
         
        </>

     );
     
}
 
export default Dashboard;