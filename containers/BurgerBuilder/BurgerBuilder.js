import React, { Component } from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControl/BuildControls';
import Modal from '../../components/Modal/Modal';
import Aux from '../../components/hoc/Aux';
import withErrorHandler from '../../components/hoc/withErrorHandler'
import axios from '../../axios';
import Spinner from '../../components/Layout/spinner'
import OrderSummary from '../../components/Modal/OrderSummary';

const INGREDIENT_PRICES = {
        salad: 0.8,
        bacon: 1.7,
        cheese: 2.3,
        meat: 1,
}
class BurgerBuilder extends Component{
    state = {
        ingredients : null,
        totalPrice: 0,
        purchasable: false,
        orderSummary: false,
        loading: false,
        error: false,
    }


    orderSummary = () =>{
        this.setState({
            orderSummary:true
        })
    }

    orderCancel = () => {
        this.setState({
            orderSummary: false
        })
    }

    orderContinue = () => {
        this.setState({loading:true})
        const data = {
            ingredients: this.state.ingredients,
            price: this.state.totalPrice,
            customer:{
                name: 'Igboanugwo Collins',
                address:{
                    zipcode: '453005',
                    street: 'testingstreet 2',
                    country: 'Germany'
                },
                email: 'testing@test.com'
            },
            deliveryMethod: 'fastest'
        }
        axios.post('/orders.json', data)
        //alert('You continued!!')
        .then(response => {
            this.setState({loading:false, orderSummary: false})
        })
        .catch(error => {
            this.setState({loading:false, orderSummary: false})
        })
    }

    componentDidMount(){
        axios.get('https://my-react-burger-1ce01.firebaseio.com/ingredients.json')
        .then(res => {
            console.log(res)
            this.setState({
                ingredients: res.data
            })
        }).catch(error => {
            this.setState({error:true})
        })
    }
    orderbtn = (newIng) =>{
        // const orderIng = Object.keys(newIng).map(igkey => {
        //     return newIng[igkey]
        //   }
        // )
        // .reduce((orderIng, el) => {
        //     return orderIng + el
        // },0)

        const orderIng = Object.values(newIng)
        .reduce((orderIng, el) => {
                return orderIng + el
            },0)
    
        this.setState({
            purchasable: orderIng > 0,
        })
    }

    addIngredient = (type) => {
        const oldIngredient = this.state.ingredients[type];
        const transformedIng = oldIngredient + 1;
        const newIng = {
            ...this.state.ingredients
        };
        newIng[type] = transformedIng;

        const oldPrice = INGREDIENT_PRICES[type];
        const prices = this.state.totalPrice;
        const newPrice = prices + oldPrice;
        this.setState({
            ingredients:newIng,
            totalPrice: newPrice,
        })
        this.orderbtn(newIng)
    }

    removeIngredient = (type) => {
        const oldIngredient = this.state.ingredients[type];
        if(oldIngredient <= 0){
            return;
        }
        const transformedIng = oldIngredient - 1;
        const newIng = {
            ...this.state.ingredients
        };
        newIng[type] = transformedIng;

        const oldPrice = INGREDIENT_PRICES[type];
        const prices = this.state.totalPrice;
        const newPrice = prices - oldPrice;
        this.setState({
            ingredients:newIng,
            totalPrice: newPrice,
        })
        this.orderbtn(newIng)

    }
    
    
    render(){
       let ingDisabled = {...this.state.ingredients};
       for(let ing in ingDisabled){
           ingDisabled[ing] = ingDisabled[ing] <= 0
       }
       let totalSummary = null;

       let burger = this.state.error ? <p>ingredients can't be loaded</p>: <div style = {{textAlign: "center"}}><Spinner/></div>
       if(this.state.ingredients){
           burger = (
               <Aux>
    
              <Burger ingredients = {this.state.ingredients}/>
              <BuildControls
              disabled = {ingDisabled}
              summary = {this.orderSummary}
              purchasable = {this.state.purchasable}
              addIngredient = {this.addIngredient}
              removeIngredient = {this.removeIngredient}
              price = {this.state.totalPrice}/>;
              </Aux>
           );
              totalSummary =  <OrderSummary 
              ingredients = {this.state.ingredients}
              orderSummary = {this.state.orderSummary}
              clicked = {this.orderCancel}
              cancelled = {this.orderContinue}
              price = {this.state.totalPrice}/>;
         
        }
        if(this.state.loading){
            totalSummary = <Spinner/>
        }
        



        return ( <div>
           <Modal 
            orderSummary = {this.state.orderSummary}
            clicked = {this.orderCancel}>
               {totalSummary}
           </Modal>
           {burger}
        </div>
        )
    }
}

export default withErrorHandler(BurgerBuilder, axios);