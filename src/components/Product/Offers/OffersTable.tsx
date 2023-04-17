import { Badge } from 'flowbite-react';
import ReactCountryFlag from 'react-country-flag';
import { IOffer } from '../../../interface';
import { ProductStatuses } from '../../../constans';

const OffersTable = (props: { offers: Array<IOffer> }) => (
    <div className='relative overflow-x-auto'>
        <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
            <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
                <tr>
                    <th scope='col' className='px-6 py-3'>
                        Shop
                    </th>
                    <th scope='col' className='px-6 py-3'>
                        Country
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
                {props.offers.map((offer) => (
                    <tr
                        key={offer.id}
                        className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
                        <td className='px-6 py-4'>
                            <img
                                className='w-40'
                                src={offer.shop.img}
                                alt={offer.shop.name}
                            />
                        </td>
                        <td className='px-6 py-4'>
                            <ReactCountryFlag
                                countryCode={offer.shop.country}
                                svg
                                style={{
                                    width: '20px',
                                    height: '14px',
                                }}
                            />
                        </td>
                        <td className='px-6 py-4'>{offer.shop.rating}</td>
                        <td className='px-6 py-4 text-lg font-bold text-black'>
                            ${offer.shippingPrice}
                        </td>
                        <td className='px-6 py-4 text-lg font-bold text-black'>
                            ${offer.price}
                        </td>
                        <td className='px-6 py-4 text-lg font-bold text-blue-500'>
                            ${offer.price + offer.shippingPrice}
                        </td>
                        <td className='px-6 py-4'>
                            <Badge
                                color={
                                    offer.status === ProductStatuses.AVAILABLE
                                        ? 'success'
                                        : 'failure'
                                }
                                className=''>
                                {offer.status}
                            </Badge>
                        </td>
                        <td className='px-6 py-4 text-blue-500 font-semibold underline'>
                            <a href={offer.url} target='_blank'>
                                Click here for redirecting
                            </a>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
);

export { OffersTable };
