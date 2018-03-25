//META{"name":"botBG"}*//
function botBG() {}

botBG.prototype.convert = function(target) {
var closestParentBot = $('strong[style="color: rgb(31, 139, 76);"]').closest(".message");

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
});


botBG.prototype.onMessage = function() {};

botBG.prototype.onSwitch = function() {};

botBG.prototype.start = function() {
	this.convert(document);
};

botBG.prototype.observer = function(e) {
	this.convert(e.target);
};

botBG.prototype.load = function() {};
botBG.prototype.unload = function() {};
botBG.prototype.stop = function() {};
botBG.prototype.getSettingsPanel = function() {
	return "";
};

botBG.prototype.getName = function() {
	return "Bot Background";
};
botBG.prototype.getDescription = function() {
	return "Gives bots a background";
};
botBG.prototype.getVersion = function() {
	return "1.0.0";
};
botBG.prototype.getAuthor = function() {
	return "Hiki Hollow";
};
