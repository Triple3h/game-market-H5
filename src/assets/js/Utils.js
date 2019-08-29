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

    let $star = $("<div>").attr("class","ratting");

    for(let i = 0;i<review.reviewScore;i++){
        $("<i>").attr("class","fa").addClass("fa-star").appendTo($star)
    }

    $("<div>").append(
        $("<h4>").text(review.reviewTitle)
    ).append($star).append(
        $("<p>").text(review.reviewContent)
    ).append(
        $("<div>").append(
            $("<a>").attr("href","#")
                .text(review.user.userName)
        ).attr("class","review-name-action")
    ).attr("class","single-review")
        .addClass("mb-30")
        .appendTo($target)
}

// <div class="single-review mb-30">
//     <h4>Best action game play ever</h4>
//         <div class="ratting">
//             <i class="fa fa-star"></i>
//             <i class="fa fa-star"></i>
//             <i class="fa fa-star"></i>
//             <i class="fa fa-star"></i>
//             <i class="fa fa-star-half-o"></i>
//         </div>
//     <p>The Witcher 3 is the best action game that i play ever. encounter consequences
//     that are mely painful. Nor again is there me anyone who loves or pursues or
//     desires take a trivial meaning less sexample, which of us ever undertakes
//     laborious physical exercise.</p>
//     <div class="review-name-action">
//         <a href="#">Adam Smith</a>
//     </div>
// </div>

// <div class="col-lg-4 col-md-6">
//     <div class="single-game mb-50">
//         <div class="game-img">
//             <a href="games-details.html"><img src="assets/images/game/game1.jpg" alt=""></a>
//         </div>
//         <div class="game-content">
//             <h4><a href="games-details.html">the elder scroll</a></h4>
//             <span>pc/xbox/ps4</span>
//         </div>
//     </div>
// </div>