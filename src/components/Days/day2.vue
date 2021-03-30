<template>
  <div class="template day">
    <div class="circle">
      <div class="sun"></div>
      <div class="sky"></div>
      <div class="ground"></div>
      <div class="shadow"></div>
      <div class="triangle__left"></div>
      <div class="triangle__right"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
$width: 180px;
$height: 180px;

.day {
  background: #272c34;
  display: flex;
  align-items: center;
  justify-content: center;
}

.circle {
  width: $width;
  height: $height;
  border-radius: 50%;
  position: relative;
  overflow: hidden;
}

.sky {
  background: #7ddffc;
  width: $height;
  height: 124px;
  animation: sky 4s cubic-bezier(0.4, 0, 0.49, 1) infinite;
}

.shadow {
  position: absolute;
  z-index: 2;
  top: 124px;
  left: -80px;
  height: 30px;
  width: 360px;
  background: rgba(0, 0, 0, 0.2);
  transform-origin: 50% 0%;
  animation: shadow 4s cubic-bezier(0.4, 0, 0.49, 1) infinite;
}

.sun {
  position: absolute;
  transform-origin: 50% 400%;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  background: #ffef00;
  animation: sun 4s cubic-bezier(0.4, 0, 0.49, 1) infinite;

  z-index: 2;
  top: 7px;
  left: 73px;
}

.ground {
  background: #f0de75;
  height: 56px;
  animation: ground 4s cubic-bezier(0.4, 0, 0.49, 1) infinite;
}

.triangle {
  &__left {
    position: absolute;
    width: 115px;
    height: 58px;
    top: 66px;
    left: 36px;
    background: #f4f4f4;
    clip-path: polygon(0% 100%, 100% 100%, 50% 0%);
    animation: pyramide 4s cubic-bezier(0.4, 0, 0.49, 1) infinite;
  }

  &__right {
    position: absolute;
    width: 58px;
    height: 58px;
    left: 93px;
    top: 66px;
    background: #dddada;
    clip-path: polygon(30% 100%, 100% 100%, 0% 0%);
    animation: pyramide 4s reverse cubic-bezier(0.4, 0, 0.49, 1) infinite;
  }
}

@keyframes shadow {
  0% {
    transform: scaleY(0);
    clip-path: polygon(115px 0%, 231px 0%, 100% 100%);
  }
  30% {
    transform: scaleY(1);
    clip-path: polygon(115px 0%, 231px 0%, 80% 100%);
  }
  55% {
    transform: scaleY(0.4);
  }
  75% {
    transform: scaleY(1);
  }
  100% {
    transform: scaleY(0);
    clip-path: polygon(115px 0%, 231px 0%, 0% 100%);
  }
}

@keyframes ground {
  0% {
    background: #272c34;
  }
  30% {
    background: #f0de75;
  }
  70% {
    background: #f0de75;
  }
  100% {
    background: #272c34;
  }
}

@keyframes sky {
  0% {
    background: #272c34;
  }

  30% {
    background: #7ddffc;
  }

  70% {
    background: #7ddffc;
  }

  100% {
    background: #272c34;
  }
}

@keyframes pyramide {
  0% {
    background: #272c34;
  }

  30% {
    background: #f4f4f4;
  }

  70% {
    background: #dddada;
  }

  100% {
    background: #272c34;
  }
}

@keyframes sun {
  0% {
    transform: rotate(-70deg);
    background: #f57209;
  }

  30% {
    transform: rotate(-20deg);
    background: #ffef00;
  }

  70% {
    background: #ffef00;
  }

  100% {
    transform: rotate(70deg);
    background: #f57209;
  }
}
</style>
