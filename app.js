let onSuccess = function(data) {
    console.log(data);
    $("img").attr("src",data.img);
    $("div#anime-fact").text(data.data[0].fact);
};

let onError = function() {
    console.log("Qualcosa è andato storto...");
}


let onSubmit = function(event) {
    console.log("Submit!");
    event.preventDefault();
    let anime = $("#search-anime").val();
    $.getJSON(`https://anime-facts-rest-api.herokuapp.com/api/v1/${anime}`)
    .done(onSuccess)
    .fail(onError);
}

$("form").submit(onSubmit);