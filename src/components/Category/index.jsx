import React from 'react'
import { Link } from 'react-router-dom';

function Category({ name, description }) {
    return (
        <>
            <div>
                <h2>{name}</h2>
                <div>
                    {description}
                </div>
            </div>
        </>
    )
}

export default Category