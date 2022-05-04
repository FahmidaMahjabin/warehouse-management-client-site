import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const ManageItem = () => {
    const { id } = useParams();
    const [item, setItem] = useState({});
    useEffect(() => {
        axios.get(`http://localhost:5000/inventory/${id}`)
            .then(data => setItem(data.data))
    }, [])
    const { name, picture, quantity, about, balance, supplier } = item;
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
                <Button variant="primary">Delivered</Button>
            </Card.Body>
        </Card>
    );
};

export default ManageItem;