export default {
  global: {
    componenteFormativo: 'Generalidades de los eventos empresariales',
    descripcionCurso:
      'Los eventos empresariales representan la manera organizada y estructurada de establecer la comunicación con los grupos de interés, permiten presentar los productos y servicios, establecer y fortalecer la imagen corporativa de la empresa y alcanzar la fidelización de los mismos.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Eventos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Eventos empresariales',
            hash: 't_1_1',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Comité de eventos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Logística en eventos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Organización',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Recursos',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Plan de contingencia',
            hash: 't_3_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.4',
            titulo: 'Feedback o retroalimentación',
            hash: 't_3_4',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Técnicas de recolección de información',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Trazabilidad del servicio',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '5.1',
            titulo: 'Informes de servicio',
            hash: 't_5_1',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Eventos',
      referencia:
        'Cordero López, L. (2016). Organización de eventos como herramienta de comunicación interna: Avon Cosmetics España [Trabajo de grado]. Universidad de Sevilla. ',
      tipo: 'PDF',
      link:
        'https://idus.us.es/bitstream/handle/11441/48294/%20CorderoLopez_Lucia_TFG_2016.pdf?sequence=1&isAllowed=y',
    },
    {
      tema: 'Eventos',
      referencia: 'Arias, R. (2016). Etapas de un Evento (video). YouTube.  ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=Ho6xhcnyuIw ',
    },
    {
      tema: 'Logística en eventos',
      referencia:
        'Santander Argentina Oficial. (2018). Cómo organizar un evento (video). YouTube. ',
      tipo: 'Video',
      link: 'https://www.google.com/',
    },
    {
      tema: 'Técnicas de recolección de información',
      referencia:
        'TEBAEV VIDEOS EDUCATIVOS. (2020). Técnicas de recolección de datos (video). YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=b4O_XAuAmto ',
    },
  ],
  glosario: [
    {
      termino: 'Acta',
      significado:
        'documento que recopila todos los acontecimientos del evento y permite establecer conclusiones decisivas sobre los resultados del mismo.',
    },
    {
      termino: 'Afiche',
      significado:
        'documento publicitario. En algunos eventos como ferias, exposiciones o seminarios se puede utilizar publicidad física para mostrar e incentivar la participación de los grupos de interés.',
    },
    {
      termino: 'Alianza',
      significado:
        'acuerdo entre dos involucrados (personas o empresas) que aportan sus recursos y conocimientos. En grandes eventos es necesario y conveniente trabajar en equipo.',
    },
    {
      termino: 'Ambientación',
      significado:
        'hace referencia a la preparación o adecuación del sitio físico o virtual donde se desarrollará el evento.',
    },
    {
      termino: 'Anfitrión',
      significado:
        'persona que convida o invita al evento. Se dice también que una empresa o país es anfitrión, cuando se realiza un evento en sus instalaciones o territorio.',
    },
    {
      termino: 'Base de datos',
      significado:
        'recopilación de información importante para la empresa o evento, documentada física o digitalmente. Las bases de datos suelen contener información o datos de contacto de los clientes.',
    },
    {
      termino: '<em>Buffet</em>',
      significado:
        'es un mostrador para servir comidas. Este tipo de ofrecimiento se realiza en eventos empresariales como congresos, juntas o reuniones.',
    },
    {
      termino: 'Comité organizador',
      significado:
        'conjunto de personas que debe cumplir unas funciones específicas con respecto a la organización del evento.',
    },
    {
      termino: 'Conductor',
      significado:
        'persona que ameniza o dirige un evento. Es el encargado de dar las instrucciones generales y públicas en el desarrollo del evento.',
    },
    {
      termino: 'Conferencia',
      significado:
        'Reunión en la que una o varias personas exponen un tema determinado, profundizado en cada aspecto para brindar un conocimiento a los oyentes.',
    },
    {
      termino: 'Congreso',
      significado:
        'reunión de personas, generalmente limitada o cerrada y de carácter importante, en la que los miembros se encuentran para tratar temas y tomar decisiones importantes.',
    },
    {
      termino: 'Evento',
      significado: 'acontecimiento previamente organizado.',
    },
    {
      termino: 'Foro',
      significado:
        'reunión enfocada en el intercambio de opiniones y puntos de vista por parte de los participantes.',
    },
    {
      termino: 'Lanzamiento',
      significado:
        'presentación formal y promocional de un producto o servicio.',
    },
    {
      termino: 'Moderador',
      significado:
        'persona que hace la apertura, marca los tiempos de participación y modela el desarrollo de los foros, las mesas redondas o los grupos focales.',
    },
  ],
  referencias: [
    {
      referencia:
        'Molinari, S. (2012). La organización de eventos corporativos e institucionales: las claves de una organización exitosa. Temas Grupo Editorial. ',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/lc/senavirtual/titulos/116702',
    },
    {
      referencia:
        'Panizo Alonso, J. M. y Jiménez-Morales, M. (2017). Eventos y protocolo: la gestión estratégica de actos corporativos e institucionales. Editorial UOC ',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/58629?page=1',
    },
    {
      referencia:
        'Ramírez Salazar, M. D. P. (2011). Innovación en gestión de eventos organizacionales. Ecoe Ediciones.',
      link:
        'https://login.bdigital.sena.edu.co/login?qurl=https://elibro.net%2fes%2fereader%2fsenavirtual%2f69184%3fpage%3d1  ',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Innovative Education',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Innovative Education',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Innovative Education',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Innovative Education',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
