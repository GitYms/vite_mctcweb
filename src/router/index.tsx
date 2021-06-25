/*
 * @Author: your name
 * @Date: 2021-06-25 10:58:43
 * @LastEditTime: 2021-06-25 10:58:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vite-react-app\src\router\index.tsx
 */
import Index from '../container/Index'
import About from '../container/About'

const routes = [
  {
    path: "/",
    component: Index
  },
  {
    path: "/about",
    component: About
  }
];

export default routes;
