<template>
  <div class="template day">
    <div
      class="burger"
      :class="{ burger_opened: open, burger_disabled: disableAnimation }"
      @click="toggleBurger"
    >
      <div class="line line-1"></div>
      <div class="line line-2"></div>
      <div class="line line-3"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      open: false,
      disableAnimation: true,
    };
  },
  methods: {
    toggleBurger() {
      this.open = !this.open;
      this.disableAnimation = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.day {
  background: #3faf82;
  display: flex;
  align-items: center;
  justify-content: center;
}

.burger {
  cursor: pointer;
  .line-1 {
    animation: line-1-backwards 0.6s ease-in-out forwards;
  }
  .line-2 {
    animation: line-2-backwards 0.6s ease-in-out forwards;
  }
  .line-3 {
    animation: line-3-backwards 0.6s ease-in-out forwards;
  }

  &_opened {
    .line-1 {
      animation: line-1 0.6s ease-in-out forwards;
    }
    .line-2 {
      animation: line-2 0.6s ease-in-out forwards;
    }
    .line-3 {
      animation: line-3 0.6s ease-in-out forwards;
    }
  }

  &_disabled {
    & > .line {
      animation: none !important;
    }
  }
}

.line {
  width: 80px;
  height: 8px;
  border-radius: 3px;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.3);
  margin-bottom: 15px;
  background: #fff;
}

@keyframes line-1 {
  0% {
    transform: translate3d(0, 0, 0) rotate(0deg);
  }
  50% {
    transform: translate3d(0, 23px, 0) rotate(0deg);
  }
  100% {
    transform: translate3d(0, 23px, 0) rotate(45deg);
  }
}

@keyframes line-2 {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
}

@keyframes line-3 {
  0% {
    transform: translate3d(0, 0, 0) rotate(0deg);
  }
  50% {
    transform: translate3d(0, -23px, 0) rotate(0deg);
  }
  100% {
    transform: translate3d(0, -23px, 0) rotate(135deg);
  }
}

@keyframes line-1-backwards {
  0% {
    transform: translate3d(0, 23px, 0) rotate(45deg);
  }
  50% {
    transform: translate3d(0, 23px, 0) rotate(0deg);
  }
  100% {
    transform: translate3d(0, 0, 0) rotate(0deg);
  }
}

@keyframes line-2-backwards {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes line-3-backwards {
  0% {
    transform: translate3d(0, -23px, 0) rotate(135deg);
  }
  50% {
    transform: translate3d(0, -23px, 0) rotate(0deg);
  }
  100% {
    transform: translate3d(0, 0, 0) rotate(0deg);
  }
}
</style>
