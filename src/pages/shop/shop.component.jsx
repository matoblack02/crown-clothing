import React from 'react'
import SHOP_DATA from './shop.data'
import CollectioPreview from '../../components/collection-preview/collection-preview.component'

class Shop extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            collections: SHOP_DATA
        }
    }
    render() {
        return (
            <div className="shop-page">
                {
                this.state.collections.map(({id, ...theCollection})=>(
                    <CollectioPreview key={id} {...theCollection}/>
                ))
            }
            </div> 
        )
    }
}

export default Shop 