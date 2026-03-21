window.questions_lua = [
  {
    question: "¿Para qué se usa principalmente Lua?",
    options: [
      "Lenguaje de scripting embebido en aplicaciones (videojuegos, herramientas); World of Warcraft, Redis, Nginx, Roblox usan Lua",
      "Desarrollo de sistemas operativos de propósito general con acceso directo a hardware y controladores de dispositivos",
      "Análisis estadístico y visualización científica de datos con soporte nativo para matrices y álgebra lineal densa",
      "Desarrollo web backend con soporte nativo de HTTP, WebSockets y gestión de bases de datos SQL integradas"
    ],
    correct: 0,
    difficulty: "E",
    explanation: "Lua es el lenguaje de scripting embebido más popular. Pequeño (280KB), rápido y fácil de integrar en aplicaciones C/C++."
  },
  {
    question: "¿Cuál es la única estructura de datos en Lua?",
    options: [
      "Los arrays unidimensionales: la única estructura nativa; los diccionarios se emulan con arrays de pares clave-valor",
      "La tabla (table): array, diccionario, objeto y módulo a la vez; t = {1, 2, key='val'}",
      "Los structs tipados similar a C: definen campos con tipos fijos y se acceden mediante el operador de punto",
      "Las listas enlazadas y los mapas hash como estructuras separadas con APIs distintas en la librería estándar"
    ],
    correct: 1,
    difficulty: "E",
    explanation: "Todo en Lua se construye con tablas. t = {} crea tabla vacía. t[1]='a', t.nombre='Ana'. Las tablas son tanto arrays (1-indexed) como diccionarios."
  },
  {
    question: "¿Cuál es el índice base en los arrays de Lua?",
    options: [
      "0 como en C, Python y JavaScript; Lua hereda esta convención para facilitar la interoperabilidad con código C",
      "Depende del programador: el índice inicial puede configurarse en el entorno con la variable global BASE_INDEX",
      "1 — las tablas usadas como arrays comienzan en índice 1 por convención",
      "0 o 1 según el tipo del primer elemento; numérico inicia en 0 y string inicia en 1 automáticamente"
    ],
    correct: 2,
    difficulty: "E",
    explanation: "t = {10, 20, 30}. t[1]=10, t[2]=20, t[3]=30. Las funciones de la librería estándar como ipairs asumen índice base 1."
  },
  {
    question: "¿Qué diferencia hay entre ipairs y pairs en Lua?",
    options: [
      "pairs es más rápido para arrays pequeños; ipairs es más eficiente para tablas con muchas claves string no numéricas",
      "ipairs solo funciona con claves numéricas, pairs solo con claves string; no pueden usarse con tablas mixtas",
      "Son equivalentes pero pairs preserva el orden de inserción mientras que ipairs itera en orden alfabético de claves",
      "ipairs: itera la parte array en orden (1,2,...) hasta nil; pairs: itera todos los pares key-value en orden arbitrario"
    ],
    correct: 3,
    difficulty: "E",
    explanation: "for i, v in ipairs(t) do — índices enteros consecutivos. for k, v in pairs(t) do — todos los keys incluyendo strings."
  },
  {
    question: "¿Cómo se define una función en Lua?",
    options: [
      "def f(x): return x*2 con la sintaxis de Python que Lua adoptó desde la versión 5.2 para familiaridad",
      "func f(x) return x*2 end usando la palabra reservada func que Lua 5.4 introdujo como alias de function",
      "function f(x) return x*2 end o f = function(x) return x*2 end",
      "fn f(x) -> x*2 usando la sintaxis de flecha que Lua hereda de lenguajes funcionales como Haskell o F#"
    ],
    correct: 2,
    difficulty: "E",
    explanation: "Las funciones son valores de primera clase en Lua. Se pueden almacenar en variables, tablas, y pasar como argumentos."
  },
  {
    question: "¿Qué son los metatables en Lua?",
    options: [
      "Tablas que definen el comportamiento de otras tablas para operaciones especiales: __index, __newindex, __add, __tostring, __call",
      "Tablas de solo lectura que almacenan los metadatos de tipo de cada variable declarada en el programa Lua",
      "Un tipo especial de tabla interna que el intérprete usa para rastrear el scope de variables locales y globales",
      "Tablas que contienen información sobre la estructura del módulo como nombres de funciones exportadas y su aridad"
    ],
    correct: 0,
    difficulty: "D",
    explanation: "setmetatable(t, mt). mt.__index para búsqueda de métodos. mt.__add para operator+. mt.__tostring para tostring(). Base de la OOP en Lua."
  },
  {
    question: "¿Cómo se implementa OOP en Lua?",
    options: [
      "Con keywords especiales class y extends que Lua 5.3 introdujo para soportar programación orientada a objetos nativa",
      "Solo es posible con frameworks externos como LOOP o middleclass que añaden clases sobre el sistema de tablas",
      "Con tablas y metatables: la tabla es el objeto/clase, métodos son funciones en la tabla, __index hereda",
      "Con un sistema de prototipos similar a JavaScript donde los objetos heredan directamente de otros objetos padre"
    ],
    correct: 2,
    difficulty: "D",
    explanation: "Animal = {}; Animal.__index = Animal; function Animal.new(name) return setmetatable({name=name}, Animal) end; function Animal:sound() return '...' end"
  },
  {
    question: "¿Qué hace el operador : en los métodos de Lua?",
    options: [
      "Es el operador de acceso a namespace; obj:metodo separa el módulo del nombre del método como :: en C++",
      "Es un separador de tipo: declara el tipo de retorno del método como en TypeScript con la sintaxis función: tipo",
      "Solo se usa en la definición de clases para separar el nombre de la clase del nombre del constructor del objeto",
      "Define o llama método con self implícito: function obj:metodo() = function obj.metodo(self); obj:metodo() = obj.metodo(obj)"
    ],
    correct: 3,
    difficulty: "D",
    explanation: "function Animal:speak() print(self.name) end — self se pasa automáticamente. obj:speak() pasa obj como primer argumento."
  },
  {
    question: "¿Qué hace require en Lua?",
    options: [
      "Carga un módulo: require('modulo'); busca en package.path; cachea en package.loaded para no recargar",
      "Verifica que una condición sea verdadera y lanza un error si falla; es la función de aserción integrada de Lua",
      "Descarga e instala un paquete del repositorio oficial de paquetes de Lua desde internet automáticamente",
      "Importa todas las funciones de un módulo al namespace global actual, equivalente a using namespace en C++"
    ],
    correct: 0,
    difficulty: "D",
    explanation: "local json = require('json'). Lua busca en package.path. El resultado se cachea en package.loaded para llamadas repetidas."
  },
  {
    question: "¿Qué son las coroutines en Lua?",
    options: [
      "Threads reales del sistema operativo que Lua crea mediante llamadas a pthread para ejecución paralela real",
      "Un tipo de función asíncrona que retorna una promesa que se resuelve en el event loop de la VM de Lua",
      "Funciones especiales que se ejecutan en paralelo en el mismo proceso usando el scheduler cooperativo del SO",
      "Hilos cooperativos: coroutine.create(), coroutine.resume(), coroutine.yield(); no son concurrentes sino cooperativos"
    ],
    correct: 3,
    difficulty: "D",
    explanation: "co = coroutine.create(function() coroutine.yield(1); coroutine.yield(2); end). coroutine.resume(co) → 1, → 2. Base de async patterns en Lua."
  },
  {
    question: "¿Qué es LuaJIT?",
    options: [
      "Una versión de Lua diseñada para ejecutarse sobre la JVM de Java con soporte completo de la librería estándar",
      "Un framework de testing de alto rendimiento para Lua que ejecuta los tests en paralelo con compilación anticipada",
      "Un intérprete de Lua optimizado que usa análisis estático de tipos para reducir el overhead de las llamadas dinámicas",
      "Implementación de Lua con JIT compilation; hasta 100x más rápido que Lua estándar; usado en OpenResty (Nginx+Lua)"
    ],
    correct: 3,
    difficulty: "D",
    explanation: "LuaJIT es una de las VMs más rápidas para un lenguaje dinámico. OpenResty usa LuaJIT en Nginx para scripting de alta performance."
  },
  {
    question: "¿Qué es una closure en Lua?",
    options: [
      "Un mecanismo para cerrar y liberar recursos de archivo y red al terminar un bloque de código con garantía RAII",
      "Una tabla especial que almacena el estado de un módulo cuando se descarga con package.loaded[nombre] = nil",
      "Función que captura variables del scope exterior (upvalues): son el mecanismo principal para estado en Lua",
      "Un tipo de coroutine que suspende y reanuda su ejecución mediante mecanismos de sincronización de canales"
    ],
    correct: 2,
    difficulty: "D",
    explanation: "function makeCounter() local count=0; return function() count=count+1; return count end end. count es un upvalue capturado por la closure."
  },
  {
    question: "¿Qué es pcall en Lua?",
    options: [
      "Una llamada paralela que ejecuta una función en un coroutine nuevo y retorna el resultado cuando termina",
      "Una función de print mejorada que formatea la salida con colores y niveles de severidad en la consola",
      "Protected call: ejecuta función y captura errores en lugar de propagar: ok, err = pcall(f, args)",
      "Una llamada de proceso externo que ejecuta un comando del sistema operativo y captura su output completo"
    ],
    correct: 2,
    difficulty: "D",
    explanation: "ok, result = pcall(function() return risky() end). Si hay error: ok=false, result=error message. xpcall permite handler de error personalizado."
  },
  {
    question: "¿Qué son las weak tables en Lua?",
    options: [
      "Tablas con referencias débiles: no previenen GC de los objetos referenciados; __mode = 'k', 'v', o 'kv'",
      "Tablas que solo pueden contener valores inmutables de tipo número o string pero no tablas anidadas ni funciones",
      "Tablas con acceso de solo lectura protegidas por metatables; cualquier intento de escritura lanza un error",
      "Tablas con capacidad de almacenamiento limitada que se truncan automáticamente cuando exceden un tamaño máximo"
    ],
    correct: 0,
    difficulty: "C",
    explanation: "setmetatable(cache, {__mode='v'}). Las weak values permiten que el GC libere objetos del cache cuando no hay otras referencias. Útil para memorización."
  },
  {
    question: "¿Cómo funciona el garbage collector de Lua?",
    options: [
      "Lua no tiene garbage collector; el programador gestiona la memoria manualmente con malloc y free de C via FFI",
      "Usa reference counting igual que CPython con ciclo de detección de referencias circulares en background",
      "Stop-the-world completo: el programa se detiene completamente cada vez que el GC recolecta objetos no alcanzables",
      "GC incremental (Lua 5.4: generational mode); collectgarbage() para control manual; __gc metamethod para finalización"
    ],
    correct: 3,
    difficulty: "C",
    explanation: "Lua 5.4 añadió GC generacional (por defecto incremental). collectgarbage('collect') fuerza GC. collectgarbage('count') retorna uso de memoria en KB."
  },
  {
    question: "¿Qué es Luau (el Lua de Roblox)?",
    options: [
      "Una versión de Lua 4 con compatibilidad hacia atrás que Roblox usa porque es más pequeña que Lua 5 estándar",
      "Solo un subconjunto de Lua estándar con algunas funciones eliminadas para mayor seguridad en el sandbox de Roblox",
      "Una implementación de Lua para WebAssembly que permite ejecutar scripts de juego directamente en el navegador web",
      "Plataforma de juegos que usa Luau (Lua modificado con tipos opcionales) para scripting; ~50 millones de usuarios activos"
    ],
    correct: 3,
    difficulty: "C",
    explanation: "Luau es el fork de Lua de Roblox con tipado gradual, mejor rendimiento y herramientas. Muchos desarrolladores aprenden Lua a través de Roblox."
  },
  {
    question: "¿Qué es OpenResty?",
    options: [
      "Un servidor web escrito en Lua puro que compite con Apache y Node.js para aplicaciones de alta concurrencia",
      "Un framework web MVC de Lua similar a Rails con generación de código y ORM integrado para bases de datos",
      "Nginx + LuaJIT: permite scripting de alta performance en Nginx; usado por Cloudflare, Taobao para millones de requests/s",
      "Un proxy inverso desarrollado en Lua por la comunidad Open Source como alternativa ligera a Nginx estándar"
    ],
    correct: 2,
    difficulty: "C",
    explanation: "OpenResty permite escribir lógica de negocio directamente en Nginx usando Lua/LuaJIT. Cloudflare Workers empezó con Lua sobre OpenResty."
  },
  {
    question: "¿Cómo se usan scripts Lua en Redis?",
    options: [
      "Redis carga scripts Lua como plugins compilados que extienden sus comandos con código AOT en arranque del servidor",
      "Los scripts Lua en Redis son solo para operaciones matemáticas; las operaciones de datos usan comandos nativos",
      "Redis interpreta Lua en un proceso separado que se comunica con el servidor principal por sockets Unix locales",
      "Redis permite ejecutar scripts Lua atómicamente: EVAL script 0; los scripts se ejecutan como transacciones atómicas"
    ],
    correct: 3,
    difficulty: "B",
    explanation: "EVAL 'return redis.call(\"GET\", KEYS[1])' 1 mykey. Los scripts Lua en Redis son atómicos, consistentes, y se pueden cachear con SCRIPT LOAD."
  }
];
