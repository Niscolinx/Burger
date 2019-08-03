import React, { Component } from 'react'

class Order extends Component {
    deleteOrder = (id) => {


    }
    render() {
        let ingredients = []

        for (let ingredientName in this.props.ingredients) {
            ingredients.push({
                name: ingredientName,
                amount: this.props.ingredients[ingredientName]
            })
        }
        const ingredientArr = ingredients.map((ig, i) => {
            return <span key={i} className='orderArr' onClick={console.log('just clicked the delete button')}>{ig.name} ({ig.amount})</span>
        })
        let style = {
            fontWeight: '400'
        }

        return (
            < div >
                <div className='order'>
                    <button onClick={this.deleteOrder} className='deleteOrder'>X</button>
                    <h3 style={style}>Ingredients: {ingredientArr}</h3>
                    <h3 style={style}> Price: <span style={{ fontWeight: '700' }}>USD {parseFloat(this.props.price).toFixed(2)}</span> </h3>
                </div>
            </div >
        )
    }
}

export default Order;