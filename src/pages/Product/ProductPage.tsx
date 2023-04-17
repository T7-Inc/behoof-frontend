import { useParams } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import {
    Badge, Button, Tabs, TabsRef,
} from 'flowbite-react';
import { Gallery, OffersTable, Review } from '../../components';
import { IProduct } from '../../interface';

import heartSVG from '../../assets/icons/heart.svg';
import heartOutlinedSvg from '../../assets/icons/heart-outline.svg';
import starSVG from '../../assets/icons/star.svg';
import starOutlinedSVG from '../../assets/icons/star-outline.svg';

import styles from './ProductPage.module.scss';
import { ProductStatuses } from '../../constans';

const ProductPlaceholder = {
    id: 1,
    name:
        'Japanese Anime Kawaii Y2k Canvas Bag Cute Women Bag Cartoon '
        + 'Ulzzang Large Capacity Harajuku Shoulder Bags Ins Women Shopper Bags',
    priceMin: 1.45,
    priceMax: 12.99,
    description:
        'Introducing the "GlowPro" LED Light Therapy Mask - the ultimate'
        + ' solution for achieving radiant, youthful-looking skin. This innovative '
        + 'beauty device harnesses the power of red and blue LED lights to improve skin '
        + ' texture, reduce the appearance of fine lines and wrinkles, and combat acne and '
        + ' other blemishes. The mask is easy to use and fits comfortably on any face shape, '
        + 'with adjustable straps for a secure fit. Simply wear for 10-20 minutes a day to see '
        + 'visible results in as little as 4 weeks. With its sleek design and powerful technology,'
        + ' the GlowPro LED Light Therapy Mask is the perfect addition to your daily skincare routine.',
    shipping: '5-7 days',
    imageUrls: [
        'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg',
        'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg',
        'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg',
        'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg',
        'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg',
        'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg',
        'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg',
    ],
    tags: ['Shopping bags', 'Shoulder bags', 'Cotton bags'],
    offers: [
        {
            id: 1,
            shop: {
                id: 1,
                name: 'AliExpress',
                img:
                    'https://upload.wikimedia.org/wikipedia/commons/thumb/'
                    + '3/3b/Aliexpress_logo.svg/1280px-Aliexpress_logo.svg.png',
                rating: '8.4/10',
                country: 'CN',
            },
            shippingPrice: 0.6,
            price: 1.45,
            status: ProductStatuses.AVAILABLE,
            url: '/',
        },
        {
            id: 2,
            shop: {
                id: 1,
                name: 'AliExpress',
                img:
                    'https://upload.wikimedia.org/wikipedia/commons/thumb/6/'
                    + '62/Amazon.com-Logo.svg/240px-Amazon.com-Logo.svg.png',
                rating: '8.4/10',
                country: 'US',
            },
            shippingPrice: 0.6,
            price: 1.45,
            status: ProductStatuses.OUT_OF_STOCK,
            url: '/',
        },
    ],
    isFavorite: false,
    totalRank: 4.8,
    reviews: [
        {
            id: 1,
            user: {
                id: 1,
                name: 'Test user',
                country: 'UA',
                avatar:
                    'https://cdn.pixabay.com/photo/2015/10/05'
                    + '/22/37/blank-profile-picture-973460_960_720.png',
            },
            rating: 4,
            date: 'December 7, 2022',
            text:
                'I recently tried the "SuperClean" all-purpose cleaner '
                + 'and I am beyond impressed with its cleaning power. It effortlessly '
                + 'removed stubborn stains and grime from my kitchen countertops, bathroom '
                + "tiles, and even my car's upholstery. Not only does it clean effectively, "
                + 'but it also has a refreshing scent that leaves my home smelling clean and '
                + "fresh. Plus, I love that it's environmentally friendly and free from harsh chemicals.",
        },
        {
            id: 2,
            user: {
                id: 1,
                name: 'Test user',
                country: 'AU',
                avatar:
                    'https://cdn.pixabay.com/photo/2015/10/05'
                    + '/22/37/blank-profile-picture-973460_960_720.png',
            },
            rating: 5,
            date: 'December 7, 2022',
            text:
                'I recently tried the "SuperClean" all-purpose cleaner '
                + 'and I am beyond impressed with its cleaning power. It effortlessly '
                + 'removed stubborn stains and grime from my kitchen countertops, bathroom '
                + "tiles, and even my car's upholstery. Not only does it clean effectively, "
                + 'but it also has a refreshing scent that leaves my home smelling clean and '
                + "fresh. Plus, I love that it's environmentally friendly and free from harsh chemicals.",
        },
    ],
};

const ProductPage = () => {
    const { id } = useParams();
    const [product, setProduct] = useState<IProduct>();
    const [activeTab, setActiveTab] = useState<number>(0);
    const tabsRef = useRef<TabsRef>(null);

    useEffect(() => {
        // send request to get product
        if (id) {
            setProduct(ProductPlaceholder);
        }
    }, [id]);

    const offersTabTitle = (
        <div className={'flex'}>
            <p>Offers</p>
            <Badge
                className='ml-1 !rounded-full'
                color={activeTab === 0 ? 'info' : 'gray'}>
                {product?.offers.length}
            </Badge>
        </div>
    );

    const reviewsTabTitle = (
        <div className={'flex'}>
            <p>Reviews</p>
            <Badge
                className='ml-1 !rounded-full'
                color={activeTab === 2 ? 'info' : 'gray'}>
                {product?.reviews.length}
            </Badge>
        </div>
    );

    return (
        <div className={`container mx-auto px-4 mt-5 ${styles.productPage}`}>
            {product && (
                <>
                    <div className='flex flex-col items-center lg:flex-row'>
                        <div className='mr-16'>
                            <Gallery imgs={product.imageUrls} />
                        </div>
                        <div className='mt-5 lg:mt-0'>
                            <h1 className='text-2xl font-semibold text-cool-gray-900 max-w-prose'>
                                {product.name}
                            </h1>
                            <div className='flex mt-5'>
                                {product.tags.map((tag) => (
                                    <Badge
                                        key={tag}
                                        className='mr-3'
                                        color='gray'>
                                        {tag}
                                    </Badge>
                                ))}
                            </div>
                            <p className='text-base font-semibold text-gray-700 mt-5'>
                                Offers: {product.offers.length}
                            </p>
                            <p className='text-base font-semibold text-gray-700'>
                                Shipping: {product.shipping}
                            </p>
                            <p className='text-base font-semibold mt-5'>
                                Prices:
                            </p>
                            <p className='text-3xl font-semibold text-gray-700'>
                                ${product.priceMin} - ${product.priceMax}
                            </p>
                            <div className='flex mt-5'>
                                <Button className='bg-blue mr-2' size='lg'>
                                    Track product
                                </Button>
                                <Button
                                    color='light'
                                    size='lg'
                                    className='border border-solid border-cool-gray-200'>
                                    <img
                                        src={
                                            product.isFavorite
                                                ? heartSVG
                                                : heartOutlinedSvg
                                        }
                                        className='h-6'
                                        alt='Add to favorites'
                                        style={{
                                            filter:
                                                'invert(45%) sepia(30%) saturate(1799%) '
                                                + ' hue-rotate(320deg) brightness(95%) contrast(97%)',
                                        }}
                                    />
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.tabs} mt-5`}>
                        <Tabs.Group
                            aria-label='Default tabs'
                            style='default'
                            ref={tabsRef}
                            onActiveTabChange={(tab) => setActiveTab(tab)}>
                            <Tabs.Item active title={offersTabTitle}>
                                <OffersTable offers={product.offers} />
                            </Tabs.Item>
                            <Tabs.Item title='Description'>
                                <h1 className='text-3xl font-semibold'>
                                    Product description
                                </h1>
                                <p className='text-base font-medium mt-2.5'>
                                    {product.description}
                                </p>
                            </Tabs.Item>
                            <Tabs.Item title={reviewsTabTitle}>
                                <div className='bg-gray-50 p-4 rounded-3xl'>
                                    <h1 className='text-3xl font-semibold'>
                                        Total rank
                                    </h1>
                                    <div className='flex'>
                                        <h2 className='text-5xl font-bold text-blue-500'>
                                            {product.totalRank}/5
                                        </h2>
                                        <div className='flex ml-5'>
                                            {Array.from(
                                                { length: 5 },
                                                (_, i) => i + 1,
                                            ).map((ind) => (
                                                <img
                                                    key={ind}
                                                    className='mr-2.5'
                                                    src={
                                                        product?.totalRank
                                                        >= ind
                                                            ? starSVG
                                                            : starOutlinedSVG
                                                    }
                                                />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                {product.reviews.map((review) => <Review key={review.id} review={review} />)}
                            </Tabs.Item>
                        </Tabs.Group>
                    </div>
                </>
            )}
        </div>
    );
};

export { ProductPage };
