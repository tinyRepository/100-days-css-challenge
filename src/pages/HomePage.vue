<template>
  <div class="home-page">
    <h1 class="home-page__title">100 Days css challenge</h1>
    <frame-el class="home-page__frame">
      <transition name="fade" mode="out-in">
        <component :is="`day${currentDay}`" />
      </transition>
    </frame-el>
    <h3>Day: {{ currentDay }}</h3>
    <div
      class="home-page__links"
      :class="{ 'home-page__links_once': isFirstDay }"
    >
      <router-link
        :to="`/${currentDay - 1}`"
        v-if="!isFirstDay"
        class="home-page__link"
      >
        Previous
      </router-link>
      <router-link :to="`/${+currentDay + 1}`" class="home-page__link"
        >Next</router-link
      >
    </div>
  </div>
</template>

<script>
import FrameEl from '@/components/FrameEl';
import modules from '@/mixins/modules';

export default {
  mixins: [modules],
  components: {
    FrameEl,
  },
  computed: {
    currentDay() {
      return this.$route.params.day;
    },
    isFirstDay() {
      return this.currentDay == 1;
    },
    countDays() {
      const days = require.context('@/components/Days', true, /^.*\.vue$/);
      return days.keys().length;
    },
  },
  methods: {
    goToStartPage() {
      this.$router.replace('/1');
    },
  },
  watch: {
    '$route.params.day': {
      handler(day) {
        if (day > this.countDays || isNaN(day)) {
          this.goToStartPage();
        }
      },
      immediate: true,
    },
  },
};
</script>

<style lang="scss">
.home-page {
  height: 100%;
  padding: 40px 0;
  background: linear-gradient(200deg, #406bd8 0%, #9cdbef 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &__title {
    font-size: 38px;
    text-align: center;
  }

  &__frame {
    margin: auto;
  }

  &__links {
    display: flex;
    justify-content: space-between;
    max-width: 200px;
    width: 100%;

    &_once {
      justify-content: center;
    }
  }

  &__link {
    user-select: none;
    color: #000;
  }
}

.fade-enter {
  opacity: 0;
}

.fade-enter-active {
  transition: opacity 0.3s ease;
}

.fade-leave-active {
  transition: opacity 0.3s ease;
  opacity: 0;
}
</style>
