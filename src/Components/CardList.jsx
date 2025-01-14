import React from 'react'
import Card from './Card'

function CardList({ dentists }) {
    return (
        <div className="card-grid">
            {dentists.map((dentist) =>
                (
                    <Card
                        key={dentist.id}
                        id={dentist.id}
                        name={dentist.name}
                        username={dentist.username}
                    />
                )
            )}
        </div>
    )
}

export default CardList

