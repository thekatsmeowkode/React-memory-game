import React from 'react'

export default function TarotCard(props) {

    return (
    <div className='card-container'>
        <img src={props.imageFile} alt={`{${props.cardName}}`}></img>
    </div>)
}