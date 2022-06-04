import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProduct, setProduct } from "./redux/ducks/product";
import CardItems from './components/CardItem';
import SearchBar from './components/SearchBar';
import ProductModal from './components/ProductModal';

export default function App() {

  const [showModal, setShowModal] = useState(0);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);

  const products = useSelector((state) => state.product.product);
  console.log(products);

  const addProduct = () => {
    setShowModal(-1);
  }

  const updateProduct = (id) => {
    setShowModal(id);
  }

  const deleteProduct = (id) => {
    const updatedProducts = products.filter(i => i.id !== id);
    dispatch(setProduct(updatedProducts))
  }

  const searchProduct = () => {
    console.log();
  }

  const modalHandler = (data) => {
    setShowModal('');
    let updatedProducts;

    if (!data?.id) {
      data.id = products.length + 1;
      updatedProducts = [...products, data]
    } else {
      updatedProducts = products.map(i => {
        if (i.id === data.id) {
          i = JSON.parse(JSON.stringify(data));
        }
        return i;
      });
    }

    dispatch(setProduct(updatedProducts))
  }

  return (
    <div className="App">
      {
        showModal &&
        <ProductModal title={'Update'}
          product={products.filter(i => i.id === showModal)[0]}
          modalHandler={modalHandler}
        />
      }
      {
        showModal === -1 && <ProductModal title={'Add'} modalHandler={modalHandler} />
      }
      <SearchBar addProductHandler={addProduct} searchProductHandler={searchProduct} />
      <div className="d-flex justify-content-between flex-wrap m-5">
        {
          products?.map((cardItem) => {
            return <CardItems key={cardItem.id}
              id={cardItem.id}
              name={cardItem.name}
              offerPrice={cardItem.offerPrice}
              price={cardItem.price}
              image={cardItem.image}
              updateProductHandler={updateProduct}
              deleteProductHandler={deleteProduct}
            />
          })
        }
      </div>
    </div>
  );
}
