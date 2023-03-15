<template>
  <div class="home">
    <div class="search-container">
      <van-search placeholder="Search..." />
    </div>
    <h2>Recommendation</h2>
    <div class="recommendation-container">
      <div class="cards" v-for="item in recommendations" :key="item.id">
        <v-card>
          <v-img class="recommendation-img" :src="item.image">
            <div class="recommendation-details">
              <div class="for-location">
                <div>
                  {{ item.name }}
                </div>
                <div>
                  <i class="fa fa-map-marker me-2"></i>{{ item.location }}
                </div>
              </div>
              <div class="for-price" align="end">
                <h5 class="recommendation-price">US ${{ item.price }}</h5>
              </div>
            </div>
          </v-img>
        </v-card>
      </div>
    </div>
    <h2>Collection</h2>
    <div class="collection-container">
      <div class="cards" v-for="item in collections" :key="item.id">
        <v-card class="mx-auto">
          <v-img class="collection-img" :src="item.image">
            <div class="collection-details">
              <div class="for-location">
                {{ item.name_en }}
              </div>
              <div>
                <h6>{{ item.name_kh }}</h6>
              </div>
            </div>
          </v-img>
        </v-card>
      </div>
    </div>
    <h2>Attractions</h2>
    <v-chip-group
      v-model="selection"
      column
      class="mb-2"
      style="margin-left: 0"
    >
      <v-chip>All</v-chip>
      <v-chip>&lt; $5</v-chip>
      <v-chip>$5-$10</v-chip>
      <v-chip>$10-$20</v-chip>
      <v-chip>$20-$30</v-chip>
      <v-chip>&gt; $30</v-chip>
    </v-chip-group>
    <div class="row mb-2">
      <div class="column" v-for="item in attractions" :key="item.id">
        <div class="place card-container">
          <img :src="item.image" alt="" />
          <div class="place-details">
            <h5>{{ item.name }}</h5>
            <p>
              <van-rate v-model="item.rate" class="me-2" />
              ({{ item.comment }} reviews)
            </p>
            <h5 class="price">US ${{ item.price }}</h5>
            <br />
            <van-button type="danger">Details</van-button>
          </div>
        </div>
      </div>
    </div>
    <div class="load-more">
      <van-button class="btn-load-more" round type="info"
        >Load more attractions</van-button
      >
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selection: 0,
      attractions: [
        {
          id: 1,
          image:
            "https://cdn.britannica.com/49/94449-050-ECB0E7C2/Angkor-Wat-temple-complex-Camb.jpg",
          name: "ប្រាសាទអង្គវត្ត ខេត្តសៀមរាប",
          rate: 5,
          comment: 4,
          price: 3,
        },
        {
          id: 2,
          image:
            "https://www.travona.net/_next/image?url=https%3A%2F%2Fapi.travona.net%2Fv1%2Ffiles%2F5db93874b92a715695a5a1fa&w=1920&q=75",
          name: "Bike the Siem Reap Countryside",
          rate: 3,
          comment: 54,
          price: 29,
        },
        {
          id: 3,
          image:
            "https://www.travona.net/_next/image?url=https%3A%2F%2Fapi.travona.net%2Fv1%2Ffiles%2F5fa9f9721f562e3e270fe404&w=1920&q=75",
          name: "Khmer Dive Group",
          rate: 2.5,
          price: 49,
          comment: 12,
        },
        {
          id: 4,
          image:
            "https://www.travona.net/_next/image?url=https%3A%2F%2Fapi.travona.net%2Fv1%2Ffiles%2F5df3358214be1f1d9ffcdf70&w=1920&q=75",
          name: "Khmer Traditional Massage",
          rate: 4.7,
          price: 6,
          comment: 64,
        },
        {
          id: 5,
          image:
            "https://www.travona.net/_next/image?url=https%3A%2F%2Fapi.travona.net%2Fv1%2Ffiles%2F5db65e45348bc769d01d3384&w=1920&q=75",
          name: "3D Art Museum",
          rate: 4.9,
          price: 3,
          comment: 67,
        },
        {
          id: 7,
          image:
            "https://www.travona.net/_next/image?url=https%3A%2F%2Fapi.travona.net%2Fv1%2Ffiles%2F5db913017617ee2d2c390ca5&w=1920&q=75",
          name: "Cooking Class: Khmer Food",
          rate: 4.31,
          price: 21,
          comment: 61,
        },
        {
          id: 8,
          image:
            "https://www.travona.net/_next/image?url=https%3A%2F%2Fapi.travona.net%2Fv1%2Ffiles%2F5fe98931a87b0804dd4bb0d9&w=1920&q=75",
          name: "Khunriem Homestay and Camping",
          rate: 4.44,
          price: 3,
          comment: 18,
        },
        {
          id: 9,
          image:
            "https://www.travona.net/_next/image?url=https%3A%2F%2Fapi.travona.net%2Fv1%2Ffiles%2F5efd57e47a551103640e8c10&w=1920&q=75",
          name: "Bike Rental",
          rate: 4.78,
          price: 6,
          comment: 50,
        },
      ],
      recommendations: [
        {
          id: 1,
          name: "សារមន្ទីរពន្លឺធង្ករ",
          location: "សៀមរាប",
          price: 15,
          image:
            "https://lh5.googleusercontent.com/p/AF1QipOx20nqhQz-dI83PJF5EdBgayv6x5Px53QYfuje=w114-h114-n-k-no",
        },
        {
          id: 2,
          name: "Sea Forest Resort",
          location: "មណ្ឌលគីរី",
          price: 50,
          image:
            "https://www.travona.net/_next/image?url=https%3A%2F%2Fapi.travona.net%2Fv1%2Ffiles%2F600260649f3fbd5b9e6e7d71&w=3840&q=75",
        },
        {
          id: 3,
          name: "ធិស័ក្ដិរីសត ជើងភ្នំគូលែន",
          location: "សៀមរាប",
          price: 15,
          image:
            "https://pluskh.com.kh/wp-content/uploads/2021/12/1-16-800x600.jpeg",
        },
        {
          id: 4,
          name: "ដំណើរកម្សាន្យ កំពត-កែប",
          location: "កំពត-កែប",
          price: 20,
          image:
            "https://huunghivietnamcampuchia.thoidai.com.vn/stores/news_dataimages/huunghivietnamcampuchia-thoidai-com-vn/022021/15/09/medium/1120210222172904.2481780.jpg",
        },
        {
          id: 5,
          name: "ដំណើរកម្សាន្តមណ្ឌលគីរី",
          location: "មណ្ឌលគីរី",
          price: 40,
          image:
            "https://upload.wikimedia.org/wikipedia/commons/7/7d/Tourists_at_Bou_Sra_Waterfall%2C_Mondulkiri%2C_Cambodia.jpg",
        },
        {
          id: 5,
          name: "Escape from the busy city with Siem Reap Quad Bike Adventure.",
          location: "សៀមរាប",
          price: 21,
          image:
            "https://srquadbikeadventure.com/asset/uploads/images/3f8ae8f8178f40d31477f0527d83ac3b.jpg",
        },
        {
          id: 6,
          name: "Kampot-Kep Tour",
          location: "កំពត",
          price: 95,
          image:
            "https://www.travona.net/_next/image?url=https%3A%2F%2Fapi.travona.net%2Fv1%2Ffiles%2F618e40ac152293626764eddc&w=1920&q=75",
        },
      ],
      collections: [
        {
          id: 1,
          name_kh: "គ្រួសារ",
          name_en: "Family",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/d/df/Family_Portrait.jpg",
        },
        {
          id: 2,
          name_kh: "ធម្មជាតិ និង ផ្សងព្រេង",
          name_en: "Aature & Advature",
          image:
            "https://www.planetware.com/wpimages/2022/07/australia-top-rated-outdoor-adventures-intro-photograph-hiker.jpg",
        },
        {
          id: 3,
          name_kh: "ដើរលេងចុងសប្ដាហ៍",
          name_en: "Weekend Gateway",
          image:
            "https://www.travelandleisure.com/thmb/L5GLWpe-XNL2jFMrUz9q_zWW81o=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/playa-del-carmen-mexico-ROMLONGS0219_0-b812325a144b47c2a9a11907917be9d9.jpg",
        },
        {
          id: 4,
          name_kh: "ទេសភាព",
          name_en: "Sightseeing",
          image:
            "https://s.inyourpocket.com/img/figure/2019-10/mariacki_old-square_adobestock_rh2010.jpeg",
        },
        {
          id: 5,
          name_kh: "កីឡា",
          name_en: "Sport",
          image:
            "https://www.prodirectsport.com/-/media/prodirect/project/en/one-sport/sport-tabs/desktop-basketball-gradient-2.jpg",
        },
        {
          id: 5,
          name_kh: "សារមន្ទីរ និងសិល្បៈ",
          name_en: "Museum & Art",
          image:
            "https://ichef.bbci.co.uk/news/1024/cpsprodpb/14280/production/_124706528_89f719d3-a57d-4bbe-85c4-ddef1fa2889b.jpg",
        },
        {
          id: 6,
          name_kh: "ពេលរាត្រី",
          name_en: "Nightlife",
          image:
            "https://static.toiimg.com/photo/msid-67636127,width-96,height-65.cms",
        },
      ],
    };
  },
  methods: {},
  mounted() {},
};
</script>
<style scoped>
.home {
  font-family: "Poppins", sans-serif;
}

.recommendation-container,
.collection-container {
  width: 100%;
  padding-top: 10px;
  padding-bottom: 10px;
  display: flex;
  overflow-x: auto;
  list-style: none;
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.recommendation-img {
  position: relative;
  max-height: 225px;
  height: 100%;
  width: 100%;
}
.recommendation-details {
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  width: 100%;
  padding-left: 10px;
  background: linear-gradient(180deg, transparent, rgba(0, 0, 0, 0.7));
}
.collection-img {
  position: relative;
  max-height: 150px;
}
.collection-details {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 35%;
  padding-left: 10px;
  background: rgba(0, 0, 0, 0.6);
}
.recommendation-price {
  position: absolute;
  bottom: 0;
  right: 10px;
  color: orange;
}

.for-location {
  width: 70%;
  font-size: 14px;
  margin-bottom: 5px;
  color: #fff;
}

h2 {
  margin: 20px 0 20px 0;
  color: #3f618d;
}
i {
  font-size: 15px;
  color: #fff;
}

h6 {
  color: #fff;
}

p {
  display: flex;
  color: orange;
}

.price {
  color: orange;
}

.search-container {
  width: 500px;
}
.van-search {
  padding: unset;
}
.van-search .van-cell {
  align-items: center;
  height: 50px;
  font-size: 17px;
}
.cards {
  display: flex;
  margin-right: 22px;
}
.v-card {
  width: 300px;
  border-radius: 10px;
  cursor: pointer;
}

v-img {
  border-radius: 10px;
}

.v-card-text {
  color: orange !important;
}

.v-card:hover {
  box-shadow: 0px 2px 10px 2px rgba(170, 170, 170, 0.75);
}
.v-chip-group {
  margin-left: 10px;
}
.v-chip {
  min-width: 100px;
  color: #3d4a9e;
  background: #ffffff !important;
  border: 1px solid #3d4a9e;
  display: grid;
  place-items: center;
}

.place {
  display: flex;
  border-radius: 10px;
  margin: 10px 0 10px 0;
  width: 100%;
  border: 1px solid #e2e8f0;
}

.place:hover {
  box-shadow: 0px 2px 10px 2px rgba(170, 170, 170, 0.75);
}

.place img {
  width: 50%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
}

.place .place-details {
  max-width: 300px;
  flex-direction: column;
  padding: 20px;
  inline-size: 100%;
  overflow-wrap: break-word;
  position: relative;
}

.van-button {
  border-radius: 5px;
}

.column {
  display: flex;
  width: 33%;
  height: auto;
}
@media screen and (max-width: 1440px) {
  .column {
    width: 50%;
  }
}

@media screen and (max-width: 1000px) {
  .column {
    width: 100%;
  }
}

.load-more {
  width: 100%;
  margin: auto;
  display: grid;
  place-items: center;
}

.btn-load-more {
  border-radius: 50px;
  width: 200px;
  border: none;
  background: #2a69ac;
}
.btn-load-more:hover {
  box-shadow: 0px 2px 10px 2px #d1d1d1;
}
</style>
