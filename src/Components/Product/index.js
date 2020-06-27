import React from 'react'
import '../Product/style.css'

class Product extends React.Component {
    constructor(props){
        super(props)

        this.currencyMap ={
            "ARS": "$",
            "DOLLAR": "USD" 
        }
    }
    render() {
        return (
            <div className='productContainer'>
                <p className='titulo'>{this.props.title}</p>
                <img src={this.props.thumbnail} />
                <p>Price: {this.currencyMap[this.props.currency]}{this.props.price}</p>
                
            </div>
        )
    }
}

export default Product 