var bs = ""
var bc = ""
var bw = 0
var iw = ""
var ih = ""
var likes = 0
var comment = ""
var all_comments = ""
function likes_function () { 
    likes =likes+1
    document.getElementById("zero").innerHTML=likes
}

function dislikes_function () { 
    likes =likes-1
    document.getElementById("zero").innerHTML=likes
}

function comment_add () {
    comment = document.getElementById("comments").value
    document.getElementById("comments_display").innerHTML=comment
}

function bs_f () {
    bs=document.getElementById("1").value
    document.getElementById("imageofpanner").style.borderStyle=bs
}
function bc_f () {
    bc=document.getElementById("2").value
    document.getElementById("imageofpanner").style.borderColor=bc
}
function bw_f () {
    bw=document.getElementById("3").value
    document.getElementById("imageofpanner").style.borderWidth=bw
}
function imageproperties () {
    iw=document.getElementById("4").value
    ih=document.getElementById("5").value
    document.getElementById("imageofpanner").style.width=iw
    document.getElementById("imageofpanner").style.height=ih
}