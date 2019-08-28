
$(function () {
    $.get(TOPGAME_URL,function (result) {
        if (result.status ===200 ){
           let $topgame =$("#topgame");
            for (const datas of result.data) {
                    let findtop1 = findtop(datas);
                    $topgame.append(findtop1);
            }

        }
    },'json');
    function findtop(datas) {

            let o ='<div class="col-lg-4 col-md-6">' +
                '<!--Single Games Review Start-->' +
                '<div class="single-games-review mb-50">' +
                '<div class="review-img">' +
                '<a href="games-details.html"><img src='+datas.shopImages.shopImg+'  alt='+datas.gameName+'></a>' +
                '</div>' +
                '<div class="review-content">' +
                '<h4><a href="games-details.html">'+datas.gameName+'</a></h4>' +
                '<span>rating: '+datas.score+'</span>' +
                '<p>'+datas.gameInfos.gameIntro+'</p>' +
                '</div>' +
                '</div>' +
                '<!--Single Games Review End-->' +
                '</div>';
            return o;


    }
});

