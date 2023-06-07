// import styles from './FavoritesPage.module.scss';

import { useDispatch, useSelector } from 'react-redux';
import { ProductBrief } from '../../components';
import { RootState } from '../../store';
import { favActions } from '../../store/slices/favorite-slice';

const FavoritesPage = () => {
    const products = useSelector((state: RootState) => state.fav.products);
    const dispatch = useDispatch();

    const deleteFavHandler = (id: string) => {
        dispatch(favActions.removeFav(id));
    };

    return (
        <div className='container mx-auto px-4 mt-5'>
            <h1 className='text-2xl font-semibold'>My favorites</h1>
            <p className='text-base text-cool-gray'>
                Here are items you've marked as favorites
            </p>
            <div className='bg-blue-50 py-5 px-5 rounded-xl mt-4'>
                <h2 className='font-semibold'>
                    Items number: <span className='text-blue-700'>{products.length}</span>
                </h2>
            </div>
            <div className='flex flex-wrap mt-2 justify-between'>
                {products.map((val, ind) => (
                    <ProductBrief
                        key={ind}
                        className='mt-4 w-5/12'
                        type='favorite'
                        id={val.id}
                        title={val.title}
                        img={val.img}
                        market={val.market}
                        onDelete={deleteFavHandler.bind(null, val.id)}
                    />
                ))}
            </div>
        </div>
    );
};

export { FavoritesPage };
