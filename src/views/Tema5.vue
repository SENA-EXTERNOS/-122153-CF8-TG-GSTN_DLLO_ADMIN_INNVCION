<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Trazabilidad del servicio
    .row.justify-content-center.mb-4
        .col-md-5
          figure.mw-sm-350px
            img(src='@/assets/curso/temas/texto_destacado/img29.png', alt='imagen relacionada')
        .col-md-7      
          p Dada la importancia que tienen los eventos empresariales como medio de comunicación y fidelización de clientes internos y externos, es importante recalcar que el éxito de estos se debe a la correcta aplicación de cada uno de sus elementos. Dentro de estos elementos destaca la trazabilidad como un mecanismo de planeación, seguimiento, control y evaluación. Para conocer más sobre este tema, lo invitamos a ver el siguiente video.
    br
    figure.mb-4
      .video
        <iframe width="560" height="315" src="https://www.youtube.com/embed/jASywqOHrQM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    br

    h3.mb-4.mt-4
      i#t_5_1.fas.fa-square.me-3.cuadrado
      | Informes de servicio

    .row.justify-content-center.mb-4
        .col-md-5
          figure.mw-sm-350px
            img(data-aos="fade-down-right" src='@/assets/curso/temas/texto_destacado/img30.png', alt='imagen relacionada')
        .col-md-7      
          p Por otra parte, un informe de servicio recopila información inherente de los procesos que hacen parte del ciclo de servicios y la transforma en datos numéricos, que permiten aplicar un análisis sobre los resultados o la percepción del servicio.

    p.mb-4 Conozcamos unos datos importantes sobre los informes de servicios: 

    .row.mb-5
      .col-sm-6.col-lg-6.col-xl-4.mb-4.mb-xl-0(style="min-height: 400px")
        .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/temas/texto_destacado/img31.svg')})`}")
              .titulo-principal__numero.circulo 
               span 1
            .tarjeta-flip__contenido.p-4.p-xl-5(style="text-align: center")
              p Un buen informe de servicio al cliente toma datos sin procesar y los convierte en estadísticas, para ofrecer una visión general de lo que necesitan y esperan los clientes. Por tanto, este permitirá que la empresa haga seguimiento a tendencias, identifique áreas por mejorar, planifique con eficiencia horarios, carga laboral del personal y pueda mejorar su oferta de servicios.

      .col-sm-6.col-lg-6.col-xl-4.mb-4.mb-sm-0(style="min-height: 400px")
        .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/temas/texto_destacado/img32.svg')})`}")
              .titulo-principal__numero.circulo 
                 span 2
            .tarjeta-flip__contenido.p-4.p-xl-5(style="text-align: center")
              p Un informe de servicio al cliente facilita a una empresa el proceso de toma de decisiones, permite aplicar acciones de mejora frente al nivel de satisfacción de los clientes, contribuye a lograr una mejor gestión de la fuerza laboral y mejora los niveles de eficacia y productividad del equipo de atención al cliente. Está claro que, en la actualidad, el consumidor está más conectado y empoderado, debido a que tiene conocimientos digitales. Por lo tanto, este es más exigente frente a la calidad del servicio que espera de las marcas que usa.

      .col-sm-6.col-lg-6.col-xl-4(style="min-height: 400px")
        .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/temas/texto_destacado/img33.svg')})`}")
              .titulo-principal__numero.circulo 
                 span 3
            .tarjeta-flip__contenido.p-4.p-xl-5(style="text-align: center")
              p Las estadísticas de servicio al cliente, las cuales son utilizadas en el informe de servicio, permiten a una empresa medir su desempeño, eficiencia y muestran qué canales de asistencia prefieren usar los clientes. Además, hacen posible estimar la cantidad de personal que se requiere para atender el área de servicio al cliente de forma efectiva, detectar si el equipo de trabajo cumple con sus funciones de manera adecuada, mejorar la carga laboral para evitar agotamiento, identificar y recompensar el buen desempeño, dar información relevante para mejorar productividad y conocer la información detallada sobre percepción del cliente.
      
    p.mb-4.mt-4 Para finalizar, es importante recordar que un servicio es la acción o el conjunto de actividades destinadas a satisfacer una necesidad determinada de un cliente con un producto intangible, personalizado y heterogéneo, porque atiende diferentes factores; es decir, no involucra cadenas de producción en masa como sí ocurre en la producción de bienes. 
    
    p.mb-4 Las características más importantes de los servicios son:

    TabsA.color-acento-contenido.mb-4
        .tarjeta.color-acento-contenido-borde.p-4(titulo="Intangibilidad")
          .row
            .col-xl-6.p-4.color-fondo
              h4 Intangibilidad 
              p No se pueden ver ni tocar. 
            .col-xl-6.mb-4
              figure
                img(data-aos="fade-up" src='@/assets/curso/temas/texto_destacado/img34.svg', alt='imagen relacionada')
        .tarjeta.color-acento-contenido-borde.p-4(titulo="Indivisibilidad")
          .row
            .col-lg-.col-xl-6.p-4.color-fondo
              h4 Indivisibilidad
              p Aunque se venden paquetes de servicios, hay una unidad mínima indivisible. 
            .col-xl-6
              figure
                img(data-aos="fade-up" src='@/assets/curso/temas/texto_destacado/img34.svg', alt='imagen relacionada')
        .tarjeta.color-acento-contenido-borde.p-4(titulo="Heterogeneidad")
          .row
            .col-xl-6.p-4.color-fondo
              h4 Heterogeneidad
              p Son diversos y variados.
            .col-xl-6
              figure
                img(data-aos="fade-up" src='@/assets/curso/temas/texto_destacado/img34.svg', alt='imagen relacionada')
        .tarjeta.color-acento-contenido-borde.p-4(titulo="No conservables")
          .row
            .col-xl-6.p-4.color-fondo
              h4 No conservables
              p No se pueden almacenar. La prestación del servicio y el consumo ocurren simultáneamente. Por ejemplo, cuando un mesero atiende en un restaurante, no se puede almacenar o guardar ese servicio. Si un pasaje de avión con fecha cerrada no se usa, se pierde, pues el vuelo se realiza en la fecha y la hora programadas; puede volar en otro momento, pero no se puede repetir ese instante.
            .col-xl-6.mb-4
              figure(style="margin-top: 50px;")
                img(data-aos="fade-up" src='@/assets/curso/temas/texto_destacado/img34.svg', alt='imagen relacionada')

    .row.justify-content-around.align-items-center.mb-4
      .col-lg-9
        .cajon.color-acento-botones.color-fondo-secundario.p-4.mb-4.mt-4 
          p.mb-0 Recuerde explorar los demás recursos que se encuentran disponibles en este componente formativo; para ello, diríjase al menú principal, donde encontrará la síntesis, una actividad didáctica para reforzar los conceptos estudiados, material complementario, entre otros.     
  
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
