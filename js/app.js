function buyMsg() {
    var buy = document.getElementById('buy');
    buy.style.color = "red";
    buy.onclick = function() {
        swal({
            title: "需要购买稳定ss<br>联系me@fazero.cc <br>美国节点 20元一年",
            // text: "需要购买稳定ss<br>联系me@fazero.cc <br>美国节点 20元一年",
            html: true,
            type: "success"
            });

    }
}

function changeColor() {
    $('.title h6 a').css({
        color: "#fff",
    });
    document.body.style.color = "#fff";
}

function changeBg() {
    document.body.style.backgroundImage = "url(" + "https://source.unsplash.com/category/nature/1920x1080" + ")";
    document.body.style.backgroundSize = "cover";
}

function showtime() {
    var birthDay = new Date("02/01/2016");
    var now = new Date();
    var duration = now.getTime() - birthDay.getTime();
    var total = Math.floor(duration / (1000 * 60 * 60 * 24));
    document.getElementById("showDays").innerHTML = "本站已提供服务" + total + "天";
}

function getssinfo(ss) {
    var parent = ss.parentNode;
    // console.log(parent)
    var h4 = parent.getElementsByTagName('h4');
    var account = h4[0].innerHTML.slice(h4[0].innerHTML.indexOf(':') + 1);
    var port = h4[1].innerHTML.slice(h4[1].innerHTML.indexOf(':'));
    var passwd = h4[2].innerHTML.slice(h4[2].innerHTML.indexOf(':'));
    var ss = 'aes-256-cfb' + passwd + '@' + account + port;
    return ss;
}

function showqr() {
    var ssinfo = getssinfo(this);
    // console.log(ssinfo);
    var ssqr = "ss://" + $.base64.encode(ssinfo);
    // console.log(ssqr);
    var parentNode = document.getElementById("qrcode");
    var child = parentNode.childNodes[0];
    // console.log(child)
    if (child) { parentNode.removeChild(child) };
    $('#qrcode').qrcode(ssqr);
    document.getElementById('tip').style.display = "block";
}

function getBingImg() {
    $.get('https://jsonp.afeld.me/?url=http%3A%2F%2Fcn.bing.com%2FHPImageArchive.aspx%3Fformat%3Djs%26idx%3D0%26n%3D1', function(data) {
        var a = data.images[0].url;
        document.body.style.backgroundImage = "url(" + a + ")";
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundPosition = "center";

        var img = new Image();
        img.src = a;
        img.onload = function() {
            console.log("加载好了");
            changeColor();
            buyMsg();
            downImg();
        }
    });
}
$(document).ready(function($) {
    showtime();
    getBingImg();
    var qr = document.getElementsByClassName('show-qr');
    for (var i = 0; i < qr.length; i++) {
        qr[i].onclick = showqr;
    }
});
function downImg(){
    var img = document.body.style.backgroundImage;
    var re = /http.*jpg/;
    var imgurl = re.exec(img)[0];
    var href = $('.tips a').attr('href',imgurl);
    var down = $('.tips a').attr('download',imgurl);
}
window.onload = function() {
    // changeColor();
    // buyMsg();
};
