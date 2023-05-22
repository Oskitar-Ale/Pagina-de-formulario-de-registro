$(function(){

    $("#p2").css({"background-color":"red"});

    $("#btn-click").click(
        function(){
            for (var i=0; i<=10; i++){
                $("#p2").append("<p>Hola Dios, yo de nuevo</p>");
            }
            
        }
    );
    /*$("#btn-click2").click(
        function(){
            $("#p2").show();
        }
    );*/
    
});