<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Eventos

    .row.justify-content-center.mb-4
      .col-md-5
        figure.mw-sm-350px
          img(src='@/assets/curso/temas/texto_destacado/img2.png', alt='imagen relacionada')
      .col-md-7      
        p Para iniciar, es necesario saber qué es un <strong>evento</strong>. Esta palabra viene de la alocución latina <strong><i>eventus</i></strong>, que se refiere a una actividad o acontecimiento planeado y organizado que convoca y reúne a una determinada cantidad de personas en un mismo lugar y al mismo tiempo. Los eventos se pueden organizar para desarrollar diferentes actividades, sean estas de tipo social, cultural, comercial o profesional. También puede definirse como una <strong>actividad no rutinaria y planeada</strong>, cuyo objetivo puede ser de ocio, cultural, personal u organizacional. Los eventos se pueden gestar por fuera de la actividad normal diaria y pueden ser planeados para educar, informar, celebrar, entretener o generar experiencias en un grupo de personas. 
    
    .row.justify-content-center.mb-4
      .col-md-7      
        p Un evento varía según su carácter, naturaleza y convocante. Sin embargo, todos los eventos tienen elementos comunes pues requieren organización previa y reúnen a un grupo de personas determinadas en una fecha y lugar previamente establecidos para desarrollar o compartir actividades afines a un mismo objetivo, que puede ser de carácter social, familiar, comercial o empresarial. Los eventos son intercambios sociales y culturales que permiten celebrar un acontecimiento social con familia y amigos o dar a conocer o posicionar  una empresa y sus productos o servicios. 
      .col-md-5
        figure.mw-sm-350px
          img(src='@/assets/curso/temas/texto_destacado/img3.png', alt='imagen relacionada')
    
    h3 
      i#t_1_1.fas.fa-square.me-3.cuadrado
      | Eventos empresariales

    .row.justify-content-center.mb-4
      .col-md-5
        figure.mw-sm-350px
          img(src='@/assets/curso/temas/texto_destacado/img4.png', alt='imagen relacionada')
      .col-md-7      
        p Ahora, un evento empresarial es una acción concreta, alineada con actividades de la empresa convocante y su estrategia de <i>marketing</i>, que reúne personas o empresas con objetivos afines al tema propuesto. Los eventos empresariales se pueden programar para diferentes objetivos que van desde dar a conocer la empresa hasta promover la fidelización de los clientes internos y externos. 
        p Existe una gran variedad de eventos empresariales celebrados según circunstancias, objetivos, intención, tiempo y lugar, y las necesidades del organizador o anfitrión. Pueden ser eventos de carácter técnico o especializado para sectores específicos que desean ofrecer productos y servicios o que buscan mejorar la imagen de una empresa.
        p Algunos de estos eventos son:

    SlyderF.mb-5(columnas="col-lg-12 col-xl-4")
      .tarjeta.slider.p-4(style='height:250px')
        .row.justify-content-center.mb-3
          .col-7.mb-3
            img(data-aos="flip-up" src='@/assets/componentes/tarjeta1.svg' alt='dibujo relacionado')
        h2.text-center Ruedas de prensa
       
      .tarjeta.slider.color-secundario.p-4(style='height:250px')
        .row.justify-content-center.mb-3
          .col-7.mb-3
            img(data-aos="zoom-in-up" src='@/assets/componentes/tarjeta2.svg' alt='dibujo relacionado')
        h2.text-center Seminarios
       
      .tarjeta.slider.color-secundario.p-4(style='height:250px')
        .row.justify-content-center.mb-3
          .col-7.mb-3
            img(data-aos="zoom-out-up" src='@/assets/componentes/tarjeta3.svg' alt='dibujo relacionado')
        h2.text-center Procesos de formación
        
      .tarjeta.slider.color-secundario.p-4(style='height:250px')
        .row.justify-content-center.mb-3
          .col-7.mb-3
            img(data-aos="zoom-out-up" src='@/assets/componentes/tarjeta4.svg' alt='dibujo relacionado')
        h2.text-center Lanzamiento de un nuevo producto
       
      .tarjeta.slider.color-secundario.p-4(style='height:250px')
        .row.justify-content-center.mb-3
          .col-7.mb-3
            img(data-aos="zoom-out-up" src='@/assets/componentes/tarjeta5.svg' alt='dibujo relacionado')
        h2.text-center Ferias y exposiciones
       
      .tarjeta.slider.color-secundario.p-4(style='height:250px')
        .row.justify-content-center.mb-3
          .col-7.mb-3
            img(data-aos="zoom-out-down" src='@/assets/componentes/tarjeta6.svg' alt='dibujo relacionado')
        h2.text-center Juntas y asambleas
       
      .tarjeta.slider.color-secundario.p-4(style='height:250px')
        .row.justify-content-center.mb-3
          .col-7.mb-3
            img(data-aos="zoom-out-down" src='@/assets/componentes/tarjeta7.svg' alt='dibujo relacionado')
        h2.text-center Congresos
        
      .tarjeta.slider.color-secundario.p-4(style='height:250px')
        .row.justify-content-center.mb-3
          .col-7.mb-3
            img(data-aos="zoom-out-down" src='@/assets/componentes/tarjeta8.svg' alt='dibujo relacionado')
        h2.text-center Desayunos de trabajo

    .row.justify-content-around.align-items-center.mb-4
      .col-lg-9
        .cajon.color-acento-botones.color-fondo-secundario.p-4
          p.mb-0 Es importante tener presente que un evento empresarial bien planeado puede ser una inversión rentable y aportar ventajas económicas y estratégicas, porque fortalece el sentido de pertenencia y permite conocer mejor el mercado objetivo. Además, genera ingresos adicionales, atrae y fideliza clientes y favorece la imagen institucional.     
    
    p.mb-4 Dentro de la logística del evento se encuentran varios pasos. Conozcamos cada uno de ellos:    

    .row.justify-content-center.mb-4
        .col-lg-12
          AcordionA(tipo="a" clase-tarjeta="tarjeta color-secundario")
            .row(titulo="Protocolos de organización")
              .col-md-6.mb-4.mb-md-0
                p El protocolo hace referencia al conjunto de normas y rutinas establecidas o concertadas para darle formalidad y estructura a las acciones o conductas de los participantes que intervienen en un evento.
                p Un evento empresarial puede tener diferentes objetivos, formatos, espacios, momentos o tamaños, pero todos necesitan contar con un protocolo, herramienta fundamental para que sea exitoso. Una adecuada planificación del protocolo contribuye a posicionar una marca e impulsar una imagen profesional. Para establecer el protocolo adecuado, es necesario verificar las necesidades y los requerimientos de quien celebra el evento, tales como objetivo, fecha, hora, lugar, invitados, temática, duración y presupuesto. 
                p La siguiente imagen nos presenta los diferentes tipos de protocolo.

              .col-6.mb-3
                img(src='@/assets/curso/temas/texto_destacado/img5.png', alt='imagen relacionada')  
           
            .row(titulo="Elaboración de agenda")
              .col-md-6.mb-4.mb-md-0
                p La agenda de un evento es una herramienta de trabajo necesaria para la planificación, organización y optimización de los recursos (tiempo, materiales, involucrados, entre otros). Se trata de un libro o libreta en la se planean todos los aspectos inherentes al evento, organizados de manera cronológica para dar el cumplimiento según lo planeado.
                p En este punto es importante hacerse la siguiente pregunta: ¿Qué se necesita para organizar correctamente la agenda de un evento empresarial?
                p Para que una agenda se organice correctamente es necesario conocer cada actividad a desarrollar, los responsables, la duración y las necesidades logísticas. Es fundamental revisar la locación, los materiales, los responsables y la información a publicar para hacer la convocatoria del evento, y al concluir, se debe redactar un informe que evalúe los resultados. En este informe se deben destacar el cumplimiento favorable o desfavorable de los objetivos propuestos y la satisfacción de todos los grupos de interés involucrados.
              .col-6.mb-3
                img(src='@/assets/curso/temas/texto_destacado/img6.png', alt='imagen relacionada') 

            .row(titulo="Convocatoria y divulgación")
              .col-md-6.mb-4.mb-md-0
                p Después de definir la agenda se debe realizar una convocatoria o divulgación. Este es un mecanismo usado para informar e invitar grupos de interés a participar en un evento programado. La divulgación puede realizarse por medio de un anuncio físico o virtual o de un documento escrito (carta o tarjeta de invitación) con el que se convoca a un determinado evento o acontecimiento.
                p Antes de iniciar el proceso de convocatoria y divulgación de un evento empresarial es importante conocer cuáles son las características del grupo humano que ayuda a organizar el evento. Esto permitirá definir estrategias adecuadas para lograr procesos efectivos de convocatoria (acción de invitar a un grupo de personas para que asistan a un acto o lugar) y de divulgación (acción de exponer y difundir un contenido sobre un tema general o específico). 
                p La imagen presenta algunas estrategias de divulgación para eventos empresariales.
              .col-6.mb-3
                img(src='@/assets/curso/temas/texto_destacado/img7.png', alt='imagen relacionada') 

            .row(titulo="Publicidad tradicional y digital")
              .col-md-6.mb-4.mb-md-0
                p Antes de hablar de la publicidad es importante conocer el término mercadotecnia, el cual hace referencia al sistema que investiga el comportamiento de los mercados y satisface las necesidades de los consumidores.
                p Con base en esta definición, para promocionar un evento, es necesario conocer la audiencia o los grupos de interés a convocar.  
                p Existen diferentes maneras de promocionar o divulgar un evento. De manera tradicional, se pueden enviar tarjetas de invitación, cartas de invitación, hacer <i>banners</i> publicitarios, volantes promocionales, pautas radiales, pautas televisivas, visitas o llamadas. De manera virtual o digital, se pueden usar bases de datos para enviar correos electrónicos de invitación, crear avisos en redes sociales, enviar tarjetas de invitación virtuales, hacer videos promocionales o publicaciones en páginas web.
              .col-6.mb-3
                img(src='@/assets/curso/temas/texto_destacado/img8.png', alt='imagen relacionada')
            
            .row(titulo="Elaboración de actas")
              .col-md-6.mb-4.mb-md-0
                p Para finalizar un evento, se debe elaborar un acta, documento que se redacta para dejar constancia de lo acordado en una reunión o evento. Su objetivo principal es registrar lo tratado para consultarlo cuando sea conveniente. En todo evento empresarial un acta es muy útil, porque permite recordar los puntos clave que se trataron en el encuentro.
                p Las actas recopilan toda la información del evento, dejan ver la ejecución cronológica de la agenda y muestran de manera concluyente los resultados obtenidos, sean estos satisfactorios o presenten acciones a mejorar.
              .col-6.mb-3
                img(src='@/assets/curso/temas/texto_destacado/img9.png', alt='imagen relacionada')
          
    .row.justify-content-around.align-items-center.mb-4
      .col-lg-9
        .cajon.color-primario.color-fondo.p-4
          p.mb-0 Recuerde que el protocolo empresarial determina cómo actuar según el tipo de evento, la entidad que lo ofrece y el mensaje que se quiere transmitir a sus invitados.     
              
        
    
    
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
