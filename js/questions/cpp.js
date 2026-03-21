window.questions_cpp = [
  {
    question: "¿Cuál es la diferencia entre C y C++?",
    options: [
      "C++ es más lento siempre",
      "Son el mismo lenguaje",
      "C++ no usa punteros",
      "C++ es un superset de C que añade OOP, templates, STL, excepciones, referencias y muchas otras características mientras mantiene compatibilidad con C (con excepciones)"
    ],
    correct: 3,
    difficulty: "E",
    explanation: "C++ fue diseñado como 'C con clases' por Bjarne Stroustrup. Es un lenguaje multiparadigma: procedimental, orientado a objetos, genérico y funcional."
  },
  {
    question: "¿Qué es una clase en C++?",
    options: [
      "Un tipo definido por el usuario que combina datos (miembros) y operaciones (métodos), con control de acceso (public, private, protected)",
      "Una función especial",
      "Una estructura especial",
      "Un template especial"
    ],
    correct: 0,
    difficulty: "E",
    explanation: "class Persona { private: string nombre; public: void setNombre(string n) { nombre = n; } string getNombre() { return nombre; } };"
  },
  {
    question: "¿Qué es el constructor en C++?",
    options: [
      "Un método de copia",
      "Un método especial con el mismo nombre que la clase que inicializa el objeto; se llama automáticamente al crear una instancia",
      "El primer método definido",
      "Un método estático"
    ],
    correct: 1,
    difficulty: "E",
    explanation: "El constructor puede sobrecargarse (múltiples con distintos parámetros). El constructor por defecto no tiene parámetros. La lista de inicialización (:) inicializa miembros antes del cuerpo."
  },
  {
    question: "¿Qué es el destructor en C++?",
    options: [
      "El último método definido",
      "Un constructor inverso",
      "Un método que borra datos",
      "Un método especial (~Clase) que se llama automáticamente al destruir el objeto; libera recursos adquiridos (RAII)"
    ],
    correct: 3,
    difficulty: "E",
    explanation: "~MiClase() { delete[] ptr; }. El destructor no tiene parámetros ni tipo de retorno. Esencial para liberar memoria dinámica, cerrar archivos, liberar mutexes, etc."
  },
  {
    question: "¿Qué es una referencia en C++?",
    options: [
      "Es igual a un puntero",
      "Un alias de puntero",
      "Un alias para una variable existente; no puede ser nula, no puede redirigirse a otro objeto, y no requiere desreferenciación explícita",
      "Una constante de puntero"
    ],
    correct: 2,
    difficulty: "E",
    explanation: "int x = 5; int &r = x; r = 10; // x también es 10. Las referencias deben inicializarse al declararse. Las referencias a const permiten referenciar temporales."
  },
  {
    question: "¿Qué es la herencia en C++?",
    options: [
      "Copiar una clase",
      "Implementar una interfaz",
      "Permite que una clase (derivada) herede datos y métodos de otra (base): class Perro : public Animal {}",
      "Un tipo de template"
    ],
    correct: 2,
    difficulty: "E",
    explanation: "C++ soporta herencia pública (is-a), privada (implementada-en-términos-de) y protegida. También soporta herencia múltiple. La herencia pública es la más común."
  },
  {
    question: "¿Qué es el polimorfismo en C++ y cómo se habilita?",
    options: [
      "Tener muchas clases",
      "La capacidad de tratar objetos de clases derivadas a través de punteros/referencias de la clase base; se habilita declarando métodos como virtual",
      "Con templates",
      "Con sobrecarga de funciones"
    ],
    correct: 1,
    difficulty: "E",
    explanation: "class Animal { virtual void hablar() = 0; }; Animal *a = new Perro(); a->hablar(); llama a Perro::hablar(). Sin virtual, llama a Animal::hablar() (binding estático)."
  },
  {
    question: "¿Qué hace <code>virtual</code> en C++?",
    options: [
      "Habilita el dispatch dinámico: en runtime, el método de la clase real del objeto se llama, no el de la clase del puntero/referencia",
      "Hace el método heredable",
      "Hace el método privado",
      "Hace el método abstracto"
    ],
    correct: 0,
    difficulty: "E",
    explanation: "Virtual permite polimorfismo en tiempo de ejecución via vtable. Sin virtual: compile-time binding basado en el tipo estático del puntero. Clases base polimórficas siempre deben tener destructor virtual."
  },
  {
    question: "¿Qué es una función puramente virtual (<code>= 0</code>)?",
    options: [
      "Una función inline",
      "Una función virtual sin implementación que convierte la clase en abstracta; las clases derivadas deben implementarla",
      "Una función sin implementación que siempre falla",
      "Una función estática"
    ],
    correct: 1,
    difficulty: "E",
    explanation: "virtual void draw() = 0; La clase con al menos un método puramente virtual es abstracta y no puede instanciarse. Es el equivalente de una interfaz en C++."
  },
  {
    question: "¿Qué es la sobrecarga de operadores en C++?",
    options: [
      "Solo para tipos numéricos",
      "Una función de dos parámetros",
      "Definir el comportamiento de operadores (+, -, *, [], (), etc.) para tipos definidos por el usuario",
      "Añadir operadores nuevos al lenguaje"
    ],
    correct: 2,
    difficulty: "E",
    explanation: "Vector operator+(const Vector &v) const { return Vector(x+v.x, y+v.y); }. O como función libre: Vector operator+(Vector a, const Vector &b). Permite que los tipos personalizados se usen de forma natural."
  },
  {
    question: "¿Qué son los templates en C++?",
    options: [
      "Mecanismo de programación genérica: funciones y clases parametrizadas por tipos (u otros valores) que se instancian en tiempo de compilación",
      "Son macros mejoradas",
      "Son solo para contenedores",
      "Clases predefinidas"
    ],
    correct: 0,
    difficulty: "E",
    explanation: "template<typename T> T max(T a, T b) { return a > b ? a : b; }. max<int>(3,5) o max(3,5) (inferencia). El compilador genera código específico para cada tipo instanciado."
  },
  {
    question: "¿Qué es la STL en C++?",
    options: [
      "Un conjunto de macros",
      "Un framework de C++",
      "Una biblioteca de terceros",
      "Standard Template Library: parte de la biblioteca estándar de C++ que incluye contenedores (vector, map, set), iteradores y algoritmos (sort, find, transform)"
    ],
    correct: 3,
    difficulty: "E",
    explanation: "La STL define el patrón iterator que conecta contenedores y algoritmos. std::sort(v.begin(), v.end()) funciona con cualquier contenedor con iteradores de acceso aleatorio."
  },
  {
    question: "¿Qué es <code>std::vector</code>?",
    options: [
      "Un set ordenado",
      "Un array dinámico de la STL que crece automáticamente; acceso O(1) por índice, amortizado O(1) al agregar al final",
      "Una lista enlazada",
      "Un vector matemático"
    ],
    correct: 1,
    difficulty: "E",
    explanation: "vector<int> v; v.push_back(1); v[0] accede al primer elemento. reserve() evita realocaciones. emplace_back() construye in-place. El contenedor más usado en C++ moderno."
  },
  {
    question: "¿Qué es <code>std::string</code> en C++?",
    options: [
      "Una vista de string",
      "Un typedef de char*",
      "Una clase que gestiona strings dinámicamente; admite operaciones como +, ==, substr(), find(), y maneja memoria automáticamente",
      "Un array de char"
    ],
    correct: 2,
    difficulty: "E",
    explanation: "std::string s = \"hola\"; s += \" mundo\"; std::cout << s.length() << s.find(\"mundo\"). Mucho más seguro y cómodo que char arrays de C."
  },
  {
    question: "¿Qué hace <code>new</code> en C++?",
    options: [
      "Reserva e inicializa a cero",
      "Asigna memoria en el heap e invoca el constructor del objeto; retorna un puntero al objeto creado",
      "Solo reserva memoria",
      "Es igual a malloc"
    ],
    correct: 1,
    difficulty: "E",
    explanation: "int *p = new int(42); MiClase *obj = new MiClase(args). A diferencia de malloc, new llama al constructor. Siempre debe acompañarse de delete para evitar memory leaks."
  },
  {
    question: "¿Qué hace <code>delete</code> en C++?",
    options: [
      "Llama al destructor del objeto y luego libera la memoria en el heap; delete[] para arrays asignados con new[]",
      "Pone el puntero a nullptr",
      "Es igual a free",
      "Solo libera memoria"
    ],
    correct: 0,
    difficulty: "E",
    explanation: "delete ptr llama a ~T() y libera. delete[] arr llama a ~T() para cada elemento. Mezclar new[] con delete (sin []) es undefined behavior. Prefer smart pointers para evitar este problema."
  },
  {
    question: "¿Qué es <code>nullptr</code> en C++11?",
    options: [
      "Un literal de puntero nulo con tipo propio (nullptr_t), reemplazando NULL; no ambiguo en sobrecarga de funciones, no se convierte implícitamente a int",
      "Es una macro",
      "Es solo estético",
      "Es igual a 0"
    ],
    correct: 0,
    difficulty: "E",
    explanation: "f(0) puede llamar f(int) o f(int*). f(nullptr) solo puede llamar f(int*). nullptr es type-safe. Siempre usar nullptr en C++ moderno en lugar de NULL o 0."
  },
  {
    question: "¿Qué es <code>auto</code> en C++11?",
    options: [
      "Almacenamiento automático (C legacy)",
      "Es igual a var de JavaScript",
      "Inferencia de tipo: el compilador deduce el tipo de la variable desde el inicializador; útil para tipos complejos como iteradores",
      "Permite cambiar el tipo"
    ],
    correct: 2,
    difficulty: "E",
    explanation: "auto it = mapa.begin(); evita escribir std::map<string,int>::iterator it. El tipo se fija en compilación. Usar con cuidado para no perder legibilidad."
  },
  {
    question: "¿Qué son los smart pointers en C++?",
    options: [
      "Punteros con bounds checking",
      "Punteros más rápidos",
      "Wrappers de punteros que gestionan automáticamente la memoria: unique_ptr (propiedad única), shared_ptr (compartido con conteo de referencias), weak_ptr (sin propiedad)",
      "Iteradores especiales"
    ],
    correct: 2,
    difficulty: "E",
    explanation: "Los smart pointers evitan leaks y dangling pointers. unique_ptr: propiedad única, no copiable, movible. shared_ptr: múltiples propietarios. weak_ptr: evita ciclos con shared_ptr."
  },
  {
    question: "¿Qué es RAII en C++?",
    options: [
      "Un tipo de smart pointer",
      "Es igual a garbage collection",
      "Un patrón de diseño especial",
      "Resource Acquisition Is Initialization: los recursos se adquieren en el constructor y se liberan en el destructor, garantizando liberación incluso con excepciones"
    ],
    correct: 3,
    difficulty: "E",
    explanation: "RAII garantiza que los recursos se liberan al salir del scope, sea por retorno normal o por excepción. std::lock_guard, std::fstream, std::vector todos siguen RAII."
  },
  {
    question: "¿Qué es una lambda en C++11?",
    options: [
      "Una clase anónima especial",
      "Es solo un typedef de función",
      "Una función anónima que puede capturar variables del scope circundante; útil para callbacks, algoritmos STL y programación funcional",
      "Una función anónima lenta"
    ],
    correct: 2,
    difficulty: "E",
    explanation: "[x, &y](int z) -> int { return x + y + z; }. [=]: captura todo por valor. [&]: captura todo por referencia. El compilador crea una clase anónima (closure) para cada lambda."
  },
  {
    question: "¿Qué es <code>std::map</code>?",
    options: [
      "Un unordered_map",
      "Un multimap",
      "Un contenedor que almacena pares clave-valor ordenados por clave (árbol rojo-negro); operaciones O(log n); acceso con []",
      "Un hash map"
    ],
    correct: 2,
    difficulty: "E",
    explanation: "std::map<string,int> m; m[\"clave\"] = 5; m.find(\"clave\"). Siempre ordenado por clave. Para hash (O(1) average): std::unordered_map. El [] inserta un elemento por defecto si la clave no existe."
  },
  {
    question: "¿Qué es la excepción en C++ y cómo se lanza?",
    options: [
      "Un error fatal siempre",
      "Solo con objetos de Exception",
      "Es igual a C setjmp",
      "Un objeto lanzado con throw que puede capturarse con try/catch; permite propagar errores sin necesidad de códigos de retorno"
    ],
    correct: 3,
    difficulty: "E",
    explanation: "try { throw std::runtime_error(\"Error\"); } catch(const std::exception &e) { cerr << e.what(); }. Lanzar tipos derivados de std::exception es la práctica recomendada."
  },
  {
    question: "¿Qué es el operador de resolución de scope <code>::</code>?",
    options: [
      "Un operador de rango",
      "El operador de herencia",
      "Accede a miembros de namespace, clase o función static: std::cout, Clase::metodo_estatico, ::global (scope global)",
      "División de tipos"
    ],
    correct: 2,
    difficulty: "E",
    explanation: "::cout es el cout global. MiClase::metodo() llama al método estático. namespace::nombre accede al nombre en ese namespace. Sin prefijo accede al scope actual."
  },
  {
    question: "¿Qué es <code>const</code> en un método de clase?",
    options: [
      "El método es virtual",
      "El método retorna const",
      "El método es privado",
      "Indica que el método no modifica el estado del objeto; permite llamarlo sobre objetos const o referencias const; fundamenta el const-correctness"
    ],
    correct: 3,
    difficulty: "E",
    explanation: "int getX() const { return x; } El compilador verifica que no se modifican miembros (excepto los marcados mutable). Un objeto const solo puede llamar métodos const."
  },
  {
    question: "¿Qué es la sobrecarga de funciones en C++?",
    options: [
      "Redefinir una función de la clase base",
      "Es igual a override",
      "Definir múltiples funciones con el mismo nombre pero diferentes tipos o número de parámetros; el compilador elige la correcta en compilación (no en runtime)",
      "Un tipo de template"
    ],
    correct: 2,
    difficulty: "E",
    explanation: "int suma(int, int); double suma(double, double); float suma(float, float). El compilador elige según los argumentos. No se puede sobrecargar por tipo de retorno solamente."
  },
  {
    question: "¿Qué es <code>std::cout</code>?",
    options: [
      "Un objeto de flujo de salida estándar (std::ostream) que permite imprimir con el operador <<; parte de <iostream>",
      "Una función de impresión",
      "Una clase especial de string",
      "Un macro de printf"
    ],
    correct: 0,
    difficulty: "E",
    explanation: "std::cout << \"Hola\" << std::endl; El operador << está sobrecargado para manejar diferentes tipos. std::endl hace flush del buffer además de newline. '\\n' es más eficiente."
  },
  {
    question: "¿Qué hace el operador <code><<</code> con streams?",
    options: [
      "Operador de inserción en streams: envía datos a un ostream (cout, fstream); sobrecargado para tipos básicos y puede sobrecargarse para tipos personalizados",
      "Operador de concatenación",
      "División especial",
      "Shift de bits"
    ],
    correct: 0,
    difficulty: "E",
    explanation: "std::ostream &operator<<(std::ostream &os, const MiClase &obj) { os << obj.valor; return os; } Retornar el stream permite encadenar: cout << a << b;"
  },
  {
    question: "¿Qué es <code>std::pair</code>?",
    options: [
      "Una clase template que almacena dos valores de tipos potencialmente distintos: pair<int, string> p = {1, \"uno\"}; acceso con p.first y p.second",
      "Es igual a std::tuple",
      "Un contenedor de dos elementos",
      "Un tipo de map"
    ],
    correct: 0,
    difficulty: "E",
    explanation: "make_pair(1, \"uno\") crea un pair. En C++17: pair p{1, \"uno\"} (CTAD). La desestructuración: auto [num, str] = p (C++17 structured bindings)."
  },
  {
    question: "¿Qué es el namespace en C++?",
    options: [
      "Un espacio de nombres que evita colisiones de nombres: namespace MiEmpresa { class Vector {}; } Se accede con MiEmpresa::Vector o using namespace MiEmpresa",
      "Un tipo de módulo",
      "Una librería",
      "Un tipo de clase"
    ],
    correct: 0,
    difficulty: "E",
    explanation: "using namespace std; es conveniente pero puede causar conflictos en proyectos grandes. Preferir using std::cout; para importar solo lo necesario. Las cabeceras nunca deben tener using namespace."
  },
  {
    question: "¿Qué es la inicialización uniforme en C++11?",
    options: [
      "Sintaxis de llaves {} que puede inicializar cualquier tipo: int x{5}, vector<int> v{1,2,3}, MiClase obj{arg}; previene narrowing conversions",
      "Solo para arrays",
      "Es igual a ()",
      "Solo para structs"
    ],
    correct: 0,
    difficulty: "E",
    explanation: "int x{5.0}; es error de compilación (narrowing). int x(5.0); es solo warning. Los {} son más seguros. std::vector<int> v{1,2,3} usa initializer_list."
  },
  {
    question: "¿Qué es el move semantics en C++11?",
    options: [
      "Es igual a copiar",
      "Mover punteros manualmente",
      "Permite transferir recursos de un objeto a otro sin copiar; los objetos 'source' quedan en estado válido pero indeterminado; fundamental para la eficiencia de contenedores",
      "Solo para smart pointers"
    ],
    correct: 2,
    difficulty: "E",
    explanation: "std::move(v) convierte v en un rvalue reference, permitiendo al constructor/asignación move robar los recursos de v en lugar de copiarlos. Hace que devolver objetos grandes desde funciones sea eficiente."
  },
  {
    question: "¿Qué es <code>std::unique_ptr</code>?",
    options: [
      "Un puntero especial a un único objeto",
      "Es igual a shared_ptr",
      "Un smart pointer con propiedad única: no puede copiarse, solo moverse; al destruirse libera automáticamente el objeto apuntado",
      "Un puntero a un elemento de vector"
    ],
    correct: 2,
    difficulty: "E",
    explanation: "auto p = std::make_unique<int>(42); p es dueño exclusivo. unique_ptr no puede copiarse: garantiza que solo hay un propietario. Transferir propiedad: std::move(p)."
  },
  {
    question: "¿Qué es <code>std::shared_ptr</code>?",
    options: [
      "Un smart pointer con propiedad compartida mediante conteo de referencias; el objeto se destruye cuando el último shared_ptr que lo apunta se destruye",
      "Es igual a un GC completo",
      "Un puntero compartido con posibles ciclos",
      "Es más rápido que unique_ptr"
    ],
    correct: 0,
    difficulty: "E",
    explanation: "auto p = std::make_shared<int>(42); auto p2 = p; (refcount=2). Cuando ambos se destruyen, el objeto se borra. Cuidado con ciclos de referencias → usar weak_ptr para romperlos."
  },
  {
    question: "¿Qué hace el operador de asignación de copia <code>operator=</code>?",
    options: [
      "Solo para tipos primitivos",
      "Siempre se genera automáticamente",
      "Es igual al constructor de copia",
      "Copia el estado de un objeto en otro del mismo tipo; si no se define, el compilador genera uno que hace copia miembro a miembro (puede ser incorrecto para punteros crudos)"
    ],
    correct: 3,
    difficulty: "E",
    explanation: "La Regla de 3 (C++03): si defines destructor, debes definir constructor de copia y operador=. La Regla de 5 (C++11): añadir constructor de move y operador= de move."
  },
  {
    question: "¿Qué es el especificador <code>override</code> en C++11?",
    options: [
      "Es solo documentación",
      "Es igual a virtual",
      "Fuerza sobreescritura",
      "Indica que el método sobreescribe un virtual de la clase base; si el método no existe o la firma no coincide, el compilador da error"
    ],
    correct: 3,
    difficulty: "E",
    explanation: "void draw() override { ... } Si hay un typo en el nombre o la firma no coincide con la base, el compilador da error. Sin override, un typo crea un nuevo método sin sobreescribir."
  },
  {
    question: "¿Qué es la Regla de Cero, Tres y Cinco en C++?",
    options: [
      "Solo para templates",
      "Regla de 0: no necesita operaciones especiales (usa solo tipos RAII). Regla de 3: si defines destructor/copia, define los 3. Regla de 5 (C++11): añadir move ops",
      "Reglas de sintaxis",
      "Son restricciones del compilador"
    ],
    correct: 1,
    difficulty: "D",
    explanation: "Si una clase gestiona un recurso raw (new, FILE*, mutex), implementa los 5. Si usa solo tipos RAII (string, vector, unique_ptr), no necesitas ninguno (Regla de 0). La Regla de 0 es la mejor."
  },
  {
    question: "¿Qué es el Perfect Forwarding en C++11?",
    options: [
      "Es igual a std::move",
      "Pasar argumentos por valor siempre",
      "Un tipo de overload",
      "Con std::forward<T>(arg) en funciones template, preservar la categoría del valor (lvalue o rvalue) del argumento al pasarlo a otra función"
    ],
    correct: 3,
    difficulty: "D",
    explanation: "template<class T> void wrapper(T &&arg) { real(std::forward<T>(arg)); }. T&& es una universal reference cuando T es un parámetro de template. std::forward preserva lvalue o rvalue según T."
  },
  {
    question: "¿Qué son los rvalue references (<code>T&&</code>) en C++11?",
    options: [
      "Referencias a valores temporales siempre",
      "Son solo un alias de T&",
      "Referencias que se unen a rvalues (temporales, resultados de std::move); permiten implementar move semantics y perfect forwarding",
      "Son más eficientes que lvalue refs siempre"
    ],
    correct: 2,
    difficulty: "D",
    explanation: "int &&r = 5; r une a un temporal. T&& en template es universal reference (puede unirse a lvalue o rvalue). Move constructor: MiClase(MiClase &&otro) noexcept { ptr = otro.ptr; otro.ptr = nullptr; }"
  },
  {
    question: "¿Qué hace <code>std::move</code> exactamente?",
    options: [
      "Es un cast estático a rvalue reference (T&&); no mueve nada por sí mismo; habilita la selección del constructor/operador de move en lugar del de copia",
      "Copia el objeto al nuevo lugar",
      "Mueve un objeto en memoria",
      "Destruye el original"
    ],
    correct: 0,
    difficulty: "D",
    explanation: "std::move(x) == static_cast<T&&>(x). La función de move (constructor o operador=) es la que realmente transfiere los recursos. Después de mover, x está en estado válido pero indeterminado (no usar x excepto para asignar o destruir)."
  },
  {
    question: "¿Qué es CRTP (Curiously Recurring Template Pattern)?",
    options: [
      "Un bug famoso",
      "Una técnica donde una clase base es template de su propia clase derivada: template<class T> class Base {}; class Derived : public Base<Derived> {}. Permite polimorfismo estático",
      "Una forma de herencia múltiple",
      "Un antipatrón"
    ],
    correct: 1,
    difficulty: "D",
    explanation: "Base<T> puede llamar a métodos de T sin virtual dispatch: static_cast<T*>(this)->metodo(). Ventaja: sin overhead de vtable. Ejemplos: SFINAE patterns, mixins, Boost.Operators."
  },
  {
    question: "¿Qué es el SFINAE en C++?",
    options: [
      "Un error del compilador",
      "Una regla de naming",
      "Un tipo de excepción",
      "Substitution Failure Is Not An Error: si el compilador no puede sustituir un tipo en un template, no da error sino que descarta esa especialización del template"
    ],
    correct: 3,
    difficulty: "D",
    explanation: "template<class T, class = std::enable_if_t<std::is_integral_v<T>>> void f(T x) {}. Si T no es integral, la especialización falla silenciosamente y el compilador busca otra. Base de la metaprogramación en C++11/14."
  },
  {
    question: "¿Qué hace <code>std::enable_if</code>?",
    options: [
      "Habilita optimizaciones",
      "Una optimización de compilador",
      "Condicionalmente define un tipo (vacío o dado) según una condición booleana; permite habilitar/deshabilitar especializations de templates según traits del tipo",
      "Un tipo de assertion"
    ],
    correct: 2,
    difficulty: "D",
    explanation: "enable_if<is_integral<T>::value, T>::type define el tipo como T si T es integral, sino falla (SFINAE). C++17 simplifica con if constexpr para muchos casos de enable_if."
  },
  {
    question: "¿Qué son los type traits en C++11?",
    options: [
      "Solo para comparar tipos",
      "Metafunciones en <type_traits> que proveen información sobre tipos en compilación: is_integral, is_pointer, is_base_of, remove_cv, decay, etc.",
      "Son como RTTI",
      "Características del compilador"
    ],
    correct: 1,
    difficulty: "D",
    explanation: "static_assert(std::is_trivially_copyable_v<int>); Los type traits son la base de la metaprogramación. decay<T> aplica las mismas transformaciones que el paso de argumentos (elimina refs, array→pointer)."
  },
  {
    question: "¿Qué hace <code>if constexpr</code> en C++17?",
    options: [
      "Una forma de if en tiempo de compilación dentro de templates; la rama falsa no se compila, permitiendo código que varía por tipo sin SFINAE complejo",
      "Un if más rápido",
      "Un if con evaluación lazy",
      "Es igual a #ifdef"
    ],
    correct: 0,
    difficulty: "D",
    explanation: "template<class T> void f(T t) { if constexpr (is_integral_v<T>) { /* solo para integrales */ } else { /* para el resto */ } }. La rama no elegida no se compila, incluso si tiene errores de tipo."
  },
  {
    question: "¿Qué es <code>constexpr</code> en C++ y sus usos?",
    options: [
      "Indica que una función/variable puede evaluarse en tiempo de compilación; en C++14+ permite funciones más complejas; base para cómputo en tiempo de compilación",
      "Solo para literales",
      "Es igual a const",
      "Una constante mejorada"
    ],
    correct: 0,
    difficulty: "D",
    explanation: "constexpr int factorial(int n) { return n <= 1 ? 1 : n * factorial(n-1); } constexpr int f5 = factorial(5); Calculado en compilación. En C++20, casi cualquier código puede ser constexpr."
  },
  {
    question: "¿Qué son los structured bindings en C++17?",
    options: [
      "Permiten desempaquetar tuples, pairs, structs y arrays en variables nombradas: auto [x, y] = punto; auto [clave, valor] = *it;",
      "Solo para pairs",
      "Son iguales a tie()",
      "Vincular variables a estructuras"
    ],
    correct: 0,
    difficulty: "D",
    explanation: "auto [nombre, edad] = persona; // persona es Persona struct o pair. for(auto [k, v] : mapa) {} Las structured bindings crean referencias a los miembros, no copias (salvo que se use auto sin referencia)."
  },
  {
    question: "¿Qué es <code>std::optional<T></code> en C++17?",
    options: [
      "Es igual a puntero nullable",
      "Un wrapper de error",
      "Representa un valor que puede o no estar presente; alternativa type-safe a usar punteros o valores centinela para indicar 'sin valor'",
      "Un tipo de puntero"
    ],
    correct: 2,
    difficulty: "D",
    explanation: "std::optional<int> buscar(vector<int> &v, int x) { auto it = find(v.begin(), v.end(), x); if(it != v.end()) return *it; return std::nullopt; }. Acceder con *.value() o .value_or(default)."
  },
  {
    question: "¿Qué es <code>std::variant<T1, T2, ...></code> en C++17?",
    options: [
      "Una union type-safe que puede contener exactamente uno de los tipos especificados en cualquier momento; acceso via std::get o std::visit",
      "Un tipo de any",
      "Un tipo de union sin seguridad",
      "Es igual a union"
    ],
    correct: 0,
    difficulty: "D",
    explanation: "variant<int, float, string> v = 42; std::get<int>(v) → 42. std::visit(overloaded{[](int i){...}, [](string s){...}}, v) aplica el handler correcto. Error en runtime si el tipo activo no coincide con get<T>."
  },
  {
    question: "¿Qué es <code>std::string_view</code> en C++17?",
    options: [
      "Una vista de std::string solo",
      "Una referencia a char*",
      "Es igual a const string&",
      "Una vista no propietaria de una secuencia de caracteres (string, string literal, char array); sin copia, sin allocación; no termina en null"
    ],
    correct: 3,
    difficulty: "D",
    explanation: "string_view sv = \"literal\"; void f(string_view sv) acepta string, string literals y char* sin copia. Cuidado: string_view no gestiona el lifetime; el string subyacente debe sobrevivir."
  },
  {
    question: "¿Qué es la Class Template Argument Deduction (CTAD) en C++17?",
    options: [
      "Deducción de tipos en templates",
      "El compilador puede deducir los parámetros de tipo de un constructor de clase template: std::pair p{1, \"hola\"}; en lugar de std::pair<int, const char*> p{1, \"hola\"};",
      "Solo para funciones",
      "Es igual a auto"
    ],
    correct: 1,
    difficulty: "D",
    explanation: "std::vector v{1, 2, 3}; deduce vector<int>. std::lock_guard lg{mutex}; deduce el tipo del mutex. CTAD reduce la verbosidad. Se pueden escribir deduction guides para guiar la deducción."
  },
  {
    question: "¿Qué es <code>std::span<T></code> en C++20?",
    options: [
      "Una vista no propietaria de una secuencia contigua de T (array, vector, C array); similar a string_view pero para cualquier tipo; permite bounds-checked access",
      "Un span de tiempo",
      "Es igual a string_view",
      "Un tipo de puntero con tamaño"
    ],
    correct: 0,
    difficulty: "D",
    explanation: "void f(std::span<int> data) acepta int[], vector<int>, array<int,N> sin copia. data.size(), data.begin(), data[i]. El tamaño puede ser estático (span<int,5>) o dinámico (span<int>)."
  },
  {
    question: "¿Qué son los concepts en C++20?",
    options: [
      "Son iguales a enable_if",
      "Conceptos de diseño",
      "Solo para estilo",
      "Restricciones semánticas sobre parámetros de template expresadas de forma legible y que dan mejores errores de compilación que SFINAE"
    ],
    correct: 3,
    difficulty: "D",
    explanation: "template<std::integral T> T suma(T a, T b) { return a + b; } El concepto std::integral reemplaza enable_if<is_integral_v<T>>. Los errores de concepto son legibles. Se pueden definir conceptos custom."
  },
  {
    question: "¿Qué es <code>std::ranges</code> en C++20?",
    options: [
      "Rangos de números",
      "Solo para numéricos",
      "Una versión mejorada de los algoritmos STL que trabaja con rangos en lugar de pares de iteradores; soporta views lazy, composición con | pipe",
      "Es una copia de la STL"
    ],
    correct: 2,
    difficulty: "D",
    explanation: "std::ranges::sort(v); (sin .begin(), .end()). auto result = v | views::filter(par) | views::transform(doble); La composición de views es lazy: solo se evalúa al iterar."
  },
  {
    question: "¿Qué es <code>std::coroutine</code> (coroutines) en C++20?",
    options: [
      "Un tipo de hilo",
      "Solo para async I/O",
      "Funciones que pueden suspenderse y reanudarse; base para implementar generadores, lazy sequences, async/await; usando co_return, co_yield, co_await",
      "Son iguales a threads"
    ],
    correct: 2,
    difficulty: "D",
    explanation: "Generator<int> fibonacci() { int a=0, b=1; while(true) { co_yield a; std::tie(a,b) = std::tie(b,a+b); } } Las coroutines de C++20 son stackless (más eficientes que stackful)."
  },
  {
    question: "¿Qué son los Modules en C++20?",
    options: [
      "Un nuevo sistema de organización de código que reemplaza #include con import; mejora tiempos de compilación y encapsulamiento",
      "Bibliotecas externas",
      "Una alternativa a headers",
      "Son iguales a namespaces"
    ],
    correct: 0,
    difficulty: "D",
    explanation: "export module mi_modulo; import mi_modulo; Eliminan el problema de inclusión múltiple, reducen tiempos de compilación dramáticamente y ofrecen encapsulamiento real (lo no exportado no es visible)."
  },
  {
    question: "¿Qué hace <code>noexcept</code>?",
    options: [
      "Es solo una promesa",
      "Especifica que una función no lanza excepciones; permite optimizaciones del compilador y es requerido para move operations en muchas situaciones (noexcept swap para contenedores)",
      "Prohíbe excepciones en el programa",
      "Hace la función más lenta"
    ],
    correct: 1,
    difficulty: "D",
    explanation: "Los move constructors y move operators deben ser noexcept para que los contenedores los usen en reallocation. Si un move lanza, el contenedor no puede garantizar strong exception safety."
  },
  {
    question: "¿Qué es la especialización de templates?",
    options: [
      "Igual a overloading",
      "Proveer una implementación específica para un tipo particular: template<> class Stack<bool> usa bits en lugar de bools completos (optimización de espacio)",
      "Hacer templates más rápidos",
      "Un tipo de herencia"
    ],
    correct: 1,
    difficulty: "D",
    explanation: "Especialización total: template<> void swap<MiClase>(MiClase &a, MiClase &b) {}. Especialización parcial: template<class T> class Vec<T*> para punteros. Permite código optimizado por tipo específico."
  },
  {
    question: "¿Qué es el Argument-Dependent Lookup (ADL)?",
    options: [
      "Una regla de templates",
      "Un tipo de sobrecarga",
      "El compilador busca funciones en los namespaces de los tipos de los argumentos; permite operator<< y swap funcionar con tipos de namespaces distintos sin import explícito",
      "Buscar argumentos automáticamente"
    ],
    correct: 2,
    difficulty: "D",
    explanation: "std::swap usa ADL: si hay una swap en el namespace del tipo, la llama. operator<<(ostream, MiTipo): ADL encuentra operator<< en el namespace de MiTipo. using std::swap y swap(a,b) en código genérico es la práctica correcta."
  },
  {
    question: "¿Qué hace <code>explicit</code> en un constructor?",
    options: [
      "Lo hace constexpr",
      "Lo hace virtual",
      "Previene conversiones implícitas: explicit MyClass(int x) impide que int se convierta a MyClass automáticamente en asignaciones o llamadas a función",
      "Lo hace más rápido"
    ],
    correct: 2,
    difficulty: "D",
    explanation: "string s = 'a'; sin explicit en string(char): s sería el string con el char 'a'. Con explicit, se requiere string s{{'a'}}. Todos los constructores de un argumento deberían ser explicit a menos que la conversión sea intencional."
  },
  {
    question: "¿Qué es el initializer list constructor?",
    options: [
      "Solo para arrays",
      "Una lista de argumentos",
      "La lista de inicialización de miembros",
      "Un constructor que acepta std::initializer_list<T>; se prefiere sobre otros constructores cuando se usan llaves {}; permite sintaxis: vector<int> v{1,2,3}"
    ],
    correct: 3,
    difficulty: "D",
    explanation: "class MiVec { MiVec(initializer_list<int> il) { for(auto x : il) push_back(x); } }; MiVec v{1,2,3,4}. El initializer_list constructor tiene prioridad sobre otros cuando se usan {}."
  },
  {
    question: "¿Qué es el operador <code><=></code> (three-way comparison) en C++20?",
    options: [
      "Solo para tipos numéricos",
      "El operador 'spaceship' que retorna un resultado de ordenamiento (strong/weak/partial_ordering); definirlo permite que el compilador genere <, >, <=, >= automáticamente",
      "Comparación ternaria",
      "Un nuevo operador matemático"
    ],
    correct: 1,
    difficulty: "D",
    explanation: "auto operator<=>(const Punto &) const = default; genera automáticamente todos los operadores de comparación. std::strong_ordering para enteros, std::partial_ordering para floats (NaN complicaciones)."
  },
  {
    question: "¿Qué es el Pimpl idiom en C++?",
    options: [
      "Un tipo de factory",
      "Pointer to Implementation: ocultar los detalles de implementación en un .cpp, reduciendo el acoplamiento de headers y acelerando la compilación",
      "Un tipo de pointer",
      "Es igual a CRTP"
    ],
    correct: 1,
    difficulty: "D",
    explanation: "class Widget { struct Impl; unique_ptr<Impl> pImpl; }; Los clientes de Widget no ven Impl. Cambiar la implementación no requiere recompilar los clientes. Costo: una indirección adicional por llamada."
  },
  {
    question: "¿Qué hace <code>std::function<T></code>?",
    options: [
      "Es igual a puntero a función",
      "Un wrapper de función de tipo borrado que puede almacenar cualquier callable compatible con la firma T: funciones, lambdas, functors, métodos con bind",
      "Una función más rápida",
      "Solo para lambdas"
    ],
    correct: 1,
    difficulty: "D",
    explanation: "std::function<int(int,int)> f = [](int a, int b) { return a + b; }; Más flexible pero más costoso que punteros a función (type erasure tiene overhead). Para callbacks de alta frecuencia, preferir templates."
  },
  {
    question: "¿Qué es el idiom de type erasure en C++?",
    options: [
      "Borrar tipos en runtime",
      "Un tipo de casting",
      "Solo con virtual",
      "Esconder el tipo concreto de un objeto detrás de una interfaz uniforme sin herencia; std::any, std::function, std::span son ejemplos. Permite polimorfismo sin herencia"
    ],
    correct: 3,
    difficulty: "D",
    explanation: "Type erasure combina: una interfaz virtual (concept), un wrapper template y RAII. Alternativas: vtable manual, CRTP. Es la base de std::any y otras abstracciones de tipo."
  },
  {
    question: "¿Qué son los fold expressions en C++17?",
    options: [
      "Expresiones dobladas físicamente",
      "Permiten aplicar un operador binario a todos los elementos de un parameter pack: (args + ...) suma todos los args",
      "Son iguales a reduce",
      "Solo para metaprogramación"
    ],
    correct: 1,
    difficulty: "D",
    explanation: "template<class ...T> auto suma(T ...args) { return (args + ...); } suma(1,2,3,4) → 10. Unary fold: (args + ...) o (...+ args). Binary fold: (init + ... + args)."
  },
  {
    question: "¿Cómo funciona el vtable en C++?",
    options: [
      "Una tabla de tipos en runtime",
      "Una tabla de punteros a funciones virtuales generada por el compilador para cada clase polimórfica; cada objeto tiene un vptr que apunta a la vtable de su clase real",
      "Solo en clases abstractas",
      "Una tabla de variables"
    ],
    correct: 1,
    difficulty: "C",
    explanation: "sizeof(Clase_con_virtual) incluye el vptr. El dispatch virtual: obj->metodo() → obj->vptr[índice_de_metodo](). Overhead: una indirección extra + potencial cache miss. Costo típico: ~3ns vs ~1ns para llamadas no virtuales."
  },
  {
    question: "¿Qué es la herencia múltiple y el problema del diamante?",
    options: [
      "Un bug de C++",
      "C++ permite heredar de múltiples bases; el problema diamante: D hereda de B y C que ambas heredan de A; dos subobjectos A en D (ambigüedad y duplicación)",
      "Solo en Java",
      "Es imposible en C++"
    ],
    correct: 1,
    difficulty: "C",
    explanation: "Solución: herencia virtual (virtual class A). Costo: vbptr adicional y overhead de acceso. En la práctica, la herencia múltiple con herencia virtual es compleja; preferir interfaces (clases abstractas)."
  },
  {
    question: "¿Qué es el template metaprogramming (TMP)?",
    options: [
      "Usar el sistema de templates de C++ como un lenguaje funcional en tiempo de compilación para calcular tipos y valores; Turing-completo pero difícil de leer",
      "Metaprogramación de templates",
      "Son iguales a constexpr",
      "Solo para librerías"
    ],
    correct: 0,
    difficulty: "C",
    explanation: "template<int N> struct Factorial { static const int value = N * Factorial<N-1>::value; }; template<> struct Factorial<0> { static const int value = 1; }; En C++14+ se prefiere constexpr."
  },
  {
    question: "¿Qué es el EBO (Empty Base Optimization)?",
    options: [
      "Optimización de bucles",
      "El compilador puede hacer que una clase base vacía ocupe 0 bytes al ser parte de otra clase; permite que mixins/policies no añadan overhead de tamaño",
      "Una regla del linker",
      "Solo en MSVC"
    ],
    correct: 1,
    difficulty: "C",
    explanation: "template<class Alloc> class Container : private Alloc {}; Si Alloc es vacío, Container tiene el mismo tamaño que sin heredar. Fundamental para allocators stateless. [[no_unique_address]] en C++20 hace EBO más accesible."
  },
  {
    question: "¿Cómo funciona la deducción de tipos de templates (CTAD) con constructores complejos?",
    options: [
      "Solo funciona con tipos simples",
      "El compilador adivina",
      "CTAD siempre funciona",
      "Se pueden escribir deduction guides para ayudar al compilador: template<class T> MyVec(T*, T*) -> MyVec<T>; permite deducir el tipo desde dos punteros"
    ],
    correct: 3,
    difficulty: "C",
    explanation: "Deduction guides son necesarios cuando la deducción automática no funciona (ej: constructores que no toman T directamente). Son instrucciones al compilador sobre cómo deducir los parámetros de template."
  },
  {
    question: "¿Qué son los parameter packs y la variadic templates?",
    options: [
      "Parámetros de funciones variables",
      "Un parámetro de template que acepta cualquier número de tipos/valores: template<class ...Ts> void f(Ts... args); permite funciones y clases que toman número variable de parámetros de tipos distintos",
      "Son iguales a va_args",
      "Solo para printf mejorado"
    ],
    correct: 1,
    difficulty: "C",
    explanation: "template<class ...Ts> struct Tuple {}; Tuple<int,string,double>. Desempaquetar: sizeof...(Ts) da el número. Fold expressions en C++17 simplifican la operación sobre todos los elementos."
  },
  {
    question: "¿Qué es el Policy-Based Design?",
    options: [
      "Una técnica donde el comportamiento de una clase se configura pasando clases de política como parámetros de template; permite composición flexible sin herencia virtual",
      "Una política de empresa",
      "Solo con templates",
      "Es igual a Strategy pattern"
    ],
    correct: 0,
    difficulty: "C",
    explanation: "template<class SortPolicy, class AllocPolicy> class Container : private SortPolicy, private AllocPolicy {}; Diferentes políticas crean variantes optimizadas sin overhead de virtual. Andrei Alexandrescu lo popularizó en Modern C++ Design."
  },
  {
    question: "¿Qué es <code>std::allocator</code> y los custom allocators?",
    options: [
      "El allocador del SO",
      "Solo para new/delete",
      "La política de asignación de memoria para contenedores STL; los allocators custom permiten usar pool allocators, arenas o memoria compartida en los contenedores",
      "Son obsoletos en C++17"
    ],
    correct: 2,
    difficulty: "C",
    explanation: "template<class T> class PoolAllocator { T* allocate(size_t n) { ... } void deallocate(T*, size_t) { ... } }; vector<int, PoolAllocator<int>> v; Para código de alta performance, custom allocators pueden reducir latencia significativamente."
  },
  {
    question: "¿Cómo funcionan las lambda closures y su captura por referencia vs valor?",
    options: [
      "No hay diferencia",
      "Solo por referencia funciona",
      "Captura por valor [=]: copia en el momento de creación de la lambda; por referencia [&]: referencia al original, peligroso si la lambda sobrevive al scope; [x] o [&x] para específicos",
      "Solo por valor es seguro"
    ],
    correct: 2,
    difficulty: "C",
    explanation: "auto lambda = [x, &y]() { return x + y; }; x es una copia (segura), y es una referencia (peligrosa si la lambda escapa del scope). Para mover: [x = std::move(x)]() {}. (init capture, C++14)"
  },
  {
    question: "¿Qué es el std::pmr (polymorphic memory resources) en C++17?",
    options: [
      "Un tipo de allocator estático",
      "Solo para embebidos",
      "Un framework para allocators intercambiables en runtime: pmr::monotonic_buffer_resource (arena), pmr::pool_resource (pool), pmr::unsynchronized_pool_resource; los contenedores pmr:: los usan",
      "Memory resources remotos"
    ],
    correct: 2,
    difficulty: "C",
    explanation: "char buf[1024]; pmr::monotonic_buffer_resource mbr{buf, sizeof(buf)}; pmr::vector<int> v{&mbr}; v usa el buffer local sin heap allocation. Excelente para reducir latencia en hot paths."
  },
  {
    question: "¿Qué es la Small Buffer Optimization (SBO/SSO)?",
    options: [
      "Solo para strings",
      "Una optimización manual",
      "Una técnica donde un objeto almacena valores pequeños directamente en su buffer interno (sin heap allocation) y solo usa el heap para valores mayores que el buffer; std::string lo usa internamente",
      "Optimizar programas pequeños"
    ],
    correct: 2,
    difficulty: "C",
    explanation: "std::string: strings cortas (típicamente <15-23 chars) se almacenan en el propio objeto sin malloc. std::any, std::function también usan SBO. Evita el overhead de malloc para el caso común."
  },
  {
    question: "¿Cómo funciona el Return Value Optimization (RVO/NRVO)?",
    options: [
      "Optimiza el return statement",
      "Solo en funciones simples",
      "Requiere move constructor",
      "El compilador construye el objeto de retorno directamente en el lugar donde se usará, eliminando la copia/move; RVO: temporal, NRVO: variable local con nombre"
    ],
    correct: 3,
    difficulty: "C",
    explanation: "Con RVO: std::string f() { return std::string(\"hola\"); } el compilador elimina la copia. NRVO: std::string f() { std::string s = \"hola\"; return s; } también se elide en la mayoría de compiladores. Garantizado en C++17 para prvalues."
  },
  {
    question: "¿Qué es el RTTI (Run-Time Type Information)?",
    options: [
      "Una librería de tipos",
      "Es parte de vtable siempre",
      "Solo para excepciones",
      "Mecanismo del compilador que provee información de tipos en runtime: typeid(obj) retorna un type_info, dynamic_cast verifica el tipo real. Se puede deshabilitar con -fno-rtti"
    ],
    correct: 3,
    difficulty: "C",
    explanation: "dynamic_cast<Derived*>(base_ptr) retorna nullptr si base_ptr no apunta a un Derived (o derivado). Tiene costo: la clase debe tener al menos un virtual. Para rendimiento crítico, evitar dynamic_cast."
  },
  {
    question: "¿Qué es el Curiously Recurring Template Pattern con CRTP para mixins?",
    options: [
      "Un antipatrón",
      "Un patrón de herencia",
      "Solo para Singleton",
      "Clase derivada que pasa ella misma como parámetro de template a su base; la base puede llamar métodos de la derivada sin virtual; permite mixins con 0 overhead en runtime"
    ],
    correct: 3,
    difficulty: "C",
    explanation: "template<class T> struct Comparable { bool operator!=(const T &o) const { return !(static_cast<const T*>(this)->operator==(o)); } }; class A : public Comparable<A> { bool operator==(const A&) const; };"
  },
  {
    question: "¿Cómo funcionan los coroutines generators en C++20?",
    options: [
      "Son iguales a funciones normales",
      "Solo con std::generator",
      "Funciones que usan co_yield para retornar valores sucesivos; cada llamada reanuda desde donde se suspendió; requieren implementar promise_type y el tipo de retorno",
      "Igual a generators de Python"
    ],
    correct: 2,
    difficulty: "C",
    explanation: "std::generator<int> rango(int inicio, int fin) { for(int i=inicio; i<fin; ++i) co_yield i; }. C++23 añade std::generator estándar. Para C++20 se necesita implementar o usar librerías como cppcoro."
  },
  {
    question: "¿Qué son los execution policies en C++17?",
    options: [
      "Son solo hints",
      "Solo con threads manuales",
      "Políticas de compañía",
      "Parámetros que se pueden pasar a muchos algoritmos STL para indicar paralelismo: seq, par, par_unseq; permiten paralelización automática con un cambio mínimo de código"
    ],
    correct: 3,
    difficulty: "C",
    explanation: "std::sort(std::execution::par, v.begin(), v.end()); paralleliza el sort. par_unseq: paralelo + vectorizado (SIMD). Requiere TBB o similar en algunos implementaciones. Cuidado: no todos los algoritmos ganan con paralelismo."
  },
  {
    question: "¿Qué es la técnica de tag dispatch en C++?",
    options: [
      "Enviar tags a funciones",
      "Solo para debug",
      "Seleccionar entre implementaciones distintas pasando un tipo etiqueta vacío como argumento; más legible que enable_if para algunas situaciones; usada en iterators de STL",
      "Un tipo de SFINAE"
    ],
    correct: 2,
    difficulty: "C",
    explanation: "struct input_iterator_tag {}; struct random_access_iterator_tag : input_iterator_tag {}; advance_impl(it, n, random_access_iterator_tag{}) llama a la versión optimizada para random access vs iteración lineal."
  },
  {
    question: "¿Qué es el operator() (functor) y cuándo es preferible a lambdas?",
    options: [
      "Son siempre equivalentes",
      "Los functors son obsoletos en C++11",
      "Una clase con operator() sobrecargado que actúa como función; preferible a lambdas cuando necesita estado complejo, constructores/destructores, o herencia",
      "El operador de llamada a función"
    ],
    correct: 2,
    difficulty: "C",
    explanation: "struct Multiplicador { int factor; Multiplicador(int f) : factor(f) {} int operator()(int x) const { return x * factor; } }; Un functor puede tener estado persistente entre llamadas y ser más legible que lambdas complejas."
  },
  {
    question: "¿Cómo funcionan los friend declarations en C++?",
    options: [
      "Solo entre clases relacionadas",
      "Son iguales a public",
      "Permiten que una función o clase externa acceda a los miembros privados/protegidos; rompe el encapsulamiento pero es necesario para operator<< y operadores binarios simétricos",
      "Herencia especial"
    ],
    correct: 2,
    difficulty: "C",
    explanation: "friend ostream& operator<<(ostream&, const MiClase&); Los friends deben declararse en la clase pero se definen fuera. Los tests con acceso a privados usan friend class TestClass. Usar con moderación."
  },
  {
    question: "¿Qué es la propagación de excepciones y el stack unwinding?",
    options: [
      "No se garantiza en C++",
      "Cuando se lanza una excepción, C++ destruye automáticamente todos los objetos locales en el stack (destructores se llaman en orden inverso) antes de llegar al catch",
      "Solo con RAII",
      "Propagar errores manualmente"
    ],
    correct: 1,
    difficulty: "C",
    explanation: "El stack unwinding garantiza que los destructores RAII se llamen. Si un destructor lanza durante el unwinding: std::terminate(). Por eso los destructores siempre deben ser noexcept."
  },
  {
    question: "¿Qué son los nested templates y las member templates?",
    options: [
      "Son iguales a templates normales",
      "Solo en templates de clase",
      "Funciones miembro que son templates independientemente de si la clase lo es: template<class U> void copiar(U &otro). Permiten que un método funcione con tipos distintos al de la clase",
      "Templates dentro de clases"
    ],
    correct: 2,
    difficulty: "C",
    explanation: "template<class T> class Vector { template<class U> Vector(const Vector<U> &v) {} }; El constructor de conversión entre vectores de tipos distintos pero convertibles. Muy usado en la STL."
  },
  {
    question: "¿Qué es la técnica overloaded pattern para std::visit?",
    options: [
      "Sobrecargar funciones",
      "Crear un functor que hereda de múltiples lambdas para hacer pattern matching sobre std::variant: struct overloaded : Ts... { using Ts::operator()...; }; template<class ...Ts> overloaded(Ts...) -> overloaded<Ts...>",
      "Es una función estándar",
      "Solo en C++23"
    ],
    correct: 1,
    difficulty: "C",
    explanation: "std::visit(overloaded{ [](int i) {...}, [](string s) {...}, }, variante); El overloaded helper hereda el operator() de cada lambda. C++23 tiene std::overload en la biblioteca."
  },
  {
    question: "¿Cómo funciona el concept subsumption en C++20?",
    options: [
      "Siempre es ambiguo",
      "Resolver conflictos de concepts",
      "Cuando múltiples funciones con concepts se aplican, el compilador elige la más específica (restringida): si el concept A implica B, la función que requiere A es más específica que la que requiere B",
      "Es igual a SFINAE ordering"
    ],
    correct: 2,
    difficulty: "C",
    explanation: "concept Integro = requires(T t) { requires std::is_integral_v<T>; }; concept EnteroPositivo = Integro<T> && (T{} > 0); Una función con EnteroPositivo es más restringida que una con Integro; el compilador la prefiere."
  },
  {
    question: "¿Cómo implementar un allocator ring buffer (circular buffer) eficiente en C++?",
    options: [
      "Con deque",
      "Solo con vector",
      "Usando list",
      "Dos punteros (head/tail) sobre un array fijo; push: escribir en tail y avanzar; pop: leer de head y avanzar; módulo para wrap around; lock-free con atomics para single-producer/single-consumer"
    ],
    correct: 3,
    difficulty: "B",
    explanation: "SPSC ring buffer: dos AtomicInteger para head/tail. El productor escribe en tail%N sin bloqueo si cola no llena. El consumidor lee de head%N sin bloqueo si no vacía. Cache-friendly: datos contiguos en memoria."
  },
  {
    question: "¿Qué es el problema del fat binary y LTO en C++?",
    options: [
      "LTO (Link-Time Optimization) permite al compilador optimizar entre unidades de compilación: inlining cross-file, eliminación de código muerto global. Puede crear binarios más pequeños pero compilación más lenta",
      "LTO siempre aumenta el tamaño",
      "Binarios demasiado grandes",
      "Solo en GCC"
    ],
    correct: 0,
    difficulty: "B",
    explanation: "LLVM ThinLTO escala mejor para proyectos grandes. LTO permite devirtualización: si el compilador puede probar el tipo real del objeto, reemplaza virtual dispatch con llamada directa."
  },
  {
    question: "¿Cómo funciona el memory layout de objetos con herencia virtual?",
    options: [
      "Solo con vptr",
      "No hay overhead",
      "Es igual a herencia normal",
      "La herencia virtual añade un vbptr (virtual base pointer) en la clase derivada; el subobject de la base virtual está al final del objeto; el acceso a sus miembros requiere una indirección extra"
    ],
    correct: 3,
    difficulty: "B",
    explanation: "class D : virtual public A {}; sizeof(D) > sizeof(D sin virtual). El vbptr apunta a una tabla que indica el offset del subobject A. Impacta el rendimiento del acceso a miembros de la base virtual."
  },
  {
    question: "¿Qué es el hazard pointer pattern en programación lock-free?",
    options: [
      "Un puntero peligroso",
      "Una técnica para safe memory reclamation en estructuras lock-free: un hilo registra un puntero como 'hazard' indicando que está siendo usado; el GC no puede liberar pointers en hazard lists",
      "Es igual a shared_ptr",
      "Solo en sistema operativos"
    ],
    correct: 1,
    difficulty: "B",
    explanation: "Hazard pointers evitan el problema ABA: antes de leer un puntero en una estructura lock-free, registrarlo como hazardoso. El recolector verifica la lista de hazards antes de liberar. Alternativa: epoch-based reclamation."
  },
  {
    question: "¿Cómo se implementa un lock-free stack en C++?",
    options: [
      "No es posible",
      "Usando CAS (compare_exchange_weak/strong) sobre la cabeza de la lista; el CAS es atómico: si la cabeza no cambió desde la lectura, actualiza y retorna true; si cambió (ABA problem), reintenta",
      "Con atomic<bool>",
      "Con mutex normal"
    ],
    correct: 1,
    difficulty: "B",
    explanation: "void push(T val) { Node *n = new Node{val, top.load()}; while(!top.compare_exchange_weak(n->next, n)); } El CAS garantiza que no perdemos updates de otros threads. Problema ABA: usar tagged pointers (pointer + counter)."
  },
  {
    question: "¿Qué son los continuation-passing style (CPS) transforms en C++?",
    options: [
      "Transformar funciones para que reciban un callback 'continuación' en lugar de retornar; base de algunas implementaciones de async; CompletableFuture-like en C++",
      "Es igual a coroutines",
      "Solo en haskell",
      "Un estilo de código"
    ],
    correct: 0,
    difficulty: "B",
    explanation: "CPS evita el stack por completo: todas las funciones toman su continuation como argumento. En C++: templates + lambdas pueden hacer CPS transforms. Es la base teórica de lo que las coroutines hacen automáticamente."
  },
  {
    question: "¿Cómo funciona la virtual dispatch devirtualization y sus límites?",
    options: [
      "No existe",
      "Eliminar virtual del código",
      "El compilador puede reemplazar llamadas virtuales con llamadas directas cuando puede probar en compilación el tipo real del objeto; requiere análisis del flujo y sin función siendo llamada en herencia compleja",
      "Es automático siempre"
    ],
    correct: 2,
    difficulty: "B",
    explanation: "Con LTO o en funciones pequeñas: si MiClase es final o si el objeto es una variable local conocida, el compilador puede llamar directamente. Perfil guiado (PGO) y feedback de runtime pueden guiar la devirtualización."
  },
  {
    question: "¿Qué es el tipo Tag Type en C++ y su rol en strong typedefs?",
    options: [
      "Crear tipos nuevos con semántica distinta basados en el mismo tipo subyacente: template<class Tag> class Strong { int val; } Strong<struct MetrosTag> meters; Strong<struct KilosTag> kilos; // metros != kilos",
      "Un tipo sin datos",
      "Son iguales a typedef",
      "Un tipo de enum"
    ],
    correct: 0,
    difficulty: "B",
    explanation: "Strong typedefs evitan pasar metros donde se esperan kilos. La clase wraps el valor y no se convierte implícitamente. Boost.Units y fluent.cpp implementan esto."
  },
  {
    question: "¿Cómo funciona el std::jthread de C++20?",
    options: [
      "Un thread más rápido",
      "Un thread que se une automáticamente al destruirse (RAII) y soporta cancelación cooperativa via stop_token; resuelve el problema de joinable threads olvidados de std::thread",
      "Es igual a std::thread",
      "Solo para async I/O"
    ],
    correct: 1,
    difficulty: "B",
    explanation: "std::jthread t(funcion, stop_token); Al destruirse t, llama a request_stop() y luego join(). La función puede verificar stop_token::stop_requested() para terminación cooperativa. Mucho más seguro que std::thread."
  },
  {
    question: "¿Qué son los std::latch y std::barrier en C++20?",
    options: [
      "Son iguales a mutex",
      "Tipos de mutex",
      "std::latch: contador decrementado por múltiples threads, espera hasta 0 (single-use). std::barrier: punto de sincronización reutilizable donde N threads esperan antes de continuar",
      "Solo en HPC"
    ],
    correct: 2,
    difficulty: "B",
    explanation: "std::latch: para inicialización paralela, esperar que N tareas completen. std::barrier: para procesamiento en fases donde todos los threads sincronizan al final de cada fase (reusable). Reemplazan CountDownLatch/CyclicBarrier de Java."
  },
  {
    question: "¿Cómo funciona el std::atomic_ref en C++20?",
    options: [
      "Una referencia atómica estándar",
      "Permite operaciones atómicas sobre cualquier objeto existente sin declararlo _Atomic; útil para acceso atómico a elementos de arrays u objetos en memoria compartida",
      "Solo para punteros",
      "Es igual a volatile"
    ],
    correct: 1,
    difficulty: "B",
    explanation: "int arr[100]; std::atomic_ref<int> aref{arr[5]}; aref.fetch_add(1); Permite hacer atómica una variable que no fue declarada atomic. Requiere que el objeto esté correctamente alineado."
  },
  {
    question: "¿Qué es el problema del double-checked locking sin memory barriers?",
    options: [
      "Es solo un bug histórico",
      "Un patrón seguro",
      "Solo en arquitecturas ARM",
      "Sin std::memory_order correcto, el compilador/CPU puede reordenar: instance = new Singleton() puede dar un puntero no-null a un objeto parcialmente construido visto por otro thread"
    ],
    correct: 3,
    difficulty: "B",
    explanation: "Solución con C++11: std::call_once con std::once_flag, o static local variable (garantizada thread-safe en C++11). El inicializador de variable local estática es atómico: static Singleton s; return &s."
  },
  {
    question: "¿Cómo optimizar el rendimiento de std::vector para hot paths?",
    options: [
      "Usar reserve() siempre",
      "Solo usar arrays",
      "No se puede optimizar más",
      "Combinar: reserve() para evitar reallocaciones, emplace_back() para construir in-place, ranges::sort para SIMD, considerar boost::container::small_vector para vectores pequeños (SBO), alineación con align_val_t"
    ],
    correct: 3,
    difficulty: "B",
    explanation: "Perfilado primero. reserve() elimina N reallocaciones. emplace_back vs push_back: evita copia. Acceso secuencial es cache-friendly. Para hot path: arrays C con tamaño conocido pueden ser más predecibles."
  },
  {
    question: "¿Qué es el técnica de type list en template metaprogramming?",
    options: [
      "Una lista de tipos en runtime",
      "Una estructura de tipos que actúa como lista en tiempo de compilación: using TypeList = std::tuple<int, float, string>; con metafunciones para manipularla (head, tail, find, transform)",
      "Solo con boost::mpl",
      "Son iguales a variadic templates"
    ],
    correct: 1,
    difficulty: "B",
    explanation: "template<class... Ts> struct TypeList {}; template<class TL> struct Head; template<class T, class... Ts> struct Head<TypeList<T,Ts...>> { using type = T; }; Boost.MP11 y Brigand son librerías modernas de metaprogramación con type lists."
  },
  {
    question: "¿Qué es el memory fence y su relación con std::atomic?",
    options: [
      "Una barrera de seguridad",
      "Una instrucción que establece restricciones sobre el reordenamiento de memoria por el CPU y el compilador; las operaciones std::atomic con memory_order emiten fences implícitos o explícitos",
      "Solo en hardware especial",
      "No existe en C++ estándar"
    ],
    correct: 1,
    difficulty: "B",
    explanation: "std::atomic_thread_fence(std::memory_order_release) emite un memory fence explícito. x86: mfence para seq_cst, store-release solo requiere compilador fence (el hardware x86 es TSO). ARM necesita dmb instrucciones."
  },
  {
    question: "¿Cómo implementar un compilador JIT simple en C++ con LLVM?",
    options: [
      "Solo con assembly",
      "No es posible en C++",
      "Usar la LLVM C++ API: crear módulos IR, definir funciones con IRBuilder, JIT compilar con LLJIT o OrcJIT, ejecutar el código generado. C++ + LLVM es la forma más productiva de hacer JIT",
      "Solo en academia"
    ],
    correct: 2,
    difficulty: "A",
    explanation: "include <llvm/IR/IRBuilder.h>; crear LLVMContext, Module, Function, BasicBlock; usar IRBuilder para generar instrucciones; LLJIT::create() para JIT. El mismo mecanismo que usa Julia, Swift, Rust en sus compiladores."
  },
  {
    question: "¿Cómo funciona la implementación de vtable para múltiple herencia en C++?",
    options: [
      "Es igual a herencia simple",
      "No hay overhead extra",
      "Una vtable para todo",
      "Con herencia múltiple, el objeto tiene múltiples vtables (una por base polimórfica); algunos métodos necesitan thunks (ajuste del this pointer) al saltar entre las diferentes subobjetos"
    ],
    correct: 3,
    difficulty: "A",
    explanation: "class C : public A, public B {}; El objeto C tiene dos vptr, uno para A y otro para B. Llamar a un método de B a través de un puntero A requiere ajustar this. La Itanium C++ ABI especifica el layout."
  },
  {
    question: "¿Qué es el deferred evaluation con expression templates?",
    options: [
      "Un patrón donde las operaciones se representan como tipos en lugar de evaluarse inmediatamente; permite optimización de expresiones completas (ej: eliminar temporales en álgebra matricial)",
      "Solo con lambdas",
      "Evaluación lazy en C++",
      "Es igual a constexpr"
    ],
    correct: 0,
    difficulty: "A",
    explanation: "a + b * c con expression templates no crea temporales: retorna Add<A, Mul<B, C>> que se evalúa al asignar. Eigen y Blaze lo usan para álgebra lineal. El compilador puede optimizar la expresión completa."
  },
  {
    question: "¿Cómo funciona el reflection estático propuesto para C++26?",
    options: [
      "Solo con boost.hana",
      "No existe en el estándar C++",
      "Solo con macros",
      "P2996: reflexión en tiempo de compilación usando el operador ^: consteval auto members = members_of(^MiClase); permite iterar campos, métodos, tipos en compilación sin RTTI"
    ],
    correct: 3,
    difficulty: "A",
    explanation: "La propuesta P2996 permite: ^T para obtener un reflejo del tipo T, members_of para iterar miembros, type_of, name_of. Eliminaría la necesidad de codegen para serialización, ORM, bind, etc."
  },
  {
    question: "¿Qué es el concepto de heterogeneous lookup en std::map/unordered_map?",
    options: [
      "Buscar con distintos tipos de clave",
      "Es automático siempre",
      "Permite buscar en un map con un tipo comparable a la clave sin construir la clave completa: map<string, V> con find(string_view) sin copiar a string; requiere transparent comparator",
      "Solo desde C++20"
    ],
    correct: 2,
    difficulty: "A",
    explanation: "std::map<string, V, std::less<>>: el <> activa heterogeneous lookup. std::unordered_map requiere tanto heterogeneous hash como equal. Evita construcciones innecesarias de objetos clave temporales."
  },
  {
    question: "¿Cómo funciona el ABI stability y sus implicaciones en C++?",
    options: [
      "No es importante en C++",
      "Cambia con cada compilación",
      "Es solo para C",
      "El ABI define el layout binario de clases, la convención de llamada, name mangling; cambiar el ABI rompe la compatibilidad con binarios compilados con versiones anteriores de la librería"
    ],
    correct: 3,
    difficulty: "A",
    explanation: "Pimpl idiom, abstract interfaces, C APIs como wrappers: técnicas para ABI stability. La STL no es ABI stable entre compiladores. The Itanium C++ ABI es el estándar de facto en Linux/macOS."
  },
  {
    question: "¿Qué es el monadic operations en std::expected (C++23)?",
    options: [
      "std::expected<T,E> tiene and_then(), or_else(), transform() que permiten componer operaciones que pueden fallar de forma funcional, como Rust's Result::map y ?",
      "Solo para optional",
      "Operaciones matemáticas",
      "Son funciones especiales"
    ],
    correct: 0,
    difficulty: "A",
    explanation: "expected<int,Error> result = parseNum(str).and_then(validate).transform([](int x){ return x*2; }); Si alguno falla, el error se propaga. Evita if/else chains de manejo de errores."
  },
  {
    question: "¿Cómo funciona el deducing this (explicit object parameter) en C++23?",
    options: [
      "Solo para lambdas recursivas",
      "Un parámetro explícito de tipo this: void f(this auto& self) permite que la función sea un template sobre el tipo del objeto, habilitando CRTP sin herencia y acceso correcto a tipos derivados",
      "Es igual a CRTP",
      "Deducir el tipo de this implícito"
    ],
    correct: 1,
    difficulty: "A",
    explanation: "void print(this auto const& self) { std::cout << self.value; } Funciona para cualquier tipo con value. También permite lambdas recursivas: [](this auto& self, int n) { return n <= 0 ? 0 : self(n-1) + n; }"
  },
  {
    question: "¿Qué es el std::executor y el P2300 proposal (sender/receiver)?",
    options: [
      "P2300 propone un framework de ejecución asíncrona para C++26 basado en senders (describen async work) y receivers (manejan completiones); reemplazaría el zoo actual de async",
      "El modelo de concurrencia de C++23",
      "Solo para GPU",
      "Es ya el estándar de C++23"
    ],
    correct: 0,
    difficulty: "A",
    explanation: "Sender describe trabajo asíncrono sin ejecutarlo. connect(sender, receiver) lo ejecuta. then(sender, f) compone. Algoritmos: just, schedule, on, when_all. Unifique threads, GPU, coroutines, I/O async."
  },
  {
    question: "¿Cómo se implementa el runtime polymorphism sin herencia virtual en C++?",
    options: [
      "Solo con CRTP",
      "Type erasure manual: struct Concept { void (*draw_)(void*); void *obj_; }; o std::function-based type erasure; o variant+visit para conjunto cerrado. Evita vtable overhead en algunos casos",
      "Es siempre más lento",
      "No es posible"
    ],
    correct: 1,
    difficulty: "A",
    explanation: "dyno y te::te (Type Erasure library) implementan polimorfismo sin herencia. Ventaja: sin vptr en el objeto original, los tipos no necesitan heredar de nada. Desventaja: la tabla de funciones es externa."
  },
  {
    question: "¿Qué es el std::mdspan de C++23 y sus usos?",
    options: [
      "Solo para matrices 2D",
      "Un span multi-dimensional: mdspan<float, extents<N,M>> para matrices. Soporta layouts (C-order, Fortran-order, strided) y accessors personalizados sin copiar datos",
      "Es igual a vector<vector<>>",
      "Una vista de múltiples dimensiones"
    ],
    correct: 1,
    difficulty: "A",
    explanation: "mdspan<float, dextents<2>> m{data, 3, 4}; m[1,2] accede al elemento (1,2). Layout policies: layout_right (row-major), layout_left (column-major), layout_stride. Base de std::linalg (álgebra lineal estándar C++26)."
  },
  {
    question: "¿Cómo funciona el parallel algorithms y std::execution policy en implementaciones reales?",
    options: [
      "Solo escalan linealmente",
      "Son siempre más rápidos",
      "MSVC usa PPL, GCC usa TBB, Clang puede usar OpenMP; el scheduling de tareas divide el rango, usa work-stealing para balancear carga; el overhead de scheduling solo vale para ranges grandes",
      "Solo en hardware específico"
    ],
    correct: 2,
    difficulty: "A",
    explanation: "Umbral: para N < ~10000, el overhead de parallelismo no compensa. par_unseq puede vectorizar además de paralelizar. Cuidado: side effects en lambdas de algoritmos paralelos son UB. Los datos deben ser independientes."
  },
  {
    question: "¿Cómo implementar un tipo-safe heterogeneous container en C++ (type-indexed storage)?",
    options: [
      "No es posible con type safety",
      "Mapear tipos a instancias usando type_index como clave; template<class T> T& get() { return *std::any_cast<T>(&storage[std::type_index(typeid(T))]); }",
      "Con unordered_map<string,any>",
      "Con std::any"
    ],
    correct: 1,
    difficulty: "S",
    explanation: "TypeMap es la base de Service Locator y DI containers en C++. Hylo y otros frameworks lo usan. La key de type_index es la forma estándar, pero puede eliminarse con TMP y std::tuple para conjuntos cerrados."
  },
  {
    question: "¿Qué es el concept map pattern y cómo difiere de type classes de Haskell?",
    options: [
      "Un mapa de conceptos",
      "En C++, los concepts se verifican estructuralmente (duck typing en compilación): si T tiene .begin()/.end(), satisface Iterable. En Haskell, las type classes son instancias explícitas (nominal). C++ no requiere registro explícito",
      "Son idénticos",
      "C++ es menos potente"
    ],
    correct: 1,
    difficulty: "S",
    explanation: "La diferencia fundamental: en C++ el concepto se satisface automáticamente si el tipo tiene la interfaz requerida. En Haskell, debes instanciar explícitamente el typeclass. C++ es más cómodo pero menos seguro (namespace pollution)."
  },
  {
    question: "¿Cómo funciona el mecanismo de SIMD autovectorización y cuándo fallar?",
    options: [
      "El compilador siempre vectoriza",
      "El compilador vectoriza loops simples con acceso secuencial y sin dependencias entre iteraciones; falla con: punteros que pueden aliasarse, control flow complejo dentro del loop, accesos no alineados",
      "Solo con pragmas",
      "Es manual siempre"
    ],
    correct: 1,
    difficulty: "S",
    explanation: "Para garantizar vectorización: restrict/noalias, datos alineados (alignas(32)), loops simples, -O3 -march=native. Verificar con -fopt-info-vec (GCC) o -Rpass=vectorize (Clang). Intrinsics para vectorización manual."
  },
  {
    question: "¿Cómo diseñar una biblioteca de álgebra lineal con expression templates y BLAS?",
    options: [
      "Solo con Eigen",
      "Expression templates para eliminar temporales en expresiones como A*B+C; delegar a BLAS/LAPACK para operaciones grandes (GEMM, etc.); usar mdspan para el layout flexible",
      "Con arrays 2D simples",
      "Con vector<vector<double>>"
    ],
    correct: 1,
    difficulty: "S",
    explanation: "La estrategia de Eigen: expression templates + lazy evaluation + dispatch a BLAS para matrices > threshold. Para pequeñas matrices: fully inlined + SIMD. __attribute__((matrix_type)) es extensión de Clang para matrices nativas."
  },
  {
    question: "¿Qué son los Metaclasses propuestos para C++ (Herb Sutter)?",
    options: [
      "Ya están en el estándar",
      "Una propuesta para C++ que permitiría transformaciones de clases en tiempo de compilación mediante 'metaclasses': definir constraints y transformaciones que se aplican a todas las clases de ese metaclass",
      "Clases con metadatos",
      "Solo para ABI"
    ],
    correct: 1,
    difficulty: "S",
    explanation: "La propuesta usaría reflexión estática (P2996) para transformar el AST de clases. interface metaclass: genera automáticamente métodos virtuales desde la declaración. Value metaclass: generates ops de comparación, hash, etc."
  },
  {
    question: "¿Cómo implementar un runtime generics system similar a los generics de Java en C++?",
    options: [
      "Con void* siempre",
      "Con RTTI siempre",
      "Solo con templates",
      "Type erasure con virtual dispatch interno: el contenedor genérico almacena objetos de cualquier tipo que cumplan un concepto, con dispatch virtual interno para las operaciones requeridas. Sean Parent's inheritance is the base class of evil talk"
    ],
    correct: 3,
    difficulty: "S",
    explanation: "Sean Parent: polimorfismo sin herencia. struct concept_t { virtual void draw() const = 0; }; template<class T> struct model_t : concept_t { T data; void draw() const { ::draw(data); } }; Totalmente desacoplado de la jerarquía de herencia."
  },
  {
    question: "¿Qué es el mecanismo de interoperabilidad C++/Rust y sus desafíos?",
    options: [
      "Solo con C headers",
      "cxx.rs genera código de interop seguro: expone FFI tipo-safe entre C++ y Rust. Desafíos: namespaces, templates (no exportables directamente), excepciones (Rust no las tiene), destructores",
      "Solo con JSON",
      "No es posible"
    ],
    correct: 1,
    difficulty: "S",
    explanation: "cxx crate: define un 'bridge' con tipos compartidos y funciones exportadas/importadas. Los tipos se deben declarar en el bridge. Las excepciones C++ se convierten en Result en Rust. No soporta templates instanciados."
  },
  {
    question: "¿Cómo diseñar un sistema de tipos para un DSL embebido en C++ (EDSL)?",
    options: [
      "Solo con Boost.Proto",
      "Con strings y parsing",
      "Con macros únicamente",
      "Usar el sistema de tipos de C++ para crear una sintaxis embebida: clases que sobrecargan operadores para construir un AST de tipos; el EDSL se 'ejecuta' al evaluarse la expresión"
    ],
    correct: 3,
    difficulty: "S",
    explanation: "Spirit (parser EDSL), Boost.Lambda, range-v3 pipes (|), C++ assertion libraries con expresiones like REQUIRE(x == y). El AST de tipos se construye en compilación; la evaluación ocurre al asignar o llamar."
  },
  {
    question: "¿Qué es el hardware transactional memory (HTM) y su soporte en C++?",
    options: [
      "No funciona en la práctica",
      "Solo en servidores",
      "Memoria en hardware especial",
      "Intel TSX: instrucciones XBEGIN/XEND/XABORT para transacciones en hardware. C++ no tiene soporte estándar; se accede vía intrinsics o librerías. Las transacciones abortan automáticamente ante conflictos y se reintentan"
    ],
    correct: 3,
    difficulty: "S",
    explanation: "HTM para secciones críticas cortas puede ser más rápido que mutexes. Limitaciones: conflictos frecuentes (abort), llamadas al SO dentro de una tx (abort), cache overflow (abort). Requiere fallback software."
  },
  {
    question: "¿Cómo se implementa un sistema de meta-object protocol (MOP) en C++?",
    options: [
      "Con virtual siempre",
      "Solo en Smalltalk",
      "Con RTTI",
      "Un MOP permite interceptar y modificar operaciones del lenguaje (creación de objetos, acceso a miembros, llamadas a métodos) en runtime. En C++ se simula con proxies, expression templates y type erasure"
    ],
    correct: 3,
    difficulty: "S",
    explanation: "Un MOP en C++: smart pointers que interceptan operator->, operator[], etc.; lambdas que envuelven llamadas a métodos; reflection (cuando esté disponible). Qt Meta-Object System es el MOP más usado en C++."
  }
];
