import React, { useState } from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';


const CreateProduct = (props) => {
    
    const [ name, setName ] = useState("");
    const [ price, setPrice ] = useState("");
    const [ description, setDescription ] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();

    axios.post("http://localhost:5000/api/products",{
        name, 
        price, 
        description
    })

    .then((res) => {
        
        console.log(res);
        console.log(res.data);
        
        setName("");
        setPrice("");
        setDescription("");
    })
    
    .catch((err) => {
        console.log(err);
    })
    }
    return (
        <div className='content-section'>
                <header className='legend'>PM Store</header>
                    <form onSubmit = { submitHandler }>
                        <Form.Group className="mb-3">
                            <Form.Label>Name</Form.Label>
                            <Form.Control onChange= {(e)  => setName(e.target.value)} type="text" placeholder="Enter item" value={ name } name="name"/>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Price</Form.Label>
                            <Form.Control onChange= {(e)  => setPrice(e.target.value)} type="number" placeholder="$100" value={ price } name="price"/>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Description</Form.Label>
                            <Form.Control onChange= {(e)  => setDescription(e.target.value)} type="textarea" placeholder="description" value={ description } name="description"/>
                        </Form.Group>
                        <input className = "submit-input" type='submit' value="Add" />'
                    </form>
            
        </div>
    );
};

export default CreateProduct;