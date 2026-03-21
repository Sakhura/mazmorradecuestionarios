window.questions_vbnet = [
  {
    question: "¿Qué es VB.NET?",
    options: [
      "Lenguaje orientado a objetos de Microsoft sobre .NET; sucesor de Visual Basic 6; comparte el mismo runtime que C#",
      "Una versión mejorada de Visual Basic 6 que añade objetos pero mantiene la misma sintaxis y compatibilidad binaria",
      "Un lenguaje de scripting interpretado de Microsoft para automatización de Office y aplicaciones de escritorio simples",
      "Un lenguaje exclusivo para aplicaciones de escritorio Windows sin soporte para servicios web ni aplicaciones móviles"
    ],
    correct: 0,
    difficulty: "E",
    explanation: "VB.NET fue lanzado en 2002 con .NET Framework. Es completamente OOP y comparte el runtime de C#. Muy popular en entornos empresariales Windows."
  },
  {
    question: "¿Cómo se declara una variable en VB.NET?",
    options: [
      "var x As Integer = 5 usando var para inferencia de tipo y As para la anotación de tipo explícita en VB.NET",
      "int x = 5 usando la sintaxis de tipo antes del nombre heredada de C y Java para variables tipadas en VB.NET",
      "Dim x As Integer = 5",
      "DECLARE x INTEGER usando las palabras reservadas en mayúsculas heredadas de la sintaxis de COBOL empresarial"
    ],
    correct: 2,
    difficulty: "E",
    explanation: "Dim es la palabra clave para declarar variables. As especifica el tipo. Dim nombre As String = 'Ana'."
  },
  {
    question: "¿Qué diferencia hay entre VB.NET y C#?",
    options: [
      "VB.NET genera código nativo más rápido porque su compilador aplica optimizaciones que el compilador de C# no usa",
      "Principalmente sintaxis: VB.NET usa palabras en inglés (End If, Dim, Not), case-insensitive; C# usa llaves {} y es case-sensitive; ambos compilan a IL",
      "C# no soporta programación orientada a objetos completa; VB.NET añade herencia múltiple que C# no implementa",
      "Son completamente iguales: VB.NET es solo un alias de C# con nombre distinto para facilitar la migración de VB6"
    ],
    correct: 1,
    difficulty: "E",
    explanation: "VB.NET: If x > 0 Then ... End If. C#: if (x > 0) { ... }. Ambos producen el mismo CIL y pueden usar las mismas librerías .NET."
  },
  {
    question: "¿Qué diferencia hay entre .NET Framework, .NET Core y .NET 5+?",
    options: [
      ".NET Core es más lento que .NET Framework porque el JIT multiplataforma genera código menos optimizado en Windows",
      "Son productos completamente diferentes de Microsoft para casos de uso distintos y sin compatibilidad entre sí",
      "Son solo versiones del mismo producto: Framework 1.0, Core 1.0 y .NET 5.0 con numeración diferente para marketing",
      "Framework: solo Windows legacy; Core: multiplataforma y open source; .NET 5+: unificación de ambos, multiplataforma y moderno"
    ],
    correct: 3,
    difficulty: "E",
    explanation: ".NET 5+ (ahora .NET 6, 7, 8, 9) unificó Framework y Core. Es multiplataforma, open source y de alto rendimiento."
  },
  {
    question: "¿Cómo se define una clase en VB.NET?",
    options: [
      "Public Class MiClase ... End Class",
      "CLASS MiClase: ... END usando la sintaxis de mayúsculas heredada de COBOL que VB.NET conserva para compatibilidad",
      "class MiClase { } usando la misma sintaxis de llaves que C# porque VB.NET comparte el mismo sistema de tipos",
      "type MiClase = class ... end using la sintaxis de Pascal/Delphi que Microsoft adoptó para VB.NET moderno"
    ],
    correct: 0,
    difficulty: "E",
    explanation: "Public Class Persona; Public Property Nombre As String; Public Sub New(n As String); Nombre = n; End Sub; End Class"
  },
  {
    question: "¿Qué hace Console.WriteLine() en VB.NET?",
    options: [
      "Imprime texto en la consola con salto de línea; Console.Write() sin salto de línea",
      "Escribe texto formateado en el archivo de log del sistema con timestamp automático y nivel INFO por defecto",
      "Solo acepta argumentos de tipo String; para otros tipos hay que usar Console.WriteValue() con el tipo explícito",
      "Escribe en la ventana principal del formulario activo; para consola se debe usar Debug.WriteLine() en su lugar"
    ],
    correct: 0,
    difficulty: "E",
    explanation: "Console.WriteLine('Hola {0}', nombre). Console.WriteLine($'Hola {nombre}') con string interpolation. Console.ReadLine() para leer entrada."
  },
  {
    question: "¿Cómo se implementa la herencia en VB.NET?",
    options: [
      "Se usa la palabra clave Extends como en Java: Public Class Perro Extends Animal para heredar propiedades y métodos",
      "Public Class Perro Inherits Animal — hereda propiedades y métodos; MyBase para acceder al padre",
      "Se usa el símbolo : como en C#: Public Class Perro : Animal para indicar que la clase hereda de Animal",
      "Se usa Derived Class Perro Of Animal con la palabra From para acceder al padre con la sintaxis base.método()"
    ],
    correct: 1,
    difficulty: "E",
    explanation: "Class Empleado Inherits Persona. MyBase.New(nombre). Overrides para sobreescribir métodos virtuales. MustInherit para clases abstractas."
  },
  {
    question: "¿Qué es una Interface en VB.NET?",
    options: [
      "Public Interface IDrawable; Sub Draw(); End Interface — contrato de métodos que la clase debe implementar",
      "Un tipo de módulo estático que agrupa funciones de utilidad sin instanciación, similar a una clase de solo métodos",
      "Una clase base abstracta que contiene solo declaraciones de eventos sin implementación de ningún método concreto",
      "La interfaz visual de Windows Forms; cada formulario implementa automáticamente la interface IForm del sistema"
    ],
    correct: 0,
    difficulty: "E",
    explanation: "Public Class Circle; Implements IDrawable; Public Sub Draw() Implements IDrawable.Draw; ... End Class"
  },
  {
    question: "¿Qué hace el operador Is en VB.NET?",
    options: [
      "Compara valores numéricos con tolerancia de punto flotante; es equivalente a = pero ignora errores de redondeo",
      "Verifica la identidad de objetos (misma referencia): If obj Is Nothing Then; diferente de = que compara valores",
      "Es el operador de igualdad de strings que ignora mayúsculas/minúsculas; equivale a String.Equals con OrdinalIgnoreCase",
      "Es una palabra clave de declaración de tipo que vincula una variable a una clase específica en tiempo de compilación"
    ],
    correct: 1,
    difficulty: "D",
    explanation: "Is compara referencias. IsNot para negación. obj Is Nothing verifica null. TypeOf x Is String para verificar tipo."
  },
  {
    question: "¿Qué es LINQ en VB.NET?",
    options: [
      "Una librería de conexión a bases de datos similar a JDBC que gestiona el pool de conexiones SQL automáticamente",
      "Language Integrated Query: consultas SQL-like directamente en el código: Dim result = From item In collection Where item > 0 Select item",
      "Un framework exclusivo para consultar documentos XML y JSON con soporte de XPath integrado en el compilador",
      "Una librería externa de NuGet que añade capacidades de consulta funcional; no está integrada en el lenguaje VB.NET"
    ],
    correct: 1,
    difficulty: "D",
    explanation: "Dim adults = From p In people Where p.Age >= 18 Select p.Name Order By p.Name. O con lambda: people.Where(Function(p) p.Age >= 18).Select(Function(p) p.Name)"
  },
  {
    question: "¿Qué hace Try...Catch...Finally en VB.NET?",
    options: [
      "Es un tipo de bucle especial que reintenta operaciones fallidas automáticamente hasta un número máximo de intentos",
      "Maneja excepciones: Try ejecuta código; Catch ExType ex captura el error; Finally siempre se ejecuta",
      "Solo captura errores de entrada/salida de archivos; para otros tipos de excepciones se debe usar On Error GoTo",
      "Es equivalente a On Error GoTo con sintaxis más moderna pero sin poder capturar el tipo de excepción específico"
    ],
    correct: 1,
    difficulty: "D",
    explanation: "Try; Dim f = File.OpenRead('x'); Catch ex As IOException; Console.WriteLine(ex.Message); Finally; ' cleanup; End Try"
  },
  {
    question: "¿Qué son los eventos y delegates en VB.NET?",
    options: [
      "Los eventos son solo para Windows Forms; en aplicaciones de consola se usan callbacks directos con punteros a función",
      "Un tipo de interfaz especial que define contratos de suscripción para el patrón observador del framework .NET",
      "Son equivalentes a las lambdas: Delegate y Event son solo palabras clave alternativas para declarar funciones anónimas",
      "Delegate define un tipo de función; Event declara un evento; AddHandler conecta handler; RaiseEvent dispara el evento"
    ],
    correct: 3,
    difficulty: "D",
    explanation: "Delegate Sub ClickHandler(sender As Object, e As EventArgs). Public Event ButtonClicked As ClickHandler. AddHandler button.Click, AddressOf OnClick."
  },
  {
    question: "¿Qué es Async/Await en VB.NET?",
    options: [
      "Solo está disponible para llamadas HTTP; para operaciones de archivo y base de datos se usa threading manual",
      "Es una característica exclusiva de C#; VB.NET usa BackgroundWorker para todas las operaciones asíncronas",
      "Public Async Function FetchDataAsync() As Task(Of String) — hace el método asíncrono sin bloquear el UI thread",
      "Es un tipo de thread que el runtime gestiona automáticamente en el threadpool sin necesidad de Async ni Await"
    ],
    correct: 2,
    difficulty: "D",
    explanation: "Async Function cargarDatos() As Task; Dim data = Await httpClient.GetStringAsync(url); textBox.Text = data; End Function."
  },
  {
    question: "¿Qué es Windows Forms en VB.NET?",
    options: [
      "Solo funciona con .NET Framework; en .NET 6+ fue eliminado y reemplazado completamente por WPF y MAUI",
      "Framework para crear GUIs de escritorio Windows drag-and-drop en Visual Studio; sigue en uso pero WPF y MAUI son más modernos",
      "La interfaz de administración de formularios HTML de ASP.NET WebForms para aplicaciones web de escritorio",
      "Un framework de creación de formularios PDF que Visual Studio usa para generar reportes empresariales impresos"
    ],
    correct: 1,
    difficulty: "D",
    explanation: "WinForms: diseño visual de formularios, event handlers (Button1_Click), Controls (TextBox, DataGridView). Sencillo pero limitado en diseño moderno."
  },
  {
    question: "¿Qué es WPF (Windows Presentation Foundation)?",
    options: [
      "Un reemplazo de Excel para crear hojas de cálculo con macros VB.NET integradas directamente en el documento",
      "Framework de UI moderno para Windows con XAML para diseño, data binding potente, animaciones y estilos",
      "Una versión simplificada de Windows Forms que usa formularios con controles básicos para productividad rápida",
      "Un framework para crear aplicaciones web con interfaz de escritorio que se ejecutan en el navegador de Windows"
    ],
    correct: 1,
    difficulty: "C",
    explanation: "WPF usa XAML para separar diseño de lógica. Data binding bidireccional, MVVM pattern, estilos y templates hacen interfaces más complejas y modernas que WinForms."
  },
  {
    question: "¿Qué es el patrón MVVM en VB.NET?",
    options: [
      "Model-View-ViewModel: el View se bind al ViewModel que expone propiedades observables del Model; separa UI de lógica; base de WPF y MAUI",
      "Un patrón de acceso a bases de datos que separa las consultas SQL (Model) del código de UI (View) en capas distintas",
      "Un tipo especial de herencia triple donde ViewModel hereda de View que hereda de Model en la jerarquía de clases",
      "Un patrón de eventos donde el ViewModel dispara eventos al View que actualiza el Model mediante callbacks registrados"
    ],
    correct: 0,
    difficulty: "C",
    explanation: "MVVM: View (XAML) bind a ViewModel (INotifyPropertyChanged), ViewModel actualiza Model. Commands reemplazan event handlers. Testeable sin UI."
  },
  {
    question: "¿Qué es .NET MAUI?",
    options: [
      "Un framework exclusivo para aplicaciones Android que Microsoft desarrolló para competir con Kotlin y Jetpack Compose",
      "Una versión moderna de WPF que usa tecnologías web (HTML/CSS) para renderizar la UI en aplicaciones de escritorio",
      "Multi-platform App UI: sucesor de Xamarin.Forms para crear apps nativas iOS, Android, Windows, macOS desde un solo código VB.NET o C#",
      "Un framework exclusivo para macOS e iOS que Microsoft creó para llevar aplicaciones .NET al ecosistema de Apple"
    ],
    correct: 2,
    difficulty: "C",
    explanation: ".NET MAUI usa un solo código base para múltiples plataformas. Shell para navegación, renderers nativos para cada plataforma."
  },
  {
    question: "¿Cuál es la diferencia entre Structure y Class en VB.NET?",
    options: [
      "Structure es value type (en stack, copia al asignar); Class es reference type (en heap, compartido por referencia)",
      "Son solo diferencias sintácticas; ambos generan el mismo código IL y tienen el mismo comportamiento en memoria",
      "Class no puede tener constructor; Structure sí puede tener New() con parámetros para la inicialización de campos",
      "Structure es más lenta que Class porque el compilador de .NET no puede optimizar el acceso a tipos de valor"
    ],
    correct: 0,
    difficulty: "C",
    explanation: "Structure Point: x, y son copiados. Class Empleado: compartido por referencia. Las structures son eficientes para datos pequeños e inmutables (como Point, Color)."
  },
  {
    question: "¿Qué es Entity Framework en VB.NET?",
    options: [
      "Un tipo avanzado de ADO.NET que añade soporte de stored procedures y vistas materializadas automáticamente",
      "ORM oficial de .NET: permite trabajar con bases de datos usando objetos VB.NET/C# sin SQL directo; Code First, Database First",
      "Un ORM solo compatible con SQL Server; para otras bases de datos se deben usar adaptadores de terceros separados",
      "Un framework de UI para mostrar datos tabulares en DataGridView con actualización automática desde la base de datos"
    ],
    correct: 1,
    difficulty: "C",
    explanation: "Dim context As New AppDbContext(). context.Employees.Where(Function(e) e.Active).ToList(). Migrations para actualizar el esquema. LINQ genera SQL optimizado."
  }
];
