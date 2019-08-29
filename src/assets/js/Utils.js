function cutUrl(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return decodeURI(r[2]);
    return null;
}

function itemPager(URL, $target) {
    $.get(URL, function (results) {
        if (results.status === 200) {
            for (let result of results.data) {
                //最外层div
                $("<div>").append(
                    //第二层div
                    $("<div>").append(
                        //图片div
                        $("<div>").append(
                            //a标签
                            $("<a>").append(
                                //图片
                                $("<img>").attr("src", result.shopImages.shopImg)
                            ).attr("href", "games-details.html?gameId=" + result.gameId)
                        ).attr("class", "game-img")
                        //信息div
                    ).append(
                        $("<div>").append(
                            //h4
                            $("<h4>").append(
                                //a标签
                                $("<a>").attr("href", "games-details.html?gameId=" + result.gameId)
                                    .text(result.gameName)
                            )
                            //span标签
                        ).append(
                            $("<span>").text(result.platforms.platformName)
                        ).attr("class", "game-content")
                    ).attr("class", "single-game")
                        .addClass("mb-50")
                ).attr("class", "col-lg-4")
                    .addClass("col-md-6")
                    .appendTo($target)
            }
        }
    }, 'json')
}

function offPager(URL, $target) {
    $.get(URL, function (results) {
        if (results.status === 200) {
            for (let result of results.data) {
                //最外层div
                $("<div>").append(
                    //第二层div
                    $("<div>").append(
                        //图片div
                        $("<div>").append(
                            //a标签
                            $("<a>").append(
                                //图片
                                $("<img>").attr("src", result.shopImages.shopImg)
                            ).attr("href", "games-details.html?gameId=" + result.gameId)
                        ).attr("class", "game-img")
                        //信息div
                    ).append(
                        $("<div>").append(
                            //h4
                            $("<h4>").append(
                                //a标签
                                $("<a>").attr("href", "games-details.html?gameId=" + result.gameId)
                                    .text(result.gameName)
                            )
                            //span标签
                        ).append(
                            $("<span>").append(
                                $("<span>").text("¥" + parseInt(result.price * result.discount) + "       ")
                            ).append(
                                $("<del>").text(result.price)
                            )
                        ).attr("class", "game-content")
                    ).attr("class", "single-game")
                        .addClass("mb-50")
                ).attr("class", "col-lg-4")
                    .addClass("col-md-6")
                    .appendTo($target)
            }
        }
    }, 'json')
}

function getReview(review, $target) {

    let $star = $("<div>").attr("class", "ratting");

    for (let i = 0; i < review.reviewScore; i++) {
        $("<i>").attr("class", "fa").addClass("fa-star").appendTo($star)
    }

    $("<div>").append(
        $("<h4>").text(review.reviewTitle)
    ).append($star).append(
        $("<p>").text(review.reviewContent)
    ).append(
        $("<div>").append(
            $("<a>").attr("href", "#")
                .text(review.user.userName)
        ).attr("class", "review-name-action")
    ).attr("class", "single-review")
        .addClass("mb-30")
        .insertAfter($target)
}

function getCarts(URL, $target) {

    $.get(URL, function (results) {
        if (results.status === 200) {
            for (let result of results.data) {
                $("<ul>").append(
                    $("<li>").attr("class", "list_con")
                        .append(
                            $("<div>").attr("class", "list_text")
                                .append(
                                    $("<a>").attr("href", "javascript:;")
                                        .text(result.game.gameName)
                                )
                        )
                ).append(
                    $("<li>").attr("class", "list_price")
                        .append(
                            $("<span>").attr("class", "price")
                                .text("￥" + result.game.price * result.game.discount)
                        )
                ).append(
                    $("<li>").attr("class", "list_amount")
                        .append(
                            $("<div>").attr("class", "amount_box")
                                .append(
                                    $("<a>").attr("href", "javascript:;")
                                        .attr("class", "reduce")
                                        .addClass("reSty")
                                        .text("-")
                                ).append(
                                $("<input>").attr("type", "text")
                                    .attr("value", result.number)
                                    .attr("class", "sum")
                            ).append(
                                $("<a>").attr("href", "javascript:;")
                                    .attr("class", "plus")
                                    .text("+")
                            )
                        )
                ).append(
                    $("<li>").attr("class", "list_op")
                        .append(
                            $("<span>").attr("class", "del")
                                .append(
                                    $("<a>").attr("href", "javascript:;")
                                        .attr("class", "delBtn")
                                        .text("移除商品")
                                )
                        )
                ).append(
                    $("<li>").attr("class", "list_sum")
                        .append(
                            $("<span>").attr("class", "sum_price")
                                .text("￥" + result.game.price * result.game.discount * result.number)
                        )
                ).attr("class", "order_lists")
                    .addClass("col-lg-12")
                    .prependTo($target)
            }
        }
    },'json')

}
