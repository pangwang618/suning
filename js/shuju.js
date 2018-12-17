$.ajax({
    type:"get",
    url:"php/shuju.php",
    data:"shuju=shangpinliebiao",
    success:function(res){
        var cainixihuan=""
        JSON.parse(res).forEach(function(item){
            return cainixihuan+=`<li>
            <a href="">
                <img src="images/${item.img}" alt="">
                <p class="p1">${item.content}</p>
                <p class="p2">￥${item.price}</p>
                <a href="" class="zxs">找相似</a>
            </a>
        </li>`
        })
        $(".cainixihuanshangpin ul").html(cainixihuan) 

    }
})
// data:"shuju=shangpinliebiao"
$.ajax({
    type:"get",
    url:"php/shuju.php",
    data:"shuju=renqihaohuoshuju",
    success:function(res){
        var renqihaohuostr=""
        JSON.parse(res).forEach(item=>renqihaohuostr+=`<li class="${item.class}">
        <a href="">
            <p>${item.content}</p>
            <img src="images/${item.img}" alt="">
            <em>${item.num}人说好</em>
        </a>
    </li>`)
    $(".rqhhcontent").html(renqihaohuostr)
    }
})
$.ajax({
    type:"get",
    url:"php/shuju.php",
    data:"shuju=shenghuobuluoshuju",
    success:function(res){
        var shenghuobuluostr=""
        JSON.parse(res).forEach(item=>shenghuobuluostr+=`<li class="${item.class}">
        <a href="">
            <p class="shblli1p1">${item.content1}</p>
            <p class="shblli1p2">${item.content2}</p>
            <img class="shblli1img1" src="images/${item.img1}" alt="">
            <img class="shblli1img1" src="images/${item.img2}" alt="">
        </a>
    </li>`)
    $(".shblcontent").html(shenghuobuluostr)
    }
})