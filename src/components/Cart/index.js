import { useCart } from  'react-use-cart'  
import { Link } from 'react-router-dom'

function Cart() {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    updateItemQuantity,
    removeItem,
  } = useCart();

  function currencyFormat(num) {
    return num.toFixed(0).replace(/(\d)(?=(\d{03})+(?!\d))/g, '$1,') + 'đ'
  }

  if (isEmpty) return (
    <>
      <div style={{marginTop: 200}}>
        <h3>Giỏ hàng của bạn đang trống!</h3>
        <Link to="/" className='btn btn-primary' style={{marginTop: 20}}>Mua ngay</Link>
      </div>
    </>
  );

  return (
    <>
      <h1>Giỏ hàng ({totalUniqueItems})</h1>

      <table className="table container">
        <thead>
          <tr>
            <th scope="col">Tên sản phẩm</th>
            <th scope="col">Ảnh</th>
            <th scope="col">Giá</th>
            <th scope="col">Số lượng</th>
            <th scope="col">Tổng</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {items.map(item => (
            <tr key={item.id}>
              <th>{item.tenSP}</th>
              <td>
                <img src={item.image} style={{width: '80px'}} />
              </td>
              <td>{currencyFormat(item.price)}</td>
              <td>
                <button className='btn btn-outline-warning' onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>
                -
                </button>
                  <strong style={{margin: '0 20px'}}>{item.quantity}</strong>
                <button className='btn btn-outline-success' onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>
                  +
                </button>
              </td>
              <td>{currencyFormat(item.price * item.quantity)}</td>
              <td>
                <button className='btn btn-danger' onClick={() => removeItem(item.id)}>Xóa</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>  
    </>
  );
}

export default Cart;