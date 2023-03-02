import { useState } from "react";

import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

import './sign-in-form.styles.scss';

import { signInWithGooglePopup, signInAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils";

const SignInForm = () => {
    const defaultFormFields = {
        email: '',
        password: '',
    };

    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;

    const signInWithGoogle = async () => {
        await signInWithGooglePopup();
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await signInAuthUserWithEmailAndPassword(email, password);
            resetFormFields();
        } catch (err) {
            switch (err.code) {
                case 'auth/user-not-found':
                    alert('No user associated with that email.');
                    break;
                case 'auth/wrong-password':
                    alert('Incorrect password for that email, please try again.');
                    break;
                default:
                    console.log(err);
            }
            resetFormFields();
        }
    }

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormFields({ ...formFields, [name]: value })
    };

    return (
        <div className='sign-up-container'>
            <h2>Already have an account?</h2>
            <span>Sign in with your Email and Password</span>
            <form onSubmit={handleSubmit}>

                <FormInput label="Email" required type="email" onChange={handleChange} name='email' value={email} />

                <FormInput label="Password" required type="password" onChange={handleChange} name='password' value={password} />
                <div className='buttons-container'>
                    <Button type="button" onClick={handleSubmit}>Sign In</Button>
                    <Button buttonType='google' type="button" onClick={signInWithGoogle}>Google Sign In</Button>
                </div>
            </form>
        </div>
    )
}

export default SignInForm;