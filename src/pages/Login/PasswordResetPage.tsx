import {
    Button, Label, Navbar, TextInput,
} from 'flowbite-react';
import { Link } from 'react-router-dom';
import { ChangeEvent, useState } from 'react';
import { Footer } from '../../components';
import { Routes } from '../../constans';

import bg from '../../assets/auth_bg.svg';
import logo from '../../assets/logo.svg';
import arrowIcon from '../../assets/icons/arrow.svg';

import styles from './LoginPage.module.scss';

const PasswordResetPage = (props: {
    onSendResetEmail: (email: string) => void;
}) => {
    const [email, setEmail] = useState<string>('');

    const onEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const onSubmitHandler = () => {
        props.onSendResetEmail(email);
    };

    return (
        <div className={`md:flex min-h-screen ${styles.login}`}>
            <div className='container min-h-screen flex flex-col justify-between py-5'>
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
                <form className='w-3/6 max-w-full mx-auto'>
                    <Link
                        to={Routes.LOGIN}
                        replace={true}
                        className='flex items-center mb-5'>
                        <img src={arrowIcon} className='mr-2' />
                        <span className='text-basic text-blue font-medium'>
                            Back
                        </span>
                    </Link>
                    <h1 className='text-4xl font-bold mb-2'>
                        Forgot password?
                    </h1>
                    <p
                        className={`text-base text-cool-gray font-medium ${styles.lineSize}`}>
                        Enter the email address associated with your account and
                        we will send you a link to reset your password.
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
                            onChange={onEmailChange}
                        />
                    </div>

                    <Link to={Routes.CHECK_EMAIL} replace={true}>
                        <Button
                            className='bg-blue mt-5 w-full'
                            onClick={onSubmitHandler}>
                            Request password reset
                        </Button>
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
};

export { PasswordResetPage };
