import React, {useContext} from 'react'
import {Link} from 'react-router-dom'
import {GlobalState} from '../../../../GlobalState'

function BtnRender({product, deleteProduct}) {
    const state = useContext(GlobalState)
    const [isAdmin] = state.userAPI.isAdmin
    const addCart = state.userAPI.addCart

    
    return (
        <div className="row_btn" style={{ display: 'flex', justifyContent: 'center' }}>
    {
        isAdmin ? 
        <>
            <Link id="btn_buy" to={`/Pioneer_Plastics/#`} onClick={() =>deleteProduct(product._id, product.images.public_id)}>
                Delete
            </Link>
            <Link id="btn_view" to={`/Pioneer_Plastics/edit_product/${product._id}`}>
                Edit
            </Link>
        </>
        : <>
            {/* <Link id="btn_buy" to={`/Pioneer_Plastics/#`} onClick={() => addCart(product)}>
                Buy
            </Link> */}
            <Link id="btn_view" to={`/Pioneer_Plastics/detail/${product._id}`}>
                View
            </Link>
        </>
    }
</div>

    )
}

export default BtnRender
