<template>
  <div class="mt-28">
    <Container>
      <div
        class="
          flex flex-col
          items-center
          justify-between
          md:flex-row
          md:space-x-8
          space-y-4
          md:space-y-0
        "
      >
        <div class="w-full md:w-8/12">
          <div>
            <div class="relative w-full h-80 rounded-2xl overflow-hidden">
              <img
                :src="dataHero[0].image"
                :alt="dataHero[0].title"
                class="object-cover object-center inset-0 w-full h-full"
              />
            </div>
          </div>
        </div>
        <div class="w-full md:w-4/12">
          <div
            class="
              flex
              md:flex-col
              space-x-4
              md:space-x-0
              space-y-0
              md:space-y-8
            "
          >
            <div class="w-full">
              <div class="relative w-full h-36 rounded-2xl overflow-hidden">
                <img
                  :src="dataHero[1].image"
                  :alt="dataHero[1].title"
                  class="object-cover object-center inset-0 w-full h-full"
                />
              </div>
            </div>
            <div class="w-full">
              <div class="relative w-full h-36 rounded-2xl overflow-hidden">
                <img
                  :src="dataHero[2].image"
                  :alt="dataHero[2].title"
                  class="object-cover object-center inset-0 w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  </div>
</template>

<script>
export default {
  name: 'Hero',
  data() {
    return {
      dataHero: [
        {
          _id: 1,
          title: 'White gear on pink flatlay',
          image:
            'https://images.unsplash.com/photo-1493723843671-1d655e66ac1c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
        },
        {
          _id: 2,
          title: 'Pink headphones',
          image:
            'https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
        },
        {
          _id: 3,
          title: 'Yellow headphones',
          image:
            'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
        },
      ],
    }
  },
}
</script>

<style></style>
