import {
    ChangeEvent, KeyboardEvent, FC, useState,
} from 'react';
import {
    Navbar, Dropdown, Avatar, TextInput,
} from 'flowbite-react';
import { useNavigate } from 'react-router-dom';
import { NotificationIcon } from './NotificationIcon/NotificationIcon';

import logo from '../../../assets/logo.svg';
import trackIcon from '../../../assets/icons/tracking.svg';
import heartIcon from '../../../assets/icons/heart.svg';
import searchIcon from '../../../assets/icons/search.svg';
import styles from './Header.module.scss';

const Header: FC = () => {
    const [search, setSearch] = useState('');
    const navigate = useNavigate();

    const onChangeSearchHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    };

    const onSubmitHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            navigate(`/products?search=${encodeURIComponent(search)}`);
        }
    };

    return (
        <header className='container mx-auto px-4 pb-2 sticky top-0 z-10 mt-0'>
            <Navbar fluid={true} className={styles.header}>
                <Navbar.Brand href='/'>
                    <img src={logo} className='h-9 mr-2' alt='Behoof Logo' />
                    <span className='self-center uppercase text-xl font-bold'>
                        Behoof
                    </span>
                </Navbar.Brand>
                <div className='flex md:order-2'>
                    <Dropdown
                        arrowIcon={false}
                        inline={true}
                        label={
                            <Avatar
                                className={`mr-2 md:mr-0 ${styles.avatar}`}
                                alt='User settings'
                                img='https://flowbite.com/docs/images/people/profile-picture-5.jpg'
                                rounded={true}
                            />
                        }>
                        <Dropdown.Header>
                            <span className='block text-sm'>Bonnie Green</span>
                            <span className='block truncate text-sm font-medium'>
                                name@flowbite.com
                            </span>
                        </Dropdown.Header>
                        <Dropdown.Item>Profile</Dropdown.Item>
                        <Dropdown.Item>Subscription</Dropdown.Item>
                        <Dropdown.Item>Settings</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item>Sign out</Dropdown.Item>
                    </Dropdown>
                    <Navbar.Toggle />
                </div>
                <Navbar.Collapse className={`${styles.collapse}`}>
                    <div
                        className={`block ${styles.input} md:w-1/2 mb-2 md:mb-0`}>
                        <TextInput
                            id='search'
                            type='text'
                            placeholder='Search'
                            sizing='md'
                            value={search}
                            onChange={onChangeSearchHandler}
                            onKeyDown={onSubmitHandler}
                        />
                        <img src={searchIcon} alt='search' />
                    </div>
                    <div className='block md:flex'>
                        <Navbar.Link href='/' className='w-screen md:w-auto'>
                            <div className='flex md:flex-col items-center'>
                                <img
                                    src={trackIcon}
                                    className='h-6 mr-2 md:mr-0'
                                />
                                <span>Tracking</span>
                            </div>
                        </Navbar.Link>
                        <Navbar.Link
                            href='/favorites'
                            className='w-screen md:w-auto'>
                            <div className='flex md:flex-col items-center'>
                                <img
                                    src={heartIcon}
                                    className='h-6 mr-2 md:mr-0'
                                />
                                <span>Favorites</span>
                            </div>
                        </Navbar.Link>
                        <Navbar.Link href='/' className='w-screen md:w-auto'>
                            <div className='flex md:flex-col items-center'>
                                <NotificationIcon count={1} />
                                <span>Notifications</span>
                            </div>
                        </Navbar.Link>
                    </div>
                </Navbar.Collapse>
            </Navbar>
        </header>
    );
};

export { Header };
