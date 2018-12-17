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