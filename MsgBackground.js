/***
			--- GLOBAL VARS ---
***/
var closestParentBot = $('strong[style="color: rgb(31, 139, 76);"]').closest(".message-group");


/***
		--- CODE ---
***/

// DOES NOT HAVE ".message-text"
if ($(".message").not(".message-text")) {
	// IF It's empty, ignore.
	if ($(closestParentBot > ".accessory").is(":empty")) {} else {
		$(closestParentBot).find(".accessory")
			.css({
				background: "url(https://pa1.narvii.com/5579/b6a9020b6bf1efbda206edaa547ea8cc432739e8_hq.gif) 0 0 / cover no-repeat",
				padding: "5px",
				margin: "5px",
				border: "1px solid rgba(210, 42, 150, 0.55)",
				"border-radius": "10px"
			});
	}
}

if ($(".message").has(".message-text")) {
	//Find message-text and apply css, if empty, ignore
	if ($(closestParentBot > ".message-text").is(":empty")) {} else {
		$(closestParentBot).find(".message-text")
			.css({
				background: "url(https://pa1.narvii.com/5579/b6a9020b6bf1efbda206edaa547ea8cc432739e8_hq.gif) 0 0 / cover no-repeat",
				padding: "5px",
				margin: "5px",
				border: "1px solid rgba(210, 42, 150, 0.55)",
				"border-radius": "10px"
			});
	}
}
