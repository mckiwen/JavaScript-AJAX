# JavaScript-AJAX
Página sencilla que utiliza AJAX que muestra las comunidades autónomas, provincias y municipios realizando consultas a una base de datos desde el momento en que una opción es seleccionada.

<h4>Requisitos</h4>
- XAMPP v3.3.0 o superior instalado.</br>
- Visual Studio Code o equivalente.</br></br>

<h4>Indicaciones</h4>
1) Instalar XAMPP v3.3.0.</br>
2) Abrir el servidor Apache y MySQL en el panel de control de XAMPP.</br>
3) Situar el proyecto JavaScript-AJAX en el directorio local ...xampp\htdocs\JavaScript-AJAX</br>
4) Abrir en el navegador (Chrome, Firefox o equivalente) la URL http://localhost/phpmyadmin/.</br>
5) Crear una nueva base de datos llamada "espana".</br>
6) Crear la tabla de comunidades importando el fichero comunidades.sql.</br>
7) Crear la tabla de provincias importando el fichero provincias.sql.</br>
8) Crear la tabla de municipios importando el fichero municipios.sql.</br>
9) Acceder a la URL http://localhost/JavaScript-AJAX/index.html</br></br>

<h4>Descripción</h4></br>
Página que contiene tres selectores: Comunidades, Provincias y Municipios. Con AJAX, cuando se carga la página, se esconden los selectores de Provincias y Municipios y se realiza una consulta con el método GET al fichero consultaCOM.php. A su vez se realiza una consulta SQL a la base de datos de espana, a la tabla comunidades. Una vez obtenidas, se devuelven en formato JSON y son insertados en el selector para ser mostrado. Una vez se selecciona una comunidad autónoma, se activa el selector de Provincias. Nuevamente se realiza una consulta a la base de datos de las provincias que pertenecen a dicha comunidad autónoma. Finalmente, una vez seleccionada una provincia, se realiza una consulta SQL para mostrar los municipios pertenecientes a dicha provincia.
