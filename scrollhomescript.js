var controller = new ScrollMagic.Controller();
var change = 30;
// build scenes
		var revealElements = document.getElementsByClassName("digit");
		for (var i=0; i<revealElements.length; i++) { // create a scene for each element
			new ScrollMagic.Scene({
								triggerElement: revealElements[i], // y value not modified, so we can use element as trigger as well
								offset: change,												 // start a little later
								triggerHook: 0.9,
							})

							.setClassToggle(revealElements[i], "visible") // add class toggle
							.addIndicators({name: "digit " + (i+1) }) // add indicators (requires plugin)
							.addTo(controller);
              change+=15;
		}
