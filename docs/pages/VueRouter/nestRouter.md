# 嵌套路由

1. 如果子路由的路径和一级路由的路径一致，那么应该渲染什么组件呢？那就要看路由配置的顺序，谁在前面就渲染谁
`举个栗子`
2. 如下图所示，如果在地址栏输入 **`/summer/watermelon`** 的话，此时应该渲染 **Summer** 组件以及其子组件 **Watermelon** 呢？还是应该渲染一级路由 **`/summer/watermelon`** 对应的组件 **Strawberry** 呢？这应该看路由配置的顺序，配置在前面的优先渲染

```js
    const routes = [
        {
            path:'/summer',
            component:Summer,
            children:[
                {
                    path:'watermelon',
                    component:Watermelon
                }
            ]
        },
        {
            path:'/summer/watermelon',
            component:Strawberry
        }
        
    ]
```


::: tip 说明
子路由对应的组件是不是一定是父路由对应的组件的子组件或者说后代组件，或者说子路由的出口router-view一定在父路由对应的组件模板里？
:::




