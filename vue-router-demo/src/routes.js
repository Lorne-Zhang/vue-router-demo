import HelloWorld from './components/HelloWorld'
import User from './components/User'
import NestedRoutes from './components/nested-routes/NestedRoutes'


const routes = [

  // 动态路由匹配
  { path:'/', component:HelloWorld, name: 'helloworld' },
  { path:'/user/:id', component:User},
  { path:'/user/:userName/userId/:id', component:User},
  { path:'/icon-:flower(\\d+).png', component:User},
  { path:'/user-*', component:User},

  // 嵌套路由
  { path:'/nested-routes', component: NestedRoutes, name: 'nested-routes',
   children: [
     { path:'', component: resolve => require(['./components/nested-routes/NestedRoutesHome'],resolve)},
     { path:'profile', component: resolve => require(['./components/nested-routes/Profile'],resolve) },
     { path:'archive', component: resolve => require(['./components/nested-routes/Archive'],resolve) }
   ]
  },

  // 编程式导航
  {
    path:'/programmatic-navigation',
    component: resolve => require(['./components/programmatic-navigation/ProgrammaticNavigation'],resolve),
    name: 'programmatic-navigation'
  },
  {
    path:'/programmatic-navigation/params=/:id',
    component: resolve => require(['./components/programmatic-navigation/ProgrammaticNavigation'],resolve),
    name: 'programmatic-navigation-params'
  },


  // 命名路由
  {
    path:'/named-routes/:id',
    component: resolve => require(['./components/named-routes/NamedRoutes'],resolve),
    name:'named-routes'
  },

  // 命名View
  {
    path:'/named-views',
    component: resolve => require(['./components/named-views/NamedViews'],resolve),
    children: [
      {
        path:'',
        components: {
          default:resolve => require(['./components/named-views/ViewA'],resolve),
          b: resolve => require(['./components/named-views/ViewB'],resolve),
          c: resolve => require(['./components/named-views/ViewC'],resolve),
        },
      }
    ]
  },
  { path: '/nested-named-views',
    component: resolve => require(['./components/named-views/NestedNamedViews'], resolve),
    children: [
      {
        path:'profile',
        component: resolve => require(['./components/nested-routes/Profile'],resolve)
      },
      {
        path:'archive',
        components: {
          default:resolve => require(['./components/named-views/ViewA'],resolve),
          b: resolve => require(['./components/named-views/ViewB'],resolve),
        }
      }
    ]
  },

  // 跳转和别名
  {
    path: '/forward',
    name: 'forward',
    component: resolve => require(['./components/redirect-views/RedirectViews'], resolve),
    alias: '/alias'
  },
  {
    path:'/orignal01' ,redirect: '/forward'
  },
  {
    path:'/orignal02' ,redirect: {name: 'forward'}
  },
  {
    path:'/forward' ,redirect: {name: 'forward'}
  },

  // 传递Props给路由组件
  {
    path: '/props-to-route/:id',
    component: resolve => require(['./components/props-route/PropsRoute'], resolve),
    props: true
  },
  {
    path: '/static',
    component: resolve => require(['./components/props-route/PropsRoute'], resolve),
    props: {name: 'static'}
  },
  {
    path: '/function-mode',
    component: resolve => require(['./components/props-route/PropsRoute'], resolve),
    props: (route) => ({ query: route.query.keyword})
  },

  // 过渡
  {
    path: '/transition-views',
    component: resolve => require(['./components/transition-views/Home'], resolve),
    children:[
      {
        path: 'subview',
        component: resolve => require(['./components/transition-views/Subview'], resolve),
      },
      {
        path: 'subviewa',
        component: resolve => require(['./components/transition-views/SubviewA'], resolve),
      },
      {
        path: 'subview-b',
        component: resolve => require(['./components/transition-views/SubviewB'], resolve),
      }
    ]
  },
  // 滚动
  {
    path:'/scroll-views',
    component: resolve => require(['./components/scroll-views/ScrollViews'], resolve),
    children: [
      {
        path: '',
        component: resolve => require(['./components/scroll-views/ScrollHome'], resolve),
        meta: { scrollToTop: true}
      },
      {
        path: '/scrollA',
        component: resolve => require(['./components/scroll-views/ScrollA'], resolve),
      },
      {
        path: '/scrollB',
        component: resolve => require(['./components/scroll-views/ScrollB'], resolve),
        meta: { scrollToTop: true}
      }
    ]
  },

  // 懒加载组件
  {
    path: '/lazy-route', component: () => import('./components/lazy-route/LazyHome')
  },
  { path: '/lazyOne', component: () => import('./components/lazy-route/LazyOne')},
  {
    path: '/lazyTwo', component: () => import(/* webpackChunkName: "lazy" */ './components/lazy-route/LazyTwo'),
    children: [
      {path: 'lazyThree', component: () => import (/* webpackChunkName: "lazy" */ './components/lazy-route/LazyThree')}
    ]
  },

  { path:'*', component:User},
]

export default routes;