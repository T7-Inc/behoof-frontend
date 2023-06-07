import React, { FC, useEffect, useState } from 'react';
import axios from 'axios';
import { Carousel, Spinner } from 'flowbite-react';
import { useNavigate } from 'react-router-dom';
import { ProductBadge } from '../../components';

import bannerImg1 from '../../assets/bannerImg/banner1.png';
import bannerImg2 from '../../assets/bannerImg/banner2.png';
import fireIcon from '../../assets/icons/fire.svg';
import styles from './HomePage.module.scss';
import { IProductSearchResult } from '../../interface';

const HomePage: FC = () => {
    const [products, setProducts] = useState<[IProductSearchResult]>();
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        navigate('/');
        setIsLoading(true);
        axios
            .get(
                `${process.env.REACT_APP_API_URL}/api/Products/Search?page=1&query=xiomi`,
            )
            .then((res) => {
                setProducts(res.data);
            }).finally(() => setIsLoading(false));
    }, []);

    return (
        <div className='container mx-auto px-4'>
            <div className='h-64 sm:h-80 xl:h-96 2xl:h-96 rounded-2xl overflow-hidden'>
                <Carousel slideInterval={5000}>
                    <div className='flex h-full items-center bg-rose-400 px-20 text-white justify-between'>
                        <div className='w-2/4'>
                            <h1 className='text-xl md:text-3xl mb-2 lg:text-5xl font-bold'>
                                Best sales and discounts
                            </h1>
                            <span className='text-lg md:text-2xl lg:text-3xl'>
                                International shopping day
                            </span>
                        </div>
                        <div className='w-2/4'>
                            <img
                                className='hover:scale-110 duration-500'
                                src={bannerImg1}
                            />
                        </div>
                    </div>
                    <div className='flex h-full items-center bg-gray-500 bg-sky-300 px-20 text-white'>
                        <div className='w-2/4'>
                            <h1 className='text-xl md:text-3xl lg:text-5xl mb-2 font-bold'>
                                Best sales and discounts
                            </h1>
                            <span className='text-lg md:text-2xl lg:text-3xl'>
                                International shopping day
                            </span>
                        </div>
                        <div className='w-2/4'>
                            <img
                                className='hover:scale-110 duration-500'
                                src={bannerImg2}
                            />
                        </div>
                    </div>
                </Carousel>
            </div>

            <section className='mt-5'>
                <div className='flex'>
                    <h1 className='text-2xl font-semibold mr-2'>Hot and new</h1>
                    <img src={fireIcon} alt='hot' />
                </div>
                {isLoading && <div className='flex w-full justify-center items-center h-80'>
                    <Spinner
                        aria-label='Extra large spinner example'
                        size='xl'
                    />
                </div>}
                <div className={styles.grid}>
                    {!isLoading
                        && products?.map((product) => (
                            <ProductBadge
                                className='mt-2.5'
                                key={product.productId}
                                id={product.productId}
                                img={product.imageUrl}
                                title={product.title}
                                price={product.priceUSD}
                                marketplace={product.marketplaceIndex}
                            />
                        ))}
                </div>
            </section>
        </div>
    );
};

export { HomePage };
