<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Técnicas de recolección de información
    .row.justify-content-center.mb-4
      .col-md-5
        figure.mw-sm-350px
          img(src='@/assets/curso/temas/texto_destacado/img20.png', alt='imagen relacionada')
      .col-md-7      
        p Al atender a los clientes, uno de los aspectos más importantes es la recolección de información. Pero, ¿qué es esto y para qué sirve? 
        p Las técnicas de recolección de información se usan para recoger y analizar diferentes formas de información. Estas incluyen examinar documentos sobre un tema específico o realizar entrevistas, observaciones y encuestas para producir información cualitativa o cuantitativa, a partir de la cual se pueden tomar decisiones.
    
    .row.justify-content-around.align-items-center.mb-4
      .col-lg-9
        .cajon.color-acento-botones.color-fondo-secundario.p-4.mb-4.mt-4 
          p.mb-0 La información cualitativa de un evento empresarial describe características, cualidades y rasgos no cuantificables como opiniones personales, descripciones o percepciones sobre un tema determinado, mientras que la información cuantitativa es medible y corresponde a estadísticas, cantidades o mediciones.     
  
    p.mb-4 Existen varias formas de recolectar información según datos requeridos y actividades desarrolladas. De acuerdo con Harvard Business School, entre las técnicas de recolección de información más usadas en analítica empresarial se encuentran las siguientes: 
    
    .row.justify-content-center.mb-4
        .col-lg-12
          AcordionA(tipo="a" clase-tarjeta="tarjeta color-secundario")
            .row(titulo="Observación")
              .col-md-6.mb-4.mb-md-0
                p Implica observar el comportamiento o actuar de un sujeto en un entorno específico para comprenderlo y registrar lo observado. Hoy en día, se observa a personas interactuar con productos, sitios <i>web</i> y servicios en tiempo real, muchas veces, sin que esas personas lo sepan.
                
              .col-6.mb-3
                img(src='@/assets/curso/temas/texto_destacado/img21.png', alt='imagen relacionada')  
           
            .row(titulo="Entrevistas y grupos de discusión")
              .col-md-6.mb-4.mb-md-0
                p Son conversaciones grupales entre personas con intereses, características o necesidades comunes. En ambos casos, un facilitador hace preguntas que se debaten entre todos para obtener información sobre diferentes temas, percepciones, creencias y actitudes en un entorno social específico.
               
              .col-6.mb-3
                img(src='@/assets/curso/temas/texto_destacado/img22.png', alt='imagen relacionada') 

            .row(titulo="Seguimiento de transacciones")
              .col-md-6.mb-4.mb-md-0
                p Se refiere a la acción de acceder a datos de compras de clientes en sitios <i>web</i>, proveedores de servicios o comercio electrónico, que se analizan para generar estrategias de venta enfocadas en las preferencias de consumo.
              
              .col-6.mb-3
                img(src='@/assets/curso/temas/texto_destacado/img23.png', alt='imagen relacionada') 

            .row(titulo="Seguimiento en redes sociales")
              .col-md-6.mb-4.mb-md-0
                p Implica seguir posibles clientes para conocer su actividad en línea y comprender qué productos o servicios les interesan para generar anuncios adecuados y productos relevantes.
               
              .col-6.mb-3
                img(src='@/assets/curso/temas/texto_destacado/img24.png', alt='imagen relacionada')
            
            .row(titulo="Seguimiento en línea")
              .col-md-6.mb-4.mb-md-0
                p Técnica con <i>cookies</i> (fragmentos de texto que un sitio <i>web</i> envía al navegador para recordar información sobre preferencias del visitante) por medio de la cual se recogen datos, anuncios en páginas <i>web</i>, campañas de correo electrónico, para analizar cifras, rastrear usuarios y su comportamiento en línea.
                
              .col-6.mb-3
                img(src='@/assets/curso/temas/texto_destacado/img25.png', alt='imagen relacionada')

            .row(titulo="Encuesta")
              .col-md-6.mb-4.mb-md-0
                p Puede ser física o digital. Esta recoge datos cuantitativos y cualitativos. Es económica, accesible a investigadores y usuarios, brinda información específica y constituye una base para mejorar o realizar nuevos estudios.
               
              .col-6.mb-3
                img(src='@/assets/curso/temas/texto_destacado/img26.png', alt='imagen relacionada')

            .row(titulo="Formulario")
              .col-md-6.mb-4.mb-md-0
                p Es más general que la encuesta, logra recopilar datos cualitativos, demográficos o de contacto y permite el seguimiento a clientes potenciales a fin de conocerlos mejor.
                
              .col-6.mb-3
                img(src='@/assets/curso/temas/texto_destacado/img27.png', alt='imagen relacionada')

    p También encontramos unas características que deben cumplir los diferentes instrumentos para recolección de información. Algunas de esas características son: 

    .row.col-md-12.mb-4
      .col-lg-5
        figure
            img(style="height: 655px" data-aos="fade-down-right" src='@/assets/curso/temas/texto_destacado/img28.png', alt='imagen relacionada')
      .col-lg-6
        AcordionA(tipo="a" clase-tarjeta="tarjeta color-secundario" style="width: 610px" )
          .row(titulo="Ser completos y funcionales")
            .col-md-12.mb-4.mb-md-4
              p Es decir, deben ser compatibles con escenarios reales y permitir formular diferentes tipos de preguntas. Deben tener validación aplicable a diferentes opciones de respuesta para recolectar datos precisos y minimizar su limpieza, y deben incluir preguntas relevantes.
              
          .row(titulo="Ser fáciles de usar y amigables con los clientes")
            .col-md-12.mb-4.mb-md-0
            p Su diseño debe ser intuitivo, integrable con otras herramientas y visión global, para poder conectar con la administración de relaciones en las distintas etapas de CRM (<i>Customer Relationship Management</i>).
           
          .row(titulo="Simplificar la elaboración de informes")
            .col-md-12.mb-4.mb-md-0
            p En lo posible, deben aplicarse en línea, a través de una interfaz de usuario intuitiva que dé sentido a los datos obtenidos.
            
          .row(titulo="Estar diseñados para facilitar la atención al cliente")
            .col-md-12.mb-4.mb-md-0
              p Su política de atención al cliente y los canales de comunicación deben ser útiles y constantes para resolver conflictos. Deben ofrecer diversas formas de contacto, estar diseñados en el idioma de quien lo va a diligenciar y prestar ayuda rápida y eficiente.
              
          .row(titulo="Tener buena relación de costo-beneficio")
            .col-md-12.mb-4.mb-md-0
            p Este es un parámetro fundamental al escoger un instrumento para recolección de información. 
    
    h5 Instrumentos de recolección de información

    p Dados los criterios para recolectar información tales como la naturaleza del objeto de estudio, la posibilidad de acceso a la información, el tamaño de la muestra, los recursos disponibles, la facilidad para obtener datos, el tipo y la naturaleza de la fuente de datos, surgen instrumentos como los cuestionarios (conjunto de preguntas que permiten recoger, procesar y analizar información pertinente) y las escalas de actitudes (instrumento de evaluación para recoger información específica), que se construyen con preguntas sobre variables a medir según objetivos de investigación. 

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
