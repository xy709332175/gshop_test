import Msite from '../pages/Msite/Msite.vue'
import Search from '../pages/Search/Search.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
import Login from '../pages/Login/Login.vue'
import Shop from '../pages/Shop/Shop.vue'
import Goods from '../pages/Shop/Goods/Goods.vue'
import Info from '../pages/Shop/Info/Info.vue'
import Rating from '../pages/Shop/Rating/Rating.vue'

export default [
  {
    path: '/msite',
    component: Msite,
    meta: {
      isShowFooterGuide: true
    }
  },
  {
    path: '/search',
    component: Search,
    meta: {
      isShowFooterGuide: true
    }
  },
  {
    path: '/order',
    component: Order,
    meta: {
      isShowFooterGuide: true
    }
  },
  {
    path: '/profile',
    component: Profile,
    meta: {
      isShowFooterGuide: true
    }
  },    
  {
    path: '/login',
    component: Login
  },    
  {
    path: '/shop',
    component: Shop,
    children: [
      {
        path: 'goods',
        component: Goods
      },
      {
        path: 'info',
        component: Info
      },
      {
        path: 'rating',
        component: Rating
      },
      {
        path: '/shop',
        redirect: '/shop/goods'
      },
    ]
  },    
  {
    path: '/',
    redirect: '/Msite'
  },
]