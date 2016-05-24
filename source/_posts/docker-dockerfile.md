title: docker
date: 2016-04-06 23:38:28
tags:
---
清明三天放假，在家琢磨了下Docker，做了两个Dockerfile，dockerfile放在了我的[Github](http://github.com/doooonoooob/dockerfile)上，以及镜像使用自动构建放在了[Docker hub](http://)上。

现在整理一下Docker内容，涉及到一些Linux内容，但不是本文重点。
<!-- more -->
安装docker

    curl -fsSL https://get.docker.com/ | sh
    
    sudo usermod -aG docker dong
启动docker服务

    service docker start

获取镜像

    docker pull centos
    docker pull centos[:tag]
    不填写tag,系统自动补全为:latest
    
运行Docker镜像

    docker run --name somename -d centos 
    
    参数：
    -name 指定运行容器的名称（可选）
    -d 后台运行
    -i 
    -t
    -v 将宿主机的文件或目录映射运行容器中
    -P 将宿主机的网络端口映射运行容器中
    
Dockerfile

⚠️注意：在Docker hub中自动构建中，Dockerfile文件名，大小写敏感。文件名不对，不能进行自动构建

Dockerfile中常用的命令有 `FROM`,`RUN`,`EVN`,`VOLUME`,`EXPOSE`,`WORKDIR`,`USER`,`CMD`

![](https://img.lidong.me/2016/04/qfXmZR5czmSb.jpg)

查看我的栗子: <https://github.com/doooonoooo/dockerfile>

docker build 

    docker build [OPTIONS] PATH | URL | -

docker login
    


