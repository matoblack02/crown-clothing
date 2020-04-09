import React from 'react'
import './collections-overview.styles.scss'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {selectCollectionsForPreview} from '../../redux/shop/shop.selectors'
import CollectioPreview from '../collection-preview/collection-preview.component'

const CollectionsOverview =({collections})=>(
    <div className='collections-overview'>
        {
            collections.map(({id, ...theCollection})=>(
                <CollectioPreview key={id} {...theCollection}/>
            ))
        }
    </div>
)

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
})
    

export default connect(mapStateToProps)(CollectionsOverview) 