import React from 'react'

const Order = (props) => {
    let ingredients = []

    for (let ingredientName in props.ingredients) {
        ingredients.push({
            name: ingredientName,
            amount: props.ingredients[ingredientName]
        })
    }
    const ingredientArr = ingredients.map((ig, i) => {
        return <span key={i} className='orderArr'>{ig.name} ({ig.amount})</span>
    })
    let style = {
        fontWeight: '400'
    }

    return (
        <div>
            <div className='order'>
                <button onClick={props.clicked} className='deleteOrder'>X</button>
                <h3 style={style}>Ingredients: {ingredientArr}</h3>
                <h3 style={style}> Price: <span style={{ fontWeight: '700' }}>USD {parseFloat(props.price).toFixed(2)}</span> </h3>
            </div>
        </div>
    )

}

export default Order;