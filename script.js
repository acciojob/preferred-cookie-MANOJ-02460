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
		applyStyles(fontsize,fontcolor);
		
		alert("Both cookies are saved successfully");
	}else{
		alert("Please fill out both fields")
	}
	
})

window.addEventListener("DOMContentLoader",function(){

	function getCookies(name){

		let cookiesArr = document.cookies.split(";");
		for(let i=0; i<cookiesArr.length; i++){
			let cookiePair = cookieArr[i].split("=");
			if(name === cookiePair[0].trim()){
				return decodeURIComponent(cookiePair[1])
			}
		}
		return null;
	}

	let savedFontsize = getCookies("fontsize");
	let savedFontcolor = getCookies("fontcolor");

	applyStyles(savedFontsize,savedFontcolor)
})



function applyStyles(size,color){
	if(size){
		document.body.style.fontstyle = size;
	}
	if(color){
		document.body.style.fontstyle = color;
	}
}