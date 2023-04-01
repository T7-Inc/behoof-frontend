import React, { FC } from 'react';
import { Carousel } from 'flowbite-react';
import { ProductBadge } from '../../components';

import bannerImg1 from '../../assets/bannerImg/banner1.png';
import fireIcon from '../../assets/icons/fire.svg';
import styles from './HomePage.module.scss';
// placeholder
const products = [
    {
        id: 1,
        name: 'Japanese Anime Kawaii Y2k Canvas Bag Cute Women Bag Cartoon Ulzzang Large Capacity',
        price: 2.4,
        img:
            'https://cdn.obag.filoblu.com/media/contentmanager/content/resized/767x/'
            + 'contentmanager/content/img%20prodotto%20720x800px%20O%20bag%20unique%20FW21.jpg',
    },
    {
        id: 2,
        name: 'Japanese Anime Kawaii Y2k Canvas Bag Cute Women Bag Cartoon Ulzzang Large Capacity',
        price: 2.4,
        img:
            'https://ae01.alicdn.com/kf/S375262439133452aa3f46de6582bcc14f/Silicone-Strap-'
            + 'For-Apple-Watch-Band-44mm-40mm-45mm-41mm-49mm-42mm-38mm-44-45-mm.jpg_220x220xz.jpg_.webp',
    },
    {
        id: 3,
        name: 'Japanese Anime Kawaii Y2k Canvas Bag Cute Women Bag Cartoon Ulzzang Large Capacity',
        price: 2.4,
        img:
            'https://ae01.alicdn.com/kf/S551ed267fcd44744a35cbe92777d7cec8/144-Style-Pokemon-'
            + 'Figure-Toys-Anime-Pikachu-Action-Figure-Model-Ornamental-Decoration-Collect-Toys-For-'
            + 'Children.jpg_220x220xz.jpg_.webp',
    },
    {
        id: 4,
        name: 'Japanese Anime Kawaii Y2k Canvas Bag Cute Women Bag Cartoon Ulzzang Large Capacity',
        price: 2.4,
        img:
            'https://cdn.obag.filoblu.com/media/contentmanager/content/resized/767x/'
            + 'contentmanager/content/img%20prodotto%20720x800px%20O%20bag%20unique%20FW21.jpg',
    },
    {
        id: 5,
        name: 'Japanese Anime Kawaii Y2k Canvas Bag Cute Women Bag Cartoon Ulzzang Large Capacity',
        price: 2.4,
        img:
            'https://cdn.obag.filoblu.com/media/contentmanager/content/resized/767x/'
            + 'contentmanager/content/img%20prodotto%20720x800px%20O%20bag%20unique%20FW21.jpg',
    },
    {
        id: 6,
        name: 'Japanese Anime Kawaii Y2k Canvas Bag Cute Women Bag Cartoon Ulzzang Large Capacity',
        price: 2.4,
        img:
            'https://cdn.obag.filoblu.com/media/contentmanager/content/resized/767x/'
            + 'contentmanager/content/img%20prodotto%20720x800px%20O%20bag%20unique%20FW21.jpg',
    },
    {
        id: 7,
        name: 'Japanese Anime Kawaii Y2k Canvas Bag Cute Women Bag Cartoon Ulzzang Large Capacity',
        price: 2.4,
        img:
            'https://cdn.obag.filoblu.com/media/contentmanager/content/resized/767x/'
            + 'contentmanager/content/img%20prodotto%20720x800px%20O%20bag%20unique%20FW21.jpg',
    },
    {
        id: 8,
        name: 'Japanese Anime Kawaii Y2k Canvas Bag Cute Women Bag Cartoon Ulzzang Large Capacity',
        price: 2.4,
        img:
            'https://cdn.obag.filoblu.com/media/contentmanager/content/resized/767x/'
            + 'contentmanager/content/img%20prodotto%20720x800px%20O%20bag%20unique%20FW21.jpg',
    },
    {
        id: 9,
        name: 'Japanese Anime Kawaii Y2k Canvas Bag Cute Women Bag Cartoon Ulzzang Large Capacity',
        price: 2.4,
        img:
            'https://cdn.obag.filoblu.com/media/contentmanager/content/resized/767x/'
            + 'contentmanager/content/img%20prodotto%20720x800px%20O%20bag%20unique%20FW21.jpg',
    },
    {
        id: 10,
        name: 'Japanese Anime Kawaii Y2k Canvas Bag Cute Women Bag Cartoon Ulzzang Large Capacity',
        price: 2.4,
        img:
            'https://cdn.obag.filoblu.com/media/contentmanager/content/resized/767x/'
            + 'contentmanager/content/img%20prodotto%20720x800px%20O%20bag%20unique%20FW21.jpg',
    },
    {
        id: 11,
        name: 'Japanese Anime Kawaii Y2k Canvas Bag Cute Women Bag Cartoon Ulzzang Large Capacity',
        price: 2.4,
        img:
            'https://cdn.obag.filoblu.com/media/contentmanager/content/resized/767x/'
            + 'contentmanager/content/img%20prodotto%20720x800px%20O%20bag%20unique%20FW21.jpg',
    },
    {
        id: 12,
        name: 'Japanese Anime Kawaii Y2k Canvas Bag Cute Women Bag Cartoon Ulzzang Large Capacity',
        price: 2.4,
        img:
            'https://cdn.obag.filoblu.com/media/contentmanager/content/resized/767x/'
            + 'contentmanager/content/img%20prodotto%20720x800px%20O%20bag%20unique%20FW21.jpg',
    },
    {
        id: 13,
        name: 'Japanese Anime Kawaii Y2k Canvas Bag Cute Women Bag Cartoon Ulzzang Large Capacity',
        price: 2.4,
        img:
            'https://cdn.obag.filoblu.com/media/contentmanager/content/resized/767x/'
            + 'contentmanager/content/img%20prodotto%20720x800px%20O%20bag%20unique%20FW21.jpg',
    },
    {
        id: 14,
        name: 'Japanese Anime Kawaii Y2k Canvas Bag Cute Women Bag Cartoon Ulzzang Large Capacity',
        price: 2.4,
        img:
            'https://cdn.obag.filoblu.com/media/contentmanager/content/resized/767x/'
            + 'contentmanager/content/img%20prodotto%20720x800px%20O%20bag%20unique%20FW21.jpg',
    },
];

const HomePage: FC = () => (
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
                {products.map((product) => (
                    <ProductBadge
                        className='mt-2.5'
                        key={product.id}
                        img={product.img}
                        title={product.name}
                        price={product.price}
                    />
                ))}
            </div>
        </section>
    </div>
);

export { HomePage };
