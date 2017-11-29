
window.onload=function() {
    var imgs = document.querySelectorAll('.img li');
    var lis = document.querySelectorAll('.circle li');
    var div = document.querySelector('.banner');
    var width = parseInt(getComputedStyle(div, null).width);
    // console.log(width)
    var now = 0;
    var next = 0;
    var t = setInterval(move, 2000);
    var flag = true;

    function move(way = 'l') {      //定义函数，默认为way='l'
        if (way == 'l') {      //当函数参数等于默认值时
            next = now + 1;        //下一个出现为当前位置加一
            if (next >= imgs.length) {      // 当下一个出现的所在位置等于图片所在ul  li 的长度时
                next = 0;         //使下一个出现的是位置0的图片
            }
        } else if (way == 'r') {     //当函数参数参数为向右运行时
            next = now - 1;       //下一个出现为当前位置减一
            if (next <= 0) {          //当下一个出现的位置小于等于0时
                next = imgs.length - 1;       //下一个出现的图片为最后一张
            }
        }
        // imgs[next].classList.add('zindex');     //下一个出现的页面层级提高
        // imgs[now].classList.remove('zindex');     //当前页面最高层级取消，即相当于隐藏
        animate(imgs[now], {opacity: 0});     //使当前位置图片隐藏
        animate(imgs[next], {opacity: 1}, function () {     //是下一个要出现的图片到当前位置显示，使开关打开
            flag = true;
        });
        lis[now].classList.remove('active');     //当前轮播点样式清除
        lis[next].classList.add('active');       //下一个显示轮播点添加样式
        now = next;       //将位置赋值给下一个now
    }

    div.onmousemove = function () {        //鼠标移入停止函数
        clearInterval(t);      //清除时间函数，使其停止
    }
    div.onmouseout = function () {        //鼠标移除启动函数
        t = setInterval(move, 2000);      //添加时间函数，使其运行
    }

    lis.forEach(function (value, index) {      //遍历所有的轮播点
        var j;
        value.onmousemove = function () {      //当前轮播点点击效果
            j = setTimeout(function () {      //定时函数，时对象在一定时间后才有作用
                animate(imgs[now], {opacity: 0});       //动画效果使当前图片移动到右边隐藏
                animate(imgs[index], {opacity: 1});      //动画效果使点击位置对应图片显示
                lis[now].classList.remove('active');    //清除当前轮播点样式
                lis[index].classList.add('active');     //点击位置轮播点添加样式
                now = index;     //点击位置赋值给当前位置，（下一次将从此处开始运行）
            }, 300);     //0.3秒后才会出现作用效果
        }
        value.onmouseout = function () {
            clearTimeout(j);      //消除定时函数，使上述继续进行
        }
    })


    let dywe=document.getElementsByClassName('dywe')[0];
    let baobei=document.getElementsByClassName('baobei')[0];
    let scj=document.querySelector('.scj');
    let baodian=document.querySelector('.baodian');
    dywe.onmouseover=function(){
        baobei.style.display='block';
        dywe.style.background='#fff';
    }
    dywe.onmouseout=function(){
        baobei.style.display='none';
        dywe.style.background='';
    }
    scj.onmouseover=function(){
        baodian.style.display='block';
        scj.style.background='#fff';
    }
    scj.onmouseout=function(){
        baodian.style.display='none';
        scj.style.background='';
    }

    let wzdd=document.getElementsByClassName('wzdd')[0];
    let dywe1=document.getElementsByClassName('wzdh')[0];
    dywe1.onmouseover=function(){
        wzdd.style.display='block';
        dywel.style.background='#fff';
    }
    dywe1.onmouseout=function(){
        wzdd.style.display='none';
        dywe1.style.background='';
    }

    let aaa=document.querySelectorAll('.cdhlb>li');
    let bbb=document.getElementsByClassName('yingg');
    for(let i=0;i<aaa.length;i++){
        aaa[i].onmouseover=function(){
            bbb[i].style.display='block';
        }
        aaa[i].onmouseout=function(){
            bbb[i].style.display='none';
        }
    }



    //楼层跳转
    let dbnav=document.querySelector('.dbnav');
    let back=dbnav.lastElementChild;
    //点击返回顶部
    back.onclick=function () {
        animate(document.body,{scrollTop:0});
        animate(document.documentElement,{scrollTop:0});
    }
    //楼层跳转
    let lou=document.querySelector('.lou');
    let mimi=document.querySelectorAll('.mimi');
    let lia=dbnav.children;
    let arr=['red','yellow','blue','pink','orange','green','#000'];
    let banner22=document.querySelector('.kongbai');
    let jiunima=document.querySelector('.jiunima');
    let up=false;
    let down=true;
    let dq;
    window.onscroll=function () {
        let obj=document.body.scrollTop? document.body:document.documentElement;
        let gtp=obj.scrollTop;
        mimi.forEach(function (f,index) {
            let scrollT=f.offsetTop;
            if(gtp>=scrollT-200){
                for(let i=0;i<lia.length;i++){
                    lia[i].style.background='';
                }
                lia[index].style.background=arr[index];
            }
        });

        //头部的消失与出现
        if(gtp>=banner22.offsetTop){
            if(down){
                down=false;
                animate(jiunima,{top:0},function () {
                    up=true;
                });
                dbnav.classList.add('jjkk');
            }
        }
        else{
            if(up){
                up=false;
                animate(jiunima,{top:-100},function () {
                    down=true;
                });
                dbnav.classList.remove('jjkk');
                dbnav.classList.add('ffkk');
            }

        }
    }

    //点击定位
    mimi.forEach(function (f,index) {
        lia[index].onclick=function () {
            animate(document.documentElement,{scrollTop:f.offsetTop});
            animate(document.body,{scrollTop:f.offsetTop});
            dq=index;
        };
    });

    //移入变色
    for(let i=0;i<lia.length;i++){
        lia[i].onmouseover=function () {
            lia[i].classList.add('active');
        };
        lia[i].onmouseout=function () {
            if(dq!=i){
                lia[i].classList.remove('active');
            }
        }
    }
}