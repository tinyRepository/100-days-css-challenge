<template>
  <div class="frame">
    <slot />
  </div>
</template>

<style lang="scss">
.frame {
  overflow: hidden;
  width: 400px;
  height: 400px;
  background: #fff;
  border-radius: 2px;
  box-shadow: 4px 8px 16px 0 rgba(0, 0, 0, 0.1);
}
</style>
