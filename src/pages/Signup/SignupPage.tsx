import {
    Button, Navbar,
} from 'flowbite-react';
import { Link } from 'react-router-dom';
import { Footer } from '../../components';
import { Routes } from '../../constans';

import bg from '../../assets/auth_bg.svg';
import logo from '../../assets/logo.svg';
import googleIcon from '../../assets/icons/google.svg';
import facebookIcon from '../../assets/icons/facebook.svg';

import styles from './SignupPage.module.scss';

const SignupPage = () => (
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
                <h1 className='text-4xl font-bold mb-2'>Create your account</h1>
                <p className='text-base text-cool-gray font-medium'>
                    Choose sign up method.
                </p>

                <Link to={Routes.SIGNUP_FORM}>
                    <Button className='bg-blue mt-5 w-full'>
                        Sign up with Email
                    </Button>
                </Link>
                <Button color='light' className='mt-5 w-full border-solid'>
                    <img src={googleIcon} className='mr-2' />
                    <span>Sign up with Google</span>
                </Button>
                <Button color='light' className='mt-5 w-full border-solid'>
                    <img src={facebookIcon} className='mr-2' />
                    <span>Sign up with Facebook</span>
                </Button>
                <div className='flex justify-center mt-3'>
                    <span className='text-sm font-medium text-cool-gray mr-3'>
                        Already have an account?
                    </span>
                    <Link to={Routes.LOGIN} className='text-sm text-blue font-medium'>
                        Sign in
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

export { SignupPage };
