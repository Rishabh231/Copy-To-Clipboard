$(document).ready(function(){
    $("#btn").on("click", function(){
        $("#text").select();
        document.execCommand("copy")
    })
}) 