<template>
  <v-footer class="shadow-sm text-white">
    <div style="flex-direction: column; width: 85%; margin: auto">
      <div class="footer-container mt-3">
        <div class="office-location">
          <h4>OFFICE LOCATION</h4>
          <p>
            Tempora distinctio recusandae ex consequuntur hic nobis itaque
            dolores nihil iure inventore doloremque ut numquam iusto praesentium
            quas dolor quisquam sequi.
          </p>
        </div>
        <div class="contact">
          <h4>CONTACT US</h4>
          <p>
            <i
              class="fa fa-phone me-2"
              style="font-size: 18px; margin-left: 1px"
            ></i
            >(+855) 70 645 336
          </p>

          <p>
            <i class="fa fa-envelope-o me-2" style="font-size: 18px"></i
            >lyden.chai@gmail.com
          </p>
          <i
            class="fa fa-map-marker me-2"
            style="font-size: 18px; color: #fff; margin-left: 5px"
          ></i
          ><a
            style="margin-left: 3px; color: #fff"
            href="https://www.google.com/maps/place/IntechDev+Co.,+Ltd./@11.582125,104.889974,16z/data=!4m6!3m5!1s0x310951cb2370cf39:0x36b863d4384f87bd!8m2!3d11.581949!4d104.8905907!16s%2Fg%2F11mx3sfs72"
            >Find location</a
          >
        </div>
        <div class="download-app">
          <h4>DOWNLOAD APP</h4>
          <div class="apps">
            <img
              src="https://www.travona.net/_next/image?url=%2Fimages%2Fgoogle-play-badge.png&w=256&q=75"
              height="41"
              width="140"
              alt=""
            />
            <br />
            <img
              class="mt-1"
              src="https://www.travona.net/_next/image?url=%2Fimages%2Fapp-store-badge.png&w=256&q=75"
              height="41"
              width="140"
              alt=""
            />
          </div>
        </div>
      </div>
      <hr />
      <div class="policy">Copyright © 2023 design by Lyden</div>
    </div>
  </v-footer>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
  mounted() {},
};
</script>

<style scoped>
.v-footer {
  width: 100%;
  min-height: 210px;
  background: #414ea0;
}
.footer-container {
  display: flex;
  justify-content: space-between;
}

p {
  width: 300px;
  margin-bottom: 0;
}

.policy {
  width: 100%;
  text-align: center;
}

.apps {
  flex-direction: column;
}
.apps img {
  margin-left: 55px;
  cursor: pointer;
}
a:hover {
  border-bottom: 1px solid #fff;
}
</style>
