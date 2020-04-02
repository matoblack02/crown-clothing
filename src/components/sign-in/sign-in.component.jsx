import React from 'react'
import './sign-in.styles.scss'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import {signInWithGoogle} from '../../firebase/firebase.utils'

class SignIn extends React.Component {
    constructor(props){
        super()
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = event =>{
        event.preventDefault()
        this.setState({email:'', password:''})
    }

    handleChange = event =>{
        const {value, name} = event.target
        this.setState({[name]:value})
    }

    render(){
        return (
            <div className='sign-in'>
                <h1>I already have an Account</h1>
                <span>Sign in with your email an password</span>

                <form onsubmit={this.handleSubmit}>
                    <FormInput 
                        type='email' 
                        name='email' 
                        value={this.state.email} 
                        handleChange={this.handleChange} 
                        label='email' 
                        required />
                    <FormInput 
                        type='password' 
                        name='password' 
                        value={this.state.password} 
                        handleChange={this.handleChange} 
                        label='password' 
                        required />
                    <div className='buttons'>
                        <CustomButton type='submit'>sign in</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>{' '}
                    sign in with google{' '}</CustomButton>
                    </div>
                    
                </form>
            </div>
        )
    }
}

export default SignIn