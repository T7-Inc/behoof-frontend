import { useState, MouseEvent } from 'react';
import styles from './Gallery.module.scss';

const Arrow = (props: { className?: string; onClick?: () => void }) => (
    <svg
        className={props.className}
        onClick={props.onClick}
        fill='none'
        stroke='#ffff'
        strokeWidth='1.5'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
        aria-hidden='true'>
        <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M15.75 19.5L8.25 12l7.5-7.5'></path>
    </svg>
);

const Gallery = (props: { imgs: Array<string> }) => {
    const [selectedImg, setSelectedImg] = useState(props.imgs[0]);
    const selectedImgIndex = props.imgs.findIndex((img) => img === selectedImg);

    const changeImgHandler = (e: MouseEvent<HTMLImageElement>) => {
        setSelectedImg((e.target as HTMLImageElement).src);
    };

    const changeImgMoreHandler = () => {
        if (selectedImgIndex < 5) {
            setSelectedImg(props.imgs[5]);
        } else {
            const newIndex = selectedImgIndex + 1;
            if (newIndex >= props.imgs.length) return;
            setSelectedImg(props.imgs[newIndex]);
        }
    };

    const nextImgHandler = () => {
        const nextIndx = selectedImgIndex === props.imgs.length - 1
            ? 0
            : selectedImgIndex + 1;
        setSelectedImg(props.imgs[nextIndx]);
    };

    const previousImgHandler = () => {
        const nextIndx = selectedImgIndex === 0
            ? props.imgs.length - 1
            : selectedImgIndex - 1;
        setSelectedImg(props.imgs[nextIndx]);
    };

    return (
        <div className={`grid gap-4 ${styles.gallery}`}>
            <div className='grid grid-rows-6 gap-4 w-16'>
                {props.imgs.slice(0, 5).map((imgUrl) => (
                    <div key={imgUrl}>
                        <img
                            className='h-16 w-16 rounded-lg object-cover'
                            src={imgUrl}
                            alt=''
                            onClick={changeImgHandler}
                        />
                    </div>
                ))}
                {props.imgs.length >= 6 && (
                    <div className='relative'>
                        <img
                            className='h-16 w-16 rounded-lg object-cover'
                            src={props.imgs[5]}
                            alt=''
                            onClick={changeImgHandler}
                        />
                        {props.imgs.length > 6 && (
                            <div
                                className={`${styles.moreCount} rounded-lg text-3xl font-normal`}
                                onClick={changeImgMoreHandler}>
                                +{props.imgs.length - 5}
                            </div>
                        )}
                    </div>
                )}
            </div>
            <div className='relative min-w-max'>
                <img
                    className={`h-auto max-w-full  rounded-lg ${styles.titleImg}`}
                    src={selectedImg}
                    alt=''
                />
                <span className={`${styles.badge} text-sm font-semibold`}>
                    {selectedImgIndex + 1} of {props.imgs.length}
                </span>
                <Arrow
                    className={`${styles.arrow} ${styles.arrowLeft}`}
                    onClick={previousImgHandler}
                />
                <Arrow
                    className={`${styles.arrow} ${styles.arrowRight}`}
                    onClick={nextImgHandler}
                />
            </div>
        </div>
    );
};

export { Gallery };
