import { Link } from 'react-router-dom';
import styles from './ProductBadge.module.scss';

const ProductBadge = (props: {
    id: string,
    img: string;
    title: string;
    price: number;
    className: string;
    marketplace: number
}) => (
    <Link to={`product/${props.id}?market=${props.marketplace}`}
        className={`${props.className} w-48 cursor-pointer ${styles.productBadge}`}>
        <div className='h-48 w-48 overflow-hidden rounded-2xl border border-neutral-200 border-solid'>
            <img
                className='object-cover h-48 w-48 duration-500'
                src={props.img}
                alt={props.title}
            />
        </div>
        <h2 className='text-xl font-semibold'>≈ ${props.price}</h2>
        <p className='font-semibold text-sm'>{props.title}</p>
    </Link>
);

export { ProductBadge };
