import React, {Component} from 'react';
import { connect } from 'react-redux';
import { signUpStart } from '../../redux/user/user-actions';
import Input from '../Input/Input';
import Button from '../Button/Button';
import { auth, createUserProfileDocument } from '../../firebase/firebase';
import './SignUp.scss';

class SignUp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit = async (e) => {
        e.preventDefault();

        const { displayName, email, password, confirmPassword } = this.state;
        const { signUpStart } = this.props;

        if (password !== confirmPassword) {
            alert('Passwords don\'t match');
            return;
        }

        signUpStart({ email, password, displayName });
    };

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    render() {
        const { displayName, email, password, confirmPassword } = this.state;

        return (
            <div className='signup'>
                <h2>I do not have an account</h2>
                <span>Sign up with your email and password</span>

                <form onSubmit={this.handleSubmit} className='signup__form'>
                    <Input name='displayName' value={displayName} type='text' required handleChange={this.handleChange} label='Display Name'/>
                    <Input name='email' value={email} type='email' required handleChange={this.handleChange} label='Email'/>

                    <Input name='password' value={password} type='password' required handleChange={this.handleChange} label='Password'/>
                    <Input name='confirmPassword' value={confirmPassword} type='password' required handleChange={this.handleChange} label='Confirm Password'/>

                    {/*<div className='signin__buttons'>*/}
                        <Button type='submit'>Sign up</Button>
                    {/*</div>*/}
                </form>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    signUpStart: (userData) => dispatch(signUpStart(userData))
});

export default connect(null, mapDispatchToProps)(SignUp);
