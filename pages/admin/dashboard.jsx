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
        list = list.filter((e)=>e.message.toLowerCase().indexOf(element.toLowerCase()) > -1)
        setData(list)
    }
    return ( 
        <>
            <div className="row">
            <div className="col-1">
                    <button className="btn btn-danger mt-5" onClick={()=>setData([...data].reverse())} >reverse</button>
                </div>
                <div className="col-1">
                    <input className="form-control" type="search" onChange={(e) => search(e.target.value)}/>

                </div>    
                <div className="col-1">
                    <button className="btn btn-danger mt-5" onClick={() => logout()}>logout</button>
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
                <table className="table table-bordered w-100">
                <thead className="w-100 table-secondary">
                  <tr>
                    <th>#</th>
                    <th>Nom</th>
                    <th>Prenom</th>
                    <th>Email</th>
                    <th>Code postal</th>
                    <th>Adresse</th>
                    <th>Ville</th>
                    <th>Natel</th>
                    <th>Sujet</th>
                    <th>Message</th>
                    <th onClick={()=>setData([...data].reverse())}>Date</th>
                    <th>Terminé</th>
                    <th>Marqué Terminée</th>
                  </tr>
                </thead>
                <tbody className="w-100">
                {data.map((e, index) =>
                    <tr key={index}>
                        <td>{index}</td>
                        <td>{e.nom} </td>
                        <td>{e.prenom}</td>
                        <td>{e.email}</td>
                        <td>{e.code_postal}</td>
                        <td>{e.adresse}</td>
                        <td>{e.ville}</td>
                        <td>{e.natel}</td>
                        <td>{e.sujet}</td>
                        <td>{e.message}</td>
                        <td>{moment(e.createdAt).format('MMMM Do YYYY, h:mm:ss a')}</td>
                        <td>
                            {
                                e.is_done ? <Badge bg="success" className="table-secondary">OUI</Badge> : <Badge bg="danger">NON</Badge>
                            }
                        </td>
                        <td><Button onClick={() => update(e._id)}>
                                update
                            </Button></td>
                    </tr>
                )}
                </tbody>
              </table>
                
            }

             
         
        </>

     );
     
}
 
export default Dashboard;