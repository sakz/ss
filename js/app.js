//     $.get('https://jsonp.afeld.me/?url=http%3A%2F%2Fcn.bing.com%2FHPImageArchive.aspx%3Fformat%3Djs%26idx%3D0%26n%3D1', function(data){
//         var a = data.images[0].url;
//         document.body.style.backgroundImage = "url(" + a + ")";
//         document.body.style.backgroundSize = "cover";
//         document.body.style.color = "#fff";            
// });
//     window.onload = function(){
//         $('.title h6 a').css({
//             color: "#fff",

//         }); 
//     }

$(document).ready(function() {
    document.body.style.backgroundImage = "url(" + "https://source.unsplash.com/category/nature/1920x1080" + ")";
    document.body.style.backgroundSize = "cover";
    var birthDay = new Date("02/01/2016");
    var now = new Date();
    var duration = now.getTime() - birthDay.getTime();
    var total = Math.floor(duration / (1000 * 60 * 60 * 24));
    document.getElementById("showDays").innerHTML = "本站已提供服务" + total + "天";

});
window.onload = function() {
    $('.title h6 a').css({
        color: "#fff",

    });
    document.body.style.color = "#fff";
    var buy = document.getElementById('buy');
    buy.style.color = "red";
    buy.onclick = function() {
        alert("需要购买稳定ss联系me@fazero.cc 美国节点 20元一年");
    }

};

function getssinfo(item) {
    var parent = item.parentNode;
    var h4 = parent.getElementsByTagName('h4');
    var account = h4[0].innerHTML.slice(h4[0].innerHTML.indexOf(':') + 1);
    var port = h4[1].innerHTML.slice(h4[1].innerHTML.indexOf(':'));
    var passwd = h4[2].innerHTML.slice(h4[2].innerHTML.indexOf(':'));
    var ss = 'aes-256-cfb' + passwd + '@' + account + port;
    return ss;
}

function showqr(ss) {
    var ssinfo = getssinfo(ss);
    console.log(ssinfo);
    var ssqr = "ss://" + $.base64.encode(ssinfo);
    console.log(ssqr);
    var parentNode = document.getElementById("qrcode");
    var child = parentNode.childNodes[0];
    console.log(child)
    if (child) { parentNode.removeChild(child) };
    $('#qrcode').qrcode(ssqr);
}
