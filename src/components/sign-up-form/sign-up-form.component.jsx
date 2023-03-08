import { useState } from "react";

import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

import { SignUpContainer, SubHeader } from './sign-up-form.styles.jsx';

import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";

const SignUpForm = () => {
    const defaultFormFields = {
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    };

    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            alert("Passwords do not match, try again!");
            return;
        }

        try {
            const { user } = await createAuthUserWithEmailAndPassword(email, password);
            await createUserDocumentFromAuth(user, { displayName });
            resetFormFields();
        } catch (err) {
            if (err.code === 'auth/email-already-in-use') {
                alert('Can not create user, email already in use.')
                resetFormFields();
            }
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
        <SignUpContainer>
            <SubHeader>Don't have an account?</SubHeader>
            <span>Sign up with your Email and Password</span>
            <form onSubmit={handleSubmit}>
                <FormInput label="Display Name" required type="text" onChange={handleChange} name='displayName' value={displayName} />

                <FormInput label="Email" required type="email" onChange={handleChange} name='email' value={email} />

                <FormInput label="Password" required type="password" onChange={handleChange} name='password' value={password} />

                <FormInput label="Confirm Password" required type="password" onChange={handleChange} name='confirmPassword' value={confirmPassword} />
                <Button type="submit">Sign Up</Button>
            </form>
        </SignUpContainer>
    )
}

export default SignUpForm;