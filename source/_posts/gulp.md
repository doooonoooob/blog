title: gulp基本使用
date: 2016-05-04 01:50:34
tags:
---

### 简介
gulp ，前端自动化工具，可以帮助我们处理一些琐碎的杂事（其实也很重要的）。

比如，压缩js，压缩css，编译less，压缩图片

gulp也是基于node的工具，使用gulp之前，需要安装node。

### 安装使用 
安装gulp

    //全局安装gulp是为了执行gulp任务，本地安装gulp则是为了调用gulp插件的功能    
    node install -g gulp
    node install gulp
### 编写task
创建gulpfile.js（文件名固定，不可使用其他文件名），
编写这个文件

    //引入gulp
    var gulp = require('gulp');
    
    //引入javascript压缩模块
    var uglify＝ require('gulp-uglify');
    
    //创建任务
    gulp.task('myscript', function() {
    //将要压缩的js文件
    gulp.src('script/*.js');
    //uglify()调用压缩方法，压缩js
        .pipe(uglify());
        //压缩后文件保存的路径，如当前目录下的newscript中
        .pipe(gulp.dest('newScript'));
    });
    
运行上述代码，即执行代码中的刚刚编写的任务。

![](https://static.doooonoooob.com/2016/05/rIqO1zcMEVXb.png)

    //引入gulp
    var gulp = require('gulp');
    //引入gulp-uglify模块，用于压缩JS
    var uglify = require('gulp-uglify');
    //引入clean-css模块压缩css
    var clean_css = require('gulp-clean-css');
    //引入gulp-watch－path
    var watchPath = require('gulp-watch-path');
    //引入rename 重命名压缩后的文件
    var rename = require('gulp-rename');
    
    //'firstScript'为自定义的任务名，匿名函数为'firstScript'具体任务
    gulp.task('firstScript', function() {
        // 'script/*.js'是即将压缩的js文件
        gulp.src('script/*.js')
            //uglify()是调用的压缩方法，去压缩js
            .pipe(uglify())
            //gulp.dest是将压缩后的文件另存为哪的方法，如存到newScript文件夹中
            .pipe(gulp.dest('newScript'));
    });
    
    
    //压缩css文件
    gulp.task('firstStyle', function() {
        gulp.src('style/*.css')
            .pipe(clean_css())
            .pipe(gulp.dest('newStyle'));
    
    });
    
    
    /*
    gulp.task('auto', function() {
    //监听js文件，如果文件有改动执行firstscript任务
        gulp.watch('script/*.js', ['firstScript']);
    });
    */
    gulp.task('auto', function() {
        gulp.watch('script/*.js', function(event) {
            var paths = watchPath(event, 'script', 'newScript');
            gulp.src(paths.srcPath)
                .pipe(uglify())
                .pipe(rename({ suffix: '.min' }))
                .pipe(gulp.dest(paths.distDir));
        });
    });
    // 将需要执行的任务，添加到default任务中，如添加‘auto’任务
    gulp.task('default', ['auto']);
    
![](https://static.doooonoooob.com/2016/05/QoS4LcJTTSy6.png)

参考文章中使用的`gulp-minify-css`，我使用的是`gulp-clean-css`，貌似install `gulp-minify-css`时候会报一个错，所以...😄hah
![](https://static.doooonoooob.com/2016/05/A4lPKOyubDRt.png)


### 参考文章
1.[细说gulp](http://www.cnblogs.com/giggle/p/5389188.html)



