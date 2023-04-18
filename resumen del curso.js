// Curso de API REST con Javascript Performance y Usabilidad

// MEMORIA vs CACHE vs MEMOIZATION

// CACHE
// guarda ciertos datos temporales para que no se tenga que volver a hacer la peticion al back

// MEMOIZATION
// Guardar los calculos que ya hicimos para no repetirlos, dice mas o menos que es guardar en nuestro propio codigo
// cierta informacion y que tambien desde nuestro propio codigo validemos si necesitamos volver a consumir la API

// POSIBLES PROBLEMAS DE CACHE Y DE MEMOIZACION
// la informacion que tenemos puede estar desactualizada

// LOADING SPINNERS vs LOADING SKELETONS
// Los sipnners generalmente no nos dicen cuanto falta y eso es malo.
// Los spinners con numero de porcentaje no hay una forma de saber en que porcentaje vamos, no hay forma de saber
// cuanto tiempo va o cuanto tiempo falta.
// Los SKELETON  son mejor opcion

// LAZY LOADING AND INTERSECTION OBSERVER
// lazy loading es para que cargue solo lo necesario y vaya a cargando las cosas a demanda, esto hace mas
// eficiente la carga de nuestro sitio
// interceptionObserver nos ayuda a observar los elementos e ir definiendo la carga de cada contenedor (o de toda)
// la pagina

// la propiedad isIntersecting puede ser false o true y quiere decir si nuestro objeto que estamos observando
// esta dentro del contenedor que nosotros definimos, osea  si es visible. por eso se hace un if (entry.isIntersecting)
// para ver si la imagen esta dentro de nuestro contenedor (en nuestro caso es la totalidad de nuesta ventana)
// y si el elemento es visible entonces se ejecuta el codigo para que cargue.

// SCROLL INFINITO VS PAGINACION
// document.documentElement.scrollTop : me muestra la distancia en pixeles desde la parte superior de la pagina,
// en otras palabras nos dice cuanto scroll hemos hecho desde la parte superior
// document.documentElement.clientHeight : me da la altura del viewport, osea el alto de actual de la pantalla
// document.documentelement.scrollHeight : nos dice cuanto scroll podemos hacer actualmente en la pagina

// lo que quiere decir que si necesitamos hacer un scroll inifito o queremos cargar algo cuando el usuario haga scroll
// hasta la parte mas baja de la pantalla deberiamos hacer lo siguiente:

// document.documentElement.scrollTop + document.documentElement.clientHeight >= document.documentelement.scrollHeight
// NOTA: PARA NO SER TAN PRECISOS A ESTA FORMULA LE RESTAMOS UNOS CUANTOS PIXELES
// document.documentElement.scrollTop + document.documentElement.clientHeight >= document.documentElement.scrollHeight-10px

//LOCAL STORAGE vs API REAL
// LOCAL STORAGE : mas rapido, depende del navegador, independiente de la API , control completo del frontend
// no requiere autenticacion / no permite compartir o recuperar sesion / NO SE RECOMIENDA para datos privados.
// API REAL: es mas lento / control completo del backend/ requiere autenticacion / permite compartir y recuperar sesion
// ES recomendable para datos privados.

// SOLO PODEMOS GUARDAR STRING Y NUMEROS EN LOCALSTORAGE, NO PODEMOS GUARDAR ARRAYS Y OBJETOS
// pero lo podemos solucionar con JSON.stringify y JSON.parse
// localStorage (comando)
// localStorage.setItem(key,valor) : guardar informacion ejemplo: localStorage.setItem('nombre','felipe')
// localStorage.getItem(key) : obtener informacion ejemplo:localStorage.getItem('nombre')
// localStorage.removeItem(,) : eliminar informacion
