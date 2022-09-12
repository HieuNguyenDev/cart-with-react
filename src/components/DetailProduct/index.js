import './style.css'
import { useCart } from  'react-use-cart'  
import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';

function DetailProduct() {
  const params = useParams();
  const [product, setProduct] = useState({})
  const { addItem } = useCart();
  
  useEffect(() => {
    fetch(`https://demo.trungthanhweb.com/public/api/sp/${params.id}`)
        .then(res => res.json())
        .then(data => setProduct(data))
  }, []);

  return (
    <>
      <div className="container">
        <div className="main">
          <div className="box-image">
            <img style={{width: 400}} src={product.image} />
          </div>
          <div className="box-content">
            <div className='wrapper-content'>
              <h3>{product.tenSP}</h3>
              <h3>Giá: {product.price}</h3>
              <Link to="/cart" className='btn btn-primary' style={{marginTop: 20}} onClick={() => addItem(product)}>Thêm vào giỏ hàng</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default DetailProduct;