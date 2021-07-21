import React from 'react';

const Menu = ({items}) => {
  
  return (
    <div className="section-center">
      {
        items.map((item,) => {
          const {id, title ,img, desc, price} = item;
          return (
            <article className="menu-item" key={id}>
              <img src={img} name={title} className="photo"/>
              <div className="item-info">
                <header>
                  <h4>{title}</h4>
                  <div className="price">${price}</div>
                </header>
                <p className="item-text">{desc}</p>
              </div>
              {/* <p>{desc}</p> */}
            </article>
          )
        })
      }
    </div>
  )
};

export default Menu;
