title: 移动前端 meta
tags:
---

    <!--设置viewport宽度为屏幕的宽度，禁用缩放比例-->
    <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no, minimal-ui" />
     
    <meta name="apple-mobile-web-app-capable" content="yes" />
     
    <meta name="apple-mobile-web-app-status-bar-style" content="black" />
     <!--关闭iOS Safari 的电话号码识别和android的邮箱识别-->
    <meta name="format-detection"content="telephone=no, email=no" />
     
    <!-- iOS 移动设备添加主屏幕标题设置 -->
    <meta name="apple-mobile-web-app-title" content="TM" >
     
    <!-- 启用360浏览器的极速模式(webkit) -->
    <meta name="renderer" content="webkit">
     
    <!-- 避免IE使用兼容模式 -->
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
     
    <!-- 针对手持设备优化，主要是针对一些老的不识别viewport的浏览器，比如黑莓 -->
    <meta name="HandheldFriendly" content="true">
     
    <!-- 微软的老式浏览器 -->
    <meta name="MobileOptimized" content="320">
     
    <!-- uc强制竖屏 -->
    <meta name="screen-orientation" content="portrait">
     
    <!-- QQ强制竖屏 -->
    <meta name="x5-orientation" content="portrait">
     
    <!-- UC强制全屏 -->
    <meta name="full-screen" content="yes">
     
    <!-- QQ强制全屏 -->
    <meta name="x5-fullscreen" content="true">
     
    <!-- UC应用模式 -->
    <meta name="browsermode" content="application">
     
    <!-- QQ应用模式 -->
    <meta name="x5-page-mode" content="app">
     
    <!-- windows phone 点击无高光 -->
    <meta name="msapplication-tap-highlight" content="no">
     
    <!-- Windows 8 磁贴颜色 -->
    <meta name="msapplication-TileColor" content="#000"/>
     
    <!-- Windows 8 磁贴图标 --> 
    <meta name="msapplication-TileImage" content="icon.png"/>

移除IOS下原生appearance的样式
    
    input{
        -webkit-appearance: none;
    }


