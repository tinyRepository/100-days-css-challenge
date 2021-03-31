<template>
  <div class="day template">
    <div class="container">
      <div class="circle circle-1"></div>
      <div class="circle circle-2"></div>
      <div class="circle circle-3"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.day {
  background: #e56262;
}

.circle {
  background: #fff;
  border-radius: 50%;
  position: absolute;
}

.circle-1 {
  z-index: 3;
  width: 30px;
  height: 30px;
  animation: circle-1 2s cubic-bezier(0.21, 0.98, 0.6, 0.99) infinite alternate;
}

.circle-2 {
  z-index: 2;
  width: 60px;
  height: 60px;
  animation: circle-2 2s cubic-bezier(0.21, 0.98, 0.6, 0.99) infinite alternate;
}

.circle-3 {
  z-index: 1;
  width: 90px;
  height: 90px;
  animation: circle-3 2s cubic-bezier(0.21, 0.98, 0.6, 0.99) infinite alternate;
}

.container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

@keyframes circle-1 {
  0%,
  70% {
    box-shadow: 2px 2px 3px 2px rgba(0, 0, 0, 0.2);
    transform: scale(0);
  }
  100% {
    box-shadow: 10px 10px 15px 0 rgba(0, 0, 0, 0.3);
    transform: scale(1);
  }
}

@keyframes circle-2 {
  0%,
  40% {
    box-shadow: 2px 2px 3px 2px rgba(0, 0, 0, 0.2);
    transform: scale(0);
  }
  100% {
    box-shadow: 10px 10px 15px 0 rgba(0, 0, 0, 0.3);
    transform: scale(1);
  }
}

@keyframes circle-3 {
  0%,
  10% {
    box-shadow: 2px 2px 3px 2px rgba(0, 0, 0, 0.2);
    transform: scale(0);
  }
  100% {
    box-shadow: 10px 10px 15px 0 rgba(0, 0, 0, 0.3);
    transform: scale(1);
  }
}
</style>
