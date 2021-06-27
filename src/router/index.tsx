/*
 * @Author: your name
 * @Date: 2021-06-25 10:58:43
 * @LastEditTime: 2021-06-25 10:58:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vite-react-app\src\router\index.tsx
 */
import About from '../container/About'
import Home from '../container/Home'

const routes = [
  {
    path: "/home",
    name: '首页',
    component: Home,
  },
  {
    path: "/about",
    name: '关于我们',
    component: About,
  },
  {
    path: "/news",
    name: '人财资讯',
    component: About,
    routes: [
      {
        path: '/news/deep',
        name: '深度视野',
      },{
        path: '/news/policy',
        name: '政策导向',
      }, {
        path: '/news/talent',
        name: '天府菁才'
      }
    ]
  }, {
    path: '/vip',
    name: '会员之窗',
    component: About,
    routes: [
      {
        path: '/vip/ceo',
        name: 'CEO会客厅',
      }, {
        path: '/vip/moment',
        name: '精彩瞬间'
      }
    ]
  }, {
    path: '/cooperation',
    name: '商务合作',
    component: About,
  }, {
    path: '/joinus',
    name: '加入我们',
    component: About,
    routes: [
      {
        path: '/joinus/rule',
        name: '入会章程',
      },{
        path: '/joinus/apply',
        name: '入会申请',
      }, {
        path: '/joinus/bonus',
        name: '会员福利'
      }
    ]
  }
];

export default routes;
