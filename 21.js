$(document).ready(function() {
    $("#get-data").click(function() {
        $.ajax({
            url: "https://jsonplaceholder.typicode.com/posts",
            method: "GET",
            dataType: "json",
            success: function(result) {
                var data = "";
                $.each(result, function(index, post) {
                    data += "<h2>" + post.title + "</h2><p>" + post.body + "</p>";
                });
                $("#data-container").html(data);
            }
        });
    });
});

