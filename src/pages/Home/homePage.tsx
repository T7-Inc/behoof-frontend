import React, { FC, useEffect, useState } from 'react';
import axios from 'axios';
import { Carousel } from 'flowbite-react';
import { ProductBadge } from '../../components';

import bannerImg1 from '../../assets/bannerImg/banner1.png';
import fireIcon from '../../assets/icons/fire.svg';
import styles from './HomePage.module.scss';

interface ProductSearchResult {
    marketplaceIndex: number;
    imageUrl: string;
    title: string;
    priceUSD: number;
    productId: string;
    url: string;
}

const HomePage: FC = () => {
    const [products, setProducts] = useState<[ProductSearchResult]>();

    useEffect(() => {
        axios
            .get(
                `${process.env.REACT_APP_API_URL}/api/Products/Search?page=1&query=xiomi`,
                {
                    headers: {
                        'Access-Control-Allow-Origin': 'http://localhost:3000',
                        'Access-Control-Allow-Methods':
                            'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                    },
                },
            )
            .then((res) => {
                setProducts(res.data);
            });
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
                    <div className='flex h-full items-center bg-gray-500 bg-cyan-700 px-20 text-white'>
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
                                src={bannerImg1}
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
                <div className={styles.grid}>
                    {products?.map((product) => (
                        <ProductBadge
                            className='mt-2.5'
                            key={product.productId}
                            img={product.imageUrl}
                            title={product.title}
                            price={product.priceUSD}
                        />
                    ))}
                </div>
            </section>
        </div>
    );
};

export { HomePage };
