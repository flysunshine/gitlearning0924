vue的一些概念：

    1.简单的说，Controller所要担任的任务更加全面，包括了很多的业务逻辑。而ViewModel则简化甚至剔除了业务逻辑，
主要的工作就只是把Model中的数据组装成适合View使用的数据。
相对于Vue来说，Angular确实算得上MVC框架。
其实吧，对于前端来说，只需要很少甚至不需要业务逻辑，所以MVC这种后端设计结构其实并不适合。
所以随着MVP、MVVM这种弱化业务逻辑的结构在前端领域变得越来越流行。
    2.v-model
    你可以用 v-model 指令在表单控件元素上创建双向数据绑定。它会根据控件类型自动选取正确的方法来更新元素。
    v-model 会忽略所有表单元素的 value、checked、selected 特性的初始值。因为它会选择 Vue 实例数据来作为具体的值。
    你应该通过 JavaScript 在组件的 data 选项中声明初始值。
     v-model="something" v-bind:true-value="abc" v-bind:false-value="fgh"
    3.component
     注意：data 必须是函数
     构造 Vue 实例时传入的各种选项大多数都可以在组件里使用。只有一个例外：data 必须是函数。
     在 Vue 中，父子组件的关系可以总结为 prop 向下传递，事件向上传递。父组件通过 prop 给子组件下发数据，子组件通过事件给父组件发送消息。
     组件实例的作用域是孤立的。这意味着不能 (也不应该) 在子组件的模板内直接引用父组件的数据。
     父组件的数据需要通过 prop 才能下发到子组件中。
     4.props
     可以为字符串数组和对象；
     对象语法，提供校验
     Vue.component('props-demo-simple', {
       props: ['size', 'myMessage']
     })
     // 对象语法，提供校验
     Vue.component('props-demo-advanced', {
       props: {
         // 检测类型
         height: Number,
         // 检测类型 + 其他验证
         age: {
           type: Number,
           default: 0,
           required: true,
           validator: function (value) {
             return value >= 0
           }
         }
       }
     })
        5.自定义事件
        使用 $on(eventName) 监听事件
        使用 $emit(eventName) 触发事件