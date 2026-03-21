window.questions_python = [
  {
    question: "¿Qué tipo de dato retorna <code>type([])</code> en Python?",
    options: [
      "&lt;class 'list'&gt;",
      "&lt;class 'object'&gt;",
      "&lt;class 'array'&gt;",
      "&lt;class 'sequence'&gt;"
    ],
    correct: 0,
    difficulty: "E",
    explanation: "type([]) retorna <class 'list'>, la representación del tipo list en Python."
  },
  {
    question: "¿Cómo se crea una lista vacía en Python?",
    options: [
      "list()",
      "[]",
      "{}",
      "()"
    ],
    correct: 1,
    difficulty: "E",
    explanation: "[] crea una lista vacía. list() también funciona. {} crea un dict. () crea una tupla vacía."
  },
  {
    question: "¿Cuál es el resultado de <code>3 ** 2</code> en Python?",
    options: [
      "32",
      "9",
      "6",
      "1.5"
    ],
    correct: 1,
    difficulty: "E",
    explanation: "** es el operador de potenciación en Python. 3**2 = 9."
  },
  {
    question: "¿Qué hace <code>len('hola')</code>?",
    options: [
      "Retorna 4",
      "Retorna 'hola'",
      "Retorna None",
      "Retorna 3"
    ],
    correct: 0,
    difficulty: "E",
    explanation: "len() retorna el número de caracteres: 'hola' tiene 4 caracteres."
  },
  {
    question: "¿Cuál es la sintaxis de un f-string en Python?",
    options: [
      "'texto {var}' con método format()",
      "s'texto {var}' con prefijo s",
      "f'texto {var}'",
      "format('texto {var}', var)"
    ],
    correct: 2,
    difficulty: "E",
    explanation: "Los f-strings (Python 3.6+) usan el prefijo f y permiten embeber expresiones entre llaves."
  },
  {
    question: "¿Qué es un tuple en Python?",
    options: [
      "Un diccionario con claves numéricas ordenadas",
      "Un conjunto mutable con índices enteros",
      "Una lista con métodos adicionales de búsqueda",
      "Una secuencia inmutable de elementos"
    ],
    correct: 3,
    difficulty: "E",
    explanation: "Las tuplas son secuencias ordenadas e inmutables. Se definen con paréntesis: (1, 2, 3)."
  },
  {
    question: "¿Qué hace el método <code>append()</code> en una lista?",
    options: [
      "Ordena la lista de menor a mayor",
      "Agrega al inicio",
      "Agrega al final",
      "Reemplaza el último elemento existente"
    ],
    correct: 2,
    difficulty: "E",
    explanation: "list.append(x) añade x al final de la lista, modificándola in-place."
  },
  {
    question: "¿Cuál es la diferencia entre <code>=</code> y <code>==</code> en Python?",
    options: [
      "== asigna variables y = compara referencias",
      "= compara valores numéricos solamente",
      "Ambos operadores realizan la misma operación",
      "= es asignación; == es comparación de igualdad"
    ],
    correct: 3,
    difficulty: "E",
    explanation: "= asigna un valor a una variable. == compara si dos valores son iguales."
  },
  {
    question: "¿Cómo se comenta una línea en Python?",
    options: [
      "-- comentario",
      "# comentario",
      "// comentario",
      "/* comentario */"
    ],
    correct: 1,
    difficulty: "E",
    explanation: "# inicia un comentario de una línea en Python."
  },
  {
    question: "¿Qué hace <code>range(5)</code>?",
    options: [
      "Crea lista [0,1,2,3,4,5]",
      "Crea un rango de 0 a 4 (excluye 5)",
      "Retorna el número 5",
      "Crea lista [1,2,3,4,5]"
    ],
    correct: 1,
    difficulty: "E",
    explanation: "range(5) genera 0, 1, 2, 3, 4. El límite superior es exclusivo."
  },
  {
    question: "¿Qué es un diccionario en Python?",
    options: [
      "Una estructura clave-valor mutable y ordenada (desde Python 3.7)",
      "Una lista de pares de strings indexados por posición",
      "Una tupla extendida que admite claves de texto como índices",
      "Un tipo especial de set con valores asociados a cada elemento"
    ],
    correct: 0,
    difficulty: "E",
    explanation: "Los diccionarios almacenan pares clave:valor. Son mutables y desde Python 3.7 mantienen el orden de inserción."
  },
  {
    question: "¿Qué hace <code>print(type(True))</code>?",
    options: [
      "&lt;class 'int'&gt;",
      "&lt;class 'boolean'&gt;",
      "&lt;class 'bool'&gt;",
      "&lt;class 'NoneType'&gt;"
    ],
    correct: 2,
    difficulty: "E",
    explanation: "type(True) retorna <class 'bool'>. Los booleanos en Python son una subclase de int."
  },
  {
    question: "¿Qué retorna <code>'Python'[0]</code>?",
    options: [
      "La cadena completa 'Python'",
      "P",
      "y",
      "El índice cero como entero"
    ],
    correct: 1,
    difficulty: "E",
    explanation: "El indexado comienza en 0. 'Python'[0] retorna 'P'."
  },
  {
    question: "¿Cómo se define una función en Python?",
    options: [
      "define foo():",
      "def foo():",
      "func foo():",
      "function foo():"
    ],
    correct: 1,
    difficulty: "E",
    explanation: "La palabra clave def define una función en Python."
  },
  {
    question: "¿Qué es None en Python?",
    options: [
      "Una variable global no inicializada por defecto",
      "Un valor booleano que representa falso extendido",
      "Un entero especial con valor cero semántico",
      "El objeto nulo de Python, equivalente a null en otros lenguajes"
    ],
    correct: 3,
    difficulty: "E",
    explanation: "None es el objeto nulo singleton de Python. Se compara con 'is None', no con '== None'."
  },
  {
    question: "¿Qué hace <code>list(range(1,6))</code>?",
    options: [
      "[1,2,3,4,5]",
      "[1,2,3,4,5,6]",
      "[0,1,2,3,4,5]",
      "[2,3,4,5,6]"
    ],
    correct: 0,
    difficulty: "E",
    explanation: "range(1,6) genera 1,2,3,4,5. list() lo convierte a [1,2,3,4,5]."
  },
  {
    question: "¿Cuál es la sintaxis correcta para un bloque if-else en Python?",
    options: [
      "if x > 0 then: ... else: end",
      "if (x > 0) { ... } else { ... }",
      "if x > 0: ... elif: ... else: pass",
      "if x > 0:\n    pass\nelse:\n    pass"
    ],
    correct: 3,
    difficulty: "E",
    explanation: "Python usa indentación para bloques, sin llaves. El colon : es obligatorio después de if/else."
  },
  {
    question: "¿Qué hace <code>str.split(',')</code>?",
    options: [
      "Elimina todas las comas del string original",
      "Separa cada carácter en elementos individuales",
      "Divide el string por coma y retorna lista",
      "Cuenta el número de comas presentes"
    ],
    correct: 2,
    difficulty: "E",
    explanation: "split(delim) divide el string por el delimitador y retorna una lista de partes."
  },
  {
    question: "¿Cómo se itera sobre una lista en Python?",
    options: [
      "foreach item in lista:",
      "loop item in lista:",
      "for i in range(list):",
      "for item in lista:"
    ],
    correct: 3,
    difficulty: "E",
    explanation: "for item in lista: itera sobre cada elemento de la lista."
  },
  {
    question: "¿Qué hace <code>sorted([3,1,2])</code>?",
    options: [
      "Retorna [1,2,3] sin modificar el original",
      "Ordena la lista original en su lugar y retorna None",
      "Retorna [3,2,1] en orden descendente",
      "Retorna el elemento menor de la lista"
    ],
    correct: 0,
    difficulty: "E",
    explanation: "sorted() retorna una nueva lista ordenada. list.sort() ordena in-place y retorna None."
  },
  {
    question: "¿Qué es una list comprehension en Python?",
    options: [
      "Sintaxis concisa para crear listas: [expr for x in iterable if cond]",
      "Una función integrada que recorre listas aplicando filtros",
      "Un generador de listas usando funciones lambda encadenadas",
      "Una técnica para comprimir listas duplicando referencias"
    ],
    correct: 0,
    difficulty: "D",
    explanation: "[x**2 for x in range(10) if x%2==0] crea lista de cuadrados de pares. Es más legible y eficiente que el equivalente con append."
  },
  {
    question: "¿Cuál es la diferencia entre una lista y una tupla?",
    options: [
      "Las listas son mutables; las tuplas son inmutables",
      "Las tuplas admiten más métodos que las listas",
      "Las listas solo almacenan números y las tuplas cualquier tipo",
      "Las listas son inmutables y las tuplas permiten modificación"
    ],
    correct: 0,
    difficulty: "D",
    explanation: "Las listas permiten modificación (append, remove, etc.). Las tuplas son inmutables y ligeramente más eficientes."
  },
  {
    question: "¿Qué es un generador (generator) en Python?",
    options: [
      "Una clase especial que hereda de collections.Iterator",
      "Una función que usa yield para retornar valores de forma lazy",
      "Un objeto que produce números pseudoaleatorios de forma eficiente",
      "Un tipo de lista que se construye de forma diferida al acceder"
    ],
    correct: 1,
    difficulty: "D",
    explanation: "Los generadores usan yield para retornar valores uno a uno bajo demanda, usando memoria O(1) vs O(n) de una lista."
  },
  {
    question: "¿Qué hace el decorador en Python?",
    options: [
      "Una función que envuelve otra función para modificar su comportamiento",
      "Una clase especial que añade atributos a objetos en tiempo de creación",
      "Un bloque de código que ejecuta lógica antes del módulo principal",
      "Una anotación de tipo que documenta parámetros automáticamente"
    ],
    correct: 0,
    difficulty: "D",
    explanation: "@decorator sobre def función aplica la función decorador a la función, modificando o extendiendo su comportamiento."
  },
  {
    question: "¿Qué hace <code>dict.get(key, default)</code>?",
    options: [
      "Funciona igual que dict[key] y lanza KeyError si no existe",
      "Lanza KeyError si la clave no existe ignorando el default",
      "Retorna el valor si la clave existe, o default si no",
      "Actualiza el valor de la clave con el valor default dado"
    ],
    correct: 2,
    difficulty: "D",
    explanation: "dict.get(key, default) es seguro: no lanza KeyError si la clave no existe, retorna default (None por defecto)."
  },
  {
    question: "¿Cuál es la diferencia entre <code>is</code> y <code>==</code>?",
    options: [
      "is compara identidad de objeto (misma referencia); == compara igualdad de valor",
      "is compara tipos mientras que == compara los valores internos",
      "== solo funciona con tipos numéricos y strings en comparación",
      "Ambos operadores son equivalentes para todos los tipos de datos"
    ],
    correct: 0,
    difficulty: "D",
    explanation: "is verifica si dos variables apuntan al mismo objeto en memoria. == verifica si los valores son iguales."
  },
  {
    question: "¿Qué son los *args y **kwargs?",
    options: [
      "Nombres de variables especiales reservados por el intérprete",
      "*args captura argumentos posicionales extras como tupla; **kwargs captura keyword args como dict",
      "Alias para listas y diccionarios pasados como argumentos fijos",
      "Marcadores que indican argumentos opcionales sin valor por defecto"
    ],
    correct: 1,
    difficulty: "D",
    explanation: "def f(*args, **kwargs) acepta número variable de argumentos. args es tupla de posicionales, kwargs es dict de nombrados."
  },
  {
    question: "¿Qué hace <code>enumerate(lista)</code>?",
    options: [
      "Retorna iterador de pares (índice, valor)",
      "Ordena la lista añadiendo números de posición como prefijo",
      "Cuenta los elementos únicos y retorna un entero total",
      "Crea una lista de índices paralela a la lista original"
    ],
    correct: 0,
    difficulty: "D",
    explanation: "enumerate(['a','b']) → (0,'a'), (1,'b'). Útil para obtener índice y valor en un for loop."
  },
  {
    question: "¿Qué es un set en Python?",
    options: [
      "Una lista ordenada con acceso por índice entero positivo",
      "Colección desordenada de elementos únicos, mutable",
      "Un diccionario donde los valores son siempre booleanos",
      "Una tupla que elimina automáticamente los valores repetidos"
    ],
    correct: 1,
    difficulty: "D",
    explanation: "El set elimina duplicados automáticamente y soporta operaciones de conjunto: unión, intersección, diferencia."
  },
  {
    question: "¿Qué hace <code>zip(lista1, lista2)</code>?",
    options: [
      "Combina dos iterables en un iterador de tuplas pareadas",
      "Concatena las dos listas en una sola lista extendida",
      "Ordena ambas listas de forma sincronizada por el primer elemento",
      "Comprime las listas en un archivo binario serializado"
    ],
    correct: 0,
    difficulty: "D",
    explanation: "zip([1,2],[3,4]) → (1,3), (2,4). Combina iterables elemento a elemento hasta que el más corto se agota."
  },
  {
    question: "¿Qué es la herencia en Python OOP?",
    options: [
      "class Hijo(Padre): permite que Hijo herede atributos y métodos de Padre",
      "Copiar manualmente los métodos de una clase en otra clase nueva",
      "Compartir variables de módulo entre clases del mismo archivo",
      "Un tipo de decorador que extiende la funcionalidad de una clase"
    ],
    correct: 0,
    difficulty: "D",
    explanation: "class Hijo(Padre): Hijo hereda todo de Padre. super() llama al constructor del padre."
  },
  {
    question: "¿Qué hace <code>map(func, iterable)</code>?",
    options: [
      "Aplica func a cada elemento retornando un iterador",
      "Reduce el iterable a un único valor acumulado por func",
      "Crea un diccionario usando func para generar las claves",
      "Filtra los elementos donde func retorna un valor falsy"
    ],
    correct: 0,
    difficulty: "D",
    explanation: "map(str, [1,2,3]) aplica str() a cada elemento. Retorna un map object (iterador) que se puede convertir con list()."
  },
  {
    question: "¿Qué hace <code>filter(func, iterable)</code>?",
    options: [
      "Retorna iterador con elementos donde func(x) es truthy",
      "Crea un generador que aplica func a cada elemento del iterable",
      "Elimina únicamente los valores None del iterable original",
      "Aplica func a todos los elementos y retorna los resultados"
    ],
    correct: 0,
    difficulty: "D",
    explanation: "filter(lambda x: x>0, [-1,2,-3,4]) retorna iterador con [2,4]."
  },
  {
    question: "¿Cuál es la diferencia entre <code>copy()</code> y <code>deepcopy()</code>?",
    options: [
      "deepcopy es más lento pero produce el mismo resultado final",
      "copy() duplica el objeto completo incluyendo todos sus subobjetos",
      "copy() hace copia superficial; deepcopy() copia recursivamente todos los objetos anidados",
      "Ambas funciones son equivalentes para objetos sin referencias circulares"
    ],
    correct: 2,
    difficulty: "D",
    explanation: "from copy import deepcopy. copy() copia la estructura top-level pero comparte sub-objetos. deepcopy() copia todo recursivamente."
  },
  {
    question: "¿Qué es un context manager (with statement)?",
    options: [
      "Un bloque especial que repite su contenido mientras una condición sea verdadera",
      "Una estructura similar a try-except que captura solo errores de IO",
      "Gestiona setup y teardown automático de recursos: with open() as f:",
      "Un decorador que convierte funciones normales en métodos de clase"
    ],
    correct: 2,
    difficulty: "D",
    explanation: "with statement llama __enter__ al entrar y __exit__ al salir (incluso con errores), garantizando cleanup de recursos."
  },
  {
    question: "¿Qué hace <code>lambda x: x*2</code>?",
    options: [
      "Define una variable con valor inicial igual al doble de x",
      "Crea una función anónima de una expresión",
      "Declara una constante que se evalúa en tiempo de compilación",
      "Es una expresión de asignación extendida con sintaxis especial"
    ],
    correct: 1,
    difficulty: "D",
    explanation: "lambda crea funciones anónimas: lambda x: x*2 es equivalente a def f(x): return x*2."
  },
  {
    question: "¿Qué es el módulo <code>os</code> en Python?",
    options: [
      "Interfaz para funcionalidades del sistema operativo: rutas, variables de entorno, procesos",
      "Un módulo exclusivo para sistemas Windows con APIs de registro",
      "Una librería de ordenamiento y búsqueda de alto rendimiento",
      "Un módulo exclusivo para sistemas macOS con APIs de ventanas"
    ],
    correct: 0,
    difficulty: "D",
    explanation: "os provee os.path, os.environ, os.getcwd(), os.listdir(), os.system() y más para interactuar con el SO."
  },
  {
    question: "¿Qué hace <code>isinstance(obj, type)</code>?",
    options: [
      "Retorna True si obj es instancia de type o subclase de type",
      "Es equivalente exacto a la expresión type(obj) == type",
      "Verifica únicamente el tipo exacto sin considerar subclases",
      "Solo funciona correctamente con tipos nativos de Python"
    ],
    correct: 0,
    difficulty: "D",
    explanation: "isinstance(True, int) retorna True porque bool es subclase de int. type(True) == int sería False."
  },
  {
    question: "¿Qué es <code>__init__</code> en una clase Python?",
    options: [
      "El método constructor que se llama al crear una instancia",
      "Un decorador automático que se aplica a todos los métodos",
      "El método destructor que libera memoria al eliminar el objeto",
      "Un import especial que ejecuta código al cargar el módulo"
    ],
    correct: 0,
    difficulty: "D",
    explanation: "__init__(self, ...) inicializa el objeto recién creado. Es el constructor de Python."
  },
  {
    question: "¿Qué hace <code>''.join(['a','b','c'])</code>?",
    options: [
      "Lanza TypeError porque la lista no es un tipo string válido",
      "'abc'",
      "'a,b,c'",
      "['a','b','c']"
    ],
    correct: 1,
    difficulty: "D",
    explanation: "str.join(iterable) concatena los elementos usando str como separador. ''.join() une sin separador."
  },
  {
    question: "¿Qué es el GIL (Global Interpreter Lock) en CPython?",
    options: [
      "Un mutex que impide que múltiples threads ejecuten bytecode Python simultáneamente",
      "Un mecanismo de bloqueo de archivos para acceso concurrente seguro",
      "Un tipo de recolector de basura generacional que pausa todos los threads",
      "Un lock de transacción usado internamente por los módulos de base de datos"
    ],
    correct: 0,
    difficulty: "C",
    explanation: "El GIL de CPython garantiza que solo un thread ejecute bytecode a la vez, simplificando gestión de memoria pero limitando paralelismo CPU-bound."
  },
  {
    question: "¿Cuál es la diferencia entre un generador y un iterador?",
    options: [
      "Ambos conceptos son sinónimos y se usan de forma intercambiable",
      "Todo generador es iterador; no todo iterador es generador. Generador crea iteradores con yield",
      "Los iteradores consumen menos memoria que los generadores equivalentes",
      "Los generadores son objetos instanciados desde clases que heredan Iterator"
    ],
    correct: 1,
    difficulty: "C",
    explanation: "Un iterador implementa __iter__ y __next__. Un generador es una función con yield que automáticamente crea un iterador."
  },
  {
    question: "¿Qué hace <code>@staticmethod</code>?",
    options: [
      "Crea un método equivalente a una función del módulo sin estado",
      "Hace el método privado e inaccesible desde fuera de la clase",
      "Impide que el método sea sobreescrito en clases derivadas",
      "Define un método que no recibe self ni cls; no depende de la instancia ni la clase"
    ],
    correct: 3,
    difficulty: "C",
    explanation: "@staticmethod define un método de clase que no recibe ni self ni cls. Es básicamente una función normal dentro del namespace de la clase."
  },
  {
    question: "¿Qué es <code>@classmethod</code>?",
    options: [
      "Un método estático mejorado que puede acceder a atributos de clase",
      "Define un método que recibe cls (la clase) como primer argumento en lugar de self",
      "Un método heredado automáticamente desde la clase base raíz",
      "Un decorador que convierte instancias en singletons de la clase"
    ],
    correct: 1,
    difficulty: "C",
    explanation: "@classmethod recibe cls como primer argumento. Útil para factory methods: cls() crea instancias de la clase (o subclase)."
  },
  {
    question: "¿Qué hace <code>__slots__</code> en una clase?",
    options: [
      "Funciona igual que __init__ pero para atributos de clase compartidos",
      "Define propiedades dinámicas calculadas en tiempo de acceso",
      "Restringe los atributos de instancia a los listados, reduciendo memoria al evitar __dict__",
      "Define métodos abstractos que las subclases deben implementar obligatoriamente"
    ],
    correct: 2,
    difficulty: "C",
    explanation: "__slots__ = ['x', 'y'] impide crear atributos no declarados y elimina __dict__ por instancia, reduciendo uso de memoria."
  },
  {
    question: "¿Qué son los dunder methods (magic methods)?",
    options: [
      "Métodos especiales con __ que implementan comportamiento de operadores y built-ins: __len__, __str__, __add__",
      "Métodos con doble guión bajo que Python trata como privados de instancia",
      "Métodos que se generan automáticamente al definir clases con dataclass",
      "Métodos de extensión en C que aceleran operaciones críticas de rendimiento"
    ],
    correct: 0,
    difficulty: "C",
    explanation: "Los dunder methods permiten que objetos personalizados soporten operadores (+, -, len(), str(), etc.) y protocolos de Python."
  },
  {
    question: "¿Qué es <code>asyncio</code> en Python?",
    options: [
      "Una librería para comunicación de red de bajo nivel con sockets",
      "Un gestor de procesos paralelos que evita el GIL completamente",
      "Un módulo para crear threads ligeros con contexto compartido",
      "Librería para programación asíncrona con event loop, async/await, y coroutines"
    ],
    correct: 3,
    difficulty: "C",
    explanation: "asyncio provee event loop, coroutines (async def), awaitable objects, y tasks para I/O-bound concurrent programming."
  },
  {
    question: "¿Cuál es la diferencia entre <code>multiprocessing</code> y <code>threading</code>?",
    options: [
      "multiprocessing es siempre más lento por el overhead de crear procesos",
      "multiprocessing evita el GIL con procesos separados (CPU-bound); threading comparte memoria (I/O-bound)",
      "Ambos módulos producen el mismo rendimiento para cualquier tipo de tarea",
      "threading es adecuado para tareas CPU-intensivas y multiprocessing para IO"
    ],
    correct: 1,
    difficulty: "C",
    explanation: "multiprocessing: procesos separados con memoria separada, evita GIL, ideal para CPU-bound. threading: threads comparten memoria, limitado por GIL para CPU-bound."
  },
  {
    question: "¿Qué hace <code>functools.lru_cache</code>?",
    options: [
      "Gestiona una caché de memoria de acceso reciente para objetos grandes",
      "Es un decorador de clase que registra todas las llamadas a métodos",
      "Decorador que cachea resultados de funciones basándose en sus argumentos (memoización)",
      "Crea una estructura de caché LRU externa compartida entre módulos"
    ],
    correct: 2,
    difficulty: "C",
    explanation: "@functools.lru_cache(maxsize=128) cachea automáticamente los resultados de la función usando los argumentos como clave."
  },
  {
    question: "¿Qué es la metaclase en Python?",
    options: [
      "La clase de una clase; controla la creación de clases. type es la metaclase por defecto",
      "Una instancia especial que hereda de todas las clases simultáneamente",
      "Un decorador de clase que modifica el comportamiento de instanciación",
      "La clase padre implícita de la que heredan todas las clases de Python"
    ],
    correct: 0,
    difficulty: "C",
    explanation: "Las metaclases controlan cómo se crean las clases. class Meta(type): ... permite personalizar creación, registro y validación de clases."
  },
  {
    question: "¿Qué hace <code>property()</code> o <code>@property</code>?",
    options: [
      "Define una variable global accesible desde cualquier módulo del paquete",
      "Es equivalente exacto al descriptor __get__ sin lógica adicional",
      "Crea un getter que se accede como atributo; permite añadir @setter y @deleter",
      "Crea una propiedad inmutable que no puede ser modificada tras la asignación"
    ],
    correct: 2,
    difficulty: "C",
    explanation: "@property convierte un método en un atributo de solo lectura. @prop.setter y @prop.deleter añaden escritura y eliminación."
  },
  {
    question: "¿Qué es <code>dataclasses</code> en Python?",
    options: [
      "Decorador que genera automáticamente __init__, __repr__, __eq__ basándose en anotaciones de tipo",
      "Un tipo de namedtuple con campos opcionales y valores predeterminados",
      "Una librería para serializar y deserializar datos a formatos como JSON",
      "Un ORM ligero para mapear clases Python a tablas de bases de datos"
    ],
    correct: 0,
    difficulty: "C",
    explanation: "@dataclass analiza campos anotados y genera métodos automáticamente. Con frozen=True, crea clases inmutables."
  },
  {
    question: "¿Qué hace <code>itertools.chain()</code>?",
    options: [
      "Une strings usando un separador de cadena especificado",
      "Crea un grafo de dependencias entre iterables encadenados",
      "Encadena múltiples iterables en un único iterador sin copiar datos",
      "Crea una cadena de procesamiento funcional aplicando transformaciones"
    ],
    correct: 2,
    difficulty: "C",
    explanation: "itertools.chain(iter1, iter2, ...) crea un iterador que recorre cada iterable secuencialmente, eficiente en memoria."
  },
  {
    question: "¿Qué es el unpacking en Python?",
    options: [
      "Deserializar objetos desde un formato binario comprimido externo",
      "Eliminar el empaquetado de bytes en estructuras de datos binarias",
      "Asignar elementos de un iterable a múltiples variables: a, b = [1, 2]",
      "Descomprimir archivos ZIP directamente con el módulo estándar"
    ],
    correct: 2,
    difficulty: "C",
    explanation: "a, b, c = [1,2,3]. Extended: primero, *resto = [1,2,3,4]. Funciona con cualquier iterable."
  },
  {
    question: "¿Qué hace <code>collections.defaultdict</code>?",
    options: [
      "Un dict que provee un valor por defecto para claves inexistentes en lugar de lanzar KeyError",
      "Un dict inmutable que no permite modificar sus valores tras la creación",
      "Un dict que ordena sus claves automáticamente en cada inserción",
      "Un OrderedDict con valores por defecto heredados de su clase padre"
    ],
    correct: 0,
    difficulty: "C",
    explanation: "defaultdict(list) crea listas automáticamente para nuevas claves: d['clave'].append(1) funciona sin inicializar."
  },
  {
    question: "¿Qué es el protocol en Python (duck typing)?",
    options: [
      "Un tipo de interfaz formal que las clases deben registrar explícitamente",
      "Una clase abstracta base que define los métodos mínimos requeridos",
      "Un protocolo de red usado para comunicación entre módulos distribuidos",
      "Si un objeto implementa los métodos correctos, puede usarse donde se espere ese tipo, sin herencia formal"
    ],
    correct: 3,
    difficulty: "C",
    explanation: "Duck typing: 'si camina como un pato y grazna como un pato, es un pato'. Python verifica comportamiento, no tipo formal."
  },
  {
    question: "¿Qué hace <code>__enter__</code> y <code>__exit__</code>?",
    options: [
      "Métodos que marcan el punto de entrada y salida del programa principal",
      "Implementan el protocolo de context manager para uso con 'with'",
      "Son decoradores automáticos generados por el intérprete en cada clase",
      "Son alias funcionales de __init__ y __del__ con nombres alternativos"
    ],
    correct: 1,
    difficulty: "C",
    explanation: "__enter__ se llama al entrar al bloque with; __exit__(exc_type, exc_val, tb) al salir, manejando también excepciones."
  },
  {
    question: "¿Qué hace <code>abc.ABC</code> y <code>@abstractmethod</code>?",
    options: [
      "Es el equivalente Python de las interfaces de Java con implementación opcional",
      "Crea clases de algoritmos con métodos intercambiables en tiempo de ejecución",
      "ABC significa Abstract Base Configuration para módulos de configuración",
      "Define clases abstractas con métodos que las subclases deben implementar obligatoriamente"
    ],
    correct: 3,
    difficulty: "C",
    explanation: "from abc import ABC, abstractmethod. Clase con @abstractmethod no puede instanciarse directamente; las subclases deben implementar el método."
  },
  {
    question: "¿Qué hace <code>pathlib.Path</code>?",
    options: [
      "Es equivalente funcional a os.path con la misma interfaz de cadenas",
      "API orientada a objetos para rutas del sistema de archivos, multiplataforma",
      "Un módulo para resolver rutas de red y URLs de recursos remotos",
      "Gestiona URLs y rutas HTTP con validación automática de esquemas"
    ],
    correct: 1,
    difficulty: "C",
    explanation: "pathlib.Path('/home/user') ofrece operaciones como /,  .read_text(), .write_text(), .exists(), .glob() de forma limpia y multiplataforma."
  },
  {
    question: "¿Qué es <code>typing.Protocol</code> en Python?",
    options: [
      "Define interfaces estructurales: si un objeto tiene los métodos correctos, satisface el protocolo (structural typing)",
      "Una clase de red que define el protocolo de comunicación entre servicios",
      "Un tipo de clase abstracta base que requiere registro explícito de subclases",
      "Un decorador de tipo que valida las anotaciones en tiempo de ejecución"
    ],
    correct: 0,
    difficulty: "C",
    explanation: "Protocol permite definir interfaces por estructura (como TypeScript): si un objeto tiene los métodos declarados, es compatible, sin herencia explícita."
  },
  {
    question: "¿Cómo funciona el garbage collector de CPython?",
    options: [
      "Conteo de referencias + algoritmo cíclico para detectar reference cycles que el conteo no puede recolectar",
      "Solo usa conteo de referencias y nunca ejecuta ciclos de recolección",
      "Usa mark & sweep de forma exclusiva con pausas periódicas del programa",
      "Gestión manual mediante llamadas explícitas a funciones de liberación"
    ],
    correct: 0,
    difficulty: "B",
    explanation: "CPython usa reference counting principalmente (inmediato al llegar a 0). El GC cíclico (gc module) detecta ciclos de referencias periódicamente."
  },
  {
    question: "¿Qué son los descriptores en Python?",
    options: [
      "Cadenas de documentación que describen automáticamente los atributos de clase",
      "Son equivalentes a los getters y setters de Java con sintaxis más simple",
      "Objetos que definen __get__, __set__, __delete__ para controlar el acceso a atributos de otras clases",
      "Decoradores de clase que generan documentación automática de atributos"
    ],
    correct: 2,
    difficulty: "B",
    explanation: "Los descriptores son la base de @property, métodos, staticmethod, classmethod. Al asignarse como atributo de clase, controlan el acceso del atributo."
  },
  {
    question: "¿Qué es el MRO (Method Resolution Order)?",
    options: [
      "Un algoritmo de hashing usado para comparar métodos de clases distintas",
      "El orden en que Python busca métodos en la jerarquía de herencia, usando el algoritmo C3 linearization",
      "Un tipo de ordenamiento estable aplicado a listas de métodos en memoria",
      "Un protocolo de red para resolución de nombres de métodos remotos"
    ],
    correct: 1,
    difficulty: "B",
    explanation: "MRO determina el orden de búsqueda en herencia múltiple. Python usa C3 linearization, accesible con Clase.__mro__ o Clase.mro()."
  },
  {
    question: "¿Qué hace <code>__new__</code> vs <code>__init__</code>?",
    options: [
      "__new__ crea la instancia (asigna memoria); __init__ la inicializa",
      "__new__ es utilizado exclusivamente en metaclases y no en clases normales",
      "__init__ es quien crea y retorna el nuevo objeto en memoria",
      "Ambos métodos son equivalentes y Python elige uno según el contexto"
    ],
    correct: 0,
    difficulty: "B",
    explanation: "__new__(cls) crea y retorna la nueva instancia. __init__(self) la configura. Para singletons o subclases de inmutables (str, int), se usa __new__."
  },
  {
    question: "¿Qué es <code>__call__</code> en una clase Python?",
    options: [
      "Invoca el método super() de la clase padre automáticamente",
      "Es el método principal equivalente a main() en otros lenguajes",
      "Llama al constructor de la clase sin pasar por __init__",
      "Permite que una instancia se llame como función: obj()"
    ],
    correct: 3,
    difficulty: "B",
    explanation: "Implementar __call__(self, ...) hace que la instancia sea callable: obj = MyClass(); obj() invoca __call__."
  },
  {
    question: "¿Qué hace <code>contextlib.contextmanager</code>?",
    options: [
      "Gestiona la carga y descarga de módulos dentro de un bloque controlado",
      "Un tipo de lock reentrante para secciones críticas de código concurrente",
      "Crea contextos de seguridad para operaciones criptográficas sensibles",
      "Decorador para crear context managers usando generadores con yield en lugar de __enter__/__exit__"
    ],
    correct: 3,
    difficulty: "B",
    explanation: "@contextmanager convierte un generador (código antes de yield = __enter__; después = __exit__) en un context manager."
  },
  {
    question: "¿Qué es el <code>__getattr__</code> vs <code>__getattribute__</code>?",
    options: [
      "__getattr__ se llama solo si el atributo no se encontró; __getattribute__ se llama SIEMPRE para cualquier acceso",
      "Ambos métodos son equivalentes y Python usa uno u otro indistintamente",
      "__getattribute__ está obsoleto y fue reemplazado por __getattr__ en Python 3",
      "__getattr__ intercepta todos los accesos incluyendo los atributos existentes"
    ],
    correct: 0,
    difficulty: "B",
    explanation: "__getattr__ es el fallback cuando el atributo no existe normalmente. __getattribute__ intercepta CADA acceso a atributo (cuidado con recursión)."
  },
  {
    question: "¿Qué son las coroutines en Python?",
    options: [
      "Funciones definidas con async def que pueden pausarse con await, permitiendo concurrencia cooperativa",
      "Generadores mejorados que solo pueden usarse dentro del módulo asyncio",
      "Un tipo de callback asíncrono que se registra en el event loop global",
      "Threads especiales con memoria compartida gestionada automáticamente"
    ],
    correct: 0,
    difficulty: "B",
    explanation: "Las coroutines (async def) son la base de asyncio. await pausa la coroutine, cediendo control al event loop hasta que la operación termine."
  },
  {
    question: "¿Qué hace <code>functools.partial()</code>?",
    options: [
      "Crea una nueva función con algunos argumentos prefijados (aplicación parcial)",
      "Divide una función en dos partes según el número de argumentos",
      "Aplica una función de forma parcial a los primeros elementos de un iterable",
      "Es un decorador que implementa currying automático de cualquier función"
    ],
    correct: 0,
    difficulty: "B",
    explanation: "partial(pow, 2) crea una función que calcula 2**n. Útil para crear funciones especializadas a partir de genéricas."
  },
  {
    question: "¿Qué es el <code>__repr__</code> vs <code>__str__</code>?",
    options: [
      "__str__ es usado por repr() y __repr__ es usado por print() en consola",
      "__repr__ es la representación unambigua para desarrolladores; __str__ es legible para el usuario final",
      "Ambos métodos producen el mismo resultado y son intercambiables en la práctica",
      "__repr__ se genera automáticamente y __str__ siempre debe definirse manualmente"
    ],
    correct: 1,
    difficulty: "B",
    explanation: "__str__ es para print() y str(). __repr__ es para repr() y la consola interactiva, debe idealmente permitir recrear el objeto: eval(repr(obj)) == obj."
  },
  {
    question: "¿Cómo funciona el bytecode de CPython y el dis módulo?",
    options: [
      "dis solo puede analizar funciones en modo de depuración activo",
      "El bytecode de CPython es equivalente al IR de LLVM y se optimiza igual",
      "Python compila a bytecode (.pyc) que la CPython VM ejecuta; dis.dis() muestra las instrucciones bytecode",
      "Python se interpreta directamente línea a línea sin fase de compilación"
    ],
    correct: 2,
    difficulty: "A",
    explanation: "CPython compila a bytecode (STACK-based VM). dis.dis(función) muestra LOAD_FAST, CALL_FUNCTION, etc. Útil para optimización y comprensión profunda."
  },
  {
    question: "¿Qué es la 'string interning' en Python?",
    options: [
      "Solo aplica a literales de string definidos en el código fuente",
      "Guardar strings serializados en disco para reutilizarlos entre ejecuciones",
      "Reutilizar el mismo objeto string para strings idénticos comunes (identifiers-like), optimizando memoria",
      "Un tipo de hashing especial para comparar strings en tiempo constante"
    ],
    correct: 2,
    difficulty: "A",
    explanation: "Python interna automáticamente strings que parecen identificadores. sys.intern(s) fuerza la internación. Permite comparación O(1) con 'is'."
  },
  {
    question: "¿Qué es el <code>__slots__</code> con herencia?",
    options: [
      "Los slots de padre e hijo se combinan automáticamente sin __dict__",
      "Los slots definidos en el padre se heredan automáticamente a las subclases",
      "Si la clase padre tiene __dict__ (sin __slots__), las subclases siguen teniendo __dict__ aunque definan __slots__",
      "__slots__ bloquea la herencia impidiendo que la clase tenga subclases"
    ],
    correct: 2,
    difficulty: "A",
    explanation: "Para beneficiarse de __slots__ en herencia, TODAS las clases de la jerarquía deben definir __slots__. Si algún padre no lo tiene, se crea __dict__ igualmente."
  },
  {
    question: "¿Qué es el 'frame object' en Python?",
    options: [
      "Un objeto que representa un fotograma en librerías de animación y video",
      "El objeto que representa un frame de ejecución en el call stack, accesible con inspect.currentframe()",
      "El objeto global que contiene el scope de variables del módulo principal",
      "Un tipo de closure especial que encapsula variables de scope externo"
    ],
    correct: 1,
    difficulty: "A",
    explanation: "Cada llamada de función crea un frame con locales, globales, y el código. inspect.currentframe() retorna el frame actual. Útil para debugging avanzado."
  },
  {
    question: "¿Qué hace <code>sys.settrace()</code>?",
    options: [
      "Instala una función de trace que se llama en cada línea/llamada/retorno, base de debuggers y profilers",
      "Traza todas las peticiones de red realizadas por el proceso de Python",
      "Configura el formato del stack trace mostrado en excepciones no capturadas",
      "Activa el logging de nivel DEBUG para todos los módulos del programa"
    ],
    correct: 0,
    difficulty: "A",
    explanation: "sys.settrace() instala una función global de tracing que se invoca en eventos de ejecución. Es la base de pdb, coverage.py y profilers."
  },
  {
    question: "¿Qué es el protocolo <code>__buffer__</code> (PEP 688)?",
    options: [
      "Un tipo de socket buffer para comunicación de red de bajo nivel",
      "Gestión de buffers de IO para lectura y escritura de archivos binarios",
      "Protocolo para exportar un buffer de memoria accesible directamente, base de memoryview y arrays C",
      "Solo aplicable a objetos de tipo bytes y bytearray del módulo estándar"
    ],
    correct: 2,
    difficulty: "A",
    explanation: "El buffer protocol permite acceso directo a memoria de objetos (numpy arrays, bytes, bytearray) sin copias, a través de memoryview."
  },
  {
    question: "¿Qué es <code>__init_subclass__</code>?",
    options: [
      "Un método de inicialización especial que se ejecuta al importar el módulo",
      "Un decorador automático que transforma subclases en dataclasses",
      "Es equivalente a __init__ pero se ejecuta en el contexto de la clase",
      "Método de clase llamado cuando se crea una subclase, permitiendo personalización sin metaclases"
    ],
    correct: 3,
    difficulty: "A",
    explanation: "__init_subclass__(cls, **kwargs) es llamado en la clase base cuando se define una subclase. Alternativa más simple a metaclases para muchos casos."
  },
  {
    question: "¿Qué hace <code>typing.TypeVar</code> con bounds y covariance?",
    options: [
      "Son opciones exclusivas de TypeScript adaptadas a Python con limitaciones",
      "Solo sirven para añadir anotaciones de tipo sin efecto en el comportamiento",
      "TypeVar con bound= restringe el tipo; covariant=True/contravariant=True define varianza en genéricos",
      "Solo renombran tipos existentes sin añadir ninguna restricción adicional"
    ],
    correct: 2,
    difficulty: "A",
    explanation: "T = TypeVar('T', bound=Animal) solo acepta Animal y subclases. covariant=True significa que Generic[Cat] es subtipo de Generic[Animal]."
  },
  {
    question: "¿Qué es el <code>ast</code> módulo en Python?",
    options: [
      "Un parser XML y HTML integrado con soporte para namespaces complejos",
      "Un módulo de testing unitario con soporte para mocking avanzado",
      "Un módulo de árboles de búsqueda binaria para estructuras de datos",
      "Provee acceso al Abstract Syntax Tree del código Python, útil para análisis estático y transformaciones"
    ],
    correct: 3,
    difficulty: "A",
    explanation: "import ast; tree = ast.parse('x = 1') crea el AST. ast.NodeVisitor y ast.NodeTransformer permiten analizar y transformar código programáticamente."
  },
  {
    question: "¿Qué es el concepto de 'free variables' y cell objects en Python?",
    options: [
      "Variables declaradas sin asignación inicial que el intérprete ignora",
      "Variables de un scope exterior usadas en una closure; Python las convierte en 'cell objects' compartidos",
      "Variables numéricas que Python almacena de forma optimizada en caché",
      "Variables del scope global que se pueden acceder libremente sin declaración"
    ],
    correct: 1,
    difficulty: "A",
    explanation: "Las variables capturadas por closures se convierten en cell objects. La función.__code__.co_freevars lista las free vars; la función.__closure__ contiene las cells."
  },
  {
    question: "¿Cómo funciona el import system de Python internamente?",
    options: [
      "import es una llamada directa al sistema operativo para cargar librerías",
      "Solo busca módulos en sys.path sin ningún mecanismo de caché adicional",
      "sys.import llama a importlib que consulta sys.modules (caché), luego buscadores (finders) que usan cargadores (loaders)",
      "Solo puede cargar archivos .py e ignora paquetes con __init__.py"
    ],
    correct: 2,
    difficulty: "S",
    explanation: "import usa importlib: 1) busca en sys.modules, 2) consulta sys.meta_path finders, 3) el finder retorna un loader, 4) loader ejecuta el código en un nuevo módulo."
  },
  {
    question: "¿Qué es un 'coroutine protocol' en Python y cómo difiere de un generador?",
    options: [
      "Los generadores son siempre más lentos que las coroutines async equivalentes",
      "Son completamente idénticos a nivel de protocolo y bytecode interno",
      "Coroutines implementan send(), throw(), close() como generadores, pero await solo funciona en async def; los generadores usan yield",
      "Las coroutines no tienen acceso al método send() que sí tienen los generadores"
    ],
    correct: 2,
    difficulty: "S",
    explanation: "Técnicamente, las coroutines async son generadores mejorados. Los tipos coroutine (PEP 492) se distinguen de generator-based coroutines (PEP 342) por el flag CO_COROUTINE."
  },
  {
    question: "¿Qué es el 'Stable ABI' de CPython (PEP 384)?",
    options: [
      "Una API de Python sin cambios garantizados en todos los releases menores",
      "Un subconjunto de la C API que permanece compatible entre versiones de CPython, permitiendo extensiones .abi3.so",
      "El bytecode estable que garantiza compatibilidad entre versiones de Python",
      "La API de asyncio que permanece estable entre versiones mayores de Python"
    ],
    correct: 1,
    difficulty: "S",
    explanation: "PEP 384 define una stable ABI con Py_LIMITED_API. Las extensiones compiladas con esta API funcionan en múltiples versiones de CPython sin recompilación."
  },
  {
    question: "¿Cómo implementa Python el acceso a atributos con herencia múltiple?",
    options: [
      "Busca en el prototipo del objeto como lo hace JavaScript en su cadena",
      "Sigue el orden de definición de las clases base de izquierda a derecha",
      "Busca linealmente por profundidad en cada rama de la jerarquía",
      "Usa C3 linearization para MRO, luego __getattribute__ busca en el MRO usando descriptores de datos > instancia > descriptores no-datos"
    ],
    correct: 3,
    difficulty: "S",
    explanation: "El MRO (C3) determina el orden. __getattribute__ busca en ese orden: data descriptors (con __set__) tienen prioridad sobre __dict__ de instancia."
  },
  {
    question: "¿Qué es PEP 703 (Nogil) y su impacto en CPython?",
    options: [
      "Propuesta para hacer el GIL opcional en CPython, permitiendo verdadero paralelismo de threads con trabajo de gestión de memoria thread-safe",
      "Un nuevo tipo de coroutine que elimina la necesidad de async/await",
      "Una propuesta para eliminar el recolector de basura cíclico del intérprete",
      "Una mejora del compilador de bytecode para reducir instrucciones redundantes"
    ],
    correct: 0,
    difficulty: "S",
    explanation: "PEP 703 (aceptado para 3.13+) hace el GIL opcional con --disable-gil. Requiere cambios profundos: reference counting atómico, estructuras de datos thread-safe."
  },
  {
    question: "¿Qué es el 'specializing adaptive interpreter' introducido en CPython 3.11?",
    options: [
      "Un compilador JIT completo que genera código nativo para funciones críticas",
      "El modo REPL mejorado con autocompletado y resaltado de sintaxis integrado",
      "Un modo de depuración avanzado con inspección de bytecode en tiempo real",
      "El bytecode se especializa adaptativamente: instrucciones genéricas se reemplazan por versiones especializadas para tipos concretos observados"
    ],
    correct: 3,
    difficulty: "S",
    explanation: "CPython 3.11+ usa 'quickening': instrucciones como LOAD_ATTR se especializan a LOAD_ATTR_MODULE, LOAD_ATTR_SLOT, etc., basándose en tipos observados en runtime."
  },
  {
    question: "¿Qué es el protocolo de buffer y <code>memoryview</code>?",
    options: [
      "Solo es compatible con arrays de numpy y no con tipos nativos de Python",
      "Una vista de segmentos de memoria usada en comunicación de red de bajo nivel",
      "Un tipo de caché de objetos que evita reconstruir datos frecuentemente accedidos",
      "memoryview expone el buffer protocol de objetos (bytes, arrays) permitiendo slicing y acceso sin copia; esencial para zero-copy I/O"
    ],
    correct: 3,
    difficulty: "S",
    explanation: "mv = memoryview(b'hello') permite slices sin copia de memoria. Fundamental para I/O eficiente, procesamiento de imágenes, y interfaz con extensiones C."
  },
  {
    question: "¿Cómo funciona la gestión de memoria de Python a nivel de arena/pool/block?",
    options: [
      "pymalloc gestiona bloques (8-512 bytes) en pools (4KB) en arenas (256KB), evitando fragmentación y llamadas costosas al OS",
      "Es equivalente a usar malloc de C directamente sin ninguna capa adicional",
      "Usa malloc y free del sistema operativo para cada objeto individual creado",
      "Solo el recolector de basura gestiona la memoria sin estructura adicional"
    ],
    correct: 0,
    difficulty: "S",
    explanation: "pymalloc: arenas (256KB) → pools (4KB de un size class) → blocks (tamaño fijo). Para objetos ≤512 bytes. Reduce fragmentación y overhead vs malloc/free del OS."
  },
  {
    question: "¿Qué es el 'co_qualname' y los flags del code object?",
    options: [
      "Solo almacena el nombre simple de la función sin información adicional",
      "El nombre del módulo donde se definió la función o clase correspondiente",
      "Los argumentos posicionales y de palabra clave definidos en la función",
      "Cada función tiene un code object con co_qualname (nombre calificado), co_flags (CO_GENERATOR, CO_COROUTINE, etc.), co_code (bytecode)"
    ],
    correct: 3,
    difficulty: "S",
    explanation: "func.__code__ expone co_qualname ('Clase.método'), co_flags (bitmask de propiedades), co_varnames, co_consts, co_code (bytes del bytecode)."
  },
  {
    question: "¿Qué es el concepto de 'immortal objects' en CPython 3.12?",
    options: [
      "Objetos que no pueden ser eliminados explícitamente con del en ningún contexto",
      "Objetos congelados con freeze() que no admiten modificaciones posteriores",
      "Singletons inmutables como True, False y None que nunca se recolectan",
      "Objetos con refcount especial (≥2^30) que nunca se decrementan, evitando cache invalidation en sistemas multi-proceso"
    ],
    correct: 3,
    difficulty: "S",
    explanation: "CPython 3.12 introduce immortal objects (PEP 683): objetos con refcount saturado que no se modifican, mejorando rendimiento en fork+multiprocessing al no invalidar páginas CoW."
  }
];
