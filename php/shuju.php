<?php
$a=$_GET["shuju"];
$b='[{"img":"cainixihuan1.jpg",
    "content":"18款式3双装 毛线袜子原宿民族风粗线日系中筒男女情侣袜子全棉英伦复古 3双装 均码",
    "price":"173.36"
},{
"img":"cainixihuan1.jpg",
    "content":"18款式3双装 毛线袜子原宿民族风粗线日系中筒男女情侣袜子全棉英伦复古 3双装 均码",
    "price":"173.36"
}]';
$c='[{"img":"s1.jpg","opa":1},
    {"img":"s2.jpg","opa":0},
    {"img":"s3.jpg","opa":0},
    {"img":"s4.jpg","opa":0},
    {"img":"s5.jpg","opa":0},
    {"img":"s6.jpg","opa":0},
    {"img":"s7.jpg","opa":0},
    {"img":"s8.jpg","opa":0}
    ]';
$d='[{"class":"rqhhli1","content":"一晚低至1度电","img":"kt.webp.jpg","num":"330"},
    {"class":"rqhhli1","content":"一晚低至1度电","img":"kt.webp.jpg","num":"330"}]';
$e='[{"class":"shblli1","content1":"宝宝营养师","content2":"强身健体优选","img1":"aaa.jpg","img2":"aaaa.jpg"},
{"class":"shblli2","content1":"宝宝营养师","content2":"强身健体优选","img1":"aaa.jpg","img2":"aaaa.jpg"},
{"class":"shblli3","content1":"宝宝营养师","content2":"强身健体优选","img1":"aaa.jpg","img2":"aaaa.jpg"},
{"class":"shblli4","content1":"宝宝营养师","content2":"强身健体优选","img1":"aaa.jpg","img2":"aaaa.jpg"}]';
if($a==="shangpinliebiao"){
    echo $b;
}else if($a==="lunboshuju"){
    echo $c;
}else if($a==="renqihaohuoshuju"){
    echo $d;
}else if($a==="shenghuobuluoshuju"){
    echo $e;
}
?>