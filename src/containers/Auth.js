import React, { Component } from 'react'
import Button from '../components/Modal/Button'
import Form from '../components/Layout/Form'

class Auth extends Component {
    state = {
        control: {
            name: {
                elementType: 'input',
                config: {
                    type: 'text',
                    placeholder: 'Username'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                isTouched: false
            },
            password: {
                elementType: 'input',
                config: {
                    type: 'password',
                    placeholder: 'password'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 6
                },
                valid: false,
                isTouched: false
            }
        }
    }
    checkValidity(value, rules) {
        let isValid = true
        if (rules.required) {
            isValid = value.trim() !== '' && isValid
        }
        if (rules.minLength) {
            isValid = value.length >= rules.minLength && isValid
        }
        return isValid
    }
    nameHandler = (e, id) => {
        const updatedOrderForm = { ...this.state.control }
        const updatedKeys = { ...updatedOrderForm[id] }
        updatedKeys.value = e.target.value
        updatedKeys.valid = this.checkValidity(updatedKeys.value, updatedKeys.validation)
        updatedKeys.isTouched = true
        updatedOrderForm[id] = updatedKeys

        this.setState({
            control: updatedOrderForm
        })
    }
    orderedBurger = (e) => {
        e.preventDefault()
        let loginData = {}
        for (let formValue in this.state.control) {
            loginData[formValue] = this.state.control[formValue].value
        }

    }

    buttonProps = () => {
        let buttonProps = 'disAbled'
        let disabledArr = []
        let buttonKeys = { ...this.state.control }
        for (let ifValid in buttonKeys) {
            if (buttonKeys[ifValid].valid === true) {
                disabledArr.push(ifValid)
            }
            if (disabledArr.length === 6) {
                buttonProps = 'Success'
            }
        }
        return buttonProps
    }
    render() {
        let elementTypeArr = []
        for (let key in this.state.control) {
            elementTypeArr.push({
                id: key,
                config: this.state.control[key]
            })
        }
        let form = <form className='contactForm'>
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
                clicked={this.loginButton}>Login</Button>
        </form>

        return (
            <div>
                {form}
            </div>
        )
    }
}

export default Auth;