import React, {Component} from 'react';
import { connect } from 'react-redux';
import Input from '../Input/Input';
import Button from '../Button/Button';
import { auth, signInWithGoogle } from '../../firebase/firebase';
import { googleSigninStart } from '../../redux/user/user-actions';
import './SignIn.scss';

class SignIn extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            password: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleSubmit = async (e) => {
        e.preventDefault();

        const { email, password } = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ email: '', password: '' });
        } catch(err) {
            console.log('Error signing in: ', err);
        }
    };

    render() {
        const { email, password } = this.state;
        const { googleSigninStart } = this.props;

        return (
            <div className='signin'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <Input name='email' value={email} type='email' required handleChange={this.handleChange} label='Email'/>

                    <Input name='password' value={password} type='password' required handleChange={this.handleChange} label='Password'/>

                    <div className='signin__buttons'>
                        <Button type='submit' classname='mr-10'>Sign in</Button>
                        <Button onClick={googleSigninStart} mod='google-signin' type='button'>
                            Sign in with Google
                        </Button>
                    </div>
                </form>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    googleSigninStart: () => dispatch(googleSigninStart())
});

export default connect(null, mapDispatchToProps)(SignIn);
