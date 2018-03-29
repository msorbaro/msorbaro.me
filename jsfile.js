//Morgan Sorbaro
//Dali Application

//Variables used for the clicking part in experience.
//If  one is clicked already, you cannot click on another one (each is a job).
var liqclick = false
var nsmrlclick = false
var amuletclick = false
var gaclick = false

//main function
$(document).ready(function(){
  //These first ones all about hovering over a hobby image.
  //If hover over a hobby image, it will change the description text bellow and set the image to change as well
    $('.friends').hover( //friends image
        //changing image and text when hovered
        function(){
					$(this).attr("src","friend2.png")
					$(".dtext").text("I love spending time with my friends :). We always have a blast whether its an actual activities or just working in the library together.")
				},
        //changing image and text back when hover released
        function(){
					$(this).attr("src","friends1.png")
					$(".dtext").text("")
				}
    );
		$('.ski').hover( //ski image
        //changing image and text when hovered
				function(){
					$(this).attr("src","ski2.png")
					$(".dtext").text("I love to ski! I have been a ski patroller for the past 5 years (first Windham Mountain, then Dartmouth) and it is my favorite sport!")
				},
        //changing image and text back when hover released
				function(){
					$(this).attr("src","ski1.png")
					$(".dtext").text("")
				}
		);
		$('.cupcake').hover( //cupcake image
        //changing image and text when hovered
				function(){
					$(this).attr("src","cupcake2.png")
					$(".dtext").text("When at home I love to bake (and eat) any sort of dessert. Favorites include: cookies, brownies, and cupcakes.")
			  },
        //changing image and text back when hover released
				function(){
					$(this).attr("src","cupcake1.png")
					$(".dtext").text("")
				}
		);
		$('.yoga').hover( //yoga image
        //changing image and text when hovered
				function(){
					$(this).attr("src","yoga2.png")
					$(".dtext").text("When I need to decompress I like to do yoga. I spent my summer learning Arial Yoga after work which was super fun.")
				},
        //changing image and text back when hover released
				function(){
					$(this).attr("src","yoga1.png")
					$(".dtext").text("")
				}
		);
		$('.tv').hover( //tv image
        //changing image and text when hovered
				function(){
					$(this).attr("src","tv2.png")
					$(".dtext").text("TV is the go to downtime activity. Favorite shows include (but not limited to): How I Met Your Mother, Friends, The Office.")
				},
        //changing image and text back when hover released
				function(){
					$(this).attr("src","tv1.png")
					$(".dtext").text("")
				}
		);
		$('.coffee').hover( //coffee image
        //changing image and text when hovered
				function(){
					$(this).attr("src","coffee2.png")
          $(".dtext").text("I am a huge coffee enthusiast and probably do drink too much, but what can you do. Skim Cappuccino’s are my favorite KAF drink.")
 				},
        //changing image and text back when hover released
				function(){
					$(this).attr("src","coffee1.png")
					$(".dtext").text("")
				}
		);
      //This section looks to see if one o the experience images are clicked on
      //If they are clicked on, but none of the other images are currently clicked on,
      //then it will slide everything over and show the description
      //Must unclick the image to be able to click another one

      //If the liquidnet image is clicked
			$('.liquidnetImg').click(function(){
          //check to make sure that nothing else has been clicked
						if (!liqclick && !nsmrlclick && !amuletclick  && !gaclick) {
							liqclick= true //now liquidnet has been clicked
              //annimate all the boxes to move over
							$(".prevexp").animate({
								left: '100px'
							})
              //Show the liquidnet net
							$(".liquidnetHead").text("LIQUIDNET")
              $(".liquidnetText").text("Summer 2017 I worked at Liquidnet, a fintech company and created two tools in Java that are now used in product testing during development. I also helped organize and run Liquidnet For Girls, a program that taught under priveldged high school girls how to code in Javascript.")

						}
            //check to see if the others are unclicked but liquidnet is to move images back
						else if (!nsmrlclick && !amuletclick  && !gaclick){
							liqclick= false //no longer clicked
              //animate everything back
							$(".prevexp").animate({
								left: '0px'
							})
              //get rid of the text
							$(".liquidnetText").text("")
							$(".liquidnetHead").text("")

						}

			})
      //If the NSMRL image is clicked
			$('.nsmrlImg').click(function(){
        //check to make sure that nothing else has been clicked
						if (!nsmrlclick && !liqclick && !amuletclick  && !gaclick) {
							nsmrlclick= true //now nsmrl has been clicked
              //annimate all the boxes to move over
              $(".prevexp").animate({
								left: '100px'
							})
              //Show the nsmrl text
              $(".nsmrlText").text("Summer 2015 I worked in the war fighter department at the New London Submarine Base. I created a electronic poster that would monitor and display the consequences of loud noises on submarines using a microphone to monitor decibels, an Arduino, and many LEDS")
 							$(".nsmrlHead").text("NAVAL SUBMARINE MEDICAL RESEARCH LAB INTERN")
						}
            //check to see if the others are unclicked but nsmrl is to move images back
						else if (!liqclick && !amuletclick  && !gaclick){
							nsmrlclick= false
              //annimate everything back
							$(".prevexp").animate({
								left: '0px'
							})
              //get rid of text
							$(".nsmrlText").text("")
							$(".nsmrlHead").text("")


						}

			})

      //If the amulet image is clicked
			$('.amuletImg').click(function(){
          //check to make sure that nothing else has been clicked
						if (!nsmrlclick && !liqclick && !amuletclick  && !gaclick) {
							amuletclick= true //now amulet has been clicked
              //annimate all the boxes to move over
              $(".prevexp").animate({
								left: '-100px'
							})
              //Show the amulet text
              $(".amuletText").text("Last year I worked for Professor Kotz as his WISP intern. I created a shirt that monitors heart rate using Arduino, an ECG shield, electrodes and sewing and soldering wires through fabric. The signals were processed with a peak detection algorithm and sent wirelessly to my laptop.")
							$(".amuletHead").text("WISP INTER")
						}
            //check to see if the others are unclicked but amulet is to move images back
						else if (!liqclick && !nsmrlclick && !gaclick){
							amuletclick= false
              //animate everything back
							$(".prevexp").animate({
								left: '0px'
							})
              //get rid of text
							$(".amuletText").text("")
							$(".amuletHead").text("")

						}

			})

      //If the ga image is clicked
			$('.gaImg').click(function(){
            //check to make sure that nothing else has been clicked
						if (!nsmrlclick && !liqclick && !amuletclick && !gaclick) {
							gaclick= true //now ga has been clicked
              //annimate all the boxes to move over
              $(".prevexp").animate({
								left: '-100px'
							})
              //Show the ga text
              $(".gaText").text("After my internship at NSMRL I did an independent study in high school to further my project with the dangers of sound levels. I expanded my poster to be able to send text messages when decibels got too high in the Engineering Lab at school")
 							$(".gaHead").text("GREENWICH ADADEMY INDEPENDENT STUDY")

						}
            //check to see if the others are unclicked but ga is to move images back
						else if (!liqclick && !nsmrlclick && !amuletclick){
							gaclick= false
              //animate everythign back
							$(".prevexp").animate({
								left: '0px'
							})
              //get rid of text
							$(".gaText").text("")
							$(".gaHead").text("")

						}

			})

});
