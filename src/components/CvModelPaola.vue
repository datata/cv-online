<template>
  <div>
    <vue-html2pdf
      :show-layout="false"
      :float-layout="true"
      :enable-download="true"
      :paginate-elements-by-height="1400"
      filename="cv online"
      :pdf-quality="2"
      :manual-pagination="false"
      pdf-format="a4"
      pdf-orientation="portrait"
      pdf-content-width="800px"
      @hasStartedGeneration="hasStartedGeneration()"
      @hasGenerated="hasGenerated($event)"
      ref="html2Pdf"
    >
      <section slot="pdf-content">
        <div class="pdf">
          <div>{{ this.cv.name }}</div>
          <div>{{ this.cv.profession }}</div>
          <div>{{ this.cv.email }}</div>
          <div>{{ this.cv.phone }}</div>
        </div>
      </section>
    </vue-html2pdf>
  </div>
</template>

<script>
import VueHtml2pdf from "vue-html2pdf";

export default {
  name: "CvModelPaola",
  components: {
    VueHtml2pdf,
  },
  props: {
    print: {
      type: Boolean,
    },
    cv: {
      type: Object,
    },
  },
  watch: {
    print() {
      if (this.print) this.$refs.html2Pdf.generatePdf();
    },
  },
};
</script>

<style>
.pdf{
  margin: 2em 2em 2em 2em;
}
</style>