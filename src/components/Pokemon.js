import React from 'react'
import { Link } from 'react-router-dom'

const Pokemon = ({id, image, name, type, _callback }) => {
    const style = type + " thumb-container";
    return (
        <>
        <div className='col-md-2 col-sm-6 col-6 m-0 p-2'>
             <div className={style}>
            <div className="number"><small>#0{id}</small></div>
            <img src={image} alt={name} />
            <div className="detail-wrapper">
                <h3>{name}</h3>
                <small>Type: {type}</small>
                <Link className='abtn' to={`/pokemon/${name}`}>
                Show More
                </Link>
            </div>
        </div>
        </div>
        </>
    )
}

export default Pokemon
