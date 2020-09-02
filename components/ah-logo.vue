<template>
  <svg
    id="ahlogo"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    viewBox="0 0 100 100"
    enable-background="new 0 0 100 100"
    xml:space="preserve"
  >
    <line
      stroke="#000000"
      stroke-linejoin="round"
      stroke-miterlimit="10"
      x1="50.48"
      y1="92.32"
      x2="50.48"
      y2="8.18"
    />
    <polyline
      stroke="#000000"
      stroke-linejoin="round"
      stroke-miterlimit="10"
      points="22.5,8.18 22.5,64.36 36.49,78.39 
	36.49,92.32 92.65,92.32 92.65,8.08 71.49,29.16 "
    />
    <line
      stroke-linejoin="round"
      stroke-miterlimit="10"
      x1="50.48"
      y1="8.18"
      x2="50.48"
      y2="92.32"
    />
    <polyline
      stroke-linejoin="round"
      stroke-miterlimit="10"
      points="78.46,92.32 78.46,36.14 
	64.47,22.11 64.47,8.18 8.31,8.18 8.31,92.42 29.43,71.31 "
    />
  </svg>
</template>

<style lang="scss">
#ahlogo {
  stroke: $primary-color;
  fill: none;
  stroke-width: 3px;

  animation: 1.2s ah-appear linear;
  stroke-dasharray: 270;
}

@keyframes ah-appear {
  0% {
    opacity: 0;
    stroke-dashoffset: 270;
  }
  70% {
    opacity: 1;
  }
  100% {
    opacity: 1;
    stroke-dashoffset: 0;
  }
}
</style>
