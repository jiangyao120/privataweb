var oLunbo = document.getElementById('first');
var oXuan = document.getElementById('xuan');
var aLi = oXuan.getElementsByTagName('li');
var oMasked = document.getElementById('masked');
var omaskleft = document.getElementById('mask-left');
var omaskrighted = document.getElementById('mask-right');
var aMaskdiv = oMasked.getElementsByTagName('a');
var oreturn = document.getElementById('return');
var oXuanmask = document.getElementById('xuan-mask');
var aUl = oXuan.getElementsByTagName('ul');
var oFont = document.getElementById('font');
var aLia = oFont.getElementsByTagName('li');
var oTopright = document.getElementById('top-right');
var oBody = document.getElementById('body');
var oMask = document.getElementById('mask');
var oTopleft = document.getElementById('top-left');
var oShanchu = document.getElementById('shanchu');
var aP = document.getElementById('p');
var oShou = document.getElementById('shou');
var oAnli = document.getElementById('anli');
var oMyj = document.getElementById('myj');
var oMyjian = document.getElementById('myjian');
var oxuanxiang = document.getElementById('xuanxiang');
var oMyname = document.getElementById('myname');
var oContact = document.getElementById('contact');
var oWrap = document.getElementById('wrap');
var aImg = oXuan.getElementsByTagName('li');
var oGeren = document.getElementById('gerenjineng');
var oZhezhao = document.getElementById('zhezhao');
var ogenReft = document.getElementById('geren-left');
var oMyjn = document.getElementById('myjn');
var oMyxm = document.getElementById('myxm');
var oCont1 = document.getElementById('cont-p1');
var oCont2 = document.getElementById('cont-p2');
var oContnav = document.getElementById('cont-nav');
var oContimg = document.getElementById('cont-img');
var aContnavli = oContnav.getElementsByTagName('li');
var aContimgli = oContimg.getElementsByTagName('li');
var atopP = oTopleft.getElementsByTagName('p');
var oTop = document.getElementById('top');
var ofirstbox = document.getElementById('firstbox');
var oshou1 = document.getElementById('shou1');
var oshou2 = document.getElementById('shou2');
var oshou3 = document.getElementById('shou3');
var oshou4 = document.getElementById('shou4');
var obgfirst = document.getElementById('bgfirst');
var oLunboheight = oLunbo.offsetHeight + 10;
var omjheight = oLunbo.offsetHeight + oxuanxiang.offsetHeight;
var omyjnheight = oLunbo.offsetHeight + oMyjian.offsetHeight + oxuanxiang.offsetHeight;
var omyxmheight = oLunbo.offsetHeight + oMyjian.offsetHeight + oGeren.offsetHeight + oxuanxiang.offsetHeight;
var Nowindex = 0;
var musicbox = document.getElementById('mc_play');
var music = document.getElementById('music');
var pla = false;
function play_music() {
    if (pla != true) {
        music.play();
        musicbox.className = 'on' + ' stoped';
        pla = true;
    }
    else {
        music.pause();
        musicbox.className = 'on';
        pla = false;
    }

}
// var otouch = $("#firstbox div.touch");
//首页效果图
oLunbo.onmousemove = function (ev) {

    ev = ev || window.event;
    var top = ev.clientY;
    var left = ev.clientX;
    var oLundnsY = top / oLunbo.offsetHeight - 1 / 2;
    var oLundnsX = left / oLunbo.offsetWidth - 1 / 2;
    var dnsY = oLundnsY * oLunbo.offsetHeight / 5;
    var dnsX = oLundnsX * oLunbo.offsetWidth / 5;
    obgfirst.style.top = -dnsY / 2 + 1 / 2 * oLunbo.offsetHeight + 'px';
    obgfirst.style.left = -dnsX / 2 + 1 / 2 * oLunbo.offsetWidth + 'px';
    ofirstbox.style.top = -dnsY + 1 / 2 * oLunbo.offsetHeight + 'px';
    ofirstbox.style.left = -dnsX + 1 / 2 * oLunbo.offsetWidth + 'px';
}
//弹字幕
var timer = setTimeout(this.marquee, 2000);
function marquee() {
    var scrollWidth = $('#top-left').width();
    var textWidth = $('.top-left').width();
    var i = scrollWidth;
    setInterval(function () {
        i--;
        if (i < -textWidth) {
            i = scrollWidth;
        }
        $('.top-left').animate({ 'left': i + 'px' }, 20);
    }, 20);
}

oshou1.onclick = function () {
    Go(oLunboheight);
    // oTopright.style.display = 'block';
}
oshou2.onclick = function () {
    Go(omjheight);
}
oshou3.onclick = function () {
    Go(omyjnheight);
}
oshou4.onclick = function () {
    Go(omyxmheight-20);
}
oShou.onclick = function () {
    oShanchu.onclick();
    Go(0);
}
oAnli.onclick = function () {
    oShanchu.onclick();
    Go(oLunboheight);
}
oMyj.onclick = function () {

    oShanchu.onclick();
    Go(omjheight);
}
oMyjn.onclick = function () {

    oShanchu.onclick();
    Go(omyjnheight);
}
oMyxm.onclick = function () {

    oShanchu.onclick();
    Go(omyxmheight-20);
}
oreturn.onclick = function () {
    oMasked.style.marginTop = '-50%';
    oXuanmask.style.marginTop = '0';
}
var maskindex = 1;
for (let i = 0; i < aLi.length; i++) {
    aLi[i].index = i;
    aMaskdiv[i].style.zIndex = '0';
    aLi[i].onclick = function () {
        for (let j = 0; j < aLi.length; j++) {
            aMaskdiv[j].style.zIndex = '0';
            aMaskdiv[j].style.opacity = '0';
        }
        oXuanmask.style.marginTop = '100%';
        maskindex = this.index;
        oMasked.style.marginTop = '0%';
        aMaskdiv[maskindex].style.zIndex = '1';
        aMaskdiv[maskindex].style.opacity = '1';
        omaskleft.onclick = function () {
            aMaskdiv[maskindex].style.zIndex = '0';
            aMaskdiv[maskindex].style.opacity = '0'
            if (maskindex < 1) {
                maskindex = aLi.length;
            }
            maskindex--;
            console.log(maskindex);
            goTomask(maskindex);
        }
        omaskrighted.onclick = function () {
            aMaskdiv[maskindex].style.zIndex = '0';
            aMaskdiv[maskindex].style.opacity = '0'
            if (maskindex >= aLi.length - 1) {
                maskindex = -1;
            }
            maskindex++;
            goTomask(maskindex);
        }
    }
}
function goTomask(i) {
    aMaskdiv[i].style.zIndex = '1';
    aMaskdiv[i].style.opacity = '1'
}
//预处理

window.onload = function () {
    // oTopleft.className += 'topleft';

}

//滚动监听
window.onscroll = function () {
    let scr = document.documentElement.scrollTop || document.body.scrollTop;
    console.log(scr);
    if (scr >= 450) {
        aP.style.marginTop = '60' + 'px';
    }
    if (scr >= 600) {
        oXuan.style.marginTop = '0';
    }
    if (scr >= 820) {
        oMyjian.style.marginTop = '0';
    }
    if (scr >= 1070) {
        oMyname.style.marginLeft = '-50' + 'px';
    }
    if (scr >= 2465) {
        ogenReft.style.top = "";
        ogenReft.style.bottom = '0';
    }
    if (scr >= 2560) {
        oCont1.style.marginTop = '5%';
        oCont2.style.marginTop = '2%';
    }

}
//滚动条下滑
function Go(res) {
    timertiao = setInterval("goTo('" + res + "')", 1);
}
function goTo(res) {
    var scr = document.documentElement.scrollTop || document.body.scrollTop;
    if (scr <= res) {
        scr += 10;
        if (scr <= res) {
            window.scrollTo(0, scr);
        }
        else {
            clearInterval(timertiao);
        }
    }
    else {
        scr -= 10;
        if (scr > res) {
            window.scrollTo(0, scr);
        }
        else {
            clearInterval(timertiao);
        }
    }
}
//关闭弹窗
oShanchu.onclick = function () {
    oMask.style.marginRight = '-20%';
    oTopright.style.opacity = '1';
    oWrap.className = ''
    oTopright.style.zIndex = '1';
    this.style.opacity = '0';
}
//弹窗打开
oTopright.onclick = function () {
    oShanchu.style.opacity = '1';
    oMask.style.marginRight = '0';
    oMask.style.zIndex = '1';
    oWrap.className += 'wrap'
    this.style.opacity = '0';
    this.style.zIndex = '0';
}
//轮播图




//选项卡
for (let i = 0; i < aLia.length; i++) {
    aLia[i].index = i;
    aLia[i].onmouseover = function () {
        for (let j = 0; j < aUl.length; j++) {
            aUl[j].className = 'xuan-img';
            aLia[j].className = 'li';
        }
        this.className += ' selects';
        aUl[this.index].className += ' select';
    }
}
for (let i = 0; i < aContnavli.length; i++) {
    aContnavli[i].index = i;
    aContnavli[i].onmouseover = function () {
        for (let j = 0; j < aContimgli.length; j++) {
            aContimgli[j].className = '';
            aContnavli[j].className = '';
        }
        this.className += '';
        aContimgli[this.index].className += 'img-select';
    }
}
