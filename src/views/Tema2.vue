<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Comité de eventos

    .row.justify-content-center.mb-4
      .col-md-5
        figure.mw-sm-350px
          img(src='@/assets/curso/temas/texto_destacado/img10.png', alt='imagen relacionada')
      .col-md-7      
        p Tenemos claro qué es el evento, ahora hablemos del conjunto de personas encargadas de velar por el éxito de un evento. Se pueden crear subcomités, los cuales se encargan de organizar partes específicas del evento, como las finanzas, las relaciones públicas o la logística.
        p Todo comité se debe estructurar de manera formal (mediante acta) y lo deben conformar personas debidamente notificadas, que ejecuten roles necesarios e importantes dentro del evento.
    
    p.mb-4 A continuación, se presentan a lgunos ítems importantes que deben tener en cuenta los comités de eventos.

    TabsC.color-acento-contenido.mb-4
      .py-3.py-md-4(titulo="Organización")
        .row.justify-content-around.align-items-center
          .col-md-4
            figure
              img(data-aos="zoom-out-up" src='@/assets/curso/temas/texto_destacado/img11.svg', alt='imagen representativa')
      
          .col-md-7.mb-4.mb-md-0
            h4 Organización
            p Los comités de eventos tienen las siguientes funciones organizacionales:

            ol.lista-ol
              li 
                i.fas.fa-angle-right.txt--black
                |Preparar el cronograma de actividades, asignar fechas preliminares, establecer el tema o los temas a tratar y definir las actividades a realizar, según el público previsto.
              li 
                i.fas.fa-angle-right.txt--black
                | Estructurar el programa técnico, seleccionar los ponentes, conferencistas y coordinadores de actividades.
              li 
                i.fas.fa-angle-right.txt--black
                | Determinar la estructura del evento a desarrollar.
              li 
                i.fas.fa-angle-right.txt--black
                | Convocar a reuniones, establecer actividades, controlar su ejecución e informar sobre los imprevistos que se presenten.
        
          
      .py-3.py-md-4(titulo="Alcance")
        .row.justify-content-around.align-items-center
          .col-md-4
            figure
              img(data-aos="zoom-out-right" src='@/assets/curso/temas/texto_destacado/img12.svg', alt='imagen representativa')

          .col-md-7.mb-4.mb-md-0
            h4 Alcance
            p Para el desarrollo del evento, cada comité es responsable de planear y organizar cada actividad asignada. Esto permite evaluar cuáles actividades funcionan bien y en cuáles se debe mejorar, para poder plantear acciones correctivas aplicables a próximos eventos.
            p El alcance de un evento está determinado en la fase de planeación, pues es allí donde se define hasta dónde se podrá abarcar en lo que respecta a números de personas, tiempo, localización geográfica y objetivos organizacionales.
            p Los alcances de las funciones de un comité se deben definir en el momento en que este se integra. Estos deben quedar formalmente documentados en el acta de constitución del comité.

      .py-3.py-md-4(titulo="Responsabilidades")
        .row.justify-content-around.align-items-center
          .col-md-4
            figure
              img(data-aos="zoom-out-right" src='@/assets/curso/temas/texto_destacado/img13.svg', alt='imagen representativa')

          .col-md-7.mb-4.mb-md-0
            h4 Responsabilidades
            p El comité organizador de un evento delega responsabilidades y asegura que estas se realicen de forma puntual, según lo planeado. A su vez, cada subcomité contribuye a planear actividades, seleccionar responsables y velar para que se realicen correctamente, en el tiempo esperado. 
            
          
      .py-3.py-md-4(titulo="Documentación")
        .row.justify-content-around.align-items-center
          .col-md-4
            figure
              img(data-aos="zoom-out-left" src='@/assets/curso/temas/texto_destacado/img14.svg', alt='imagen representativa')

          .col-md-7.mb-4.mb-md-0
            h4 Documentación
            p Por último, es necesario hacer la documentación de un evento empresarial. Esta brinda un sistema estandarizado de referencia para que todos los usuarios actúen de la misma forma, brinda documentación importante para quienes participan del evento, permite aclarar procesos dudosos y ayuda a simplificar procesos.
            p La documentación es una herramienta útil que ofrece respuestas rápidas en un mismo documento, permite actuar de acuerdo con la reglamentación vigente, ahorra tiempo, sirve como manual de capacitación y reúne información importante de varios documentos en uno solo.
    
    p.mb-4 Ahora, veamos un ejemplo de actividades de un subcomité, en este caso de finanzas, es el siguiente:        

    .mx-auto.col-md-12.mb-4
      .titulo-sexto.color-acento-contenido
        p
          b Figura 1.
          p Ejemplo de actividades del subcomité de finanzas

      figure.mb-4
          img(data-aos="flip-left" src='@/assets/curso/temas/figuras/figura1.svg', alt='diagrama')  
         
      
</template>

<script>
export default {
  name: 'Tema2',
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
