title: webstorm中使用less并生成source-map
date: 2016-04-24 14:29:44
tags:
---


### 手动配置

Arguments中

    --no-color --source-map=$FileNameWithoutExtension$.css.map $FileName$ 


Output paths to refresh中填写

    $FileNameWithoutExtension$.css:$FileNameWithoutExtension$.css.map


    lessc app.less app.css --source-map=app.css.map

### 导入配置文件

可以参看我的Github里的配置文件。
https://github.com/doooonoooob/config/tree/master/webstorm

