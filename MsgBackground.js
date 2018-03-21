/***
			--- GLOBAL VARS ---
***/
var closestParentBot = $('strong[style="color: rgb(31, 139, 76);"]').closest(".message");


/***
		--- CODE ---
***/

$(closestParentBot).find("[class*='embedInner']:not(:empty)")
	.css({
		background: "url(https://pa1.narvii.com/5579/b6a9020b6bf1efbda206edaa547ea8cc432739e8_hq.gif) 0 0 / cover no-repeat",
		padding: "5px",
		margin: "5px",
		border: "1px solid rgba(210, 42, 150, 0.55)",
		"border-radius": "10px"
	});

$(closestParentBot).find(".message-text:not(:has(.markup:empty))")
	.css({
		background: "url(https://pa1.narvii.com/5579/b6a9020b6bf1efbda206edaa547ea8cc432739e8_hq.gif) 0 0 / cover no-repeat",
		padding: "5px",
		margin: "5px",
		border: "1px solid rgba(210, 42, 150, 0.55)",
		"border-radius": "10px",
	});

$(closestParentBot).find("[class*='embedInner-']:not(:empty), [class*='embedFooterText-'], .markup:not(:empty)").css({
	"background-color": "rgba(0,0,0,0.5)",
	"border-radius": "10px",
	padding: "5px"
})
