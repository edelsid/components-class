import { Component } from 'react';

export class ProductCC extends Component {
  render() {
    const { item } = this.props;
    return (
      <div className="main-content">
        <h2>{item.brand}</h2>
        <h1>{item.title}</h1>
        <h3>{item.description}</h3>
        <div className="description">
          {item.descriptionFull}
        </div>
        <div className="highlight-window mobile">
          <div className="highlight-overlay"></div>
        </div>
        <div className="divider"></div>
        <div className="purchase-info">
        <div className="price">{item.currency}{this.zeroes(item.price)}</div>
        <button>Добавить в корзину</button>
      </div>
    </div>
    )
  }

  zeroes(price) {
    let newPrice = price;
    const values = price.toString().split('.');
    if (values.length === 1) {
      newPrice = price.toFixed(2);
    }
    return newPrice;
  }
}
