window.onload= function(){
	var button =document.getElementById("search"); 
	button.onclick=function{
		alert("works");
		var httpRequest = new XMLHttpRequest();
		var url = "http://localhost/info2180-lab4/superheroes.php";
		httpRequest.onreadystatechange = doSomething;
		httpRequest.open('GET', url);
		httpRequest.send();
		function doSomething(){
			if (httpRequest.readyState === XMLHttpRequest.DONE){
				if (httpRequest.status === 200){
					var response = httpRequest.responseText;
					alert(response);
				}
			}
		}
	}
}