import { useState } from "react";

import FormInput from "../form-input/form-input.component";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";

import { SignInContainer, SubHeader, ButtonsContainer } from './sign-in-form.styles.jsx';

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
        <SignInContainer>
            <SubHeader>Already have an account?</SubHeader>
            <span>Sign in with your Email and Password</span>
            <form onSubmit={handleSubmit}>

                <FormInput label="Email" required type="email" onChange={handleChange} name='email' value={email} />

                <FormInput label="Password" required type="password" onChange={handleChange} name='password' value={password} />
                <ButtonsContainer>
                    <Button type="button" onClick={handleSubmit}>Sign In</Button>
                    <Button buttonType={BUTTON_TYPE_CLASSES.google} type="button" onClick={signInWithGoogle}>Google Sign In</Button>
                </ButtonsContainer>
            </form>
        </SignInContainer>
    )
}

export default SignInForm;