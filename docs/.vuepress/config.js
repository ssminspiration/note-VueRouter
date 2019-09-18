module.exports = {
    title:"vue-router-note",
    themeConfig:{
        sidebar:[
            ["/",'简介'],
            ["/pages/grammer/grammer",'markdown语法'],
            {
                title:"路由学习笔记",
                children:[
                    ['/pages/VueRouter/nestRouter','嵌套路由'],
                    ['/pages/VueRouter/router','导航守卫'],
                ]
            }
           
        ]
    }
}