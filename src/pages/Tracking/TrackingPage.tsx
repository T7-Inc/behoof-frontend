import { ProductBrief } from '../../components';

import styles from './TrackingPage.module.scss';

const TrackingPage = () => {
    // product placeholder
    const products = Array(5).fill(0);

    return (
        <div className='container mx-auto px-4 mt-5'>
            <h1 className='text-2xl font-semibold'>Tracking</h1>
            <p className='text-base text-cool-gray'>
                Slots are used for tracking. Each slot can fit one tracked item.
            </p>
            <div className='flex flex-wrap justify-between'>
                <div
                    className={`${styles.card} bg-blue-50 py-5 px-5 rounded-xl mt-4`}>
                    <h2 className='font-semibold'>
                        Trackin slots usage:{' '}
                        <span className='text-blue-700'>18%</span>
                    </h2>
                    <div className='width-full h-3 bg-white rounded mt-5'>
                        <div
                            className='h-3 rounded bg-blue-700'
                            style={{ width: '18%' }}></div>
                    </div>
                </div>
                <div
                    className={`${styles.card} bg-blue-50 py-5 px-5 rounded-xl mt-4`}>
                    <h1 className='font-bold text-xl'>57</h1>
                    <h2 className='font-semibold mt-1'>Slots left</h2>
                </div>
                <div
                    className={`${styles.card} bg-blue-50 py-5 px-5 rounded-xl mt-4`}>
                    <h1 className='font-bold text-xl'>23</h1>
                    <h2 className='font-semibold mt-1'>Slots used</h2>
                </div>
                <div
                    className={`${styles.card} bg-blue-50 py-5 px-5 rounded-xl mt-4`}>
                    <h1 className='font-bold text-xl'>80</h1>
                    <h2 className='font-semibold mt-1'>
                        Slots available in yout subscription
                    </h2>
                </div>
            </div>
            <div className='flex flex-wrap mt-2 justify-between'>
                {products.map((val, ind) => (
                    <ProductBrief
                        key={ind}
                        className='mt-4 w-5/12'
                        type='tracking'
                        product={{ tracking: Math.random() < 0.5 }}
                    />
                ))}
            </div>
        </div>
    );
};

export { TrackingPage };
