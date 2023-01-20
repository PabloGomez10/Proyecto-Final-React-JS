import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({ nombre, imagenes, precio, id }) => {   
    return (
        <div className='col'>
            <div className='card cardStyle'>
                <img src={imagenes} alt={nombre} className='card-img-top' />
                <div className='card-body'>
                    <h5 className='card-title'>{nombre}</h5>
                    <p>{precio}</p>
                    
                    <Link to={`/item/${id}`} className='btn btn_ver_mas'>Ver más</Link>
                </div>
            </div>
        </div>
    )
}

export default Item
