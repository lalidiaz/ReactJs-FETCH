import React from 'react'
import Product from '../Product'
import '../Carousel/style.css'


class Carousel extends React.Component {
    render() {
        return (
            <div className='carouselContainer'>
                {this.props.products.map((product, key) => {
                    return (
                        <Product
                            key={key}
                            thumbnail={product.thumbnail}
                            price={product.price}
                            currency={product.currency_id}
                            title={product.title}
                        />
                    )
                })}

            </div>
        )
    }
}

export default Carousel