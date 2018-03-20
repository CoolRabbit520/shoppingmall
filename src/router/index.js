import Vue from 'vue'
import Router from 'vue-router'
import '@/assets/css/reset.css'
import '@/assets/css/header.css'
import Shop from '../views/shop.vue'
import Item from '../views/item.vue'
import Cart from '../views/cart.vue'
import Checkout from '../views/checkout.vue'
import Payment from '../views/payment.vue'
import Account from '../views/account.vue'
import Order from '../views/account/order.vue'

Vue.use(Router)



export default new Router({
	mode:'history',
	routes: [
	  {
	    path: '/',
	    name: 'Shop',
	    component: Shop
	  },
	  {
	    path: '/item',
	    name: 'Item',
	    component: Item 
	  },
	  {
	    path: '/cart',
	    name: 'Cart',
	    component: Cart 
	  },
	  {
	    path: '/checkout',
	    name: 'Checkout',
	    component: Checkout 
	  },
	   {
	    path: '/payment',
	    name: 'Payment',
	    component: Payment 
	  },
	  {
	    path: '/account',
	    component: Account ,
	    children:[
	    {
	    	name: 'Account',
	    	path:'',
	    	component:Order

	    }]
	  }

	]
})
  
