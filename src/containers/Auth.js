import React, { Component } from 'react'
import Button from '../components/Modal/Button'
import Input from '../components/Layout/Input'
import { connect } from 'react-redux'
import * as actions from '../store/actions/burgerIndex'

class Auth extends Component {
    state = {
        control: {
            email: {
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
        const updatedOrderForm = {
            ...this.state.control,
            [id]: {
                ...this.state.control[id],
                value: e.target.value,
                valid: this.checkValidity(e.target.value, this.state.control[id].validation),
                isTouched: true,

            },
        }
        this.setState({
            control: updatedOrderForm
        })

    }
    loginButton = (e) => {
        e.preventDefault()
        let loginData = {}
        for (let formValue in this.state.control) {
            loginData[formValue] = this.state.control[formValue].value
        }
        this.props.onInitAuth(this.state.control.email.value, this.state.control.email.value)
    }


    buttonProps = () => {
        let buttonProps = 'disAbled loginButton'
        let disabledArr = []
        let buttonKeys = { ...this.state.control }
        for (let ifValid in buttonKeys) {
            if (buttonKeys[ifValid].valid === true) {
                disabledArr.push(ifValid)
            }
            if (disabledArr.length === 2) {
                buttonProps = 'Success loginButton'
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
                return <Input
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
const mapDispatchToProps = dispatch => {
    return {
        onInitAuth: (email, password) => dispatch(actions.initAuth(email, password))
    }
}

export default connect(null, mapDispatchToProps)(Auth);