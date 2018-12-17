// 手机号错误提示
$(".input-box .txt").focus(function(){
    $(".duihao").css("display","none")
    $(".input-wrapper label").css("display","none")
    $(".pGeshi").css("display","none")
$(".input-box .txt").blur(function(){
    if($(".input-box .txt").val()===""){
        $(".duihao").css("display","none")
        $(".pGeshi").css("display","none");
        $(".input-wrapper label").css("display","block")
    }
    else{
    if(!/^1\d{10}$/.test($(this).val())){
        $(".pGeshi").css("display","block");
        $(".duihao").css("display","none")   
    }else{
        $(".pGeshi").css("display","none");
            if(/^1\d{10}$/.test($(this).val())){
                $(".pGeshi").css("display","none");
                $(".duihao").css("display","block")
            }
    }
}
})
})

// 密码设置提示
$(".input-wrapper2 .txt2").focus(function(){
    $(".pMimatishi").css("display","block");
    $(".input-wrapper2 label").css("display","none")
    $(".input-wrapper2 .txt2").blur(function(){
        if($(".input-yanzhengma .txt2").val()===""){
            $(".pMimatishi").css("display","none")
            $(".input-wrapper2 label").css("display","block")
            $(".mimaDizhonggao").css("display","none")
        }else{
            if(!/^\S{6,20}$/.test($(this).val())){
                $(".pMimatishi").css("display","block").html("请输入6-20位密码!").css("color","red");
                $(".mimaDizhonggao").css("display","none")
            }
            if(/^\d{6,20}|[a-z]{6,20}|[A-Z]{6,20}$/.test($(this).val())){
                $(".mimaDizhonggao span").css("background","#ccc")
                $(".mimaDizhonggao .span1").css("background","#f90")
                $(".mimaDizhonggao").css("display","block")
            }
            if(/^[A-Za-z0-9]{6,20}$/.test($(this).val())){
                $(".pMimatishi").css("display","block").html("6-20个字符，由字母，数字和符号两种以上组合").css("color","#999")
                $(".mimaDizhonggao .span2").css("background","#f90")
                $(".mimaDizhonggao").css("display","block")   
                
            }
        }
    })
})