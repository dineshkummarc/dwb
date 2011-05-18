if(require.has){
	require.has.add("config-selectorEngine", "acme");
}
define([
	"./kernel",
	"./sniff",
	"./connect", // until we decide if connect is going back into non-browser environments
	"./unload",
	"./url",
	"./window",
	"./event",
	"./html",
	"./NodeList",
	"../query",
	"./xhr",
	"./fx"], function(dojo) {
	// module:
	//		dojo/_base/browser
	// summary:
	//		This module causes the browser-only base modules to be loaded.
	return dojo;
});


