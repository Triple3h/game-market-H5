
$(function () {
    $.get(NEWGAME_URL,function (result) {
        if (result.status===200){
            let $newgames = $("#newgames");
            let $div1 = $("<div>").attr("class","col-4").addClass("slick-slide").addClass("slick-current").addClass("slick-active").width(400);
            let $div2 = $("<div>").attr("class","col-4").addClass("slick-slide").addClass("slick-current").addClass("slick-active").width(400);
            let $div3 = $("<div>").attr("class","col-4").addClass("slick-slide").addClass("slick-current").addClass("slick-active").width(400);
            //col-4 slick-slide slick-current slick-active
            for (let i = 0; i < 2; i++) {
                let data = result.data[i];
                let newGame1 = newGame(data);
                $div1.append(newGame1);
            }
            for (let i = 2; i < 4; i++) {
                let data = result.data[i];
                let newGame1 = newGame(data);
                $div2.append(newGame1);
            }
            for (let i = 4; i < 6; i++) {
                let data = result.data[i];
                let newGame1 = newGame(data);
                $div3.append(newGame1);
            }
            $newgames.append($div1);
            $newgames.append($div2);
            $newgames.append($div3);
        }

    },'json');
    function newGame(data) {
        for (let i = 0; i < 6; i++) {
            let o = '<div class="single-game mb-50">' +
                '<div class="game-img">' +
                '<a href="games-details.html?gameId='+data.gameId+'"><img src='+data.shopImages.shopImg+' alt='+data.gameName+'></a>' +
                '</div>' +
                '<div class="game-content">' +
                '<h4><a href="games-details.html?gameId='+data.gameId+'">'+data.gameName+'</a></h4>' +
                '<span>'+data.platforms.platformName+'</span>' +
                '</div>' +
                '</div>' ;
            return o;
        }
    }

});


// '<div class="col-4">' +
// '<!--Single Game Start-->' +
// '<div class="single-game mb-50">' +
// '<div class="game-img">' +
// '<a href="games-details.html"><img src='+datum[i].shopImages.shopImg+' alt='+datum[i].gameName+'></a>' +
// '</div>' +
// '<div class="game-content">' +
// '<h4><a href="games-details.html">'+datum[i].gameName+'</a></h4>' +
// '<span>'+datum[i].platforms.platformName+'</span>' +
// '</div>' +
// '</div>' +
// '<!--Single Game End-->' +
// '</div>';