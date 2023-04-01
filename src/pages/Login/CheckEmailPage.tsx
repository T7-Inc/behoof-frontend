import { Button, Navbar } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { Footer } from '../../components';
import { Routes } from '../../constans';

import bg from '../../assets/auth_bg.svg';
import logo from '../../assets/logo.svg';
import arrowIcon from '../../assets/icons/arrow.svg';

import styles from './LoginPage.module.scss';

const CheckEmailPage = (props: {resendEmail?: string}) => (
    <div className={`md:flex min-h-screen ${styles.login}`}>
        <div className='container min-h-screen flex flex-col justify-between py-5'>
            <Navbar fluid={true} className='mx-auto w-5/6 mb-5'>
                <Navbar.Brand href='/'>
                    <img src={logo} className='h-9 mr-2' alt='Behoof Logo' />
                    <span className='self-center uppercase text-xl font-bold'>
                        Behoof
                    </span>
                </Navbar.Brand>
            </Navbar>
            <form className='w-3/6 max-w-full mx-auto'>
                <h1 className='text-4xl font-bold mb-2'>Check email</h1>
                <p
                    className={`text-base text-cool-gray font-medium ${styles.lineSize}`}>
                    We sent an email to {props.resendEmail}
                </p>
                <p
                    className={`text-base text-cool-gray font-medium mt-5 ${styles.lineSize}`}>
                    Please follow the instructions in email to reset your
                    password
                </p>

                <Button className='bg-blue mt-5 w-full'>
                    Resend reset email
                </Button>
                <Link
                    to={Routes.LOGIN}
                    replace={true}
                    className='flex items-center mt-5'>
                    <img src={arrowIcon} className='mr-2' />
                    <span className='text-basic text-blue font-medium'>
                        Back to Sign in
                    </span>
                </Link>
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

export { CheckEmailPage };
