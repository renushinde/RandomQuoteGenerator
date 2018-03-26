

$(document).ready(function(){
	function getNewQuote(){
       $.ajax({
         url: 'https://api.forismatic.com/api/1.0/',
         jsonp:'jsonp',
         dataType:'jsonp',
         data:{
         	method:'getQuote',
            lang: 'en',
            format: 'jsonp'
         },
         success:function(response){
         	$(".quote").html(response.quoteText);
    	    $(".author").html(response.quoteAuthor);
         //	console.log(response.quoteText);
         //	console.log(response.quoteAuthor);
         }

       });

	}
getNewQuote();

$("#newQuote").on("click", function(){
getNewQuote();
});
});