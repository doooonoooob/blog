title: ssh-login-settings
tags:
---
在本机生成公钥私钥对

    ssh-keygen - t rsa -P ''
-P表示密码，-P '' 表示空密码，也可以不使用此参数

1.将生成的公钥id_rsa.pub，复制到远程主机，保存在`~/.ssh/authorized_keys`文件中

scp ~/.ssh/id_rsa.pub user@192.168.1.100:~/.ssh/authorized_keys
修改权限
`chmod 600 .ssh/authorized_keys`
⚠️ authorized_keys 的权限必须为600，否则ssh登陆无法生效


