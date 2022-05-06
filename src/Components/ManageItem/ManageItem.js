import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const ManageItem = () => {
    const { id } = useParams();
    const [item, setItem] = useState({});
    const { name, picture, quantity, about, balance, supplier } = item;
    
    useEffect(() => {
        axios.get(`http://localhost:5000/inventory/${id}`)
            .then(data => setItem(data.data))
    }, [item])
    const deliverItem = ()=>{
        console.log("devivered called");
        
        if (quantity >1){
            // axios(
            // {   
            //     method: "PUT",
            //     url:  `http://localhost:5000/inventory/${id}`,
            //     body: {quantity: 1}
            // } 
           
            // )
            axios.put(`http://localhost:5000/inventory/${id}`)
            .then(res =>{
                console.log("res received client:", res);
                

            } )
        }
        else{
            alert("quantity can't be negative")
        }    
    }
    
    return (
        <Card className = "text-center mx-auto my-5" style = {{width:"500px"}}>
            <Card.Img variant="top" src={picture} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    <h5>Price:{balance}</h5>
                    <h5>quantity:{quantity}</h5>
                    <h5>Supplier:{supplier}</h5>
                    <p>Description:{about}</p>
                </Card.Text>
                <Button variant="primary" onClick = {deliverItem} >Delivered</Button>
            </Card.Body>
        </Card>
    );
};

export default ManageItem;