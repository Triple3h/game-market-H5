$(function () {
    $.get(SMALL_BANNER_URL,function (result) {
        if (result.status === 200) {


                $("#single-featured0").append($("<a>").attr("href","#").append($("<img>").attr("src",result.data[0].detailUrl).attr("alt",result.data[0].title)));
                $("#single-featured1").append($("<a>").attr("href","#").append($("<img>").attr("src",result.data[1].detailUrl).attr("alt",result.data[1].title)));
                $("#single-featured2").append($("<a>").attr("href","#").append($("<img>").attr("src",result.data[2].detailUrl).attr("alt",result.data[2].title)));
                $("#single-featured3").append($("<a>").attr("href","#").append($("<img>").attr("src",result.data[3].detailUrl).attr("alt",result.data[3].title)));

            // <a href="#"><img src="assets/images/feature/feature-slide-1.jpg" alt=""></a>

        }
    },'json')

});