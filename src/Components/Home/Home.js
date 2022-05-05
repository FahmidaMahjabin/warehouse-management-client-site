import React, { useEffect } from 'react';
import Banner from './Banner/Banner';
import GetNavbar from './Navbar/Navbar';
import axios from 'axios';
import {useState } from 'react';
import Inventory from '../Inventory/Inventory';

const Home = () => {
    const [items, setItems] = useState([]);
    useEffect(
        () =>{axios.get("http://localhost:5000/inventory")
    .then(data =>{
        // console.log("items:", data.data)
        setItems(data.data);
        }
        )
        }, [])

    console.log("items:", items)
    return (
        <div>
            
            <GetNavbar></GetNavbar>
            <Banner></Banner>
            <div className = "row m-5">
                {items?.map((item) => {return <Inventory  item = {item}></Inventory>})}
            </div>

        </div>
    );
};

export default Home;