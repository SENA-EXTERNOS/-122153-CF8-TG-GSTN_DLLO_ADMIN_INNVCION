<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Logística en eventos

    .row.justify-content-center.mb-4
      .col-md-5
        figure.mw-sm-350px
          img(src='@/assets/curso/temas/texto_destacado/img15.png', alt='imagen relacionada')
      .col-md-7      
        p Y continuamos con la logística, la cual es el conjunto de métodos y medios idóneos para organizar, planificar y gestionar un emprendimiento o evento, incluyendo los costos y la calidad esperada. La logística de eventos permite ofrecer bienes y servicios adecuados en el momento justo, en el lugar idóneo, en las condiciones deseadas, con la mayor rentabilidad posible. 
        p Es importante tener presente que todo evento inicia cuando la empresa toma la decisión de realizar dicha actividad y concluye en el momento en que el cliente o grupo de interés brinda su percepción sobre su desarrollo.
    
    p.mb-4 Este proceso se divide en fases que permiten el desarrollo de los eventos en forma cíclica, garantizando la satisfacción de los grupos de interés. Estas fases son:
  
    .mx-auto.col-md-10.mb-5
      .tarjeta
        .imgCont.m-auto
          .row.justify-content-center.mb-4
            ImagenInfografica.color-acento-botones.mb-5
              template(v-slot:imagen)
                figure
                  img(data-aos="fade-left" src='@/assets/curso/temas/texto_destacado/img16.svg', alt='diagrama tipo rompecabezas')

              .tarjeta.color-secundario.p-4(x="28%" y="44%" numero="+" style='border-radius: 10px')
                p.mb-0.text-center Proceso mediante el cual se detectan situaciones de éxito, de satisfacción o de desviaciones o no conformidades. Permite aplicar correctivos y mejorar la ejecución de los próximos eventos.
              
              .tarjeta.color-secundario.p-4(x="64%" y="1%" numero="+" style='border-radius: 10px')
                p.mb-0.text-center Es la recolección de información para determinar los objetivos, metas y recursos necesarios en un evento. 
               
              
              .tarjeta.color-secundario.p-4(x="98%" y="44%" numero="+" style='border-radius: 10px')
                p.mb-0.text-center Es la acción de dividir un evento en subfases temporalizadas y a cada una de ellas asignarles tiempo, recursos y funciones.
              
              .tarjeta.color-secundario.p-4(x="64%" y="87%" numero="+" style='border-radius: 10px')
                p.mb-0.text-center Es la ejecución de todas las actividades planteadas.
                
    h3.mb-4 
      i#t_3_1.fas.fa-square.me-3.cuadrado
      | Organización
    p.mb-4 La organización consiste en dividir el evento en actividades temporalizadas y a cada una de ellas asignarle tareas de acuerdo a lo planeado. 

    p.mb-4 En la organización logística de eventos existen seis etapas clave:  

    .mx-auto.col-md-12.mb-4
      figure
          img(data-aos="flip-right" src='@/assets/curso/temas/figuras/figura2.png', alt='Ejemplo mapa de procesos')
    h3.mb-4.mt-4  
      i#t_3_2.fas.fa-square.me-3.cuadrado
      | Recursos
    p.mb-4 Los recursos son los medios materiales y humanos dispuestos durante el desarrollo de un evento empresarial.   
    
    .row(style=" padding: 8px;")
      .col-lg-6.col-md-6
        .cajon.color-fondo-terciario.p-4(style="height: 420px; width: 525px; text-align:center")
          .mx-auto.col-md-12.mb-4
            figure
              img(data-aos="flip-right" src='@/assets/curso/temas/texto_destacado/img17.png', alt='Ejemplo mapa de procesos')
          h5 Recursos físicos
          p Son bienes involucrados directa o indirectamente en el proceso productivo, tales como materias primas, materiales procesados, bienes inmuebles, maquinaria, equipos y elementos de consumo. 
      .col-lg-6.col-md-6.mb-4
        .cajon.color-secundario.p-4(style="height: 420px; width: 530px; text-align:center")
          .mx-auto.mb-4
            figure
              img(data-aos="flip-right" src='@/assets/curso/temas/texto_destacado/img18.png', alt='Ejemplo mapa de procesos')
          h5 Recursos humanos
          p Conjunto de personas que laboran en el desarrollo de un evento. 

    h3.mb-4.mt-4 
      i#t_3_3.fas.fa-square.me-3.cuadrado
      | Plan de contingencia
    p.mb-4 Un plan de contingencia representa un conjunto de operaciones alternativas al desarrollo normal de cada evento. Su finalidad es permitir que un evento se desarrolle de manera correcta, aun cuando alguna de las actividades o funciones se desvíen de su ruta normal por algunas circunstancias ajenas a la organización.  
   
    .row.justify-content-around.align-items-center
      .col-lg-9
        .cajon.color-acento-botones.color-acento-botones.p-4.mb-4.mt-4 
          p.mb-0 El plan de contingencia durante un evento empresarial debe ser aplicable a todo evento con afluencia masiva de público que se desarrolle en el territorio nacional. Su cobertura técnica y metodológica debe cubrir cada circunstancia y fase del evento: planeación, responsabilidades, logística operacional, seguimiento, evaluación y cierre.     
   
    h3.mb-4.mt-4 
      i#t_3_4.fas.fa-square.me-3.cuadrado
      | <i>Feedback</i> o retroalimentación
    
    .row.justify-content-center.mb-4
      .col-md-5
        figure.mw-sm-350px
          img(src='@/assets/curso/temas/texto_destacado/img19.png', alt='imagen relacionada')
      .col-md-7      
        p En el área de eventos empresariales se denomina <i>Feedback</i> o retroalimentación a la opinión de los participantes en un evento. Una evaluación exhaustiva del evento permite entender lo que funcionó y lo que no, si se atendieron a cabalidad las expectativas de los asistentes, si funcionó el mercadeo realizado o si el presupuesto y cronograma se apegaron a la realidad. Además, permite identificar en qué área es necesario tener más cuidado. 
        p El <i>Feedback</i> permite mejorar la planificación de eventos, revisar de forma adecuada lo acontecido y contribuye a brindar mayor seguridad al mejorar aspectos puntuales de la planificación de eventos.
    

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
