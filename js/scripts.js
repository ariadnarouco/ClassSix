
begin();

function begin(){
	confirm("Empecemos con nuestro portal de noticias! \nPresione Ok para comenzar.");
	var section =document.getElementsByTagName("section")[0];
	var article = document.createElement("article");
	
	var titulo = prompt("Ingrese el título de la primer notica a ingresar");
	var h1 = document.createElement("h1");
	h1.appendChild(document.createTextNode(titulo));
	article.appendChild(h1); 

	var descripcion = prompt("Ingrese el contenido articulo");
	var p = document.createElement("p");
	p.appendChild(document.createTextNode(descripcion));
	article.appendChild(p); 

	var imagen = prompt("Ingrese la imagen que quiere mostrar");
	var img = document.createElement("img");
	img.setAttribute("src", imagen);
	article.appendChild(img); 


	section.appendChild(article);

}
