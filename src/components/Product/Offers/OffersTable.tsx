import { Badge } from 'flowbite-react';
import { IOffer } from '../../../interface';

const OffersTable = (props: { offers: Array<IOffer> }) => {
    console.log(props.offers);

    return (
        <div className='relative overflow-x-auto'>
            <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
                <thead
                    className={
                        'text-xs text-gray-700 uppercase '
                        + 'bg-gray-50 dark:bg-gray-700 dark:text-gray-400'
                    }>
                    <tr>
                        <th scope='col' className='px-6 py-3'>
                            Item
                        </th>
                        <th scope='col' className='px-6 py-3'>
                            Sellers rating
                        </th>
                        <th scope='col' className='px-6 py-3'>
                            Shipping
                        </th>
                        <th scope='col' className='px-6 py-3'>
                            Price
                        </th>
                        <th scope='col' className='px-6 py-3'>
                            Total price
                        </th>
                        <th scope='col' className='px-6 py-3'>
                            Status
                        </th>
                        <th scope='col' className='px-6 py-3'>
                            URL
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {props.offers?.map((offer) => (
                        <tr
                            key={offer.imgUrl}
                            className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
                            <td className='px-6 py-4'>
                                <img
                                    className='w-40'
                                    src={offer.imgUrl}
                                    alt={offer.imgUrl}
                                />
                            </td>
                            <td className='px-6 py-4'>{offer.sellerRating}</td>
                            <td className='px-6 py-4 text-lg font-bold text-black'>
                                ${offer.shippingPrice || 0}
                            </td>
                            <td className='px-6 py-4 text-lg font-bold text-black'>
                                ${offer.productPrice || 0}
                            </td>
                            <td className='px-6 py-4 text-lg font-bold text-blue-500'>
                                ${offer.totalPrice || 0}
                            </td>
                            <td className='px-6 py-4'>
                                <Badge
                                    color={
                                        offer.available ? 'success' : 'failure'
                                    }
                                    className=''>
                                    {offer.available
                                        ? 'In stock'
                                        : 'Out of stock'}
                                </Badge>
                            </td>
                            <td className='px-6 py-4 text-blue-500 font-semibold underline'>
                                <a href={offer.sellerUrl} target='_blank'>
                                    Click here for redirecting
                                </a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export { OffersTable };
