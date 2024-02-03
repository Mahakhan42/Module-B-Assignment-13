import React from 'react'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { Home } from '../AdminPanel/Home'
import { Layout } from '../Components/Layout'
import { Orderlist } from '../AdminPanel/Orderlist'
import { Customer } from '../AdminPanel/Customer'
import { Analytics } from '../AdminPanel/Analytics'
import { Reviews } from '../AdminPanel/Reviews'
import { Food } from '../AdminPanel/Food'
import { FoodDetails } from '../AdminPanel/FoodDetails'
import { CustomerDetails } from '../AdminPanel/CustomerDetails'
import { Calender } from '../AdminPanel/Calender'
import { Chat } from '../AdminPanel/Chat'
import { Wallet } from '../AdminPanel/Wallet'



const router = createBrowserRouter(createRoutesFromElements(
    <Route element={<Layout/>}>
        <Route path='/' element={<Home/>}/>
        <Route path='orderlist' element={<Orderlist/>}/>
        <Route path='customer' element={<Customer />}/>
        <Route path='analytics' element={<Analytics />}/>
        <Route path='fooddetails' element={<FoodDetails />}/>
        <Route path='food' element={<Food />}/>
        <Route path='reviews' element={<Reviews />}/>
        <Route path='Calender' element={<Calender />}/>
        <Route path='Chat' element={<Chat />}/>
        <Route path='Wallet' element={<Wallet />}/>
        <Route path='CustomerDetails' element={<CustomerDetails />}/>
    </Route>
))
export const RouterApp = () => {
  return (
    <div>
    <RouterProvider router={router}/>
    </div>
  )
}


