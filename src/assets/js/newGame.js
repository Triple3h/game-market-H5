
$(function () {
    $.get(NEWGAME_URL,function (result) {
        if (result.status===200){

             for (let i = 0; i < 2; i++) {
                        let $newgames = $("#newgames");
                        var datum = result.data;
                       let newGame1 = newGame(datum);
                       $newgames.append(newGame1);
                init();
                }


        }
    },'json');

   function newGame(datum) {

       for (let i = 0; i <2; i++) {
           let o = '<div class="col-4">' +
           '<!--Single Game Start-->' +
           '<div class="single-game mb-50">' +
           '<div class="game-img">' +
           '<a href="games-details.html"><img src='+datum[i].shopImages.shopImg+' alt='+datum[i].gameName+'></a>' +
           '</div>' +
           '<div class="game-content">' +
           '<h4><a href="games-details.html">'+datum[i].gameName+'</a></h4>' +
           '<span>'+datum[i].platforms.platformName+'</span>' +
           '</div>' +
           '</div>' +
           '<!--Single Game End-->' +
           '</div>';
        return o;
       }



   }
});