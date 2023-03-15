<template>
  <div class="about-container">
    <h1>About page</h1>
    <div class="vant-card">
      <van-card
        num="2"
        price="2.00"
        title="Title"
        desc="Description"
        thumb="https://img01.yzcdn.cn/vant/ipad.jpeg"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return { value: "" };
  },
  methods: {},
  mounted() {},
};
</script>
<style scoped>
.vant-card {
  width: 400px;
  height: 300px;
}
.about-container{
  height: 66.3vh;
}
</style>
