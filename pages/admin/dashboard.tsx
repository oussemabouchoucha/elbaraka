import axios from "axios";
import Link from "next/link";
import { Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import {
    Alert,
    AlertIcon,
    AlertTitle,
  } from '@chakra-ui/react'
import * as React from 'react';

const dashboard = () => {
    const [data, setData] = useState([]);
    const [message, setMessage] = useState("");

    const getData = async () => {
        const { data } = await axios.get(`http://localhost:5000/devis/getAll`);
        if(data.status){
            setMessage("Veuillez vous connecter pour obtenir des données !")
        }else{
            setData(data);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    const update = async (id: any) =>{
        await axios.patch(`http://localhost:5000/devis/update/${id}`, {
            headers: {
                "Content-Type": "application/json",
            },
        });
    };
    
    return ( 
        <>
        
            {
                message.length > 0 ? 
                <>
                    <Alert status='error'>
                        <AlertIcon />
                        <AlertTitle>{message}</AlertTitle>
                    </Alert>
                    <div>
                        <Link className='text-blue-400' href="/admin" >Lien pour se connecter.</Link>
                    </div>
                </> : 
                data.map((e: any,index: number) =>
                    <div key={index}> 
                        {e.nom} 
                        <Button onClick={() => update(e._id)}
                        >
                            update
                        </Button>
                    </div>
                )
            }
         
        </>

     );
     
}
 
export default dashboard;