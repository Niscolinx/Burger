import React, { Component } from 'react'

import Button from '../components/Modal/Button'
import Input from '../components/Layout/Input'
import { connect } from 'react-redux'
import * as actions from '../store/actions/burgerIndex'
import Spinner from '../components/Layout/spinner'


class Auth extends Component {
    
    state = {
        control: {
            email: {
                elementType: 'input',
                config: {
                    type: 'text',   
                    placeholder: 'Mail address'
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
        },
        
        isLogin: true,
    }


    componentDidUpdate() {
        
        if (this.props.auth) {
            this.props.totalPrice > 4 ?
                this.props.history.push('/Checkout') : this.props.history.push('/')
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
        this.props.onInitAuth(this.state.control.email.value, this.state.control.password.value, this.state.isLogin)
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
    toggleLogin = () => {

        this.setState(prevState => {
            this.props.history.push(!prevState.isLogin ? '/Auth/login' : '/Auth/register')
            return {
                isLogin: !prevState.isLogin,
            }
        })
    }
    render() {


        let elementTypeArr = []
        for (let key in this.state.control) {
            elementTypeArr.push({
                id: key,
                config: this.state.control[key]
            })
        }

        let errorMessage;
        if (this.props.error) {
            errorMessage = this.props.error
        }
        else{
            errorMessage = ''
        }
        
        

        let form = <div className='contactForm'>
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
        </div>
        let spinner;
        if (this.props.loading) {
            spinner = <Spinner />
        }

        return (
            <div className='loginForm'>
                {errorMessage}
                <form onSubmit={this.loginButton}>
                    {form}
                    <Button
                        btnType={this.buttonProps()}>submit
                    </Button>
                </form>
                <Button clicked={this.toggleLogin}> switch to {this.state.isLogin ? 'SignUp' : 'Login'}</Button>
                <div style={{ textAlign: 'center' }}>
                    {spinner}
                </div>
            </div>
        )
    }

}
const mapStateToProps = state => {
    return {
        loading: state.auth.loading,
        error: state.auth.error,
        auth: state.auth.tokenId,
        totalPrice: state.burger.totalPrice
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onInitAuth: (email, password, isLogin) => dispatch(actions.initAuth(email, password, isLogin))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth);