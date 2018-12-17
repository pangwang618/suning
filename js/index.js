// 广告图轮播
$.ajax({
    type:"get",
    url:"php/shuju.php",
    data:"shuju=lunboshuju",
    success:function(res){
        var lunboStr=`<span id="pre"></span>
        <span id="next"></span>
        <ul>
            <li style="background:red"></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>`
        JSON.parse(res).forEach(function(item){
            return lunboStr+=`<img src="images/${item.img}" alt="" style="opacity:${item.opa}">`
        })
        bannerC.innerHTML+=lunboStr;
        var oimg=document.querySelectorAll("#bannerC img")
                var lis=document.querySelectorAll("#bannerC li")
                var i=0;
                var timer=null
               yundong()

                pre.onclick=function(){
                    if(i<=0){
                        i=8
                    }
                    i--
                    changeImg()
                    changeColor()
                }

                next.onclick=function(){
                    if(i>=7){
                        i=-1
                    }
                    i++
                    changeImg()
                    changeColor()
                }

                for(var s=0;s<lis.length;s++){
                    lis[s].index=s;
                    lis[s].onclick=function(){
                        i=this.index
                        changeImg();
                        changeColor()
                    }
                }

                function changeImg(){
                    for(var k=0;k<oimg.length;k++){
                        oimg[k].style.opacity=0
                    }
                    oimg[i].style.opacity=1
                }
                function changeColor(){
                    for(var q=0;q<lis.length;q++){
                        lis[q].style.background="#fff"
                    }lis[i].style.background="red"
                }

                function  yundong(){
                    timer=setInterval(function(){
                    if(i>=7){
                        i=-1;
                    }
                    i++
                    changeImg();
                    changeColor()
                },2000)
                }


                /*bannerC.onmouseover=function(){
                    clearInterval(timer)
                    pre.style.display="block"
                    next.style.display="block"
                    
                    }
                  bannerC.onmouseout=function(){
                    pre.style.display="none"
                    next.style.display="none"
                    yundong();
                }*/
    }
})



                


// 侧边栏效果
var  zhaicebianlanTopLogin=document.getElementsByClassName("zhaicebianlanTopLogin")[0];
var LoginCebianlan=document.getElementsByClassName("LoginCebianlan")[0]
var flag=true;
zhaicebianlanTopLogin.onclick=function(){
    
    if(flag){
        LoginCebianlan.style.right="35px"
    }else{
        LoginCebianlan.style.right="-247px"
    }
    flag=!flag;
}

// 搜索框效果
$(".an .txt").focus(function(){
    $(".searchXiala").css("display","block")
    $(".an .txt").val("")
    $(".an .txt").blur(function(){
    $(".an .txt").val("跨店满减，价保双十一")
    setTimeout(() => {
        $(".searchXiala").css("display","none")
    }, 300);
    })
})

// 下拉框数据
$(".an .txt").keyup(function(){
    var s=document.createElement("script"); 
    s.src="https://suggest.taobao.com/sug?code=utf-8&q="+$(".an .txt").val()+"&_ksTS=1542866740021_6609&callback=fn&k=1&area=c2c&bucketid=4"
    document.getElementsByTagName("head")[0].appendChild(s);
    document.getElementsByTagName("head")[0].removeChild(s);
})
function fn(data){
    var res=data.result;
    console.log(res)
    var str="";
    res.forEach(item=>{
        console.log(item[3])
        str+=`<li><a href="https://search.suning.com/${item[0]}/">${item[0]}</a></li>`
    })
    $(".searchXiala").html(str);
}

//楼层效果
