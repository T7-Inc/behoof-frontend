import { useSelector, useDispatch } from 'react-redux';

import { ProductBrief } from '../../components';
import { RootState } from '../../store';

import styles from './TrackingPage.module.scss';
import { trackActions } from '../../store/slices/track-slice';

const TrackingPage = () => {
    const products = useSelector((state: RootState) => state.track.products);
    const dispatch = useDispatch();

    const deleteTrackHandler = (id: string) => {
        dispatch(trackActions.removeTrack(id));
    };

    return (
        <div className='container mx-auto px-4 mt-5'>
            <h1 className='text-2xl font-semibold'>Tracking</h1>
            <p className='text-base text-cool-gray'>
                Slots are used for tracking. Each slot can fit one tracked item.
            </p>
            <div className={styles.grid}>
                <div
                    className={`${styles.card} bg-blue-50 py-5 px-5 rounded-xl mt-4`}>
                    <h2 className='font-semibold'>
                        Trackin slots usage:{' '}
                        <span className='text-blue-700'>{(80 / 100) * products.length}%</span>
                    </h2>
                    <div className='width-full h-3 bg-white rounded mt-5'>
                        <div
                            className='h-3 rounded bg-blue-700'
                            style={{ width: `${(80 / 100) * products.length}%` }}></div>
                    </div>
                </div>
                <div
                    className={`${styles.card} bg-blue-50 py-5 px-5 rounded-xl mt-4`}>
                    <h1 className='font-bold text-xl'>{80 - products.length}</h1>
                    <h2 className='font-semibold mt-1'>Slots left</h2>
                </div>
                <div
                    className={`${styles.card} bg-blue-50 py-5 px-5 rounded-xl mt-4`}>
                    <h1 className='font-bold text-xl'>{products.length}</h1>
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
                        id={val.id}
                        title={val.title}
                        img={val.img}
                        market={val.market}
                        tracking={true}
                        onDelete={deleteTrackHandler.bind(null, val.id)}
                    />
                ))}
            </div>
        </div>
    );
};

export { TrackingPage };
