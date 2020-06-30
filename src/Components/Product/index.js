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
                <div class='text'>
                <p className='titulo'><strong>Title: </strong>{this.props.title}</p>
                <p><strong>Price: </strong> {this.currencyMap[this.props.currency]}{this.props.price}</p>
                </div>
                <img src={this.props.thumbnail} />
                
                
            </div>
        )
    }
}

export default Product 