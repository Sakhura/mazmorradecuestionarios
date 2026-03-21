window.questions_elixir = [
  {
    question: "¿En qué VM corre Elixir?",
    options: [
      "Una VM propia desarrollada por el equipo de Elixir independientemente de Erlang",
      "La JVM de Java, aprovechando el ecosistema de bibliotecas y herramientas existentes",
      "BEAM VM (Erlang VM): diseñada para sistemas distribuidos, tolerantes a fallos y de alta concurrencia",
      "El runtime de Node.js adaptado para programación funcional con concurrencia de procesos"
    ],
    correct: 2,
    difficulty: "E",
    explanation: "Elixir corre sobre la BEAM VM de Erlang. Hereda todas sus capacidades: millones de procesos ligeros, supervisión, distribución."
  },
  {
    question: "¿Qué es un proceso en Elixir?",
    options: [
      "Unidad ligera de concurrencia de la BEAM VM, con su propio heap y mailbox; aislado de otros procesos",
      "Un proceso del sistema operativo que el kernel gestiona con su propio espacio de memoria protegido",
      "Un hilo del sistema operativo con acceso a memoria compartida y sincronización mediante mutexes",
      "Una función de larga duración que se ejecuta en el hilo principal de la aplicación sin aislamiento"
    ],
    correct: 0,
    difficulty: "E",
    explanation: "spawn(fn -> IO.puts 'hello' end) crea un proceso. Los procesos BEAM son extremadamente ligeros (~300 bytes). Un sistema puede tener millones."
  },
  {
    question: "¿Qué es la inmutabilidad en Elixir?",
    options: [
      "Todos los datos en Elixir son inmutables; las 'modificaciones' crean nuevas estructuras (structural sharing)",
      "Solo los mapas y las listas son inmutables; los binarios pueden modificarse en su lugar",
      "Solo las cadenas de texto son inmutables; los enteros y booleanos se modifican directamente",
      "La inmutabilidad es opcional y puede desactivarse mediante una directiva de compilación especial"
    ],
    correct: 0,
    difficulty: "E",
    explanation: "list = [1,2,3]; new_list = [0 | list]. list sigue siendo [1,2,3]. La inmutabilidad facilita la concurrencia: no hay estado compartido mutable."
  },
  {
    question: "¿Qué es pattern matching en Elixir?",
    options: [
      "Una característica exclusiva de las funciones con múltiples cláusulas y no del operador de asignación",
      "El equivalente mejorado a switch que evalúa igualdad de valores sin capacidad de destructuring",
      "Un tipo de comparación profunda entre estructuras de datos que retorna true o false como booleano",
      "El operador = es pattern matching: {a, b} = {1, 2}; descompone estructuras y verifica formas"
    ],
    correct: 3,
    difficulty: "E",
    explanation: "{:ok, value} = {:ok, 42}. [head | tail] = [1,2,3]. Las funciones tienen múltiples clauses con patrones. case y cond también usan matching."
  },
  {
    question: "¿Qué hace el operador pipe <code>|></code>?",
    options: [
      "Realiza una operación OR lógica entre dos booleanos o expresiones que evalúan a verdadero/falso",
      "Concatena dos listas en una nueva lista con todos los elementos de ambas en orden secuencial",
      "Un operador de redirección de salida que escribe el resultado en un archivo o proceso externo",
      "Pasa el resultado de la izquierda como primer argumento de la función de la derecha: 'hola' |> String.upcase() |> String.reverse()"
    ],
    correct: 3,
    difficulty: "E",
    explanation: "El pipe hace el código legible de izquierda a derecha, natural como una cadena de transformaciones. Central en el estilo Elixir."
  },
  {
    question: "¿Qué es un Supervisor?",
    options: [
      "Un módulo de logging que registra los errores de todos los procesos hijos para su análisis posterior",
      "Un tipo especial de GenServer que implementa lógica de negocio con reinicio automático incluido",
      "Proceso que supervisa otros procesos y los reinicia según una estrategia cuando fallan: one_for_one, one_for_all, rest_for_one",
      "Un proceso del sistema operativo que monitorea la CPU y la memoria de la aplicación en producción"
    ],
    correct: 2,
    difficulty: "E",
    explanation: "Los Supervisors implementan el principio 'let it crash': si un proceso falla, el supervisor lo reinicia. Crea árboles de supervisión robustos."
  },
  {
    question: "¿Qué es el 'let it crash' philosophy?",
    options: [
      "Una mala práctica de programación que lleva a sistemas inestables con errores no controlados",
      "Una técnica de testing que consiste en forzar fallos deliberados para verificar la recuperación del sistema",
      "Un principio exclusivo de procesos sin estado que no puede aplicarse a procesos con estado persistente",
      "Dejar que los procesos fallen y sean reiniciados por supervisores en lugar de defender contra todos los errores posibles"
    ],
    correct: 3,
    difficulty: "E",
    explanation: "En lugar de múltiples if/try para manejar casos excepcionales, se deja que el proceso falle y el supervisor lo reinicia en estado limpio."
  },
  {
    question: "¿Qué es un GenServer?",
    options: [
      "Una abstracción exclusiva para gestionar conexiones a bases de datos con pooling automático incluido",
      "Behaviour genérico de servidor: abstrae el loop de mensajes, manejo de estado, sincronía/asincronía",
      "Un tipo de Plug que gestiona peticiones HTTP en el framework Phoenix con estado entre peticiones",
      "Un servidor HTTP genérico que puede configurarse para distintos protocolos de comunicación en red"
    ],
    correct: 1,
    difficulty: "D",
    explanation: "GenServer tiene handle_call (síncrono), handle_cast (asíncrono), handle_info. Abstrae el modelo actor con estado encapsulado."
  },
  {
    question: "¿Qué es OTP?",
    options: [
      "Una biblioteca externa de terceros que se instala como dependencia en proyectos Elixir modernos",
      "Un framework web de Elixir alternativo a Phoenix con enfoque en aplicaciones en tiempo real",
      "Open Telecom Platform: biblioteca de patrones para sistemas concurrentes y distribuidos; GenServer, Supervisor, Task, Agent",
      "Un protocolo de red de telecomunicaciones que Elixir implementa para comunicación entre nodos"
    ],
    correct: 2,
    difficulty: "D",
    explanation: "OTP es la librería de diseño de sistemas de Erlang/Elixir. Provee bloques de construcción probados para sistemas de producción."
  },
  {
    question: "¿Qué son los Modules y Functions en Elixir?",
    options: [
      "Son equivalentes a las clases y métodos de Ruby con herencia y mixins de la misma forma",
      "Los módulos son namespaces de funciones. Las funciones son el bloque básico: defmodule MyMod do; def my_fn(arg) do end; end",
      "Los módulos son objetos con estado que encapsulan tanto datos como comportamiento a la vez",
      "Estructuras equivalentes a las clases de OOP donde los módulos tienen instancias propias con estado"
    ],
    correct: 1,
    difficulty: "D",
    explanation: "No hay clases ni herencia. Los módulos agrupan funciones. La composición de funciones reemplaza la herencia OOP."
  },
  {
    question: "¿Qué es Phoenix Framework?",
    options: [
      "Framework web de Elixir inspirado en Rails; famoso por LiveView que permite UI en tiempo real sin JS custom",
      "Un tipo de GenServer especializado en manejar múltiples conexiones de clientes simultáneamente",
      "Un framework de Elixir diseñado exclusivamente para construir APIs REST con autenticación OAuth",
      "Un framework de Python que se integra con Elixir para aprovechar el ecosistema de ambos lenguajes"
    ],
    correct: 0,
    difficulty: "D",
    explanation: "Phoenix: Router, Controllers, Views. LiveView: actualiza el DOM desde el servidor via WebSocket sin SPA. Ecto para base de datos. Excepcionalmente eficiente."
  },
  {
    question: "¿Qué es Ecto?",
    options: [
      "Un tipo de base de datos embebida específica de Elixir con su propio motor de almacenamiento",
      "Un ORM completo equivalente a ActiveRecord de Rails con herencia de tabla única integrada",
      "Una biblioteca exclusiva para PostgreSQL sin soporte para otros motores de base de datos",
      "Librería de base de datos para Elixir: query DSL, changesets (validación), migrations, repos. No es un ORM tradicional"
    ],
    correct: 3,
    difficulty: "D",
    explanation: "Ecto.Query: from(u in User, where: u.age > 18, select: u.name). Changesets: validación y casting de datos. Repo.all(), insert(), update()."
  },
  {
    question: "¿Qué son los Changesets?",
    options: [
      "Estructura de Ecto que encapsula validaciones y transformaciones de datos: cast, validate_required, validate_length",
      "Un tipo de migración de base de datos que acumula múltiples cambios de esquema para aplicarlos juntos",
      "Formularios web del framework Phoenix que validan datos de entrada del usuario en el navegador",
      "Registros de cambios de código similares a commits de git para rastrear el historial del proyecto"
    ],
    correct: 0,
    difficulty: "D",
    explanation: "changeset = User.changeset(%User{}, %{name: 'Ana', age: 25}). Permite composición de validaciones y manejo de errores limpio."
  },
  {
    question: "¿Qué es un Task en Elixir?",
    options: [
      "Un elemento de la lista de pendientes que un Supervisor ejecuta según su estrategia de reinicio",
      "Proceso para trabajo asíncrono simple: Task.async(fn -> compute() end); Task.await(task)",
      "Una tarea programada del sistema operativo que ejecuta funciones Elixir a intervalos regulares",
      "Un módulo de programación de tareas en segundo plano similar a cron con integración en Phoenix"
    ],
    correct: 1,
    difficulty: "D",
    explanation: "Task.async + Task.await para concurrencia simple. Task.async_stream para paralelizar sobre colecciones. Parte de OTP."
  },
  {
    question: "¿Qué es un Stream en Elixir?",
    options: [
      "Computación lazy sobre enumerables: Stream.map, Stream.filter producen transformaciones sin evaluarlas inmediatamente",
      "Una transmisión de video o audio que Phoenix LiveView gestiona para aplicaciones multimedia",
      "Un proceso de entrada/salida que lee datos de una fuente externa byte a byte de forma continua",
      "Una característica exclusiva para procesar archivos de gran tamaño que no caben en la memoria"
    ],
    correct: 0,
    difficulty: "D",
    explanation: "Stream.unfold(0, fn n -> {n, n+1} end) |> Stream.take(10) |> Enum.to_list(). Los streams son lazy; se evalúan solo cuando se materializan con Enum."
  },
  {
    question: "¿Qué es la distribución en Elixir/Erlang?",
    options: [
      "El proceso de distribuir el código fuente de una aplicación Elixir a distintos entornos de producción",
      "Un sistema exclusivo para despliegues en clusters de Kubernetes con múltiples instancias de la app",
      "Un mecanismo de sharding de bases de datos que divide los datos entre múltiples nodos de almacenamiento",
      "Los nodos BEAM pueden conectarse y los procesos pueden comunicarse transparentemente entre nodos: Node.connect, send a {proc, :node@host}"
    ],
    correct: 3,
    difficulty: "C",
    explanation: ":net_adm.ping(:'other@host'). send({:some_process, :'node@host'}, message). La distribución es primitiva en BEAM, no un añadido."
  },
  {
    question: "¿Qué es hot code swapping?",
    options: [
      "Una característica disponible solo en módulos pequeños con menos de 100 líneas de código Elixir",
      "BEAM permite actualizar módulos en producción sin detener el sistema; los procesos existentes pueden migrar al nuevo código",
      "Una funcionalidad experimental disponible únicamente en versiones nightly de la BEAM VM",
      "Reemplazar el código fuente de una aplicación mientras corre en producción reiniciando los procesos"
    ],
    correct: 1,
    difficulty: "C",
    explanation: "Sistema de telecomunicaciones originalmente: Erlang/Elixir puede actualizar código en sistemas 24/7. :code.load_file/purge para gestión de módulos."
  },
  {
    question: "¿Qué es ETS (Erlang Term Storage)?",
    options: [
      "Un tipo de base de datos externa de Erlang que requiere instalación separada del servidor BEAM",
      "Un almacenamiento especializado exclusivo para tipos numéricos que no acepta estructuras complejas",
      "Almacén de datos en memoria, muy rápido, concurrente, basado en tablas de tuplas; acceso O(1) para lookups por clave",
      "Un tipo de caché distribuido externo similar a Redis que se conecta mediante el protocolo TCP"
    ],
    correct: 2,
    difficulty: "C",
    explanation: ":ets.new(:tabla, [:set, :public]). :ets.insert(:tabla, {key, value}). :ets.lookup(:tabla, key). Ideal para caches de aplicación y datos compartidos."
  },
  {
    question: "¿Qué es el scheduler de la BEAM VM?",
    options: [
      "Un scheduler del kernel del sistema operativo que gestiona los procesos BEAM como threads pesados",
      "Scheduler por núcleo de CPU (SMP), preemptivo basado en reducciones; cada core tiene su run queue; work stealing entre schedulers",
      "Un hilo único de ejecución que procesa todos los procesos BEAM de forma secuencial y cooperativa",
      "Un scheduler de tareas del sistema operativo que asigna tiempo de CPU a la máquina virtual BEAM"
    ],
    correct: 1,
    difficulty: "B",
    explanation: "BEAM scheduler: cada proceso tiene un 'budget' de reducciones. Al agotar el budget, se preempta. SMP: N schedulers para N cores, con work stealing."
  },
  {
    question: "¿Qué son los protocols en Elixir?",
    options: [
      "Equivalentes a los behaviours de OTP con la misma sintaxis y el mismo propósito en el sistema",
      "Un tipo de interfaz de OTP que define los callbacks obligatorios de un GenServer o Supervisor",
      "Especificaciones de protocolos de red como HTTP o WebSocket implementados como módulos Elixir",
      "Mecanismo de polimorfismo: defprotocol Describible do; def describe(t); end; funciona como type classes sin herencia"
    ],
    correct: 3,
    difficulty: "B",
    explanation: "defimpl Describible, for: User do; def describe(u), do: u.name; end. String.Chars, Enumerable, Collectable son protocolos del core."
  },
  {
    question: "¿Qué es una NIF (Native Implemented Function)?",
    options: [
      "Una función de red interna de la BEAM VM que gestiona las conexiones entre nodos del cluster",
      "Un tipo de Puerto que se comunica con procesos externos mediante paso de mensajes asíncrono",
      "Una función del sistema marcada como optimizada que el compilador prioriza durante la ejecución",
      "Función implementada en C/Rust/etc. que se llama directamente desde Elixir/Erlang; máximo rendimiento para código nativo"
    ],
    correct: 3,
    difficulty: "A",
    explanation: "NIFs son el mecanismo para código nativo. Una NIF que tarda >1ms puede bloquear el scheduler. rustler crea NIFs en Rust de forma segura."
  },
  {
    question: "¿Qué es LiveView en Phoenix?",
    options: [
      "Una característica exclusiva para aplicaciones de chat en tiempo real que no puede usarse en otros dominios",
      "Permite UI en tiempo real sin JavaScript custom: el servidor mantiene estado y envía diffs HTML via WebSocket; ~10x menos código que SPA",
      "Un tipo de WebSocket sin procesar que el cliente gestiona directamente con JavaScript personalizado",
      "Una biblioteca de streaming de video integrada en Phoenix para retransmisiones en vivo de contenido"
    ],
    correct: 1,
    difficulty: "A",
    explanation: "LiveView: def handle_event('increment', _, socket) do; {:noreply, assign(socket, :count, socket.assigns.count + 1)}; end. El servidor renderiza y envía diffs mínimos."
  }
];
