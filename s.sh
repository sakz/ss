#!/bin/bash
cd /etc
a=$RANDOM
b=`expr $a \* $191`
sed -i '/"148.*,$/d' shadowsocks.json
sed -i '2a \"148":"'${b}'",' shadowsocks.json
/etc/init.d/shadowsocks restart
cd ~
cd ss
git pull
git checkout gh-pages
sed -i '41c \<h4>密码:'$b'</h4>' index.html   #41行替换为
time=`date "+%Y.%m.%d"`
date=`date "+%m.%d"`
sed -i '31c \<h6>账号更新时间：'$time'</h6>' index.html
sed -i '43c  \<h4>状态:<font color="green">正常('$date'更新)</font></h4>' index.html #43行替换为
git add index.html
git commit -m "$time update"
git push