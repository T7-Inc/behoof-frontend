import {
    Button, Checkbox, Label, Navbar, TextInput,
} from 'flowbite-react';
import { Link } from 'react-router-dom';
import { Footer } from '../../components';
import { Routes } from '../../constans';

import bg from '../../assets/auth_bg.svg';
import logo from '../../assets/logo.svg';
import googleIcon from '../../assets/icons/google.svg';
import facebookIcon from '../../assets/icons/facebook.svg';

import styles from './LoginPage.module.scss';

const LoginPage = () => (
    <div className={`md:flex min-h-screen ${styles.login}`}>
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
                <h1 className='text-4xl font-bold mb-2'>Welcome</h1>
                <p className='text-base text-cool-gray font-medium'>
                    Please enter your credentials.
                </p>
                <div className='mt-5'>
                    <div className='mb-2 block'>
                        <Label
                            className='text-base'
                            htmlFor='email1'
                            value='Your email'
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
                <div className='flex justify-between mt-5'>
                    <div className='flex items-center gap-2'>
                        <Checkbox id='remember' />
                        <Label htmlFor='remember'>Remember for 30 days</Label>
                    </div>
                    <Link to={Routes.PASSWORD_RESET} replace={true} className='text-sm text-blue font-medium'>
                        Forgot password
                    </Link>
                </div>

                <Button className='bg-blue mt-5 w-full'>Sign in</Button>
                <Button color='light' className='mt-5 w-full border-solid'>
                    <img src={googleIcon} className='mr-2' />
                    <span>Sign in with Google</span>
                </Button>
                <Button color='light' className='mt-5 w-full border-solid'>
                    <img src={facebookIcon} className='mr-2' />
                    <span>Sign in with Facebook</span>
                </Button>
                <div className='flex justify-center mt-3'>
                    <span className='text-sm font-medium text-cool-gray mr-3'>
                        Don't have an account?
                    </span>
                    <Link to={Routes.SIGNUP_METHOD} className='text-sm text-blue font-medium'>
                        Sign up
                    </Link>
                </div>
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

export { LoginPage };
