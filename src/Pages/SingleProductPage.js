import React, { useEffect } from "react";
import { useProductsContext } from "../context/products_context";
import Loading from "../Components/Loading";
import Error from "../Components/Error";
import styled from "styled-components";
import { Link, useParams } from "react-router-dom";
import { single_product_url as url } from "../Utils/constants";
import CalltoAction from "./CalltoAction";
import AddToCart from "../Components/AddToCart";
import ProductImages from "../Components/ProductImages";
import Stars from "../Components/Stars";
import { formatPrice } from "../Utils/helpers";

const SingleProductPage = () => {
  const { id } = useParams();
  const {
    single_product_loading: loading,
    single_product_error: error,
    single_product: product,
    fetchSingleProduct,
  } = useProductsContext();

  useEffect(() => {
    fetchSingleProduct(`${url}${id}`);
  }, [id]);

  console.log(product);

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }

  const {
    name,
    id: sku,
    price,
    stock,
    stars,
    reviews,
    description,
    images,
    company,
  } = product;

  return (
    <Wrapper>
      <CalltoAction title={name} product />
      <div className="section section-center page">
        <Link to="/products" className="btn">
          Back to Products
        </Link>
        <div className="product-center">
          <ProductImages images={images}/>
          <section classname="content">
            <h2>{name}</h2>
            <Stars stars={stars} reviews={reviews} />
            <h5 className="price">{formatPrice(price)}</h5>
            <p className="desc">{description}</p>
            <p className="info">
                <span>Available : </span>
                {
                    stock > 0 ? "In Stock" : 'Out of Stock'
                }
            </p>
            <p className="info">
                <span>Sku : </span>
                {
                    sku
                }
            </p>
            <p className="info">
                <span>Brand : </span>
                {
                    company
                }
            </p>
            <hr/>
            {
                stock>0 && <AddToCart product={product}/>
            }
          </section>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  .product-center {
    display: grid;
    gap: 4rem;
    margin-top: 2rem;
  }
  .price {
    color: var(--clr-primary-5);
  }
  .desc {
    line-height: 2;
    max-width: 45em;
  }
  .info {
    text-transform: capitalize;
    width: 300px;
    display: grid;
    grid-template-columns: 125px 1fr;
    span {
      font-weight: 700;
    }
  }

  @media (min-width: 992px) {
    .product-center {
      grid-template-columns: 1fr 1fr;
      align-items: top;
    }
    .price {
      font-size: 1.25rem;
    }
  }
`;

export default SingleProductPage;
