Q(document).ready(function() {
// target all current images and replace directory in full path url
	Q("img").each(function() {
		 Q(this).attr('src',  Q(this).attr('src').replace("static/25f42fd6","userContent")) ;
   	});
   	
   	// target status images and hide them
   	Q('img[alt="Pending"]').remove();
   	Q('img[alt="Success"]').remove();
   	Q('img[alt="Failed"]').remove();
   	
// google webfont
	WebFontConfig = {
		google: { families: [ 'Open+Sans:400,700:latin' ] }
	};
	(function() {
		var wf = document.createElement('script');
		wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
		'://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
		wf.type = 'text/javascript';
		wf.async = 'true';
		var s = document.getElementsByTagName('script')[0];
		s.parentNode.insertBefore(wf, s);
	})();
  
// Sticky footer 
// Window load event used just in case window height is dependant upon images

Q(window).bind("load", function() { 
       
	var footerHeight = 0,
	footerTop = 0,
	Qfooter = Q("#footer");
	   
	positionFooter();
	
	function positionFooter() {
		footerHeight = Qfooter.height();
		footerTop = (Q(window).scrollTop()+Q(window).height()-footerHeight)+"px";
		if ( (Q(document.body).height()+footerHeight) < Q(window).height()) {
			Qfooter.css({position: "absolute"})
		} else {
			Qfooter.css({
			position: "static"
		})
	}
	}
	
	Q(window)
	       .scroll(positionFooter)
	       .resize(positionFooter)
	       });
	       
	//make sidebar into divs?
	/*
		Q('#navigation table').each(function (){
			Q(this).replaceWith( Q(this).html()
				.replace(/<tbody/gi, "<div class='table'")
				.replace(/<tr/gi, "<div class='row'")
				.replace(/<\/tr>/gi, "</div>")
				.replace(/<td/gi, "<span")
				.replace(/<\/td>/gi, "</span>")
				.replace(/<\/tbody/gi, "<\/div")
			);
	});
	*/
});