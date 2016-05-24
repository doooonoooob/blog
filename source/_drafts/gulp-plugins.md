title: gulp-plugins
date: 2016-05-25 01:42:07
tags:
---
必备插件
【必备】不是指每次项目都得用，而是指最基础的。你可以不用，但是得知道的那些gulp插件
以下插件的方向都各自有不少相似的插件，所以不必过多纠结，用的开心就行
		gulp-htmlmin 看到名字就能知道，这个插件是用来压缩 HTML。PS：注释啥的都可以去掉哦，看文档get更多技能哈
		gulp-imagemin 除了能压缩常见的图片格式，还能压缩 SVG，叼叼的~
		gulp-clean-css 压缩 CSS。我原本推荐的是 gulp-minify-css，结果其首页中已建议改用gulp-clean-css...
		gulp-uglify 专业压缩 Javascript
		gulp-concat 上面几个都是压缩，这插件是管合并的...恭喜，“减少网络请求”的成就达成:)
		gulp-autoprefixer 给 CSS 增加前缀。解决某些CSS属性不是标准属性，有各种浏览器前缀的情况，灰常有用
		gulp-rename 修改文件名称。比如有时我们需要把app.js改成app.min.js，瞬间高级了
		gulp-util 最基础的工具，但俺只用来打日志...


常用插件
相对于必备插件，常用插件都是些【有用】但使用场景和频率没那么高的好插件
		run-sequence gulp 的 task 都是并行(异步)执行，如果遇见需要串行的场景，那么这个插件就是必备了。偶的使用场景是：处理(压缩、合并等等) CSS/JS、再gulp-rev、再上传 CDN；然后使用 CDN的地址替换 HTML 中的 CSS/JS 地址，再压缩 HTML。那么替换 HTML 这步须在之前的工作处理完后再执行。 ** 最后要说，gulp4.0发布后，不需要RS也可以搞定串行任务了 **
		del / gulp-clean 删除。俺的使用场景是：JS/CSS 文件都会在压缩后使用gulp-rev，即文件名被hash，然后再上传到 CDN，最后俺再使用 删除插件 把本地压缩后的文件删除掉，不用多余保存。
		gulp-rev 把静态文件名改成hash的形式。
		gulp-rev-replace 配合 gulp-rev 使用，拿到生成的 manifest。json 后替换对应的文件名称。
		gulp-rev-collector 到线上环境前，我会用来配合gulp-rev使用，替换 HTML 中的路径
		gulp-rev-append 给页面引用的静态文件增加hash后缀，避免被浏览器缓存...当然，如果是使用 CDN，这个套路就不行了
		gulp-connect / gulp-livereload LiveReload 的俩款插件都值得拥有，不过都各稍有学习成本，看看文档就明白鸟
		gulp-sourcemaps 处理 JavaScript 时生成 SourceMap；如果你不了解 SourceMap，可以看看这篇阮一峰大神的《Source Map 详解》
		gulp-load-plugins 帮忙偷懒用的，可以帮我们加载插件，不用require或者import...当然，俺个人感觉用了这个插件后，阅读gulpfile.js的可读性差了，鱼和熊掌不可兼得:(
		gulp-jshint JavaScript 代码校验
		gulp-sass / gulp-less 写 CSS 的同学都懂哈

进阶插件
必备插件和常用插件都有一个特点，就是下载数都不小。虽然有少部分插件下载数相对不多，但同样值得拥有或了解
		babel JS 语法新特性用起来。这个插件可以让我们用新的 标准/特性/提案 写 JavaScript 代码，然后再向下 转换编译，最终生成随处可用的 JavaScript 代码。更通俗的说话就是：可以用新的规范写代码，经过 babel 编译后生成没有兼容问题的代码。
		gulp-flatten 移动指定文件，不想压缩或者合并的时候，直接用这个插件把对应文件移动到指定文件夹。俺偶尔在内部项目会偷懒用上，图方便:)
		gulp-coffee CoffeeScript 值得去了解
		gulp-markdown-pdf 把 Markdown 编译为 PDF
		gulp-markdown 写手的福音，可以把 Markdown 转成 HTML
		gulp-html2md 把 HTML 编译为 Markdown
		gulp-tinypng 超屌的图片压缩工具，使用 Tinypng 引擎。PS：因为 Tinypng 免费帐号有月限制，所以使用使需注意。
		sprity 生成雪碧图。稍有点学习成本，仔细阅读文档即可。
		gulp-if 可以在 pipe 里面写点逻辑了，屌不屌。举例：比如处理 ./pub/*.js，如果文件名称是 xxx.js，那么不处理；更可以用来区分当前是开发环境还是生产环境。
		gulp-file-include 俺搞内部项目的时候会用到，让 HTML 组件化的第一小步
		gulp-git 直接在 Build 时把代码都提交到 git上了...特么劳资懒起来连我自己都害怕
		gulp-qiniu 用于把指定文件上传至七牛的指定路径下(PS:首先，你得有自己的七牛账号和空间)
		gulp-notify 在控制台中加入文字描述，build 的时候更高级有木有。当然，当需要的时候把错误信息也展示出来会很有帮助。更高级的功能就需要你查看其文档了~
		gulp-plumber gulp 的错误处理有点坑，假如发生错误进程就挂了。相对的解决办法不少，但是这个是我个人比较推荐的，比特么在容易出错的地方写错误监听靠谱。所以这个插件可以阻止 gulp 插件发生错误导致进程退出并输出错误日志。


