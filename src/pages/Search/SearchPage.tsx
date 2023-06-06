import {
    Accordion,
    Checkbox,
    Label,
    Pagination,
    Tabs,
    TabsRef,
} from 'flowbite-react';
import {
    useEffect, useRef, useState, MouseEvent,
} from 'react';
import { useParams } from 'react-router-dom';

import axios from 'axios';
import styles from './SearchPage.module.scss';
import { ProductBadge } from '../../components';
import { IProductSearchResult } from '../../interface';

const categories = [
    { name: 'Electronics', subCategories: ['Phones', 'TV', 'Laptops'] },
    {
        name: 'Fashion',
        subCategories: ['Dresses', 'Pants', 'Shoes', 'Accessories'],
    },
    {
        name: 'Hobbies & sport',
        subCategories: ['Musical instruments', 'Books', 'Sport equipment'],
    },
];

const SearchPage = () => {
    const { search } = useParams();
    const [products, setProducts] = useState<any>();

    // Sorting options
    const [isSortPriceASC, setIsSortPriceASC] = useState<boolean>(true);
    const tabsRef = useRef<TabsRef>(null);

    // Pagination
    const [currentPage, setCurrentPage] = useState<number>(1);

    const [chosenCategories, setChosenCategories] = useState<Array<string>>([]);

    useEffect(() => {
        axios
            .get(
                `${process.env.REACT_APP_API_URL}/api/Products/Search?page=${currentPage}&query=xiomi`,
            )
            .then((res) => {
                setProducts(res.data);
                window.scrollTo(0, 0);
            });
    }, [chosenCategories, search, currentPage]);

    useEffect(() => {
        if (!products) return;
        setProducts((prev: any) => {
            const newArr = [...prev];
            newArr.sort((item1, item2) => (isSortPriceASC
                ? item1.priceUSD - item2.priceUSD
                : (item1.priceUSD - item2.priceUSD) * -1));
            return newArr;
        });
    }, [isSortPriceASC]);

    const onCategoryChange = (e: MouseEvent<HTMLInputElement>) => {
        setChosenCategories((prev) => {
            const checkbox = e.target as HTMLInputElement;
            if (prev.includes(checkbox.value)) {
                return prev.filter((cat) => cat !== checkbox.value);
            }
            return prev.concat(checkbox.value);
        });
    };

    const onPageChange = (page: number) => {
        // server request
        setCurrentPage(page);
    };

    return (
        <div className='container mx-auto px-4 mt-5 flex'>
            <div
                className={`border-r border-solid border-gray-100 py-5 w-52 ${styles.sidebar}`}>
                <Accordion alwaysOpen={true} flush={true}>
                    {categories.map((category) => (
                        <Accordion.Panel key={category.name}>
                            <Accordion.Title className='!py-2 text-gray-800'>
                                {category.name}
                            </Accordion.Title>
                            <Accordion.Content className='!py-0 mb-2'>
                                {category.subCategories.map((sub) => (
                                    <div
                                        key={sub}
                                        className='flex items-center gap-2 mb-2'>
                                        <Checkbox
                                            id={sub}
                                            value={sub}
                                            onClick={onCategoryChange}
                                        />
                                        <Label htmlFor={sub}>{sub}</Label>
                                    </div>
                                ))}
                            </Accordion.Content>
                        </Accordion.Panel>
                    ))}
                </Accordion>
            </div>
            <div className='py-5 ml-7 grow'>
                <div className={`flex items-center mb-5 ${styles.sort}`}>
                    <h3 className='text-base font-semibold mr-4'>
                        Sort by price:
                    </h3>
                    <Tabs.Group
                        aria-label='Default tabs'
                        style='default'
                        ref={tabsRef}
                        onActiveTabChange={(tab) => setIsSortPriceASC(tab === 0)
                        }>
                        <Tabs.Item active title='Increasing' />
                        <Tabs.Item title='Decreasing' />
                    </Tabs.Group>
                </div>

                <div className={styles.grid}>
                    {products?.map((product: IProductSearchResult) => (
                        <ProductBadge
                            className='mt-2.5'
                            key={product.productId}
                            id={product.productId}
                            img={product.imageUrl}
                            title={product.title}
                            price={product.priceUSD}
                            marketplace={product.marketplaceIndex}
                        />
                    ))}
                </div>

                <Pagination
                    className={`${styles.pagination} mt-5 flex justify-center`}
                    currentPage={currentPage}
                    totalPages={5}
                    onPageChange={onPageChange}
                />
            </div>
        </div>
    );
};

export { SearchPage };
