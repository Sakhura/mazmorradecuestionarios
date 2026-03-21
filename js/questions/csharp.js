window.questions_csharp = [
  {
    question: "¿Qué es C# y en qué plataforma se ejecuta?",
    options: [
      "Un lenguaje que compila a C",
      "Un dialecto de C++",
      "Un lenguaje orientado a objetos de Microsoft que se ejecuta sobre la plataforma .NET (CLR); compila a CIL (bytecode) que la CLR ejecuta con JIT",
      "Solo para Windows"
    ],
    correct: 2,
    difficulty: "E",
    explanation: "C# es el lenguaje principal del ecosistema .NET. .NET 5+ es multiplataforma (Windows, Linux, macOS). Compila a CIL (Common Intermediate Language) ejecutado por el CLR."
  },
  {
    question: "¿Cómo se declara una variable en C#?",
    options: [
      "var int x = 5;",
      "dim x as integer = 5",
      "int x = 5; o var x = 5;",
      "let x = 5;"
    ],
    correct: 2,
    difficulty: "E",
    explanation: "C# es tipado estáticamente. var permite inferencia de tipo. La diferencia con JavaScript: var en C# es compile-time type inference, no dynamic typing."
  },
  {
    question: "¿Qué es una propiedad en C# y cómo difiere de un campo?",
    options: [
      "Los campos tienen getters",
      "Son lo mismo",
      "Las propiedades son más lentas siempre",
      "Las propiedades son miembros con getters y setters que encapsulan acceso a datos; permiten validación y lógica adicional. Los campos son variables directas"
    ],
    correct: 3,
    difficulty: "E",
    explanation: "public int Edad { get; set; } es auto-property. public int Edad { get { return _edad; } set { if(value >= 0) _edad = value; } } permite validación. Preferir propiedades sobre campos públicos."
  },
  {
    question: "¿Qué es un delegate en C#?",
    options: [
      "Un tipo que representa una referencia a un método con una firma específica; similar a punteros a función en C, pero type-safe y orientado a objetos",
      "Una clase abstracta",
      "Una interfaz de un solo método",
      "Un tipo de herencia"
    ],
    correct: 0,
    difficulty: "E",
    explanation: "delegate int Operacion(int a, int b); Operacion op = suma; op(3, 4). Los delegates son la base de events y de los tipos Func<> y Action<> del framework."
  },
  {
    question: "¿Qué es un evento (event) en C#?",
    options: [
      "Una excepción especial",
      "Un tipo de propiedad",
      "Un mecanismo basado en delegates que permite que objetos notifiquen a otros sobre cambios de estado; sigue el patrón publisher-subscriber",
      "Un tipo de excepción"
    ],
    correct: 2,
    difficulty: "E",
    explanation: "public event EventHandler Click; onClick += (s, e) => { ... }; Click?.Invoke(this, e). Los eventos solo pueden ser invocados por la clase que los declara (encapsulamiento del evento)."
  },
  {
    question: "¿Qué es LINQ en C#?",
    options: [
      "Un ORM de Microsoft",
      "Una librería de terceros",
      "Un tipo de lambda",
      "Language Integrated Query: una forma de escribir queries (sobre colecciones, BD, XML, etc.) con sintaxis de C# de forma type-safe y con IntelliSense"
    ],
    correct: 3,
    difficulty: "E",
    explanation: "var adultos = personas.Where(p => p.Edad >= 18).Select(p => p.Nombre).ToList(); o en sintaxis query: from p in personas where p.Edad >= 18 select p.Nombre."
  },
  {
    question: "¿Qué son los genéricos en C# y cómo se usan?",
    options: [
      "Permiten crear clases/métodos que funcionan con múltiples tipos con type safety: List<int>, Dictionary<string, Person>; verificados en compilación, mejor rendimiento que ArrayList",
      "Son solo para colecciones",
      "No tienen restricciones",
      "Igual que templates de C++"
    ],
    correct: 0,
    difficulty: "E",
    explanation: "void Swap<T>(ref T a, ref T b) { T tmp = a; a = b; b = tmp; }. Se pueden añadir restricciones: where T : class, IComparable<T>. A diferencia de Java, los genéricos de C# no usan type erasure."
  },
  {
    question: "¿Qué hace <code>async</code> y <code>await</code> en C#?",
    options: [
      "Crea un nuevo hilo",
      "Solo funciona con I/O",
      "Es solo azúcar sintáctico para Task",
      "async marca una función como asíncrona; await pausa la ejecución y libera el hilo hasta que la tarea async completa, sin bloquear el hilo"
    ],
    correct: 3,
    difficulty: "E",
    explanation: "async Task<string> GetDataAsync() { var data = await httpClient.GetStringAsync(url); return data; } El hilo se libera durante await y se reutiliza cuando la operación completa. Evita deadlocks con ConfigureAwait."
  },
  {
    question: "¿Qué es <code>Task</code> en C#?",
    options: [
      "Una tarea del sistema operativo",
      "Un tipo de hilo",
      "Un timer especial",
      "Representa una operación asíncrona (similar a Future/Promise en otros lenguajes); puede retornar un valor (Task<T>) o no (Task)"
    ],
    correct: 3,
    difficulty: "E",
    explanation: "Task.Run(() => { ... }) ejecuta en ThreadPool. Task.Delay(1000) es async Thread.Sleep. Task.WhenAll(t1, t2) espera múltiples tasks. El await de un Task retorna cuando completa."
  },
  {
    question: "¿Qué es la herencia en C# y cómo se implementa?",
    options: [
      "Solo con interfaces",
      "Con la palabra extends",
      "Con la palabra inherits",
      "Con : en la declaración de clase: class Perro : Animal {}; C# solo permite herencia simple de clases pero múltiples interfaces"
    ],
    correct: 3,
    difficulty: "E",
    explanation: "class Perro : Animal, IHablante, IMovible. La clase base va primero. sealed class previene herencia. abstract class requiere que subclases implementen los métodos abstractos."
  },
  {
    question: "¿Qué es una interfaz en C# y para qué sirve?",
    options: [
      "Una clase abstracta",
      "Un tipo de delegate",
      "Una clase sellada",
      "Define un contrato: una lista de miembros que las clases implementadoras deben proveer; a diferencia de clases abstractas, no puede tener estado de instancia (en versiones antiguas)"
    ],
    correct: 3,
    difficulty: "E",
    explanation: "interface IDrawable { void Draw(); } class Circle : IDrawable { public void Draw() { ... } }. C# 8+ permite métodos default en interfaces. Las interfaces permiten simulación de múltiple herencia."
  },
  {
    question: "¿Qué es el tipo <code>string</code> en C#?",
    options: [
      "Un tipo de valor",
      "Una clase inmutable que representa texto Unicode; es un alias de System.String; se compara por valor con == (a diferencia de Java)",
      "Un tipo struct",
      "Un alias de char[]"
    ],
    correct: 1,
    difficulty: "E",
    explanation: "string s = \"hola\"; s == \"hola\" es true (compara valor). s is string referenceType y se almacena en el heap. Strings son interned por el CLR para literales. StringBuilder para concatenaciones en bucle."
  },
  {
    question: "¿Cuál es la diferencia entre <code>class</code> y <code>struct</code> en C#?",
    options: [
      "class: tipo de referencia (heap); struct: tipo de valor (stack o inline); los structs se copian por valor, no tienen herencia (excepto interfaces)",
      "struct no puede tener métodos",
      "Son lo mismo",
      "struct es más lento"
    ],
    correct: 0,
    difficulty: "E",
    explanation: "struct Point { int X, Y; } → copiado por valor. Útil para tipos pequeños e inmutables. Los structs no tienen herencia y no pueden ser null (sin Nullable<T>). ValueTuple y int son structs."
  },
  {
    question: "¿Qué es el operador <code>??</code> en C#?",
    options: [
      "Es igual a ||",
      "Es igual a ?:",
      "Operador de fusión nula: retorna el operando izquierdo si no es null; de lo contrario, retorna el derecho",
      "Un operador de tipos"
    ],
    correct: 2,
    difficulty: "E",
    explanation: "string nombre = usuario?.Nombre ?? \"Anónimo\"; Si usuario es null o Nombre es null, retorna \"Anónimo\". ??= es el operador de asignación de fusión nula: x ??= new List();"
  },
  {
    question: "¿Qué es el operador <code>?.</code> (null conditional) en C#?",
    options: [
      "Accede a un miembro solo si el objeto no es null; de lo contrario retorna null (o el tipo por defecto si se espera un tipo de valor)",
      "Un coalescente especial",
      "Un type cast",
      "El operador ternario"
    ],
    correct: 0,
    difficulty: "E",
    explanation: "usuario?.Direccion?.Ciudad retorna null si cualquier parte es null. lista?.Count retorna int?. Evita el NullReferenceException más común. Equivale a usuario == null ? null : usuario.Direccion?.Ciudad."
  },
  {
    question: "¿Qué son los Records en C# 9+?",
    options: [
      "Solo para datos primitivos",
      "Tipos de referencia inmutables por valor con igualdad por valor, deconstrucción y expresión with generados automáticamente; ideales para DTOs",
      "Un tipo de base de datos",
      "Son igual a structs"
    ],
    correct: 1,
    difficulty: "E",
    explanation: "record Persona(string Nombre, int Edad); Genera: constructor, propiedades, Equals (por valor), GetHashCode, ToString, operador ==. Con with: var p2 = p1 with { Edad = 31 };"
  },
  {
    question: "¿Qué hace el modificador <code>override</code> en C#?",
    options: [
      "Es lo mismo que new",
      "Crea un nuevo método",
      "Hace el método abstracto",
      "Sobreescribe un método virtual o abstracto de la clase base; requiere que el método base esté marcado como virtual, abstract o override"
    ],
    correct: 3,
    difficulty: "E",
    explanation: "public override void Hablar() { base.Hablar(); Console.WriteLine(\"...\"); }. Sin override y con el mismo nombre: usa new (oculta el método base, no polimorfismo). El compilador avisa del shadowing."
  },
  {
    question: "¿Qué es <code>IEnumerable<T></code> en C#?",
    options: [
      "Una interfaz que representa una secuencia de elementos de tipo T que se puede iterar con foreach; base de LINQ",
      "Un tipo de array",
      "Una lista de T",
      "Una colección modificable"
    ],
    correct: 0,
    difficulty: "E",
    explanation: "IEnumerable<T> tiene solo GetEnumerator(). El foreach lo usa internamente. LINQ trabaja sobre IEnumerable<T>. Es la interfaz más básica de colecciones. Lazy evaluation: los elementos se generan bajo demanda."
  },
  {
    question: "¿Qué es el type casting en C# y sus formas?",
    options: [
      "Solo con as",
      "(T)obj: lanza InvalidCastException si falla. obj as T: retorna null si falla. is T: verifica si es el tipo",
      "Solo cast directo (int)x",
      "Solo con is"
    ],
    correct: 1,
    difficulty: "E",
    explanation: "var dog = animal as Dog; if(dog != null). O con pattern matching: if(animal is Dog d) { d.Ladrar(); }. El as es null-safe para tipos de referencia."
  },
  {
    question: "¿Qué es el namespace en C#?",
    options: [
      "Un espacio de nombres que organiza el código y evita colisiones de nombres: namespace MiEmpresa.Proyectos.Modulos",
      "Un tipo de archivo",
      "Un atributo especial",
      "Un tipo de clase"
    ],
    correct: 0,
    difficulty: "E",
    explanation: "using MiEmpresa.Proyectos; permite usar clases sin el prefijo completo. using static: importa miembros estáticos. File-scoped namespace (C# 10): namespace MiApp; al inicio del archivo."
  },
  {
    question: "¿Qué hace <code>static</code> en C#?",
    options: [
      "Los miembros estáticos pertenecen a la clase (no a instancias): static int Contador; static void Metodo(). Una clase static no puede instanciarse y solo tiene miembros static",
      "Lo hace inmutable",
      "Es igual a sealed",
      "Hace el miembro privado"
    ],
    correct: 0,
    difficulty: "E",
    explanation: "static class Utilidades solo contiene miembros static. Math, Console son ejemplos. Los métodos de extensión (extension methods) deben estar en clases static."
  },
  {
    question: "¿Qué es <code>using</code> en C# (como statement)?",
    options: [
      "Solo para streams",
      "Garantiza que un objeto IDisposable se dispone (Dispose()) al salir del bloque, incluso si hay excepción",
      "Es igual a try/finally",
      "Solo importa namespaces"
    ],
    correct: 1,
    difficulty: "E",
    explanation: "using (var conn = new SqlConnection(cs)) { // usar conn } Dispose() se llama automáticamente. C# 8+: using var conn = new SqlConnection(cs); Dispose al salir del scope."
  },
  {
    question: "¿Qué es <code>IDisposable</code> y el patrón Dispose?",
    options: [
      "Solo para conexiones de BD",
      "Una interfaz de serialización",
      "Una interfaz con Dispose() que libera recursos no gestionados; implementarla permite usar el using statement",
      "Un tipo de excepción"
    ],
    correct: 2,
    difficulty: "E",
    explanation: "Implementar IDisposable: dispose recursos no gestionados (handles, conexiones) en Dispose(). El patrón completo incluye un finalizer como respaldo, pero preferir el using."
  },
  {
    question: "¿Qué es el tipo nullable (<code>int?</code>) en C#?",
    options: [
      "Un int que puede ser 0",
      "Un tipo de valor que también puede ser null: int? = Nullable<int>; tiene .HasValue y .Value; se puede usar con ?? y ?.",
      "Un int con un bit extra",
      "Es igual a object"
    ],
    correct: 1,
    difficulty: "E",
    explanation: "int? edad = null; if(edad.HasValue) { int e = edad.Value; } o int e = edad ?? 0. Con C# 8 nullable reference types (string?), también para tipos de referencia."
  },
  {
    question: "¿Qué hace <code>params</code> en C#?",
    options: [
      "Solo con tipos primitivos",
      "Permite que un método acepte un número variable de argumentos del mismo tipo como si fuera un array: void f(params int[] nums) se puede llamar f(1,2,3) o f(new int[]{1,2,3})",
      "Parámetros obligatorios",
      "Es igual a varargs de Java"
    ],
    correct: 1,
    difficulty: "E",
    explanation: "Console.WriteLine(\"{0} {1}\", a, b) usa params object[]. Solo puede haber un params y debe ser el último parámetro. El compilador crea el array automáticamente al llamar con argumentos separados."
  },
  {
    question: "¿Qué son los métodos de extensión en C#?",
    options: [
      "Métodos estáticos que se pueden llamar como si fueran métodos de instancia del tipo extendido: static void MiMetodo(this MiTipo obj, ...) permite extender tipos sin heredar",
      "Un tipo de sobrecarga",
      "Solo para tipos básicos",
      "Métodos de herencia"
    ],
    correct: 0,
    difficulty: "E",
    explanation: "static class ExtensionStrings { public static bool EsPalindromo(this string s) { ... } } Se usa: \"abba\".EsPalindromo(). LINQ está implementado completamente como métodos de extensión."
  },
  {
    question: "¿Qué es el operador <code>is</code> con pattern matching en C# 7+?",
    options: [
      "Solo verifica null",
      "Solo verifica el tipo",
      "Verifica el tipo y opcionalmente extrae la variable: if(obj is string s) puede usar s en el bloque. Soporta constantes, tipos, switch expressions y más patrones",
      "Es igual al is de Java"
    ],
    correct: 2,
    difficulty: "E",
    explanation: "if(obj is int n && n > 0) { ... } El pattern matching de C# 9+ en switch es muy poderoso: x switch { int n when n > 0 => \"positivo\", int n => \"no positivo\", _ => \"otro\" }."
  },
  {
    question: "¿Qué es <code>var</code> en C#?",
    options: [
      "Es igual a dynamic",
      "Inferencia de tipo estática: el compilador deduce el tipo desde el inicializador. El tipo es fijo en compilación (no es dynamic)",
      "Una variable sin tipo",
      "Una variable de tipo dinámico"
    ],
    correct: 1,
    difficulty: "E",
    explanation: "var x = 5; // x es int. var lista = new List<string>(); // lista es List<string>. No puede usarse sin inicializador. Útil para tipos complejos (iteradores, resultados LINQ)."
  },
  {
    question: "¿Qué es <code>dynamic</code> en C# y cuándo usarlo?",
    options: [
      "Es siempre más lento",
      "Es igual a var",
      "Es igual a object",
      "Un tipo que omite la verificación de tipo en compilación; las operaciones se resuelven en runtime; útil para interop con COM, reflection dinámica, datos de fuentes no tipadas"
    ],
    correct: 3,
    difficulty: "E",
    explanation: "dynamic d = GetDinamicoDeJson(); d.Propiedad accede sin saber el tipo en compilación. Si la propiedad no existe: RuntimeBinderException. Usar con cuidado; es potente pero pierde type safety."
  },
  {
    question: "¿Qué es el patrón de igualdad en C# con <code>Equals</code> y <code>GetHashCode</code>?",
    options: [
      "Para tipos de valor semántico: sobreescribir Equals (y ==), GetHashCode (mismo contrato que Java: iguales → mismo hash). Para structs, el default es igualdad por valor",
      "Solo se necesita Equals",
      "GetHashCode es obsoleto",
      "Son independientes"
    ],
    correct: 0,
    difficulty: "E",
    explanation: "Records generan Equals/GetHashCode/== por valor automáticamente. Para clases personalizadas: siempre implementar ambos. Si dos objetos son iguales (Equals=true), deben tener el mismo GetHashCode."
  },
  {
    question: "¿Qué son las tuplas en C# 7+?",
    options: [
      "Solo System.Tuple",
      "ValueTuple: tipos de valor livianos con nombres de campo: var p = (Nombre: \"Ana\", Edad: 30); p.Nombre; o sin nombres: var t = (1, \"hola\"); t.Item1",
      "Solo con 2 elementos",
      "Solo para retorno múltiple"
    ],
    correct: 1,
    difficulty: "E",
    explanation: "ValueTuple es más eficiente que System.Tuple (struct vs class). Desestructuración: var (nombre, edad) = GetPersona(). En LINQ: select (p.Nombre, p.Edad) crea tuplas anónimas."
  },
  {
    question: "¿Qué es la interpolación de strings en C# 6+?",
    options: [
      "Una forma de formato especial",
      "Solo con variables simples",
      "Prefijo $: $\"Hola {nombre}, tienes {edad} años\". Las expresiones entre {} se evalúan y convierten a string. Equivale a String.Format pero más legible",
      "Es igual a String.Format solo"
    ],
    correct: 2,
    difficulty: "E",
    explanation: "$\"Pi es {Math.PI:F2}\" formatea con especificador de formato. $@\"Ruta: {path}\" combina verbatim y interpolación. $\"\" es más rápido que + en strings simples (el compilador puede optimizar)."
  },
  {
    question: "¿Qué es el operador <code>nameof</code>?",
    options: [
      "Solo para propiedades",
      "El nombre del namespace",
      "Un atributo especial",
      "Retorna el nombre del símbolo (variable, clase, método, propiedad) como string en compilación; evita magic strings que no se actualizan en refactors"
    ],
    correct: 3,
    difficulty: "E",
    explanation: "throw new ArgumentNullException(nameof(param)); Si renombras param, nameof(param) actualiza automáticamente. PropertyChanged?.Invoke(this, new PropertyChangedEventArgs(nameof(Nombre)))."
  },
  {
    question: "¿Qué es <code>sealed</code> en C#?",
    options: [
      "Hace la clase inmutable",
      "Hace la clase static",
      "Previene la herencia de una clase o la sobreescritura de un método virtual específico en subclases: sealed class o sealed override",
      "Es igual a final de Java"
    ],
    correct: 2,
    difficulty: "E",
    explanation: "sealed class String en .NET. class A : B { sealed override void M() {} } impide que subclases de A sobreescriban M. sealed puede mejorar el rendimiento de virtual dispatch en algunos JITs."
  },
  {
    question: "¿Qué es el atributo <code>[Obsolete]</code>?",
    options: [
      "Marca un miembro como obsoleto; genera una advertencia de compilación cuando se usa; el segundo parámetro bool hace que sea un error de compilación",
      "Es solo documentación",
      "Lo hace privado",
      "Borra el miembro"
    ],
    correct: 0,
    difficulty: "E",
    explanation: "[Obsolete(\"Usar NuevoMetodo() en su lugar\", error: false)] Genera warning. [Obsolete(\"...\", true)] genera error de compilación. Fundamental para deprecar APIs de forma gradual."
  },
  {
    question: "¿Qué es el patrón singleton en C# thread-safe?",
    options: [
      "La forma más sencilla y thread-safe en C#: static readonly Singleton instance = new Singleton(); o Lazy<T> para inicialización lazy: static readonly Lazy<T> instance = new(() => new T())",
      "Usar static simple",
      "Con lock siempre",
      "Con double-checked locking manual"
    ],
    correct: 0,
    difficulty: "E",
    explanation: "La inicialización de campos estáticos en C# es garantizada thread-safe por el CLR. Lazy<T> es thread-safe por defecto. Ambas son mejores que el double-checked locking manual."
  },
  {
    question: "¿Qué es LINQ y cuáles son sus operadores principales?",
    options: [
      "Un conjunto de operadores de consulta: Where (filtrar), Select (proyectar), OrderBy, GroupBy, Join, Aggregate, FirstOrDefault, Any, All, Count; funcionan sobre IEnumerable<T> e IQueryable<T>",
      "Solo para bases de datos",
      "Una librería de terceros",
      "Solo SQL en C#"
    ],
    correct: 0,
    difficulty: "D",
    explanation: "LINQ tiene dos syntaxis: query syntax (from x in collection where ... select ...) y method syntax (collection.Where(...).Select(...)). Method syntax es más flexible y permite encadenamiento."
  },
  {
    question: "¿Cuál es la diferencia entre <code>IEnumerable<T></code> e <code>IQueryable<T></code>?",
    options: [
      "Son iguales",
      "IQueryable es obsoleto",
      "IEnumerable es más rápido siempre",
      "IEnumerable: ejecuta en memoria (LINQ to Objects). IQueryable: traduce la query a otro formato (ej: SQL para Entity Framework); la evaluación es diferida y ocurre en la fuente de datos"
    ],
    correct: 3,
    difficulty: "D",
    explanation: "Con IQueryable: db.Personas.Where(p => p.Edad > 18) genera SQL WHERE Edad > 18. Con IEnumerable: carga todos a memoria y filtra en C#. Importante para performance con ORMs."
  },
  {
    question: "¿Qué es la evaluación diferida (lazy evaluation) en LINQ?",
    options: [
      "Una optimización del compilador",
      "Las queries LINQ no se ejecutan al definirlas sino al iterar los resultados (foreach, ToList(), Count(), etc.). Permite composición sin penalización de rendimiento",
      "Es una desventaja",
      "Solo con IQueryable"
    ],
    correct: 1,
    difficulty: "D",
    explanation: "var query = personas.Where(p => p.Activo); La query no filtra hasta el primer foreach. Si cambias personas antes de iterar, la query ve los cambios. ToList() fuerza la ejecución inmediata."
  },
  {
    question: "¿Qué son los anonymous types en C#?",
    options: [
      "Tipos creados con new { Nombre = p.Nombre, Edad = p.Edad } sin declarar una clase; el compilador genera una clase anónima con propiedades readonly y Equals/GetHashCode",
      "Tipos sin nombre",
      "Son igual a tuples",
      "Son tipos dinámicos"
    ],
    correct: 0,
    difficulty: "D",
    explanation: "var anon = new { Nombre = \"Ana\", Edad = 30 }; anon.Nombre es \"Ana\". Útil en LINQ select. El tipo es inferido y no se puede nombrar. En C# 7+, las tuplas nombradas son preferibles."
  },
  {
    question: "¿Qué son los expression trees en C#?",
    options: [
      "Son iguales a delegates",
      "Representaciones de código como datos (AST) que pueden inspeccionarse o compilarse en runtime; base de IQueryable y ORMs como Entity Framework",
      "Solo para LINQ",
      "Árboles de expresiones matemáticas"
    ],
    correct: 1,
    difficulty: "D",
    explanation: "Expression<Func<int,int>> expr = x => x * 2; expr.Body es un árbol que se puede inspeccionar/transformar. EF analiza los expression trees de LINQ para generar SQL. Potente pero complejo."
  },
  {
    question: "¿Qué es el patrón observer con eventos en C#?",
    options: [
      "Solo con delegates",
      "El mismo que en Java",
      "Un tipo de interfaz",
      "public event EventHandler<DatosEventArgs> DatoCambiado; los suscriptores se registran con += y desregistran con -=; el publicador invoca con ?.Invoke()"
    ],
    correct: 3,
    difficulty: "D",
    explanation: "El event keyword encapsula el delegate: solo la clase dueña puede invocar el evento. Los suscriptores usan += para suscribirse. Importante desuscribirse con -= para evitar memory leaks."
  },
  {
    question: "¿Qué es el método <code>ConfigureAwait(false)</code>?",
    options: [
      "Es igual a Task.Run",
      "Indica que la continuación del await no necesita reanudarse en el contexto de sincronización original (ej: UI thread); mejora el rendimiento en librerías",
      "Es obligatorio en async",
      "Una optimización opcional"
    ],
    correct: 1,
    difficulty: "D",
    explanation: "En librerías: siempre usar await tarea.ConfigureAwait(false) para evitar deadlocks cuando el caller usa .Result o .Wait() desde un contexto sincrono con SynchronizationContext (ej: ASP.NET Framework, WPF)."
  },
  {
    question: "¿Qué es el CancellationToken en C#?",
    options: [
      "Un token de autenticación",
      "Es automático con async",
      "Solo para async",
      "Un mecanismo para solicitar la cancelación de operaciones asíncronas de forma cooperativa: el código comprueba token.IsCancellationRequested y lanza OperationCanceledException"
    ],
    correct: 3,
    difficulty: "D",
    explanation: "async Task<string> GetAsync(CancellationToken ct) { ct.ThrowIfCancellationRequested(); await Task.Delay(1000, ct); }. Usar CancellationTokenSource.CancelAfter(timeout) para timeouts."
  },
  {
    question: "¿Qué es el patrón de excepciones en C# (custom exceptions)?",
    options: [
      "Heredar de RuntimeException",
      "Solo lanzar las del framework",
      "Crear cualquier clase",
      "Heredar de Exception: public class DomainException : Exception { public DomainException(string msg) : base(msg) {} }. Incluir serialization constructor para remoting"
    ],
    correct: 3,
    difficulty: "D",
    explanation: "Las excepciones personalizadas deben: heredar de Exception, tener el constructor (string), incluir any_data relevante, y documentar cuándo se lanzan. El InnerException permite encadenar causas."
  },
  {
    question: "¿Qué es la reflexión (Reflection) en C#?",
    options: [
      "La capacidad de inspeccionar y manipular tipos, métodos y propiedades en runtime via System.Reflection; base de frameworks de DI, serialización, ORM",
      "Mirrors en código",
      "Solo para attributes",
      "Un tipo de interface"
    ],
    correct: 0,
    difficulty: "D",
    explanation: "Type tipo = typeof(MiClase); tipo.GetProperties(), tipo.InvokeMethod(). Reflection es potente pero lento. Preferir Source Generators o AOT-friendly patterns para producción."
  },
  {
    question: "¿Qué son los atributos (Attributes) en C# y cómo se usan?",
    options: [
      "Propiedades especiales",
      "Son iguales a annotations de Java",
      "Metadatos declarativos adjuntos a tipos o miembros: [Serializable], [Obsolete], [HttpGet], [Test]. Se leen con Reflection o Source Generators",
      "Son comentarios especiales"
    ],
    correct: 2,
    difficulty: "D",
    explanation: "[AttributeUsage(AttributeTargets.Method)] class MiAtributo : Attribute {}. Se lee con GetCustomAttributes(typeof(MiAtributo)). Los frameworks los usan extensivamente (ASP.NET, xUnit, EF)."
  },
  {
    question: "¿Qué son los generics constraints en C#?",
    options: [
      "where T : class (tipo de referencia), where T : struct (valor), where T : new() (constructor sin parámetros), where T : IComparable<T> (implementa interfaz)",
      "Restricciones de compilador",
      "Solo para clases",
      "Son opcionales siempre"
    ],
    correct: 0,
    difficulty: "D",
    explanation: "void Comparar<T>(T a, T b) where T : IComparable<T> { return a.CompareTo(b); } Los constraints limitan T para acceder a sus miembros de forma segura. Múltiples constraints separados por coma."
  },
  {
    question: "¿Qué es la covarianza e invarianza en genéricos de C# (out/in)?",
    options: [
      "Son iguales",
      "out T: el tipo puede usarse como más general (IEnumerable<string> asignable a IEnumerable<object>). in T: puede usarse como más específico (contravarianza). Solo en interfaces y delegates",
      "Solo para interfaces",
      "Es automático"
    ],
    correct: 1,
    difficulty: "D",
    explanation: "IEnumerable<string> strings = new List<string>(); IEnumerable<object> objects = strings; // válido porque string es object. El out T marca covarianza. Action<object> es asignable a Action<string> (contravarianza)."
  },
  {
    question: "¿Qué es el <code>yield return</code> en C#?",
    options: [
      "Un return especial de métodos async",
      "Es igual a return",
      "Solo para LINQ",
      "Permite crear iteradores (métodos que producen secuencias) de forma lazy: el método retorna IEnumerable y cada yield return produce un elemento bajo demanda"
    ],
    correct: 3,
    difficulty: "D",
    explanation: "IEnumerable<int> Fibonacci() { int a=0, b=1; while(true) { yield return a; (a,b) = (b, a+b); } }. El estado del método se preserva entre llamadas. yield break termina la secuencia."
  },
  {
    question: "¿Qué es el patrón IAsyncEnumerable en C# 8+?",
    options: [
      "Un enumerador asíncrono: permite iterar secuencias de datos que se generan de forma asíncrona con await foreach. Ideal para streaming de datos",
      "Es igual a Task<IEnumerable>",
      "Solo para streams de red",
      "Un IEnumerable más rápido"
    ],
    correct: 0,
    difficulty: "D",
    explanation: "async IAsyncEnumerable<int> GetDatosAsync() { await foreach(var item in source) { await Task.Delay(100); yield return item; } } await foreach(var x in GetDatosAsync()) { }"
  },
  {
    question: "¿Qué son los Records Structs en C# 10+?",
    options: [
      "Structs normales con nombre fancy",
      "Combinan las características de records (igualdad por valor, with, deconstrucción) con la semántica de structs (tipos de valor, sin heap allocation); más eficientes que record classes",
      "Son iguales a struct",
      "Son solo por rendimiento"
    ],
    correct: 1,
    difficulty: "D",
    explanation: "record struct Punto(double X, double Y); Genera: igualdad por valor, GetHashCode, ToString, with, deconstrucción. readonly record struct: completamente inmutable."
  },
  {
    question: "¿Qué son los Primary Constructors en C# 12?",
    options: [
      "Sintaxis concisa para declarar constructores directamente en la clase/struct: class Persona(string Nombre, int Edad) {}, los parámetros están disponibles en todo el cuerpo",
      "Solo para clases simples",
      "Son igual a records",
      "El primer constructor definido"
    ],
    correct: 0,
    difficulty: "D",
    explanation: "class Service(IRepository repo) { public void DoWork() { repo.Save(); } }. Los parámetros del primary constructor son campos privados implícitos. También disponibles en structs y interfaces."
  },
  {
    question: "¿Qué hace <code>required</code> en propiedades de C# 11?",
    options: [
      "Es igual a NotNull",
      "Hace la propiedad obligatoria en herencia",
      "Solo para records",
      "Requiere que la propiedad sea inicializada en el object initializer: class User { public required string Nombre { get; init; } }. Error de compilación si no se inicializa"
    ],
    correct: 3,
    difficulty: "D",
    explanation: "new User { Nombre = \"Ana\" } compila. new User {} da error: 'Nombre required'. Permite constructores sin parámetros pero con inicialización obligatoria. Útil con Object Initializers."
  },
  {
    question: "¿Qué son los Collection Expressions en C# 12?",
    options: [
      "Solo para arrays",
      "Sintaxis mejorada de arrays",
      "Es igual a new[] {}",
      "Nueva sintaxis unificada: [1, 2, 3] para List<int>, int[], Span<int>, IEnumerable<int>; [..lista1, ..lista2] para spread (combinar colecciones)"
    ],
    correct: 3,
    difficulty: "D",
    explanation: "int[] arr = [1, 2, 3]; List<string> nombres = [\"Ana\", \"Juan\"]; var combinado = [..lista1, ..lista2]; El compilador elige la implementación más eficiente según el tipo de destino."
  },
  {
    question: "¿Qué es Pattern Matching avanzado en C# 9+?",
    options: [
      "Solo con switch",
      "Patterns: not, and, or lógicos. Relational patterns (< > <= >=). Property patterns ({ Edad: > 18, Activo: true }). List patterns ([_, var segundo, ..]). Switch expressions con arms",
      "Solo para tipos simples",
      "Solo with is keyword"
    ],
    correct: 1,
    difficulty: "D",
    explanation: "string clasificar(object x) => x switch { int n when n < 0 => \"negativo\", int n and > 100 => \"grande\", string { Length: > 5 } s => $\"long string: {s}\", _ => \"otro\" };"
  },
  {
    question: "¿Qué son los init-only setters en C# 9?",
    options: [
      "Solo para records",
      "Propiedades que solo pueden inicializarse en el constructor o en un object initializer (init keyword): public string Nombre { get; init; } Inmutables después de la construcción",
      "Son igual a readonly",
      "Setters que se llaman una vez"
    ],
    correct: 1,
    difficulty: "D",
    explanation: "init permite inmutabilidad post-construcción con object initializer syntax. Es el pilar de los records. new Persona { Nombre = \"Ana\" } funciona; persona.Nombre = \"Pedro\" da error después."
  },
  {
    question: "¿Qué es el Source Generator en C# y para qué sirve?",
    options: [
      "Un tipo de Roslyn analyzer que genera código C# durante la compilación; elimina boilerplate como serialización, DI registration, logging, Regex compilado, evitando reflection en runtime",
      "Solo para código genérico",
      "Una macro de C#",
      "Un generador de código manual"
    ],
    correct: 0,
    difficulty: "D",
    explanation: "[GeneratedRegex(@\"\\d+\")] partial static Regex GetDigits(); System.Text.Json.SourceGeneration evita reflection. EF Core usa source generators para proxy generation. Fundamental para Native AOT."
  },
  {
    question: "¿Qué es el <code>Span<T></code> en C# y su relación con la pila?",
    options: [
      "Es igual a ArraySegment",
      "Un tipo ref struct que provee una vista sobre memoria contigua (array, stack, memoria nativa) sin copias; puede vivir en el stack para máxima eficiencia",
      "Solo para strings",
      "Una vista de colección"
    ],
    correct: 1,
    difficulty: "D",
    explanation: "Span<int> span = stackalloc int[100]; Memoria en el stack, sin heap allocation. stackalloc + Span: muy eficiente. Limitación: Span no puede estar en el heap (no puede ser campo de clase, no puede estar en async)."
  },
  {
    question: "¿Qué es el <code>Memory<T></code> y su diferencia con <code>Span<T></code>?",
    options: [
      "Son idénticos",
      "Memory es obsoleto",
      "Memory<T> puede almacenarse en el heap (en campos, async); Span<T> solo puede vivir en el stack (ref struct). Memory<T>.Span convierte a Span para operaciones de bajo nivel",
      "Solo Span es útil"
    ],
    correct: 2,
    difficulty: "D",
    explanation: "Memory<T> es para casos donde necesitas referenciar un segmento de array en campos de clase o métodos async. Span<T> es para el código de procesamiento más caliente donde el overhead de heap importa."
  },
  {
    question: "¿Qué es el patrón Repository en C# con Entity Framework?",
    options: [
      "Una abstracción sobre el acceso a datos que expone operaciones de dominio (GetById, Add, Remove, Find); permite cambiar la implementación de persistencia sin tocar la lógica de negocio",
      "Un Repository es una clase que envuelve la BD",
      "Un tipo de context",
      "Es igual a DAO"
    ],
    correct: 0,
    difficulty: "D",
    explanation: "IUserRepository { Task<User> GetById(int id); Task Add(User user); } EFUserRepository : IUserRepository. Los tests pueden usar una implementación in-memory. Reduce el acoplamiento con EF."
  },
  {
    question: "¿Qué es el Task Parallel Library (TPL) en C#?",
    options: [
      "Es igual a async/await",
      "Solo para servidores",
      "Una librería de terceros",
      "El framework de C# para programación paralela: Task, Parallel.For, Parallel.ForEach, PLINQ (.AsParallel()), dataflow blocks. Abstrae threads del SO"
    ],
    correct: 3,
    difficulty: "D",
    explanation: "Parallel.ForEach(lista, item => Procesar(item)); paralleliza automáticamente. PLINQ: lista.AsParallel().Where(p => p.Activo). Para I/O: async/await es mejor. Para CPU-bound: Parallel/Task.Run."
  },
  {
    question: "¿Qué es la inyección de dependencias (DI) nativa en .NET?",
    options: [
      "Es solo para ASP.NET",
      "El contenedor DI de .NET Core/5+: IServiceCollection para registrar, IServiceProvider para resolver. Soporta: Singleton, Scoped, Transient. AddSingleton<I, T>()",
      "Un patrón de diseño solo",
      "Solo con frameworks externos"
    ],
    correct: 1,
    difficulty: "D",
    explanation: "services.AddScoped<IUserRepo, EfUserRepo>(); services.AddTransient<IEmailService, SmtpEmailService>(); El constructor de los controladores recibe las dependencias automáticamente."
  },
  {
    question: "¿Cómo funciona la garbage collection en .NET y sus generaciones?",
    options: [
      "Siempre detiene el mundo",
      "Recolecta toda la memoria periódicamente",
      "El GC de .NET divide objetos en generaciones (0, 1, 2) y el Large Object Heap; los objetos jóvenes se recolectan más frecuentemente; los sobrevivientes suben de generación",
      "Es igual al GC de Java"
    ],
    correct: 2,
    difficulty: "C",
    explanation: "Gen 0: objetos nuevos, recolectados frecuentemente. Gen 1: buffer entre 0 y 2. Gen 2: objetos de larga vida. LOH (>85KB): recolección costosa. Background GC en .NET 4+ permite GC con minimal pause en Gen 2."
  },
  {
    question: "¿Qué es el ValueTask y cuándo es preferible a Task?",
    options: [
      "Es siempre más rápido",
      "ValueTask<T> evita la allocación de heap cuando el resultado está disponible síncronamente (hot path); preferible en APIs de alta frecuencia donde frecuentemente no necesitan awaiting real",
      "Una tarea de tipo de valor",
      "Es solo para structs"
    ],
    correct: 1,
    difficulty: "C",
    explanation: "ValueTask evita el costo de allocar un Task object cuando el resultado ya está disponible (ej: cache hit). No se puede awaitar dos veces. Para la mayoría de APIs: Task es más simple y correcto."
  },
  {
    question: "¿Qué es el IHostedService y BackgroundService en ASP.NET?",
    options: [
      "Solo en .NET Core",
      "Interfaces para ejecutar tareas en segundo plano en una aplicación .NET: IHostedService para control total, BackgroundService para bucles de trabajo continuos",
      "Un tipo de controlador",
      "Son igual a Timer"
    ],
    correct: 1,
    difficulty: "C",
    explanation: "class MiServicio : BackgroundService { protected override async Task ExecuteAsync(CancellationToken ct) { while(!ct.IsCancellationRequested) { await DoWork(ct); await Task.Delay(1000, ct); } } }"
  },
  {
    question: "¿Qué son los Channels en C# (System.Threading.Channels)?",
    options: [
      "Canales de comunicación de red",
      "Una abstracción para comunicación productor-consumidor async y thread-safe: Channel<T> tiene Reader y Writer con métodos async; más eficiente que BlockingCollection",
      "Son iguales a Queue",
      "Solo en .NET 5+"
    ],
    correct: 1,
    difficulty: "C",
    explanation: "Channel<int> ch = Channel.CreateBounded<int>(100); await ch.Writer.WriteAsync(item); await ch.Reader.ReadAsync(). Para streaming de datos, pipelines, y evitar bloqueos entre productores y consumidores."
  },
  {
    question: "¿Qué son las inmutable collections en C# (System.Collections.Immutable)?",
    options: [
      "Colecciones que retornan una nueva instancia en cada modificación: ImmutableList.Add() retorna una nueva lista. Seguras entre hilos, garantizan que no cambian",
      "Colecciones de solo lectura con ReadOnlyCollection",
      "Son igual a Array",
      "Son lentas siempre"
    ],
    correct: 0,
    difficulty: "C",
    explanation: "ImmutableList<int> l1 = ImmutableList<int>.Empty.Add(1).Add(2); var l2 = l1.Add(3); l1 no cambia. Internamente usan estructura de árbol compartida para eficiencia. Útiles en contextos concurrentes."
  },
  {
    question: "¿Qué es Roslyn y qué permite hacer en C#?",
    options: [
      "Solo para generación de código",
      "Un linter de C#",
      "Un framework web",
      "El compilador de C# expuesto como servicio: permite construir analyzers, code fixes, source generators, herramientas de refactoring. La base de IntelliSense en Visual Studio"
    ],
    correct: 3,
    difficulty: "C",
    explanation: "Roslyn: 'Compiler as a Service'. DiagnosticAnalyzer para errores/warnings customizados. CodeFixProvider para sugerir arreglos. ISourceGenerator para generar código. Fundamental para tooling y DX."
  },
  {
    question: "¿Qué es el patrón Mediator con MediatR en C#?",
    options: [
      "Un tipo de middleware",
      "Solo para CQRS",
      "Un patrón que desacopla comandos/queries de sus handlers: enviar un IRequest<T> a través del mediador que lo enruta al handler correcto sin acoplamiento directo",
      "Es igual a Command pattern"
    ],
    correct: 2,
    difficulty: "C",
    explanation: "await mediator.Send(new CreateUserCommand(name, email)); El handler implementa IRequestHandler<CreateUserCommand, User>. Facilita CQRS, logging centralizado, validation pipeline (behaviors)."
  },
  {
    question: "¿Cómo funciona Entity Framework Core y sus tracked entities?",
    options: [
      "AsNoTracking es siempre mejor",
      "Solo genera SQL",
      "Es un ORM completo sin limitaciones",
      "EF Core rastrea los cambios en entidades que ha cargado; DbContext.SaveChanges() genera SQL para los cambios detectados. Estrategias: Connected (tracked) o Disconnected (AsNoTracking)"
    ],
    correct: 3,
    difficulty: "C",
    explanation: "AsNoTracking: mejor para queries de solo lectura (menor overhead). Connected: modificar la entidad y SaveChanges() actualiza. Para escenarios web (disconnected): usar Update() o Attach() al reconectar."
  },
  {
    question: "¿Qué son los filtros globales de queries en EF Core?",
    options: [
      "Solo para WHERE clauses",
      "HasQueryFilter: agrega un filtro global a todas las queries de una entidad: modelBuilder.Entity<Post>().HasQueryFilter(p => !p.EsBorrado). Implementa soft delete y multi-tenancy automáticamente",
      "Filtros para controladores",
      "Un tipo de stored procedure"
    ],
    correct: 1,
    difficulty: "C",
    explanation: "modelBuilder.Entity<Usuario>().HasQueryFilter(u => u.TenantId == currentTenantId). Todas las queries de Usuario tienen el filtro automáticamente. Se puede ignorar con IgnoreQueryFilters()."
  },
  {
    question: "¿Qué es el patrón Specification en C# para queries?",
    options: [
      "Encapsula los criterios de una query como un objeto: ISpecification<T> con Criteria, Include, OrderBy. Permite combinar specs y reusar criterios sin duplicar código",
      "Una especificación técnica",
      "Solo para EF Core",
      "Es igual a Repository"
    ],
    correct: 0,
    difficulty: "C",
    explanation: "new ActiveUserSpec().And(new UserByRoleSpec(Role.Admin)). El repository aplica la spec al IQueryable. Ardalis.Specification es una librería popular. Permite unit testing de specs independientemente."
  },
  {
    question: "¿Qué son los ValueObjects en DDD implementados con Records en C#?",
    options: [
      "Primitivos mejorados",
      "Solo para dinero",
      "Objetos sin identidad definidos por su valor: record Dinero(decimal Monto, string Moneda). Inmutables, igualdad por valor, self-validating. Reemplaza primitivos con semántica de dominio",
      "Son solo clases"
    ],
    correct: 2,
    difficulty: "C",
    explanation: "record Email(string Value) { Email(string value) { Value = value.Contains('@') ? value : throw new ArgumentException(); } } Previene el uso incorrecto de primitivos ('primitive obsession')."
  },
  {
    question: "¿Cómo funciona el patrón Outbox con EF Core?",
    options: [
      "Una bandeja de salida",
      "Solo con Kafka",
      "Un tipo de Repository",
      "Almacenar eventos de dominio en la misma transacción de BD: tabla OutboxMessage insertada junto con el cambio de entidad. Un background worker publica los mensajes pendientes"
    ],
    correct: 3,
    difficulty: "C",
    explanation: "await using var tx = await db.Database.BeginTransactionAsync(); db.Pedidos.Add(pedido); db.OutboxMessages.Add(new OutboxMessage(evento)); await db.SaveChangesAsync(); await tx.CommitAsync();"
  },
  {
    question: "¿Qué son los Minimal APIs en ASP.NET Core 6+?",
    options: [
      "APIs simples sin frameworks",
      "Una forma concisa de definir endpoints HTTP sin controllers ni atributos: app.MapGet(\"/users\", handler) con tipado fuerte, validación y DI integrada",
      "Solo para microservicios",
      "Son menos potentes que controllers"
    ],
    correct: 1,
    difficulty: "C",
    explanation: "app.MapPost(\"/users\", async (CreateUserDto dto, IUserService svc) => { var user = await svc.Create(dto); return Results.Created($\"/users/{user.Id}\", user); }); Más rápido que controllers para APIs simples."
  },
  {
    question: "¿Qué es el Health Check en ASP.NET Core?",
    options: [
      "Endpoints que reportan el estado de la aplicación y sus dependencias; integrado con Kubernetes readiness/liveness probes; IHealthCheck para custom checks",
      "Un tipo de middleware",
      "Solo para monitoreo",
      "Una verificación de contraseñas"
    ],
    correct: 0,
    difficulty: "C",
    explanation: "services.AddHealthChecks().AddDbContextCheck<AppDbContext>().AddUrlGroup(new Uri(\"http://api\")).AddCheck<CustomCheck>(\"custom\"); app.MapHealthChecks(\"/health\");"
  },
  {
    question: "¿Qué es OpenTelemetry en .NET y cómo se configura?",
    options: [
      "Una librería de logs",
      "Solo para microservicios",
      "Es solo para Azure",
      "Un estándar de observabilidad: traces, metrics y logs exportados a Jaeger, Prometheus, etc. .NET Activity API es la base; AddOpenTelemetry() en ASP.NET Core configura todo"
    ],
    correct: 3,
    difficulty: "C",
    explanation: "builder.Services.AddOpenTelemetry().WithTracing(b => b.AddAspNetCoreInstrumentation().AddHttpClientInstrumentation().AddOtlpExporter()).WithMetrics(b => b.AddAspNetCoreInstrumentation().AddPrometheusExporter());"
  },
  {
    question: "¿Qué es el Channel Pipeline pattern con System.IO.Pipelines?",
    options: [
      "Un framework para procesamiento de datos de alta performance: PipeReader y PipeWriter sin copias innecesarias, gestión de backpressure integrada; base del servidor Kestrel",
      "Es igual a Stream",
      "Solo para archivos",
      "Tuberías del SO"
    ],
    correct: 0,
    difficulty: "C",
    explanation: "PipeReader/PipeWriter eliminan copias intermedias. ReadResult contiene ReadOnlySequence<byte>. Kestrel usa Pipelines internamente para alcanzar millones de requests/segundo."
  },
  {
    question: "¿Cómo funciona el Rate Limiting en ASP.NET Core 7+?",
    options: [
      "System.Threading.RateLimiting: Fixed Window, Sliding Window, Token Bucket, Concurrency Limiter. app.UseRateLimiter() + [EnableRateLimiting(\"policy\")] en controladores/endpoints",
      "Es una librería de terceros",
      "Solo con middleware externo",
      "Solo con Redis"
    ],
    correct: 0,
    difficulty: "C",
    explanation: "builder.Services.AddRateLimiter(opts => opts.AddFixedWindowLimiter(\"api\", o => { o.PermitLimit = 100; o.Window = TimeSpan.FromMinutes(1); }));"
  },
  {
    question: "¿Qué es el Nullable Reference Types en C# 8 y cómo mejora la seguridad?",
    options: [
      "Con #nullable enable, el compilador distingue entre string (nunca null) y string? (puede ser null); emite warnings cuando puede haber NullReferenceException. Reduce bugs en producción",
      "Es solo una advertencia",
      "No funciona con genéricos",
      "Solo para tipos nullable"
    ],
    correct: 0,
    difficulty: "C",
    explanation: "Con nullable enabled: string? s = null; string s2 = s; // Warning: s podría ser null. if (s != null) { string s3 = s; } // OK. Los attributes [NotNull], [MaybeNull] dan hints al compilador."
  },
  {
    question: "¿Qué es el patrón Chain of Responsibility con ASP.NET Core Middleware?",
    options: [
      "Una cadena de if/else",
      "Un tipo de filtro",
      "Los middlewares en ASP.NET Core forman una cadena: cada uno puede procesar la request, llamar al siguiente (next()) o cortocircuitar; base de autenticación, logging, rate limiting",
      "Es solo para logging"
    ],
    correct: 2,
    difficulty: "C",
    explanation: "app.Use(async (context, next) => { // antes del siguiente middleware await next(); // después del siguiente middleware }). El orden de los middlewares importa: UseAuthentication() antes de UseAuthorization()."
  },
  {
    question: "¿Qué son los Background Tasks con Hangfire en .NET?",
    options: [
      "Tareas en segundo plano del SO",
      "Es igual a Quartz.NET",
      "Solo con IHostedService",
      "Hangfire persiste jobs en BD y los ejecuta en background; soporta: fire-and-forget, delayed, recurring, continuations. Surviving server restarts y clustering"
    ],
    correct: 3,
    difficulty: "C",
    explanation: "BackgroundJob.Enqueue(() => SendEmail(userId)); BackgroundJob.Schedule(() => SendReminder(id), TimeSpan.FromDays(1)); RecurringJob.AddOrUpdate(() => CleanupOldData(), Cron.Daily);"
  },
  {
    question: "¿Qué es el Minimal API con OpenAPI en ASP.NET Core?",
    options: [
      "Solo para producción",
      "Swashbuckle o Microsoft.AspNetCore.OpenApi generan la especificación OpenAPI automáticamente desde el código de Minimal APIs o controllers; con WithOpenApi() en endpoints",
      "Es igual a Swagger UI",
      "Solo documentación"
    ],
    correct: 1,
    difficulty: "C",
    explanation: "app.MapGet(\"/users/{id}\", GetUser).WithOpenApi(op => { op.Description = \"Get user by ID\"; return op; }); También se pueden añadir schema filters, security requirements, etc."
  },
  {
    question: "¿Qué es el patrón Decorator en C# con interfaces?",
    options: [
      "Es igual a herencia",
      "Un atributo especial",
      "Solo con DI",
      "Envolver una implementación con otra que añade comportamiento: class LoggingUserRepo : IUserRepo { LoggingUserRepo(IUserRepo inner) ... GetUser(id) → log + inner.GetUser(id) }"
    ],
    correct: 3,
    difficulty: "C",
    explanation: "Con DI: services.Decorate<IUserRepo, LoggingUserRepo>() (Scrutor). O manualmente: services.AddScoped<IUserRepo>(sp => new LoggingUserRepo(new EfUserRepo(sp.GetService<DbContext>())));"
  },
  {
    question: "¿Qué es el Roslyn analyzer y cómo ayuda a la calidad del código?",
    options: [
      "Solo StyleCop",
      "Solo en build",
      "Solo para formato",
      "Los analyzers de Roslyn verifican reglas en tiempo real en el IDE: detección de anti-patrones, problemas de rendimiento, security issues. Se distribuyen como NuGet. La base de .editorconfig y tooling moderno"
    ],
    correct: 3,
    difficulty: "C",
    explanation: "Packages como Microsoft.CodeAnalysis.Analyzers, Roslynator, SonarAnalyzer. Custom analyzer: DiagnosticAnalyzer que analiza el SyntaxTree y reporta diagnósticos. Esencial para mantener estándares de código."
  },
  {
    question: "¿Qué son los Interceptors en C# 12?",
    options: [
      "Solo para performance",
      "Permiten que un source generator reemplace llamadas a métodos específicos en tiempo de compilación; útil para AOT, logging, caching transparente sin reflection",
      "Son iguales a AOP",
      "Interceptan excepciones"
    ],
    correct: 1,
    difficulty: "C",
    explanation: "Los interceptors tienen la sintaxis [InterceptsLocation] y permiten sustituir llamadas de forma estática. EF Core los usa para interceptar métodos de SaveChanges y queries en el contexto de AOT."
  },
  {
    question: "¿Qué es el Dependency Inversion Principle (DIP) en C#?",
    options: [
      "Solo para testing",
      "Inyección de dependencias",
      "Es lo mismo que IoC",
      "Las clases de alto nivel no deben depender de las de bajo nivel; ambas deben depender de abstracciones (interfaces). Implementado con DI: el container crea y provee las implementaciones concretas"
    ],
    correct: 3,
    difficulty: "C",
    explanation: "class PedidoService(IInventario inventario, IEmail email) en lugar de new Inventario(), new SmtpEmail(). Depender de interfaces permite cambiar implementaciones, usar mocks en tests, y separar concerns."
  },
  {
    question: "¿Qué es el Testing en C# con xUnit y Moq?",
    options: [
      "Solo NUnit",
      "No hay framework estándar",
      "xUnit: framework de testing moderno. [Fact] para tests sin parámetros, [Theory] con [InlineData]. Moq: crear mocks de interfaces. FluentAssertions: assertions expresivas",
      "Solo MSTest"
    ],
    correct: 2,
    difficulty: "C",
    explanation: "[Theory][InlineData(2, 3, 5)] void Suma(int a, int b, int esperado) { var svc = new Mock<IServicio>(); svc.Setup(s => s.Calcular(a,b)).Returns(esperado); resultado.Should().Be(esperado); }"
  },
  {
    question: "¿Cómo funciona el Native AOT compilation en .NET?",
    options: [
      "Compila la aplicación a código nativo directamente (sin JIT en runtime); startup instantáneo, menor uso de memoria, pero sin generación de código dinámico, reflexión limitada, sin todos los tipos en runtime",
      "Es igual a SelfContained",
      "Solo para .NET MAUI",
      "Compilación a bytecode optimizada"
    ],
    correct: 0,
    difficulty: "B",
    explanation: "dotnet publish -r win-x64 -p:PublishAot=true. Requiere evitar reflection, Type.GetType() dinámico, DynamicMethod. Source generators y trimming analysis aseguran compatibilidad. gRPC, Minimal APIs son compatibles."
  },
  {
    question: "¿Qué es el Trimming y Tree Shaking en .NET?",
    options: [
      "Es automático sin configuración",
      "Es igual a AOT",
      "Comprimir el binario",
      "El linker de .NET elimina código no alcanzable (unreachable) del binario final; reduce dramáticamente el tamaño; puede romper código que usa reflexión sin TrimmerRootDescriptors"
    ],
    correct: 3,
    difficulty: "B",
    explanation: "PublishTrimmed=true. Los analizadores de trimming detectan patrones peligrosos (reflection). [DynamicallyAccessedMembers] anota qué miembros se preservan. Fundamental para producir binarios pequeños."
  },
  {
    question: "¿Qué es el IMemoryCache vs IDistributedCache en ASP.NET Core?",
    options: [
      "IMemoryCache: cache en proceso (rápida, no compartida entre instancias). IDistributedCache: cache externa (Redis, SQL Server) compartida entre instancias; serialización requerida",
      "Son iguales",
      "Redis siempre es mejor",
      "MemoryCache es obsoleta"
    ],
    correct: 0,
    difficulty: "B",
    explanation: "Para una sola instancia o sesión de usuario: MemoryCache. Para múltiples instancias o microservicios: DistributedCache con Redis. IMemoryCache tiene size limit, eviction policies, change tokens."
  },
  {
    question: "¿Cómo funciona el Streaming de respuestas HTTP en ASP.NET Core?",
    options: [
      "Solo para archivos",
      "Solo con WebSockets",
      "IAsyncEnumerable<T> retornado desde Minimal APIs/Controllers se transmite como JSON stream; Server-Sent Events con IAsyncEnumerable; gRPC streaming para bidireccional",
      "No es posible en ASP.NET"
    ],
    correct: 2,
    difficulty: "B",
    explanation: "async IAsyncEnumerable<string> GetStreamAsync() retornado desde un endpoint de Minimal API: el cliente recibe los items a medida que se generan. Útil para AI completions, large datasets, real-time updates."
  },
  {
    question: "¿Qué es el Distributed Application Runtime (Dapr) con .NET?",
    options: [
      "Un runtime de .NET especial",
      "Es un framework de microservicios",
      "Solo para Kubernetes",
      "Un sidecar que provee building blocks (state, pubsub, service invocation, secrets) de forma agnóstica al lenguaje; el .NET SDK hace el bridge entre la app y el sidecar Dapr"
    ],
    correct: 3,
    difficulty: "B",
    explanation: "daprClient.PublishEventAsync(\"pubsub\", \"orders\", order); daprClient.GetStateAsync<User>(\"statestore\", userId). Los building blocks son configurables (Redis, Kafka, Cosmos DB) sin cambiar el código."
  },
  {
    question: "¿Cómo implementar DDD (Domain-Driven Design) con C#?",
    options: [
      "Solo con interfaces",
      "Solo para proyectos grandes",
      "Es un framework",
      "Entities (identidad), Value Objects (records), Aggregates (raíz con invariantes), Domain Events, Repositories, Domain Services. MediatR + FluentValidation + EF Core + la infraestructura"
    ],
    correct: 3,
    difficulty: "B",
    explanation: "Aggregate root: public class Order { private List<OrderLine> _lines; public void AddLine(Product p, int qty) { /* invariante: stock */ _lines.Add(new OrderLine(p, qty)); AddDomainEvent(new LineAdded()); } }"
  },
  {
    question: "¿Qué es el Event Sourcing con Marten en C#?",
    options: [
      "Es igual a CDC",
      "Guardar eventos en logs",
      "Solo con Event Store",
      "Almacenar el historial completo de eventos en lugar del estado actual; el estado se reconstruye aplicando eventos. Marten (PostgreSQL) es la solución .NET más usada"
    ],
    correct: 3,
    difficulty: "B",
    explanation: "session.Events.Append(orderId, new OrderCreated(), new ItemAdded()); var order = await session.Events.AggregateStreamAsync<Order>(orderId); El estado se reconstruye desde los eventos."
  },
  {
    question: "¿Qué es el gRPC y cómo se usa en .NET?",
    options: [
      "Un protocolo HTTP diferente",
      "Protocol Buffers + HTTP/2: alta performance, tipado fuerte, streaming bidireccional. En .NET: definir .proto, generar código con Grpc.Tools, implementar el servicio en C#",
      "Es más lento que REST",
      "Es solo para Go"
    ],
    correct: 1,
    difficulty: "B",
    explanation: "service UserService { rpc GetUser (UserRequest) returns (UserResponse); } En .NET: class UserServiceImpl : UserService.UserServiceBase { override async Task<UserResponse> GetUser(...) }. Ideal para comunicación entre microservicios."
  },
  {
    question: "¿Cómo funciona el System.Text.Json vs Newtonsoft.Json?",
    options: [
      "Son iguales",
      "Newtonsoft es obsoleto",
      "STJ es siempre peor",
      "System.Text.Json (STJ): más rápido, integrado en .NET, sin reflection con source generators, para Native AOT. Newtonsoft: más features, más flexible, más maduro, mejor para casos edge"
    ],
    correct: 3,
    difficulty: "B",
    explanation: "STJ con source generators: [JsonSerializable(typeof(User))] partial class AppJsonContext : JsonSerializerContext. Sin reflection: compatible con AOT y Trimming. Newtonsoft: usar cuando STJ tiene limitaciones."
  },
  {
    question: "¿Qué es el Pattern Matching en switch expressions avanzado?",
    options: [
      "Solo con tipos simples",
      "Solo comparación básica",
      "Solo en C# 11+",
      "List patterns [_, var second, ..], Property patterns { Prop: value }, Positional patterns (x, y) en records, Slice patterns ..rest. Cobertura exhaustiva con sealed classes"
    ],
    correct: 3,
    difficulty: "B",
    explanation: "result switch { [var first, .. var rest] when rest.Length > 0 => f(first, rest), [var single] => single, [] => throw new EmptyException() }. El compilador verifica exhaustividad con sealed/enum."
  },
  {
    question: "¿Qué es el inline array en C# 12?",
    options: [
      "Arrays más eficientes",
      "[InlineArray(N)] struct permite crear buffers de tamaño fijo en structs, equivalente a inline arrays en C/Rust; sin heap allocation, acceso como arrays normales",
      "Solo para unsafe code",
      "Son igual a stackalloc"
    ],
    correct: 1,
    difficulty: "B",
    explanation: "[InlineArray(4)] struct Float4 { float _element; } Float4 v; v[0] = 1.0f; v[1] = 2.0f; El compilador genera acceso a los elementos como campos inline. Usado internamente en el runtime para buffers de alto rendimiento."
  },
  {
    question: "¿Cómo funciona el Thread Pool en .NET y su configuración?",
    options: [
      "El ThreadPool de .NET gestiona un conjunto de hilos worker y I/O; usa work-stealing; se ajusta automáticamente pero puede configurarse con SetMinThreads/SetMaxThreads; crucial para async performance",
      "Un pool fijo de hilos",
      "Se configura con config.json",
      "Es igual a Task.Run"
    ],
    correct: 0,
    difficulty: "B",
    explanation: "ThreadPool.SetMinThreads(workerThreads, completionPortThreads) reduce la latencia inicial. El ThreadPool injection algorithm añade hilos gradualmente. Demasiados Min threads puede causar contención."
  },
  {
    question: "¿Qué es el Lock contention y cómo mitigarlo en C#?",
    options: [
      "Solo con monitor",
      "Cuando múltiples threads compiten por el mismo lock; síntoma: CPU alta con poco trabajo real; solución: lock granularity fina, ConcurrentDictionary, Interlocked, ReaderWriterLockSlim",
      "Un deadlock específico",
      "Es un bug del OS"
    ],
    correct: 1,
    difficulty: "B",
    explanation: "ReaderWriterLockSlim: múltiples lectores concurrentes, un escritor exclusivo. ConcurrentDictionary: operaciones atómicas sin lock externo. Interlocked.Increment: operación atómica sin lock. SemaphoreSlim para async."
  },
  {
    question: "¿Qué es el Kestrel y su arquitectura de alto rendimiento?",
    options: [
      "El servidor web de .NET: sin-IIS, cross-platform, de altísimo rendimiento. Usa System.IO.Pipelines, async I/O, HTTP/2 y HTTP/3 (QUIC). Puede manejar millones de requests/segundo",
      "Un framework web",
      "Es un reverse proxy",
      "Solo para Linux"
    ],
    correct: 0,
    difficulty: "B",
    explanation: "Kestrel en benchmarks TechEmpower: consistentemente entre los servidores más rápidos. System.IO.Pipelines: cero copias. Múltiples protocols: HTTP/1.1, HTTP/2, HTTP/3 (QUIC). Directo a producción sin reverse proxy en muchos casos."
  },
  {
    question: "¿Qué es el Output Caching en ASP.NET Core 7+?",
    options: [
      "Es igual a ResponseCaching",
      "Cachea la respuesta HTTP completa del endpoint; configurable por ruta, query params, headers; compatible con CDN. app.UseOutputCache() + [OutputCache] atributo o .CacheOutput()",
      "Solo para páginas HTML",
      "Cache de ViewResult"
    ],
    correct: 1,
    difficulty: "B",
    explanation: "app.MapGet(\"/productos\", GetProductos).CacheOutput(x => x.Expire(TimeSpan.FromMinutes(5)).Tag(\"productos\")); OutputCacheStore.EvictByTagAsync(\"productos\") invalida cuando cambian los datos."
  },
  {
    question: "¿Cómo funciona el modelo de actor con Orleans en .NET?",
    options: [
      "Solo en Azure",
      "Microsoft Orleans implementa el modelo de actor (Grains): actores distribuidos con estado que se activan automáticamente. Granos en silos distribuidos, virtual actors, sin gestión manual de threading",
      "Es igual a Akka.NET",
      "Solo para juegos"
    ],
    correct: 1,
    difficulty: "A",
    explanation: "[StatelessWorker] class StatelessGrain. Grains se activan al primer mensaje y se desactivan por timeout. La plataforma gestiona activación, desactivación, placement, persistence automáticamente."
  },
  {
    question: "¿Qué es el .NET Aspire y cómo cambia el desarrollo de microservicios?",
    options: [
      "Es igual a Docker Compose",
      "Un framework web",
      "Solo para Azure",
      "Un stack de desarrollo local para aplicaciones distribuidas: orquestación de servicios en desarrollo (sin Docker Compose manual), service discovery, observabilidad integrada, compatibilidad con Azure"
    ],
    correct: 3,
    difficulty: "A",
    explanation: ".NET Aspire 8+ (GA): AppHost define la arquitectura local. var redis = builder.AddRedis(\"cache\"); var api = builder.AddProject<Projects.Api>().WithReference(redis). Dashboard integrado con traces, metrics, logs."
  },
  {
    question: "¿Cómo implementar resiliency patterns con Polly en .NET?",
    options: [
      "Es igual a Rate Limiting",
      "Solo try/catch",
      "Polly: librería de resiliencia que implementa Retry, Circuit Breaker, Timeout, Bulkhead, Hedging, Fallback como pipelines: ResiliencePipelineBuilder combinando estrategias",
      "Solo con async"
    ],
    correct: 2,
    difficulty: "A",
    explanation: "new ResiliencePipelineBuilder<HttpResponseMessage>().AddRetry(retryOptions).AddCircuitBreaker(cbOptions).AddTimeout(TimeSpan.FromSeconds(10)).Build(). .NET 8 integra Polly en AddHttpClient directamente."
  },
  {
    question: "¿Qué es el YARP (Yet Another Reverse Proxy) en .NET?",
    options: [
      "Es igual a nginx",
      "Solo para microservicios",
      "Un servidor web nuevo",
      "Un reverse proxy completamente en .NET: configurable en código o config file, extensible con middleware, soporta load balancing, transformaciones, service discovery"
    ],
    correct: 3,
    difficulty: "A",
    explanation: "services.AddReverseProxy().LoadFromConfig(config.GetSection(\"ReverseProxy\")); app.MapReverseProxy(); Las transformaciones permiten modificar requests/responses. Health checks, affinity, retry built-in."
  },
  {
    question: "¿Cómo funciona el Model Binding y Validation en ASP.NET Core?",
    options: [
      "Model binding: mapea request (query, route, body, headers) a parámetros. Validation: [Required], [Range], IValidatableObject, FluentValidation. Problema N+1: validar en el modelo vs capa de aplicación",
      "Solo para JSON",
      "Solo con atributos",
      "Es automático siempre"
    ],
    correct: 0,
    difficulty: "A",
    explanation: "Minimal APIs: [AsParameters] para binding de queries complejos. Endpoint Filters para validación centralizada. FluentValidation con AbstractValidator<T> permite validaciones complejas con DI."
  },
  {
    question: "¿Qué son los Compile-Time Safety patterns en C# para sistemas críticos?",
    options: [
      "Solo con formal methods",
      "Solo con unsafe code",
      "Combinar: readonly structs, immutable records, value objects, sealed hierarchies con pattern matching exhaustivo, nullable reference types habilitados, analyzers; para sistemas donde los errores en runtime son inaceptables",
      "Solo usando sealed"
    ],
    correct: 2,
    difficulty: "A",
    explanation: "Ejemplo: tipo discriminado sealed + switch exhaustivo + records inmutables + nullable enabled + analyzers = sistema donde muchas clases de bugs se convierten en errores de compilación."
  },
  {
    question: "¿Cómo diseñar un sistema multi-tenant en ASP.NET Core?",
    options: [
      "Con solo headers",
      "Una BD por tenant siempre",
      "IHttpContextAccessor + middleware para extraer tenant, ICurrentTenant para acceso; EF Core HasQueryFilter por tenant; opcionalmente: schemas separados o BDs separadas; autenticación multi-tenant con OAuth",
      "Con URL params siempre"
    ],
    correct: 2,
    difficulty: "A",
    explanation: "services.AddScoped<ITenantContext, TenantContext>(); El middleware extrae el tenant de: subdominio, header, claims. HasQueryFilter(e => e.TenantId == tenantContext.Id). Row-Level Security en PostgreSQL como defensa en profundidad."
  },
  {
    question: "¿Qué es el messaging con MassTransit en .NET?",
    options: [
      "Un framework de emails",
      "Es igual a SignalR",
      "Una abstracción sobre brokers de mensajería (RabbitMQ, Azure Service Bus, Kafka, Amazon SQS): produce/consume mensajes, sagas para transacciones distribuidas, request/response",
      "Solo para Kafka"
    ],
    correct: 2,
    difficulty: "A",
    explanation: "Bus.Factory.CreateUsingRabbitMq(cfg => { cfg.ReceiveEndpoint(\"orders\", ep => ep.Consumer<OrderCreatedConsumer>()); }); Sagas: persistencia de estado de long-running processes. Courier: distributed transactions."
  },
  {
    question: "¿Cómo funciona el SignalR y sus fallbacks en ASP.NET Core?",
    options: [
      "Solo WebSockets",
      "SignalR abstrae la comunicación en tiempo real: WebSockets (preferred), Server-Sent Events, Long Polling como fallbacks. Hubs para server→clients, clients→server. Scale-out con backplane Redis",
      "Es solo WebSockets",
      "Solo para chat"
    ],
    correct: 1,
    difficulty: "A",
    explanation: "hub.Clients.Group(groupName).SendAsync(\"MessageReceived\", msg). Scale-out: services.AddSignalR().AddStackExchangeRedis(redisConnection). .NET client: hubConnection.On<Message>(\"MessageReceived\", handler)."
  },
  {
    question: "¿Qué es el sistema de Feature Flags en ASP.NET Core?",
    options: [
      "Solo con #if",
      "Es solo para A/B testing",
      "Microsoft.FeatureManagement: feature flags gestionados por configuración o servicios externos (Azure App Config, LaunchDarkly); [FeatureGate(\"MiFeature\")] en controllers, IFeatureManager para code-level",
      "Banderas de compilación"
    ],
    correct: 2,
    difficulty: "A",
    explanation: "await featureManager.IsEnabledAsync(\"NuevaDashboard\"). Azure App Config con targeting filter: habilitar para % de usuarios o grupos específicos. Permite: dark launches, canary releases, trunk-based development."
  },
  {
    question: "¿Cómo implementar un Domain Event Bus completamente decoupled con transaccional outbox en C#?",
    options: [
      "Con eventos de C# y Task.Run",
      "Tabla OutboxMessage en misma transacción de EF Core + IHostedService que lee y publica en MassTransit/Kafka + idempotency key + dead letter queue + métricas de lag. Todo sin acoplamiento en el dominio",
      "Solo con Kafka",
      "Con eventos normales de C#"
    ],
    correct: 1,
    difficulty: "S",
    explanation: "DomainEvent.Raise() los acumula en el aggregate. SaveChanges los persiste en Outbox. Background service los publica. Los consumidores son idempotentes (check idempotency_key). Garantiza at-least-once con deduplication."
  },
  {
    question: "¿Cómo diseñar un sistema de Query Optimization en Entity Framework Core para high traffic?",
    options: [
      "Solo AsNoTracking",
      "Solo índices de BD",
      "Solo usar SQL crudo",
      "Compiled queries para queries repetitivas, Split Query para colecciones grandes, Bulk operations con EFCore.BulkExtensions, query result caching, DB connection resilience, read replicas para queries"
    ],
    correct: 3,
    difficulty: "S",
    explanation: "var getUser = EF.CompileAsyncQuery((DbContext db, int id) => db.Set<User>().FirstOrDefault(u => u.Id == id)); Compiled query: se compila el plan una sola vez. Split query: evita cartesian explosion en collections."
  },
  {
    question: "¿Cómo implementar un sistema de authorization basado en políticas y recursos en ASP.NET?",
    options: [
      "IAuthorizationHandler + AuthorizationPolicy + Resource-based: verificar que el usuario puede acceder al recurso específico (no solo si tiene el rol). RequireClaim, RequireRole, custom IAuthorizationRequirement",
      "Solo con [Authorize] roles",
      "Solo con middleware",
      "Solo JWT claims"
    ],
    correct: 0,
    difficulty: "S",
    explanation: "class DocumentEditRequirement : IAuthorizationRequirement {} class DocumentAuthHandler : AuthorizationHandler<DocumentEditRequirement, Document> { HandleRequirementAsync: verificar document.OwnerId == userId }"
  },
  {
    question: "¿Cómo funciona el .NET Memory Profiling y diagnóstico de memory leaks en producción?",
    options: [
      "Solo con Debug.WriteLine",
      "dotnet-dump, dotnet-trace, dotnet-monitor: captura de heap dumps en producción sin reiniciar. EventPipe para métricas de GC. PerfView para análisis offline. Identify: static references, event handler subscriptions, cache sin eviction",
      "Solo en desarrollo",
      "Solo con VS Profiler"
    ],
    correct: 1,
    difficulty: "S",
    explanation: "dotnet-monitor: expone endpoints para capturar dumps y traces. EventPipe: streaming de eventos de GC, allocations, exceptions. GC.Collect(2, GCCollectionMode.Forced, true, true) + GC.GetGCMemoryInfo() para análisis."
  },
  {
    question: "¿Cómo diseñar una API de alto rendimiento en .NET con cero allocaciones?",
    options: [
      "No es posible en C# managed",
      "Solo con unsafe",
      "Con arrays C",
      "Span<T>/Memory<T>/ArrayPool<T>/MemoryPool<T> para buffers, MemoryMarshal para reinterpretación de bytes, System.IO.Pipelines para I/O, struct callbacks, [SkipLocalsInit], unmanaged constraints"
    ],
    correct: 3,
    difficulty: "S",
    explanation: "ArrayPool<byte>.Shared.Rent(size) evita GC pressure. MemoryMarshal.Read<Header>(span) sin copia. [SkipLocalsInit] evita zeroing del stack. Benchmark con BenchmarkDotNet + MemoryDiagnoser para verificar cero allocaciones."
  },
  {
    question: "¿Cómo implementar un compiler plugin con Roslyn Source Generators?",
    options: [
      "Solo con T4 templates",
      "IIncrementalGenerator con SyntaxProvider.ForAttributeWithMetadataName: filtra por atributo, transforma el SyntaxTree y SemanticModel, genera código C# en SourceProductionContext.AddSource()",
      "Con reflection en build",
      "No es posible"
    ],
    correct: 1,
    difficulty: "S",
    explanation: "IncrementalGeneratorInitializationContext: CreateSyntaxProvider para filtrar, TransformNode con SemanticModel para analysis, pipeline RegisterSourceOutput para generar. Incremental: solo re-genera código afectado por cambios."
  },
  {
    question: "¿Qué es el .NET Performance Regression testing y cómo integrarlo en CI?",
    options: [
      "No es automatable",
      "Solo benchmarks locales",
      "Solo con profilers",
      "BenchmarkDotNet con ResultsExporter + comparación con baseline en Git; dotnet benchmark --compare; Perfolizer para análisis estadístico; integración en GitHub Actions con comentarios automáticos en PR"
    ],
    correct: 3,
    difficulty: "S",
    explanation: "BenchmarkDotNet: [MemoryDiagnoser] [BenchmarkCategory(\"critical\")] automáticamente en CI. Comparar con --compare para detectar regressions > 5%. dotnet/performance repo de Microsoft como referencia de cómo hacerlo."
  },
  {
    question: "¿Cómo funciona el AOT-compatible DI y cómo migrarlo desde el DI reflection-based?",
    options: [
      "No es compatible AOT",
      "Es automático",
      "Solo para servicios simples",
      "Con Native AOT: el DI container puede requerir Source Generated DI (Jab, Microsoft.Extensions.DependencyInjection con Source Generation). Los constructors y registrations se analizan en compile-time"
    ],
    correct: 3,
    difficulty: "S",
    explanation: "Jab source generator: [ServiceProvider][Scoped(typeof(IUserService), typeof(UserService))] partial class AppContainer. Genera el container completo en compilación. Microsoft.Extensions.DI con IServiceProviderIsService."
  }
];
