
$(function () {

    let s = cutUrl("page");

    // let gameId = cutUrl("gameId");

    let gameId =2;

    let $page = $(".page-pagination li a");

    // $(this).children().attr("href", "games.html?opt=" + opt + "&pages=" + (i + 1) + "&cateId=" + cateId);

    $.each($page,function (i) {
        $(this).attr("href",  "forum.html?gameId=" + gameId + "&page=" + (i+1) + "&size=6");
    });


   const FORUM_URL= REVIEW_URL +"?gameId=" +gameId +"&size=6&page="+ s ;
   $.get(FORUM_URL,function (result) {
       if (result.status===200) {
           for (const datas of result.data) {
               let $review = $("#review");
               let s1 = jianpan(datas);
               $review.append(s1);
           }
       }
   },'json');

   function jianpan(datas) {

       let o='<div class="col-12">' +
           '<!--Single Forum Start-->' +
           '<div class="single-forum mb-30">' +
           '<h3><a href="forum-post.html">'+datas.reviewContent+'</a></h3>' +
           '<div class="forum-meta">' +
           '<ul>' +
           '<li><a href="#"><img src="assets/images/author/forum-author1.png" tppabs="https://www.17sucai.com/preview/1528155/2018-12-26/Gilbard/assets/images/author/forum-author1.png" alt="">'+datas.users.userName+'</a></li>' +
           '<li>'+datas.releaseTime+'</li>' +
           '<li><a href="#">12 reply</a></li>' +
           '</ul>' +
           '<span class="view">view 215</span>' +
           '</div>' +
           '<span class="sticker">new</span>' +
           '</div>' +
           '<!--Single Forum End-->' +
           '</div>';

       return o;
   }

});