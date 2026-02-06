🧠 Funciones Complejas en JavaScript
🎯 Objetivo de la actividad
En esta demo desarrollarás una función avanzada en JavaScript que combine varios conceptos vistos previamente en clase, poniendo énfasis en el uso correcto de parámetros, alcance y manipulación de arreglos.

⚠️ Importante:
Esta guía NO incluye la solución. Solo contiene pistas, preguntas guía y relaciones con contenidos anteriores.

🛒 Contexto: Tienda Online
Imagina que estás desarrollando la lógica de una tienda online.
Cada cliente puede comprar uno o varios productos, y dependiendo del cliente, se puede aplicar un descuento sobre el total de la compra.

Tu tarea será crear una función que calcule correctamente ese total.

🧩 Requerimientos de la función
Debes crear una función llamada:

calcularTotal
La función debe recibir:
cliente → Nombre del cliente que realiza la compra.
descuento → Porcentaje de descuento a aplicar (por ejemplo: 0.1 para 10%).
...precios → Una lista de precios de productos (cantidad variable).
📌 La cantidad de precios NO es fija.

🔍 Pistas (no solución)
💡 Pista 1:
Recuerda que el operador rest (...) permite recibir múltiples valores y almacenarlos en un arreglo.

💡 Pista 2:
Para sumar todos los precios, piensa en métodos de arreglos como:

reduce()
for
forEach()
💡 Pista 3:
El descuento es un porcentaje, no un valor fijo.
Pregúntate:

¿Se aplica antes o después de sumar los precios?
¿Cómo se calcula un porcentaje en JavaScript?
💡 Pista 4:
El orden de los parámetros sí importa.
Recuerda que el parámetro rest siempre debe ir al final.

🔄 Relación con contenidos vistos anteriormente
Este ejercicio conecta directamente con:

✅ Funciones con múltiples parámetros
✅ Parámetros obligatorios y opcionales
✅ Valores por defecto
✅ Operador Rest (...)
✅ Métodos de arreglos (reduce, map, forEach)
✅ Scope y variables locales
✅ Buenas prácticas en funciones
🧪 Pruebas sugeridas (sin resultados)
Cuando termines tu función, prueba llamarla con:

Un cliente con varios productos
Un cliente con un solo producto
Un cliente sin descuento
Diferentes cantidades de precios
📌 Observa el comportamiento de tu función en cada caso.

🎯 Objetivo final de aprendizaje
Al completar este desafío deberías ser capaz de:

Crear funciones flexibles y reutilizables
Manejar parámetros dinámicos correctamente
Aplicar lógica de negocio simple
Escribir código más limpio y escalable
🚀 Desafío extra (opcional):
Piensa cómo adaptarías esta función para que:

Valide precios incorrectos
Use callbacks
Devuelva un objeto con el detalle de la compra
¡Manos al código! 💻🔥
