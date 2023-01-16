import React from 'react'
import CreateProduct from '../../components/CreateProduct';
// import { Form, Container } from 'react-bootstrap';
// import { Button, Card, Accordion,Badge } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
import MainScreen from '../../components/MainScreen';



const MyProducts = () => {

    return (
        <MainScreen title='Welcome Back Pablo...'>
            <div className="App">
                <CreateProduct />
            </div>
        </MainScreen>
        
);
};

export default MyProducts;