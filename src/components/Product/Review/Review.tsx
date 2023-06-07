import ReactCountryFlag from 'react-country-flag';
import { IReview } from '../../../interface/IReview';

import starSVG from '../../../assets/icons/star.svg';
import starOutlinedSVG from '../../../assets/icons/star-outline.svg';

const Review = (props: { review: IReview }) => (
    <div className='bg-gray-50 p-4 mt-2.5 rounded-3xl flex'>
        <img
            className='h-11 w-11 rounded-xl mr-2.5'
            src={props.review.user.avatar}
            alt={props.review.user.name}
        />
        <div>
            <h1 className='text-base font-medium'>{props.review.user.name}</h1>
            <span className='text-xs font-medium text-gray-600 whitespace-nowrap'>
                {props.review.date}
            </span>
            <div className='flex mt-2.5'>
                <ReactCountryFlag
                    countryCode={props.review.user.country}
                    svg
                    style={{
                        width: '20px',
                        height: '14px',
                    }}
                />
                <p className='ml-2.5 text-xs font-medium text-gray-600'>
                    {props.review.user.country}
                </p>
            </div>
        </div>
        <div className='ml-10'>
            <div className='flex'>
                {Array.from({ length: 5 }, (_, i) => i + 1).map((ind) => (
                    <img
                        key={ind}
                        className='h-4 w-4 mr-1'
                        src={
                            props.review.rating >= ind
                                ? starSVG
                                : starOutlinedSVG
                        }
                    />
                ))}
            </div>
            <p className='mt-2.5 text-sm font-medium'>{props.review.text}</p>
        </div>
    </div>
);

export { Review };
