import {
    Button, Label, Navbar, TextInput,
} from 'flowbite-react';
import { Link } from 'react-router-dom';
import { Footer } from '../../components';
import { Routes } from '../../constans';

import bg from '../../assets/auth_bg.svg';
import logo from '../../assets/logo.svg';
import arrowIcon from '../../assets/icons/arrow.svg';

import styles from './SignupPage.module.scss';

const SignupFormPage = () => (
    <div className={`md:flex min-h-screen ${styles.signup}`}>
        <div className='container min-h-screen  min-w-max flex flex-col justify-between py-5'>
            <Navbar fluid={true} className='mx-auto w-5/6 mb-5'>
                <Navbar.Brand href='/'>
                    <img src={logo} className='h-9 mr-2' alt='Behoof Logo' />
                    <span className='self-center uppercase text-xl font-bold'>
                        Behoof
                    </span>
                </Navbar.Brand>
            </Navbar>
            <form className='w-3/6 min-w-max mx-auto'>
                <Link
                    to={Routes.SIGNUP_METHOD}
                    replace={true}
                    className='flex items-center mb-5'>
                    <img src={arrowIcon} className='mr-2' />
                    <span className='text-basic text-blue font-medium'>
                        Back
                    </span>
                </Link>
                <h1 className='text-4xl font-bold mb-2'>Create your account</h1>
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
                    />
                </div>

                <Button className='bg-blue mt-5 w-full' type='submit'>Sign up</Button>
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

export { SignupFormPage };
