import React, { useState, useEffect } from 'react';
import './ProductCard.css';

function ProductCard({ className, product, children, background = '#F2F2F2', onToggleSelect }) {
  const [isSelected, setIsSelected] = useState(false);
  useEffect(() => onToggleSelect({isSelected, productId: product.id}) , [isSelected]);

  const {
    layoutColor = '#B3B3B3',
    caption,
    isEnded,
    accentBadge,
    badge,
  } = product;

  const cutAccentText = ({ fullText, accentText }) => {
    return fullText.replace(accentText, '');
  };

  const CLICKABLE_TEXT = 'купи';
  const getClickableTemplate = replaceText => `
    <span style="color: ${layoutColor};" class="product-card-desc-clickable">${ replaceText }</span>
  `;
  const findClickableText = text => {
    const capitalizeText = CLICKABLE_TEXT[0].toUpperCase() + CLICKABLE_TEXT.substr(1).toLowerCase();

    let replacedLowerText = text.replace(CLICKABLE_TEXT, getClickableTemplate(CLICKABLE_TEXT));
    let replacedUpperText = replacedLowerText.replace(capitalizeText, getClickableTemplate(capitalizeText))
    return { __html: replacedUpperText };
  };

  const descClickHandler = event => {
    event.persist();
    if(event.target.className !== 'product-card-desc-clickable') return;
    setIsSelected(!isSelected);
  };

  return (
    <div
      className={
        `product-card-wrap ${className} ${isEnded ? 'disabled' : ''} ${isSelected ? 'selected' : ''}`
      }
      style={{ color: layoutColor }}
    >
      <div
        className="product-card"
        style={{ borderColor: layoutColor }}
        onClick={() => setIsSelected(!isSelected)}
      >
        <span className="top-border" style={{ background }}/>
        <span className="left-border" style={{ background }}/>
        <span className="top-right-corner" />
        <span className="bottom-left-corner" />

        <div className="product-card-body">
          {children}

          <div style={{ background: layoutColor }} className="product-card-badge">
            <p className="product-card-badge-accent">{ accentBadge }</p>
              <span>{ cutAccentText({ fullText: badge, accentText: accentBadge }) }</span>
          </div>
        </div>
      </div>

      <p
        className="product-card-desc"
        dangerouslySetInnerHTML={findClickableText(caption)}
        onClick={descClickHandler}
      />
    </div>
  );
};

export default ProductCard;