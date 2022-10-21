<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .row.justify-content-between.mb-5
      .col-auto
        .titulo-sexto.color-acento-botones
                p
                b Gestión del desarrollo administrativo e innovación.
                br
                p Síntesis: Introducción a la administración
      .col-md-1.col-sm-2.col-xs-3
        img(src="@/assets/template/logo-sena-naranja.svg", alt="alt")
            
    p El siguiente mapa integra los criterios y especificidades de los conocimientos expuestos en el presente componente formativo.
    .row.justify-content-center
        .col-lg-10.mb-5
          figure
            img(src="@/assets/curso/temas/sintesis.svg", alt="alt")
    .row.justify-content-center
      .col-lg-3
        a.anexo.mb-4(:href="obtenerLink('/downloads/GraficaSintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Sitensis.pdf
</template>

<script>
export default {
  name: 'Sintesis',
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
