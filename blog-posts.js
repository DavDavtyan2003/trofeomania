// blog-posts.js
// Central place for all blog post data. Add new posts here as objects.
// Each post needs a unique "id" — used in the URL like blog-post.html?id=elegir-trofeo

const BLOG_POSTS = [
  {
    id: "elegir-trofeo",
    tag: "Guía",
    title: "Cómo elegir el trofeo perfecto para tu competición deportiva",
    excerpt: "Tamaño, material, grabado y presupuesto: todo lo que debes tener en cuenta antes de encargar los trofeos de tu próximo torneo.",
    date: "12 julio 2026",
    readTime: "5 min",
    icon: "🏆",
    body: [
      "Elegir el trofeo adecuado para una competición no es solo una cuestión estética: también influye en el presupuesto, los plazos de entrega y la percepción que los participantes tendrán del evento.",
      "Lo primero es definir el tamaño según el nivel de la competición. Para ligas escolares o torneos locales, un trofeo de 20-25cm suele ser suficiente. Para finales o campeonatos regionales, conviene subir a 30cm o más para las primeras posiciones.",
      "El material también marca la diferencia. La resina dorada es la opción más económica y versátil, mientras que el cristal aporta un aspecto más premium para premios corporativos o aniversarios.",
      "Por último, no olvides el grabado: una placa con el nombre del equipo, la fecha y la posición conseguida convierte un trofeo genérico en un recuerdo que se guarda para siempre."
    ]
  },
  {
    id: "medallas-carreras",
    tag: "Guía",
    title: "Medallas para carreras populares: guía de tallas y materiales",
    excerpt: "Qué diferencia una medalla de metacrilato de una metálica, y cuál conviene según tu presupuesto.",
    date: "3 julio 2026",
    readTime: "4 min",
    icon: "🎖️",
    body: [
      "Las carreras populares suelen necesitar cientos o miles de medallas, por lo que el coste por unidad y el plazo de fabricación son factores clave.",
      "Las medallas metálicas ofrecen el mejor acabado y percepción de calidad, pero tienen un coste algo mayor. Las de metacrilato son más económicas y ligeras, ideales para carreras con gran volumen de participantes.",
      "El diámetro estándar suele rondar los 5-7cm. Para eventos infantiles se recomienda un tamaño algo menor y cintas de colores llamativos."
    ]
  },
  {
    id: "placas-empresas",
    tag: "Guía",
    title: "Placas conmemorativas para empresas: ideas para reconocer a tu equipo",
    excerpt: "Ejemplos de textos y formatos de grabado para premios corporativos que sí se guardan.",
    date: "28 junio 2026",
    readTime: "6 min",
    icon: "🪧",
    body: [
      "Reconocer el trabajo de un equipo con una placa grabada tiene más impacto del que parece: es algo físico, personalizado, que la persona puede guardar en su escritorio.",
      "Para aniversarios de empresa, funciona bien incluir el nombre, el cargo y los años de servicio. Para logros puntuales (cierre de un proyecto, objetivo de ventas), un mensaje breve y directo suele ser más efectivo que un texto largo.",
      "El cristal y la madera son los materiales más solicitados para este tipo de premios, ya que transmiten una sensación de calidad y permanencia."
    ]
  },
  {
    id: "ajedrez-torneo",
    tag: "Guía",
    title: "Ajedrez de torneo: qué mirar antes de comprar un set Staunton",
    excerpt: "Peso, tamaño de casillas y reglamento FIDE: la guía básica para clubes y colegios.",
    date: "15 junio 2026",
    readTime: "5 min",
    icon: "♟️",
    body: [
      "No todos los sets de ajedrez son aptos para competición. Si el objetivo es un club o una escuela con aspiraciones de torneo, conviene revisar que las piezas cumplan el estándar Staunton reconocido por la FIDE.",
      "El tamaño del rey (normalmente entre 9 y 10cm) debe ser proporcional al tamaño de las casillas del tablero, que suelen rondar los 5cm de lado.",
      "El peso lastrado en la base de las piezas evita que se vuelquen durante la partida, algo especialmente importante en torneos con muchos tableros en juego simultáneamente."
    ]
  },
  {
    id: "trofeos-colegios",
    tag: "Guía",
    title: "Trofeos para colegios: cómo premiar sin desbordar el presupuesto",
    excerpt: "Opciones económicas que mantienen la calidad para eventos escolares y ligas infantiles.",
    date: "2 junio 2026",
    readTime: "4 min",
    icon: "🏆",
    body: [
      "Los eventos escolares suelen implicar premiar a muchos participantes con un presupuesto limitado, por lo que encontrar el equilibrio entre coste y calidad percibida es clave.",
      "Los trofeos de resina de tamaño medio (20-24cm) ofrecen buena relación calidad-precio y quedan bien en la mayoría de categorías infantiles y juveniles.",
      "Comprar por volumen suele reducir el coste unitario de forma notable, así que agrupar el pedido de todo el curso o competición ayuda a ajustar el presupuesto."
    ]
  },
  {
    id: "grabado-laser-manual",
    tag: "Guía",
    title: "Grabado láser vs grabado manual: diferencias y cuándo elegir cada uno",
    excerpt: "Precisión, coste y tiempos de entrega comparados para que elijas la técnica adecuada.",
    date: "20 mayo 2026",
    readTime: "5 min",
    icon: "✍️",
    body: [
      "El grabado láser ofrece mayor precisión y permite reproducir logotipos o tipografías complejas con un acabado muy limpio, siendo la opción preferida para pedidos con diseños detallados.",
      "El grabado manual, aunque más artesanal, aporta un carácter único a piezas especiales y suele usarse en materiales como la madera maciza.",
      "En cuanto a plazos, el láser es generalmente más rápido para pedidos grandes, mientras que el manual puede requerir algo más de tiempo según la complejidad del texto."
    ]
  },
  {
    id: "premios-corporativos",
    tag: "Guía",
    title: "Ideas de premios para eventos corporativos y aniversarios de empresa",
    excerpt: "Placas, trofeos y detalles grabados para celebrar hitos dentro de tu empresa.",
    date: "8 mayo 2026",
    readTime: "4 min",
    icon: "🎖️",
    body: [
      "Los aniversarios de empresa y los eventos de reconocimiento interno son una buena oportunidad para invertir en premios que realmente se guarden, en lugar de objetos promocionales genéricos.",
      "Una placa de cristal con el logo de la empresa y el nombre del empleado suele ser una opción segura y con buena percepción de calidad.",
      "Para equipos completos, considera trofeos de menor tamaño pero grabados individualmente con el nombre de cada persona — el coste se mantiene razonable y el impacto personal es mayor."
    ]
  }
];