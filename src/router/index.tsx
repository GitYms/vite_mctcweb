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
    component: Home,
  },
  {
    path: "/about",
    component: About,
  }
];

export default routes;
