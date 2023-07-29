import React from "react";
import Liquer from "../../public/images/Whiskey.png";
import Image from "next/image";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";

export default function Trending({ title, bg, data }) {
  return (
    <section className='trending-section' style={{ background: bg }}>
      <div className='trending-title'>
        <h1>{title}</h1>
      </div>
      <div className='trending-grid'>
        {data?.map((product, i) => {
          return (
            <div className='card' key={i}>
              <div className='upper-icons'>
                <div className='span-class'>
                  <span className='percentage'>-5%</span>
                  <span>NEW</span>
                </div>
                <AiOutlineHeart size={25} />
              </div>
              <div className='image'>
                <Image
                  src={product.Thumbnail}
                  alt='the alt tag goes here'
                  width={50}
                  height={50}
                />
                
              </div>
              <h2>{product.title}</h2>
              <p>{product.short_description}</p>
              <div className='button-component'>
                <h3>{product.CurrentPrice}</h3>
                <a href='#'>
                  <AiOutlineShoppingCart />
                  Buy
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
