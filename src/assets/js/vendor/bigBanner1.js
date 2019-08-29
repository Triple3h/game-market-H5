
$(function () {
   $.get(BIG_BANNER_URL,function (result) {
       if (result.status===200){
           for (let datas of result.data) {
                let $bigbanner = $(".hero-slider");
                 let s = bbbner(datas);
                $bigbanner.append(s);
                $bigbanner.init();
           }
       }
   },'json');
    
   function bbbner(datas) {
       let o ='<div class="hero-item hero-item-2 slick-slide slick-current slick-active" style="background-image:url('+datas.bannerImg+')">' +
           '<div class="container container-1520">' +
           '<div class="row">' +
           '<div class="col-12">' +
           '' +
           '<!--Hero Content start-->' +
           '<div class="hero-content">' +
           '<h1>'+datas.title+'</h1>' +
           '' +
           '<a class="df-btn" href="#">Buy now</a>' +
           '</div>' +
           '<!--Hero Content end-->' +
           '</div>' +
           '</div>' +
           '</div>' +
           '</div>';
       return o;
   }
});

