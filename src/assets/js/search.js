$(function () {
    
    let val = $("#searchgg").val();
    // $("#searchb").attr("action","games.html?"+"gameName="+val);
   let data={
        gameName:val
    };
    $.get(SEARCH_URL,data,function (result) {
        if (result.status===200){

        }
    })



});