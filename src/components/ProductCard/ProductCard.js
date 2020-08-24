import React from 'react';
import './ProductCard.css';

function ProductCard(props) {
  const {
    className,
    borderColor = '#B3B3B3',
    background = '#F2F2F2',
    children,
    desc,
  } = props;

  return (
    <div className={`product-card-wrap ${className}`}>
      <div className="product-card" style={{ borderColor }}>
        <span className="top-border" style={{ background }}/>
        <span className="left-border" style={{ background }}/>
        <span className="top-right-corner" />
        <span className="bottom-left-corner" />

        <div className="product-card-body">
          {children}
        </div>
      </div>

      <p className="product-card-desc">{ desc }</p>
    </div>
  );
};

export default ProductCard;