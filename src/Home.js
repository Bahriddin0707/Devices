import React from 'react';
import ItemCard from "./ItemCard";
import Data from "./Data";

const Home = () => {
  console.log(Data.productData);

  return (
      <div>
        <h1 className="text-center mt-3">All Products</h1>
        <section className="py-4 container">
          <div className="row justify-content-center">
            {
              Data.productData.map((item,index)=>{
                return <ItemCard key={index} item={item}/>
              })
            }
      </div>
        </section>

      </div>
  );
};

export default Home;
