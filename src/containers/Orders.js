import React, {Component} from 'react'
import Order from '../components/Layout/Order'
import axios from '../axios'
import withErrorHandler from '../components/hoc/withErrorHandler'

class Orders extends Component{
    state ={
        order: [],
        loading: true
    }
    componentDidMount(){
        axios.get('/orders.json')
        .then(res => {
            const fetchedOrders = []
            for(let key in res.data){
                fetchedOrders.push({
                    ...res.data[key],
                     id:key
                })
            }
            this.setState({
                order: fetchedOrders,loading: true
            })
        })
        .catch(err =>{
            this.setState({
                loading: false
            })
        })
    }
    render(){
    
        return(
            <div>
             {this.state.order.map( order =>{
                return <Order 
                    price = {order.price}
                    key = {order.id}
                    ingredients = {order.ingredients}
                />
             })
            }
            </div>
        )
    }
}

export default withErrorHandler(Orders, axios);