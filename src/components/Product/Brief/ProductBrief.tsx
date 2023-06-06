import { Link } from 'react-router-dom';
import { IoIosArrowForward } from 'react-icons/io';
import { HiOutlineTrash } from 'react-icons/hi';
import { FiRefreshCcw } from 'react-icons/fi';
import { Badge, ToggleSwitch } from 'flowbite-react';

type BriefType = 'favorite' | 'tracking';

const ProductBrief = (props: {
    type: BriefType;
    className?: string;
    id: string;
    title: string;
    img: string;
    market: number;
    tracking?: boolean;
    onDelete: any;
}) => (
    <div className={`flex ${props.className}`}>
        <img className='h-32 w-32 rounded-2xl mr-5' src={props.img} />
        <div className='flex flex-col justify-between'>
            <div>
                <div className='flex justify-between mt-2 items-center'>
                    <Link
                        className='text-sm font-semibold text-blue-700 flex items-center'
                        to={`/product/${props.id}?market=${props.market}`}>
                        Product link
                        <IoIosArrowForward />
                    </Link>
                    {props.type === 'tracking' && (
                        <span className='flex text-cool-gray text-sm items-center'>
                            <FiRefreshCcw className='mr-2' /> 20 min ago
                        </span>
                    )}
                </div>
                <h1 className='font-semibold mt-3'>
                    {props.title}
                </h1>
            </div>
            <div className='mb-2'>
                {props.type === 'favorite' && (
                    <button
                        className={
                            'flex text-red-600 border border-solid '
                            + 'border-gray-300 rounded-xl px-3 py-2 hover:bg-red-50 hover:border-red-500'
                        }
                        onClick={props.onDelete}>
                        <HiOutlineTrash />
                        <span className='ml-2 text-xs font-semibold'>
                            Remove
                        </span>
                    </button>
                )}
                {props.type === 'tracking' && (
                    <div className='flex justify-between items-center'>
                        <div className='flex'>
                            <Badge color='gray' className='mr-2'>
                                Prices:{' '}
                                <span
                                    className={`${
                                        props.tracking
                                            ? 'text-blue-700'
                                            : 'text-cool-gray'
                                    }`}>
                                    $20-$25
                                </span>
                            </Badge>
                            <Badge color='gray'>
                                In stock:{' '}
                                <span
                                    className={`${
                                        props.tracking
                                            ? 'text-blue-700'
                                            : 'text-cool-gray'
                                    }`}>
                                    Yes
                                </span>
                            </Badge>
                        </div>
                        <div className='flex items-center'>
                            <span className='text-sm text-cool-gray mr-2'>
                                Tracking:{' '}
                            </span>
                            <ToggleSwitch
                                checked={
                                    props.tracking
                                        ? props.tracking
                                        : false
                                }
                                label=''
                                onChange={() => {}}
                            />
                        </div>
                    </div>
                )}
            </div>
        </div>
    </div>
);

export { ProductBrief };
