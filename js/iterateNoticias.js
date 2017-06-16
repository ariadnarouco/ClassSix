
begin();

function begin(){
	confirm("Empecemos con nuestro portal de noticias! \nPresione Ok para comenzar.");

	var i =0;
	document.write();
	while(true){
		var section =document.getElementsByTagName("section")[0];
		var article = document.createElement("article");
	
		var titulo = prompt("Ingrese el título de la primer notica a ingresar");
		var h1 = document.createElement("h1");
		h1.appendChild(document.createTextNode(titulo));
		article.appendChild(h1); 
		article.setAttribute("id", "arti"+i);
		section.appendChild(article);
		

		var descripcion = prompt("Ingrese el contenido articulo");
		var p = document.createElement("p");
		p.appendChild(document.createTextNode(descripcion));
		document.getElementById("arti"+i).appendChild(p); 

		var imagen = prompt("Ingrese la imagen que quiere mostrar");
		var img = document.createElement("img");
		img.setAttribute("src", imagen);
		document.getElementById("arti"+i).appendChild(img); 
		i++;

		if(!confirm("Seguimos?")){
			break;
		}
		
	}








	
	

}
