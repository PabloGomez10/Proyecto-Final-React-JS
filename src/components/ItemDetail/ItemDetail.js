import React, { useState,useContext } from 'react'

import ItemCount from '../ItemCount/ItemCount'
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const ItemDetail = ({ item }) => {
    const [cantidad, setCantidad] = useState(0);

    const {addItem} = useContext(CartContext)    

    const handleOnAdd = (count) =>{ 
        setCantidad(count) 
        console.log(`Se agregaron: "${count}" de items del producto: ${item.nombre}`)
        addItem(item, count)
        };

    return (
        <div className='container detailsStyle'>
            <h1 className='text-center text-black' >{item.nombre}</h1>
            <div className='row'>
                <div className='col'>
                    <img src={item.imagenes} className='card-img-top img-fluid rounded mx-auto d-block' alt={item.nombre} />
                </div>
                <div className='col ItemDetailBG'>
                    <h3>DESCRIPCION:</h3>
                    <p>{item.descripcion}</p>
                    <br />
                    
                    <h3>PRECIO: {item.precio}</h3>
                    <hr />
                    <br />
                    <br />
                    <br />
                    <ItemCount stock={item.stock} initial={1} onAdd={handleOnAdd} />
                    <br />
                    <div className="row">
                    {cantidad>0&& <Link to="/cart" className='btn btn-danger'>Finalizar compra</Link>}
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default ItemDetail