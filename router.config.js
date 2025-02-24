// router.config.js
export default {
    directory: './src/views', // 需要生成路由的视图文件夹
    output: './src/router/index.js', // 生成的路由文件位置
    lazy: true, // 启用懒加载
    nested: true, // 支持嵌套路由
    defaultRoute: {
        name: 'home',
        path: '/',
        component: 'HomeView'
    }
}
