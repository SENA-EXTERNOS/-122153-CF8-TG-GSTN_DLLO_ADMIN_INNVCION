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
        p Para iniciar, es necesario saber qué es un evento. Esta palabra viene de la alocución latina eventus, que se refiere a una actividad o acontecimiento planeado y organizado que convoca y reúne a una determinada cantidad de personas en un mismo lugar y al mismo tiempo. Los eventos se pueden organizar para desarrollar diferentes actividades, sean estas de tipo social, cultural, comercial o profesional. También puede definirse como una actividad no rutinaria y planeada, cuyo objetivo puede ser de ocio, cultural, personal u organizacional. Los eventos se pueden gestar por fuera de la actividad normal diaria y pueden ser planeados para educar, informar, celebrar, entretener o generar experiencias en un grupo de personas. 
    
    .row.justify-content-center.mb-4
      .col-md-7      
        p Un evento varía según su carácter, naturaleza y convocante. Sin embargo, todos los eventos tienen elementos comunes pues requieren organización previa y reúnen a un grupo de personas determinadas en una fecha y lugar previamente establecidos para desarrollar o compartir actividades afines a un mismo objetivo, que puede ser de carácter social, familiar, comercial o empresarial. Los eventos son intercambios sociales y culturales que permiten celebrar un acontecimiento social con familia y amigos o dar a conocer o posicionar  una empresa y sus productos o servicios. 
      .col-md-5
        figure.mw-sm-350px
          img(src='@/assets/curso/temas/texto_destacado/img3.png', alt='imagen relacionada')
    
    h3 
      i.fas.fa-square.me-3.cuadrado
      | Manual de funciones

    .row.justify-content-center.mb-4
      .col-md-5
        figure.mw-sm-350px
          img(src='@/assets/curso/temas/texto_destacado/img4.png', alt='imagen relacionada')
      .col-md-7      
        p Ahora, un evento empresarial es una acción concreta, alineada con actividades de la empresa convocante y su estrategia de marketing, que reúne personas o empresas con objetivos afines al tema propuesto. Los eventos empresariales se pueden programar para diferentes objetivos que van desde dar a conocer la empresa hasta promover la fidelización de los clientes internos y externos. 
        p Existe una gran variedad de eventos empresariales celebrados según circunstancias, objetivos, intención, tiempo y lugar, y las necesidades del organizador o anfitrión. Pueden ser eventos de carácter técnico o especializado para sectores específicos que desean ofrecer productos y servicios o que buscan mejorar la imagen de una empresa.
        p Algunos de estos eventos son:

    
    
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
