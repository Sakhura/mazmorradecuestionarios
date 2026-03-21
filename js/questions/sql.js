window.questions_sql = [
  {
    question: "¿Qué significa SQL?",
    options: [
      "Structured Query Language",
      "Standard Query Logic",
      "Structured Queue List",
      "Sequential Query Language"
    ],
    correct: 0,
    difficulty: "E",
    explanation: "SQL (Structured Query Language) es el lenguaje estándar para gestionar y consultar bases de datos relacionales."
  },
  {
    question: "¿Qué hace la sentencia <code>SELECT * FROM empleados</code>?",
    options: [
      "Actualiza todos los empleados",
      "Selecciona todas las columnas y filas de la tabla empleados",
      "Borra todos los empleados",
      "Crea la tabla empleados"
    ],
    correct: 1,
    difficulty: "E",
    explanation: "SELECT * selecciona todas las columnas. FROM especifica la tabla. Sin WHERE retorna todas las filas."
  },
  {
    question: "¿Cómo se filtran filas en una consulta SQL?",
    options: [
      "HAVING condición",
      "WHERE condición",
      "FILTER BY condición",
      "WHEN condición"
    ],
    correct: 1,
    difficulty: "E",
    explanation: "WHERE filtra filas según una condición. Ej: SELECT * FROM empleados WHERE salario > 50000."
  },
  {
    question: "¿Qué hace <code>ORDER BY nombre DESC</code>?",
    options: [
      "Filtra por nombre",
      "Ordena por nombre de forma descendente (Z-A)",
      "Agrupa por nombre",
      "Ordena ascendente"
    ],
    correct: 1,
    difficulty: "E",
    explanation: "ORDER BY ordena el resultado. ASC es ascendente (por defecto), DESC es descendente. Múltiples columnas: ORDER BY apellido, nombre."
  },
  {
    question: "¿Cuál es la diferencia entre <code>COUNT(*)</code> y <code>COUNT(columna)</code>?",
    options: [
      "COUNT(*) cuenta todas las filas; COUNT(columna) cuenta filas donde columna no es NULL",
      "COUNT(columna) siempre es mayor",
      "Son iguales",
      "COUNT(*) ignora NULL"
    ],
    correct: 0,
    difficulty: "E",
    explanation: "COUNT(*) cuenta todas las filas incluyendo NULLs. COUNT(columna) solo cuenta filas donde la columna tiene valor no-NULL."
  },
  {
    question: "¿Qué hace <code>DISTINCT</code> en una consulta?",
    options: [
      "Cuenta filas únicas",
      "Ordena los resultados",
      "Agrega filas únicas",
      "Elimina filas duplicadas del resultado"
    ],
    correct: 3,
    difficulty: "E",
    explanation: "SELECT DISTINCT ciudad FROM clientes retorna cada ciudad solo una vez, sin duplicados."
  },
  {
    question: "¿Cuáles son los tipos de JOIN básicos en SQL?",
    options: [
      "JOIN y NO-JOIN",
      "INNER JOIN, LEFT JOIN, RIGHT JOIN, FULL OUTER JOIN",
      "TOP, BOTTOM, CENTER",
      "LEFT, RIGHT, FULL"
    ],
    correct: 1,
    difficulty: "E",
    explanation: "INNER JOIN: filas con coincidencia en ambas tablas. LEFT JOIN: todas del lado izquierdo más coincidencias. RIGHT JOIN: inverso. FULL OUTER JOIN: todas de ambas tablas."
  },
  {
    question: "¿Qué es una clave primaria (PRIMARY KEY)?",
    options: [
      "Un identificador único que no puede ser NULL ni repetirse en una tabla",
      "La primera columna definida en la sentencia CREATE TABLE, sin restricciones adicionales",
      "Una clave de cifrado que protege los datos sensibles de la tabla durante el almacenamiento",
      "El índice compuesto de mayor prioridad que se aplica automáticamente a todas las consultas"
    ],
    correct: 0,
    difficulty: "E",
    explanation: "PRIMARY KEY garantiza unicidad e impide NULL. Cada tabla debe tener una. Puede ser una o múltiples columnas (clave compuesta)."
  },
  {
    question: "¿Qué es una clave foránea (FOREIGN KEY)?",
    options: [
      "Una columna que referencia la PRIMARY KEY de otra tabla, manteniendo integridad referencial",
      "Una restricción que impide valores duplicados en la columna sin necesidad de referenciar otra tabla",
      "Una columna de tipo especial que conecta tablas de servidores distintos para consultas federadas",
      "Un índice secundario creado automáticamente en columnas con alta cardinalidad de datos"
    ],
    correct: 0,
    difficulty: "E",
    explanation: "FOREIGN KEY impide insertar valores que no existen en la tabla referenciada y evita borrar registros si tienen referencias (ON DELETE behavior)."
  },
  {
    question: "¿Qué hace <code>GROUP BY</code>?",
    options: [
      "Ordena las filas del resultado de forma ascendente usando las columnas especificadas como criterio",
      "Cuenta el total de filas en cada grupo y descarta los grupos con menos de un elemento",
      "Filtra las filas del resultado según condiciones definidas sobre columnas de agrupamiento",
      "Agrupa filas con el mismo valor en una o más columnas para aplicar funciones de agregación"
    ],
    correct: 3,
    difficulty: "E",
    explanation: "SELECT departamento, COUNT(*) FROM empleados GROUP BY departamento cuenta empleados por departamento."
  },
  {
    question: "¿Cuál es la diferencia entre <code>WHERE</code> y <code>HAVING</code>?",
    options: [
      "WHERE solo funciona con fechas",
      "Son equivalentes",
      "WHERE filtra filas antes del GROUP BY; HAVING filtra grupos después del GROUP BY",
      "HAVING es más rápido"
    ],
    correct: 2,
    difficulty: "E",
    explanation: "WHERE se aplica antes de la agregación. HAVING filtra los resultados del GROUP BY. No puedes usar funciones de agregación en WHERE."
  },
  {
    question: "¿Qué hace <code>INSERT INTO tabla (col1, col2) VALUES (v1, v2)</code>?",
    options: [
      "Crea la tabla con las columnas especificadas si aún no existe en la base de datos",
      "Actualiza las filas existentes donde col1 coincide con v1 y col2 coincide con v2",
      "Elimina la tabla y la recrea con las columnas y valores indicados en la sentencia",
      "Inserta una nueva fila en la tabla"
    ],
    correct: 3,
    difficulty: "E",
    explanation: "INSERT INTO añade nuevas filas. Puedes omitir columnas con DEFAULT o que permiten NULL. Multi-row: VALUES (v1,v2), (v3,v4)."
  },
  {
    question: "¿Cómo se actualiza un registro en SQL?",
    options: [
      "MODIFY tabla SET col=val WHERE id=1",
      "CHANGE tabla SET col=val",
      "ALTER tabla col=val",
      "UPDATE tabla SET col=val WHERE id=1"
    ],
    correct: 3,
    difficulty: "E",
    explanation: "UPDATE siempre debe ir acompañado de WHERE para no actualizar todas las filas. Sin WHERE actualiza toda la tabla."
  },
  {
    question: "¿Cómo se elimina un registro en SQL?",
    options: [
      "ERASE FROM tabla WHERE id=1",
      "DELETE FROM tabla WHERE id=1",
      "DROP FROM tabla WHERE id=1",
      "REMOVE FROM tabla WHERE id=1"
    ],
    correct: 1,
    difficulty: "E",
    explanation: "DELETE FROM tabla WHERE condicion. Sin WHERE borra todas las filas (pero mantiene la estructura). TRUNCATE es más rápido para borrar todo."
  },
  {
    question: "¿Qué hace <code>CREATE TABLE</code>?",
    options: [
      "Crea una nueva base de datos con el nombre indicado y la agrega al catálogo del sistema",
      "Copia la estructura de una tabla existente sin incluir los datos almacenados en ella",
      "Crea una nueva tabla con sus columnas y restricciones",
      "Modifica la definición de una tabla existente añadiendo o eliminando columnas"
    ],
    correct: 2,
    difficulty: "E",
    explanation: "CREATE TABLE nombre (col1 tipo constraint, col2 tipo, ...) define la estructura. Incluye PRIMARY KEY, NOT NULL, DEFAULT, FOREIGN KEY, etc."
  },
  {
    question: "¿Qué hace el operador <code>LIKE</code>?",
    options: [
      "Compara valores numéricos dentro de un rango inclusivo definido por dos límites",
      "Verifica que el valor sea exactamente igual al especificado, sensible a mayúsculas siempre",
      "Busca patrones en texto: % es comodín de varios caracteres, _ es un carácter",
      "Funciona de forma idéntica al operador = pero optimizado para columnas con índice"
    ],
    correct: 2,
    difficulty: "E",
    explanation: "WHERE nombre LIKE 'J%' encuentra todos los que empiezan con J. LIKE '%ana%' contiene 'ana'. LIKE 'M_ría' tiene cualquier carácter en la posición 2."
  },
  {
    question: "¿Qué hace el operador <code>IN</code>?",
    options: [
      "Verifica si el valor de la columna es NULL o no tiene asignado ningún dato",
      "Verifica si un valor numérico está en un intervalo cerrado definido por dos extremos",
      "Compara con una lista de valores: equivale a múltiples OR",
      "Verifica si está dentro de un rango"
    ],
    correct: 2,
    difficulty: "E",
    explanation: "WHERE país IN ('España', 'México', 'Argentina') equivale a WHERE país='España' OR país='México' OR país='Argentina'. Más legible."
  },
  {
    question: "¿Qué hace <code>BETWEEN x AND y</code>?",
    options: [
      "Solo puede usarse con columnas de tipo DATE o DATETIME, no con números ni texto",
      "Compara el valor con dos expresiones usando OR internamente, equivalente a val=x OR val=y",
      "Verifica si el valor es mayor que x y menor que y, excluyendo ambos extremos del rango",
      "Verifica si el valor está entre x e y, inclusivo"
    ],
    correct: 3,
    difficulty: "E",
    explanation: "WHERE precio BETWEEN 10 AND 100 incluye 10 y 100. Equivale a precio >= 10 AND precio <= 100. Funciona con números, fechas y texto."
  },
  {
    question: "¿Cómo verificar si un valor es NULL en SQL?",
    options: [
      "WHERE col IS NULL",
      "WHERE col == NULL",
      "WHERE col = NULL",
      "WHERE NULL(col)"
    ],
    correct: 0,
    difficulty: "E",
    explanation: "NULL no puede compararse con = (da NULL, no true/false). Siempre usa IS NULL o IS NOT NULL para comparar con NULL."
  },
  {
    question: "¿Qué es una vista (VIEW)?",
    options: [
      "Una consulta almacenada que se puede usar como si fuera una tabla",
      "Un índice virtual que mejora el rendimiento de las consultas sobre columnas específicas",
      "Una copia física de los datos que se actualiza periódicamente con un proceso automático",
      "Una tabla temporal que existe solo durante la duración de la sesión activa"
    ],
    correct: 0,
    difficulty: "E",
    explanation: "CREATE VIEW empleados_activos AS SELECT * FROM empleados WHERE activo = 1. Las vistas simplifican consultas complejas y pueden controlar el acceso a datos."
  },
  {
    question: "¿Qué hace <code>ALTER TABLE</code>?",
    options: [
      "Elimina la tabla junto con todos sus datos, índices y restricciones de forma permanente",
      "Copia todos los datos de la tabla a una tabla nueva con el nombre especificado en el comando",
      "Cambia el nombre de la base de datos actual por el nombre indicado en la cláusula RENAME",
      "Modifica la estructura de una tabla existente: añadir/eliminar columnas, cambiar tipos, agregar restricciones"
    ],
    correct: 3,
    difficulty: "E",
    explanation: "ALTER TABLE empleados ADD COLUMN email VARCHAR(100). ALTER TABLE empleados DROP COLUMN telefono. ALTER TABLE empleados MODIFY salario DECIMAL(10,2)."
  },
  {
    question: "¿Qué hace <code>DROP TABLE</code>?",
    options: [
      "Elimina la tabla y todos sus datos permanentemente",
      "Vacía todas las filas de la tabla pero conserva la estructura y los índices asociados",
      "Deshabilita temporalmente el acceso a la tabla sin eliminar sus datos ni su definición",
      "Elimina únicamente los índices de la tabla sin modificar los datos ni las restricciones"
    ],
    correct: 0,
    difficulty: "E",
    explanation: "DROP TABLE es irreversible (sin transacción). Elimina la tabla, sus datos, índices y restricciones. DROP TABLE IF EXISTS evita error si no existe."
  },
  {
    question: "¿Qué es <code>TRUNCATE TABLE</code>?",
    options: [
      "Es igual a DELETE sin WHERE pero más lento",
      "Similar a DROP TABLE",
      "Elimina todas las filas de forma muy rápida, reinicia auto-increment, no se puede hacer rollback en algunos SGBD",
      "Borra la estructura de la tabla"
    ],
    correct: 2,
    difficulty: "E",
    explanation: "TRUNCATE es más rápido que DELETE (no registra cada fila en el log). En MySQL no permite rollback. En PostgreSQL sí. Reinicia secuencias."
  },
  {
    question: "¿Qué hace <code>COALESCE(col1, col2, valor)</code>?",
    options: [
      "Combina el contenido de múltiples columnas en una sola cadena separada por comas",
      "Calcula la media aritmética de todas las columnas numéricas pasadas como argumentos",
      "Retorna el primer valor no-NULL de la lista de argumentos",
      "Concatena los strings de las columnas ignorando los que contienen NULL o cadena vacía"
    ],
    correct: 2,
    difficulty: "E",
    explanation: "COALESCE(telefono, celular, 'Sin teléfono') retorna telefono si no es NULL, sino celular, sino el string. Muy útil para manejar NULLs."
  },
  {
    question: "¿Qué es <code>AVG()</code>?",
    options: [
      "Retorna la media aritmética de los valores no-NULL de una columna",
      "Retorna el valor máximo encontrado en la columna incluyendo los valores NULL",
      "Retorna el primer valor de la columna según el orden de inserción en la tabla",
      "Retorna la suma total de todos los valores de la columna incluyendo los NULL como cero"
    ],
    correct: 0,
    difficulty: "E",
    explanation: "SELECT AVG(salario) FROM empleados calcula el salario promedio. Ignora NULLs. AVG(DISTINCT col) calcula la media de valores únicos."
  },
  {
    question: "¿Qué significa <code>NOT NULL</code> como restricción?",
    options: [
      "El valor puede ser NULL pero se registrará una advertencia en el log del servidor",
      "La columna actúa como clave foránea implícita referenciando la tabla con ese nombre",
      "El valor no puede ser de tipo texto, solo acepta tipos numéricos o booleanos en la columna",
      "La columna debe tener siempre un valor; no acepta NULL"
    ],
    correct: 3,
    difficulty: "E",
    explanation: "NOT NULL es una restricción de columna. Si intentas insertar/actualizar sin proveer un valor para esa columna (sin DEFAULT), la base de datos rechaza la operación."
  },
  {
    question: "¿Qué hace <code>LIMIT n</code> (o <code>TOP n</code> en SQL Server)?",
    options: [
      "Define el número máximo de conexiones simultáneas de usuarios a la base de datos",
      "Aplica un tiempo máximo de espera a la consulta antes de cancelarla automáticamente",
      "Restringe el número máximo de filas retornadas",
      "Limita el tamaño máximo en bytes del resultado que puede devolver la consulta"
    ],
    correct: 2,
    difficulty: "E",
    explanation: "SELECT * FROM productos ORDER BY precio DESC LIMIT 10 retorna los 10 más caros. SQL Server: SELECT TOP 10. Oracle: FETCH FIRST 10 ROWS ONLY o ROWNUM <= 10."
  },
  {
    question: "¿Qué es <code>SUM()</code>?",
    options: [
      "Calcula la suma de todos los valores no-NULL de una columna",
      "Cuenta el número total de filas del grupo, incluyendo las que tienen NULL en la columna",
      "Retorna el valor máximo de la columna dentro del grupo o partición definida",
      "Ordena el resultado de mayor a menor según los valores acumulados de la columna"
    ],
    correct: 0,
    difficulty: "E",
    explanation: "SELECT departamento, SUM(salario) FROM empleados GROUP BY departamento calcula la masa salarial por departamento."
  },
  {
    question: "¿Qué hace <code>CONCAT()</code>?",
    options: [
      "Cuenta el número de cadenas distintas no nulas que aparecen en la columna especificada",
      "Compara dos cadenas y retorna 1 si son iguales o 0 si difieren en algún carácter",
      "Concatena dos o más strings en uno solo",
      "Funciona igual que el operador || pero tiene distinto comportamiento con NULL en todos los SGBD"
    ],
    correct: 2,
    difficulty: "E",
    explanation: "CONCAT(nombre, ' ', apellido) une los campos. MySQL y SQL Server usan CONCAT(). PostgreSQL y SQL estándar: || (operador de concatenación)."
  },
  {
    question: "¿Qué es un alias en SQL?",
    options: [
      "Una copia de la tabla que se crea automáticamente para facilitar las operaciones de JOIN",
      "El nombre original de la tabla tal como está registrado en el catálogo del sistema",
      "Un tipo de índice virtual que se crea temporalmente durante la ejecución de una query",
      "Un nombre temporal para una columna o tabla en la consulta, definido con AS"
    ],
    correct: 3,
    difficulty: "E",
    explanation: "SELECT nombre AS 'Nombre Completo', e.salario FROM empleados AS e. AS es opcional en muchos SGBD. Los aliases de columna se usan en la proyección final."
  },
  {
    question: "¿Qué hace <code>UPPER()</code>?",
    options: [
      "Verifica si el string contiene mayúsculas y retorna true o false según el resultado",
      "Retorna la longitud en caracteres del string sin tener en cuenta los espacios en blanco",
      "Convierte todos los caracteres del string a minúsculas para normalizar el texto",
      "Convierte un string a mayúsculas"
    ],
    correct: 3,
    difficulty: "E",
    explanation: "SELECT UPPER(nombre) FROM empleados. También existe LOWER(). Útil para comparaciones case-insensitive: WHERE UPPER(email) = UPPER('User@Email.COM')."
  },
  {
    question: "¿Qué hace <code>ROUND(numero, decimales)</code>?",
    options: [
      "Retorna siempre el entero más cercano independientemente del valor del segundo argumento",
      "Convierte el número a su representación en string con el número de decimales indicado",
      "Trunca el número eliminando los decimales sin aplicar ningún redondeo al resultado",
      "Redondea un número al número de decimales especificado"
    ],
    correct: 3,
    difficulty: "E",
    explanation: "ROUND(3.14159, 2) → 3.14. ROUND(3.5, 0) → 4. ROUND(123.456, -2) → 100. Varía ligeramente entre SGBD."
  },
  {
    question: "¿Qué es <code>CURRENT_DATE</code> o <code>GETDATE()</code>?",
    options: [
      "Una constante fija que almacena la fecha de instalación del servidor de base de datos",
      "Una tabla especial del sistema que almacena el historial de fechas de ejecución de queries",
      "Un tipo de dato especial equivalente a TIMESTAMP que acepta valores de fecha con hora",
      "Funciones que retornan la fecha/hora actual del servidor de base de datos"
    ],
    correct: 3,
    difficulty: "E",
    explanation: "MySQL: NOW(), CURDATE(). PostgreSQL: CURRENT_DATE, NOW(). SQL Server: GETDATE(), SYSDATETIME(). Oracle: SYSDATE."
  },
  {
    question: "¿Qué hace <code>CASE WHEN</code> en SQL?",
    options: [
      "Un tipo de JOIN que selecciona la tabla a unir dinámicamente según una condición booleana",
      "Una estructura de control de flujo que interrumpe la ejecución del query si se cumple la condición",
      "Una variante de GROUP BY que agrupa las filas según rangos de valores definidos en los WHEN",
      "Una expresión condicional que retorna valores según condiciones, como if-else en otros lenguajes"
    ],
    correct: 3,
    difficulty: "E",
    explanation: "CASE WHEN salario > 50000 THEN 'Alto' WHEN salario > 30000 THEN 'Medio' ELSE 'Bajo' END AS nivel. Se puede usar en SELECT, WHERE, ORDER BY."
  },
  {
    question: "¿Qué es el operador <code>UNION</code>?",
    options: [
      "Une dos tablas de la misma forma que INNER JOIN pero sin necesitar una condición de unión",
      "Solo puede usarse con tablas que tengan el mismo tipo de dato en todas sus columnas",
      "Combina el resultado de dos SELECT eliminando duplicados; UNION ALL mantiene duplicados",
      "Funciona de forma idéntica a JOIN pero opera sobre el resultado de dos SELECT independientes"
    ],
    correct: 2,
    difficulty: "E",
    explanation: "SELECT nombre FROM empleados UNION SELECT nombre FROM clientes retorna todos los nombres únicos. Las queries deben tener el mismo número y tipos de columnas."
  },
  {
    question: "¿Qué hace <code>SUBSTRING(str, inicio, longitud)</code>?",
    options: [
      "Busca la primera ocurrencia del segundo argumento dentro del primer argumento y retorna su posición",
      "Extrae una parte de un string desde la posición inicio con longitud dada",
      "Reemplaza todas las ocurrencias del segundo argumento por el tercero dentro del primer argumento",
      "Divide un string en un array de partes usando el segundo argumento como separador"
    ],
    correct: 1,
    difficulty: "E",
    explanation: "SUBSTRING('Hola Mundo', 1, 4) → 'Hola' (MySQL/SQL Server, 1-indexed). PostgreSQL: SUBSTRING('Hola Mundo' FROM 1 FOR 4). También SUBSTR() en muchos SGBD."
  },
  {
    question: "¿Qué significa <code>UNIQUE</code> como restricción de columna?",
    options: [
      "La columna solo acepta valores de tipo texto y rechaza enteros, fechas y otros tipos numéricos",
      "La columna recibe automáticamente un índice B-tree pero permite valores duplicados en los datos",
      "Es exactamente igual a PRIMARY KEY pero puede aplicarse a columnas que no sean la primera",
      "Todos los valores de la columna deben ser distintos (permite NULL, a diferencia de PRIMARY KEY que no)"
    ],
    correct: 3,
    difficulty: "E",
    explanation: "UNIQUE permite NULL (múltiples NULLs según el SGBD) pero no valores duplicados no-NULL. Crea automáticamente un índice único."
  },
  {
    question: "¿Qué es un esquema (SCHEMA) en SQL?",
    options: [
      "El diagrama visual de entidad-relación que documenta las relaciones entre tablas de la base de datos",
      "Un espacio de nombres que agrupa objetos de BD (tablas, vistas, procedimientos) bajo un nombre",
      "El archivo de configuración del servidor que define parámetros de rendimiento y seguridad",
      "Un tipo de tabla especial que almacena solo metadatos sobre la estructura de la base de datos"
    ],
    correct: 1,
    difficulty: "E",
    explanation: "CREATE SCHEMA ventas. Las tablas se referencian como ventas.facturas. Permite organizar objetos y controlar permisos a nivel de schema."
  },
  {
    question: "¿Qué hace <code>REPLACE(str, buscar, reemplazar)</code>?",
    options: [
      "Reemplaza todas las ocurrencias de buscar en str por reemplazar",
      "Solo reemplaza la primera ocurrencia de buscar dejando el resto del string sin modificar",
      "Funciona igual que UPDATE: modifica las filas de la tabla donde la columna contenga el valor buscado",
      "Actualiza filas en la tabla cambiando el valor de la columna str a reemplazar en toda la tabla"
    ],
    correct: 0,
    difficulty: "E",
    explanation: "REPLACE('Hello World', 'World', 'SQL') → 'Hello SQL'. Todas las ocurrencias son reemplazadas. Sensible a mayúsculas en la mayoría de SGBD."
  },
  {
    question: "¿Cómo funciona <code>INNER JOIN</code> vs <code>LEFT JOIN</code>?",
    options: [
      "LEFT JOIN siempre es más lento que INNER JOIN porque debe recorrer toda la tabla izquierda",
      "INNER JOIN retorna solo filas con coincidencia en ambas tablas; LEFT JOIN retorna todas del lado izquierdo más las coincidencias (NULL si no hay)",
      "INNER JOIN devuelve más filas porque incluye las filas sin coincidencia de ambas tablas",
      "Son idénticos en el resultado pero difieren solo en el algoritmo de ejecución interno"
    ],
    correct: 1,
    difficulty: "D",
    explanation: "LEFT JOIN es útil para encontrar registros sin relación: SELECT c.nombre, p.total FROM clientes c LEFT JOIN pedidos p ON c.id=p.cliente_id WHERE p.id IS NULL encuentra clientes sin pedidos."
  },
  {
    question: "¿Qué es una subconsulta (subquery)?",
    options: [
      "Una consulta SQL que tiene errores de sintaxis y necesita ser corregida antes de ejecutarse",
      "Una consulta que se guarda en la base de datos como objeto permanente para reutilización futura",
      "Un tipo especial de JOIN que combina tablas sin necesidad de especificar una condición de unión",
      "Una consulta anidada dentro de otra consulta SQL (en SELECT, WHERE, FROM, HAVING)"
    ],
    correct: 3,
    difficulty: "D",
    explanation: "SELECT nombre FROM empleados WHERE salario > (SELECT AVG(salario) FROM empleados). La subconsulta se ejecuta primero. Puede ser correlacionada (referencia la query exterior) o no correlacionada."
  },
  {
    question: "¿Cuál es la diferencia entre una subconsulta correlacionada y no correlacionada?",
    options: [
      "Ambas se comportan igual: las dos se ejecutan una sola vez al inicio del query principal",
      "La correlacionada siempre es más rápida porque puede usar índices de la query exterior directamente",
      "Esta distinción no existe en SQL estándar, solo en extensiones propietarias de algunos SGBD",
      "No correlacionada: se ejecuta una sola vez independientemente. Correlacionada: se ejecuta para cada fila de la query exterior (referencia campos de la query exterior)"
    ],
    correct: 3,
    difficulty: "D",
    explanation: "Correlacionada: SELECT e.nombre FROM empleados e WHERE e.salario > (SELECT AVG(salario) FROM empleados WHERE departamento_id = e.departamento_id). Se ejecuta N veces (una por empleado)."
  },
  {
    question: "¿Qué es un índice (INDEX) y para qué sirve?",
    options: [
      "Una vista especial que precompila los resultados de consultas frecuentes para servirlos más rápido",
      "Una estructura de datos que acelera las búsquedas en una columna a costa de espacio en disco y tiempo en operaciones de escritura",
      "Un tipo de restricción que garantiza la unicidad de los valores en la columna indexada",
      "Un tipo de JOIN optimizado que el motor usa automáticamente cuando detecta tablas relacionadas"
    ],
    correct: 1,
    difficulty: "D",
    explanation: "CREATE INDEX idx_apellido ON empleados(apellido). Los índices aceleran SELECT pero ralentizan INSERT/UPDATE/DELETE. B-tree es el tipo más común. La PK siempre tiene índice."
  },
  {
    question: "¿Qué es la normalización de base de datos?",
    options: [
      "Comprimir los archivos de datos para reducir el espacio en disco que ocupa la base de datos",
      "Un proceso de organizar tablas para reducir redundancia y mejorar la integridad de datos, siguiendo formas normales (1NF, 2NF, 3NF...)",
      "Reescribir las queries para que el optimizador pueda elegir mejores planes de ejecución",
      "Eliminar los índices que el SGBD detecta como redundantes o que no mejoran el rendimiento"
    ],
    correct: 1,
    difficulty: "D",
    explanation: "1NF: atómicos, sin grupos repetidos. 2NF: sin dependencias parciales. 3NF: sin dependencias transitivas. El objetivo es eliminar anomalías de inserción, actualización y borrado."
  },
  {
    question: "¿Qué es una transacción en SQL?",
    options: [
      "Una consulta compleja que involucra múltiples tablas y condiciones encadenadas con subqueries",
      "Un tipo de índice especial que registra el historial de cambios realizados en una tabla",
      "Una forma de unir tablas asegurando que los datos combinados sean siempre consistentes",
      "Un conjunto de operaciones que se ejecutan como una unidad atómica: o todas se aplican o ninguna (commit/rollback)"
    ],
    correct: 3,
    difficulty: "D",
    explanation: "BEGIN TRANSACTION; UPDATE cuenta SET saldo = saldo - 100 WHERE id=1; UPDATE cuenta SET saldo = saldo + 100 WHERE id=2; COMMIT. Si alguna falla: ROLLBACK."
  },
  {
    question: "¿Qué son las propiedades ACID?",
    options: [
      "Un tipo de índice especial optimizado para transacciones de alta concurrencia en InnoDB",
      "Un tipo de base de datos no relacional diseñado para operaciones de escritura masiva",
      "Un lenguaje de consulta alternativo a SQL para bases de datos orientadas a documentos",
      "Atomicidad, Consistencia, Isolation (Aislamiento), Durabilidad: propiedades que garantizan fiabilidad de las transacciones"
    ],
    correct: 3,
    difficulty: "D",
    explanation: "Atomicidad: todo o nada. Consistencia: de un estado válido a otro. Aislamiento: transacciones no interfieren entre sí. Durabilidad: datos persistidos sobreviven fallos del sistema."
  },
  {
    question: "¿Qué son los niveles de aislamiento de transacciones?",
    options: [
      "READ UNCOMMITTED, READ COMMITTED, REPEATABLE READ, SERIALIZABLE: controlan qué problemas de concurrencia (dirty read, phantom read) se permiten",
      "Los niveles de permisos que definen qué operaciones DML puede ejecutar cada usuario o rol",
      "Los diferentes tipos de bloqueo que aplica el motor al ejecutar operaciones de lectura y escritura",
      "Los tipos de conexiones al servidor: SSL, TCP, socket Unix y pipes con distintas garantías"
    ],
    correct: 0,
    difficulty: "D",
    explanation: "READ UNCOMMITTED: permite dirty reads. READ COMMITTED (default en PostgreSQL): no dirty reads. REPEATABLE READ (default MySQL InnoDB): no phantom en algunos casos. SERIALIZABLE: máxima consistencia, menor concurrencia."
  },
  {
    question: "¿Qué es un stored procedure?",
    options: [
      "Una vista con lógica compleja que filtra y transforma datos según parámetros de entrada",
      "Un programa SQL almacenado en la base de datos que puede recibir parámetros, ejecutar lógica compleja y retornar resultados",
      "Un tipo de índice persistente que precalcula resultados de expresiones sobre columnas de la tabla",
      "Un tipo de tabla especial que almacena datos de forma permanente en el espacio temporal del sistema"
    ],
    correct: 1,
    difficulty: "D",
    explanation: "CREATE PROCEDURE obtener_empleados(p_dept INT) AS BEGIN SELECT * FROM empleados WHERE dept_id = p_dept; END. Se llama con EXEC/CALL. Ventajas: rendimiento, seguridad, reutilización."
  },
  {
    question: "¿Qué es una función en SQL (user-defined function)?",
    options: [
      "Una función definida por el usuario que retorna un valor y puede usarse en SELECT/WHERE, a diferencia de stored procedures que se llaman con EXEC",
      "Es exactamente igual a un stored procedure: ambos aceptan parámetros y se llaman con EXEC",
      "Una vista paramétrica que acepta argumentos para filtrar sus resultados de manera dinámica",
      "Un tipo de trigger que se activa automáticamente al ejecutar una función del sistema en la BD"
    ],
    correct: 0,
    difficulty: "D",
    explanation: "CREATE FUNCTION calcular_edad(fecha_nac DATE) RETURNS INT AS ... Scalar function retorna un valor. Table-valued function retorna una tabla. Se usa en queries como funciones nativas."
  },
  {
    question: "¿Qué es un trigger?",
    options: [
      "Un procedimiento que se ejecuta automáticamente en respuesta a un evento (INSERT, UPDATE, DELETE) en una tabla",
      "Un tipo de JOIN que une automáticamente tablas relacionadas cuando se detecta una clave foránea",
      "Un tipo de índice condicional que se activa solo cuando se cumplen ciertas condiciones en la query",
      "Una restricción de tabla que previene la inserción de valores duplicados en columnas específicas"
    ],
    correct: 0,
    difficulty: "D",
    explanation: "CREATE TRIGGER audit_empleado AFTER UPDATE ON empleados FOR EACH ROW INSERT INTO auditoria VALUES (OLD.salario, NEW.salario, NOW()). Útil para auditoría, validaciones complejas."
  },
  {
    question: "¿Qué son las Window Functions (funciones de ventana)?",
    options: [
      "Funciones para gestionar ventanas de tiempo en datos de series temporales con intervalos fijos",
      "Un tipo de subquery que opera sobre un subconjunto de filas definido por una cláusula EXISTS",
      "Son exactamente iguales a GROUP BY pero con sintaxis diferente y el mismo comportamiento",
      "Funciones que calculan valores sobre un conjunto de filas relacionadas a la fila actual sin agruparlas: ROW_NUMBER, RANK, LAG, LEAD, SUM OVER"
    ],
    correct: 3,
    difficulty: "D",
    explanation: "SELECT nombre, salario, RANK() OVER (PARTITION BY dept ORDER BY salario DESC) as ranking FROM empleados. La fila no se colapsa como en GROUP BY; se mantiene el detalle."
  },
  {
    question: "¿Qué hace <code>ROW_NUMBER() OVER()</code>?",
    options: [
      "Retorna el número total de filas de la tabla, equivalente a COUNT(*) pero como función de ventana",
      "Es idéntico a ROWID: retorna el identificador físico de almacenamiento de la fila en el disco",
      "Numera solo las filas que tienen valores repetidos, dejando las únicas sin número asignado",
      "Asigna un número único consecutivo a cada fila en el resultado, según el ORDER BY de la ventana"
    ],
    correct: 3,
    difficulty: "D",
    explanation: "SELECT ROW_NUMBER() OVER (ORDER BY salario DESC) as num, nombre FROM empleados. Útil para paginación, ranking, eliminar duplicados (DELETE WHERE row_num > 1)."
  },
  {
    question: "¿Qué diferencia hay entre <code>RANK()</code> y <code>DENSE_RANK()</code>?",
    options: [
      "RANK() deja huecos tras empates (1,2,2,4); DENSE_RANK() no (1,2,2,3)",
      "RANK() es más moderno y reemplaza a DENSE_RANK() en todas las versiones de SQL recientes",
      "Producen resultados idénticos: ambas numeran las filas empatadas con el mismo rango consecutivo",
      "DENSE_RANK() siempre falla cuando hay más de una partición definida en la cláusula OVER"
    ],
    correct: 0,
    difficulty: "D",
    explanation: "Con empates: RANK: 1, 2, 2, 4 (salta el 3). DENSE_RANK: 1, 2, 2, 3 (sin saltos). ROW_NUMBER: siempre único (desempate arbitrario). Elige según el negocio."
  },
  {
    question: "¿Qué es una CTE (Common Table Expression)?",
    options: [
      "Una consulta temporal nombrada con WITH que se puede referenciar en la query principal, mejorando la legibilidad",
      "Un tipo de vista persistente que se guarda en el catálogo y puede usarse en múltiples sesiones",
      "Exactamente igual a una subquery: el motor lo convierte internamente siempre de la misma forma",
      "Un tipo de tabla temporal que persiste entre sesiones y se almacena en el espacio de tablas temporal"
    ],
    correct: 0,
    difficulty: "D",
    explanation: "WITH ventas_mensuales AS (SELECT mes, SUM(total) as total FROM pedidos GROUP BY mes) SELECT * FROM ventas_mensuales WHERE total > 10000. Más legible que subqueries anidados."
  },
  {
    question: "¿Qué es una CTE recursiva?",
    options: [
      "Una CTE que se repite infinitamente sin caso base, útil para generar series numéricas ilimitadas",
      "Una CTE que se referencia a sí misma para recorrer estructuras jerárquicas (árboles, grafos): WITH RECURSIVE empleados_jerarquia AS (... UNION ALL ...)",
      "Una CTE que solo puede usarse con JOIN y no admite operaciones de filtrado o proyección",
      "Es idéntica a una CTE normal pero con la palabra RECURSIVE que solo cambia el nombre, no el comportamiento"
    ],
    correct: 1,
    difficulty: "D",
    explanation: "WITH RECURSIVE jerarquia AS (SELECT id, nombre, jefe_id FROM empleados WHERE jefe_id IS NULL UNION ALL SELECT e.id, e.nombre, e.jefe_id FROM empleados e JOIN jerarquia j ON e.jefe_id = j.id)"
  },
  {
    question: "¿Qué hace <code>LAG(col, n)</code> y <code>LEAD(col, n)</code>?",
    options: [
      "Funciones de ordenamiento que desplazan los valores de la columna n posiciones hacia arriba o abajo",
      "Window functions que acceden al valor de una fila anterior (LAG) o siguiente (LEAD) en n posiciones, sin JOIN",
      "Calculan la diferencia numérica entre la fila actual y la n-ésima fila del grupo de la ventana",
      "Son idénticas a la cláusula OFFSET/FETCH: desplazan el inicio del resultado n filas hacia adelante"
    ],
    correct: 1,
    difficulty: "D",
    explanation: "SELECT fecha, ventas, LAG(ventas) OVER (ORDER BY fecha) as ventas_anterior, ventas - LAG(ventas) OVER (ORDER BY fecha) as variacion FROM ventas_diarias."
  },
  {
    question: "¿Qué es la primera forma normal (1NF)?",
    options: [
      "Una tabla donde cada columna contiene valores atómicos (indivisibles), sin grupos repetidos de columnas y con PK definida",
      "Una forma normal que solo elimina las filas duplicadas pero no requiere valores atómicos en columnas",
      "Una tabla que únicamente tiene una clave primaria definida, sin otros requisitos adicionales",
      "La mejor práctica de diseño que siempre produce el esquema de mayor rendimiento en producción"
    ],
    correct: 0,
    difficulty: "D",
    explanation: "Violación de 1NF: columna 'telefonos' con '555-1234,555-5678'. Solución: tabla separada Telefonos(empleado_id, telefono). Cada celda debe contener un único valor."
  },
  {
    question: "¿Qué es la segunda forma normal (2NF)?",
    options: [
      "En tablas con clave compuesta, todos los atributos no-clave deben depender de toda la clave, no de parte de ella",
      "Es 1NF con la adición de índices en todas las columnas para mejorar el rendimiento de las queries",
      "Es 1NF garantizando que no existen filas duplicadas en ninguna de las columnas de la tabla",
      "Solo aplica a tablas que participan en joins y no tiene efecto en tablas referenciadas individualmente"
    ],
    correct: 0,
    difficulty: "D",
    explanation: "Ejemplo de violación: tabla (pedido_id, producto_id, precio_producto). precio_producto depende solo de producto_id, no de la clave compuesta completa. Solución: mover precio a tabla Productos."
  },
  {
    question: "¿Qué es la tercera forma normal (3NF)?",
    options: [
      "No debe haber dependencias transitivas: los atributos no-clave deben depender solo de la clave primaria, no de otros atributos no-clave",
      "Es 2NF con la restricción adicional de añadir más tablas de referencia para cada columna de texto",
      "Es la forma normal más alta que existe en la teoría relacional, no hay formas superiores a ella",
      "Solo aplica a tablas que tienen claves compuestas de dos o más columnas en su definición"
    ],
    correct: 0,
    difficulty: "D",
    explanation: "Violación: Empleado(id, dept_id, nombre_depto). nombre_depto depende de dept_id, no de id. Solución: tabla Departamentos(id, nombre). La 3NF es el objetivo estándar de diseño."
  },
  {
    question: "¿Qué es la desnormalización y cuándo es apropiada?",
    options: [
      "Siempre es una mala práctica que degrada la integridad de datos y debe evitarse en cualquier sistema",
      "Solo se aplica durante la creación de backups para reducir el tamaño del archivo resultante",
      "Es equivalente a llevar el esquema a 1NF eliminando estructuras anidadas de las columnas multivalor",
      "Introducir redundancia controlada para mejorar el rendimiento de lectura; apropiada en data warehouses, reporting, o cuando los JOINs son el cuello de botella"
    ],
    correct: 3,
    difficulty: "D",
    explanation: "En OLAP/DWH las consultas de lectura masiva con muchos JOINs son el caso de uso. Las tablas fact y dimension en estrella son un ejemplo de desnormalización intencional."
  },
  {
    question: "¿Qué es un índice compuesto y cómo afecta las queries?",
    options: [
      "Es exactamente equivalente a crear varios índices simples independientes sobre cada columna",
      "Un índice que almacena todos los datos de las columnas incluidas para evitar accesos a la tabla",
      "Un índice sobre múltiples columnas: útil para queries que filtran/ordenan por esas columnas; el orden de las columnas importa (prefix rule)",
      "Un índice de texto completo que tokeniza las palabras de todas las columnas de tipo VARCHAR"
    ],
    correct: 2,
    difficulty: "D",
    explanation: "INDEX (apellido, nombre): beneficia WHERE apellido='García' y WHERE apellido='García' AND nombre='Ana', pero NO solo WHERE nombre='Ana' (no empieza por la primera columna del índice)."
  },
  {
    question: "¿Qué es <code>EXPLAIN</code> o <code>EXPLAIN ANALYZE</code>?",
    options: [
      "Detecta y reporta todos los errores de sintaxis de la query sin ejecutarla en ningún caso",
      "Describe la estructura del esquema mostrando las columnas, tipos y restricciones de la tabla",
      "Muestra el plan de ejecución de una query: qué índices usa, el tipo de JOIN, costo estimado vs real",
      "Analiza las estadísticas de la base de datos y actualiza los histogramas de distribución de datos"
    ],
    correct: 2,
    difficulty: "D",
    explanation: "EXPLAIN SELECT * FROM empleados WHERE apellido='García'; muestra si usa index, sequential scan, hash join, etc. EXPLAIN ANALYZE ejecuta la query y muestra el plan real con tiempos."
  },
  {
    question: "¿Qué es el problema N+1 en bases de datos?",
    options: [
      "Un tipo de error SQL que ocurre cuando se intenta insertar más de N+1 filas en una transacción",
      "Un límite configurado en el servidor que restringe el número de filas por query a N+1 como máximo",
      "Ejecutar 1 query para obtener N registros y luego N queries adicionales (una por registro) para obtener datos relacionados; muy ineficiente",
      "Un tipo de JOIN que genera N+1 filas al combinar tablas con relaciones uno-a-muchos anidadas"
    ],
    correct: 2,
    difficulty: "D",
    explanation: "Solución: un único JOIN o subquery que obtenga todo en una consulta. En ORMs, configura eager loading para las relaciones necesarias. EXPLAIN detecta este patrón."
  },
  {
    question: "¿Qué hace <code>ON DELETE CASCADE</code>?",
    options: [
      "Borra toda la tabla completa cuando se elimina cualquier registro que tenga hijos relacionados",
      "Previene los borrados del padre lanzando un error si existen registros hijos que lo referencian",
      "Al borrar un registro padre, borra automáticamente todos los registros hijos que lo referencian via FOREIGN KEY",
      "Solo actualiza los valores de la clave foránea en los hijos poniendo el nuevo ID del padre"
    ],
    correct: 2,
    difficulty: "D",
    explanation: "ON DELETE CASCADE en la FK del hijo: si borras un cliente, sus pedidos se borran automáticamente. Otras opciones: SET NULL (pone la FK a NULL), RESTRICT/NO ACTION (previene el borrado)."
  },
  {
    question: "¿Qué es un self-join?",
    options: [
      "Unir automáticamente una tabla usando las claves foráneas detectadas sin especificar condición ON",
      "Un JOIN circular que provoca un bucle infinito en el motor al no tener condición de terminación",
      "Un error de SQL que ocurre cuando se usa el mismo alias dos veces en la misma cláusula FROM",
      "Cuando una tabla hace JOIN con ella misma, útil para relaciones jerárquicas o comparar filas de la misma tabla"
    ],
    correct: 3,
    difficulty: "D",
    explanation: "SELECT e.nombre, j.nombre as jefe FROM empleados e LEFT JOIN empleados j ON e.jefe_id = j.id. La tabla empleados aparece dos veces con aliases distintos."
  },
  {
    question: "¿Qué hace el operador <code>EXISTS</code>?",
    options: [
      "Retorna TRUE si la subconsulta retorna al menos una fila; generalmente más eficiente que IN para subconsultas grandes",
      "Es idéntico al operador IN en funcionamiento pero tiene diferente comportamiento solo con subconsultas vacías",
      "Solo verifica la unicidad de los valores retornados por la subconsulta en la columna indicada",
      "Verifica si una tabla con el nombre dado existe en el esquema actual de la base de datos"
    ],
    correct: 0,
    difficulty: "D",
    explanation: "SELECT c.nombre FROM clientes c WHERE EXISTS (SELECT 1 FROM pedidos p WHERE p.cliente_id = c.id). EXISTS puede cortocircuitar tras encontrar la primera coincidencia."
  },
  {
    question: "¿Qué es un deadlock en base de datos?",
    options: [
      "Un tipo de error de sintaxis que bloquea la ejecución de todas las queries de la misma sesión",
      "Un índice corrupto que impide al motor actualizar las filas bloqueando las operaciones de escritura",
      "Una consulta con un bucle en su plan de ejecución que nunca termina de retornar resultados",
      "Cuando dos transacciones se bloquean mutuamente esperando un recurso que la otra tiene, resultando en un ciclo de espera infinito"
    ],
    correct: 3,
    difficulty: "D",
    explanation: "T1 tiene lock en A, quiere B. T2 tiene lock en B, quiere A. El SGBD detecta el ciclo y aborta una de las transacciones (victim selection). Solución: acceder siempre a los recursos en el mismo orden."
  },
  {
    question: "¿Qué es un CROSS JOIN?",
    options: [
      "Un JOIN que acepta condiciones complejas con múltiples columnas y operadores OR en la cláusula ON",
      "Es equivalente a FULL OUTER JOIN: incluye todas las filas de ambas tablas con NULLs donde no hay coincidencia",
      "Un JOIN que combina dos tablas de bases de datos diferentes ubicadas en distintos servidores",
      "El producto cartesiano: combina cada fila de la primera tabla con cada fila de la segunda; resultado tiene N*M filas"
    ],
    correct: 3,
    difficulty: "D",
    explanation: "SELECT * FROM colores CROSS JOIN tallas genera todas las combinaciones posibles. Útil para generar combinaciones de productos (catálogos). Sin WHERE puede retornar millones de filas."
  },
  {
    question: "¿Qué es la diferencia entre <code>CHAR</code> y <code>VARCHAR</code>?",
    options: [
      "CHAR es el tipo más moderno y VARCHAR es obsoleto; los SGBD lo mantienen solo por compatibilidad",
      "Son sinónimos intercambiables: el motor los trata de forma idéntica en almacenamiento y rendimiento",
      "CHAR(n) almacena exactamente n caracteres (con padding); VARCHAR(n) almacena la longitud variable hasta n caracteres (más eficiente para longitudes variables)",
      "VARCHAR siempre es más lento que CHAR porque requiere leer la longitud antes de acceder al dato"
    ],
    correct: 2,
    difficulty: "D",
    explanation: "CHAR(10) para 'Ana' guarda 'Ana       ' (7 espacios). VARCHAR(10) para 'Ana' guarda 'Ana' (3 bytes + overhead). CHAR es útil para campos de longitud fija (código de país, DNI)."
  },
  {
    question: "¿Qué es el tipo de dato <code>JSON</code> en SQL y cuándo usarlo?",
    options: [
      "Solo existe en bases de datos NoSQL; las bases de datos SQL relacionales no soportan JSON nativamente",
      "Solo se usa para almacenar logs de texto sin estructura que no encajan en columnas convencionales",
      "Es exactamente igual a TEXT: el motor no valida ni interpreta el contenido, solo lo almacena",
      "PostgreSQL y MySQL 5.7+ tienen tipo JSON nativo que valida el JSON y permite operaciones sobre él; útil para esquemas flexibles sin renunciar a SQL"
    ],
    correct: 3,
    difficulty: "D",
    explanation: "PostgreSQL JSONB (binario, indexable) es más eficiente. Operadores: data->'key', data->>'key' (texto). Índice GIN sobre JSONB permite búsquedas eficientes en JSON. Úsalo para datos semi-estructurados."
  },
  {
    question: "¿Qué es un particionado de tabla?",
    options: [
      "Dividir físicamente una tabla grande en partes (particiones) basadas en un criterio (rango, lista, hash) para mejorar rendimiento y mantenimiento",
      "Un tipo de vista especial que divide los resultados en páginas de tamaño fijo para la aplicación",
      "Dividir la tabla en exactamente dos mitades iguales para distribuir la carga de lecturas y escrituras",
      "Es equivalente a sharding: distribuye las particiones en múltiples servidores distintos de la red"
    ],
    correct: 0,
    difficulty: "D",
    explanation: "PARTITION BY RANGE (año): tabla de ventas particionada por año. Queries que filtran por año solo acceden a la partición relevante (partition pruning). Permite borrar particiones completas en segundos."
  },
  {
    question: "¿Qué es la diferencia entre OLTP y OLAP?",
    options: [
      "OLTP: transacciones frecuentes y cortas (comercio, ERP); OLAP: queries analíticas complejas sobre grandes volúmenes (BI, data warehouse)",
      "Son sinónimos: ambos términos describen el mismo tipo de carga de trabajo en bases de datos relacionales",
      "Solo difieren en el tamaño de los datos: OLTP para tablas pequeñas y OLAP para tablas de más de un millón de filas",
      "OLAP es obsoleto y ha sido completamente reemplazado por bases de datos NewSQL en producción moderna"
    ],
    correct: 0,
    difficulty: "D",
    explanation: "OLTP: normalizado, muchas escrituras. OLAP: desnormalizado (star/snowflake schema), optimizado para lecturas analíticas, con columnar storage, agregaciones masivas."
  },
  {
    question: "¿Qué es <code>MERGE</code> (o <code>UPSERT</code>)?",
    options: [
      "Es equivalente a INSERT: siempre añade una nueva fila independientemente de si el registro existe",
      "Combina la definición de dos tablas en una sola nueva tabla con todas las columnas de ambas",
      "Un tipo de JOIN que fusiona los datos de dos tablas en el resultado sin duplicar las columnas comunes",
      "Operación que inserta un registro si no existe o lo actualiza si ya existe; MySQL: INSERT ... ON DUPLICATE KEY UPDATE; PostgreSQL: INSERT ... ON CONFLICT"
    ],
    correct: 3,
    difficulty: "D",
    explanation: "PostgreSQL: INSERT INTO tabla VALUES(...) ON CONFLICT (id) DO UPDATE SET col=EXCLUDED.col. SQL Server: MERGE ... USING ... WHEN MATCHED THEN UPDATE ... WHEN NOT MATCHED THEN INSERT."
  },
  {
    question: "¿Qué es un esquema estrella (star schema) en data warehousing?",
    options: [
      "Un esquema con muchas tablas altamente normalizadas conectadas por claves foráneas en cadena",
      "Un tipo especial de JOIN que conecta tablas en forma radial usando claves artificiales generadas",
      "Un esquema con muchos índices bitmap sobre columnas de baja cardinalidad en tablas de hechos",
      "Una tabla de hechos central conectada directamente a tablas de dimensiones, sin normalización adicional en las dimensiones"
    ],
    correct: 3,
    difficulty: "D",
    explanation: "Tabla Fact: ventas (monto, fecha_id, producto_id, cliente_id). Tablas Dimension: tiempo, producto, cliente. Optimizado para queries OLAP con GROUP BY en múltiples dimensiones."
  },
  {
    question: "¿Qué hace <code>NTILE(n) OVER()</code>?",
    options: [
      "Retorna el valor en el n-ésimo percentil de la distribución del conjunto de filas del grupo",
      "Es idéntico a RANK(): asigna el mismo número de ranking a las filas con el mismo valor de columna",
      "Divide las filas en n cubos (grupos) de tamaño aproximadamente igual y asigna el número de cubo a cada fila",
      "Divide el resultado en exactamente n grupos iguales y numera cada fila con su posición dentro del grupo"
    ],
    correct: 2,
    difficulty: "D",
    explanation: "NTILE(4) OVER (ORDER BY salario) divide en cuartiles. Útil para segmentación: clientes en quartiles de gasto, empleados en rangos de rendimiento."
  },
  {
    question: "¿Qué son los tipos de datos <code>DATETIME</code> vs <code>TIMESTAMP</code>?",
    options: [
      "DATETIME solo almacena la fecha sin la hora; TIMESTAMP almacena la hora sin la fecha del día",
      "DATETIME almacena fecha/hora como literal; TIMESTAMP almacena con zona horaria (UTC internamente) y se convierte al timezone del servidor al leer",
      "TIMESTAMP es obsoleto y fue reemplazado por DATETIME en todas las versiones de SQL modernas",
      "Son completamente equivalentes y el motor los trata de forma idéntica en almacenamiento y cálculos"
    ],
    correct: 1,
    difficulty: "D",
    explanation: "MySQL: TIMESTAMP tiene rango hasta 2038 (limitación de Unix time 32-bit). PostgreSQL: TIMESTAMP WITH TIME ZONE (TIMESTAMPTZ) es timezone-aware. Para datos globales: siempre TIMESTAMPTZ."
  },
  {
    question: "¿Cómo funciona el plan de ejecución de una query compleja?",
    options: [
      "El orden de las tablas en el FROM determina siempre el orden en que el motor las procesa y une",
      "El motor ejecuta las cláusulas de arriba a abajo: primero SELECT, luego FROM, luego WHERE",
      "El optimizador de queries analiza estadísticas, índices y costos para elegir el plan más eficiente; puede reordenar joins, usar distintos tipos de join (hash/merge/nested loop)",
      "Siempre usa los índices disponibles independientemente de la selectividad de los predicados"
    ],
    correct: 2,
    difficulty: "C",
    explanation: "El cost-based optimizer (CBO) estima el costo de cada plan y elige el mínimo. Las estadísticas de tabla (ANALYZE) son críticas para buenas estimaciones. EXPLAIN muestra el plan elegido."
  },
  {
    question: "¿Qué es un índice de cobertura (covering index)?",
    options: [
      "Un índice que incluye todas las columnas de la tabla para que nunca sea necesario leer la tabla",
      "Un índice que contiene todos los campos necesarios para una query, evitando acceder a la tabla principal (index-only scan)",
      "Un índice de texto completo que cubre todas las columnas de tipo VARCHAR en la tabla",
      "Un índice compuesto que cubre la combinación de columnas más frecuente en las queries de la aplicación"
    ],
    correct: 1,
    difficulty: "C",
    explanation: "Si la query necesita columnas A, B, C y el índice incluye A, B, C: el SGBD puede responder sin leer la tabla. PostgreSQL: INCLUDE(col) en CREATE INDEX para añadir columnas no-clave al índice."
  },
  {
    question: "¿Qué es la técnica de query rewriting para optimización?",
    options: [
      "Reescribir el código SQL manualmente cada vez que el rendimiento de la query degrada en producción",
      "El optimizador transforma internamente la query a formas equivalentes más eficientes: convertir IN a EXISTS, mover predicados, eliminar subqueries redundantes",
      "Solo el DBA tiene permiso para aplicar esta técnica mediante herramientas propietarias del SGBD",
      "No existe en SQL moderno: los optimizadores actuales ejecutan siempre la query exactamente como se escribe"
    ],
    correct: 1,
    difficulty: "C",
    explanation: "Ejemplos: IN subquery → JOIN, NOT IN → NOT EXISTS (más eficiente), OR → UNION (puede usar índices en ambas partes), DISTINCT con GROUP BY equivalente. El optimizador hace muchos de estos automáticamente."
  },
  {
    question: "¿Qué es el buffer pool / shared buffer en bases de datos?",
    options: [
      "Un tipo de transacción que agrupa múltiples operaciones en un buffer antes de confirmarse en disco",
      "El log secuencial donde se registran todas las modificaciones antes de aplicarse a las páginas de datos",
      "Un tipo de índice en memoria que cachea los resultados de las búsquedas más frecuentes en B-tree",
      "Área de memoria donde el SGBD cachea páginas de disco; un alto hit rate (páginas encontradas en memoria) es clave para el rendimiento"
    ],
    correct: 3,
    difficulty: "C",
    explanation: "PostgreSQL: shared_buffers (recomendado: 25% RAM). MySQL InnoDB: innodb_buffer_pool_size (50-75% RAM en servidor dedicado). Hit rate < 99% indica que necesitas más memoria o mejores índices."
  },
  {
    question: "¿Qué es el Write-Ahead Log (WAL) en bases de datos?",
    options: [
      "Un tipo de transacción asíncrona que aplaza la escritura a disco hasta que la cola supera un umbral",
      "Un log que registra las queries más lentas para análisis posterior de rendimiento y optimización",
      "Los cambios se escriben primero en el WAL (log secuencial en disco) antes de aplicarse a las páginas de datos; garantiza durabilidad y recuperación ante fallos",
      "Un log del sistema operativo que registra los errores y advertencias del proceso del servidor de BD"
    ],
    correct: 2,
    difficulty: "C",
    explanation: "El WAL permite recovery: si el sistema falla, se replayan los registros del WAL pendientes. También es la base de la replicación en streaming y PITR (Point-in-Time Recovery)."
  },
  {
    question: "¿Cómo funciona la replicación maestro-esclavo (master-replica)?",
    options: [
      "Copiar manualmente los archivos de datos del master a las réplicas de forma periódica y programada",
      "Las réplicas también aceptan escrituras y las sincronizan al master en un modelo de multi-master",
      "El master envía cambios (WAL en PostgreSQL, binlog en MySQL) a las réplicas; las réplicas aplican los cambios para mantener una copia actualizada",
      "Es solo para backups: las réplicas solo se activan cuando el master falla para restaurar datos"
    ],
    correct: 2,
    difficulty: "C",
    explanation: "Réplicas de lectura escalan las lecturas. Failover: si el master cae, una réplica se promueve. PostgreSQL: streaming replication. MySQL: binary log replication. Latencia de replicación es un parámetro clave."
  },
  {
    question: "¿Qué es el MVCC (Multiversion Concurrency Control)?",
    options: [
      "Una técnica exclusiva de PostgreSQL que no está disponible en MySQL, Oracle ni SQL Server",
      "Un tipo de bloqueo a nivel de fila que impide lecturas sucias bloqueando las filas modificadas",
      "Las bases de datos mantienen múltiples versiones de los datos, permitiendo que lecturas no bloqueen escrituras y viceversa; cada transacción ve un snapshot consistente",
      "Un tipo de índice especial que almacena versiones históricas de los valores para consultas temporales"
    ],
    correct: 2,
    difficulty: "C",
    explanation: "PostgreSQL y MySQL InnoDB usan MVCC. Al UPDATE, la fila vieja no se borra inmediatamente (dead tuple/undo log). Las lecturas ven la versión apropiada según su snapshot timestamp."
  },
  {
    question: "¿Qué es el vacuuming en PostgreSQL?",
    options: [
      "Comprimir los índices B-tree reorganizando las páginas para reducir la fragmentación acumulada",
      "Proceso que elimina dead tuples (filas antiguas de MVCC) y actualiza estadísticas; autovacuum lo hace automáticamente",
      "Un tipo de borrado de datos que elimina filas marcadas como eliminadas en operaciones DELETE masivas",
      "Limpiar el disco eliminando los archivos temporales que el motor crea durante las queries complejas"
    ],
    correct: 1,
    difficulty: "C",
    explanation: "Sin vacuum, la table bloat (tablas hinchadas con dead tuples) degrada el rendimiento. VACUUM ANALYZE reconstruye estadísticas. VACUUM FULL reescribe la tabla (bloqueo exclusivo)."
  },
  {
    question: "¿Qué son los tipos de bloqueo en bases de datos relacionales?",
    options: [
      "Solo existen table locks: todos los SGBD relacionales bloquean la tabla completa en cada operación",
      "Los bloqueos solo se aplican dentro de transacciones explícitas; las autocommit no usan bloqueos",
      "Son bloqueos gestionados por el sistema operativo sobre los archivos de datos en el sistema de ficheros",
      "Row-level, page-level, table-level locks; shared (lectura) vs exclusive (escritura); las bases de datos modernas prefieren locks de grano fino para mayor concurrencia"
    ],
    correct: 3,
    difficulty: "C",
    explanation: "PostgreSQL: ACCESS SHARE, ROW SHARE, ROW EXCLUSIVE, SHARE, EXCLUSIVE, ACCESS EXCLUSIVE. La mayoría de operaciones usan row-level locks. DDL requiere ACCESS EXCLUSIVE (bloquea toda la tabla)."
  },
  {
    question: "¿Qué es el two-phase commit (2PC)?",
    options: [
      "Una transacción que requiere dos sentencias SQL: primero INSERT y luego UPDATE en la misma operación",
      "Un algoritmo de ordenamiento de registros en dos pasadas que minimiza el uso de memoria en disco",
      "Un protocolo para transacciones distribuidas: fase prepare (todos los participantes confirman que pueden hacer commit) y fase commit/rollback (el coordinador decide)",
      "Un tipo de replicación síncrona donde el master espera confirmación de dos réplicas antes de retornar"
    ],
    correct: 2,
    difficulty: "C",
    explanation: "2PC garantiza atomicidad entre múltiples BD. Problema: si el coordinador falla entre las fases, los participantes quedan en estado de incertidumbre (bloqueados). Por esto se prefieren sagas en microservicios."
  },
  {
    question: "¿Qué es un índice B-tree y por qué es el más común?",
    options: [
      "Un índice de texto completo que tokeniza palabras y las almacena con sus posiciones en el documento",
      "Un índice binario que solo soporta búsquedas por igualdad exacta y no puede hacer rangos",
      "Un árbol balanceado donde todas las hojas están al mismo nivel; eficiente para igualdad, rango, ORDER BY; O(log n) para búsquedas",
      "Un índice solo para enteros que no puede indexar cadenas de texto, fechas ni tipos flotantes"
    ],
    correct: 2,
    difficulty: "C",
    explanation: "B-tree (Balanced tree): la altura es proporcional al log del número de páginas. Soporta: =, <, >, <=, >=, BETWEEN, LIKE 'prefix%'. No funciona para LIKE '%suffix'. Default en casi todos los SGBD."
  },
  {
    question: "¿Qué es un índice de hash y cuándo es apropiado?",
    options: [
      "Solo puede crearse sobre claves primarias de tipo entero, no sobre claves foráneas ni columnas comunes",
      "Es equivalente a un B-tree con profundidad fija de dos niveles para accesos directos a páginas",
      "Un índice que usa un algoritmo hash criptográfico para proteger los valores de la columna indexada",
      "Un índice que usa una función hash para mapear claves a posiciones; O(1) para igualdad exacta, no soporta rango u ordenamiento"
    ],
    correct: 3,
    difficulty: "C",
    explanation: "Hash index es más rápido que B-tree para búsquedas de igualdad exacta (=). Pero no soporta <, >, BETWEEN, ORDER BY. MySQL no lo persiste en disco (en memoria). PostgreSQL lo persiste."
  },
  {
    question: "¿Qué es un índice GIN/GIST en PostgreSQL?",
    options: [
      "Solo se pueden usar para columnas de tipo JSON y JSONB, no para otros tipos de datos compuestos",
      "GIN (Generalized Inverted Index): para datos compuestos como arrays, JSONB, full-text search. GiST (Generalized Search Tree): para tipos geométricos, rangos, similar a B-tree pero extensible",
      "Son tipos de índices de texto que solo soportan búsquedas de palabras completas sin patrones parciales",
      "Son obsoletos y reemplazados por los índices BRIN en versiones recientes de PostgreSQL"
    ],
    correct: 1,
    difficulty: "C",
    explanation: "CREATE INDEX ON docs USING GIN(contenido) para full-text search. CREATE INDEX ON eventos USING GiST(rango) para búsquedas de solapamiento. GIN: mejor búsqueda. GiST: actualizaciones más rápidas."
  },
  {
    question: "¿Qué es el query optimizer y cómo funciona con estadísticas?",
    options: [
      "Una herramienta visual externa que el DBA usa para analizar y reescribir queries lentas manualmente",
      "El componente del SGBD que analiza las estadísticas de distribución de datos (histogramas, cardinalidad) para estimar el costo de cada plan de ejecución posible y elegir el mejor",
      "Un mecanismo que crea índices automáticamente sobre columnas detectadas en cláusulas WHERE frecuentes",
      "Una capa de caché que almacena los resultados de las queries más ejecutadas para servirlos sin re-ejecutar"
    ],
    correct: 1,
    difficulty: "C",
    explanation: "ANALYZE (PostgreSQL) o ANALYZE TABLE (MySQL) actualiza estadísticas. Sin estadísticas precisas, el optimizador puede hacer malas elecciones (usar full scan en lugar de índice o viceversa)."
  },
  {
    question: "¿Qué es la fragmentación de índices y cómo remediarla?",
    options: [
      "La fragmentación del disco duro que afecta al rendimiento de la lectura secuencial de los archivos de datos",
      "Es solo un problema de espacio en disco que no tiene impacto en el rendimiento de las consultas SQL",
      "Los índices B-tree se fragmentan con el tiempo por inserciones/borrados: páginas con poca ocupación aumentan el I/O. Solución: REBUILD o REORGANIZE el índice periódicamente",
      "Solo ocurre en SQL Server, PostgreSQL y MySQL gestionan la fragmentación de índices automáticamente"
    ],
    correct: 2,
    difficulty: "C",
    explanation: "SQL Server: ALTER INDEX idx REBUILD (offline, reconstruye) o REORGANIZE (online, más lento pero sin bloqueo). PostgreSQL: REINDEX. Monitorear el fill factor y la fragmentación."
  },
  {
    question: "¿Qué es el problema de phantom reads y qué nivel de aislamiento lo previene?",
    options: [
      "READ COMMITTED lo previene: al confirmar cada lectura no puede ver filas insertas por otras transacciones",
      "Cuando una transacción lee un conjunto de filas dos veces y ve filas nuevas que otra transacción insertó entre las dos lecturas; SERIALIZABLE lo previene",
      "No es un problema real porque los SGBD modernos siempre ven un snapshot consistente sin excepciones",
      "Lecturas de valores NULL por transacciones concurrentes que modifican columnas sin restricción NOT NULL"
    ],
    correct: 1,
    difficulty: "C",
    explanation: "Phantom: T1 SELECT WHERE precio < 100 (5 filas). T2 INSERT precio=80. T1 SELECT WHERE precio < 100 (6 filas). Nivel SERIALIZABLE garantiza que T1 siempre ve el mismo conjunto."
  },
  {
    question: "¿Qué son los tipos de tabla temporal en SQL?",
    options: [
      "Solo existen en SQL Server y no tienen equivalente en PostgreSQL, MySQL ni Oracle",
      "Tablas que existen solo durante la sesión o transacción: CREATE TEMPORARY TABLE (MySQL/PostgreSQL, scope de sesión) o variables de tabla y tablas #temp en SQL Server",
      "Son vistas especiales con datos materializados que se eliminan cuando se cierra la ventana de consulta",
      "Tablas que el motor borra automáticamente cuando los datos superan el límite de tamaño configurado"
    ],
    correct: 1,
    difficulty: "C",
    explanation: "PostgreSQL: CREATE TEMP TABLE (se borra al finalizar la sesión). MySQL: CREATE TEMPORARY TABLE (igual). SQL Server: #tabla (temp global ##tabla), @tabla (variable, scope de bloque). Útiles para resultados intermedios."
  },
  {
    question: "¿Qué es el EXPLAIN ANALYZE y cómo interpretarlo?",
    options: [
      "Una herramienta de documentación que genera descripciones en texto de las tablas y sus relaciones",
      "Ejecuta la query real y muestra: plan de ejecución, costo estimado vs real, filas estimadas vs reales, tiempo de ejecución por nodo",
      "Un tipo de profiling del sistema operativo que mide el I/O y CPU usados por el proceso del SGBD",
      "Es igual a EXPLAIN pero con más texto descriptivo; no ejecuta la query ni mide tiempos reales"
    ],
    correct: 1,
    difficulty: "C",
    explanation: "Nodos con grandes discrepancias entre rows estimados vs reales indican estadísticas desactualizadas. 'Seq Scan' cuando hay índice disponible indica que el optimizador no lo eligió (umbral de selectividad)."
  },
  {
    question: "¿Cómo optimizar una query con múltiples JOINs?",
    options: [
      "Usar siempre la hint NOLOCK para evitar bloqueos y acelerar la lectura en todas las tablas del JOIN",
      "Asegurar índices en columnas de JOIN y WHERE, verificar el orden de JOIN con EXPLAIN, usar CTEs para materializar resultados intermedios, considerar vistas materializadas",
      "Aumentar la RAM del servidor es la única solución efectiva para queries con más de tres JOINs",
      "Añadir siempre más índices sobre todas las columnas referenciadas en las condiciones del query"
    ],
    correct: 1,
    difficulty: "C",
    explanation: "El optimizador elige el orden de JOIN, pero a veces puedes ayudarlo con hints o restructurando. Los índices en las columnas JOIN (FK→PK) son críticos. Para queries muy complejas: vistas materializadas."
  },
  {
    question: "¿Qué es una vista materializada?",
    options: [
      "Una vista con caché en memoria que se invalida automáticamente cuando los datos subyacentes cambian",
      "Una vista cuyo resultado se almacena físicamente en disco como una tabla; se refresca explícitamente (REFRESH MATERIALIZED VIEW); excelente para queries analíticas lentas",
      "Una vista sobre la que se pueden crear índices pero que no almacena datos y siempre consulta las tablas base",
      "Es equivalente a una tabla temporal que se llena con INSERT ... SELECT al inicio de cada sesión"
    ],
    correct: 1,
    difficulty: "C",
    explanation: "REFRESH MATERIALIZED VIEW CONCURRENTLY vista actualiza sin bloquear lecturas (requiere índice UNIQUE). Útil para dashboards, reports, aggregaciones costosas. Trade-off: datos pueden ser stale."
  },
  {
    question: "¿Qué son los sequence objects y cómo se usan?",
    options: [
      "Solo pueden usarse para columnas PRIMARY KEY; no se pueden usar en columnas de tipo FOREIGN KEY",
      "Son idénticos a GUID: generan identificadores de 128 bits universalmente únicos en formato hexadecimal",
      "Un tipo de array ordenado que almacena una serie de valores enteros consecutivos de forma persistente",
      "Generadores de números secuenciales únicos, independientes de las transacciones; base de SERIAL/IDENTITY en PostgreSQL/SQL Server"
    ],
    correct: 3,
    difficulty: "C",
    explanation: "CREATE SEQUENCE mi_seq START 1 INCREMENT 1. NEXTVAL('mi_seq') obtiene el siguiente valor. Las secuencias son transactionalmente independientes: un rollback no revierte el valor de secuencia."
  },
  {
    question: "¿Qué es el temporal table pattern para datos históricos?",
    options: [
      "Solo existe en SQL Server como característica propietaria, sin equivalente en PostgreSQL ni MySQL",
      "Es equivalente a auditoría con triggers: ambas técnicas producen exactamente el mismo resultado",
      "Usar columnas de tipo DATE en la tabla principal para filtrar los registros más recientes por fecha",
      "Añadir columnas valid_from y valid_to para rastrear el histórico de cambios en una fila; SQL:2011 estandarizó temporal tables con PERIOD FOR SYSTEM_TIME"
    ],
    correct: 3,
    difficulty: "C",
    explanation: "SQL Server Temporal Tables y PostgreSQL (con extensión o manualmente). La query AS OF '2024-01-01' devuelve el estado en esa fecha. Útil para auditoría, viajes en el tiempo de datos."
  },
  {
    question: "¿Qué es el Full-Text Search en bases de datos?",
    options: [
      "Una búsqueda que examina todos los campos de todas las tablas de la base de datos simultáneamente",
      "Es equivalente a LIKE con comodines: el motor lo convierte internamente en una expresión LIKE '%texto%'",
      "Solo está disponible en ElasticSearch y Solr; las bases de datos SQL no tienen FTS nativo",
      "Un tipo de búsqueda diseñado para texto: tokeniza, normaliza (stemming, stopwords), usa índices invertidos para búsqueda eficiente de palabras en documentos largos"
    ],
    correct: 3,
    difficulty: "C",
    explanation: "PostgreSQL: to_tsvector('español', texto) @@ to_tsquery('español', 'búsqueda'). MySQL: MATCH ... AGAINST. Mucho más eficiente que LIKE '%palabra%' que no puede usar índices normales."
  },
  {
    question: "¿Cómo manejar grandes volúmenes de datos con paginación eficiente?",
    options: [
      "LIMIT + OFFSET es siempre la mejor opción porque el motor lo optimiza automáticamente para cualquier página",
      "Cargar todos los datos en memoria de la aplicación y paginar en el código del lado del servidor",
      "Keyset pagination (cursor-based): WHERE id > last_id ORDER BY id LIMIT n. Más eficiente que OFFSET para páginas tardías (OFFSET escanea y descarta filas anteriores)",
      "Con ROWNUM en un subquery que numera las filas antes de filtrar el rango de la página deseada"
    ],
    correct: 2,
    difficulty: "C",
    explanation: "OFFSET 10000 LIMIT 10 escanea y descarta 10000 filas. Keyset: WHERE id > 10000 ORDER BY id LIMIT 10 usa el índice directamente. Para paginación de UI con cursores opacos."
  },
  {
    question: "¿Qué es el connection pooling y por qué es importante?",
    options: [
      "Un tipo de replicación",
      "Reutilizar conexiones de base de datos (crear una conexión es costoso: autenticación, memoria); el pool mantiene un conjunto de conexiones listas para reusar",
      "Un tipo de cache",
      "Agrupar servidores de BD"
    ],
    correct: 1,
    difficulty: "C",
    explanation: "Herramientas: PgBouncer (PostgreSQL), ProxySQL (MySQL). La aplicación obtiene una conexión del pool, la usa y la devuelve. Sin pool: cada request crea y destruye una conexión (muy lento)."
  },
  {
    question: "¿Qué es el schema migration y cómo gestionarlo?",
    options: [
      "Solo para datos de prueba",
      "Un tipo de backup",
      "Mover la BD a otro servidor",
      "El proceso de evolucionar el schema de BD de forma controlada con scripts versionados; herramientas: Flyway, Liquibase, Alembic garantizan que todos los entornos están sincronizados"
    ],
    correct: 3,
    difficulty: "C",
    explanation: "Flyway: archivos V1__init.sql, V2__add_index.sql aplicados en orden. Garantiza que dev, staging, prod tienen el mismo schema. Los migrations son parte del control de versiones del código."
  },
  {
    question: "¿Qué es el tipo UUID y cuándo usarlo como PK?",
    options: [
      "Es siempre peor que INT",
      "Un ID universal de usuario",
      "Universally Unique Identifier: 128 bits, globalmente único sin coordinación central; ideal para sistemas distribuidos pero más lento que integers como PK en B-trees (fragmentación)",
      "Solo para logs"
    ],
    correct: 2,
    difficulty: "C",
    explanation: "UUID v4: aleatorio (alta fragmentación en B-tree). UUID v7 (ordenado por tiempo): mejor para PKs. PostgreSQL tiene tipo UUID nativo. Para sistemas distribuidos donde los IDs se generan en clientes, UUID es ideal."
  },
  {
    question: "¿Qué son las Common Table Expressions recursivas y sus limitaciones?",
    options: [
      "No existen limitaciones",
      "Son bucles infinitos",
      "CTEs que se referencian a sí mismas con un caso base y un caso recursivo separados por UNION ALL; limitación: profundidad máxima de recursión (MAXRECURSION en SQL Server)",
      "CTEs con muchas tablas"
    ],
    correct: 2,
    difficulty: "C",
    explanation: "SQL Server: OPTION (MAXRECURSION 100). PostgreSQL: no tiene límite por defecto. Las CTEs recursivas pueden ser lentas para grafos grandes; considerar procedimientos o extensiones especializadas."
  },
  {
    question: "¿Qué es el snapshot isolation?",
    options: [
      "Un nivel de aislamiento donde cada transacción trabaja con un snapshot consistente de los datos al inicio de la transacción; evita phantom reads sin bloquear escrituras",
      "Solo en Oracle",
      "Una copia de la BD",
      "Es igual a SERIALIZABLE"
    ],
    correct: 0,
    difficulty: "C",
    explanation: "Snapshot isolation (PostgreSQL REPEATABLE READ, Oracle default): lectura consistente del snapshot. No bloquea lecturas ni escrituras. Problema: write skew anomaly que SERIALIZABLE previene."
  },
  {
    question: "¿Cómo implementar auditoría de cambios en SQL?",
    options: [
      "Solo con aplicación",
      "Con comentarios en queries",
      "Con logs del OS",
      "Triggers que registran OLD/NEW valores en una tabla de auditoría, o temporal tables de SQL:2011, o Change Data Capture (CDC) que lee el WAL/binlog"
    ],
    correct: 3,
    difficulty: "C",
    explanation: "Tabla auditoria: tabla, operacion, registro_id, campo, valor_viejo, valor_nuevo, usuario, timestamp. Trigger AFTER UPDATE FOR EACH ROW lo llena automáticamente. CDC (Debezium) es la alternativa moderna."
  },
  {
    question: "¿Qué es el semi-join y anti-join en optimización SQL?",
    options: [
      "Son tipos de CROSS JOIN",
      "Un tipo de JOIN especial",
      "Son JOINs de tablas pequeñas",
      "Semi-join: retorna filas de A que tienen coincidencia en B (EXISTS/IN); anti-join: las que NO tienen coincidencia (NOT EXISTS/NOT IN). El optimizador los reconoce y optimiza"
    ],
    correct: 3,
    difficulty: "C",
    explanation: "Semi-join con EXISTS puede ser más eficiente que JOIN porque para al encontrar la primera coincidencia. NOT EXISTS generalmente es más eficiente que NOT IN (NOT IN falla con NULLs)."
  },
  {
    question: "¿Qué es el hash join y cuándo el optimizador lo prefiere?",
    options: [
      "Es siempre el más rápido",
      "El SGBD construye una tabla hash de la tabla pequeña y sonda con la grande; eficiente para joins sin índices en conjuntos grandes. Nested loop es mejor con índices y resultados pequeños",
      "Un JOIN con hash de seguridad",
      "Solo en PostgreSQL"
    ],
    correct: 1,
    difficulty: "C",
    explanation: "Hash join: O(N+M). Nested loop: O(N*M) sin índice, O(N*log M) con índice. Merge join: O(N log N + M log M), bueno cuando ambas tablas están ordenadas. El optimizador elige según el tamaño y estadísticas."
  },
  {
    question: "¿Qué es el problema de la cardinalidad en estimación de queries?",
    options: [
      "El tamaño de la tabla",
      "El número de índices",
      "La cantidad de filas distintas en una columna; cuando el optimizador subestima o sobreestima la cardinalidad, elige un plan subóptimo (wrong join type, index vs seq scan)",
      "El tamaño de las transacciones"
    ],
    correct: 2,
    difficulty: "C",
    explanation: "Alta cardinalidad (columna casi única como email): índice B-tree excelente. Baja cardinalidad (género M/F): índice B-tree poco útil (bitmap index o no índice). ANALYZE actualiza las estimaciones."
  },
  {
    question: "¿Qué son los Operator Class en PostgreSQL?",
    options: [
      "Solo para GIN",
      "Sinónimo de tipo de dato",
      "Tipos de operadores matemáticos",
      "Configuración que define cómo un índice ordena/compara valores; permite índices especializados para tipos de datos custom o operadores no estándar"
    ],
    correct: 3,
    difficulty: "C",
    explanation: "CREATE INDEX ON tabla (col varchar_pattern_ops) para LIKE eficiente con patrones. text_pattern_ops, jsonb_path_ops, etc. definen qué operadores puede usar el índice. Esencial para optimización avanzada."
  },
  {
    question: "¿Cómo funciona el row store vs column store en bases de datos?",
    options: [
      "Column store es siempre mejor",
      "Row store es obsoleto",
      "Son lo mismo",
      "Row store: almacena filas completas juntas (bueno para OLTP); Column store: almacena columnas juntas (excelente compresión y rendimiento para queries analíticas de pocas columnas sobre muchas filas)"
    ],
    correct: 3,
    difficulty: "B",
    explanation: "Columnar: Redshift, Snowflake, BigQuery, DuckDB. Al leer solo 3 columnas de 100, el row store lee todas las 100; el column store solo las 3. Compresión por tipo de dato es mucho mayor."
  },
  {
    question: "¿Qué es el Query Store en SQL Server / pg_stat_statements en PostgreSQL?",
    options: [
      "Un tipo de cache",
      "Query Store captura plans de ejecución y métricas de rendimiento históricamente; permite detectar regresiones de plan (query que empeoró), comparar planes y forzar un plan",
      "Un almacén de queries guardadas",
      "Un log de errores"
    ],
    correct: 1,
    difficulty: "B",
    explanation: "pg_stat_statements: SELECT query, calls, total_exec_time, mean_exec_time FROM pg_stat_statements ORDER BY total_exec_time DESC para encontrar las queries más costosas."
  },
  {
    question: "¿Qué es el Lock escalation y cuándo ocurre?",
    options: [
      "Solo en SQL Server",
      "Cuando el SGBD convierte muchos row-level locks a un table-level lock para reducir el uso de memoria del lock manager; puede causar bloqueos no esperados en otras transacciones",
      "Aumentar permisos",
      "Un deadlock especial"
    ],
    correct: 1,
    difficulty: "B",
    explanation: "SQL Server: escala a table lock tras ~5000 row locks. Para prevenir: ROWLOCK hint, índices mejores para acceder a menos filas, o ALTER TABLE ... SET LOCK_ESCALATION = DISABLE."
  },
  {
    question: "¿Qué es el adaptive query execution (AQE) en Spark SQL y equivalentes en BD?",
    options: [
      "Solo en Spark",
      "No existe en BD relacionales",
      "El plan de ejecución se ajusta en tiempo de ejecución según las estadísticas reales recopiladas durante la ejecución (no solo estimadas); PostgreSQL JIT compilation es parcialmente similar",
      "Optimización automática de UI"
    ],
    correct: 2,
    difficulty: "B",
    explanation: "PostgreSQL: JIT (Just-In-Time compilation) compila expresiones SQL a código nativo para queries largas. SQL Server: Adaptive Joins, Memory Grant Feedback. La tendencia es hacia planes adaptativos."
  },
  {
    question: "¿Cómo funciona el BRIN index (Block Range Index) en PostgreSQL?",
    options: [
      "Un índice de columnas",
      "Es igual a partial index",
      "Un índice muy pequeño que almacena el min/max de valores por rangos de bloques físicos; eficaz para datos naturalmente ordenados (timestamps, secuencias) en tablas muy grandes",
      "Un tipo de B-tree mejorado"
    ],
    correct: 2,
    difficulty: "B",
    explanation: "BRIN en tabla de 1TB con timestamps insertados en orden: el índice tiene solo kilobytes. Al buscar por rango de fecha, saltan bloques completos que no pueden contener el valor. BRIN no es exacto: requiere recheck."
  },
  {
    question: "¿Qué es el table inheritance en PostgreSQL?",
    options: [
      "PostgreSQL permite que una tabla herede de otra (CREATE TABLE hijo INHERITS padre); las queries en el padre incluyen datos de hijos; base del particionado declarativo",
      "Un tipo de VIEW",
      "Una restricción de tabla",
      "Es solo conceptual"
    ],
    correct: 0,
    difficulty: "B",
    explanation: "Desde PostgreSQL 10, el particionado declarativo es preferible a herencia manual. Pero herencia de tabla aún es útil para modelar jerarquías de objetos con campos adicionales en cada subtipo."
  },
  {
    question: "¿Qué son los Bloom filters en bases de datos?",
    options: [
      "Un tipo de índice B-tree",
      "Estructuras de datos probabilísticas que responden 'definitivamente no está' o 'probablemente sí'; usadas en bases de datos para evitar accesos a disco innecesarios",
      "Filtros para JOIN",
      "Solo en NoSQL"
    ],
    correct: 1,
    difficulty: "B",
    explanation: "PostgreSQL tiene extensión bloom. MySQL InnoDB: adaptive hash index usa Bloom filter internamente. DuckDB usa Bloom filters en hash joins. Falsos positivos posibles, falsos negativos imposibles."
  },
  {
    question: "¿Cómo funcionan las zonas de mapas (zone maps / min-max indexes) en columnar stores?",
    options: [
      "Solo en Parquet",
      "Mapas geográficos en SQL",
      "Metadatos que almacenan min/max de cada columna por bloque/rowgroup; permiten saltar bloques completos durante scans sin índice B-tree completo",
      "Son índices normales"
    ],
    correct: 2,
    difficulty: "B",
    explanation: "Parquet, ORC, Snowflake, Redshift: cada rowgroup tiene min/max por columna. WHERE fecha > '2024-01-01' salta todos los rowgroups donde max(fecha) < '2024-01-01'. Fundamental para rendimiento OLAP."
  },
  {
    question: "¿Qué es el WAL shipping vs streaming replication en PostgreSQL?",
    options: [
      "WAL shipping: copiar archivos WAL completos al standby (mayor latencia, potencial pérdida de datos de hasta 1 segmento). Streaming: enviar WAL records en tiempo real (menor latencia)",
      "WAL shipping es más moderno",
      "Son equivalentes",
      "Streaming es solo para lectura"
    ],
    correct: 0,
    difficulty: "B",
    explanation: "Streaming replication es la forma estándar en PostgreSQL moderno. Replication slots garantizan que el master no descarta WAL hasta que el standby lo confirma. Logical replication envía cambios por tabla."
  },
  {
    question: "¿Qué es el logical replication en PostgreSQL?",
    options: [
      "No existe en PostgreSQL",
      "Solo para backups",
      "Igual a streaming replication",
      "Replica cambios a nivel de fila (no WAL binario), permitiendo seleccionar qué tablas replicar, replicar entre versiones distintas de PostgreSQL, y filtrar por fila"
    ],
    correct: 3,
    difficulty: "B",
    explanation: "Publicaciones y suscripciones: CREATE PUBLICATION pub FOR TABLE pedidos; CREATE SUBSCRIPTION sub CONNECTION '...' PUBLICATION pub. Permite replicación selectiva y cross-version upgrades."
  },
  {
    question: "¿Cómo diseñar un esquema para multi-tenancy en SQL?",
    options: [
      "Una BD por tenant siempre",
      "3 enfoques: 1) Schema separado por tenant, 2) tabla compartida con tenant_id en cada tabla, 3) BD separada. Trade-offs de aislamiento, costo y complejidad de mantenimiento",
      "Solo con NoSQL",
      "Siempre en la aplicación"
    ],
    correct: 1,
    difficulty: "B",
    explanation: "Shared table (tenant_id en cada tabla + Row Level Security en PostgreSQL): menor costo, más complejidad en queries. Schema separado: buen balance. BD separada: máximo aislamiento, máximo costo de gestión."
  },
  {
    question: "¿Qué es Row Level Security (RLS) en PostgreSQL?",
    options: [
      "Seguridad de contraseñas",
      "Políticas a nivel de fila que controlan qué filas puede ver/modificar cada usuario; perfectas para multi-tenancy y acceso basado en roles",
      "Un tipo de GRANT",
      "Solo para administradores"
    ],
    correct: 1,
    difficulty: "B",
    explanation: "CREATE POLICY tenant_policy ON pedidos FOR SELECT USING (tenant_id = current_setting('app.tenant_id')::int). Al hacer SELECT, PostgreSQL añade automáticamente el filtro. El usuario no puede saltárselo."
  },
  {
    question: "¿Qué es el query parallelism en PostgreSQL y cuándo activarlo?",
    options: [
      "Usar múltiples conexiones",
      "Es automático siempre",
      "PostgreSQL puede dividir una query entre múltiples workers CPU (parallel seq scan, parallel hash join, parallel aggregation) controlado por max_parallel_workers_per_gather",
      "Solo con SSD"
    ],
    correct: 2,
    difficulty: "B",
    explanation: "Para queries analíticas largas, el paralelismo puede reducir el tiempo drásticamente. Para OLTP, el overhead no compensa. Umbral: parallel_tuple_cost, min_parallel_table_scan_size. El optimizador decide."
  },
  {
    question: "¿Cómo funciona el JIT compilation en PostgreSQL?",
    options: [
      "PostgreSQL 11+ puede compilar expressions SQL a código LLVM nativo en runtime; útil para queries complejas con muchas expresiones (aritméticas, condiciones)",
      "Compila procedimientos",
      "Es siempre activo",
      "Solo para funciones"
    ],
    correct: 0,
    difficulty: "B",
    explanation: "jit = on (default en PG 12+). JIT tiene overhead de compilación; solo vale para queries largas. Se puede desactivar por sesión: SET jit = off. EXPLAIN muestra 'JIT: Functions X' si se usó."
  },
  {
    question: "¿Qué es el Point-in-Time Recovery (PITR) en PostgreSQL?",
    options: [
      "Un tipo de backup incremental",
      "Solo para hot standby",
      "Restaurar la base de datos a cualquier punto en el tiempo usando una copia base más los archivos WAL archivados; permite recuperarse de borrados accidentales minutos después",
      "Recovery a la última versión"
    ],
    correct: 2,
    difficulty: "B",
    explanation: "pg_basebackup + archive_mode=on + archive_command. PITR: restaurar basebackup, copiar WALs archivados, configurar recovery_target_time en recovery.conf. PostgreSQL aplica WALs hasta el punto deseado."
  },
  {
    question: "¿Qué es el Foreign Data Wrapper (FDW) en PostgreSQL?",
    options: [
      "Un mecanismo para acceder a datos externos (otra BD, archivos CSV, APIs) como si fueran tablas locales de PostgreSQL; postgres_fdw, mysql_fdw, file_fdw, redis_fdw",
      "Una clave foránea especial",
      "Un tipo de JOIN externo",
      "Una extensión de monitoreo"
    ],
    correct: 0,
    difficulty: "B",
    explanation: "postgres_fdw permite hacer JOIN entre tu PostgreSQL y otro PostgreSQL remoto como si fueran locales. Útil para federación de datos, migraciones graduales, acceso a datos legados."
  },
  {
    question: "¿Cómo optimizar queries con funciones de ventana para evitar múltiples escaneos?",
    options: [
      "Con CTEs siempre",
      "Usar varias window functions en la misma SELECT: múltiples OVER() en el mismo SELECT se ejecutan en un único paso de ventana si tienen la misma especificación PARTITION/ORDER",
      "Separar en múltiples queries",
      "No es posible"
    ],
    correct: 1,
    difficulty: "B",
    explanation: "SELECT SUM(v) OVER w, AVG(v) OVER w, RANK() OVER w FROM t WINDOW w AS (PARTITION BY dept ORDER BY v) usa la especificación de ventana una sola vez. Equivale a definir w con WINDOW clause."
  },
  {
    question: "¿Qué es el histograma de estadísticas en bases de datos y cómo afecta al optimizador?",
    options: [
      "Un gráfico visual",
      "Un tipo de índice",
      "Una aproximación de la distribución de valores en una columna; permite al optimizador estimar selectividad de predicados y cardinalidad de resultados con mayor precisión",
      "Solo para columnas numéricas"
    ],
    correct: 2,
    difficulty: "B",
    explanation: "PostgreSQL: pg_stats.histogram_bounds. ALTER TABLE ... ALTER COLUMN ... SET STATISTICS n (defaut 100, max 10000) para columnas con distribuciones complejas que causan malas estimaciones."
  },
  {
    question: "¿Qué es el fill factor en índices y tablas?",
    options: [
      "El nivel de compresión",
      "El porcentaje de cada página del índice/tabla que se llena durante la creación; dejar espacio (ej: 70%) reduce la fragmentación posterior con inserciones pero usa más espacio inicial",
      "Cuántos datos tiene el índice",
      "El factor de paralelismo"
    ],
    correct: 1,
    difficulty: "B",
    explanation: "CREATE INDEX ... WITH (fillfactor = 70). Para tablas con muchos UPDATEs en columnas indexadas, un fill factor bajo reduce las page splits y la fragmentación. Para datos append-only, 100% es óptimo."
  },
  {
    question: "¿Qué es el partial index y cuándo es muy efectivo?",
    options: [
      "Un índice condicional normal",
      "Un índice que solo incluye filas que cumplen una condición: CREATE INDEX ON pedidos (fecha) WHERE estado = 'pendiente'. Mucho más pequeño y eficiente si la condición filtra la mayoría de filas",
      "Un índice incompleto",
      "Un índice sin PK"
    ],
    correct: 1,
    difficulty: "B",
    explanation: "Si 99% de los pedidos están completados, un índice parcial WHERE estado='pendiente' indexa solo el 1% activo. Las queries que buscan pedidos pendientes son muy rápidas y el índice es minúsculo."
  },
  {
    question: "¿Cómo implementar soft delete eficientemente?",
    options: [
      "Con views siempre",
      "Con triggers",
      "Borrar y guardar en otra tabla",
      "Añadir columna deleted_at (NULL = activo); crear partial index WHERE deleted_at IS NULL; las queries de aplicación siempre filtran IS NULL; periodic cleanup de deleted"
    ],
    correct: 3,
    difficulty: "B",
    explanation: "Partial index: CREATE INDEX ON usuarios (email) WHERE deleted_at IS NULL. Solo indexa usuarios activos. Combined con RLS o view, puedes hacer el soft delete invisible a la aplicación."
  },
  {
    question: "¿Qué es el columnar storage en PostgreSQL (extensiones)?",
    options: [
      "Timescale, Citus, cstore_fdw añaden storage columnar a PostgreSQL; combinan el ecosistema SQL de PostgreSQL con la eficiencia columnar para workloads híbridos OLTP/OLAP",
      "No existe en PostgreSQL",
      "Solo en versiones enterprise",
      "Solo con particionado"
    ],
    correct: 0,
    difficulty: "B",
    explanation: "Timescale: tipo hypertable para time-series, chunk columnar automático. pg_mooncake (2024): tablas columnares nativas. Citus: sharding horizontal + columnar. Hydra: columnar tables en PostgreSQL nativo."
  },
  {
    question: "¿Cómo diseñar un sistema de base de datos para alta disponibilidad con PostgreSQL?",
    options: [
      "Con solo un servidor potente",
      "Solo con backups",
      "Con réplicas manuales",
      "Patroni (orquestador de HA), etcd/Consul (consensus store), HAProxy/pgBouncer (load balancer), streaming replication síncrona para RPO=0, failover automático en segundos"
    ],
    correct: 3,
    difficulty: "A",
    explanation: "Patroni gestiona el failover automático. Replication slot lag debe monitorearse para evitar que el master espere indefinidamente a un standby lento. VIP (Virtual IP) o DNS update para transparencia al cliente."
  },
  {
    question: "¿Qué es el Logical Decoding en PostgreSQL y sus aplicaciones?",
    options: [
      "Leer el WAL de PostgreSQL a nivel lógico (cambios de filas) sin acceso al formato binario interno; base de CDC, replicación lógica, sincronización con ElasticSearch/Redis",
      "Un tipo de backup",
      "Decodificar queries",
      "Es solo para auditoría"
    ],
    correct: 0,
    difficulty: "A",
    explanation: "Debezium usa pg_logical_emit_message y replication slots para capturar cambios. Slot de replicación: el master no descarta WAL hasta que el consumidor confirma. Cuidado con slots no consumidos (WAL acumulado)."
  },
  {
    question: "¿Cómo implementar sharding en PostgreSQL con Citus?",
    options: [
      "Solo con proxies",
      "Particionado manual",
      "Con multiple databases",
      "Citus extiende PostgreSQL con sharding horizontal: las tablas se distribuyen en shards entre nodos workers basándose en una distribution key; las queries se coordinan automáticamente"
    ],
    correct: 3,
    difficulty: "A",
    explanation: "SELECT create_distributed_table('pedidos', 'tenant_id'). Citus ruteará queries al shard correcto. Co-location: tablas con la misma distribution key y el mismo shard facilitan JOINs locales sin red."
  },
  {
    question: "¿Qué es el query plan regression y cómo prevenirlo?",
    options: [
      "Cuando el optimizador elige un plan peor después de un cambio (actualización de estadísticas, nuevo índice, upgrade de versión); prevenido con pg_hint_plan, SQL baselines o testing",
      "Es solo un problema de versiones",
      "Queries que fallan",
      "No existe en SGBD modernos"
    ],
    correct: 0,
    difficulty: "A",
    explanation: "Query Store (SQL Server/PostgreSQL): detecta regresiones comparando plan actual con histórico. pg_hint_plan: forzar un plan específico. SPM (SQL Plan Management en Oracle) congela un plan bueno."
  },
  {
    question: "¿Cómo implementar Change Data Capture (CDC) desde SQL para microservicios?",
    options: [
      "Solo con replicación",
      "Con polling periódico",
      "Debezium + Kafka: lee el WAL/binlog directamente (mínimo impacto en BD), captura INSERT/UPDATE/DELETE como eventos, publica en Kafka topics. Patrón Transactional Outbox como alternativa",
      "Con triggers en todas las tablas"
    ],
    correct: 2,
    difficulty: "A",
    explanation: "Debezium PostgreSQL connector usa replication slots. Los consumidores Kafka reciben eventos de cambio con before/after values. Outbox pattern: publicar eventos en la misma transacción de negocio es más simple pero requiere tabla adicional."
  },
  {
    question: "¿Qué es el Vectorized Execution en bases de datos columnares?",
    options: [
      "Solo para JOINs",
      "Procesar columnas en batches de valores en lugar de fila por fila; permite usar instrucciones SIMD del CPU para procesar múltiples valores simultáneamente, mejorando el rendimiento 2-10x",
      "Usar GPU para queries",
      "Un tipo de paralelismo"
    ],
    correct: 1,
    difficulty: "A",
    explanation: "DuckDB, ClickHouse, Snowflake usan vectorized execution. En lugar de procesar una fila a la vez (Volcano model), procesan vectores de 1024+ valores. SIMD: AVX-512 procesa 16 int32 en paralelo."
  },
  {
    question: "¿Qué es el Volcano/iterator model vs batch model en query execution?",
    options: [
      "Dos tipos de SQL",
      "Solo teórico",
      "Son iguales",
      "Volcano: cada operador llama next() al operador hijo, una tupla a la vez; simple pero poco eficiente para CPU cache. Batch/vectorized: procesa bloques de tuplas, mejor uso de cache y SIMD"
    ],
    correct: 3,
    difficulty: "A",
    explanation: "Volcano/Iterator: fácil de implementar y entender. Batch: mejor rendimiento gracias a prefetching y SIMD. Compilation: DuckDB compila queries a código nativo para eliminar overhead de virtualización."
  },
  {
    question: "¿Cómo diseñar un sistema de archivado de datos históricos sin degradar el rendimiento?",
    options: [
      "Borrar datos viejos",
      "Con tablas separadas manuales",
      "Solo con cron jobs",
      "Particionado por tiempo + partition detach: la partición vieja se desconecta de la tabla principal (instant, sin bloqueo) y se archiva en almacenamiento frío (S3 + Parquet)"
    ],
    correct: 3,
    difficulty: "A",
    explanation: "PostgreSQL partition detach: instantáneo. Los datos se archivan en Parquet en S3. Queries históricas: DuckDB puede leer Parquet directamente y hacer JOIN con PostgreSQL via FDW. Lifecycle management automático."
  },
  {
    question: "¿Qué es el adaptive join en SQL Server / PostgreSQL?",
    options: [
      "Un JOIN con condición dinámica",
      "SQL Server: Adaptive Joins deciden en runtime si usar Nested Loops o Hash Join según el tamaño real de datos. PostgreSQL: el enable_memoize optimization cachea resultados de Nested Loops",
      "Un tipo de MERGE JOIN",
      "Es solo teórico"
    ],
    correct: 1,
    difficulty: "A",
    explanation: "Adaptive Join evita el problema de la 'mala estimación de cardinalidad': si los datos son pocos, usa Nested Loop (más rápido); si son muchos, usa Hash Join. La decisión se toma durante la ejecución."
  },
  {
    question: "¿Cómo implementar un sistema de búsqueda eficiente con full-text search y fuzzy matching?",
    options: [
      "PostgreSQL: tsvector + GIN index para FTS exacta; pg_trgm + GIN para búsqueda aproximada (trigrams); combinar ambos. Elasticsearch para casos avanzados (relevance scoring, facets)",
      "Solo con LIKE %",
      "Con LIKE solo",
      "Solo con ElasticSearch"
    ],
    correct: 0,
    difficulty: "A",
    explanation: "CREATE INDEX ON productos USING GIN(to_tsvector('spanish', descripcion)). pg_trgm: CREATE INDEX ON productos USING GIN(nombre gin_trgm_ops) para LIKE '%texto%' y similarity(). Combinar: FTS para relevancia + trigrams para fuzzy."
  },
  {
    question: "¿Qué es el query compilation (code generation) en bases de datos como DuckDB?",
    options: [
      "Compilar stored procedures",
      "En lugar de interpretar el plan de ejecución, compilar la query completa a código nativo (LLVM) eliminando overhead de virtualización del Volcano model; DuckDB y HyPer lo implementan",
      "Es igual a JIT de PostgreSQL",
      "Solo en sistemas distribuidos"
    ],
    correct: 1,
    difficulty: "A",
    explanation: "DuckDB compila queries a vectorized code nativo. Elimina branching y virtualización del modelo iterador. Combina compilation + vectorization + columnar storage para rendimiento máximo en OLAP."
  },
  {
    question: "¿Cómo gestionar migraciones de schema zero-downtime en producción?",
    options: [
      "Con mantenimiento siempre",
      "Solo con downtime",
      "Técnica expand-contract: añadir nueva columna (online), migrar datos (background), actualizar app, eliminar columna vieja. Usar ALTER TABLE ... ADD COLUMN con DEFAULT online en PostgreSQL 11+",
      "Con backups y restore"
    ],
    correct: 2,
    difficulty: "A",
    explanation: "PostgreSQL 11+: ALTER TABLE t ADD COLUMN c int DEFAULT 0 es instantáneo (no reescribe). pt-online-schema-change (MySQL) y gh-ost realizan cambios sin bloquear. Siempre tener rollback plan."
  },
  {
    question: "¿Qué es el lock-free data structure en el contexto de bases de datos?",
    options: [
      "Solo teórico",
      "Los SGBD modernos implementan estructuras como LRU cache del buffer pool y el lock manager usando algoritmos lock-free (CAS) para minimizar contención en CPUs multi-core",
      "Solo en memoria",
      "Tablas sin locks"
    ],
    correct: 1,
    difficulty: "A",
    explanation: "PostgreSQL: LWLocks (lightweight locks) para estructuras internas. Atomics y spinlocks para hot paths. La contención en estructuras internas (lock manager, buffer pool) es un bottleneck en sistemas de alta concurrencia."
  },
  {
    question: "¿Cómo implementar un pipeline ETL eficiente con SQL?",
    options: [
      "Con un solo INSERT",
      "INSERT ... SELECT para cargas masivas, COPY (PostgreSQL) / LOAD DATA INFILE (MySQL) para carga desde archivos; usar staging tables, transacciones batch, deshabilitar índices durante carga masiva",
      "Con una sola query",
      "Solo con herramientas externas"
    ],
    correct: 1,
    difficulty: "A",
    explanation: "COPY en PostgreSQL: hasta 100x más rápido que INSERT fila a fila. Proceso: COPY → staging table, transformar con SQL, INSERT INTO destino SELECT ... FROM staging. Deshabilitar triggers y FK durante carga, luego verificar integridad."
  },
  {
    question: "¿Qué es el pushdown en bases de datos distribuidas?",
    options: [
      "Enviar datos al cliente",
      "El optimizador evalúa predicados y proyecciones lo más cerca posible a los datos (en el nodo que los tiene), reduciendo la transferencia de datos por red",
      "Solo en Spark",
      "Un tipo de JOIN distribuido"
    ],
    correct: 1,
    difficulty: "A",
    explanation: "Predicate pushdown: WHERE y filtros se aplican en los nodos que contienen los datos antes de enviarlos al coordinador. Projection pushdown: solo se transmiten las columnas necesarias. Fundamental para rendimiento en sistemas distribuidos."
  },
  {
    question: "¿Cómo funciona el columnar compression en data warehouses?",
    options: [
      "Compresión ZIP de datos",
      "Es transparente siempre",
      "Al almacenar columnas juntas, los valores son del mismo tipo y distribución similar, permitiendo algoritmos altamente eficientes: RLE para repetidos, dictionary encoding, delta encoding, Zstandard",
      "Solo con gzip"
    ],
    correct: 2,
    difficulty: "A",
    explanation: "Dictionary encoding: almacena cada valor único una vez y usa índices de enteros. RLE: 1000 veces el valor 'Madrid' → ('Madrid', 1000). Ratios de 10:1 son comunes. Menos I/O = más rápido."
  },
  {
    question: "¿Cómo diseñar un sistema de base de datos para billones de filas sin sharding?",
    options: [
      "Columnar storage (DuckDB/ClickHouse), particionado agresivo + archivado en Parquet/S3, compresión, columnar indexes. ClickHouse puede analizar billones de filas en segundos en un solo nodo",
      "Solo con NoSQL",
      "Siempre necesita sharding",
      "No es posible sin sharding"
    ],
    correct: 0,
    difficulty: "S",
    explanation: "ClickHouse: MergeTree engine, columnar, vectorized, compresión extrema. Analiza billones de filas en segundos en un nodo. Para escrituras masivas: insert batches, no row-by-row. Particiones por mes/día para lifecycle."
  },
  {
    question: "¿Qué es el Orca optimizer y los optimizadores basados en cascades?",
    options: [
      "Es el optimizador de Oracle",
      "Los optimizadores modernos (Orca de Greenplum/Pivotal, SQL Server, CockroachDB) usan el framework Cascades: búsqueda top-down con memoización, transformation rules y physical properties",
      "El optimizador de MySQL",
      "Solo para SQL distribuido"
    ],
    correct: 1,
    difficulty: "S",
    explanation: "Cascades: reglas de transformación lógicas (como pushdown de predicados) y reglas de implementación física (hash join vs merge join). Memoización evita re-explorar subplanes. Más sofisticado que bottom-up."
  },
  {
    question: "¿Cómo funciona el HTAP (Hybrid Transactional/Analytical Processing)?",
    options: [
      "Sistemas que soportan workloads OLTP y OLAP simultáneamente en los mismos datos sin ETL: TiDB (row + columnar replica), MySQL+HeatWave, PostgreSQL con extensiones columnares",
      "Mezclar OLTP y OLAP en la misma BD",
      "Solo con réplicas separadas",
      "No existe aún"
    ],
    correct: 0,
    difficulty: "S",
    explanation: "TiDB: TiKV (row store para OLTP) + TiFlash (columnar replica sincronizada para OLAP). Las queries OLAP no afectan al OLTP. Elimina el pipeline ETL. SingleStore, CockroachDB también tienen capacidades HTAP."
  },
  {
    question: "¿Qué es el cost model en un optimizador de queries y cómo calibrarlo?",
    options: [
      "Solo de interés teórico",
      "Es automático siempre",
      "El modelo matemático que estima el costo (I/O, CPU, red) de cada operación del plan; parámetros ajustables permiten calibrarlo para el hardware específico (SSD vs HDD, CPU speed)",
      "El precio de licencia de la BD"
    ],
    correct: 2,
    difficulty: "S",
    explanation: "PostgreSQL: random_page_cost (default 4, reducir a 1.1 para SSD), seq_page_cost, cpu_tuple_cost. Mal calibrados, el optimizador puede preferir SeqScan sobre IndexScan en SSD. pg_calibrate_ioq puede ayudar."
  },
  {
    question: "¿Cómo diseñar un sistema de geo-distributed database?",
    options: [
      "Réplicas en cada región",
      "Solo con DNS geo",
      "No es posible con SQL",
      "CockroachDB/Spanner: consensus distribuido (Raft) entre regiones, datos locales a cada región (geo-partitioning), lecturas locales de replicas, escrituras multi-región con latencia de round-trip"
    ],
    correct: 3,
    difficulty: "S",
    explanation: "CockroachDB: cada rango de datos tiene 3-5 réplicas en distintas regiones. Lecturas follower (stale) son locales. Escrituras requieren quorum (mayoría de réplicas). ALTER TABLE ... CONFIGURE ZONE para colocar datos near users."
  },
  {
    question: "¿Qué es el deterministic query execution y por qué importa?",
    options: [
      "Solo en Oracle",
      "Para replicación lógica: las funciones no-deterministas (NOW(), RANDOM()) en stored procedures pueden dar resultados distintos en réplica y master; se deben replicar los valores, no la llamada",
      "Queries sin aleatoriedad",
      "Solo teórico"
    ],
    correct: 1,
    difficulty: "S",
    explanation: "PostgreSQL logical replication: si un trigger usa RANDOM(), el valor en la réplica podría diferir. Solución: generar el valor en la capa de aplicación y pasarlo como parámetro, o usar BEFORE trigger que establece el valor antes de la replicación."
  },
  {
    question: "¿Cómo implementar un sistema de auditoría a escala con mínimo impacto en producción?",
    options: [
      "Triggers en cada tabla",
      "CDC via WAL (Debezium): leer el write-ahead log en modo standby sin afectar al master, publicar eventos en Kafka, consumidores especializados de auditoría con retention configurada",
      "Con logs de aplicación",
      "Con triggers y tabla de auditoría grande"
    ],
    correct: 1,
    difficulty: "S",
    explanation: "CDC es el patrón gold standard para auditoría a escala. El WAL ya existe, leerlo no añade carga al master. Los eventos capturan before/after values con el LSN (Log Sequence Number) para ordering exacto."
  },
  {
    question: "¿Cómo funciona el CockroachDB Raft consensus para transacciones distribuidas?",
    options: [
      "Un algoritmo de SQL",
      "Es solo replicación",
      "Cada rango de datos tiene un grupo Raft; el leader maneja escrituras; el consensus requiere mayoría de réplicas; lecturas del leader son linearizable; follower reads son serializables (stale)",
      "Solo para BigTable"
    ],
    correct: 2,
    difficulty: "S",
    explanation: "Transacción que toca múltiples rangos: 2PC coordinado por uno de los rangos (transaction record). Parallel Commits: optimización que hace el commit en O(1) round trips. Serializable isolation default."
  },
  {
    question: "¿Qué es el query result caching y sus trade-offs?",
    options: [
      "PG query result cache: no existe nativamente; opciones: pgpool-II (cache resultado en memoria), Citus (distributed query caching), Redis en capa de aplicación. Trade-off: stale data vs rendimiento",
      "MySQL Query Cache es la solución",
      "Cache de aplicación solamente",
      "Solo con ORM"
    ],
    correct: 0,
    difficulty: "S",
    explanation: "MySQL Query Cache fue deprecado en 8.0: mutex global era un bottleneck bajo concurrencia. Solución moderna: cache en capa de aplicación con invalidación por CDC. Pgpool-II como middleware de cache."
  },
  {
    question: "¿Cómo diseñar el schema de una base de datos de series temporales eficiente?",
    options: [
      "Con una tabla enorme",
      "Una tabla con timestamp y valor",
      "TimescaleDB: hypertables (auto-particionado por tiempo), compresión columnar de chunks viejos, funciones especiales (time_bucket, first, last), retención automática. ClickHouse: MergeTree con TTL",
      "Solo con InfluxDB"
    ],
    correct: 2,
    difficulty: "S",
    explanation: "Mejor práctica: partition by time (chunks), index on (time, device_id), columnar compression para datos viejos (compress_after='7 days'), delete/downsampling automático (continuous aggregates en TimescaleDB)."
  },
  {
    question: "¿Qué es el Spanner TrueTime y cómo resuelve la consistencia global?",
    options: [
      "Un formato de timestamp",
      "Es solo un reloj",
      "Solo para lectura",
      "Google Spanner usa TrueTime: relojes atómicos + GPS en cada datacenter con intervalos de incertidumbre acotados. Al hacer commit, Spanner espera hasta que el tiempo global confirma la causalidad"
    ],
    correct: 3,
    difficulty: "S",
    explanation: "TrueTime: now() retorna [earliest, latest]. Para commit: esperar hasta que earliest > max(latest de cualquier evento anterior). Garantiza external consistency. Commit wait: ~7ms. Implementable con NTP de alta precisión + margen de seguridad."
  }
];
