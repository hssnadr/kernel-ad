<template>
  <div class="wm-container">
    <div class="iframe-container">
      <iframe
        src="https://player.vimeo.com/video/97103156"
        class="responsive-iframe"
        frameborder="0"
        allow="autoplay; fullscreen"
        allowfullscreen
      ></iframe>
    </div>

    <img
      class="wm-image"
      src="https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/131eac35604629.56fd01b72611d.jpg"
      alt="diploma-poster-1"
    />
    <img
      class="wm-image"
      src="https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/d9f4a935604629.56fcfb93ba5e3.jpg"
      alt="diploma-poster-2"
    />
    <img
      class="wm-image"
      src="https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/02327535604629.56fcfb93bac21.jpg"
      alt="diploma-poster-3"
    />
    <img
      class="wm-image"
      src="https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/46983335604629.56fcfb93b99fb.jpg"
      alt="wm-poster-mockup"
    />
    <img
      class="wm-image"
      src="https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/cde98235604629.56fcfef9c9d90.jpg"
      alt="wm-functions"
    />
    <img
      class="wm-image"
      src="https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/d37f1735604629.56fd07897ff11.jpg"
      alt="wm-smartphone"
    />
    <iframe
      id="diploma-presentation"
      src="https://www.scribd.com/embeds/306500518/content?start_page=1&view_mode=scroll&show_recommendations=true"
      scrolling="no"
      frameborder="0"
      style="margin:20px auto;display:block;width:80%;height:800px;"
    ></iframe>
    <img
      class="wm-thanks"
      src="https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/140fad35604629.56fd07897f8cd.jpg"
      alt="wm-thanks"
    />
  </div>
</template>

<script>
export default {
  name: 'WhooshingMachine',
  layout: 'ProjectLayout'
}
</script>

<style lang="scss">
.wm-image {
  width: 100%;
  height: auto;
  margin-left: auto;
  margin-right: auto;
}

.wm-thanks {
  width: 75%;
  height: auto;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
</style>
