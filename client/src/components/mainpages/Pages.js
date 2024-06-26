import React, {useContext} from 'react'
import {Switch, Route} from 'react-router-dom'
import Products from './products/Products'
import DetailProduct from './detailProduct/DetailProduct'
import Login from './auth/Login'
import Register from './auth/Register'
import Cart from './cart/Cart'
import NotFound from './utils/not_found/NotFound'
import Categories from './categories/Categories'
import CreateProduct from './createProduct/CreateProduct'

import {GlobalState} from '../../GlobalState'


function Pages() {
    const state = useContext(GlobalState)
    const [isLogged] = state.userAPI.isLogged
    const [isAdmin] = state.userAPI.isAdmin


    return (
        <Switch>
            <Route path="/Pioneer_Plastics/" exact>
                <Products />
            </Route>

            <Route path="/Pioneer_Plastics/detail/:id" exact component={DetailProduct} />

            <Route path="/Pioneer_Plastics/login" exact component={isLogged ? NotFound : Login} />
            <Route path="/Pioneer_Plastics/register" exact component={isLogged ? NotFound : Register} />

            <Route path="/Pioneer_Plastics/category" exact component={isAdmin ? Categories : NotFound} />
            <Route path="/Pioneer_Plastics/create_product" exact component={isAdmin ? CreateProduct : NotFound} />
            <Route path="/Pioneer_Plastics/edit_product/:id" exact component={isAdmin ? CreateProduct : NotFound} />

            <Route path="/Pioneer_Plastics/cart" exact component={Cart} />


            <Route path="*" exact component={NotFound} />
        </Switch>
    )
}

export default Pages