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
          .cajon.color-acento-botones.color-acento-botones.p-4.mb-4.mt-4 
            p.mb-0 La información cualitativa de un evento empresarial describe características, cualidades y rasgos no cuantificables como opiniones personales, descripciones o percepciones sobre un tema determinado, mientras que la información cuantitativa es medible y corresponde a estadísticas, cantidades o mediciones.     
   
      p.mb-4 Existen varias formas de recolectar información según datos requeridos y actividades desarrolladas. De acuerdo con Harvard Business School, entre las técnicas de recolección de información más usadas en analítica empresarial se encuentran las siguientes: 
  
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
