window.questions_lua = [
  {
    question: "¿Para qué se usa principalmente Lua?",
    options: [
      "Sistemas operativos",
      "Desarrollo web",
      "Lenguaje de scripting embebido en aplicaciones (videojuegos, herramientas); World of Warcraft, Redis, Nginx, Roblox usan Lua",
      "Bases de datos"
    ],
    correct: 2,
    difficulty: "E",
    explanation: "Lua es el lenguaje de scripting embebido más popular. Pequeño (280KB), rápido y fácil de integrar en aplicaciones C/C++."
  },
  {
    question: "¿Cuál es la única estructura de datos en Lua?",
    options: [
      "Solo arrays",
      "La tabla (table): array, diccionario, objeto y módulo a la vez; t = {1, 2, key='val'}",
      "Structs y arrays",
      "Listas y mapas separados"
    ],
    correct: 1,
    difficulty: "E",
    explanation: "Todo en Lua se construye con tablas. t = {} crea tabla vacía. t[1]='a', t.nombre='Ana'. Las tablas son tanto arrays (1-indexed) como diccionarios."
  },
  {
    question: "¿Cuál es el índice base en los arrays de Lua?",
    options: [
      "1 — las tablas usadas como arrays comienzan en índice 1 por convención",
      "Depende del programador",
      "0 como en C",
      "0 o 1 según el tipo"
    ],
    correct: 0,
    difficulty: "E",
    explanation: "t = {10, 20, 30}. t[1]=10, t[2]=20, t[3]=30. Las funciones de la librería estándar como ipairs asumen índice base 1."
  },
  {
    question: "¿Qué hace <code>ipairs</code> vs <code>pairs</code>?",
    options: [
      "pairs es más rápido",
      "ipairs es obsoleto",
      "Son iguales",
      "ipairs: itera la parte array en orden (1,2,...) hasta nil; pairs: itera todos los pares key-value en orden arbitrario"
    ],
    correct: 3,
    difficulty: "E",
    explanation: "for i, v in ipairs(t) do — índices enteros consecutivos. for k, v in pairs(t) do — todos los keys incluyendo strings."
  },
  {
    question: "¿Cómo se define una función en Lua?",
    options: [
      "def f(x):",
      "func f(x) end",
      "function f(x) return x*2 end o f = function(x) return x*2 end",
      "fn f(x) ->"
    ],
    correct: 1,
    difficulty: "E",
    explanation: "Las funciones son valores de primera clase en Lua. Se pueden almacenar en variables, tablas, y pasar como argumentos."
  },
  {
    question: "¿Qué son los metatables?",
    options: [
      "Tablas que definen el comportamiento de otras tablas para operaciones especiales: __index, __newindex, __add, __tostring, __call",
      "Solo para OOP",
      "Un tipo especial de tabla",
      "Tablas de metadatos del sistema"
    ],
    correct: 0,
    difficulty: "D",
    explanation: "setmetatable(t, mt). mt.__index para búsqueda de métodos. mt.__add para operator+. mt.__tostring para tostring(). Base de la OOP en Lua."
  },
  {
    question: "¿Cómo se implementa OOP en Lua?",
    options: [
      "Con keywords especiales",
      "No es posible",
      "Con tablas y metatables: la tabla es el objeto/clase, métodos son funciones en la tabla, __index hereda",
      "Con un framework externo"
    ],
    correct: 2,
    difficulty: "D",
    explanation: "Animal = {}; Animal.__index = Animal; function Animal.new(name) return setmetatable({name=name}, Animal) end; function Animal:sound() return '...' end"
  },
  {
    question: "¿Qué es el operador <code>:</code> en métodos?",
    options: [
      "Acceso a namespace",
      "Un separador",
      "Solo para clases",
      "Define o llama método con self implícito: function obj:metodo() = function obj.metodo(self); obj:metodo() = obj.metodo(obj)"
    ],
    correct: 3,
    difficulty: "D",
    explanation: "function Animal:speak() print(self.name) end — self se pasa automáticamente. obj:speak() pasa obj como primer argumento."
  },
  {
    question: "¿Qué hace <code>require</code>?",
    options: [
      "Carga un módulo: require('modulo'); busca en package.path; cachea en package.loaded para no recargar",
      "Solo para archivos .lua",
      "Requiere una version",
      "Es igual que import"
    ],
    correct: 0,
    difficulty: "D",
    explanation: "local json = require('json'). Lua busca en package.path. El resultado se cachea en package.loaded para llamadas repetidas."
  },
  {
    question: "¿Qué son las coroutines en Lua?",
    options: [
      "Hilos cooperativos: coroutine.create(), coroutine.resume(), coroutine.yield(); no son concurrentes sino cooperativos",
      "Threads reales del OS",
      "Un tipo de thread",
      "Solo para async IO"
    ],
    correct: 0,
    difficulty: "D",
    explanation: "co = coroutine.create(function() coroutine.yield(1); coroutine.yield(2); end). coroutine.resume(co) → 1, → 2. Base de async patterns en Lua."
  },
  {
    question: "¿Qué es LuaJIT?",
    options: [
      "Una versión de Lua para JVM",
      "Solo para videojuegos",
      "Un intérprete de Lua",
      "Implementación de Lua con JIT compilation; hasta 100x más rápido que Lua estándar; usado en OpenResty (Nginx+Lua)"
    ],
    correct: 3,
    difficulty: "D",
    explanation: "LuaJIT es una de las VMs más rápidas para un lenguaje dinámico. OpenResty usa LuaJIT en Nginx para scripting de alta performance."
  },
  {
    question: "¿Qué es la closure en Lua?",
    options: [
      "Solo con coroutines",
      "Función que captura variables del scope exterior (upvalues): son el mecanismo principal para estado en Lua",
      "Cerrar un archivo",
      "Un tipo de tabla"
    ],
    correct: 1,
    difficulty: "D",
    explanation: "function makeCounter() local count=0; return function() count=count+1; return count end end. count es un upvalue capturado por la closure."
  },
  {
    question: "¿Qué es pcall en Lua?",
    options: [
      "Parallel call",
      "Protected call: ejecuta función y captura errores en lugar de propagar: ok, err = pcall(f, args)",
      "Print call",
      "Un tipo de coroutine"
    ],
    correct: 1,
    difficulty: "D",
    explanation: "ok, result = pcall(function() return risky() end). Si hay error: ok=false, result=error message. xpcall permite handler de error personalizado."
  },
  {
    question: "¿Qué son las weak tables?",
    options: [
      "Tablas con referencias débiles: no previenen GC de los objetos referenciados; __mode = 'k', 'v', o 'kv'",
      "Solo para metatables",
      "Tablas inmutables",
      "Tablas con pocos elementos"
    ],
    correct: 0,
    difficulty: "C",
    explanation: "setmetatable(cache, {__mode='v'}). Las weak values permiten que el GC libere objetos del cache cuando no hay otras referencias. Útil para memorización."
  },
  {
    question: "¿Qué es el garbage collector de Lua?",
    options: [
      "Stop-the-world siempre",
      "No tiene GC",
      "GC incremental (Lua 5.4: generational mode); collectgarbage() para control manual; __gc metamethod para finalización",
      "Manual"
    ],
    correct: 2,
    difficulty: "C",
    explanation: "Lua 5.4 añadió GC generacional (por defecto incremental). collectgarbage('collect') fuerza GC. collectgarbage('count') retorna uso de memoria en KB."
  },
  {
    question: "¿Qué es Roblox y Lua?",
    options: [
      "Solo un juego",
      "Usa una versión de Lua 4",
      "Solo para scripts simples",
      "Plataforma de juegos que usa Luau (Lua modificado con tipos opcionales) para scripting de juegos; ~50 millones de usuarios activos"
    ],
    correct: 3,
    difficulty: "C",
    explanation: "Luau es el fork de Lua de Roblox con tipado gradual, mejor rendimiento y herramientas. Muchos desarrolladores aprenden Lua a través de Roblox."
  },
  {
    question: "¿Qué es OpenResty?",
    options: [
      "Un tipo de servidor web",
      "Un framework web de Python",
      "Nginx + LuaJIT: permite scripting de alta performance en Nginx; usado por Cloudflare, Taobao para millones de requests/s",
      "Solo para proxies"
    ],
    correct: 2,
    difficulty: "C",
    explanation: "OpenResty permite escribir lógica de negocio directamente en Nginx usando Lua/LuaJIT. Cloudflare Workers empezó con Lua sobre OpenResty."
  },
  {
    question: "¿Qué es Redis Scripting con Lua?",
    options: [
      "Solo para operaciones matemáticas",
      "Una feature experimental de Redis",
      "Solo almacenamiento de scripts",
      "Redis permite ejecutar scripts Lua atómicamente: EVAL script 0; los scripts se ejecutan como transacciones atómicas"
    ],
    correct: 3,
    difficulty: "B",
    explanation: "EVAL 'return redis.call(\"GET\", KEYS[1])' 1 mykey. Los scripts Lua en Redis son atómicos, consistentes, y se pueden cachear con SCRIPT LOAD."
  }
];
