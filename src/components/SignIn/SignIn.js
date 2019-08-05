import React, {Component} from 'react';
import { connect } from 'react-redux';
import Input from '../Input/Input';
import Button from '../Button/Button';
import { googleSigninStart, emailSigninStart } from '../../redux/user/user-actions';
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

        const { emailSigninStart } = this.props;
        const { email, password } = this.state;

        emailSigninStart(email, password);
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
    googleSigninStart: () => dispatch(googleSigninStart()),
    emailSigninStart: (email, password) => dispatch(emailSigninStart({ email, password }))
});

export default connect(null, mapDispatchToProps)(SignIn);
