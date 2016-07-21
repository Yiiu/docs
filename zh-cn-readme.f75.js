webpackJsonp([28],{35:function(s,n){var a,l;s.exports=a||{},s.exports.__esModule&&(s.exports=s.exports["default"]),l&&(("function"==typeof s.exports?s.exports.options||(s.exports.options={}):s.exports).template=l)},107:function(s,n,a){s.exports=a(35),'<h1>Mint UI 使用文档</h1>\n<hr>\n<h2>安装</h2>\n<pre><code class="language-shell">npm install mint-ui -save\n</code></pre>\n<h2>快速开始</h2>\n<p>引入全部组件</p>\n<pre><code class="language-javascript"><span class="hljs-keyword">import</span> Vue <span class="hljs-keyword">from</span> <span class="hljs-string">\'vue\'</span>;\n<span class="hljs-keyword">import</span> MintUI <span class="hljs-keyword">from</span> <span class="hljs-string">\'mint-ui\'</span>;\n<span class="hljs-keyword">import</span> <span class="hljs-string">\'mint-ui/lib/style.css\'</span>;\n\nVue.use(MintUI);\n</code></pre>\n<p>只引入需要的组件</p>\n<pre><code class="language-javascript"><span class="hljs-keyword">import</span> Cell <span class="hljs-keyword">from</span> <span class="hljs-string">\'mint-ui/lib/cell\'</span>;\n<span class="hljs-keyword">import</span> <span class="hljs-string">\'mint-ui/lib/cell/style.css\'</span>;\n\n<span class="hljs-keyword">import</span> Button <span class="hljs-keyword">from</span> <span class="hljs-string">\'mint-ui/lib/button\'</span>;\n<span class="hljs-keyword">import</span> <span class="hljs-string">\'mint-ui/lib/button/style.css\'</span>;\n\nVue.component(Cell.name, Cell);\nVue.component(Button.name, Button);\n</code></pre>\n<h3>使用 <a href="https://github.com/QingWei-Li/babel-plugin-component">babel-plugin-component</a> 可以自动导入样式文件及按需加载</h3>\n<p>自动引入样式</p>\n<pre><code class="language-javascript"><span class="hljs-keyword">import</span> Vue <span class="hljs-keyword">from</span> <span class="hljs-string">\'vue\'</span>;\n<span class="hljs-keyword">import</span> MintUI <span class="hljs-keyword">from</span> <span class="hljs-string">\'mint-ui\'</span>;\n\nVue.use(MintUI);\n</code></pre>\n<p>按需加载</p>\n<pre><code class="language-javascript"><span class="hljs-keyword">import</span> Vue <span class="hljs-keyword">from</span> <span class="hljs-string">\'vue\'</span>;\n<span class="hljs-keyword">import</span> { Cell, Button } <span class="hljs-keyword">from</span> <span class="hljs-string">\'mint-ui\'</span>;\n\nVue.component(Cell.name, Cell);\nVue.component(Button.name, Button);\n</code></pre>\n<p>将会被翻译成</p>\n<pre><code class="language-javascript"><span class="hljs-keyword">var</span> Vue = <span class="hljs-built_in">require</span>(<span class="hljs-string">\'vue\'</span>);\n<span class="hljs-keyword">var</span> Cell = <span class="hljs-built_in">require</span>(<span class="hljs-string">\'mint-ui/lib/cell\'</span>);\n<span class="hljs-built_in">require</span>(<span class="hljs-string">\'mint-ui/lib/cell/style.css\'</span>);\n\n<span class="hljs-keyword">var</span> Button = <span class="hljs-built_in">require</span>(<span class="hljs-string">\'mint-ui/lib/button\'</span>);\n<span class="hljs-built_in">require</span>(<span class="hljs-string">\'mint-ui/lib/button/style.css\'</span>);\n\nVue.component(Cell.name, Cell);\nVue.component(Button.name, Button);\n</code></pre>\n<h3>babel-plugin-component 配置</h3>\n<p>.babelrc</p>\n<pre><code class="language-json">{\n  <span class="hljs-attr">"plugins"</span>: [<span class="hljs-string">"other-plugin"</span>, [<span class="hljs-string">"component"</span>, [\n    { <span class="hljs-attr">"libraryName"</span>: <span class="hljs-string">"mint-ui"</span>, <span class="hljs-attr">"style"</span>: <span class="hljs-literal">true</span> }\n  ]]]\n}\n</code></pre>\n'!==s.exports.template&&(s.exports.template='<h1>Mint UI 使用文档</h1>\n<hr>\n<h2>安装</h2>\n<pre><code class="language-shell">npm install mint-ui -save\n</code></pre>\n<h2>快速开始</h2>\n<p>引入全部组件</p>\n<pre><code class="language-javascript"><span class="hljs-keyword">import</span> Vue <span class="hljs-keyword">from</span> <span class="hljs-string">\'vue\'</span>;\n<span class="hljs-keyword">import</span> MintUI <span class="hljs-keyword">from</span> <span class="hljs-string">\'mint-ui\'</span>;\n<span class="hljs-keyword">import</span> <span class="hljs-string">\'mint-ui/lib/style.css\'</span>;\n\nVue.use(MintUI);\n</code></pre>\n<p>只引入需要的组件</p>\n<pre><code class="language-javascript"><span class="hljs-keyword">import</span> Cell <span class="hljs-keyword">from</span> <span class="hljs-string">\'mint-ui/lib/cell\'</span>;\n<span class="hljs-keyword">import</span> <span class="hljs-string">\'mint-ui/lib/cell/style.css\'</span>;\n\n<span class="hljs-keyword">import</span> Button <span class="hljs-keyword">from</span> <span class="hljs-string">\'mint-ui/lib/button\'</span>;\n<span class="hljs-keyword">import</span> <span class="hljs-string">\'mint-ui/lib/button/style.css\'</span>;\n\nVue.component(Cell.name, Cell);\nVue.component(Button.name, Button);\n</code></pre>\n<h3>使用 <a href="https://github.com/QingWei-Li/babel-plugin-component">babel-plugin-component</a> 可以自动导入样式文件及按需加载</h3>\n<p>自动引入样式</p>\n<pre><code class="language-javascript"><span class="hljs-keyword">import</span> Vue <span class="hljs-keyword">from</span> <span class="hljs-string">\'vue\'</span>;\n<span class="hljs-keyword">import</span> MintUI <span class="hljs-keyword">from</span> <span class="hljs-string">\'mint-ui\'</span>;\n\nVue.use(MintUI);\n</code></pre>\n<p>按需加载</p>\n<pre><code class="language-javascript"><span class="hljs-keyword">import</span> Vue <span class="hljs-keyword">from</span> <span class="hljs-string">\'vue\'</span>;\n<span class="hljs-keyword">import</span> { Cell, Button } <span class="hljs-keyword">from</span> <span class="hljs-string">\'mint-ui\'</span>;\n\nVue.component(Cell.name, Cell);\nVue.component(Button.name, Button);\n</code></pre>\n<p>将会被翻译成</p>\n<pre><code class="language-javascript"><span class="hljs-keyword">var</span> Vue = <span class="hljs-built_in">require</span>(<span class="hljs-string">\'vue\'</span>);\n<span class="hljs-keyword">var</span> Cell = <span class="hljs-built_in">require</span>(<span class="hljs-string">\'mint-ui/lib/cell\'</span>);\n<span class="hljs-built_in">require</span>(<span class="hljs-string">\'mint-ui/lib/cell/style.css\'</span>);\n\n<span class="hljs-keyword">var</span> Button = <span class="hljs-built_in">require</span>(<span class="hljs-string">\'mint-ui/lib/button\'</span>);\n<span class="hljs-built_in">require</span>(<span class="hljs-string">\'mint-ui/lib/button/style.css\'</span>);\n\nVue.component(Cell.name, Cell);\nVue.component(Button.name, Button);\n</code></pre>\n<h3>babel-plugin-component 配置</h3>\n<p>.babelrc</p>\n<pre><code class="language-json">{\n  <span class="hljs-attr">"plugins"</span>: [<span class="hljs-string">"other-plugin"</span>, [<span class="hljs-string">"component"</span>, [\n    { <span class="hljs-attr">"libraryName"</span>: <span class="hljs-string">"mint-ui"</span>, <span class="hljs-attr">"style"</span>: <span class="hljs-literal">true</span> }\n  ]]]\n}\n</code></pre>\n')}});