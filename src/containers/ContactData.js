import React, {Component} from 'react'

import Button from '../components/Modal/Button'
import axios from '../axios'
import Spinner from  '../components/Layout/spinner'
import Form from '../components/Layout/Form'

class ContactData extends Component{
  state = {
    orderForm:{
      name: {
        elementType: 'input',
        config:{
          type: 'text',
          placeholder: 'Your Name'
        },
        value: '',
        validation : {
          required: true
        },
        valid: false,
        isTouched: false
      },
      zipcode: {
        elementType: 'input',
        config:{
          type: 'text',
          placeholder: 'Zip Code'
        },
        value: '',
        validation : {
          required: true,
          minLength: 5,
          maxLength:6
        },
        valid: false,
        isTouched: false
      },
      street: {
        elementType: 'input',
        config:{
          type: 'textarea',
          placeholder: 'Your Street'
        },
        value: '',
        validation : {
          required: true
        },
        valid: false,
        isTouched: false
      },
      country: {
        elementType: 'input',
        config:{
          type: 'text',
          placeholder: 'Your Country'
        },
        value: '',
        validation : {
          required: true
        },
        valid: false,
        isTouched: false
      },
      email: {
        elementType: 'input',
        config:{
          type: 'email',
          placeholder: 'Your Email'
        },
        value: '',
        validation : {
          required: true
        },
        valid: false,
        isTouched: false
      },
      deliveryMethod: {
        elementType: 'select',
        config: {
          options: [
            {value: 'fastest', displayValue: 'Fastest'},
            {value: 'normal', displayValue: 'Normal'},
            {value: 'cheapest', displayValue: 'Cheapest'},
          ]
        },
        value: '',
        validation: {},
        veryValid: []
      }
    }
  }

  checkValidity (value, rules){
    let isValid = true
    if(rules.required){
      isValid = value.trim() !== '' && isValid
    }
    if(rules.minLength){
      isValid = value.length >= rules.minLength && isValid
    }
    if(rules.maxLength){
      isValid = value.length <= rules.maxLength && isValid
    }
    return isValid
  }
  

  nameHandler = (e, id) => {
    const updatedOrderForm = {...this.state.orderForm}
    const updatedKeys = {...updatedOrderForm[id]}
    updatedKeys.value = e.target.value
    updatedKeys.valid = this.checkValidity(updatedKeys.value, updatedKeys.validation)
    updatedKeys.isTouched = true
    updatedOrderForm[id] = updatedKeys

    this.setState({
      orderForm:updatedOrderForm
    })
  }
  priceHandler = (e) => {
    this.setState({
      price:e.target.value
    })
  }

  orderedBurger = (e) => {
    e.preventDefault()
    this.setState({ loading: true });
    let orderData = {}
    for(let formValue in this.state.orderForm){
      orderData[formValue] = this.state.orderForm[formValue].value
    }
    const data = {
      ingredients: this.props.ingredients,
      price: this.props.totalPrice,
      contactform: orderData
    };
      axios
      .post("/orders.json", data)
      //alert('You continued!!')
      .then(response => {
        this.setState({ loading: false, timeLoader: true });
        if(this.state.timeLoader){
           this.props.history.push('/')
        }
      })
      .catch(error => {
        this.setState({ loading: false });
      });
      
    }

    buttonProps = () => {
        let buttonProps = 'disAbled'
        let disabledArr = []
        let buttonKeys = {...this.state.orderForm}
        for(let ifValid in buttonKeys){
          if(buttonKeys[ifValid].valid === true){
            disabledArr.push(ifValid)
          }
          if(disabledArr.length === 5){
            buttonProps = 'Success'
          }
        }
        return buttonProps
      }
      
    
    render(){
      
      let elementTypeArr = []
      for(let key in this.state.orderForm){
        elementTypeArr.push({
          id: key,
          config: this.state.orderForm[key]
        })
      }
        let form = ''
        if(this.state.loading){
            form = <Spinner/>
        }
        else{
            form = <form className = 'contactForm'>
            {elementTypeArr.map(elementType => {
              return <Form
               isTouched = {elementType.config.isTouched}
               validate = {elementType.config.valid}
               key = {elementType.id}
               config = {elementType.config.config}
               inputtype = {elementType.config.elementType}
               value = {elementType.config.value}
               changed = {(e) => this.nameHandler(e,elementType.id)}
               />

            })}
            <Button 
            btnType = {this.buttonProps()}
            clicked = {this.orderedBurger}>ORDER NOW</Button>
            </form>
        }
            
        return(
            <div className ='contactData'>
            <h3>Please enter your details below</h3>
            {form}
            </div>
        )
    }
}

export default ContactData;