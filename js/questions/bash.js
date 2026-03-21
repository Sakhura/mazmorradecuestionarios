window.questions_bash = [
  {
    question: "¿Qué es Bash?",
    options: [
      "Un editor de texto",
      "Bourne Again SHell: intérprete de comandos y lenguaje de scripting para sistemas Unix/Linux",
      "Un tipo de terminal",
      "Un lenguaje de programación compilado"
    ],
    correct: 1,
    difficulty: "E",
    explanation: "Bash es el shell por defecto en la mayoría de sistemas Linux y macOS. Creado por Brian Fox en 1989 como reemplazo del Bourne Shell (sh)."
  },
  {
    question: "¿Cómo se crea una variable en Bash?",
    options: [
      "set nombre='valor'",
      "var nombre='valor'",
      "nombre='valor' (sin espacios alrededor de =)",
      "$nombre='valor'"
    ],
    correct: 2,
    difficulty: "E",
    explanation: "En Bash, nombre='valor' sin espacios. Con espacios sería interpretado como un comando. Se accede con $nombre."
  },
  {
    question: "¿Cómo se ejecuta un script Bash?",
    options: [
      "exec script.sh",
      "run script.sh",
      "start script.sh",
      "bash script.sh o ./script.sh (con chmod +x)"
    ],
    correct: 3,
    difficulty: "E",
    explanation: "bash script.sh ejecuta sin permisos especiales. ./script.sh requiere chmod +x script.sh. El shebang #!/bin/bash en la primera línea indica el intérprete."
  },
  {
    question: "¿Qué es el shebang (#!)? ",
    options: [
      "Una directiva de compilación",
      "La primera línea que indica el intérprete: #!/bin/bash o #!/usr/bin/env bash",
      "El número de versión",
      "Un comentario"
    ],
    correct: 1,
    difficulty: "E",
    explanation: "#!/usr/bin/env bash es más portable que #!/bin/bash. Permite ejecutar el script directamente con ./script.sh."
  },
  {
    question: "¿Cómo se imprime texto en Bash?",
    options: [
      "puts texto",
      "print 'texto'",
      "echo 'texto'",
      "printf texto"
    ],
    correct: 2,
    difficulty: "E",
    explanation: "echo imprime con salto de línea. printf ofrece más control de formato. echo -n imprime sin salto de línea."
  },
  {
    question: "¿Qué hace <code>$?</code>?",
    options: [
      "Una variable especial de fecha",
      "El código de salida del último comando: 0 = éxito, distinto de 0 = error",
      "El PID del proceso actual",
      "El número de argumentos"
    ],
    correct: 1,
    difficulty: "E",
    explanation: "if [ $? -eq 0 ]; then echo 'Éxito'; fi. Convención Unix: 0=OK, 1-255=error. Verificar después de cada comando crítico."
  },
  {
    question: "¿Qué hace <code>$0, $1, $2</code>?",
    options: [
      "Variables de arrays",
      "Variables del sistema",
      "Números de línea",
      "$0=nombre del script, $1...$N=argumentos posicionales"
    ],
    correct: 3,
    difficulty: "E",
    explanation: "$0: el script mismo. $1: primer argumento. $#: número de argumentos. $@: todos los argumentos como lista. $*: todos como string."
  },
  {
    question: "¿Cómo se hace una condición en Bash?",
    options: [
      "if [ condición ]; then ... fi",
      "while condicion do fi",
      "if (condicion):",
      "if condicion { }"
    ],
    correct: 0,
    difficulty: "E",
    explanation: "if [ -f archivo ]; then ... elif [ ... ]; then ... else ... fi. Los espacios dentro de [ ] son obligatorios. [[ ]] es más moderno y poderoso."
  },
  {
    question: "¿Qué hace el operador <code>-f</code> en tests?",
    options: [
      "Filtra procesos",
      "Verifica si hay fallo",
      "Verifica si el path es un archivo regular: [ -f 'archivo.txt' ]",
      "Fuerza la ejecución"
    ],
    correct: 2,
    difficulty: "E",
    explanation: "-f: archivo regular. -d: directorio. -e: existe. -r: readable. -w: writable. -x: executable. -z: string vacío. -n: string no vacío."
  },
  {
    question: "¿Qué hace <code>for i in {1..5}</code>?",
    options: [
      "Crea una lista de 5 elementos",
      "Crea un rango de archivos",
      "Solo funciona con números",
      "Itera i desde 1 hasta 5"
    ],
    correct: 3,
    difficulty: "E",
    explanation: "for i in {1..5}; do echo $i; done. También: for f in *.txt; para iterar archivos. for ((i=0; i<5; i++)) para estilo C."
  },
  {
    question: "¿Qué hace el pipe <code>|</code>?",
    options: [
      "OR lógico",
      "Conecta la salida de un comando con la entrada del siguiente: ls | grep .txt",
      "Redirige errores",
      "Escribe en un archivo"
    ],
    correct: 1,
    difficulty: "E",
    explanation: "ls -la | grep 'txt' | wc -l: lista, filtra .txt, cuenta líneas. La salida estándar del izquierdo va a stdin del derecho."
  },
  {
    question: "¿Qué hace <code>></code> y <code>>></code>?",
    options: [
      "Incrementa una variable",
      "Redirige errores",
      "Comparación de números",
      "> redirige stdout sobrescribiendo; >> añade al final del archivo"
    ],
    correct: 3,
    difficulty: "E",
    explanation: "echo 'texto' > archivo.txt sobrescribe. echo 'más' >> archivo.txt añade. 2> redirige stderr. 2>&1 redirige stderr a stdout."
  },
  {
    question: "¿Qué hace <code>grep</code>?",
    options: [
      "Crea archivos",
      "Busca patrones en texto: grep 'patrón' archivo o cat file | grep 'patrón'",
      "Lista directorios",
      "Mueve archivos"
    ],
    correct: 1,
    difficulty: "E",
    explanation: "grep -r 'error' /var/log: recursivo. -i: case-insensitive. -n: número de línea. -v: invierte (líneas sin match). grep -E para regex extendido."
  },
  {
    question: "¿Qué hace <code>chmod +x</code>?",
    options: [
      "Crea un link simbólico",
      "Cambia el grupo",
      "Cambia el propietario",
      "Añade permiso de ejecución a un archivo"
    ],
    correct: 3,
    difficulty: "E",
    explanation: "chmod +x script.sh hace el archivo ejecutable. chmod 755 = rwxr-xr-x. chmod 600 = rw-------. Los permisos son owner/group/other."
  },
  {
    question: "¿Qué hace <code>find</code>?",
    options: [
      "Busca en Google",
      "Busca dentro de archivos",
      "Busca archivos en el sistema: find /path -name '*.txt' -type f",
      "Lista el directorio actual"
    ],
    correct: 2,
    difficulty: "E",
    explanation: "find . -name '*.log' -mtime +7 -delete: archivos .log más viejos de 7 días. -exec para ejecutar comandos. find es recursivo por defecto."
  },
  {
    question: "¿Qué hace <code>sed</code>?",
    options: [
      "Solo elimina líneas",
      "Es igual que grep",
      "Muestra archivos",
      "Stream editor: sed 's/viejo/nuevo/g' archivo sustituye texto; sed -n '5,10p' imprime líneas 5-10"
    ],
    correct: 3,
    difficulty: "D",
    explanation: "sed 's/error/ERROR/gi' log.txt: sustituye case-insensitive, global. sed -i para editar in-place. -n suprime output por defecto."
  },
  {
    question: "¿Qué hace <code>awk</code>?",
    options: [
      "Solo para CSV",
      "Procesamiento de texto por columnas: awk '{print $1, $3}' imprime columnas 1 y 3",
      "Mueve archivos",
      "Un compilador de scripts"
    ],
    correct: 1,
    difficulty: "D",
    explanation: "awk '{sum += $2} END {print sum}' data.txt suma la columna 2. FS para separador de campos. NR=número de registro, NF=número de campos."
  },
  {
    question: "¿Qué son las funciones en Bash?",
    options: [
      "Programas separados",
      "Bloques de código reutilizables: function nombre() { } o nombre() { }",
      "Alias de comandos",
      "Solo comandos externos"
    ],
    correct: 1,
    difficulty: "D",
    explanation: "function greet() { echo \"Hola $1\"; }; greet 'Ana'. Las variables locales necesitan: local var=valor. Retornar status con return N."
  },
  {
    question: "¿Qué es <code>xargs</code>?",
    options: [
      "Un tipo de variable",
      "Un tipo de loop",
      "Construye y ejecuta comandos desde entrada estándar: find . -name '*.txt' | xargs rm",
      "Una variable de argumentos"
    ],
    correct: 2,
    difficulty: "D",
    explanation: "echo 'a b c' | xargs mkdir crea directorios a, b, c. xargs -I {} mv {} {}.bak. Útil cuando hay demasiados argumentos para el límite del OS."
  },
  {
    question: "¿Qué hace <code>trap</code> en Bash?",
    options: [
      "Captura señales y eventos: trap 'cleanup' EXIT INT TERM — ejecuta cleanup al salir o recibir SIGINT/SIGTERM",
      "Atrapa errores de sintaxis",
      "Pausa el script",
      "Solo captura SIGINT"
    ],
    correct: 0,
    difficulty: "D",
    explanation: "trap 'rm -f $TMPFILE' EXIT asegura limpieza. trap '' INT ignora Ctrl+C. trap - INT restaura comportamiento por defecto."
  },
  {
    question: "¿Qué es <code>set -euo pipefail</code>?",
    options: [
      "Son flags de grep",
      "Configura variables de entorno",
      "Una directiva de compilación",
      "Hace scripts más seguros: -e sale si comando falla, -u error en variable no definida, -o pipefail propaga errores en pipes"
    ],
    correct: 3,
    difficulty: "D",
    explanation: "Best practice: #!/bin/bash; set -euo pipefail. Evita que scripts continúen silenciosamente después de errores."
  },
  {
    question: "¿Qué hace el command substitution <code>$(comando)</code>?",
    options: [
      "Ejecuta el comando y substituye con su salida: DATE=$(date +%Y-%m-%d)",
      "Crea un subshell",
      "Solo para echo",
      "Substituye variables"
    ],
    correct: 0,
    difficulty: "D",
    explanation: "VERSION=$(git describe --tags). RESULT=$(curl -s api/data). El backtick `comando` es equivalente pero menos legible. Pueden anidarse: $(echo $(pwd))"
  },
  {
    question: "¿Qué es un heredoc?",
    options: [
      "Un tipo de comentario",
      "Texto multilínea: cat << EOF ... EOF; permite escribir bloques de texto sin escapar caracteres",
      "Un comando especial",
      "Un tipo de array"
    ],
    correct: 1,
    difficulty: "D",
    explanation: "cat << 'EOF'\nLínea 1\nLínea 2\nEOF. Con comillas: no expande variables. Sin comillas: expande variables y comandos."
  },
  {
    question: "¿Qué hace <code>source</code> o <code>.</code>?",
    options: [
      "Ejecuta un script en el shell actual (no subshell): source ~/.bashrc o . ~/.bashrc",
      "Muestra el código fuente",
      "Compila el script",
      "Solo para archivos de configuración"
    ],
    correct: 0,
    difficulty: "D",
    explanation: "source script.sh ejecuta en el shell actual, por lo que las variables y funciones definidas quedan disponibles. Útil para cargar .env, funciones compartidas."
  },
  {
    question: "¿Qué es process substitution <code><()</code>?",
    options: [
      "Un tipo de pipe",
      "Redirección de proceso",
      "Una variable de proceso",
      "Permite que la salida de un comando sea tratada como un archivo: diff <(ls dir1) <(ls dir2)"
    ],
    correct: 3,
    difficulty: "C",
    explanation: "diff <(sort file1) <(sort file2) compara sin crear archivos temporales. comm <(sort a) <(sort b). Útil para comandos que necesitan nombres de archivo."
  },
  {
    question: "¿Qué son los arrays en Bash?",
    options: [
      "Solo arrays numéricos",
      "No existen en Bash",
      "arr=(a b c); acceso: ${arr[0]}; todos: ${arr[@]}; longitud: ${#arr[@]}",
      "Son igual que en Python"
    ],
    correct: 2,
    difficulty: "C",
    explanation: "arr=(uno dos tres). ${arr[1]}=dos. for item in ${arr[@]}. Append: arr+=(cuatro). Bash 4+ también tiene arrays asociativos: declare -A."
  },
  {
    question: "¿Qué es brace expansion en Bash?",
    options: [
      "Solo para números",
      "Expansión de llaves en JSON",
      "Un tipo de variable",
      "Genera múltiples strings: mkdir {src,tests,docs}; mv archivo.{txt,bak}"
    ],
    correct: 3,
    difficulty: "C",
    explanation: "cp /etc/nginx/nginx.conf{,.bak} crea backup. echo {a,b,c}.txt genera a.txt b.txt c.txt. touch file{1..5}.txt crea file1.txt a file5.txt."
  },
  {
    question: "¿Qué hace <code>wait</code> en Bash?",
    options: [
      "Pausa N segundos",
      "Bloquea el script indefinidamente",
      "Espera entrada del usuario",
      "Espera a que procesos en background terminen: job1 & job2 & wait; o wait $PID para proceso específico"
    ],
    correct: 3,
    difficulty: "C",
    explanation: "cmd1 & cmd2 & wait. wait $! espera el último proceso en background. wait $PID espera proceso específico. Retorna el exit code del proceso."
  },
  {
    question: "¿Qué es el coprocess (<code>coproc</code>)?",
    options: [
      "Un tipo de subshell",
      "Solo en bash 5",
      "Lanza un proceso en background con bidirectional pipes: coproc MYPROC { command; }; echo data >&${MYPROC[1]}; read -u ${MYPROC[0]}",
      "Un proceso de copia"
    ],
    correct: 2,
    difficulty: "B",
    explanation: "coproc permite comunicación bidireccional con un proceso: stdin/stdout conectados a file descriptors del shell padre."
  },
  {
    question: "¿Qué es <code>mapfile</code> / <code>readarray</code>?",
    options: [
      "Lee archivos de mapa",
      "Es igual que read",
      "Solo para archivos binarios",
      "Lee líneas de stdin o archivo a un array: mapfile -t arr < archivo.txt o comando | mapfile -t arr"
    ],
    correct: 3,
    difficulty: "B",
    explanation: "mapfile -t lines < input.txt. -t elimina los newlines. Bash 4+. Más eficiente que el loop while IFS= read -r."
  }
];
