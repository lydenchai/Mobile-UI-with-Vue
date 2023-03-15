<template>
  <div class="sub-content"><hello-world /></div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  components: {
    "hello-world": HelloWorld,
  },
  data() {
    return {
      test: "Home page",
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
