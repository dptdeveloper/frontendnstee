import React, { useEffect } from 'react';
import './shop.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../../store/productslice';
import { setSelectedProduct } from '../../../store/selectproductslicer';
import { useNavigate } from 'react-router-dom';

export default function Shop() {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  var product = products
  console.log(product, 'product console is here')

  const handleProductClick = (product) => {
    console.log('single product is here', product)
    dispatch(setSelectedProduct(product));
    navigate(`/product/${product.id}`)
  };

  return (
    <>
      <div className='shop-main'>
        <div className='row'>
          {
            product?.map((product, index) => {
              console.log(product)
              return(
              <div className='col-sm-6 p-0' key={index} onClick={() => handleProductClick(product)}>
                <img src={`${product.image}`} />
                <div className='product-name'>
                  <h2>{product.title}</h2>
                </div>
              </div>
              )
            })
          }
        </div>
      </div>
    </>
  )
}
