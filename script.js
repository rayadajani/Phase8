// JavaScript is capitalized using "camel case": https://en.wikipedia.org/wiki/Camel_case
// Check out the power of the classList property: https://www.w3schools.com/jsref/prop_element_classlist.asp

// "el" stands for the "element" that was just clicked

// "el" stands for the "element" that was just clicked
a = document.getElementById("piece3");
b = document.getElementById("piece2");
c = document.getElementById("piece1");
d = document.getElementById("piece4");
e = document.getElementById("alien");
f = document.getElementById("asteroid");
g = document.getElementById("planet");
h = document.getElementById("spaceship");
i = document.getElementById("one");
j = document.getElementById("two");
k = document.getElementById("three");
l = document.getElementById("four");
m= document.getElementById("done");
n= document.getElementById("build");
var badSound = document.getElementById('boo');
var playYay = document.getElementById('yay');

//This function will remove the images from the "hidethis" class and the images will be appear in their designated divs
function appearImages(el){
	    alert("Build the rocket together in the CORRECT order!");
		a.classList.remove("hidethis");
		b.classList.remove("hidethis");
		c.classList.remove("hidethis");
		d.classList.remove("hidethis");
		e.classList.remove("hidethis");
		f.classList.remove("hidethis");
		g.classList.remove("hidethis");
		h.classList.remove("hidethis");
		console.log("begin building!");
}
function imageSound(el){
     el.classList.remove("blue");
	 el.classList.add("red");
	badSound.play();
	//alert("Wrong");
	setTimeout(function(){ window.location.reload(); }, 1000);
	// once this image is clicked, the page will wait 1 second and reset since the answer the user chosen is incorrect
}
//Boolean method is a system which is used to create true or false statements
var piece1= new Boolean(false)
var piece2= new Boolean(false)
var piece3= new Boolean(false)
var piece4= new Boolean(false)
function appearFirst(el){
	//The first piece will be removed from the hide this class and will appear in in the first div located on the top left
         i.classList.remove("hidethis");
		 playYay.play();
		 piece1 =true;
}
function appearSecond(el){
        if(piece1== true){
			piece2 =true
		// allow the second image to appear and be placed in the div located in the right first div
		document.getElementById("two").classList.remove("hidethis")
		}else{
			window.location.reload();
	
	}
}

function appearThird(el){
	if(piece2== true){
		piece3 =true;
		// allow the third image to appear and be placed in the div located in the left bottom div
		document.getElementById("three").classList.remove("hidethis")
		}else{
			window.location.reload();
	}
}
function appearFourth(el){
      if(piece3== true){
		piece4 =true;
		// allow the fourth image to appear and be placed in the div located in the right bottom div
		document.getElementById("four").classList.remove("hidethis")
		m.classList.remove("hidethis");
		a.classList.add("hidethis");
		b.classList.add("hidethis");
		c.classList.add("hidethis");
		d.classList.add("hidethis");
		e.classList.add("hidethis");
		f.classList.add("hidethis");
		g.classList.add("hidethis");
		h.classList.add("hidethis");
		i.classList.add("opaque");
		j.classList.add("opaque");
		k.classList.add("opaque");
		l.classList.add("opaque");
		n.classList.add("hidethis");
		}else{
			window.location.reload();
	}	
}
function playSound(el){
	playYay.play();
	document.location.href="https://sterlingblagg.github.io/EscapePhase8/";
}