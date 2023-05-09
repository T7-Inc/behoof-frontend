// import styles from './FavoritesPage.module.scss';

import { ProductBrief } from '../../components';

const FavoritesPage = () => {
    // product placeholder
    const products = Array(5).fill(0);

    return (
        <div className='container mx-auto px-4 mt-5'>
            <h1 className='text-2xl font-semibold'>My favorites</h1>
            <p className='text-base text-cool-gray'>
                Here are items you've marked as favorites
            </p>
            <div className='bg-blue-50 py-5 px-5 rounded-xl mt-4'>
                <h2 className='font-semibold'>
                    Items number: <span className='text-blue-700'>16</span>
                </h2>
            </div>
            <div className='flex flex-wrap mt-2 justify-between'>
                {products.map((val, ind) => (
                    <ProductBrief
                        key={ind}
                        className='mt-4 w-5/12'
                        type='favorite'
                        product={{ tracking: Math.random() < 0.5 }}
                    />
                ))}
            </div>
        </div>
    );
};

export { FavoritesPage };
