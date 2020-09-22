(window.webpackJsonp=window.webpackJsonp||[]).push([[132],{707:function(e,o,t){"use strict";t.r(o);var n=t(57),v=Object(n.a)({},(function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"你了解什么是高阶组件吗-可否举个例子说明下"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#你了解什么是高阶组件吗-可否举个例子说明下"}},[e._v("#")]),e._v(" "),t("a",{attrs:{href:"https://github.com/haizlin/fe-interview/issues/332",target:"_blank",rel:"noopener noreferrer"}},[e._v("你了解什么是高阶组件吗？可否举个例子说明下？"),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("原文链接："),t("a",{attrs:{href:"http://hcysun.me/2018/01/05/%E6%8E%A2%E7%B4%A2Vue%E9%AB%98%E9%98%B6%E7%BB%84%E4%BB%B6",target:"_blank",rel:"noopener noreferrer"}},[e._v("探索Vue高阶组件"),t("OutboundLink")],1)]),e._v(" "),t("h2",{attrs:{id:"高阶组件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#高阶组件"}},[e._v("#")]),e._v(" 高阶组件")]),e._v(" "),t("p",[e._v("高阶组件("),t("code",[e._v("HOC")]),e._v(")是 "),t("code",[e._v("React")]),e._v(" 生态系统的常用词汇，"),t("code",[e._v("React")]),e._v(" 中代码复用的主要方式就是使用高阶组件，并且这也是官方推荐的做法。而 "),t("code",[e._v("Vue")]),e._v(" 中复用代码的主要方式是使用 "),t("code",[e._v("mixins")]),e._v("，并且在 "),t("code",[e._v("Vue")]),e._v(" 中很少提到高阶组件的概念，这是因为在 "),t("code",[e._v("Vue")]),e._v(" 中实现高阶组件并不像 "),t("code",[e._v("React")]),e._v(" 中那样简单，原因在于        "),t("code",[e._v("React")]),e._v(" 和 "),t("code",[e._v("Vue")]),e._v(" 的设计思想不同，但并不是说在 "),t("code",[e._v("Vue")]),e._v(" 中就不能使用高阶组件，只不过在 "),t("code",[e._v("Vue")]),e._v(" 中使用高阶组件所带来的收益相对于 "),t("code",[e._v("mixins")]),e._v(" 并没有质的变化。本篇文章主要从技术性的角度阐述 "),t("code",[e._v("Vue")]),e._v(" 高阶组件的实现，且会从 "),t("code",[e._v("React")]),e._v(" 与 "),t("code",[e._v("Vue")]),e._v(" 两者的角度进行分析。")]),e._v(" "),t("h2",{attrs:{id:"从-react-说起"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#从-react-说起"}},[e._v("#")]),e._v(" 从 React 说起")]),e._v(" "),t("p",[e._v("起初 "),t("code",[e._v("React")]),e._v(" 也是使用 "),t("code",[e._v("mixins")]),e._v(" 来完成代码复用的，比如为了避免组件不必要的重复渲染我们可以在组件中混入 "),t("code",[e._v("PureRenderMixin")]),e._v("：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("const PureRenderMixin = require('react-addons-pure-render-mixin')\nconst MyComponent = React.createClass({\n  mixins: [PureRenderMixin]\n})\n")])])]),t("p",[e._v("后来 "),t("code",[e._v("React")]),e._v(" 抛弃了这种方式，进而使用 "),t("code",[e._v("shallowCompare")]),e._v("：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("const shallowCompare = require('react-addons-shallow-compare')\nconst Button = React.createClass({\n  shouldComponentUpdate: function(nextProps, nextState) {\n    return shallowCompare(this, nextProps, nextState);\n  }\n})\n")])])]),t("p",[e._v("这需要你自己在组件中实现 "),t("code",[e._v("shouldComponentUpdate")]),e._v(" 方法，只不过这个方法具体的工作由 "),t("code",[e._v("shallowCompare")]),e._v(" 帮你完成，即浅比较。")]),e._v(" "),t("p",[e._v("再后来 "),t("code",[e._v("React")]),e._v(" 为了避免开发者在组件中总是要写这样一段同样的代码，进而推荐使用 "),t("code",[e._v("React.PureComponent")]),e._v("，总之 "),t("code",[e._v("React")]),e._v(" 在一步步的脱离 "),t("code",[e._v("mixins")]),e._v("，他们认为 "),t("code",[e._v("mixins")]),e._v(" 在 "),t("code",[e._v("React")]),e._v(" 生态系统中并不是一种好的模式(注意：并没有说 "),t("code",[e._v("mixins")]),e._v(" 不好，仅仅针对 "),t("code",[e._v("React")]),e._v("        生态系统)，观点如下：")]),e._v(" "),t("blockquote",[t("p",[e._v("1、"),t("code",[e._v("mixins")]),e._v(" 带来了隐式依赖\n2、"),t("code",[e._v("mixins")]),e._v(" 与 "),t("code",[e._v("mixins")]),e._v(" 之间，"),t("code",[e._v("mixins")]),e._v(" 与组件之间容易导致命名冲突\n3、由于 "),t("code",[e._v("mixins")]),e._v(" 是侵入式的，它改变了原组件，所以修改 "),t("code",[e._v("mixins")]),e._v(" 等于修改原组件，随着需求的增长 "),t("code",[e._v("mixins")]),e._v(" 将变得复杂，导致滚雪球的复杂性。")])]),e._v(" "),t("p",[e._v("具体大家可以查看这篇文章 "),t("a",{attrs:{href:"https://reactjs.org/blog/2016/07/13/mixins-considered-harmful.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Mixins Considered Harmful"),t("OutboundLink")],1),e._v("。不过 "),t("code",[e._v("HOC")]),e._v(" 也并不是银弹，它自然带来了它的问题，有兴趣的同学可以查看这个视频："),t("a",{attrs:{href:"https://www.youtube.com/watch?v=BcVAq3YFiuc",target:"_blank",rel:"noopener noreferrer"}},[e._v("Michael Jackson - Never Write Another HoC"),t("OutboundLink")],1),e._v("，其观点是：使用普通组件配合        "),t("code",[e._v("render prop")]),e._v(" 可以做任何 HOC 能做的事情。")]),e._v(" "),t("p",[e._v("本篇文章不会过多讨论 "),t("code",[e._v("mixins")]),e._v(" 和 "),t("code",[e._v("HOC")]),e._v(" 谁好谁坏，就像技术本身就没有好坏之分，只有适合不适合。难道 "),t("code",[e._v("React")]),e._v(" 和 "),t("code",[e._v("Vue")]),e._v(" 这俩哥们儿不也是这样吗🙂。")]),e._v(" "),t("p",[t("code",[e._v("ok")]),e._v("，我们回到高阶组件，所谓高阶组件其实就是高阶函数啦，"),t("code",[e._v("React")]),e._v(" 和 "),t("code",[e._v("Vue")]),e._v(" 都证明了一件事儿："),t("strong",[e._v("一个函数就是一个组件")]),e._v("。所以组件是函数这个命题成立了，那高阶组件很自然的就是高阶函数，即一个返回函数的函数，我们知道在 "),t("code",[e._v("React")]),e._v(" 中写高阶组件就是在写高阶函数，很简单，那是不是在 "),t("code",[e._v("Vue")]),e._v(" 中实现高阶组件也同样简单呢？其实 "),t("code",[e._v("Vue")]),e._v("        稍微复杂，甚至需要你对 "),t("code",[e._v("Vue")]),e._v(" 足够了解，接下来就让我们一块在 "),t("code",[e._v("Vue")]),e._v(" 中实现高阶组件，在文章的后面会分析为什么同样都是 "),t("code",[e._v("函数就是组件")]),e._v(" 的思想，"),t("code",[e._v("Vue")]),e._v(" 却不能像 "),t("code",[e._v("React")]),e._v(" 那样轻松的实现高阶组件。")]),e._v(" "),t("p",[e._v("也正因如此所以我们有必要在实现 "),t("code",[e._v("Vue")]),e._v(" 高阶组件之前充分了解 "),t("code",[e._v("React")]),e._v(" 中的高阶组件，看下面的 "),t("code",[e._v("React")]),e._v(" 代码：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("function WithConsole (WrappedComponent) {\n  return class extends React.Component {\n    componentDidMount () {\n      console.log('with console: componentDidMount')\n    }\n    render () {\n      return <WrappedComponent {...this.props}/>\n    }\n  }\n}\n")])])]),t("p",[t("code",[e._v("WithConsole")]),e._v(" 就是一个高阶组件，它有以下几个特点：")]),e._v(" "),t("blockquote",[t("p",[e._v("1、高阶组件("),t("code",[e._v("HOC")]),e._v(")应该是无副作用的纯函数，且不应该修改原组件")])]),e._v(" "),t("p",[e._v("可以看到 "),t("code",[e._v("WithConsole")]),e._v(" 就是一个纯函数，它接收一个组件作为参数并返回了一个新的组件，在新组件的 "),t("code",[e._v("render")]),e._v(" 函数中仅仅渲染了被包装的组件("),t("code",[e._v("WrappedComponent")]),e._v(")，并没有侵入式的修改它。")]),e._v(" "),t("blockquote",[t("p",[e._v("2、高阶组件("),t("code",[e._v("HOC")]),e._v(")不关心你传递的数据("),t("code",[e._v("props")]),e._v(")是什么，并且被包装组件("),t("code",[e._v("WrappedComponent")]),e._v(")不关心数据来源")])]),e._v(" "),t("p",[e._v("这是保证高阶组件与被包装组件能够完美配合的根本")]),e._v(" "),t("blockquote",[t("p",[e._v("3、高阶组件("),t("code",[e._v("HOC")]),e._v(")接收到的 "),t("code",[e._v("props")]),e._v(" 应该透传给被包装组件("),t("code",[e._v("WrappedComponent")]),e._v(")")])]),e._v(" "),t("p",[e._v("高阶组件完全可以添加、删除、修改 "),t("code",[e._v("props")]),e._v("，但是除此之外，要将其余 "),t("code",[e._v("props")]),e._v(" 透传，否则在层级较深的嵌套关系中("),t("code",[e._v("这是高阶组件的常见问题")]),e._v(")将造成 "),t("code",[e._v("props")]),e._v(" 阻塞。")]),e._v(" "),t("p",[e._v("以上是 "),t("code",[e._v("React")]),e._v(" 中高阶组件的基本约定，除此之外还要注意其他问题，如：高阶组件("),t("code",[e._v("HOC")]),e._v(")不应该在 "),t("code",[e._v("render")]),e._v(" 函数中创建；高阶组件("),t("code",[e._v("HOC")]),e._v(")也需要复制组件中的静态方法；高阶组件("),t("code",[e._v("HOC")]),e._v(")中的 "),t("code",[e._v("ref")]),e._v(" 引用的是最外层的容器组件而不是被包装组件("),t("code",[e._v("WrappedComponent")]),e._v(") 等等。")]),e._v(" "),t("h2",{attrs:{id:"vue-中的高阶组件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vue-中的高阶组件"}},[e._v("#")]),e._v(" Vue 中的高阶组件")]),e._v(" "),t("p",[e._v("了解了这些，接下来我们就可以开始着手实现 "),t("code",[e._v("Vue")]),e._v(" 高阶组件了，为了让大家有一个直观的感受，我仍然会使用 "),t("code",[e._v("React")]),e._v(" 与 "),t("code",[e._v("Vue")]),e._v(" 进行对比的讲解。首先是一个基本的 "),t("code",[e._v("Vue")]),e._v(" 组件，我们常称其为被包装组件("),t("code",[e._v("WrappedComponent")]),e._v(")，假设我们的组件叫做 "),t("code",[e._v("BaseComponent")]),e._v("：")]),e._v(" "),t("p",[t("strong",[e._v("base-component.vue")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("<template>\n  <div>\n    <span @click=\"handleClick\">props: {{test}}</span>\n  </div>\n</template>\n\n<script>\nexport default {\n  name: 'BaseComponent',\n  props: {\n    test: Number\n  },\n  methods: {\n    handleClick () {\n      this.$emit('customize-click')\n    }\n  }\n}\n<\/script>\n")])])]),t("p",[e._v("我们观察一个 "),t("code",[e._v("Vue")]),e._v(" 组件主要观察三点："),t("code",[e._v("props")]),e._v("、"),t("code",[e._v("event")]),e._v(" 以及 "),t("code",[e._v("slots")]),e._v("。对于 "),t("code",[e._v("BaseComponent")]),e._v(" 组件而言，它接收一个数字类型的 "),t("code",[e._v("props")]),e._v(" 即 "),t("code",[e._v("test")]),e._v("，并发射一个自定义事件，事件的名称是："),t("code",[e._v("customize-click")]),e._v("，没有 "),t("code",[e._v("slots")]),e._v("。我们会这样使用该组件：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('<base-component @customize-click="handleCustClick" :test="100" />\n')])])]),t("p",[e._v("现在我们需要 "),t("code",[e._v("base-component")]),e._v(" 组件每次挂载完成的时候都打印一句话："),t("code",[e._v("I have already mounted")]),e._v("，同时这也许是很多组件的需求，所以按照 "),t("code",[e._v("mixins")]),e._v(" 的方式，我们可以这样做，首先定义个 "),t("code",[e._v("mixins")]),e._v("：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("export default consoleMixin {\n  mounted () {\n    console.log('I have already mounted')\n  }\n}\n")])])]),t("p",[e._v("然后在 "),t("code",[e._v("BaseComponent")]),e._v(" 组件中将 "),t("code",[e._v("consoleMixin")]),e._v(" 混入：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("export default {\n  name: 'BaseComponent',\n  props: {\n    test: Number\n  },\n  mixins: [ consoleMixin ]\n  methods: {\n    handleClick () {\n      this.$emit('customize-click')\n    }\n  }\n}\n")])])]),t("p",[e._v("这样使用 "),t("code",[e._v("BaseComponent")]),e._v(" 组件的时候，每次挂载完成之后都会打印一句 "),t("code",[e._v("I have already mounted")]),e._v("，不过现在我们要使用高阶组件的方式实现同样的功能，回忆高阶组件的定义："),t("strong",[e._v("接收一个组件作为参数，返回一个新的组件")]),e._v("，那么此时我们需要思考的是，在 "),t("code",[e._v("Vue")]),e._v(" 中组件是什么？有的同学可能会有疑问，难道不是函数吗？对，"),t("code",[e._v("Vue")]),e._v(" 中组件是函数没有问题，不过那是最终结果，比如我们在单文件组件中的组件定义其实就是一个普通的选项对象，如下：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("export default {\n  name: 'BaseComponent',\n  props: {...},\n  mixins: [...]\n  methods: {...}\n}\n")])])]),t("p",[e._v("这不就是一个纯对象吗？所以当我们从单文件中导入一个组件的时候：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("import BaseComponent from './base-component.vue'\nconsole.log(BaseComponent)\n")])])]),t("p",[e._v("思考一下，这里的 "),t("code",[e._v("BaseComponent")]),e._v(" 是什么？它是函数吗？不是，虽然单文件组件会被 "),t("code",[e._v("vue-loader")]),e._v(" 处理，但处理后的结果，也就是我们这里的 "),t("code",[e._v("BaseComponent")]),e._v(" 仍然还是一个普通的 JSON 对象，只不过当你把这个对象注册为组件("),t("code",[e._v("components")]),e._v(" 选项)之后，"),t("code",[e._v("Vue")]),e._v(" 最终会以该对象为参数创建一个构造函数，该构造函数就是生产组件实例的构造函数，所以在        "),t("code",[e._v("Vue")]),e._v(" 中组件确实是函数，只不过那是最终结果罢了，在这之前我们完全可以说在 "),t("code",[e._v("Vue")]),e._v(" 中组件也可以是一个普通对象，就像单文件组件中所导出的对象一样。")]),e._v(" "),t("p",[e._v("基于此，我们知道在 "),t("code",[e._v("Vue")]),e._v(" 中一个组件可以以纯对象的形式存在，所以 "),t("code",[e._v("Vue")]),e._v(" 中的高阶组件可以这样定义："),t("strong",[e._v("接收一个纯对象，并返回一个新的纯对象")]),e._v("，如下代码：")]),e._v(" "),t("p",[t("strong",[e._v("hoc.js")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("export default function WithConsole (WrappedComponent) {\n  return {\n    template: '<wrapped v-on=\"$listeners\" v-bind=\"$attrs\"/>',\n    components: {\n      wrapped: WrappedComponent\n    },\n    mounted () {\n      console.log('I have already mounted')\n    }\n  }\n}\n")])])]),t("p",[t("code",[e._v("WithConsole")]),e._v(" 就是一个高阶组件，它接收一个组件作为参数："),t("code",[e._v("WrappedComponent")]),e._v("，并返回一个新的组件。在新的组件定义中，我们将 "),t("code",[e._v("WrappedComponent")]),e._v(" 注册为 "),t("code",[e._v("wrapped")]),e._v(" 组件，并在 "),t("code",[e._v("template")]),e._v(" 中将其渲染出来，同时添加 "),t("code",[e._v("mounted")]),e._v(" 钩子，打印 "),t("code",[e._v("I have already mounted")]),e._v("。")]),e._v(" "),t("p",[e._v("以上就完成了与 "),t("code",[e._v("mixins")]),e._v(" 同样的功能，不过这一次我们采用的是高阶组件，所以是非侵入式的，我们没有修改原组件("),t("code",[e._v("WrappedComponent")]),e._v(")，而是在新组件中渲染了原组件，并且没有对原组件做任何修改。并且这里大家要注意 "),t("code",[e._v("$listeners")]),e._v(" 和 "),t("code",[e._v("$attrs")]),e._v("：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('\'<wrapped v-on="$listeners" v-bind="$attrs"/>\'\n')])])]),t("p",[e._v("这么做是必须的，这就等价于在 "),t("code",[e._v("React")]),e._v(" 中透传 "),t("code",[e._v("props")]),e._v("：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("<WrappedComponent {...this.props}/>\n")])])]),t("p",[e._v("否则在使用高阶组件的时候，被包装组件("),t("code",[e._v("WrappedComponent")]),e._v(")接收不到 "),t("code",[e._v("props")]),e._v(" 和 "),t("code",[e._v("事件")]),e._v("。")]),e._v(" "),t("p",[e._v("那这样真的就完美解决问题了吗？不是的，首先 "),t("code",[e._v("template")]),e._v(" 选项只有在完整版的 "),t("code",[e._v("Vue")]),e._v(" 中可以使用，在运行时版本中是不能使用的，所以最起码我们应该使用渲染函数("),t("code",[e._v("render")]),e._v(")替代模板("),t("code",[e._v("template")]),e._v(")，如下：")]),e._v(" "),t("p",[t("strong",[e._v("hoc.js")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("export default function WithConsole (WrappedComponent) {\n  return {\n    mounted () {\n      console.log('I have already mounted')\n    },\n    render (h) {\n      return h(WrappedComponent, {\n        on: this.$listeners,\n        attrs: this.$attrs,\n      })\n    }\n  }\n}\n")])])]),t("p",[e._v("上面的代码中，我们将模板改写成了渲染函数，看上去没什么问题，实则不然，上面的代码中 "),t("code",[e._v("WrappedComponent")]),e._v(" 组件依然收不到 "),t("code",[e._v("props")]),e._v("，有的同学可能会问了，我们不是已经在 "),t("code",[e._v("h")]),e._v(" 函数的第二个参数中将 "),t("code",[e._v("attrs")]),e._v(" 传递过去了吗，怎么还收不到？当然收不到，"),t("code",[e._v("attrs")]),e._v(" 指的是那些没有被声明为 "),t("code",[e._v("props")]),e._v(" 的属性，所以在渲染函数中还需要添加        "),t("code",[e._v("props")]),e._v(" 参数：")]),e._v(" "),t("p",[t("strong",[e._v("hoc.js")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("export default function WithConsole (WrappedComponent) {\n  return {\n    mounted () {\n      console.log('I have already mounted')\n    },\n    render (h) {\n      return h(WrappedComponent, {\n        on: this.$listeners,\n        attrs: this.$attrs,\n        props: this.$props\n      })\n    }\n  }\n}\n")])])]),t("p",[e._v("那这样是不是可以了呢？依然不行，因为 "),t("code",[e._v("this.$props")]),e._v(" 始终是空对象，这是因为这里的 "),t("code",[e._v("this.$props")]),e._v(" 指的是高阶组件接收到的 "),t("code",[e._v("props")]),e._v("，而高阶组件没有声明任何 "),t("code",[e._v("props")]),e._v("，所以 "),t("code",[e._v("this.$props")]),e._v(" 自然是空对象啦，那怎么办呢？很简单只需要将高阶组件的 "),t("code",[e._v("props")]),e._v(" 设置与被包装组件的 "),t("code",[e._v("props")]),e._v("        相同即可了：")]),e._v(" "),t("p",[t("strong",[e._v("hoc.js")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("export default function WithConsole (WrappedComponent) {\n  return {\n    mounted () {\n      console.log('I have already mounted')\n    },\n    props: WrappedComponent.props,\n    render (h) {\n      return h(WrappedComponent, {\n        on: this.$listeners,\n        attrs: this.$attrs,\n        props: this.$props\n      })\n    }\n  }\n}\n")])])]),t("p",[e._v("现在才是一个稍微完整可用的高阶组件。大家注意用词："),t("code",[e._v("稍微")]),e._v("，纳尼？都修改成这样了还不行吗？当然，上面的高阶组件能完成以下工作：")]),e._v(" "),t("blockquote",[t("p",[e._v("1、透传 "),t("code",[e._v("props")]),e._v("\n2、透传没有被声明为 "),t("code",[e._v("props")]),e._v(" 的属性\n3、透传事件")])]),e._v(" "),t("p",[e._v("大家不觉得缺少点儿什么吗？我们前面说过，一个 "),t("code",[e._v("Vue")]),e._v(" 组件的三个重要因素："),t("code",[e._v("props")]),e._v("、"),t("code",[e._v("事件")]),e._v(" 以及 "),t("code",[e._v("slots")]),e._v("，前两个都搞定了，但 "),t("code",[e._v("slots")]),e._v(" 还不行。我们修改 "),t("code",[e._v("BaseComponent")]),e._v(" 组件为其添加一个具名插槽和默认插槽，如下：")]),e._v(" "),t("p",[t("strong",[e._v("base-component.vue")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('<template>\n  <div>\n    <span @click="handleClick">props: {{test}}</span>\n    <slot name="slot1"/> \x3c!-- 具名插槽 --\x3e\n    <p>===========</p>\n    <slot/> \x3c!-- 默认插槽 --\x3e\n  </div>\n</template>\n\n<script>\nexport default {\n  ...\n}\n<\/script>\n')])])]),t("p",[e._v("然后我们写下如下测试代码：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("<template>\n  <div>\n    <base-component>\n      <h2 slot=\"slot1\">BaseComponent slot</h2>\n      <p>default slot</p>\n    </base-component>\n    <enhanced-com>\n      <h2 slot=\"slot1\">EnhancedComponent slot</h2>\n      <p>default slot</p>\n    </enhanced-com>\n  </div>\n</template>\n\n<script>\n  import BaseComponent from './base-component.vue'\n  import hoc from './hoc.js'\n\n  const EnhancedCom = hoc(BaseComponent)\n\n  export default {\n    components: {\n      BaseComponent,\n      EnhancedCom\n    }\n  }\n<\/script>\n")])])]),t("p",[e._v("渲染结果如下：")]),e._v(" "),t("p",[t("img",{attrs:{src:"332.assets/160d15a3a49abdf3.jpg",alt:"img"}})]),e._v(" "),t("p",[e._v("上图中蓝色框是 "),t("code",[e._v("BaseComponent")]),e._v(" 组件渲染的内容，是正常的。红色框是高阶组件渲染的内容，可以发现无论是具名插槽还是默认插槽全部丢失。其原因很简单，就是因为我们在高阶组件中没有将分发的插槽内容透传给被包装组件("),t("code",[e._v("WrappedComponent")]),e._v(")，所以我们尝试着修改高阶组件：")]),e._v(" "),t("p",[t("strong",[e._v("hoc.js")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("function WithConsole (WrappedComponent) {\n  return {\n    mounted () {\n      console.log('I have already mounted')\n    },\n    props: WrappedComponent.props,\n    render (h) {\n\n      // 将 this.$slots 格式化为数组，因为 h 函数第三个参数是子节点，是一个数组\n      const slots = Object.keys(this.$slots)\n        .reduce((arr, key) => arr.concat(this.$slots[key]), [])\n\n      return h(WrappedComponent, {\n        on: this.$listeners,\n        attrs: this.$attrs,\n        props: this.$props\n      }, slots) // 将 slots 作为 h 函数的第三个参数\n    }\n  }\n}\n")])])]),t("p",[e._v("好啦，大功告成刷新页面，如下：")]),e._v(" "),t("p",[t("img",{attrs:{src:"332.assets/160d15a3a4736c92.jpg",alt:"img"}})]),e._v(" "),t("p",[e._v("纳尼😱？我们发现，分发的内容确实是渲染出来了，不过貌似顺序不太对。。。。。。蓝色框是正常的，在具名插槽与默认插槽的中间是有分界线("),t("code",[e._v("===========")]),e._v(")的，而红色框中所有的插槽全部渲染到了分界线("),t("code",[e._v("===========")]),e._v(")的下面，看上去貌似具名插槽也被作为默认插槽处理了。这到底是怎么回事呢？")]),e._v(" "),t("p",[e._v("想弄清楚这个问题，就回到了文章开始时我提到的一点，即你需要对 "),t("code",[e._v("Vue")]),e._v(" 的实现原理有所了解才行，否则无解。接下来就从原理触发讲解如何解决这个问题。这个问题的根源在于："),t("code",[e._v("Vue")]),e._v(" 在处理具名插槽的时候会考虑作用域的因素。不明白没关系，我们一点点分析。")]),e._v(" "),t("p",[e._v("首先补充一个提示："),t("code",[e._v("Vue")]),e._v(" 会把模板("),t("code",[e._v("template")]),e._v(")编译成渲染函数("),t("code",[e._v("render")]),e._v(")，比如如下模板：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('<div>\n  <h2 slot="slot1">BaseComponent slot</h2>\n</div>\n')])])]),t("p",[e._v("会被编译成如下渲染函数：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('var render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c("div", [\n    _c("h2", {\n      attrs: { slot: "slot1" },\n      slot: "slot1"\n    }, [\n      _vm._v("BaseComponent slot")\n    ])\n  ])\n}\n')])])]),t("p",[e._v("想要查看一个组件的模板被编译后的渲染函数很简单，只需要在访问 "),t("code",[e._v("this.$options.render")]),e._v(" 即可。观察上面的渲染函数我们发现普通的 "),t("code",[e._v("DOM")]),e._v(" 是通过 "),t("code",[e._v("_c")]),e._v(" 函数创建对应的 "),t("code",[e._v("VNode")]),e._v(" 的。现在我们修改模板，模板中除了有普通 "),t("code",[e._v("DOM")]),e._v(" 之外，还有组件，如下：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('<div>\n  <base-component>\n    <h2 slot="slot1">BaseComponent slot</h2>\n    <p>default slot</p>\n  </base-component>\n</div>\n')])])]),t("p",[e._v("那么生成的渲染函数("),t("code",[e._v("render")]),e._v(")是这样的：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('var render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    "div",\n    [\n      _c("base-component", [\n        _c("h2", { attrs: { slot: "slot1" }, slot: "slot1" }, [\n          _vm._v("BaseComponent slot")\n        ]),\n        _vm._v(" "),\n        _c("p", [_vm._v("default slot")])\n      ])\n    ],\n    1\n  )\n}\n')])])]),t("p",[e._v("我们发现无论是普通DOM还是组件，都是通过 "),t("code",[e._v("_c")]),e._v(" 函数创建其对应的 "),t("code",[e._v("VNode")]),e._v(" 的。其实 "),t("code",[e._v("_c")]),e._v(" 在 "),t("code",[e._v("Vue")]),e._v(" 内部就是 "),t("code",[e._v("createElement")]),e._v(" 函数。"),t("code",[e._v("createElement")]),e._v(" 函数会自动检测第一个参数是不是普通DOM标签，如果不是普通DOM标签那么 "),t("code",[e._v("createElement")]),e._v(" 会将其视为组件，并且创建组件实例，"),t("strong",[e._v("注意组件实例是这个时候才创建的")]),e._v("。但是创建组件实例的过程中就面临一个问题：组件需要知道父级模板中是否传递了        "),t("code",[e._v("slot")]),e._v(" 以及传递了多少，传递的是具名的还是不具名的等等。那么子组件如何才能得知这些信息呢？很简单，假如组件的模板如下：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('<div>\n  <base-component>\n    <h2 slot="slot1">BaseComponent slot</h2>\n    <p>default slot</p>\n  </base-component>\n</div>\n')])])]),t("p",[e._v("父组件的模板最终会生成父组件对应的 "),t("code",[e._v("VNode")]),e._v("，所以以上模板对应的 "),t("code",[e._v("VNode")]),e._v(" 全部由父组件所有，那么在创建子组件实例的时候能否通过获取父组件的 "),t("code",[e._v("VNode")]),e._v(" 进而拿到 "),t("code",[e._v("slot")]),e._v(" 的内容呢？即通过父组件将下面这段模板对应的 "),t("code",[e._v("VNode")]),e._v(" 拿到：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('<base-component>\n  <h2 slot="slot1">BaseComponent slot</h2>\n  <p>default slot</p>\n</base-component>\n')])])]),t("p",[e._v("如果能够通过父级拿到这段模板对应的 "),t("code",[e._v("VNode")]),e._v("，那么子组件就知道要渲染哪些 "),t("code",[e._v("slot")]),e._v(" 了，其实 "),t("code",[e._v("Vue")]),e._v(" 内部就是这么干的，实际上你可以通过访问子组件的 "),t("code",[e._v("this.$vnode")]),e._v(" 来获取这段模板对应的 "),t("code",[e._v("VNode")]),e._v("：")]),e._v(" "),t("p",[t("img",{attrs:{src:"332.assets/160d15a3a48f98e1.jpg",alt:"img"}})]),e._v(" "),t("p",[e._v("其中 "),t("code",[e._v("this.$vnode")]),e._v(" 并没有写进 "),t("code",[e._v("Vue")]),e._v(" 的官方文档。子组件拿到了需要渲染的 "),t("code",[e._v("slot")]),e._v(" 之后进入到了关键的一步，这一步就是导致高阶组件中透传 "),t("code",[e._v("slot")]),e._v(" 给 "),t("code",[e._v("BaseComponent")]),e._v(" 却无法正确渲染的原因，看下图：")]),e._v(" "),t("p",[t("img",{attrs:{src:"332.assets/160d15a3a4adc265.jpg",alt:"img"}})]),e._v(" "),t("p",[e._v("这张图与上一张图相同，在子组件中打印 "),t("code",[e._v("this.$vnode")]),e._v("，标注中的 "),t("code",[e._v("context")]),e._v(" 引用着 "),t("code",[e._v("VNode")]),e._v(" 被创建时所在的组件实例，由于 "),t("code",[e._v("this.$vnode")]),e._v(" 中引用的 "),t("code",[e._v("VNode")]),e._v(" 对象是在父组件中被创建的，所以 "),t("code",[e._v("this.$vnode")]),e._v(" 中的 "),t("code",[e._v("context")]),e._v(" 引用着父实例。理论上图中标注的两个 "),t("code",[e._v("context")]),e._v("        应该是相等的：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("console.log(this.$vnode.context === this.$vnode.componentOptions.children[0].context) // true\n")])])]),t("p",[e._v("而 "),t("code",[e._v("Vue")]),e._v(" 内部做了一件很重要的事儿，即上面那个表达式必须成立，才能够正确处理具名 "),t("code",[e._v("slot")]),e._v("，否则即使 "),t("code",[e._v("slot")]),e._v(" 具名也不会被考虑，而是被作为默认插槽。这就是高阶组件中不能正确渲染 "),t("code",[e._v("slot")]),e._v(" 的原因。")]),e._v(" "),t("p",[e._v("那么为什么高阶组件中上面的表达式就不成立了呢？那是因为由于高阶组件的引入，在原本的父组件与子组件之间插入了一个组件("),t("code",[e._v("也就是高阶组件")]),e._v(")，这导致在子组件中访问的 "),t("code",[e._v("this.$vnode")]),e._v(" 已经不是原来的父组件中的 "),t("code",[e._v("VNode")]),e._v(" 片段了，而是高阶组件的 "),t("code",[e._v("VNode")]),e._v(" 片段，所以此时 "),t("code",[e._v("this.$vnode.context")]),e._v(" 引用的是高阶组件，但是我们却将 "),t("code",[e._v("slot")]),e._v("        透传，"),t("code",[e._v("slot")]),e._v(" 中的 "),t("code",[e._v("VNode")]),e._v(" 的 "),t("code",[e._v("context")]),e._v(" 引用的还是原来的父组件实例，所以这就造成了以下表达式为假：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("console.log(this.$vnode.context === this.$vnode.componentOptions.children[0].context) // false\n")])])]),t("p",[e._v("最终导致具名插槽被作为默认插槽，从而渲染不正确。")]),e._v(" "),t("p",[e._v("而解决办法也很简单，只需要手动设置一下 "),t("code",[e._v("slot")]),e._v(" 中 "),t("code",[e._v("VNode")]),e._v(" 的 "),t("code",[e._v("context")]),e._v(" 值为高阶组件实例即可，修改高阶组件如下：")]),e._v(" "),t("p",[t("strong",[e._v("hoc.js")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("function WithConsole (WrappedComponent) {\n  return {\n    mounted () {\n      console.log('I have already mounted')\n    },\n    props: WrappedComponent.props,\n    render (h) {\n      const slots = Object.keys(this.$slots)\n        .reduce((arr, key) => arr.concat(this.$slots[key]), [])\n        // 手动更正 context\n        .map(vnode => {\n          vnode.context = this._self\n          return vnode\n        })\n\n      return h(WrappedComponent, {\n        on: this.$listeners,\n        props: this.$props,\n        attrs: this.$attrs\n      }, slots)\n    }\n  }\n}\n")])])]),t("p",[e._v("现在，都能够正常渲染啦，如下图：")]),e._v(" "),t("p",[t("img",{attrs:{src:"332.assets/160d15a41daa8221.jpg",alt:"img"}})]),e._v(" "),t("p",[e._v("这里的关键点除了你需要了解 "),t("code",[e._v("Vue")]),e._v(" 处理 "),t("code",[e._v("slot")]),e._v(" 的方式之外，你还要知道通过当前实例 "),t("code",[e._v("_self")]),e._v(" 属性访问当实例本身，而不是直接使用 "),t("code",[e._v("this")]),e._v("，因为 "),t("code",[e._v("this")]),e._v(" 是一个代理对象。")]),e._v(" "),t("p",[e._v("现在貌似看上去没什么问题了，不过我们还忘记了一件事儿，即 "),t("code",[e._v("scopedSlots")]),e._v("，不过 "),t("code",[e._v("scopedSlots")]),e._v(" 与 "),t("code",[e._v("slot")]),e._v(" 的实现机制不一样，本质上 "),t("code",[e._v("scopedSlots")]),e._v(" 就是一个接收数据作为参数并渲染 "),t("code",[e._v("VNode")]),e._v(" 的函数，所以不存在 "),t("code",[e._v("context")]),e._v(" 的概念，所以直接透传即可：")]),e._v(" "),t("p",[t("strong",[e._v("hoc.js")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("function WithConsole (WrappedComponent) {\n  return {\n    mounted () {\n      console.log('I have already mounted')\n    },\n    props: WrappedComponent.props,\n    render (h) {\n      const slots = Object.keys(this.$slots)\n        .reduce((arr, key) => arr.concat(this.$slots[key]), [])\n        .map(vnode => {\n          vnode.context = this._self\n          return vnode\n        })\n\n      return h(WrappedComponent, {\n        on: this.$listeners,\n        props: this.$props,\n        // 透传 scopedSlots\n        scopedSlots: this.$scopedSlots,\n        attrs: this.$attrs\n      }, slots)\n    }\n  }\n}\n")])])]),t("p",[e._v("到现在为止，一个高阶组件应该具备的基本功能算是实现了，但这仅仅是个开始，要实现一个完整健壮的 "),t("code",[e._v("Vue")]),e._v(" 高阶组件，还要考虑很多内容，比如：")]),e._v(" "),t("blockquote",[t("p",[e._v("函数式组件中要使用 "),t("code",[e._v("render")]),e._v(" 函数的第二个参数代替 "),t("code",[e._v("this")]),e._v("。\n以上我们只讨论了以纯对象形式存在的 "),t("code",[e._v("Vue")]),e._v(" 组件，然而除了纯对象外还可以函数。\n创建 "),t("code",[e._v("render")]),e._v(" 函数的很多步骤都可以进行封装。\n处理更多高阶函数组件本身的选项("),t("code",[e._v("而不仅仅是上面例子中的一个简单的生命周期钩子")]),e._v(")")])]),e._v(" "),t("p",[e._v("我觉得需要放上两个关于高阶组件的参考链接，供参考交流：")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://github.com/vuejs/vue/issues/6201",target:"_blank",rel:"noopener noreferrer"}},[e._v("Discussion: Best way to create a HOC"),t("OutboundLink")],1),e._v(" "),t("a",{attrs:{href:"https://github.com/jackmellis/vue-hoc",target:"_blank",rel:"noopener noreferrer"}},[e._v("github.com/jackmellis/…"),t("OutboundLink")],1)]),e._v(" "),t("h2",{attrs:{id:"为什么在-vue-中实现高阶组件比较难"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#为什么在-vue-中实现高阶组件比较难"}},[e._v("#")]),e._v(" 为什么在 Vue 中实现高阶组件比较难")]),e._v(" "),t("p",[e._v("前面说过要分析一下为什么在 "),t("code",[e._v("Vue")]),e._v(" 中实现高阶组件比较复杂而 "),t("code",[e._v("React")]),e._v(" 比较简单。这主要是二者的设计思想和设计目标不同，在 "),t("code",[e._v("React")]),e._v(" 中写组件就是在写函数，函数拥有的功能组件都有。而 "),t("code",[e._v("Vue")]),e._v(" 更像是高度封装的函数，在更高的层面 "),t("code",[e._v("Vue")]),e._v(" 能够让你轻松的完成一些事情，但与高度的封装相对的就是损失一定的灵活，你需要按照一定规则才能使系统更好的运行。")]),e._v(" "),t("p",[e._v("有句话说的好：")]),e._v(" "),t("blockquote",[t("p",[e._v("会了不难，难了不会")])]),e._v(" "),t("p",[e._v("复杂还是简单都是相对而言的，最后希望大家玩的转 "),t("code",[e._v("Vue")]),e._v(" 也欣赏的了 "),t("code",[e._v("React")]),e._v("。放上两张我比较认同的图片供各位看官讨论：")]),e._v(" "),t("p",[t("img",{attrs:{src:"332.assets/160d15a518d7853d.jpg",alt:"img"}})]),e._v(" "),t("p",[t("img",{attrs:{src:"332.assets/160d15a4202179ab.jpg",alt:"img"}})])])}),[],!1,null,null,null);o.default=v.exports}}]);