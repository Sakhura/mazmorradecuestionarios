window.questions_go = [
  {
    question: "¿Qué es Go (Golang)?",
    options: [
      "Un lenguaje interpretado de propósito general orientado a scripting web",
      "Una extensión del ecosistema Python para computación de alto rendimiento",
      "Lenguaje compilado, concurrente, con tipado estático creado por Google; famoso por goroutines y rendimiento",
      "Un lenguaje funcional con gestión manual de memoria similar a Haskell"
    ],
    correct: 2,
    difficulty: "E",
    explanation: "Go fue creado en Google por Rob Pike, Ken Thompson y Robert Griesemer. Compila a binario nativo, tiene GC y es muy eficiente."
  },
  {
    question: "¿Cómo se declara una variable en Go con inferencia de tipo?",
    options: [
      "var x = 5",
      "int x = 5",
      "let x = 5",
      "x := 5"
    ],
    correct: 3,
    difficulty: "E",
    explanation: ":= es el operador de declaración corta en Go. Infiere el tipo automáticamente dentro de funciones."
  },
  {
    question: "¿Cómo se imprime texto en Go?",
    options: [
      "System.out.println()",
      "fmt.Println()",
      "console.log()",
      "print()"
    ],
    correct: 1,
    difficulty: "E",
    explanation: "fmt.Println() del paquete fmt imprime texto con salto de línea. fmt.Printf() permite formateo estilo C."
  },
  {
    question: "¿Qué es un slice en Go?",
    options: [
      "Un array de tamaño fijo con capacidad declarada en tiempo de compilación",
      "Vista dinámica y flexible sobre un array subyacente; tiene longitud y capacidad",
      "Una estructura de mapa ordenado que permite acceso por índice numérico",
      "Una cadena de bytes con longitud variable similar a un buffer de texto"
    ],
    correct: 1,
    difficulty: "E",
    explanation: "Los slices son la estructura de datos secuencial principal en Go. Tienen len() y cap(). Se crean con make() o literales."
  },
  {
    question: "¿Cómo maneja Go los errores?",
    options: [
      "Con un manejador global registrado al inicio del programa mediante callbacks",
      "Con excepciones try-catch que propagan automáticamente por la pila de llamadas",
      "Lanzando panic en todas las situaciones de error para forzar recuperación explícita",
      "Retornando error como último valor de retorno; el caller lo verifica explícitamente"
    ],
    correct: 3,
    difficulty: "E",
    explanation: "Convención Go: func f() (Result, error). El caller hace: res, err := f(); if err != nil { ... }. Explícito y sin magia."
  },
  {
    question: "¿Qué es una goroutine?",
    options: [
      "Una función recursiva que se llama a sí misma con un contexto de cancelación",
      "Thread ultra-ligero gestionado por el runtime de Go; se inicia con la palabra clave go",
      "Un módulo independiente que encapsula lógica de negocio de forma aislada",
      "Un tipo de canal bidireccional que sincroniza dos funciones concurrentes"
    ],
    correct: 1,
    difficulty: "E",
    explanation: "go func() lanza la función como goroutine. Las goroutines son muy baratas (~2KB de stack inicial) vs threads del OS."
  },
  {
    question: "¿Qué es un channel en Go?",
    options: [
      "Conducto tipado para comunicación entre goroutines; se crea con make(chan T)",
      "Una estructura de slice compartida que múltiples goroutines pueden leer simultáneamente",
      "Un socket de red interno que conecta goroutines con servicios externos del sistema",
      "Una goroutine especial que actúa como intermediario entre otros procesos concurrentes"
    ],
    correct: 0,
    difficulty: "E",
    explanation: "ch := make(chan int). ch <- 5 envía. v := <-ch recibe. Los channels sincronizan goroutines siguiendo el principio CSP."
  },
  {
    question: "¿Cómo se define una interfaz en Go?",
    options: [
      "interface Nombre { métodos } — declarando el bloque directamente con llaves sin type",
      "interface{} Nombre — usando el tipo vacío seguido del nombre de la interfaz",
      "class Nombre implements Interface {} — heredando de una interfaz base del paquete",
      "type Nombre interface { Método() Tipo }"
    ],
    correct: 3,
    difficulty: "E",
    explanation: "Las interfaces en Go son implícitas: si un tipo tiene los métodos de la interfaz, la implementa automáticamente sin declaración explícita."
  },
  {
    question: "¿Qué hace <code>defer</code> en Go?",
    options: [
      "Ejecuta la función en un goroutine separado al completarse el bloque actual",
      "Pausa la ejecución del goroutine actual hasta que se cumpla una condición externa",
      "Pospone la ejecución de una función hasta que la función contenedora retorne; LIFO order",
      "Cancela una goroutine pendiente y libera los recursos asociados a ella"
    ],
    correct: 2,
    difficulty: "E",
    explanation: "defer es ideal para cleanup: defer file.Close() se ejecuta cuando la función retorna, aunque haya error."
  },
  {
    question: "¿Cuál es la diferencia entre <code>new</code> y <code>make</code> en Go?",
    options: [
      "Ambas funciones realizan la misma operación de asignación pero con sintaxis diferente",
      "make reserva memoria sin inicializar y devuelve el puntero al zero value del tipo",
      "new es una función obsoleta que fue reemplazada por make en versiones modernas de Go",
      "new asigna memoria y retorna puntero; make inicializa slices, maps y channels"
    ],
    correct: 3,
    difficulty: "E",
    explanation: "new(T) retorna *T con zero value. make([]int, 5) retorna slice inicializado. make solo funciona con slice, map y channel."
  },
  {
    question: "¿Qué es el zero value en Go?",
    options: [
      "El valor nil asignado a cualquier variable cuando no se inicializa explícitamente",
      "Un valor especial reservado para punteros que no apuntan a ninguna dirección válida",
      "El valor por defecto que tiene cada tipo no inicializado: 0 para números, '' para strings, nil para punteros/slices/maps",
      "Una constante de error que indica que la variable fue declarada pero nunca utilizada"
    ],
    correct: 2,
    difficulty: "E",
    explanation: "Go garantiza que toda variable tiene zero value: int→0, bool→false, string→'', pointer/slice/map/chan→nil. No hay variables no inicializadas."
  },
  {
    question: "¿Cómo se itera sobre un slice en Go?",
    options: [
      "slice.forEach() — usando el método de iteración funcional incorporado en el tipo slice",
      "for (item : slice) — con la sintaxis de bucle for mejorado al estilo de Java",
      "foreach item in slice — con la palabra clave foreach reservada para colecciones",
      "for i, v := range slice { }"
    ],
    correct: 3,
    difficulty: "E",
    explanation: "range retorna índice y valor. Solo índice: for i := range slice. Solo valor: for _, v := range slice (descarte con _)."
  },
  {
    question: "¿Qué es un struct en Go?",
    options: [
      "Un tipo de puntero que apunta a una región de memoria con campos heterogéneos",
      "Tipo compuesto que agrupa campos con nombres y tipos; base del OOP en Go",
      "Un array con campos nombrados que se almacena siempre en el heap de la JVM",
      "Una interfaz de datos que describe la forma de un objeto sin contener implementación"
    ],
    correct: 1,
    difficulty: "E",
    explanation: "type Person struct { Name string; Age int }. Los structs pueden tener métodos asociados mediante receivers."
  },
  {
    question: "¿Cómo se define un método en Go?",
    options: [
      "func (r Struct) Method() {}",
      "Struct::Method() {}",
      "func Struct.Method() {}",
      "method Struct.Method() {}"
    ],
    correct: 0,
    difficulty: "E",
    explanation: "func (p Person) Greet() string { return 'Hola ' + p.Name }. El receiver (p Person) asocia el método al tipo."
  },
  {
    question: "¿Qué diferencia hay entre receiver por valor y por puntero?",
    options: [
      "Receiver por valor recibe copia; puntero (*T) permite modificar el original y es más eficiente con structs grandes",
      "Ambos tipos de receiver producen el mismo comportamiento en tiempo de ejecución sin diferencias observables",
      "El receiver por puntero solo puede usarse con tipos primitivos como int, float y bool",
      "El receiver por valor siempre es más eficiente porque evita la indirección del puntero en memoria"
    ],
    correct: 0,
    difficulty: "E",
    explanation: "func (p *Person) SetName(n string) { p.Name = n } modifica el original. func (p Person) GetName() string no modifica. Consistencia: si algún método usa puntero, todos deberían."
  },
  {
    question: "¿Qué es panic en Go?",
    options: [
      "Termina la ejecución normal del programa; se puede recuperar con recover() en un defer",
      "Un tipo especial de error que se retorna como segundo valor en funciones con errores graves",
      "Una goroutine del sistema que monitorea el estado de la memoria y detiene fugas",
      "Un error de compilación que indica que una función no cumple los requisitos del compilador"
    ],
    correct: 0,
    difficulty: "E",
    explanation: "panic detiene la goroutine y ejecuta los defers pendientes. Es para situaciones verdaderamente irrecuperables, no para manejo normal de errores."
  },
  {
    question: "¿Cómo se exporta un símbolo en Go (visible desde otros paquetes)?",
    options: [
      "Usando la palabra clave export antes de la declaración, igual que en JavaScript/TypeScript",
      "Añadiendo la anotación @export sobre la función, tipo o constante que se quiere exportar",
      "Usando la palabra clave public antes del tipo, función o variable que se desea exportar",
      "Empezando con letra mayúscula: MiFuncion, MiTipo, MiConst"
    ],
    correct: 3,
    difficulty: "E",
    explanation: "En Go, la capitalización determina la visibilidad. MiFuncion es exportada; miFuncion es privada al paquete. No hay keywords public/private."
  },
  {
    question: "¿Qué es <code>go.mod</code>?",
    options: [
      "Un archivo de configuración que almacena las variables de entorno del proyecto Go",
      "El archivo que define el módulo, su ruta y dependencias; base del sistema de módulos de Go",
      "Un archivo de reglas de compilación similar al Makefile utilizado por el compilador",
      "Un archivo de configuración de despliegue para publicar paquetes en el registro central"
    ],
    correct: 1,
    difficulty: "E",
    explanation: "go.mod: module github.com/user/repo + go version + require dependencies. go.sum tiene checksums de seguridad."
  },
  {
    question: "¿Cómo se crea un map en Go?",
    options: [
      "m := map[string]int{'a': 1}",
      "map[string]int m — declarando el tipo antes del nombre como en C o Java",
      "map m = {} — usando la palabra clave map seguida del nombre y llaves vacías",
      "m = new Map() — usando el constructor genérico de la librería estándar de colecciones"
    ],
    correct: 0,
    difficulty: "E",
    explanation: "m := make(map[string]int) o m := map[string]int{'clave': valor}. Acceso: m['clave']. Verificar existencia: v, ok := m['clave']."
  },
  {
    question: "¿Qué hace <code>close(channel)</code>?",
    options: [
      "Bloquea el channel impidiendo que nuevos valores sean enviados o recibidos temporalmente",
      "Vacía el channel eliminando todos los valores pendientes que aún no han sido leídos",
      "Señala que no se enviarán más valores; los receptores pueden detectarlo con v, ok := <-ch",
      "Elimina el channel de memoria y libera todos los recursos que tenía reservados"
    ],
    correct: 2,
    difficulty: "E",
    explanation: "close() permite que receptores sepan que no habrá más datos. for v := range ch recibe hasta que se cierre. Cerrar dos veces causa panic."
  },
  {
    question: "¿Cómo funciona el scheduler de goroutines en Go?",
    options: [
      "Un scheduler del kernel del sistema operativo gestiona cada goroutine como un thread nativo",
      "GOMAXPROCS threads del OS ejecutan goroutines usando un scheduler M:N (multiplexing); work-stealing entre P (processors)",
      "Cada goroutine se ejecuta en su propio thread del sistema operativo con prioridad fija",
      "Las goroutines se ejecutan en orden FIFO estricto en un único thread del sistema operativo"
    ],
    correct: 1,
    difficulty: "D",
    explanation: "Runtime de Go: M (threads OS) ejecutan G (goroutines) en P (procesadores lógicos). GOMAXPROCS=num_CPUs. Work-stealing: P sin trabajo roba de otros P."
  },
  {
    question: "¿Qué es el patrón fan-out/fan-in en Go?",
    options: [
      "Un algoritmo de ordenamiento distribuido que divide y combina particiones de datos",
      "Fan-out: distribuir trabajo en múltiples goroutines; fan-in: combinar resultados de múltiples channels en uno",
      "Un patrón de composición de interfaces que combina múltiples contratos en uno solo",
      "Una forma de implementar pipelines de transformación secuencial de datos en streams"
    ],
    correct: 1,
    difficulty: "D",
    explanation: "Fan-out: for _, url := range urls { go fetch(url, ch) }. Fan-in: multiplexar múltiples channels en uno con select o una goroutine combinadora."
  },
  {
    question: "¿Qué hace <code>select</code> en Go?",
    options: [
      "Selecciona el elemento de un slice cuyo valor cumple con un predicado especificado",
      "Selecciona la goroutine con mayor prioridad para ejecutar en el siguiente ciclo del scheduler",
      "Evalúa múltiples condiciones booleanas en orden y ejecuta el primer caso verdadero encontrado",
      "Espera en múltiples operaciones de channel; ejecuta el primero listo (o default si hay)"
    ],
    correct: 3,
    difficulty: "D",
    explanation: "select { case v := <-ch1: ... case ch2 <- x: ... default: ... } — si múltiples están listos, elige uno aleatoriamente."
  },
  {
    question: "¿Qué es el context package en Go?",
    options: [
      "Un tipo de struct global que almacena variables de configuración del proceso en ejecución",
      "Propaga cancelación, deadlines y valores a través de jerarquías de goroutines y APIs",
      "Un paquete exclusivo para gestionar el ciclo de vida de peticiones HTTP entrantes",
      "El contexto de ejecución del sistema operativo que controla permisos del proceso Go"
    ],
    correct: 1,
    difficulty: "D",
    explanation: "context.WithCancel, WithTimeout, WithDeadline. Pasar ctx como primer parámetro es convención. Chequear ctx.Done() en loops de goroutines."
  },
  {
    question: "¿Cómo se implementa herencia en Go?",
    options: [
      "Usando la palabra clave extends seguida del nombre de la struct padre en la declaración",
      "Mediante el uso de mixins que inyectan métodos de otras structs en tiempo de compilación",
      "Go no tiene herencia; usa composición de structs (embedding) e interfaces",
      "Con herencia múltiple declarando varias structs padre separadas por comas en la definición"
    ],
    correct: 2,
    difficulty: "D",
    explanation: "Embedding: type Animal struct { ... }; type Dog struct { Animal; Breed string }. Dog tiene todos los métodos de Animal automáticamente (composición, no herencia)."
  },
  {
    question: "¿Qué es embedding de interfaces en Go?",
    options: [
      "Es equivalente a herencia de interfaces donde una interfaz hija extiende la padre con new",
      "Componer una interfaz de otras: type ReadWriter interface { Reader; Writer }",
      "Un mecanismo de generics que permite parametrizar interfaces con tipos arbitrarios",
      "Incluir una interfaz como campo de una struct para forzar la implementación implícita"
    ],
    correct: 1,
    difficulty: "D",
    explanation: "Las interfaces pueden embeberse en otras para combinar contratos: io.ReadWriter embebe io.Reader y io.Writer."
  },
  {
    question: "¿Qué hace <code>sync.WaitGroup</code>?",
    options: [
      "Espera a que un grupo de goroutines termine: Add(n), Done() en cada goroutine, Wait() para esperar",
      "Cancela todas las goroutines del grupo cuando una de ellas encuentra un error en ejecución",
      "Bloquea goroutines según un orden de prioridad basado en el tiempo de creación de cada una",
      "Une los resultados de múltiples goroutines en un único valor mediante una función reductora"
    ],
    correct: 0,
    difficulty: "D",
    explanation: "wg.Add(n) antes de lanzar. defer wg.Done() en cada goroutine. wg.Wait() bloquea hasta que el contador llegue a 0."
  },
  {
    question: "¿Qué es <code>sync.Mutex</code>?",
    options: [
      "Un tipo de channel con capacidad uno que actúa como semáforo binario entre goroutines",
      "Mutual exclusion lock: Lock() adquiere, Unlock() libera; garantiza acceso exclusivo a sección crítica",
      "Un semáforo del sistema operativo que limita el número de goroutines concurrentes activas",
      "Una estructura de datos que solo funciona para sincronizar accesos a maps concurrentes"
    ],
    correct: 1,
    difficulty: "D",
    explanation: "mu.Lock(); defer mu.Unlock(). RWMutex permite múltiples lectores simultáneos pero escritores exclusivos."
  },
  {
    question: "¿Cómo se hacen tests en Go?",
    options: [
      "Importando una librería externa como testify que provee un runner completo de tests",
      "Usando solo benchmarks que miden el rendimiento de las funciones en cada compilación",
      "Instalando un framework de testing especial como Jest o Mocha adaptado para Go",
      "Archivos _test.go con func TestNombre(t *testing.T) {}; ejecutar con go test"
    ],
    correct: 3,
    difficulty: "D",
    explanation: "go test ./... ejecuta todos los tests. t.Error(), t.Fatal(), t.Run(). Benchmarks: func BenchmarkX(b *testing.B). Tablas: TestX con subtests."
  },
  {
    question: "¿Qué es una closure en Go?",
    options: [
      "Una función que finaliza la ejecución del programa al ser invocada dentro de un goroutine",
      "Función que captura variables del scope exterior; las goroutines capturan la referencia, no el valor",
      "Un tipo de struct que encapsula datos privados junto con sus métodos de acceso públicos",
      "Una función declarada únicamente con nombre, sin parámetros ni cuerpo de implementación"
    ],
    correct: 1,
    difficulty: "D",
    explanation: "func makeAdder(x int) func(int) int { return func(y int) int { return x + y } }. Precaución en loops: capturar variable de loop puede causar bugs."
  },
  {
    question: "¿Qué es <code>io.Reader</code> e <code>io.Writer</code>?",
    options: [
      "Structs exclusivos del paquete net/http para manejar cuerpos de peticiones y respuestas",
      "Tipos concretos que representan archivos abiertos en modo lectura y escritura respectivamente",
      "Interfaces fundamentales de Go: Reader con Read([]byte) (int,error); Writer con Write([]byte) (int,error); composables",
      "Funciones del paquete os que solo operan sobre archivos del sistema de ficheros local"
    ],
    correct: 2,
    difficulty: "D",
    explanation: "La composabilidad de io.Reader/Writer es central en Go: archivos, HTTP bodies, buffers, compresión, cifrado implementan estas interfaces."
  },
  {
    question: "¿Qué hace <code>append</code> en Go?",
    options: [
      "Funciona exactamente como el método push() de arrays en JavaScript, añadiendo al final",
      "Siempre crea un nuevo backing array copiando todos los elementos aunque haya capacidad libre",
      "Reutiliza siempre el array subyacente original sin importar la capacidad disponible actual",
      "Añade elementos a un slice; puede crear nuevo backing array si la capacidad es insuficiente"
    ],
    correct: 3,
    difficulty: "D",
    explanation: "s = append(s, elem). Si cap(s) < len(s)+1, crea nuevo array con mayor capacidad (típicamente duplica). Siempre usar el valor retornado."
  },
  {
    question: "¿Qué son los blank identifiers <code>_</code>?",
    options: [
      "Una variable especial que almacena el último valor de retorno de una función para debugging",
      "Identificadores de variables privadas que solo son accesibles dentro del mismo archivo fuente",
      "Descarta valores no deseados sin asignarlos: _, err := f()",
      "Variables temporales que el compilador elimina automáticamente en el proceso de optimización"
    ],
    correct: 2,
    difficulty: "D",
    explanation: "_ descarta el valor. Útil para: ignorar el índice en range, ignorar retornos no necesarios, verificar que un tipo implementa una interfaz."
  },
  {
    question: "¿Cómo se verifica que un tipo implementa una interfaz?",
    options: [
      "Con instanceof en una expresión de verificación en tiempo de ejecución del programa",
      "No existe ningún mecanismo en Go para verificar interfaces fuera de la asignación directa",
      "Con el paquete reflect que inspecciona los métodos disponibles en el tipo en runtime",
      "var _ MiInterfaz = (*MiTipo)(nil) — falla en compilación si no la implementa"
    ],
    correct: 3,
    difficulty: "D",
    explanation: "var _ io.Writer = (*MyWriter)(nil) es una forma idiomática de verificar en compile-time que *MyWriter implementa io.Writer."
  },
  {
    question: "¿Qué son los type assertions en Go?",
    options: [
      "Una conversión de tipos primitivos que cambia la representación en memoria del valor",
      "Son equivalentes al casting explícito de C donde se fuerza la interpretación del puntero",
      "Una conversión segura entre tipos numéricos como int a float64 sin pérdida de precisión",
      "v, ok := i.(ConcreteType) — extrae el tipo concreto de una interfaz; ok=false si el tipo no coincide"
    ],
    correct: 3,
    difficulty: "D",
    explanation: "Type assertion: x := iface.(string). Versión segura: s, ok := iface.(string). Type switch: switch v := i.(type) { case string: ... }"
  },
  {
    question: "¿Qué es <code>recover()</code>?",
    options: [
      "Restaura el valor de una variable al estado que tenía antes de la última modificación",
      "Recupera el contenido de un archivo que fue cerrado sin guardar los cambios pendientes",
      "Reinicia una goroutine detenida por un error, volviendo al inicio de su función principal",
      "Captura el valor de un panic en curso, solo dentro de un defer; permite prevenir que el programa termine"
    ],
    correct: 3,
    difficulty: "D",
    explanation: "defer func() { if r := recover(); r != nil { fmt.Println('Recovered:', r) } }(). Solo recupera panics en la goroutine actual."
  },
  {
    question: "¿Qué son los variadic functions?",
    options: [
      "Funciones que aceptan número variable de argumentos del mismo tipo: func f(nums ...int)",
      "Funciones con parámetros marcados como opcionales que pueden omitirse en la llamada",
      "Funciones que retornan múltiples valores de diferentes tipos como tuplas en la firma",
      "Funciones cuyo tamaño del stack de ejecución crece dinámicamente en cada llamada recursiva"
    ],
    correct: 0,
    difficulty: "D",
    explanation: "func sum(nums ...int) int { total := 0; for _, n := range nums { total += n }; return total }. Llamar: sum(1,2,3) o sum(slice...)."
  },
  {
    question: "¿Qué es el <code>http.Handler</code> interface?",
    options: [
      "Un tipo concreto que solo puede usarse para registrar rutas en servidores HTTP básicos",
      "Una implementación de middleware que se encadena con otros handlers en un pipeline",
      "Interface central de net/http: ServeHTTP(ResponseWriter, *Request); cualquier struct que la implemente puede ser handler HTTP",
      "Un adaptador exclusivo para rutas GET que simplifica el registro de endpoints de solo lectura"
    ],
    correct: 2,
    difficulty: "D",
    explanation: "http.HandleFunc('/path', func(w http.ResponseWriter, r *http.Request) {}). El tipo http.HandlerFunc convierte funciones a Handler."
  },
  {
    question: "¿Qué hace <code>encoding/json</code>?",
    options: [
      "Solo codifica structs a formato JSON, sin capacidad de deserialización incluida en el paquete",
      "Solo deserializa JSON a structs Go, la codificación se maneja con otro paquete diferente",
      "Serializa (Marshal) y deserializa (Unmarshal) JSON; usa struct tags json:'campo' para mapeo",
      "Es una librería externa mantenida por terceros que debe instalarse con go get separado"
    ],
    correct: 2,
    difficulty: "D",
    explanation: "json.Marshal(struct) → []byte. json.Unmarshal(data, &struct). Struct tags: json:'name,omitempty'. Campos no exportados son ignorados."
  },
  {
    question: "¿Qué es <code>fmt.Errorf()</code> con <code>%w</code>?",
    options: [
      "Formatea un error como string simple sin preservar ninguna cadena de errores subyacente",
      "Crea un error que envuelve otro: fmt.Errorf('contexto: %w', err). errors.Is() y errors.As() pueden desenvolver la cadena",
      "Un tipo de función de logging que escribe mensajes de error con formato al stderr del proceso",
      "Una función que solo concatena mensajes de error sin mantener la referencia al error original"
    ],
    correct: 1,
    difficulty: "D",
    explanation: "Error wrapping: err = fmt.Errorf('failed to open: %w', err). errors.Is(err, os.ErrNotExist) desenvuelve la cadena. errors.As() extrae el tipo."
  },
  {
    question: "¿Cómo funciona la memoria en Go (escape analysis)?",
    options: [
      "Todas las variables siempre se asignan en el heap para garantizar su acceso entre goroutines",
      "Todas las variables siempre se asignan en el stack independientemente de su uso posterior",
      "El compilador decide: si un objeto no escapa la función, puede asignarse en stack; si escapa, va al heap (GC)",
      "El programador decide explícitamente dónde asignar cada variable usando directivas del compilador"
    ],
    correct: 2,
    difficulty: "C",
    explanation: "Escape analysis: go build -gcflags='-m' muestra qué escapa al heap. Retornar puntero a variable local → escapa. Variables locales sin escape → stack."
  },
  {
    question: "¿Qué son los channels buffered vs unbuffered?",
    options: [
      "La única diferencia entre ambos tipos es la velocidad de transferencia de los valores enviados",
      "Unbuffered: sender y receiver se sincronizan; Buffered: ch=make(chan T, n), sender bloquea solo cuando buffer lleno",
      "Los channels unbuffered no existen en Go real, todos tienen un tamaño de buffer por defecto",
      "Los channels buffered son siempre la mejor opción para cualquier caso de uso concurrente"
    ],
    correct: 1,
    difficulty: "C",
    explanation: "Unbuffered (capacidad 0): rendezvous — sender espera hasta que receiver esté listo. Buffered: comunicación asíncrona hasta n mensajes."
  },
  {
    question: "¿Qué es el pipeline pattern en Go?",
    options: [
      "Un tipo de stream reactivo que procesa eventos de red de forma asíncrona y no bloqueante",
      "Una implementación exclusiva para procesar peticiones HTTP en cadena con middlewares",
      "Serie de stages conectados por channels: cada stage lee de ch entrada, procesa, escribe a ch salida",
      "Un tipo de canal especial con múltiples suscriptores que reciben los mismos mensajes"
    ],
    correct: 2,
    difficulty: "C",
    explanation: "gen → square → print, cada uno corriendo como goroutine y comunicándose por channels. Permite composición funcional concurrente."
  },
  {
    question: "¿Qué es <code>sync.Once</code>?",
    options: [
      "Garantiza que una función se ejecute exactamente una vez, incluso en múltiples goroutines concurrentes",
      "Un tipo especializado de WaitGroup que espera a que exactamente una goroutine complete su tarea",
      "Un Mutex que se bloquea a sí mismo tras la primera adquisición sin posibilidad de liberación",
      "Ejecuta algo exactamente una vez por cada goroutine activa en el programa en ese momento"
    ],
    correct: 0,
    difficulty: "C",
    explanation: "var once sync.Once; once.Do(func() { initialize() }) — initialize() solo se ejecuta la primera vez, independientemente de cuántas goroutines llamen a Do."
  },
  {
    question: "¿Cómo se implementa un worker pool en Go?",
    options: [
      "Usando una librería especializada de terceros que gestiona el pool automáticamente con configuración",
      "Creando threads del sistema operativo directamente mediante llamadas al syscall de Go",
      "Usando el mecanismo panic/recover para controlar el ciclo de vida de los workers activos",
      "Crear N goroutines que leen de un jobs channel; resultados van a results channel; controlar concurrencia con WaitGroup"
    ],
    correct: 3,
    difficulty: "C",
    explanation: "Worker pool: jobs := make(chan Job, 100); for i:=0; i<workers; i++ { go worker(jobs, results) }; for _, j := range work { jobs <- j }; close(jobs)."
  },
  {
    question: "¿Qué es <code>atomic.AddInt64</code>?",
    options: [
      "Una operación de suma que bloquea el thread actual más lentamente que un Mutex normal",
      "Un tipo de channel unidireccional que acumula valores enteros enviados por goroutines",
      "Una función que solo puede ejecutarse en sistemas de 64 bits y falla en arquitecturas de 32 bits",
      "Operación atómica sin locks usando instrucciones CAS del CPU; más eficiente que sync.Mutex para contadores simples"
    ],
    correct: 3,
    difficulty: "C",
    explanation: "sync/atomic: AddInt64, LoadInt64, StoreInt64, CompareAndSwapInt64. Más eficiente que mutex para operaciones simples y frecuentes."
  },
  {
    question: "¿Qué es el testing table-driven en Go?",
    options: [
      "Un framework externo que genera automáticamente casos de prueba a partir del código fuente",
      "Tests que consultan una base de datos real para validar la lógica de persistencia del sistema",
      "Una técnica de benchmarking para medir el rendimiento de funciones en distintas condiciones",
      "Patrón de test que define casos en una tabla (slice de structs) y los itera con t.Run(): más mantenible y DRY"
    ],
    correct: 3,
    difficulty: "C",
    explanation: "tests := []struct{input, expected string}{ {'hello', 'HELLO'} }. for _, tt := range tests { t.Run(tt.input, func(t *testing.T) { ... }) }"
  },
  {
    question: "¿Qué es <code>go vet</code>?",
    options: [
      "Una herramienta que descarga y verifica la integridad de las dependencias del módulo actual",
      "Un formateador automático de código que aplica el estilo canónico de Go a todos los archivos",
      "Un comando que ejecuta todos los tests del proyecto e informa sobre los casos fallidos",
      "Analiza código Go buscando errores comunes: printf format mistakes, unreachable code, mutex copies"
    ],
    correct: 3,
    difficulty: "C",
    explanation: "go vet detecta: sync.Mutex copiado, printf sin argumentos, acceso a struct con Lock, tests que terminan sin t.Fatal. golangci-lint incluye más linters."
  },
  {
    question: "¿Qué son los generics en Go 1.18+?",
    options: [
      "Los generics no existen en Go y el lenguaje no tiene planes de incluirlos en el futuro",
      "Una característica experimental que solo funciona con tipos de slice y no con otros contenedores",
      "Parámetros de tipo: func Min[T constraints.Ordered](a, b T) T — permite código genérico type-safe",
      "Los generics se denominan templates en Go, siguiendo la nomenclatura del lenguaje C++ estándar"
    ],
    correct: 2,
    difficulty: "C",
    explanation: "func Map[T, U any](s []T, f func(T) U) []U — genéricos reales con constraints. constraints.Ordered, comparable, any (alias de interface{})."
  },
  {
    question: "¿Qué es <code>cmp.Diff</code> en testing?",
    options: [
      "Es parte de la librería estándar de Go en el paquete testing para comparar valores complejos",
      "Un tipo de assertion que lanza panic inmediatamente cuando dos valores no son iguales",
      "Una función de comparación superficial que solo verifica la igualdad del primer nivel del struct",
      "Del paquete google/go-cmp: compara structs y retorna diff legible para tests; mejor que reflect.DeepEqual"
    ],
    correct: 3,
    difficulty: "C",
    explanation: "cmp.Diff(expected, got) retorna string vacío si son iguales, o diff legible si difieren. Configurable con cmpopts para ignorar campos."
  },
  {
    question: "¿Qué es el memory model de Go?",
    options: [
      "Especificación de cuándo una goroutine puede leer valores escritos por otra; define happens-before para sync primitives",
      "Es idéntico al Java Memory Model con las mismas garantías de visibilidad y ordenamiento",
      "Un conjunto de reglas que describe cómo Go gestiona la asignación de RAM del sistema operativo",
      "Una especificación que solo aplica a las operaciones sobre channels y no a variables compartidas"
    ],
    correct: 0,
    difficulty: "C",
    explanation: "Go memory model: la comunicación por channel establece happens-before. Lecturas sin sincronización de variables compartidas son data races (detectar con -race)."
  },
  {
    question: "¿Qué hace el flag <code>-race</code>?",
    options: [
      "Habilita un modo de benchmarking para medir la velocidad de ejecución en condiciones de carga",
      "Ejecuta el programa en modo competitivo priorizando las goroutines con mayor uso de CPU",
      "Optimiza la compilación para maximizar el rendimiento del programa en sistemas multi-núcleo",
      "Activa el race detector: instrumenta el programa para detectar data races en runtime"
    ],
    correct: 3,
    difficulty: "C",
    explanation: "go run -race o go test -race activa instrumentación que detecta accesos concurrentes no sincronizados a variables compartidas."
  },
  {
    question: "¿Qué es <code>pprof</code>?",
    options: [
      "Un formateador de código que aplica las convenciones de estilo oficiales del equipo de Go",
      "Un tipo de logger estructurado que registra métricas de rendimiento en tiempo de ejecución",
      "Un gestor de paquetes alternativo a go modules para proyectos con dependencias complejas",
      "Herramienta de profiling: CPU, memoria, goroutines, mutex. go tool pprof para analizar perfiles"
    ],
    correct: 3,
    difficulty: "C",
    explanation: "import _ 'net/http/pprof' expone endpoints. go tool pprof http://localhost:6060/debug/pprof/heap. Visualizar con go tool pprof -http=:8080."
  },
  {
    question: "¿Cómo funciona el GC de Go?",
    options: [
      "Usa conteo de referencias incrementando y decrementando un contador por cada asignación",
      "Detiene completamente la aplicación en cada ciclo de recolección para marcar y barrer objetos",
      "Solo aplica recolección de basura a slices y maps, dejando structs bajo gestión manual",
      "Tricolor mark-and-sweep concurrente con pausas sub-milisegundo; GC concurrente con el programa usando write barriers"
    ],
    correct: 3,
    difficulty: "B",
    explanation: "Go GC: fase concurrent mark (programa sigue corriendo), breve STW para terminar mark, concurrent sweep. Write barriers detectan cambios durante mark. GOGC controla agresividad."
  },
  {
    question: "¿Qué es el stack de goroutines y su crecimiento?",
    options: [
      "Usa un stack de 8MB fijo por goroutine idéntico al de los threads del sistema operativo en C",
      "Tiene un stack fijo de 1MB que se asigna al inicio y no puede modificarse durante la ejecución",
      "Stack inicial pequeño (~2KB) que crece dinámicamente (segmented stacks o contiguous stack con copying) hasta el límite",
      "Utiliza directamente el stack del sistema operativo sin ninguna capa de abstracción adicional"
    ],
    correct: 2,
    difficulty: "B",
    explanation: "Go 1.3+: contiguous stack. Cuando el stack necesita crecer, se crea uno más grande y se copian los frames. Por eso los punteros a variables locales son seguros."
  },
  {
    question: "¿Qué es el scheduler preemptivo en Go 1.14+?",
    options: [
      "El scheduler de Go nunca puede ser preemptivo porque usa un modelo cooperativo estricto",
      "Es un scheduler gestionado completamente por el sistema operativo sin intervención del runtime",
      "Signal-based preemption: goroutines pueden ser preemptadas en cualquier punto (no solo en calls), mejorando fairness",
      "Solo preempta goroutines cuando realizan operaciones de entrada/salida bloqueantes del sistema"
    ],
    correct: 2,
    difficulty: "B",
    explanation: "Antes de Go 1.14, solo se preemptaba en puntos de función call. Ahora se usan señales SIGURG para preemptar goroutines en loops sin calls (CPU-bound)."
  },
  {
    question: "¿Qué es <code>unsafe.Pointer</code>?",
    options: [
      "Un puntero que causa un panic inmediato al ser desreferenciado en cualquier contexto del programa",
      "Un puntero que apunta a código máquina no verificado que puede ejecutarse sin restricciones",
      "Tipo especial que puede convertirse a/desde cualquier puntero; evita el sistema de tipos; uso cuidadoso para interop con C",
      "Un tipo de puntero reservado exclusivamente para ser usado con las llamadas del paquete cgo"
    ],
    correct: 2,
    difficulty: "B",
    explanation: "unsafe.Pointer permite aritmética de punteros y conversiones arbitrarias. Las 4 reglas de unsafe son: T1→unsafe.Pointer→T2, ptr→uintptr→arithmetic→ptr (en un statement), etc."
  },
  {
    question: "¿Qué es <code>cgo</code>?",
    options: [
      "El compilador nativo de Go que convierte código fuente Go a código ensamblador optimizado",
      "Permite llamar código C desde Go y viceversa; útil para usar librerías C pero tiene overhead y complica la compilación",
      "Una herramienta de análisis estático incluida en el toolchain oficial para detectar errores comunes",
      "Un gestor de dependencias alternativo que descarga paquetes desde repositorios privados de C"
    ],
    correct: 1,
    difficulty: "B",
    explanation: "import 'C'; // #include <stdio.h> permite usar funciones C. Cada cgo call tiene overhead ~100ns. Deshabilitar con CGO_ENABLED=0 para compilación estática simple."
  },
  {
    question: "¿Cómo funciona el escape analysis del compilador Go?",
    options: [
      "Análisis que solo afecta a los tipos de puntero y no tiene impacto en los tipos por valor",
      "El compilador determina si el lifetime de un valor puede contenerse en el stack frame actual; si escapa (retornado, enviado a channel, interfaz), va al heap",
      "Un análisis de seguridad que detecta vulnerabilidades de acceso a memoria en código concurrente",
      "Un proceso que verifica si el programa puede terminar correctamente sin lanzar excepciones en runtime"
    ],
    correct: 1,
    difficulty: "A",
    explanation: "go build -gcflags='-m -m' muestra decisiones de escape. Evitar fugas accidentales al heap (boxing en interface{}, closures capturando punteros) mejora rendimiento al reducir presión GC."
  },
  {
    question: "¿Qué son las propuestas de range over functions (Go 1.22+)?",
    options: [
      "range sobre func(yield func(K,V) bool) — permite definir iteradores personalizados que funcionan con for range",
      "Una sintaxis para iterar sobre rangos numéricos enteros con paso configurable en el bucle",
      "Una propuesta que fue rechazada por el equipo de Go por incompatibilidad con el diseño del lenguaje",
      "Una extensión de range que solo funciona con slices y no puede aplicarse a tipos personalizados"
    ],
    correct: 0,
    difficulty: "A",
    explanation: "Go 1.22 introduce rangefunc experiment: for v := range slices.Values(s) itera usando una función iterator. Estandariza el patrón de iteradores."
  },
  {
    question: "¿Qué es el compilador de Go y sus fases?",
    options: [
      "Solo existe el compilador gc y no hay ninguna implementación alternativa del lenguaje Go",
      "El compilador únicamente convierte archivos .go a binarios sin ninguna fase intermedia",
      "Go utiliza exclusivamente el backend de LLVM para generar código máquina en todas las plataformas",
      "Lexing → parsing → AST → type checking → SSA IR → optimization passes → machine code; gc (Go compiler) y gccgo son implementaciones"
    ],
    correct: 3,
    difficulty: "A",
    explanation: "cmd/compile: parse (.go → AST), typecheck (type system), ir (mid-level IR), ssa (SSA form con optimizaciones), obj (assembler). Alternativa: gccgo usa GCC backend."
  },
  {
    question: "¿Cómo funciona el network poller de Go?",
    options: [
      "El runtime lanza goroutines dedicadas que se bloquean esperando eventos de red del sistema",
      "El runtime usa epoll/kqueue/IOCP según OS para IO no-bloqueante; goroutines bloqueadas en IO son parkadas y reanudadas por el netpoller sin bloquear threads M",
      "El modelo de red de Go es completamente síncrono y bloquea el OS thread durante cada operación",
      "Utiliza la syscall poll() del sistema operativo de forma directa sin ninguna capa de abstracción"
    ],
    correct: 1,
    difficulty: "S",
    explanation: "Cuando una goroutine hace IO (net, file), el runtime registra el fd en epoll/kqueue y pone la goroutine en estado de espera. El netpoller corre en un thread dedicado y reactiva goroutines cuando IO está listo."
  },
  {
    question: "¿Qué es el stack scanning durante GC en Go?",
    options: [
      "Durante mark phase, el GC escanea los stacks de todas las goroutines para encontrar raíces de punteros; requiere STW breve o stack barriers",
      "El GC escanea archivos en disco buscando referencias a objetos que deben ser persistidos entre ejecuciones",
      "El proceso de GC solo escanea el heap y no necesita revisar los stacks de las goroutines activas",
      "No existe escaneo de stacks en Go porque todos los objetos reachable se rastrean desde el heap global"
    ],
    correct: 0,
    difficulty: "S",
    explanation: "Go GC escanea stacks de goroutines para encontrar todos los punteros vivos. En Go 1.14+ usa STW breve para scan de stacks. Los stack frames tienen bitmap de qué palabras son punteros."
  },
  {
    question: "¿Cómo funciona el inlining en el compilador Go y sus limitaciones?",
    options: [
      "No existe inlining en Go porque el compilador prioriza la consistencia de stack traces completos",
      "El compilador inline funciones con presupuesto ≤80 AST nodes; -gcflags='-m' muestra decisiones; recursive, closures complejas y interface calls no se inline",
      "Solo se realiza inlining cuando el programador activa explícitamente las optimizaciones del compilador",
      "Todas las funciones se inline automáticamente sin ningún límite de tamaño ni restricciones de tipo"
    ],
    correct: 1,
    difficulty: "S",
    explanation: "Inlining en Go es conservativo comparado con C++/Java JIT. Elimina call overhead y habilita constant propagation. //go:noinline previene inlining. Profile-guided inlining está siendo investigado."
  },
  {
    question: "¿Qué es el internal package en Go?",
    options: [
      "Paquetes en directorios 'internal' solo pueden ser importados por el árbol de paquetes padre del directorio internal; fuerza encapsulación",
      "Una característica del sistema de módulos go.mod para gestionar dependencias internas del proyecto",
      "Los paquetes de la librería estándar de Go que no están documentados públicamente en pkg.go.dev",
      "Paquetes privados que pertenecen al equipo de desarrollo de Google para uso interno exclusivo"
    ],
    correct: 0,
    difficulty: "S",
    explanation: "a/b/internal/c solo puede ser importado por paquetes bajo a/b. Permite crear APIs internas sin exportarlas públicamente. Enforced por el toolchain."
  },
  {
    question: "¿Qué son los overlapping interfaces en Go 1.18+?",
    options: [
      "Interfaces que declaran los mismos métodos y pueden causar conflictos al implementarse juntas",
      "Con generics, las interfaces pueden incluir type sets: ~int incluye int y todos sus alias; permite constraints como int|string en generics",
      "Interfaces que tienen el mismo comportamiento que las anteriores sin ningún cambio funcional",
      "Un defecto conocido del sistema de tipos de Go que produce resultados inesperados con generics"
    ],
    correct: 1,
    difficulty: "S",
    explanation: "Go 1.18 redefinió interfaces como type sets. interface{ ~int | ~string } permite cualquier tipo basado en int o string. Esto es la base del sistema de constraints para generics."
  }
];
