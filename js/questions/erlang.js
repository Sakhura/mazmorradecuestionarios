window.questions_erlang = [
  {
    question: "¿Para qué fue diseñado Erlang?",
    options: [
      "Para computación de alto rendimiento en supercomputadores con arquitecturas de memoria distribuida",
      "Para desarrollo web moderno con soporte nativo de HTTP/2 y WebSockets en tiempo real",
      "Para scripting de sistema operativo y automatización de tareas en entornos Unix y Linux",
      "Sistemas de telecomunicaciones: alta disponibilidad, concurrencia masiva, tolerancia a fallos; creado por Ericsson en 1986"
    ],
    correct: 3,
    difficulty: "E",
    explanation: "Erlang fue creado para switches de telefonía que requieren 99.9999999% de uptime. Hoy se usa en WhatsApp, RabbitMQ, CouchDB y sistemas financieros."
  },
  {
    question: "¿Cuál es la unidad básica de concurrencia en Erlang?",
    options: [
      "El thread del sistema operativo gestionado por el scheduler BEAM con afinidad a núcleos específicos",
      "Proceso ligero de la BEAM VM; millones pueden existir simultáneamente sin overhead de SO",
      "La coroutine del runtime que se suspende cooperativamente cuando realiza operaciones de I/O",
      "El Actor global del sistema que centraliza la gestión de mensajes entre módulos del programa"
    ],
    correct: 1,
    difficulty: "E",
    explanation: "spawn(fun() -> ... end) crea un proceso ligero. Los procesos Erlang son muy baratos (cientos de bytes). No comparten memoria; se comunican por mensajes."
  },
  {
    question: "¿Cómo se comunican los procesos en Erlang?",
    options: [
      "Mediante memoria compartida protegida por semáforos y mutexes del sistema operativo subyacente",
      "Con llamadas a procedimientos remotos síncronas que bloquean el proceso llamante hasta recibir respuesta",
      "Por paso de mensajes: Pid ! Mensaje para enviar; receive ... end para recibir; no comparten estado",
      "Usando canales tipados unidireccionales similares a los channels de Go para transferir datos entre procesos"
    ],
    correct: 2,
    difficulty: "E",
    explanation: "self() retorna el PID actual. Pid ! {hola, 'mundo'} envía mensaje. receive {ok, Valor} -> ... end recibe mensajes que coincidan con el patrón."
  },
  {
    question: "¿Qué es el pattern matching en Erlang?",
    options: [
      "Una función de búsqueda en listas que compara elementos usando criterios definidos por el programador",
      "El operador = es matching: {ok, Value} = {ok, 42}; las funciones tienen múltiples cláusulas con patrones",
      "Un mecanismo de coincidencia en runtime para verificar que los mensajes tienen la estructura correcta",
      "Un sistema de plantillas que el compilador usa para generar código especializado para cada tipo de dato"
    ],
    correct: 1,
    difficulty: "E",
    explanation: "fact(0) -> 1; fact(N) when N > 0 -> N * fact(N-1). El compilador selecciona la cláusula que coincide. Los patrones desestructuran datos de forma elegante."
  },
  {
    question: "¿Qué es un átomo en Erlang?",
    options: [
      "Una variable inmutable de tipo numérico que solo puede tomar valores predefinidos en tiempo de compilación",
      "Constante literal con nombre: ok, error, true, false; comparación en O(1); usados masivamente en mensajes y patrones",
      "Un tipo primitivo similar a un string pero almacenado como número entero para eficiencia de comparación",
      "Una referencia única generada en tiempo de ejecución que identifica un proceso dentro de la BEAM VM"
    ],
    correct: 1,
    difficulty: "E",
    explanation: "ok, error, true, false son átomos. {ok, Value} y {error, Reason} son el patrón estándar de Erlang. Los átomos se comparan en O(1) gracias a la tabla global."
  },
  {
    question: "¿Qué es la inmutabilidad en Erlang?",
    options: [
      "Solo las listas son inmutables; los átomos y tuplas pueden reasignarse mediante operaciones de actualización",
      "Todas las variables son inmutables: una vez ligadas no pueden cambiar. X = 5; X = 6 causa error si X está ligada",
      "La inmutabilidad es opcional y se habilita con la directiva -immutable al inicio del módulo Erlang",
      "Las variables pueden modificarse dentro de un proceso pero los mensajes enviados entre procesos son inmutables"
    ],
    correct: 1,
    difficulty: "E",
    explanation: "En Erlang las variables son single-assignment. Para 'cambiar' un valor, creas una nueva variable con el resultado de transformar la anterior. Elimina los data races."
  },
  {
    question: "¿Qué es un supervisor en Erlang?",
    options: [
      "Un proceso que monitorea el rendimiento de workers y los reinicia si superan el límite de memoria configurado",
      "Proceso que supervisa hijos y los reinicia si fallan: one_for_one, one_for_all, rest_for_one, simple_one_for_one",
      "Una herramienta de profiling del BEAM que detecta cuellos de botella en el árbol de procesos activos",
      "Un módulo de coordinación que centraliza la distribución de mensajes entre los procesos worker del sistema"
    ],
    correct: 1,
    difficulty: "D",
    explanation: "supervisor:start_link iniciará el árbol. one_for_one reinicia solo el hijo que falló. one_for_all reinicia todos si uno falla. Estrategia de restart, intensidad y periodo configurables."
  },
  {
    question: "¿Qué es gen_server?",
    options: [
      "Un servidor web genérico integrado en OTP que escucha en un puerto TCP configurable del sistema operativo",
      "Un generador de código que produce scaffolding para servidores basándose en una plantilla de configuración",
      "Una abstracción del BEAM para servidores de base de datos en memoria compartida entre procesos del nodo",
      "Behaviour genérico de servidor con protocolo estandarizado: init, handle_call, handle_cast, handle_info, terminate"
    ],
    correct: 3,
    difficulty: "D",
    explanation: "gen_server:call(Pid, Request) para síncrono. gen_server:cast(Pid, Msg) para asíncrono. Es el behaviour OTP más usado para encapsular estado en procesos servidores."
  },
  {
    question: "¿Qué es OTP en Erlang?",
    options: [
      "One-Time Password: librería de criptografía de Erlang para autenticación segura en sistemas de telecom",
      "Optimized Transport Protocol: protocolo de red de alta disponibilidad usado por la BEAM VM para clustering",
      "Open Telecom Platform: conjunto de librerías y principios de diseño para sistemas robustos; gen_server, supervisor, etc.",
      "Object Type Protocol: el sistema de tipos de Erlang para verificación en runtime de estructuras de mensajes"
    ],
    correct: 2,
    difficulty: "D",
    explanation: "OTP es la 'best practices' de Erlang empaquetadas. Todo sistema Erlang serio usa OTP: behaviours, applications, releases. Es la diferencia entre código Erlang ad-hoc y sistemas production-ready."
  },
  {
    question: "¿Cómo se estructuran las listas en Erlang?",
    options: [
      "Como arrays dinámicos con indexación base-0 que permiten acceso aleatorio en tiempo constante O(1)",
      "Como árboles AVL balanceados que garantizan O(log n) para inserción, búsqueda y eliminación de elementos",
      "Como vectores persistentes inmutables con tail sharing para actualización eficiente sin copia completa",
      "[Head|Tail] notación: [1,2,3] = [1|[2|[3|[]]]]; operaciones: hd(L), tl(L), length(L), lists:map/filter"
    ],
    correct: 3,
    difficulty: "D",
    explanation: "[H|T] = [1,2,3]: H=1, T=[2,3]. lists:map(fun(X) -> X*2 end, [1,2,3]). Las listas de Erlang son listas enlazadas; acceso O(n), prepend O(1)."
  },
  {
    question: "¿Qué hace erlang:monitor/2?",
    options: [
      "Inicia el monitor de rendimiento del BEAM que registra métricas de CPU y memoria del proceso especificado",
      "Establece un monitor sobre un proceso: si termina, el monitor recibe {'DOWN', Ref, process, Pid, Reason}",
      "Configura el watchdog del SO para reiniciar el nodo Erlang si el proceso deja de responder en el timeout",
      "Registra el proceso en el árbol de supervisores del sistema como un worker monitoreable por OTP directamente"
    ],
    correct: 1,
    difficulty: "D",
    explanation: "Ref = erlang:monitor(process, Pid). Diferente de link: unidireccional y no propaga el crash. Útil cuando quieres saber si un proceso muere sin enlazar tu destino al suyo."
  },
  {
    question: "¿Cuál es el modelo de error de Erlang?",
    options: [
      "Manejo de errores con excepciones tipadas: try/catch con tipos específicos como ArgumentError o ProcessError",
      "Retorno de valores de error en tuplas: todas las funciones retornan {ok, Result} o {error, Reason} obligatoriamente",
      "'Let it crash': usar links y supervisores; try-catch solo para errores esperados de operaciones externas",
      "Verificación de precondiciones con guards y specs que el compilador valida antes de permitir la ejecución"
    ],
    correct: 2,
    difficulty: "D",
    explanation: "El error philosophy de Erlang: los procesos correctos no manejan errores de procesos incorrectos. Un supervisor detecta el crash y reinicia el proceso en estado limpio."
  },
  {
    question: "¿Qué es ETS en Erlang?",
    options: [
      "Erlang Type System: el sistema de especificación de tipos estáticos que Dialyzer usa para análisis de código",
      "Execution Trace System: herramienta de profiling que registra la secuencia de ejecución entre procesos del nodo",
      "External Term Storage: mecanismo para persistir términos Erlang en disco usando el formato BERT binario",
      "Erlang Term Storage: tablas en memoria para datos compartidos entre procesos sin paso de mensajes; O(1) lookup"
    ],
    correct: 3,
    difficulty: "C",
    explanation: "ets:new(Tabla, [set, public]). ets:insert(Tabla, {key, value}). ets:lookup(Tabla, key). ETS es mutable y compartida entre procesos, a diferencia del resto de Erlang."
  },
  {
    question: "¿Qué es Mnesia?",
    options: [
      "Base de datos distribuida integrada en Erlang: replicación, transacciones, reside en RAM y/o disco; alta disponibilidad",
      "Un módulo de Erlang para gestión de memoria dinámica con recolección de basura generacional configurable",
      "Una librería de Erlang para serialización y deserialización de términos en formato binario comprimido",
      "Un sistema de monitoreo de nodos que detecta particiones de red y coordina el proceso de reconexión"
    ],
    correct: 0,
    difficulty: "C",
    explanation: "Mnesia es la base de datos de Erlang, diseñada para telecomunicaciones: alta disponibilidad, transacciones ACID, replicación entre nodos, tablas en RAM o disco."
  },
  {
    question: "¿Qué es hot code loading en Erlang?",
    options: [
      "La capacidad de precalentar el JIT cargando los módulos más usados en caché antes del primer acceso",
      "Un mecanismo para cargar módulos compilados desde una CDN remota sin interrumpir el servicio en producción",
      "Actualizar módulos en producción sin detener el sistema; Erlang mantiene 2 versiones de un módulo simultáneamente",
      "El proceso de compilación en tiempo de ejecución de módulos Erlang escritos en código fuente directamente"
    ],
    correct: 2,
    difficulty: "C",
    explanation: "code:load_file(Module). Los procesos en la versión vieja continúan; los nuevos mensajes usan la versión nueva. Después de 2 versiones, la antigua se elimina automáticamente."
  },
  {
    question: "¿Qué es Dialyzer?",
    options: [
      "Una herramienta de depuración que rastrea el flujo de mensajes entre procesos en tiempo real del sistema",
      "Herramienta de análisis estático de tipos: usa Hindley-Milner con typespecs para detectar errores sin tipos obligatorios",
      "Un generador de documentación que extrae los -spec y -type para producir HTML desde el código Erlang",
      "Un analizador de rendimiento que identifica los módulos con mayor latencia de mensajes en el árbol de procesos"
    ],
    correct: 1,
    difficulty: "C",
    explanation: "-spec funcion(Type1) -> ReturnType. Dialyzer analiza el código y encuentra discrepancias de tipos, funciones que nunca retornan y código inalcanzable sin falsos positivos."
  },
  {
    question: "¿Qué es el scheduler de BEAM?",
    options: [
      "Un scheduler round-robin simple que asigna procesos a threads del SO en orden FIFO sin preempción activa",
      "Scheduler preemptivo SMP: N schedulers para N cores; cada proceso tiene budget de reducciones; work-stealing entre schedulers",
      "Un orquestador cooperativo donde cada proceso cede voluntariamente el control al scheduler cuando corresponde",
      "Un gestor de prioridades que asigna tiempo de CPU basándose en el tamaño del mailbox de cada proceso"
    ],
    correct: 1,
    difficulty: "B",
    explanation: "BEAM scheduler: preemptivo basado en 'reductions' (pasos de ejecución). Cada proceso tiene ~2000 reducciones antes de ser desalojado. Work-stealing balancea la carga entre cores."
  },
  {
    question: "¿Qué es un port en Erlang?",
    options: [
      "Un número de puerto TCP/UDP que el supervisor asigna a cada proceso que necesita comunicación de red",
      "Un archivo de configuración que define los parámetros de conexión de la BEAM VM con nodos remotos del cluster",
      "Mecanismo para comunicación con programas externos (C, Python, etc.); comunicación por mensajes como procesos",
      "Una dirección de memoria compartida que el runtime usa para transferir datos entre nodos sin serialización"
    ],
    correct: 2,
    difficulty: "B",
    explanation: "erlang:open_port({spawn, 'cmd'}, Options). Los ports son como procesos desde la perspectiva de Erlang pero se comunican con el exterior mediante stdin/stdout o protocolos binarios."
  },
  {
    question: "¿Qué es PropEr / QuickCheck en Erlang?",
    options: [
      "Un framework de testing de integración que ejecuta escenarios de carga para medir la tolerancia a fallos",
      "Una herramienta de cobertura que analiza qué ramas de pattern matching son alcanzadas por los tests unitarios",
      "Un generador automático de tests basado en los typespecs definidos con -spec en el código fuente Erlang",
      "Property-based testing: defines propiedades que deben cumplirse para cualquier input generado aleatoriamente"
    ],
    correct: 3,
    difficulty: "A",
    explanation: "prop_sorted() -> ?FORALL(L, list(integer()), is_sorted(sort(L))). PropEr genera miles de casos aleatorios y encuentra el caso mínimo que falla la propiedad definida."
  }
];
