window.questions_erlang = [
  {
    question: "¿Para qué fue diseñado Erlang?",
    options: [
      "Scripting del sistema",
      "Desarrollo web front-end",
      "Computación científica",
      "Sistemas de telecomunicaciones: alta disponibilidad, concurrencia masiva, tolerancia a fallos; creado por Ericsson en 1986"
    ],
    correct: 3,
    difficulty: "E",
    explanation: "Erlang fue creado para switches de telefonía que requieren 99.9999999% de uptime. Ahora base de WhatsApp, Riot Games, Discord, ejabberd."
  },
  {
    question: "¿Cuál es la unidad básica de concurrencia en Erlang?",
    options: [
      "Thread del OS",
      "Proceso ligero de la BEAM VM; millones pueden existir simultáneamente",
      "Actor del framework",
      "Coroutine"
    ],
    correct: 1,
    difficulty: "E",
    explanation: "spawn(fun() -> ... end) crea un proceso ligero. Los procesos Erlang son más baratos que threads del OS: ~300 bytes de stack inicial."
  },
  {
    question: "¿Cómo se comunican los procesos en Erlang?",
    options: [
      "Memoria compartida",
      "Por sockets",
      "Por paso de mensajes: Pid ! Mensaje para enviar; receive ... end para recibir; no comparten estado",
      "Por variables globales"
    ],
    correct: 2,
    difficulty: "E",
    explanation: "self() retorna el PID actual. Pid ! {hola, 'mundo'} envía mensaje. receive {Tag, Data} -> ... end recibe. Messages son copiados (no compartidos)."
  },
  {
    question: "¿Qué es pattern matching en Erlang?",
    options: [
      "Igual que switch",
      "El operador = es matching: {ok, Value} = {ok, 42}; las funciones tienen múltiples cláusulas con patrones",
      "Solo para átomos",
      "Una librería de regex"
    ],
    correct: 1,
    difficulty: "E",
    explanation: "fact(0) -> 1; fact(N) when N > 0 -> N * fact(N-1). El compilador selecciona la cláusula cuyo patrón coincide."
  },
  {
    question: "¿Qué es un átomo en Erlang?",
    options: [
      "Una función inline",
      "Constante literal con nombre: ok, error, true, false; comparación en O(1); usados masivamente en mensajes y patrones",
      "Un tipo de variable",
      "Un número especial"
    ],
    correct: 1,
    difficulty: "E",
    explanation: "ok, error, true, false son átomos. {ok, Value} y {error, Reason} son el patrón estándar de retorno en Erlang."
  },
  {
    question: "¿Qué es la inmutabilidad en Erlang?",
    options: [
      "Solo en los módulos",
      "Todas las variables son inmutables: una vez ligadas no pueden cambiar. X = 5; X = 6 causa error si X está ligada",
      "Es opcional",
      "Solo strings son inmutables"
    ],
    correct: 1,
    difficulty: "E",
    explanation: "En Erlang las variables son single-assignment (como en lógica matemática). Esto simplifica el razonamiento sobre código concurrente."
  },
  {
    question: "¿Qué es un supervisor en Erlang?",
    options: [
      "Un módulo de logging",
      "Proceso que supervisa hijos y los reinicia si fallan: one_for_one, one_for_all, rest_for_one, simple_one_for_one",
      "Un tipo de gen_server",
      "Un proceso de monitoreo del sistema"
    ],
    correct: 1,
    difficulty: "D",
    explanation: "supervisor:start_link({local, Name}, Module, Args) inicia el supervisor. El árbol de supervisión es la arquitectura de sistemas OTP tolerantes a fallos."
  },
  {
    question: "¿Qué es gen_server?",
    options: [
      "Solo para servidores web",
      "Un servidor HTTP genérico",
      "Un tipo de proceso",
      "Behaviour genérico de servidor con protocolo de mensajes estandarizado: init, handle_call, handle_cast, handle_info, terminate"
    ],
    correct: 3,
    difficulty: "D",
    explanation: "gen_server:call(Pid, Request) para síncrono. gen_server:cast(Pid, Msg) para asíncrono. Maneja timeouts, crashes, y upgrades de código."
  },
  {
    question: "¿Qué es OTP en Erlang?",
    options: [
      "Un protocolo de red",
      "Solo para telecomunicaciones",
      "Open Telecom Platform: conjunto de librerías y principios de diseño para sistemas robustos; gen_server, supervisor, gen_fsm, etc.",
      "Una versión de Erlang"
    ],
    correct: 2,
    difficulty: "D",
    explanation: "OTP es la 'best practices' de Erlang empaquetadas. Todo sistema Erlang serio usa OTP para comportamientos estandarizados y supervision trees."
  },
  {
    question: "¿Qué es la lista en Erlang?",
    options: [
      "Una tupla dinámica",
      "Solo arrays",
      "Solo para números",
      "[Head|Tail] notación: [1,2,3] = [1|[2|[3|[]]]]; operaciones: hd(L), tl(L), length(L), lists:map/filter"
    ],
    correct: 3,
    difficulty: "D",
    explanation: "[H|T] = [1,2,3]: H=1, T=[2,3]. lists:map(fun(X) -> X*2 end, [1,2,3]). Las listas son linked lists en Erlang."
  },
  {
    question: "¿Qué hace erlang:monitor/2?",
    options: [
      "Es igual que link",
      "Establece un monitor sobre un proceso: si el proceso termina, el monitor recibe {'DOWN', Ref, process, Pid, Reason}",
      "Solo registra métricas",
      "Monitorea el rendimiento"
    ],
    correct: 1,
    difficulty: "D",
    explanation: "Ref = erlang:monitor(process, Pid). Diferente de link: unidireccional y no propaga exit. Usar para saber si un proceso terminó sin estar ligado a él."
  },
  {
    question: "¿Cuál es el modelo de error en Erlang?",
    options: [
      "Excepciones try-catch siempre",
      "No hay manejo de errores",
      "'Let it crash': usar links y supervisores; try-catch solo para errores esperados de operaciones externas",
      "Solo con try-catch"
    ],
    correct: 2,
    difficulty: "D",
    explanation: "El error philosophy de Erlang: los procesos correctos no manejan errores inesperados; se dejan morir y el supervisor reinicia. try...catch para errores previsibles externos."
  },
  {
    question: "¿Qué es ETS en Erlang?",
    options: [
      "Solo para datos numéricos",
      "Un tipo de base de datos externa",
      "Error Tracking System",
      "Erlang Term Storage: tablas en memoria para datos compartidos entre procesos sin paso de mensajes; O(1) lookup"
    ],
    correct: 3,
    difficulty: "C",
    explanation: "ets:new(Tabla, [set, public]). ets:insert(Tabla, {key, value}). ets:lookup(Tabla, key). Muy eficiente para caches. DETS para persistencia en disco."
  },
  {
    question: "¿Qué es Mnesia?",
    options: [
      "Base de datos distribuida integrada en Erlang: replicación, transacciones, reside en RAM y/o disco; diseñada para alta disponibilidad",
      "Una enfermedad de memoria",
      "Una librería de strings",
      "Un tipo de ETS persistente"
    ],
    correct: 0,
    difficulty: "C",
    explanation: "Mnesia es la base de datos de Erlang, diseñada para telecomunicaciones. ACID transactions, schema dinámico, replicación automática entre nodos."
  },
  {
    question: "¿Qué es hot code loading en Erlang?",
    options: [
      "Solo para módulos de prueba",
      "Cargar código muy rápido",
      "Actualizar módulos en producción sin detener el sistema; Erlang mantiene 2 versiones de un módulo simultáneamente",
      "Una feature experimental"
    ],
    correct: 2,
    difficulty: "C",
    explanation: "code:load_file(Module). Los procesos en la versión vieja continúan; los nuevos usan la nueva. Fundamental para sistemas 24/7 de telecomunicaciones."
  },
  {
    question: "¿Qué es Dialyzer?",
    options: [
      "Un tipo de debugger",
      "Herramienta de análisis estático de tipos para Erlang; usa Hindley-Milner con typespecs para detectar errores sin tipos obligatorios",
      "Solo para proyectos grandes",
      "Un analizador de diálogos"
    ],
    correct: 1,
    difficulty: "C",
    explanation: "-spec funcion(Type1) -> ReturnType. Dialyzer analiza el código y encuentra discrepancias de tipos, código muerto y errores sin necesitar tipos obligatorios."
  },
  {
    question: "¿Qué es el scheduler de BEAM?",
    options: [
      "Un thread del kernel",
      "Scheduler preemptivo SMP: N schedulers para N cores; cada proceso tiene budget de reducciones; work-stealing entre schedulers",
      "Un cron job",
      "Solo round-robin"
    ],
    correct: 1,
    difficulty: "B",
    explanation: "BEAM scheduler: preemptivo basado en 'reductions' (pasos de ejecución). Preempta procesos que no cooperan. SMP: cada core tiene su run queue con work-stealing."
  },
  {
    question: "¿Qué es un port en Erlang?",
    options: [
      "Un número de puerto",
      "Solo para drivers C",
      "Mecanismo para comunicación con programas externos (C, Python, etc.); comunicación por mensajes como procesos",
      "Un puerto de red"
    ],
    correct: 2,
    difficulty: "B",
    explanation: "erlang:open_port({spawn, 'cmd'}, Options). Los ports son como procesos externos. Port drivers son más rápidos pero pueden crashear la VM si tienen bugs."
  },
  {
    question: "¿Qué es PropEr / QuickCheck en Erlang?",
    options: [
      "Una librería de properties CSS",
      "Un framework de unit testing",
      "Solo para matemáticas",
      "Property-based testing: defines propiedades que deben cumplirse para cualquier input generado aleatoriamente"
    ],
    correct: 3,
    difficulty: "A",
    explanation: "prop_sorted() -> ?FORALL(L, list(integer()), is_sorted(sort(L))). PropEr genera miles de casos de test automáticamente, encontrando casos edge que tests manuales perderían."
  }
];
