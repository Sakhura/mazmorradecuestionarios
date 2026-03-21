window.questions_bash = [
  {
    question: "¿Qué es Bash?",
    options: [
      "Un editor de texto avanzado para sistemas Unix con macros programables y soporte de plugins para desarrollo",
      "Bourne Again SHell: intérprete de comandos y lenguaje de scripting para sistemas Unix/Linux",
      "Un emulador de terminal gráfico que proporciona una interfaz visual para ejecutar comandos del sistema operativo",
      "Un lenguaje de programación compilado de propósito general similar a C pero diseñado para administración de sistemas"
    ],
    correct: 1,
    difficulty: "E",
    explanation: "Bash es el shell por defecto en la mayoría de sistemas Linux y macOS. Creado por Brian Fox en 1989 como reemplazo del Bourne Shell (sh)."
  },
  {
    question: "¿Cómo se crea una variable en Bash?",
    options: [
      "set nombre='valor' usando set que declara la variable en el entorno global accesible por procesos hijos",
      "var nombre='valor' con la palabra clave var que introduce el scope léxico de la variable en el bloque actual",
      "nombre='valor' (sin espacios alrededor de =)",
      "$nombre='valor' usando el sigilo $ tanto en la declaración como en el uso posterior de la variable"
    ],
    correct: 2,
    difficulty: "E",
    explanation: "En Bash, nombre='valor' sin espacios. Con espacios sería interpretado como un comando. Se accede con $nombre."
  },
  {
    question: "¿Cómo se ejecuta un script Bash?",
    options: [
      "exec script.sh usando exec que reemplaza el proceso actual con el script sin crear un subshell hijo",
      "run script.sh con la palabra clave run que Bash usa para scripts con permisos de lectura sin chmod previo",
      "start script.sh heredado de la sintaxis de Windows que Bash 5.0 adoptó para compatibilidad multiplataforma",
      "bash script.sh o ./script.sh (con chmod +x)"
    ],
    correct: 3,
    difficulty: "E",
    explanation: "bash script.sh ejecuta sin permisos especiales. ./script.sh requiere chmod +x script.sh. El shebang #!/bin/bash en la primera línea indica el intérprete."
  },
  {
    question: "¿Qué es el shebang (#!) en un script Bash?",
    options: [
      "Una directiva de compilación que activa el modo de optimización del intérprete de Bash para scripts frecuentes",
      "La primera línea que indica el intérprete: #!/bin/bash o #!/usr/bin/env bash",
      "El número de versión del script expresado en formato semántico para gestión de compatibilidad entre versiones",
      "Un comentario especial que Bash usa para documentar el propósito del script en el sistema de ayuda interno"
    ],
    correct: 1,
    difficulty: "E",
    explanation: "#!/usr/bin/env bash es más portable que #!/bin/bash. Permite ejecutar el script directamente con ./script.sh."
  },
  {
    question: "¿Cómo se imprime texto en Bash?",
    options: [
      "puts texto usando puts heredado de Ruby y Perl que Bash adopta para strings con interpolación automática",
      "print 'texto' con la función print que envía el texto a stdout con codificación UTF-8 automática en Bash 4+",
      "echo 'texto'",
      "printf texto con la función printf que siempre requiere especificadores de formato como %s o %d obligatoriamente"
    ],
    correct: 2,
    difficulty: "E",
    explanation: "echo imprime con salto de línea. printf ofrece más control de formato. echo -n imprime sin salto de línea."
  },
  {
    question: "¿Qué contiene la variable especial $? en Bash?",
    options: [
      "Una variable especial que almacena la fecha y hora actual del sistema en formato UNIX timestamp de segundos",
      "El código de salida del último comando: 0 = éxito, distinto de 0 = error",
      "El PID del proceso Bash actual; equivale a $$ que es el identificador del proceso en el sistema operativo",
      "El número de argumentos pasados al script; equivale a $# que cuenta los parámetros posicionales recibidos"
    ],
    correct: 1,
    difficulty: "E",
    explanation: "if [ $? -eq 0 ]; then echo 'Éxito'; fi. Convención Unix: 0=OK, 1-255=error. Verificar después de cada comando crítico."
  },
  {
    question: "¿Qué representan $0, $1, $2 en Bash?",
    options: [
      "Son índices de arrays en Bash: $0 el primero del array global, $1 el segundo, $2 el tercero respectivamente",
      "Variables de entorno del sistema: $0 es la variable HOME, $1 es PATH y $2 es el USER del sistema operativo",
      "Números de línea del script: $0 la línea actual, $1 la anterior, $2 la anterior a la anterior del script ejecutado",
      "$0=nombre del script, $1...$N=argumentos posicionales"
    ],
    correct: 3,
    difficulty: "E",
    explanation: "$0: el script mismo. $1: primer argumento. $#: número de argumentos. $@: todos los argumentos como lista. $*: todos como string."
  },
  {
    question: "¿Cómo se escribe una condición en Bash?",
    options: [
      "if [ condición ]; then ... fi",
      "while condicion do ... fi usando la misma sintaxis que el bucle while pero con fi como terminador del bloque",
      "if (condicion): usando paréntesis con dos puntos como Python; Bash acepta esta sintaxis desde la versión 4.0",
      "if condicion { } usando llaves de apertura y cierre como en C y Go para delimitar el bloque condicional"
    ],
    correct: 0,
    difficulty: "E",
    explanation: "if [ -f archivo ]; then ... elif [ ... ]; then ... else ... fi. Los espacios dentro de [ ] son obligatorios. [[ ]] es más moderno y poderoso."
  },
  {
    question: "¿Qué verifica el operador -f en los tests de Bash?",
    options: [
      "Verifica si el comando anterior falló retornando un código de salida distinto de cero en la última ejecución",
      "Comprueba si una variable tiene el atributo de solo lectura declarado con declare -r en el entorno actual",
      "Verifica si el path es un archivo regular: [ -f 'archivo.txt' ]",
      "Forza la ejecución del test ignorando los permisos del archivo y retornando siempre true en el resultado"
    ],
    correct: 2,
    difficulty: "E",
    explanation: "-f: archivo regular. -d: directorio. -e: existe. -r: readable. -w: writable. -x: executable. -z: string vacío. -n: string no vacío."
  },
  {
    question: "¿Qué hace for i in {1..5} en Bash?",
    options: [
      "Crea una lista de 5 elementos vacíos en el array global $LIST sin iterar sobre ellos inmediatamente",
      "Crea un rango de nombres de archivos usando globbing; {1..5} expande a los archivos 1, 2, 3, 4, 5 del directorio",
      "Solo funciona con números enteros positivos; para strings o números negativos se requiere la sintaxis seq alternativa",
      "Itera i desde 1 hasta 5"
    ],
    correct: 3,
    difficulty: "E",
    explanation: "for i in {1..5}; do echo $i; done. También: for f in *.txt; para iterar archivos. for ((i=0; i<5; i++)) para estilo C."
  },
  {
    question: "¿Qué hace el operador pipe | en Bash?",
    options: [
      "Es el operador OR lógico que retorna éxito si cualquiera de los dos comandos conectados tiene código de salida 0",
      "Conecta la salida de un comando con la entrada del siguiente: ls | grep .txt",
      "Redirige los mensajes de error del stderr al archivo de log del sistema operativo para su análisis posterior",
      "Escribe la salida de un comando en un archivo nuevo sobreescribiendo el contenido anterior del archivo destino"
    ],
    correct: 1,
    difficulty: "E",
    explanation: "ls -la | grep 'txt' | wc -l: lista, filtra .txt, cuenta líneas. La salida estándar del izquierdo va a stdin del derecho."
  },
  {
    question: "¿Qué diferencia hay entre > y >> en Bash?",
    options: [
      "Incrementa una variable numérica; >> incrementa dos veces: x> suma 1 al valor, x>> suma 2 al valor actual",
      "Redirige errores del stderr a un archivo; >> redirige tanto stdout como stderr al mismo archivo destino",
      "Son operadores de comparación numérica: > mayor que, >> mayor o igual que para variables enteras en Bash",
      "> redirige stdout sobrescribiendo; >> añade al final del archivo"
    ],
    correct: 3,
    difficulty: "E",
    explanation: "echo 'texto' > archivo.txt sobrescribe. echo 'más' >> archivo.txt añade. 2> redirige stderr. 2>&1 redirige stderr a stdout."
  },
  {
    question: "¿Qué hace el comando grep en Bash?",
    options: [
      "Crea archivos de texto vacíos con el nombre especificado; es equivalente a touch pero con contenido de marcador",
      "Busca patrones en texto: grep 'patrón' archivo o cat file | grep 'patrón'",
      "Lista el contenido de directorios con soporte de filtro por extensión de archivo y permisos del sistema de archivos",
      "Mueve y renombra archivos entre directorios del filesystem usando rutas absolutas o relativas como argumentos"
    ],
    correct: 1,
    difficulty: "E",
    explanation: "grep -r 'error' /var/log: recursivo. -i: case-insensitive. -n: número de línea. -v: invierte (líneas sin match). grep -E para regex extendido."
  },
  {
    question: "¿Qué hace chmod +x en Bash?",
    options: [
      "Crea un enlace simbólico hacia el archivo especificado en el directorio de binarios del sistema /usr/local/bin",
      "Cambia el grupo propietario del archivo al grupo especificado usando el GID del sistema operativo actual",
      "Cambia el propietario del archivo al usuario actual usando el UID del proceso que ejecuta el comando chmod",
      "Añade permiso de ejecución a un archivo"
    ],
    correct: 3,
    difficulty: "E",
    explanation: "chmod +x script.sh hace el archivo ejecutable. chmod 755 = rwxr-xr-x. chmod 600 = rw-------. Los permisos son owner/group/other."
  },
  {
    question: "¿Para qué sirve el comando find en Bash?",
    options: [
      "Busca texto dentro del contenido de archivos usando expresiones regulares; es más potente que grep para búsquedas",
      "Busca en internet usando el motor de búsqueda configurado en el archivo ~/.bashrc del usuario del sistema",
      "Busca archivos en el sistema: find /path -name '*.txt' -type f",
      "Lista el contenido del directorio actual con formato extendido mostrando permisos, propietarios y fechas de modificación"
    ],
    correct: 2,
    difficulty: "E",
    explanation: "find . -name '*.log' -mtime +7 -delete: archivos .log más viejos de 7 días. -exec para ejecutar comandos. find es recursivo por defecto."
  },
  {
    question: "¿Qué hace sed en Bash?",
    options: [
      "Solo puede eliminar líneas de archivos de texto; para sustituciones de texto se debe usar awk o perl en su lugar",
      "Es un alias mejorado de grep con soporte de expresiones regulares extendidas y sustitución en memoria",
      "Muestra archivos paginados en la terminal con soporte de búsqueda y navegación hacia adelante y atrás",
      "Stream editor: sed 's/viejo/nuevo/g' archivo sustituye texto; sed -n '5,10p' imprime líneas 5-10"
    ],
    correct: 3,
    difficulty: "D",
    explanation: "sed 's/error/ERROR/gi' log.txt: sustituye case-insensitive, global. sed -i para editar in-place. -n suprime output por defecto."
  },
  {
    question: "¿Qué hace awk en Bash?",
    options: [
      "Solo procesa archivos en formato CSV con separador coma; para otros separadores se debe usar cut o python",
      "Procesamiento de texto por columnas: awk '{print $1, $3}' imprime columnas 1 y 3",
      "Mueve archivos entre directorios preservando los permisos y atributos extendidos del sistema de archivos",
      "Es un compilador de scripts de shell que genera binarios ejecutables optimizados para mayor velocidad de ejecución"
    ],
    correct: 1,
    difficulty: "D",
    explanation: "awk '{sum += $2} END {print sum}' data.txt suma la columna 2. FS para separador de campos. NR=número de registro, NF=número de campos."
  },
  {
    question: "¿Cómo se definen funciones en Bash?",
    options: [
      "Son programas ejecutables separados que Bash llama como subprocesos; no existen funciones internas en Bash puro",
      "Bloques de código reutilizables: function nombre() { } o nombre() { }",
      "Son alias de comandos del sistema que Bash expande antes de ejecutarlos en el proceso actual del shell",
      "Solo pueden llamarse como comandos externos del sistema; no se pueden pasar argumentos a funciones de Bash"
    ],
    correct: 1,
    difficulty: "D",
    explanation: "function greet() { echo \"Hola $1\"; }; greet 'Ana'. Las variables locales necesitan: local var=valor. Retornar status con return N."
  },
  {
    question: "¿Qué hace xargs en Bash?",
    options: [
      "Es un tipo de variable especial de Bash que almacena automáticamente los argumentos del script en un array",
      "Es un tipo de bucle que itera sobre los argumentos posicionales del script procesando uno por cada iteración",
      "Construye y ejecuta comandos desde entrada estándar: find . -name '*.txt' | xargs rm",
      "Es una variable de entorno que contiene todos los argumentos del último comando ejecutado en la sesión actual"
    ],
    correct: 2,
    difficulty: "D",
    explanation: "echo 'a b c' | xargs mkdir crea directorios a, b, c. xargs -I {} mv {} {}.bak. Útil cuando hay demasiados argumentos para el límite del OS."
  },
  {
    question: "¿Qué hace trap en Bash?",
    options: [
      "Captura señales y eventos: trap 'cleanup' EXIT INT TERM — ejecuta cleanup al salir o recibir SIGINT/SIGTERM",
      "Atrapa errores de sintaxis del script antes de ejecutarlo usando análisis estático del código fuente Bash",
      "Pausa la ejecución del script hasta que el usuario presione una tecla o llegue una señal del sistema operativo",
      "Solo puede capturar SIGINT (Ctrl+C); para otras señales se deben usar mecanismos de wait y kill separados"
    ],
    correct: 0,
    difficulty: "D",
    explanation: "trap 'rm -f $TMPFILE' EXIT asegura limpieza. trap '' INT ignora Ctrl+C. trap - INT restaura comportamiento por defecto."
  },
  {
    question: "¿Qué hace set -euo pipefail en Bash?",
    options: [
      "Son flags que se pasan a comandos externos como grep, sed y awk para activar el modo extendido de cada uno",
      "Configura las variables de entorno globales del sistema con los valores del archivo /etc/environment del sistema",
      "Es una directiva de compilación que activa las optimizaciones agresivas del intérprete de Bash en producción",
      "Hace scripts más seguros: -e sale si comando falla, -u error en variable no definida, -o pipefail propaga errores en pipes"
    ],
    correct: 3,
    difficulty: "D",
    explanation: "Best practice: #!/bin/bash; set -euo pipefail. Evita que scripts continúen silenciosamente después de errores."
  },
  {
    question: "¿Qué hace la command substitution $(comando) en Bash?",
    options: [
      "Ejecuta el comando y substituye con su salida: DATE=$(date +%Y-%m-%d)",
      "Crea un subshell nuevo sin heredar las variables del entorno actual del shell padre que ejecuta el script",
      "Solo se puede usar con el comando echo para capturar la salida formateada en variables de tipo string",
      "Substituye las referencias a variables dentro de strings con sus valores interpolados del entorno del proceso"
    ],
    correct: 0,
    difficulty: "D",
    explanation: "VERSION=$(git describe --tags). RESULT=$(curl -s api/data). El backtick `comando` es equivalente pero menos legible. Pueden anidarse: $(echo $(pwd))"
  },
  {
    question: "¿Qué es un heredoc en Bash?",
    options: [
      "Un tipo de comentario multilínea que Bash ignora durante la ejecución pero documenta secciones del script",
      "Texto multilínea: cat << EOF ... EOF; permite escribir bloques de texto sin escapar caracteres",
      "Un comando especial de Bash que lee archivos de configuración en formato YAML para inicializar variables",
      "Un tipo de array bidimensional que almacena textos largos separados por delimitadores configurables en Bash 5"
    ],
    correct: 1,
    difficulty: "D",
    explanation: "cat << 'EOF'\nLínea 1\nLínea 2\nEOF. Con comillas: no expande variables. Sin comillas: expande variables y comandos."
  },
  {
    question: "¿Qué hace source o . en Bash?",
    options: [
      "Ejecuta un script en el shell actual (no subshell): source ~/.bashrc o . ~/.bashrc",
      "Muestra el código fuente del script especificado con resaltado de sintaxis en el terminal del usuario",
      "Compila el script Bash a bytecode para acelerar futuras ejecuciones; el bytecode se guarda en ~/.bash_cache",
      "Solo sirve para cargar archivos de configuración de Bash; no puede ejecutar scripts con funciones ni arrays"
    ],
    correct: 0,
    difficulty: "D",
    explanation: "source script.sh ejecuta en el shell actual, por lo que las variables y funciones definidas quedan disponibles. Útil para cargar .env, funciones compartidas."
  },
  {
    question: "¿Qué es la process substitution <() en Bash?",
    options: [
      "Es un tipo de pipe nombrado que conecta la salida de un proceso a la entrada de otro mediante un FIFO temporal",
      "Es una forma de redirección que envía la salida de un proceso directamente al stderr del proceso receptor",
      "Es una variable especial que almacena el PID del proceso de sustitución lanzado en el último comando ejecutado",
      "Permite que la salida de un comando sea tratada como un archivo: diff <(ls dir1) <(ls dir2)"
    ],
    correct: 3,
    difficulty: "C",
    explanation: "diff <(sort file1) <(sort file2) compara sin crear archivos temporales. comm <(sort a) <(sort b). Útil para comandos que necesitan nombres de archivo."
  },
  {
    question: "¿Cómo se usan los arrays en Bash?",
    options: [
      "Solo se soportan arrays de números enteros; para strings se deben usar variables separadas o archivos de texto",
      "Los arrays no existen en Bash estándar; solo están disponibles en zsh y ksh como extensión no portable",
      "arr=(a b c); acceso: ${arr[0]}; todos: ${arr[@]}; longitud: ${#arr[@]}",
      "Los arrays en Bash tienen la misma sintaxis que en Python: arr = ['a', 'b', 'c'] con corchetes y comas"
    ],
    correct: 2,
    difficulty: "C",
    explanation: "arr=(uno dos tres). ${arr[1]}=dos. for item in ${arr[@]}. Append: arr+=(cuatro). Bash 4+ también tiene arrays asociativos: declare -A."
  },
  {
    question: "¿Qué es la brace expansion en Bash?",
    options: [
      "Solo funciona con rangos numéricos enteros; para rangos de letras o strings se requiere el comando seq externo",
      "Es la expansión de variables dentro de strings con llaves: ${VAR} para resolver ambigüedades de nombres largos",
      "Es un tipo de variable especial que Bash expande al valor del último directorio accedido con cd en la sesión",
      "Genera múltiples strings: mkdir {src,tests,docs}; mv archivo.{txt,bak}"
    ],
    correct: 3,
    difficulty: "C",
    explanation: "cp /etc/nginx/nginx.conf{,.bak} crea backup. echo {a,b,c}.txt genera a.txt b.txt c.txt. touch file{1..5}.txt crea file1.txt a file5.txt."
  },
  {
    question: "¿Qué hace wait en Bash?",
    options: [
      "Pausa la ejecución del script durante N segundos como sleep; wait 5 es equivalente a sleep 5 en Bash moderno",
      "Bloquea el script indefinidamente hasta recibir una señal SIGUSR1 o SIGUSR2 del proceso administrador externo",
      "Espera a que el usuario presione Enter antes de continuar; es equivalente a read sin asignación de variable",
      "Espera a que procesos en background terminen: job1 & job2 & wait; o wait $PID para proceso específico"
    ],
    correct: 3,
    difficulty: "C",
    explanation: "cmd1 & cmd2 & wait. wait $! espera el último proceso en background. wait $PID espera proceso específico. Retorna el exit code del proceso."
  },
  {
    question: "¿Qué hace mapfile / readarray en Bash?",
    options: [
      "Lee archivos de datos en formato binario de mapa de memoria y los carga como arrays de bytes en Bash 5+",
      "Es equivalente a read -a pero para una sola línea; lee los campos separados por IFS en un array en Bash 4",
      "Solo puede leer archivos binarios en plataformas de 64 bits; para archivos de texto se usa while read IFS",
      "Lee líneas de stdin o archivo a un array: mapfile -t arr < archivo.txt o comando | mapfile -t arr"
    ],
    correct: 3,
    difficulty: "B",
    explanation: "mapfile -t lines < input.txt. -t elimina los newlines. Bash 4+. Más eficiente que el loop while IFS= read -r."
  },
  {
    question: "¿Qué es un coprocess (coproc) en Bash?",
    options: [
      "Es un tipo de subshell que hereda todas las variables del padre pero no puede modificar las variables del padre",
      "Solo está disponible en Bash 5.0+; en versiones anteriores se debe usar mkfifo para comunicación bidireccional",
      "Lanza un proceso en background con bidirectional pipes: coproc MYPROC { command; }; echo data >&${MYPROC[1]}; read -u ${MYPROC[0]}",
      "Es un proceso de copia que duplica el descriptor de archivo stdout de un comando a múltiples destinos simultáneos"
    ],
    correct: 2,
    difficulty: "B",
    explanation: "coproc permite comunicación bidireccional con un proceso: stdin/stdout conectados a file descriptors del shell padre."
  }
];
