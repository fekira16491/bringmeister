import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import useGetCart from "../hooks/useGetCart";
import useGetProducts from "../hooks/useGetProducts";
import styles from "../styles/Home.module.css";
import LoadingSpinner from "../components/LoadingSpinner";
import Product from "../components/Product";
import { setProductsActions, selectProducts } from "../features/productReducer";
import { useAppDispatch, useAppSelector } from "../app/hooks";

//Main page  componenet
const Home: NextPage = () => {
    let productsSource = useGetProducts();
    let { data, loading } = productsSource;
    let dispatch = useAppDispatch();
    let productsFromRedux = useAppSelector(selectProducts);
    const [filterProducts, setFilterProducts] = useState<any[]>([]);
    const [products, setProducts] = useState<any[]>([]);

    useEffect(() => {
        setProductDetails();
    }, [data?.edges]);

    useEffect(() => {
        setProducts(productsFromRedux);
        setFilterProducts(productsFromRedux);
    }, [productsFromRedux]);
 
   //used to set product details from hook and dispatch action to product reducer
    const setProductDetails = () => {
        const res =
            (data?.edges.map((x) => ({
                name: x.node.name,
                price: x.node.prices.basePrice,
                image: x.node.image,
                baseUnit: x.node.prices.baseUnit,
                sku: x.node.sku,
            })) as any) || [];
        dispatch(setProductsActions({ productOptions: res }));
    };

       //used to search the product by using product name
    const onSearchProduct = (data: string) => {
        if (!data) {
            setProducts(products);
            return;
        }
        let a = products.filter((s) =>
            s.name?.toLowerCase().includes(data.toLowerCase())
        );
        setFilterProducts(a);
    };

    return (
        <div>
            <Head>
                <title>Bringmeister Coding Challenge</title>
            </Head>
            <body>
                
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        flexDirection: "column",
                    }}
                >
                    <h2>Products</h2>
                    <input
                        type="input" name="searchInput" data-testid="search-element"
                        style={{ width: "20%", padding: ".5rem" }}
                        onChange={(e) => onSearchProduct(e.target.value)}
                    />
                </div>

                <div className={styles.grid}  >

                    {loading ? (
                        <LoadingSpinner  />
                    ) : (
                        filterProducts?.map((product,index) => (
                            <Product  key={index}
                                name={product.name}
                                image={product.image}
                                price={product.price}
                                baseUnit={product.baseUnit}
                                sku={product.sku}
                            />
                        ))
                    )}
                </div>
            </body>
        </div>
    );
};
export default Home;
