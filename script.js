//your JS code here. If required.

let submitBtn = document.getElementById("submit");

submitBtn.addEventListener("click", function(event){
	event.preventDefault();
	let fontsizeInput= document.getElementById("fontsize");
	let fontcolorInput = document.getElementById("fontcolor");

	let fontsize =fontsizeInput.value;
	let fontcolor = fontcolorInput.value;

	if(fontsize.trim() !== ""  && fontcolor.trim() !== ""){
		const daysToExpire = 7;
		const date = new Date();
		date.setTime(date.getTime()+(daysToExpire *24 *60 *60 *1000));
		const expires = "expires=" + date.toUTCString();

		document.cookies = "fontsize="+encodeURIComponent(fontsize)+"; "+expires+"; path=/";
		document.cookies = "fontcolor="+encodeURIComponent(fontcolor)+"; "+expires+"; path=/";
		alert("Both cookies are saved successfully");
	}else{
		alert("Please fill out both fields")
	}
	
})