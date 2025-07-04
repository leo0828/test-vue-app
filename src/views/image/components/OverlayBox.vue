<template>
  <div class="container">
    <h1 class="text">Scroll</h1>
    <h1 class="text outline-text">Scroll</h1>
    <h1 class="text filter-text">Scroll</h1>

    <section class="images">
      <img v-for="(image, index) in images" :key="index" :src="image.src" />
    </section>
  </div>
</template>

<script>
export default {
  name: "OverlayBox",
  data() {
    return {
      images: [
        {
          src: "https://images.unsplash.com/photo-1556856425-366d6618905d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fG5lb258ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
        },
        {
          src: "https://images.unsplash.com/photo-1520271348391-049dd132bb7c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
        },
        {
          src: "https://images.unsplash.com/photo-1609166214994-502d326bafee?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
        },
        {
          src: "https://images.unsplash.com/photo-1589882265634-84f7eb9a3414?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=434&q=80",
        },
        {
          src: "https://images.unsplash.com/photo-1514689832698-319d3bcac5d5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=434&q=80",
        },
        {
          src: "https://images.unsplash.com/photo-1535207010348-71e47296838a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
        },
        {
          src: "https://images.unsplash.com/photo-1588007375246-3ee823ef4851?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fG5lb258ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
        },
        {
          src: "https://images.unsplash.com/photo-1571450669798-fcb4c543f6a4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fG5lb258ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
        },
      ],
    }
  },
}
</script>

<style scoped>
.container {
  background-color: #27272a;
  color: white;
  overflow-y: auto;
  height: 600px;
}

.text {
  position: fixed;
  top: 30vh;
  left: 0;
  font-weight: 900;
  font-style: normal;
  font-size: 8vw;
  text-align: center;
  width: 100%;
  color: white;
  z-index: 0;
}

.outline-text {
  color: transparent;
  -webkit-text-stroke-width: 1.5px;
  -webkit-text-stroke-color: white;
  z-index: 2;
}

.filter-text {
  mix-blend-mode: screen;
  color: #804691;
  z-index: 3;
}

.images {
  padding-top: 60vh;
  position: relative;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  min-height: 150vh;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(20, 2%);
  grid-template-rows: repeat(30, 3%);
  justify-content: center;
  justify-items: center;
  align-items: center;
  z-index: 1;
  object-fit: cover;
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

img:nth-child(1) {
  grid-area: 1/1/6/8;
}

img:nth-child(2) {
  grid-area: 3/12/8/20;
}

img:nth-child(3) {
  grid-area: 9/5/13/15;
}

img:nth-child(4) {
  grid-area: 14/1/18/8;
}

img:nth-child(5) {
  grid-area: 16/12/20/19;
}

img:nth-child(6) {
  grid-area: 20/2/25/9;
}

img:nth-child(7) {
  grid-area: 22/11/24/20;
}

img:nth-child(8) {
  grid-area: 26/5/30/15;
}
</style>
