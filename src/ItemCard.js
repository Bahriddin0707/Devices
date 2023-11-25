import React from 'react';
import { useCart } from "react-use-cart";
import styles from "./ItemCard.module.css";

const ItemCard = (props) => {
  const {item} = props;
  const { addItem } = useCart();

  return (
      <div className={`col-11 col-sm-6 col-md-4 col-lg-3 mx-0 mb-4 ${styles.cardBox}`}>
        <div className={`card p-0 pt-3 overflow-hidden h-100 shadow`}>
          <img src={item.img} className={`card-img-top img-fluid ${styles.img}`} alt="..." />
            <div className="card-body">
              <h5 className="card-title">{item.title}</h5>
              <p className="card-text">{item.desc}</p>
              <p className="card-text">$ {item.price}</p>
              <button onClick={()=>addItem(item)} className="btn btn-success">Add to cart</button>
            </div>
        </div>
      </div>
  );
};

export default ItemCard;
