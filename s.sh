#!/bin/bash
cd /etc/shadowsocks
a=$RANDOM
b=`expr $a \* $191`
sed -i '/"138.*,$/d' config.json
sed -i '2a \"138":"'${b}'",' config.json
/etc/init.d/shadowsocks restart
cd ~
cd ss
git pull
git checkout gh-pages
sed -i '59c \<h4>密码:'$b'</h4>' index.html
time=`date "+%Y.%m.%d"`
sed -i '31c \<h6>账号更新时间：'$time'</h6>' index.html
git add index.html
git commit -m "$time update"
git push
`"`'"'
