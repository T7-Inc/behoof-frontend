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

import styles from './SearchPage.module.scss';
import { ProductBadge } from '../../components';

const products = [
    {
        id: 1,
        name: 'Japanese Anime Kawaii Y2k Canvas Bag Cute Women Bag Cartoon Ulzzang Large Capacity',
        price: 2.4,
        img:
            'https://cdn.obag.filoblu.com/media/contentmanager/content/resized/767x/'
            + 'contentmanager/content/img%20prodotto%20720x800px%20O%20bag%20unique%20FW21.jpg',
    },
    {
        id: 2,
        name: 'Japanese Anime Kawaii Y2k Canvas Bag Cute Women Bag Cartoon Ulzzang Large Capacity',
        price: 2.4,
        img:
            'https://ae01.alicdn.com/kf/S375262439133452aa3f46de6582bcc14f/Silicone-Strap-'
            + 'For-Apple-Watch-Band-44mm-40mm-45mm-41mm-49mm-42mm-38mm-44-45-mm.jpg_220x220xz.jpg_.webp',
    },
    {
        id: 3,
        name: 'Japanese Anime Kawaii Y2k Canvas Bag Cute Women Bag Cartoon Ulzzang Large Capacity',
        price: 2.4,
        img:
            'https://ae01.alicdn.com/kf/S551ed267fcd44744a35cbe92777d7cec8/144-Style-Pokemon-'
            + 'Figure-Toys-Anime-Pikachu-Action-Figure-Model-Ornamental-Decoration-Collect-Toys-For-'
            + 'Children.jpg_220x220xz.jpg_.webp',
    },
    {
        id: 4,
        name: 'Japanese Anime Kawaii Y2k Canvas Bag Cute Women Bag Cartoon Ulzzang Large Capacity',
        price: 2.4,
        img:
            'https://cdn.obag.filoblu.com/media/contentmanager/content/resized/767x/'
            + 'contentmanager/content/img%20prodotto%20720x800px%20O%20bag%20unique%20FW21.jpg',
    },
    {
        id: 5,
        name: 'Japanese Anime Kawaii Y2k Canvas Bag Cute Women Bag Cartoon Ulzzang Large Capacity',
        price: 2.4,
        img:
            'https://cdn.obag.filoblu.com/media/contentmanager/content/resized/767x/'
            + 'contentmanager/content/img%20prodotto%20720x800px%20O%20bag%20unique%20FW21.jpg',
    },
    {
        id: 6,
        name: 'Japanese Anime Kawaii Y2k Canvas Bag Cute Women Bag Cartoon Ulzzang Large Capacity',
        price: 2.4,
        img:
            'https://cdn.obag.filoblu.com/media/contentmanager/content/resized/767x/'
            + 'contentmanager/content/img%20prodotto%20720x800px%20O%20bag%20unique%20FW21.jpg',
    },
    {
        id: 7,
        name: 'Japanese Anime Kawaii Y2k Canvas Bag Cute Women Bag Cartoon Ulzzang Large Capacity',
        price: 2.4,
        img:
            'https://cdn.obag.filoblu.com/media/contentmanager/content/resized/767x/'
            + 'contentmanager/content/img%20prodotto%20720x800px%20O%20bag%20unique%20FW21.jpg',
    },
    {
        id: 8,
        name: 'Japanese Anime Kawaii Y2k Canvas Bag Cute Women Bag Cartoon Ulzzang Large Capacity',
        price: 2.4,
        img:
            'https://cdn.obag.filoblu.com/media/contentmanager/content/resized/767x/'
            + 'contentmanager/content/img%20prodotto%20720x800px%20O%20bag%20unique%20FW21.jpg',
    },
    {
        id: 9,
        name: 'Japanese Anime Kawaii Y2k Canvas Bag Cute Women Bag Cartoon Ulzzang Large Capacity',
        price: 2.4,
        img:
            'https://cdn.obag.filoblu.com/media/contentmanager/content/resized/767x/'
            + 'contentmanager/content/img%20prodotto%20720x800px%20O%20bag%20unique%20FW21.jpg',
    },
    {
        id: 10,
        name: 'Japanese Anime Kawaii Y2k Canvas Bag Cute Women Bag Cartoon Ulzzang Large Capacity',
        price: 2.4,
        img:
            'https://cdn.obag.filoblu.com/media/contentmanager/content/resized/767x/'
            + 'contentmanager/content/img%20prodotto%20720x800px%20O%20bag%20unique%20FW21.jpg',
    },
    {
        id: 11,
        name: 'Japanese Anime Kawaii Y2k Canvas Bag Cute Women Bag Cartoon Ulzzang Large Capacity',
        price: 2.4,
        img:
            'https://cdn.obag.filoblu.com/media/contentmanager/content/resized/767x/'
            + 'contentmanager/content/img%20prodotto%20720x800px%20O%20bag%20unique%20FW21.jpg',
    },
    {
        id: 12,
        name: 'Japanese Anime Kawaii Y2k Canvas Bag Cute Women Bag Cartoon Ulzzang Large Capacity',
        price: 2.4,
        img:
            'https://cdn.obag.filoblu.com/media/contentmanager/content/resized/767x/'
            + 'contentmanager/content/img%20prodotto%20720x800px%20O%20bag%20unique%20FW21.jpg',
    },
    {
        id: 13,
        name: 'Japanese Anime Kawaii Y2k Canvas Bag Cute Women Bag Cartoon Ulzzang Large Capacity',
        price: 2.4,
        img:
            'https://cdn.obag.filoblu.com/media/contentmanager/content/resized/767x/'
            + 'contentmanager/content/img%20prodotto%20720x800px%20O%20bag%20unique%20FW21.jpg',
    },
    {
        id: 14,
        name: 'Japanese Anime Kawaii Y2k Canvas Bag Cute Women Bag Cartoon Ulzzang Large Capacity',
        price: 2.4,
        img:
            'https://cdn.obag.filoblu.com/media/contentmanager/content/resized/767x/'
            + 'contentmanager/content/img%20prodotto%20720x800px%20O%20bag%20unique%20FW21.jpg',
    },
];

interface ICategory {
    name: string;
    subCategories: Array<string>;
}

const SearchPage = () => {
    const { search } = useParams();

    // Sorting options
    const [isSortPriceASC, setIsSortPriceASC] = useState<boolean>(true);
    const tabsRef = useRef<TabsRef>(null);

    // Pagination
    const [currentPage, setCurrentPage] = useState<number>(1);

    const [categories, setCategories] = useState<Array<ICategory>>([]);
    const [chosenCategories, setChosenCategories] = useState<Array<string>>([]);

    useEffect(() => {
        // server request
        setCategories([
            { name: 'Electronics', subCategories: ['Phones', 'TV', 'Laptops'] },
            {
                name: 'Fashion',
                subCategories: ['Dresses', 'Pants', 'Shoes', 'Accessories'],
            },
            {
                name: 'Hobbies & sport',
                subCategories: [
                    'Musical instruments',
                    'Books',
                    'Sport equipment',
                ],
            },
        ]);
    }, [search, isSortPriceASC, chosenCategories]);

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
                    {products.map((product) => (
                        <ProductBadge
                            className='mt-2.5'
                            key={product.id}
                            img={product.img}
                            title={product.name}
                            price={product.price}
                        />
                    ))}
                </div>

                <Pagination
                    className={`${styles.pagination} mt-5 flex justify-center`}
                    currentPage={currentPage}
                    totalPages={100}
                    onPageChange={onPageChange}
                />
            </div>
        </div>
    );
};

export { SearchPage };
