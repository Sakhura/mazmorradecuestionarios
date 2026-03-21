window.questions_vbnet = [
  {
    question: "¿Qué es VB.NET?",
    options: [
      "Lenguaje orientado a objetos de Microsoft sobre .NET; sucesor de Visual Basic 6; comparte el mismo runtime que C#",
      "Visual Basic 6 mejorado",
      "Un lenguaje de scripts",
      "Solo para aplicaciones de escritorio"
    ],
    correct: 0,
    difficulty: "E",
    explanation: "VB.NET fue lanzado en 2002 con .NET Framework. Es completamente OOP y comparte el runtime de C#. Muy popular en entornos empresariales Windows."
  },
  {
    question: "¿Cómo se declara una variable en VB.NET?",
    options: [
      "var x = 5",
      "int x = 5",
      "Dim x As Integer = 5",
      "DECLARE x INTEGER"
    ],
    correct: 2,
    difficulty: "E",
    explanation: "Dim es la palabra clave para declarar variables. As especifica el tipo. Dim nombre As String = 'Ana'."
  },
  {
    question: "¿Qué diferencia hay entre VB.NET y C#?",
    options: [
      "VB.NET es más rápido",
      "Principalmente sintaxis: VB.NET usa palabras en inglés (End If, Dim, Not), case-insensitive; C# usa llaves {} y es case-sensitive; ambos compilan a IL",
      "C# no tiene OOP",
      "Son iguales"
    ],
    correct: 1,
    difficulty: "E",
    explanation: "VB.NET: If x > 0 Then ... End If. C#: if (x > 0) { ... }. Ambos producen el mismo CIL y pueden usar las mismas librerías .NET."
  },
  {
    question: "¿Qué es el .NET Framework vs .NET Core vs .NET 5+?",
    options: [
      "Core es más lento",
      "Son productos diferentes de Microsoft",
      "Versiones del mismo producto",
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
      "CLASS MiClase:",
      "class MiClase {}",
      "type MiClase = class"
    ],
    correct: 0,
    difficulty: "E",
    explanation: "Public Class Persona; Public Property Nombre As String; Public Sub New(n As String); Nombre = n; End Sub; End Class"
  },
  {
    question: "¿Qué hace <code>Console.WriteLine()</code>?",
    options: [
      "Imprime texto en la consola con salto de línea; Console.Write() sin salto de línea",
      "Escribe en un archivo",
      "Solo para strings",
      "Escribe en la ventana principal"
    ],
    correct: 0,
    difficulty: "E",
    explanation: "Console.WriteLine('Hola {0}', nombre). Console.WriteLine($'Hola {nombre}') con string interpolation. Console.ReadLine() para leer entrada."
  },
  {
    question: "¿Qué es la herencia en VB.NET?",
    options: [
      "Copiar una clase",
      "Public Class Perro Inherits Animal — hereda propiedades y métodos; MyBase para acceder al padre",
      "Multiple herencia directa",
      "Solo con interfaces"
    ],
    correct: 1,
    difficulty: "E",
    explanation: "Class Empleado Inherits Persona. MyBase.New(nombre). Overrides para sobreescribir métodos virtuales. MustInherit para clases abstractas."
  },
  {
    question: "¿Qué es una Interface en VB.NET?",
    options: [
      "Public Interface IDrawable; Sub Draw(); End Interface — contrato de métodos que la clase debe implementar",
      "Un tipo de módulo",
      "Solo para eventos",
      "La interfaz visual"
    ],
    correct: 0,
    difficulty: "E",
    explanation: "Public Class Circle; Implements IDrawable; Public Sub Draw() Implements IDrawable.Draw; ... End Class"
  },
  {
    question: "¿Qué hace el operador <code>Is</code>?",
    options: [
      "Igual que =",
      "Verifica la identidad de objetos (misma referencia): If obj Is Nothing Then; diferente de = que compara valores",
      "Solo para Nothing",
      "Una palabra clave de tipo"
    ],
    correct: 1,
    difficulty: "D",
    explanation: "Is compara referencias. IsNot para negación. obj Is Nothing verifica null. TypeOf x Is String para verificar tipo."
  },
  {
    question: "¿Qué es LINQ en VB.NET?",
    options: [
      "Un tipo de base de datos",
      "Language Integrated Query: consultas SQL-like directamente en el código: Dim result = From item In collection Where item > 0 Select item",
      "Solo para XML",
      "Una librería externa"
    ],
    correct: 1,
    difficulty: "D",
    explanation: "Dim adults = From p In people Where p.Age >= 18 Select p.Name Order By p.Name. O con lambda: people.Where(Function(p) p.Age >= 18).Select(Function(p) p.Name)"
  },
  {
    question: "¿Qué hace <code>Try...Catch...Finally</code>?",
    options: [
      "Un tipo de bucle",
      "Maneja excepciones: Try ejecuta código; Catch ExType ex captura el error; Finally siempre se ejecuta",
      "Solo captura IO errors",
      "Es igual que On Error GoTo"
    ],
    correct: 1,
    difficulty: "D",
    explanation: "Try; Dim f = File.OpenRead('x'); Catch ex As IOException; Console.WriteLine(ex.Message); Finally; ' cleanup; End Try"
  },
  {
    question: "¿Qué son los eventos y delegates?",
    options: [
      "Solo para Windows Forms",
      "Un tipo de interfaz",
      "Solo para botones UI",
      "Delegate define un tipo de función; Event declara un evento; AddHandler conecta handler; RaiseEvent dispara el evento"
    ],
    correct: 3,
    difficulty: "D",
    explanation: "Delegate Sub ClickHandler(sender As Object, e As EventArgs). Public Event ButtonClicked As ClickHandler. AddHandler button.Click, AddressOf OnClick."
  },
  {
    question: "¿Qué es Async/Await en VB.NET?",
    options: [
      "Solo para HTTP",
      "Solo para C#",
      "Public Async Function FetchDataAsync() As Task(Of String) — hace el método asíncrono sin bloquear el UI thread",
      "Un tipo de thread"
    ],
    correct: 2,
    difficulty: "D",
    explanation: "Async Function cargarDatos() As Task; Dim data = Await httpClient.GetStringAsync(url); textBox.Text = data; End Function."
  },
  {
    question: "¿Qué es Windows Forms?",
    options: [
      "Solo para .NET Framework",
      "Framework para crear GUIs de escritorio Windows drag-and-drop en Visual Studio; sigue en uso pero WPF y MAUI son más modernos",
      "La web de Windows",
      "Un tipo de web app"
    ],
    correct: 1,
    difficulty: "D",
    explanation: "WinForms: diseño visual de formularios, event handlers (Button1_Click), Controls (TextBox, DataGridView). Sencillo pero limitado en diseño moderno."
  },
  {
    question: "¿Qué es WPF (Windows Presentation Foundation)?",
    options: [
      "Un reemplazo de Excel",
      "Framework de UI moderno para Windows con XAML para diseño, data binding potente, animaciones y estilos",
      "Un tipo de formularios simples",
      "Solo para aplicaciones web"
    ],
    correct: 1,
    difficulty: "C",
    explanation: "WPF usa XAML para separar diseño de lógica. Data binding bidireccional, MVVM pattern, estilos y templates hacen interfaces más complejas y modernas que WinForms."
  },
  {
    question: "¿Qué es el patrón MVVM?",
    options: [
      "Model-View-ViewModel: el View se bind al ViewModel que expone propiedades observables del Model; separa UI de lógica; base de WPF y MAUI",
      "Solo para bases de datos",
      "Un tipo de evento",
      "Un tipo de herencia"
    ],
    correct: 0,
    difficulty: "C",
    explanation: "MVVM: View (XAML) bind a ViewModel (INotifyPropertyChanged), ViewModel actualiza Model. Commands reemplazan event handlers. Testeable sin UI."
  },
  {
    question: "¿Qué es .NET MAUI?",
    options: [
      "Solo para Android",
      "Un tipo de WPF moderno",
      "Multi-platform App UI: sucesor de Xamarin.Forms para crear apps nativas iOS, Android, Windows, macOS desde un solo código VB.NET o C#",
      "Un framework de macOS"
    ],
    correct: 2,
    difficulty: "C",
    explanation: ".NET MAUI usa un solo código base para múltiples plataformas. Shell para navegación, renderers nativos para cada plataforma."
  },
  {
    question: "¿Cuál es la diferencia entre Structure y Class?",
    options: [
      "Structure es value type (en stack, copia al asignar); Class es reference type (en heap, compartido por referencia)",
      "Solo sintaxis",
      "Class no tiene constructor",
      "Structure es más lenta"
    ],
    correct: 0,
    difficulty: "C",
    explanation: "Structure Point: x, y son copiados. Class Empleado: compartido por referencia. Las structures son eficientes para datos pequeños e inmutables (como Point, Color)."
  },
  {
    question: "¿Qué es Entity Framework?",
    options: [
      "Un tipo de ADO.NET",
      "ORM oficial de .NET: permite trabajar con bases de datos usando objetos VB.NET/C# sin SQL directo; Code First, Database First",
      "Solo para SQL Server",
      "Un framework de UI"
    ],
    correct: 1,
    difficulty: "C",
    explanation: "Dim context As New AppDbContext(). context.Employees.Where(Function(e) e.Active).ToList(). Migrations para actualizar el esquema. LINQ genera SQL optimizado."
  }
];
