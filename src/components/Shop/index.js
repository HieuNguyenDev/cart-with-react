import { useCart } from "react-use-cart";
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Shop() {
  const [products, setProducts] = useState([])
  
  useEffect(() => {
    fetch(`https://demo.trungthanhweb.com/public/api/sp`)
        .then(res => res.json())
        .then(data => setProducts(data))
  }, []);

  function currencyFormat(num) {
    return num.toFixed(0).replace(/(\d)(?=(\d{03})+(?!\d))/g, '$1,') + 'đ'
  }

  const { addItem } = useCart();

  return (
    <div style={{width: '980px', margin: '0 auto'}}>
      {products.map((p) => (
        <Link to={`/product/${p.id}`}  key={p.id}>
          <div style={{width: '300px', float: 'left', margin: '20px 8px', padding: '20px', background: '#cdcdcd1f'}}>
            <img style={{width: '200px'}} src={p.image} />
            <p 
              style={
                {
                  color: '#000', fontWeight: 700, fontSize: '20px', marginTop: 20,
                  whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'
                }
              }
            >
              {p.tenSP}
            </p>
            <p style={{color: '#ee4d2d', fontSize: '1rem', fontWeight: 600}}>{currencyFormat(p.price)}</p>
            <Link className="btn btn-outline-info" to="/cart" onClick={() => addItem(p)}>Thêm vào giỏ hàng</Link>
          </div>
        </Link>
      ))}
    </div>
  );
}
  
export default Shop;