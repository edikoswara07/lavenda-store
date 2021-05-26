<template>
  <Container>
    <div class="my-10">
      <div class="flex items-center justify-between h-auto w-full">
        <div>
          <h3 class="text-lightblue-900 font-semibold md:text-lg">
            Rekomendasi buat lu :V
          </h3>
        </div>
        <div>
          <span class="font-medium text-xs text-lightblue-700">
            Lihat semua produk
          </span>
        </div>
      </div>
      <!-- Produk list -->
      <div class="grid grid-cols-1 md:grid-cols-4 gap-4 my-4 h-auto">
        <div
          v-for="data in datas"
          :key="data._id"
          class="
            bg-gray-200
            shadow-xl
            rounded-lg
            overflow-hidden
            relative
            flex
            h-auto
          "
        >
          <div class="bg-white h-[360px] md:h-[410px] w-full">
            <div class="p-2 absolute w-full">
              <div class="relative h-44 w-full">
                <div class="right-2 top-2 absolute">
                  <div class="bg-rose-800 px-4 py-1 rounded-md">
                    <h5 class="text-xs font-medium text-white align-middle">
                      {{ data.kategori }}
                    </h5>
                  </div>
                </div>

                <img
                  :src="data.image"
                  :alt="data.name"
                  class="
                    w-full
                    h-full
                    inset-0
                    object-cover object-center
                    rounded-lg
                  "
                />
              </div>
              <div class="flex flex-col my-2">
                <div class="mt-4">
                  <h3
                    class="
                      text-xs
                      md:text-base
                      font-semibold
                      text-bluegray-900
                      leading-relaxed
                    "
                  >
                    {{ data.name }}
                  </h3>
                </div>
                <div class="mt-4">
                  <p class="text-xs md:text-sm text-bluegray-700 text-left">
                    {{ data.keterangan }}
                  </p>
                </div>
              </div>
              <div class="flex justify-between items-center mt-10">
                <div class="">
                  <h3 class="text-bluegray-900 text-sm">
                    Harga :
                    <span class="font-semibold text-bluegray-700">
                      Rp {{ data.harga }}</span
                    >
                  </h3>
                </div>
                <div class="">
                  <button>
                    <span
                      v-html="$feathericons['shopping-cart'].toSvg()"
                    ></span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Container>
</template>

<script>
import dataProduk from '../../assets/dataProduk.json'
export default {
  name: 'Produk',
  data() {
    return {
      datas: dataProduk,
    }
  },
}
</script>

<style></style>
