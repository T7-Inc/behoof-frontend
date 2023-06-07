import { useState } from 'react';
import {
    Button, Label, Navbar, TextInput,
} from 'flowbite-react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { Footer } from '../../components';
import { Routes } from '../../constans';

import bg from '../../assets/auth_bg.svg';
import logo from '../../assets/logo.svg';
import arrowIcon from '../../assets/icons/arrow.svg';

import styles from './SignupPage.module.scss';

const SignupFormPage = () => {
    const [email, setEmail] = useState<string>('');
    const [name, setName] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [isPasswordValid, setIsPasswordValid] = useState<boolean>(true);

    const navigate = useNavigate();

    const emailChangeHandler = (e: any) => {
        setEmail(e.target.value);
    };

    const nameChangeHandler = (e: any) => {
        setName(e.target.value);
    };

    const passwordChangeHandler = (e: any) => {
        setPassword(e.target.value);
    };

    const submitHandler = (e: any) => {
        e.preventDefault();

        const regularExpression = /^(?=.*[0-9])(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{4,}$/;

        const passwordValidity = regularExpression.test(password);
        setIsPasswordValid(passwordValidity);
        if (!passwordValidity) return;

        const user = {
            email,
            username: email,
            password,
            firstName: name.split(' ')[0],
            lastName: name.split(' ')[1],
            currency: 'usd',
            country: 'us',
        };
       
        axios
            .post(`${process.env.REACT_APP_API_URL}/api/User/Register`, user)
            .then(() => {
                navigate('/login');
            });
    };

    return (
        <div className={`md:flex min-h-screen ${styles.signup}`}>
            <div className='container min-h-screen  min-w-max flex flex-col justify-between py-5'>
                <Navbar fluid={true} className='mx-auto w-5/6 mb-5'>
                    <Navbar.Brand href='/'>
                        <img
                            src={logo}
                            className='h-9 mr-2'
                            alt='Behoof Logo'
                        />
                        <span className='self-center uppercase text-xl font-bold'>
                            Behoof
                        </span>
                    </Navbar.Brand>
                </Navbar>
                <form
                    className='w-3/6 min-w-max mx-auto'
                    onSubmit={submitHandler}>
                    <Link
                        to={Routes.SIGNUP_METHOD}
                        replace={true}
                        className='flex items-center mb-5'>
                        <img src={arrowIcon} className='mr-2' />
                        <span className='text-basic text-blue font-medium'>
                            Back
                        </span>
                    </Link>
                    <h1 className='text-4xl font-bold mb-2'>
                        Create your account
                    </h1>
                    <p className='text-base text-cool-gray font-medium'>
                        Enter your personal info.
                    </p>
                    <div className='mt-5'>
                        <div className='mb-2 block'>
                            <Label
                                className='text-base'
                                htmlFor='email1'
                                value='E-mail'
                            />
                        </div>
                        <TextInput
                            id='email1'
                            type='email'
                            placeholder='name@mail.com'
                            value={email}
                            onChange={emailChangeHandler}
                            required={true}
                        />
                    </div>
                    <div className='mt-5'>
                        <div className='mb-2 block'>
                            <Label
                                className='text-base'
                                htmlFor='fullname'
                                value='Full name'
                            />
                        </div>
                        <TextInput
                            id='fullname'
                            type='text'
                            placeholder='Boris Johnson'
                            required={true}
                            value={name}
                            onChange={nameChangeHandler}
                        />
                    </div>
                    <div className='mt-5'>
                        <div className='mb-2 block'>
                            <Label
                                className='text-base'
                                htmlFor='phone'
                                value='Phone number'
                            />
                        </div>
                        <TextInput
                            id='phone'
                            type='text'
                            placeholder='+(XXX) XXX XXX XXX'
                            required={true}
                        />
                    </div>
                    <div className='mt-5'>
                        <div className='mb-2 block'>
                            <Label
                                className='text-base'
                                htmlFor='password1'
                                value='Your password'
                            />
                        </div>
                        <TextInput
                            id='password1'
                            type='password'
                            placeholder='••••••••••'
                            required={true}
                            value={password}
                            onChange={passwordChangeHandler}
                        />
                        {!isPasswordValid && (
                            <span className='text-red-500 mt-1 text-xs'>
                                Password must contain atleast one uppercase,
                                number and special character
                            </span>
                        )}
                    </div>

                    <Button className='bg-blue mt-5 w-full' type='submit'>
                        Sign up
                    </Button>
                </form>
                <Footer className='mx-auto !w-5/6' />
            </div>
            <img
                className={`min-h-screen object-cover hidden md:block ${styles.bgImg}`}
                src={bg}
                alt='bg'
            />
        </div>
    );
};

export { SignupFormPage };
