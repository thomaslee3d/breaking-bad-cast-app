import React from 'react'

const CharacterGrid = ({items, isLoading }) => {
    return isLoading ? 
    (<h1>Loading ... </h1>) : (<sections className="cards">
        {items.map((item) => ( 
            <h1>{item.name}</h1>
        ))}
    </sections>
    )
}
export default CharacterGrid
