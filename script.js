//your JS code here. If required.

let submitBtn = document.getElementById("submit");

submitBtn.addEventListener("click", function(event){
	event.preventDefault();
	let fontsizeInput= document.getElementById("fontsize");
	let fontcolorInput = document.getElementById("fontcolor");

	let fontsizeValue =fontsizeInput.value;
	let fontcolorValue = fontcolorInput.value;

	if(fontsizeValue.trim() !== ""  && fontcolorValue.trim() !== ""){
		const daysToExpire = 7;
		const date = new Date();
		date.setTime(date.getTime()+(daysToExpire *24 *60 *60 *1000));
		const expires = "expires=" + date.toUTCString();

		document.cookies = "fontsizeValue="+encodeURIComponent(fontsizeValue)+"; "+expires+"; path=/";
		document.cookies = "fontcolorValue="+encodeURIComponent(fontcolorValue)+"; "+expires+"; path=/";
		alert("Both cookies are saved successfully");
	}else{
		alert("Please fill out both fields")
	}
	
})