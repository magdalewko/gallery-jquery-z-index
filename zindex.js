$("#imgs img").click(function(){
	$(this).css({position:'absolute',
				top:'40px',
				right:'100px'});
	$("#imgs img").not(this).each(function(){
	$(this).css({position:'initial'});	
	});
});
