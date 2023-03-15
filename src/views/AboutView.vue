<template>
  <div class="sub-content"><about-us /></div>
</template>

<script>
import AboutUs from "@/components/AboutUs.vue";

export default {
  components: {
    "about-us": AboutUs,
  },
  data() {
    return {
      test: "About page",
    };
  },
  methods: {
    print() {
      console.log(this.test);
    },
  },
  mounted() {
    this.print();
  },
};
</script>
<style scoped></style>
