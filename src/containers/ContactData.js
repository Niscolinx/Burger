<<<<<<< HEAD
import React, {Component} from 'react'
import {connect} from 'react-redux'

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
=======
import React, { Component } from 'react'
import { connect } from 'react-redux'

import Button from '../components/Modal/Button'
import axios from '../axios'
import Spinner from '../components/Layout/spinner'
import Form from '../components/Layout/Form'
import withErrorHandler from '../components/hoc/withErrorHandler'
import * as orderAction from '../store/actions/burgerIndex'

class ContactData extends Component {
  state = {
    orderForm: {
      name: {
        elementType: 'input',
        config: {
>>>>>>> 611a6124cd4ef3cb3c7791d08b17fa91f05b95fc
          type: 'text',
          placeholder: 'Your Name'
        },
        value: '',
<<<<<<< HEAD
        validation : {
=======
        validation: {
>>>>>>> 611a6124cd4ef3cb3c7791d08b17fa91f05b95fc
          required: true
        },
        valid: false,
        isTouched: false
      },
      zipcode: {
        elementType: 'input',
<<<<<<< HEAD
        config:{
=======
        config: {
>>>>>>> 611a6124cd4ef3cb3c7791d08b17fa91f05b95fc
          type: 'text',
          placeholder: 'Zip Code'
        },
        value: '',
<<<<<<< HEAD
        validation : {
          required: true,
          minLength: 5,
          maxLength:6
=======
        validation: {
          required: true,
          minLength: 5,
          maxLength: 6
>>>>>>> 611a6124cd4ef3cb3c7791d08b17fa91f05b95fc
        },
        valid: false,
        isTouched: false
      },
      street: {
        elementType: 'input',
<<<<<<< HEAD
        config:{
=======
        config: {
>>>>>>> 611a6124cd4ef3cb3c7791d08b17fa91f05b95fc
          type: 'textarea',
          placeholder: 'Your Street'
        },
        value: '',
<<<<<<< HEAD
        validation : {
=======
        validation: {
>>>>>>> 611a6124cd4ef3cb3c7791d08b17fa91f05b95fc
          required: true
        },
        valid: false,
        isTouched: false
      },
      country: {
        elementType: 'input',
<<<<<<< HEAD
        config:{
=======
        config: {
>>>>>>> 611a6124cd4ef3cb3c7791d08b17fa91f05b95fc
          type: 'text',
          placeholder: 'Your Country'
        },
        value: '',
<<<<<<< HEAD
        validation : {
=======
        validation: {
>>>>>>> 611a6124cd4ef3cb3c7791d08b17fa91f05b95fc
          required: true
        },
        valid: false,
        isTouched: false
      },
      email: {
        elementType: 'input',
<<<<<<< HEAD
        config:{
=======
        config: {
>>>>>>> 611a6124cd4ef3cb3c7791d08b17fa91f05b95fc
          type: 'email',
          placeholder: 'Your Email'
        },
        value: '',
<<<<<<< HEAD
        validation : {
=======
        validation: {
>>>>>>> 611a6124cd4ef3cb3c7791d08b17fa91f05b95fc
          required: true
        },
        valid: false,
        isTouched: false
      },
      deliveryMethod: {
        elementType: 'select',
        config: {
          options: [
<<<<<<< HEAD
            {value: 'fastest', displayValue: 'Fastest'},
            {value: 'normal', displayValue: 'Normal'},
            {value: 'cheapest', displayValue: 'Cheapest'},
=======
            { value: 'fastest', displayValue: 'Fastest' },
            { value: 'normal', displayValue: 'Normal' },
            { value: 'cheapest', displayValue: 'Cheapest' },
>>>>>>> 611a6124cd4ef3cb3c7791d08b17fa91f05b95fc
          ]
        },
        value: '',
        validation: {}
      }
    },
    loading: false
  }

<<<<<<< HEAD
  checkValidity (value, rules){
    let isValid = true
    if(rules.required){
      isValid = value.trim() !== '' && isValid
    }
    if(rules.minLength){
      isValid = value.length >= rules.minLength && isValid
    }
    if(rules.maxLength){
=======
  checkValidity(value, rules) {
    let isValid = true
    if (rules.required) {
      isValid = value.trim() !== '' && isValid
    }
    if (rules.minLength) {
      isValid = value.length >= rules.minLength && isValid
    }
    if (rules.maxLength) {
>>>>>>> 611a6124cd4ef3cb3c7791d08b17fa91f05b95fc
      isValid = value.length <= rules.maxLength && isValid
    }
    return isValid
  }
<<<<<<< HEAD
  

  nameHandler = (e, id) => {
    const updatedOrderForm = {...this.state.orderForm}
    const updatedKeys = {...updatedOrderForm[id]}
=======


  nameHandler = (e, id) => {
    const updatedOrderForm = { ...this.state.orderForm }
    const updatedKeys = { ...updatedOrderForm[id] }
>>>>>>> 611a6124cd4ef3cb3c7791d08b17fa91f05b95fc
    updatedKeys.value = e.target.value
    updatedKeys.valid = this.checkValidity(updatedKeys.value, updatedKeys.validation)
    updatedKeys.isTouched = true
    updatedOrderForm[id] = updatedKeys

    this.setState({
<<<<<<< HEAD
      orderForm:updatedOrderForm
=======
      orderForm: updatedOrderForm
>>>>>>> 611a6124cd4ef3cb3c7791d08b17fa91f05b95fc
    })
  }


  orderedBurger = (e) => {
    e.preventDefault()
<<<<<<< HEAD
    this.setState({ loading: true });
    let orderData = {}
    for(let formValue in this.state.orderForm){
=======
    let orderData = {}
    for (let formValue in this.state.orderForm) {
>>>>>>> 611a6124cd4ef3cb3c7791d08b17fa91f05b95fc
      orderData[formValue] = this.state.orderForm[formValue].value
    }
    const data = {
      ingredients: this.props.ingredients,
      price: this.props.totalPrice,
      contactform: orderData
    };
<<<<<<< HEAD
      axios
      .post("/orders.json", data)
      //alert('You continued!!')
      .then(response => {
        this.setState({ loading: false });
           this.props.history.push('/')
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

const mapStateToProps = state => {
  return{
    ingredients: state.ingredients,
    totalPrice: state.totalPrice
  }
}
export default connect(mapStateToProps)(ContactData);
=======
    console.log(this.props)
    this.props.onInitBurgerStart(data)

  }

  buttonProps = () => {
    let buttonProps = 'disAbled'
    let disabledArr = []
    let buttonKeys = { ...this.state.orderForm }
    for (let ifValid in buttonKeys) {
      if (buttonKeys[ifValid].valid === true) {
        disabledArr.push(ifValid)
      }
      if (disabledArr.length === 5) {
        buttonProps = 'Success'
      }
    }
    return buttonProps
  }


  render() {

    let elementTypeArr = []
    for (let key in this.state.orderForm) {
      elementTypeArr.push({
        id: key,
        config: this.state.orderForm[key]
      })
    }
    let form = ''
    if (this.props.loading) {
      form = <Spinner />
    }
    else {
      form = <form className='contactForm'>
        {elementTypeArr.map(elementType => {
          return <Form
            isTouched={elementType.config.isTouched}
            validate={elementType.config.valid}
            key={elementType.id}
            config={elementType.config.config}
            inputtype={elementType.config.elementType}
            value={elementType.config.value}
            changed={(e) => this.nameHandler(e, elementType.id)}
          />

        })}
        <Button
          btnType={this.buttonProps()}
          clicked={this.orderedBurger}>ORDER NOW</Button>
      </form>
    }

    return (
      <div className='contactData'>
        <h3>Please enter your details below</h3>
        {form}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    ingredients: state.burger.ingredients,
    totalPrice: state.burger.totalPrice,
    loading: state.order.loading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onInitBurgerStart: (data) => dispatch(orderAction.initBurgerStart(data))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(ContactData, axios));
>>>>>>> 611a6124cd4ef3cb3c7791d08b17fa91f05b95fc
