$(".saomaZhanghuBt .span1 a").click(function(){
    $(".saomaZhanghuR").css("display","none")
    $(".saomaZhanghuL").css("display","block")
    $(".saomaZhanghuBt .span2 i").css("background","#fff")
    $(".saomaZhanghuBt .span1 i").css("background","#f60")
})
$(".saomaZhanghuBt .span2 a").click(function(){
    $(".saomaZhanghuL").css("display","none")
    $(".saomaZhanghuR").css("display","block")
    $(".saomaZhanghuBt .span1 i").css("background","#fff")
    $(".saomaZhanghuBt .span2 i").css("background","#f60")
})
$(".saomaZhanghuR .p3").click(function(){
var ajax=new XMLHttpRequest();
ajax.open("post","php/login.php",true);
ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
ajax.send("user="+$(".txt").val()+"&password="+$(".password").val());
ajax.onreadystatechange=function(){
    if(ajax.readyState===4&&ajax.status===200){
        var res=JSON.parse(ajax.responseText).code;
        if(res===0){
            $(".saomaZhanghuR .p4 i").css("display","block")
            $(".saomaZhanghuR .p4 span").html("用户名不存在").css("display","block")
        }else if(res===1){
            $(".saomaZhanghuR .p4 i").css("display","block")
            $(".saomaZhanghuR .p4 span").html("密码错误").css("display","block")
        }else if(res===2){
            $(".saomaZhanghuR .p4 i").css("display","none")
            $(".saomaZhanghuR .p4 span").html("登录成功")
            $(".saomaZhanghuR .p4 span").css("display","block").css("border-color","green")
            window.open("index.html")
        }
    }
}
})
