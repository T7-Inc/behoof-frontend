import { useParams, useSearchParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { Button, Tabs, TabsRef, Spinner } from "flowbite-react";
import axios from "axios";

import { useDispatch, useSelector } from "react-redux";
import { Gallery, Review, OffersTable } from "../../components";
import heartSVG from "../../assets/icons/heart.svg";
import heartOutlinedSvg from "../../assets/icons/heart-outline.svg";
import starSVG from "../../assets/icons/star.svg";
import starOutlinedSVG from "../../assets/icons/star-outline.svg";

import styles from "./ProductPage.module.scss";
import { RootState } from "../../store";
import { favActions } from "../../store/slices/favouriteSlice";
import { trackActions } from "../../store/slices/trackSlice";

const ProductPage = () => {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const [product, setProduct] = useState<any>();
  const [offers, setOffers] = useState<any>([]);
  const [activeTab, setActiveTab] = useState<number>(0);
  const tabsRef = useRef<TabsRef>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const dispatch = useDispatch();
  const isFav =
    useSelector((state: RootState) => state.fav.products).filter(
      (i) => i.id === id
    ).length > 0;
  const isTrack =
    useSelector((state: RootState) => state.track.products).filter(
      (i) => i.id === id
    ).length > 0;

  useEffect(() => {
    if (id) {
      setIsLoading(true);
      axios
        .get(
          `${
            process.env.REACT_APP_API_URL
          }/api/Products/GetDetail?productId=${id}&marketplaceId=${searchParams.get(
            "market"
          )}`
        )
        .then((res) => setProduct(res.data))
        .catch((err) => alert(err.message))
        .finally(() => setIsLoading(false));
    }
  }, [id]);

  useEffect(() => {
    if (activeTab === 1 && offers.length === 0) {
      axios
        .get(
          `${
            process.env.REACT_APP_API_URL
          }/api/Products/GetOffers?ProductImageUrl=${encodeURIComponent(
            product.images[0]
          )}&Region=US`
        )
        .then((res) => {
          console.log(res.data);
          setOffers(res.data);
        })
        .catch((err) => alert(err.message));
    }
  }, [activeTab]);

  const heartClickHandler = () => {
    if (isFav) {
      dispatch(favActions.removeFav(id));
    } else {
      dispatch(
        favActions.addFav({
          id,
          title: product.title,
          img: product.images[0],
          market: searchParams.get("market"),
        })
      );
    }
  };

  const trackHandler = () => {
    dispatch(
      trackActions.addTrack({
        id,
        title: product.title,
        img: product.images[0],
        market: searchParams.get("market"),
      })
    );
  };

  const offersTabTitle = (
    <div className={"flex"}>
      <p>Offers</p>
    </div>
  );

  const reviewsTabTitle = (
    <div className={"flex"}>
      <p>Reviews</p>
    </div>
  );

  return (
    <div className={`container mx-auto px-4 mt-5 ${styles.productPage}`}>
      <div className="flex justify-center mt-5">
        {isLoading && (
          <Spinner aria-label="Extra large spinner example" size="xl" />
        )}
      </div>
      {product && (
        <>
          <div className="flex flex-col items-center lg:flex-row">
            <div className="mr-16">
              <Gallery imgs={product.images} />
            </div>
            <div className="mt-5 lg:mt-0">
              <h1 className="text-2xl font-semibold text-cool-gray-900 max-w-prose">
                {product.title}
              </h1>
              <div className="flex mt-5">
                <Button
                  className="bg-blue mr-2"
                  size="lg"
                  onClick={trackHandler}
                  disabled={isTrack}>
                  {isTrack ? "Tracking" : "Track product"}
                </Button>
                <Button
                  color="light"
                  size="lg"
                  className="border border-solid border-cool-gray-200">
                  <img
                    src={isFav ? heartSVG : heartOutlinedSvg}
                    className="h-6"
                    alt="Add to favorites"
                    onClick={heartClickHandler}
                    style={{
                      filter:
                        "invert(45%) sepia(30%) saturate(1799%) " +
                        " hue-rotate(320deg) brightness(95%) contrast(97%)",
                    }}
                  />
                </Button>
              </div>
            </div>
          </div>
          <div className={`${styles.tabs} mt-5`}>
            <Tabs.Group
              aria-label="Tabs with underline"
              style="underline"
              ref={tabsRef}
              onActiveTabChange={(tab) => setActiveTab(tab)}>
              <Tabs.Item active title="Description">
                <h1 className="text-3xl font-semibold">Product description</h1>
                <p className="text-base font-medium mt-2.5">
                  {product.description.text}
                </p>
              </Tabs.Item>
              <Tabs.Item title={offersTabTitle}>
                {offers.length > 0 ? (
                  <OffersTable offers={offers} />
                ) : (
                  <div>
                    <p className="mt-2 text-center">Looking for offers</p>
                    <Spinner
                      aria-label="Extra large spinner example"
                      size="xl"
                    />
                  </div>
                )}
              </Tabs.Item>
              <Tabs.Item title={reviewsTabTitle}>
                <div className="bg-gray-50 p-4 rounded-3xl">
                  <h1 className="text-3xl font-semibold">Total rank</h1>
                  <div className="flex">
                    <h2 className="text-5xl font-bold text-blue-500">
                      {product.totalRank ? product.totalRank : 0}
                      /5
                    </h2>
                    <div className="flex ml-5">
                      {Array.from({ length: 5 }, (_, i) => i + 1).map((ind) => (
                        <img
                          key={ind}
                          className="mr-2.5"
                          src={
                            product?.totalRank >= ind
                              ? starSVG
                              : starOutlinedSVG
                          }
                        />
                      ))}
                    </div>
                  </div>
                </div>
                {product.reviews?.map((review: any) => (
                  <Review key={review.id} review={review} />
                ))}
                {!product.reviews && (
                  <p className="mt-2 text-center">No reviews yet</p>
                )}
              </Tabs.Item>
            </Tabs.Group>
          </div>
        </>
      )}
    </div>
  );
};

export { ProductPage };
