import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Cart.css";

const numberFormatter = (amount) => {
  let formatter = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  });

  return formatter.format(amount).toString().slice(0, -3);
};

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  const setQty = (type, product) => {
    const findItem = cartItems.find((item) => item.name === product);

    if (type === "increase") {
      let newCart = [];
      if (findItem.qty + 1 > findItem.stock) {
        findItem.qty = findItem.stock;
        newCart = cartItems.map((item) =>
          item.name === product ? findItem : item
        );
      } else {
        findItem.qty += 1;
        newCart = cartItems.map((item) =>
          item.name === product ? findItem : item
        );
      }
      setCartItems(newCart);
      localStorage.setItem("wijayastore_cart", JSON.stringify(cartItems));
    } else {
      let newCart = [];
      if (findItem.qty === 1) {
        newCart = cartItems.filter((item) => item.name !== product);
        localStorage.setItem("wijayastore_cart", JSON.stringify(newCart));
      } else {
        findItem.qty -= 1;
        newCart = cartItems.map((item) =>
          item.name === product ? findItem : item
        );
        localStorage.setItem("wijayastore_cart", JSON.stringify(newCart));
      }
      setCartItems(newCart);
    }
  };

  useEffect(() => {
    const localStorageCart = localStorage.getItem("wijayastore_cart")
      ? JSON.parse(localStorage.getItem("wijayastore_cart"))
      : [];
    setCartItems(localStorageCart);
  }, []);

  return (
    <div class="cart-box">
      <div class="cart-title">
        <h3>Your Shopping Bag</h3>
        <form>
          <Link to={"/Home"}>Continue Shopping</Link>
        </form>
      </div>
      {cartItems.length === 0 ? (
        <div>Your cart is currently empty.</div>
      ) : (
        <table>
          <thead>
            <tr>
              {/* <th></th> */}
              <th>Barang</th>
              <th>Pengiriman ke</th>
              <th>Jumlah</th>
              {/* <th>Shipping Cost</th> */}
              <th>Harga</th>
              {/* <th></th> */}
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item, idx) => (
              <tr key={idx}>
                {/* <td>
                  <div className="edit">
                    <span>Edit</span>
                  </div>
                </td> */}
                <td class="title" data-label="Item">
                  <div class="image">
                    <img src={`${process.env.PUBLIC_URL}/${item.image}`} />
                  </div>
                  <div class="content-image">
                    <h3>{item.name}</h3>
                    {/* <p>Delizia French Door Refrigerator</p> */}
                    {/* <button>Remove</button> */}
                  </div>
                </td>
                <td data-label="Shipped from">Medan</td>
                <td data-label="Quantity">
                  <div class="quantity">
                    <button onClick={() => setQty("decrease", item.name)}>
                      -
                    </button>
                    <p>{item.qty}</p>
                    <button onClick={() => setQty("increase", item.name)}>
                      +
                    </button>
                  </div>
                </td>
                {/* <td data-label="Shipping Cost">
                      Est. shipping:
                      <span>Rp 150.000</span>
                    </td> */}
                <td data-label="Price">
                  {numberFormatter(
                    item.qty *
                      Number(item.price?.substring(2).split(".").join(""))
                  )}
                </td>
                {/* <td>
                  <div className="remove">
                    <i class="bi bi-trash"></i>
                  </div>
                </td> */}
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {cartItems.length !== 0 && (
        <div class="cart-payment">
          <div class="payment">
            {/* <div class="subtotal">
              <p>subtotal:</p>
              <h5>Rp 48.430.315</h5>
            </div> */}
            {/* <div class="estimated">
              <p>estimated shipping:</p>
              <h5>Rp 500.000</h5>
            </div> */}
            <div class="total">
              <p>total:</p>
              <h5>
                {numberFormatter(
                  cartItems.reduce(
                    (acc, item) =>
                      acc +
                      Number(item.price?.substring(2).split(".").join("")) *
                        item.qty,
                    0
                  )
                )}
              </h5>
            </div>
            <Link to={"/Checkout"}>Secure Checkout</Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
