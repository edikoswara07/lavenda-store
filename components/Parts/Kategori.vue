<template>
  <Container>
    <div class="my-10">
      <div class="flex items-center justify-between w-full">
        <div>
          <h3 class="text-lightblue-900 font-semibold text-lg">
            Kategori produk
          </h3>
        </div>
        <div>
          <span class="font-medium text-xs text-lightblue-700">
            Lihat semua kategori
          </span>
        </div>
      </div>
      <!-- Kategori list -->
      <div class="grid md:grid-flow-col grid-cols-2 md:grid-cols-4 gap-4 my-4">
        <div v-for="data in datas" :key="data._id">
          <div
            class="
              relative
              flex
              items-center
              overflow-hidden
              rounded-lg
              shadow-2xl
              h-28
              w-full
            "
          >
            <div
              class="
                flex
                w-full
                h-full
                items-center
                absolute
                rounded-md
                bg-bluegray-900 bg-opacity-20
              "
            >
              <h3
                class="
                  font-semibold
                  text-lightblue-100 text-base text-center
                  w-full
                "
              >
                {{ data.nama }}
              </h3>
            </div>

            <img
              :src="data.image"
              :alt="data.nama"
              class="w-full h-full inset-0 object-cover object-center"
            />
          </div>
        </div>
      </div>
    </div>
  </Container>
</template>

<script>
import dataKategori from '../../assets/dataKategori.json'
export default {
  name: 'Kategori',
  data() {
    return {
      datas: dataKategori,
    }
  },
}
</script>

<style></style>
