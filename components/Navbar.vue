<template>
  <div class="fixed top-0 z-50 w-full py-4 bg-white shadow-lg">
    <Container>
      <div
        class="
          flex flex-col
          md:flex-row
          justify-between
          md:items-center
          space-y-8
          md:space-y-0
        "
      >
        <div class="flex justify-between items-center">
          <div>
            <span class="font-bold text-xl text-lightblue-900"
              >LavendaStore</span
            >
          </div>
          <div class="block md:hidden">
            <div>
              <button
                class="align-middle text-lightblue-900"
                :class="[isOpen ? 'block' : 'hidden']"
                @click="toggleMenu"
              >
                <span v-html="$feathericons['menu'].toSvg()"></span>
              </button>
              <button
                class="align-middle text-lightblue-900"
                :class="[isOpen ? 'hidden' : 'block']"
                @click="toggleMenu"
              >
                <span v-html="$feathericons['x'].toSvg()"></span>
              </button>
            </div>
          </div>
        </div>

        <!-- menu -->
        <div class="md:flex" :class="[isOpen ? 'hidden' : 'block']">
          <ul
            class="
              flex flex-col
              md:flex-row
              font-semibold
              text-sm text-lightblue-700
              space-x-0
              md:space-x-4
              space-y-3
              md:space-y-0
            "
          >
            <li v-for="link in links" :key="link._id">
              <NuxtLink :to="link.to">{{ link.name }}</NuxtLink>
            </li>
          </ul>
        </div>

        <div
          class="
            flex-col
            md:flex-row
            space-y-2
            md:space-y-0 md:space-x-2
            md:flex
          "
          :class="[isOpen ? 'hidden' : 'block']"
        >
          <div>
            <button
              class="
                w-full
                font-bold
                text-sm
                px-4
                py-2
                hover:bg-lightblue-700
                bg-lightblue-500
                text-lightblue-50
                rounded-xl
                align-middle
              "
            >
              Sign In
            </button>
          </div>
          <div>
            <button
              class="
                w-full
                font-bold
                text-sm
                px-4
                py-2
                hover:bg-lightblue-700
                bg-lightblue-900
                text-lightblue-50
                rounded-xl
                align-middle
              "
            >
              Register
            </button>
          </div>
        </div>
      </div>
    </Container>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      isOpen: true,
      links: [
        {
          _id: 1,
          to: '/',
          name: 'Home',
        },
        {
          _id: 2,
          to: '/products',
          name: 'Produk',
        },
        {
          _id: 3,
          to: '/categories',
          name: 'Kategori',
        },
        {
          _id: 4,
          to: '/promotions',
          name: 'Promo',
        },
        {
          _id: 5,
          to: '/blogs',
          name: 'Blog',
        },
        {
          _id: 6,
          to: '/faqs',
          name: 'FAQs',
        },
      ],
    }
  },
  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen
    },
  },
}
</script>

<style></style>
