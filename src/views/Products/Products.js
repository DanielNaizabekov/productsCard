import React from 'react';
import './Products.css';
import ProductCard from '../../components/ProductCard/ProductCard';
import cat from '../../assets/imgs/cat.png';

const products = [
  {
    subtitle: 'Сказочное заморское яство',
    title: 'Нямушка с фуа-гра',
    accentTitle: 'Нямушка',
    descriptions: ['10 порций', 'мышь в подарок'],
    img: cat,
    badge: '0,5 кг',
    accentBadge: '0,5',
    phrase: 'Чего сидишь? Порадуй котэ, купи.',
    layoutColor: '#1698D9',
    id: '1',
  },
  {
    subtitle: 'Сказочное заморское яство',
    title: 'Нямушка с рыбой',
    accentTitle: 'Нямушка',
    descriptions: ['40 порций', '2 мыши в подарок'],
    img: cat,
    badge: '2 кг',
    accentBadge: '2',
    phrase: 'Головы щучьи с чесноком да свежайшая сёмгушка.',
    layoutColor: '#D91667',
    id: '2',
  },
  {
    subtitle: 'Сказочное заморское яство',
    title: 'Нямушка с курой',
    accentTitle: 'Нямушка',
    descriptions: ['100 порций', '5 мышей в подарок', 'заказчик доволен'],
    img: cat,
    badge: '5 кг',
    accentBadge: '5',
    phrase: 'Печалька, с курой закончился.',
    layoutColor: '#FFFF66',
    id: '3',
  },
];

function Products() {
  const ProductLayout = ({ product }) => {
    const cutAccentText = ({ fullText, accentText }) => {
      return fullText.replace(accentText, '') || fullText;
    };

    return (
      <div className="product-layout">
        <div className="product-layout-top">
          <p className="product-layout-subtitle">{ product.subtitle }</p>
          <h3 className="product-layout-title">
            <span className="product-layout-title-accent">{ product.accentTitle }</span>
            { cutAccentText({ fullText: product.title, accentText: product.accentTitle }) }
          </h3>
          <div className="product-layout-desc">
            {product.descriptions.map(desc => <p key={desc}>{desc}</p>)}
          </div>
        </div>

        <div style={{ background: `url(${product.img})` }} className="product-layout-bottom" />

        <div style={{ background: product.layoutColor }} className="product-layout-badge">
          <p className="product-layout-badge-accent">{ product.accentBadge }</p>
            <span>{ cutAccentText({ fullText: product.badge, accentText: product.accentBadge }) }</span>
        </div>
      </div>
    );
  };

  return (
    <div className="products">
      <div className="products-list">
        {products.map(product => (
          <ProductCard
            className="products-item"
            borderColor={product.layoutColor}
            desc={product.phrase}
            key={product.id}
          >
            <ProductLayout product={product}/>
          </ProductCard>
        ))}
      </div>
    </div>
  );
};

export default Products;