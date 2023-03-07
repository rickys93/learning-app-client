import React from 'react'
import { Link } from 'react-router-dom';

function Category({ name, description }) {
    return (
        <>
            <div>
                <Link to={`/categories/${id}`}>
                    <h2>{name}</h2>
                    <div>
                        {description}
                    </div>
                </Link>
            </div>
        </>
    )
}

export default Category