import React from 'react';
import Item from '../Item/Item'

const ItemList = ({ data }) => {
    return (
        <div className='container'>
            <div className='row justify-content-evenly'>
                {data.map((i) => (<Item item={i} nombre={i.nombre} key={i.id} id={i.id} imagenes={i.imagenes} precio={i.precio}/>))}
            </div>
        </div>
    )
}

export default ItemList