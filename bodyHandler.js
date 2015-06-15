
bodyHandler = (function () {

	function removeAll(){

			var returnButton = document.getElementById("return");
			returnButton.classList.remove("load");

			var aboutButton = document.getElementById("aboutHide");
			aboutButton.classList.remove("load");

			var aboutBody = document.getElementById("aboutBody");
			aboutBody.classList.remove("load");

			var aboutNav = document.getElementById("about");
			aboutNav.classList.remove("currentlyOn");

			var aboutBodyElements = document.querySelectorAll("#aboutBody *");
			var i = 0;
			for(i; i < aboutBodyElements.length; i++) {
				aboutBodyElements[i].classList.remove("load");
			}

			var blogButton = document.getElementById("blogHide");
			blogButton.classList.remove("load");

			var blogBody = document.getElementById("blogBody");
			blogBody.classList.remove("load");

			var blogNav = document.getElementById("blog");
			blogNav.classList.remove("currentlyOn");

			var blogBodyElements = document.querySelectorAll("#blogBody *");
			var i = 0;
			for(i; i < blogBodyElements.length; i++) {
				blogBodyElements[i].classList.remove("load");
			}

			var contactButton = document.getElementById("contactHide");
			contactButton.classList.remove("load");

			var contactBody = document.getElementById("contactBody");
			contactBody.classList.remove("load");

			var contactNav = document.getElementById("contact");
			contactNav.classList.remove("currentlyOn");

			var contactBodyElements = document.querySelectorAll("#contactBody *");
			var i = 0;
			for(i; i < contactBodyElements.length; i++) {
				contactBodyElements[i].classList.remove("load");
			}

			var cvButton = document.getElementById("cvHide");
			cvButton.classList.remove("load");

			var cvBody = document.getElementById("cvBody");
			cvBody.classList.remove("load");

			var cvNav = document.getElementById("cv");
			cvNav.classList.remove("currentlyOn");

			var cvBodyElements = document.querySelectorAll("#cvBody *");
			var i = 0;
			for(i; i < cvBodyElements.length; i++) {
				cvBodyElements[i].classList.remove("load");
			}
	}

	function fadeAll(){	
			var aboutBody = document.getElementById("aboutBody");
			var blogBody = document.getElementById("blogBody");			
			var contactBody = document.getElementById("contactBody");
			var cvBody = document.getElementById("cvBody");
			var body;
			if (aboutBody.classList.contains("load")) {
				body = aboutBody;
			}
			else if (blogBody.classList.contains("load")) {
				body = blogBody;
			}
			else if (contactBody.classList.contains("load")) {
				body = contactBody;
			}
			else {
				body = cvBody;
			}

			var i = 30;
    		while(i >= 0) {
    			body.style.opacity = i/30;
    			i--;
    		}
	}

	init = function () {

		/* When "ABOUT" is pressed, show or hide the about body. */
		var aboutButton = document.getElementById("aboutHide");
		aboutButton.addEventListener('click', function () {
			var aboutBody = document.getElementById("aboutBody");
			var aboutBodyElements = document.querySelectorAll("#aboutBody *");
			var aboutNav = document.getElementById("about");
			var returnButton = document.getElementById("return");

			if(aboutBody.classList.contains("load")) {	
				fadeAll();										
    			removeAll();	
			}
			else {
				fadeAll();
				removeAll();
				aboutBody.classList.add("load");
				aboutBody.classList.add("load");
				aboutButton.classList.add("load");
				aboutNav.classList.add("currentlyOn");
				returnButton.classList.add("load");

				var i = 0;
				for(i; i < aboutBodyElements.length; i++) {
					aboutBodyElements[i].classList.add("load");
				}

				var i = 0;
    			while(i <= 30) {
	    			aboutBody.style.opacity = i/30;
	    			i++;
    			}
			}
		});

		/* When "BLOG" is pressed, show or hide the blog body. */
		var blogButton = document.getElementById("blogHide");
		blogButton.addEventListener('click', function () {
			var blogBody = document.getElementById("blogBody");			
			var blogBodyElements = document.querySelectorAll("#blogBody *");
			var blogNav = document.getElementById("blog");
			var returnButton = document.getElementById("return");

			if(blogBody.classList.contains("load")) {
				fadeAll();
				removeAll();
			}
			else {
				fadeAll();
				removeAll();
				blogBody.classList.add("load");
				blogButton.classList.add("load");
				blogNav.classList.add("currentlyOn");
				returnButton.classList.add("load");
				
				var i = 0;
				for(i; i < blogBodyElements.length; i++) {
					blogBodyElements[i].classList.add("load");
				}

				var i = 0;
    			while(i <= 30) {
	    			blogBody.style.opacity = i/30;
	    			i++;
    			}
			}
		});

		/* When "CONTACT" is pressed, show or hide the contact body. */
		var contactButton = document.getElementById("contactHide");
		contactButton.addEventListener('click', function () {
			var contactBody = document.getElementById("contactBody");
			var contactBodyElements = document.querySelectorAll("#contactBody *");
			var contactNav = document.getElementById("contact");
			var returnButton = document.getElementById("return");

			if(contactBody.classList.contains("load")) {
				fadeAll();
				removeAll();
			}
			else {
				fadeAll();
				removeAll();
				contactBody.classList.add("load");
				contactButton.classList.add("load");
				contactNav.classList.add("currentlyOn");
				returnButton.classList.add("load");

				var i = 0;
				for(i; i < contactBodyElements.length; i++) {
					contactBodyElements[i].classList.add("load");
				}

				var i = 0;
    			while(i <= 30) {
	    			contactBody.style.opacity = i/30;
	    			i++;
    			}
			}
		});

		/* When "CV" is pressed, show or hide the cv body. */
		var cvButton = document.getElementById("cvHide");
		cvButton.addEventListener('click', function () {
			var cvBody = document.getElementById("cvBody");
			var cvBodyElements = document.querySelectorAll("#cvBody *");
			var cvNav = document.getElementById("cv");
			var returnButton = document.getElementById("return");

			if(cvBody.classList.contains("load")) {
				fadeAll();
				removeAll();
			}
			else {
				fadeAll();
				removeAll();
				cvBody.classList.add("load");
				cvButton.classList.add("load");
				cvNav.classList.add("currentlyOn");
				returnButton.classList.add("load");

				var i = 0;
				for(i; i < cvBodyElements.length; i++) {
					cvBodyElements[i].classList.add("load");
				}

				var i = 0;
    			while(i <= 30) {
	    			cvBody.style.opacity = i/30;
	    			i++;
    			}
			}
		});

		/* When the return button at the bottom of the page is pressed,
			clear the page of all bodies */
		var returnButton = document.getElementById("returnHide");
		returnButton.addEventListener('click', function() {
			var elevator = new Elevator({
				duration: 1700
			});

			var remove = function() {
				removeAll();
				console.log("Test");
			};

			elevator.elevate();
			setTimeout(remove, 1700);
			fadeAll();

		});
	};

	return {
		init: init
	};	
}());

bodyHandler.init();

/*!
 * Elevator.js
 *
 * MIT licensed
 * Copyright (C) 2015 Tim Holman, http://tholman.com
 */

/*********************************************
 * Elevator.js
 *********************************************/

var Elevator = function(options) {

    'use strict';

    // Elements
    var body = null;

    // Scroll vars
    var animation = null;
    var duration = null; // ms
    var customDuration = false;
    var startTime = null;
    var startPosition = null;
    var elevating = false;

    var mainAudio;
    var endAudio;

    var that = this;
    /**
     * Utils
     */

    // Thanks Mr Penner - http://robertpenner.com/easing/
    function easeInOutQuad( t, b, c, d ) {
        t /= d / 2;
        if ( t < 1 ) return c / 2 * t * t + b;
        t--;
        return -c / 2 * ( t * ( t -2 ) - 1 ) + b;
    };

    function extendParameters(options, defaults){
        for( var option in defaults ){
            var t = options[option] === undefined && typeof option !== "function";
            if(t){
                options[option] = defaults[option];
            }
        }
        return options;
    }

    /**
     * Main
     */

    // Time is passed through requestAnimationFrame, what a world!
    function animateLoop( time ) {
        if ( !startTime ) {
            startTime = time;
        }

        var timeSoFar = time - startTime;
        var easedPosition = easeInOutQuad(timeSoFar, startPosition, -startPosition, duration);

        window.scrollTo(0, easedPosition);

        if( timeSoFar < duration ) {
            animation = requestAnimationFrame(animateLoop);
        } else {
            animationFinished();
        }
   };

//            ELEVATE!
//              /
//         ____
//       .'    '=====<0
//       |======|
//       |======|
//       [IIIIII[\--()
//       |_______|
//       C O O O D
//      C O  O  O D
//     C  O  O  O  D
//     C__O__O__O__D
//    [_____________]
    this.elevate = function() {

        if( elevating ) {
            return;
        }

        elevating = true;
        startPosition = (document.documentElement.scrollTop || body.scrollTop);

        // No custom duration set, so we travel at pixels per millisecond. (0.75px per ms)
        if( !customDuration ) {
            duration = (startPosition * 1.5);
        }

        requestAnimationFrame( animateLoop );

        // Start music!
        if( mainAudio ) {
            mainAudio.play();
        }
    }

    function resetPositions() {
        startTime = null;
        startPosition = null;
        elevating = false;
    }

    function animationFinished() {

        resetPositions();

        // Stop music!
        if( mainAudio ) {
            mainAudio.pause();
            mainAudio.currentTime = 0;
        }

        if( endAudio ) {
            endAudio.play();
        }
    }

    function onWindowBlur() {

        // If animating, go straight to the top. And play no more music.
        if( elevating ) {

            cancelAnimationFrame( animation );
            resetPositions();

            if( mainAudio ) {
                mainAudio.pause();
                mainAudio.currentTime = 0;
            }

            window.scrollTo(0, 0);
        }
    }

    //@TODO: Does this need tap bindings too?
    function bindElevateToElement( element ) {
        element.addEventListener('click', that.elevate, false);
    }

    function init( _options ) {

        // Bind to element click event, if need be.
        body = document.body;

        var defaults = {
            duration: undefined,
            mainAudio: false,
            endAudio: false,
            preloadAudio: true,
            loopAudio: true,
        };

        _options = extendParameters(_options, defaults);

        if( _options.element ) {
            bindElevateToElement( _options.element );
        }

        if( _options.duration ) {
            customDuration = true;
            duration = _options.duration;
        }

        window.addEventListener('blur', onWindowBlur, false);

        // If the browser doesn't support audio, stop here!
        if ( !window.Audio ) {
            return;
        }

        if( _options.mainAudio ) {
            mainAudio = new Audio( _options.mainAudio );
            mainAudio.setAttribute( 'preload', _options.preloadAudio );
            mainAudio.setAttribute( 'loop', _options.loopAudio );
        }

        if( _options.endAudio ) {
            endAudio = new Audio( _options.endAudio );
            endAudio.setAttribute( 'preload', 'true' );
        }

    }

    init(options);

};