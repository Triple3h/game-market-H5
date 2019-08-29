$(function () {
    $.get(BIG_BANNER_URL, function (result) {
        if (result.status === 200) {
            $("#hero-item0").css("background-image", "url(" + result.data[0].bannerImg + ")");
            $("#hero-item0 .hero-content")
                .append($("<h1>").text(result.data[0].title))
                .append($("<a>").attr("class", "df-btn").attr("href", "games-details.html?gameId="+result.data[0].gameId).text("Buy now"));


            $("#hero-item1").css("background-image", "url(" + result.data[1].bannerImg + ")");
            $("#hero-item1 .hero-content")
                .append($("<h1>").text(result.data[1].title))
                .append($("<a>").attr("class", "df-btn").attr("href", "games-details.html?gameId="+result.data[1].gameId).text("Buy now"));


            $("#hero-item2").css("background-image", "url(" + result.data[2].bannerImg + ")");
            $("#hero-item2 .hero-content")
                .append($("<h1>").text(result.data[2].title))
                .append($("<a>").attr("class", "df-btn").attr("href", "games-details.html?gameId="+result.data[2].gameId).text("Buy now"));

            $("#hero-item3").css("background-image", "url(" + result.data[3].bannerImg + ")");
            $("#hero-item3 .hero-content")
                .append($("<h1>").text(result.data[3].title))
                .append($("<a>").attr("class", "df-btn").attr("href", "").text("Buy now"));

            $("#hero-item4").css("background-image", "url(" + result.data[4].bannerImg + ")");
            $("#hero-item4 .hero-content")
                .append($("<h1>").text(result.data[4].title))
                .append($("<a>").attr("class", "df-btn").attr("href", "").text("Buy now"));


        }
    }, 'json');


});