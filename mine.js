

			

			document.getElementById("box").onclick = function(){


				ClickedTime = Date.now();

				reactionTime = (ClickedTime - createdTime)/1000;

				document.getElementById("myTime").innerHTML = " " +reactionTime + "secs";


				this.style.display = "none";

				if(reactionTime > 1){

					alert("haha, snail!");
				}else{
					alert("not bad!");
				}

				

				makeBox();


			}

			makeBox();
			


			function getRandomColor(){

				var letters = '0123456789ABCDEF'.split('');
				var color ='#';
				for(var i = 0; i< 6; i++){
					color += letters[Math.round(Math.random()*15)];
				}
				return color;
			}

			var ClickedTime; var createdTime; var reactionTime;
			
			
			function makeBox(){



			var time = Math.random();

			time = time * 5000;

			setTimeout(function(){

				if(Math.random()>0.5){

		document.getElementById("box").style.borderRadius ="100px";
				}else{
					document.getElementById("box").style.borderRadius = "0";
				}

				var top=Math.random();
				top = top*300;

				var left = Math.random();

				left = left*500;

				document.getElementById("box").style.left=left+"px";

				document.getElementById("box").style.top=top+"px";

				document.getElementById("box").style.backgroundColor=getRandomColor();

				document.getElementById("box").style.display = "block";

				createdTime = Date.now();
			}, time);

			
			}


			