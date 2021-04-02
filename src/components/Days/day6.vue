<template>
  <div class="day template">
    <div class="panel" :class="{ panel_open: openMenu }">
      <div class="header">
        <div class="header__icon" @click="openMenu = !openMenu">
          <div class="dash-top"></div>
          <div class="dash-bottom"></div>
          <div class="circle"></div>
        </div>
        <div class="header__title">Notifications</div>
        <svg
          @click="visible = !visible"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 56.966 56.966"
          class="header__search"
        >
          <path
            d="M55.146 51.887L41.588 37.786A22.926 22.926 0 0046.984 23c0-12.682-10.318-23-23-23s-23 10.318-23 23 10.318 23 23 23c4.761 0 9.298-1.436 13.177-4.162l13.661 14.208c.571.593 1.339.92 2.162.92.779 0 1.518-.297 2.079-.837a3.004 3.004 0 00.083-4.242zM23.984 6c9.374 0 17 7.626 17 17s-7.626 17-17 17-17-7.626-17-17 7.626-17 17-17z"
          />
        </svg>

        <div class="search-field" :class="{ 'search-field_visible': visible }">
          <input type="text" placeholder="Search..." />
        </div>
      </div>
      <div class="content">
        <div class="line" />
        <div class="content__item">
          <div class="point"></div>
          <div class="date">9:24 AM</div>
          <div class="text">
            <b>John Walker</b> posted a photo on your wall.
          </div>
        </div>
        <div class="content__item">
          <div class="point"></div>
          <div class="date">8:19 AM</div>
          <div class="text"><b>Alice Parker</b> commented your last post.</div>
        </div>
        <div class="content__item">
          <div class="point"></div>
          <div class="date">Yesterday</div>
          <div class="text"><b>Luke Wayne</b> added you as friend.</div>
        </div>
      </div>
    </div>
    <div class="menu" :class="{ menu_open: openMenu }">
      <ul class="list">
        <li class="list-item">Dashboard</li>
        <li class="list-item">Profile</li>
        <li class="list-item">Norifications</li>
        <li class="list-item">Messages</li>
        <li class="list-item">Settings</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      openMenu: false,
      visible: false,
    };
  },
};
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap');
.day {
  background: #264057;
  display: flex;
  position: relative;
  font-family: 'Open Sans', Helvetica, sans-serif;
}

.header {
  height: 60px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  background: #5f98cd;
  border-radius: 2px 2px 0 0;

  &__icon {
    width: 29px;
    height: 15px;
    position: relative;
    cursor: pointer;

    &:hover {
      & > * {
        background: #fff;
      }
    }
  }

  &__search {
    width: 18px;
    height: 18px;
    fill: #fff;
    cursor: pointer;
  }

  &__title {
    text-align: center;
    line-height: 60px;
    color: #fff;
    font-weight: 600;
    font-size: 15px;
    margin-left: -10px;
  }
}

.content {
  background: #fff;
  width: 100%;
  height: 240px;
  border-radius: 0 0 2px 2px;

  &__item {
    position: absolute;
    left: 23px;
    cursor: pointer;
    opacity: 0;

    &:hover {
      & > * {
        color: #5f98cd;
      }
    }

    &:nth-child(2) {
      margin-top: 25px;
      animation: visibility 0.5s ease-out 0.4s forwards;
    }

    &:nth-child(3) {
      margin-top: 103px;
      animation: visibility 0.5s ease-out 0.6s forwards;
    }

    &:nth-child(4) {
      margin-top: 181px;
      animation: visibility 0.5s ease-out 0.8s forwards;
    }
  }
}

.line {
  height: 100%;
  width: 3px;
  position: absolute;
  left: 27px;
  background: #ebebeb;
}

.list {
  margin: 9px 0;
  list-style: none;
  padding-left: 0;
}

.list-item {
  color: #93b2cd;
  font-size: 14px;
  line-height: 14px;
  padding: 18px 17px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    color: #fff;
    background: #385269;
  }
}

.panel {
  position: relative;
  z-index: 1;
  margin: auto;
  width: 300px;
  height: 300px;
  border-radius: 2px;
  overflow: hidden;
  box-shadow: 10px 10px 15px 0 rgba(0, 0, 0, 0.3);
  transition: 0.5s ease-in-out transform;

  &_open {
    transform: translate3d(150px, 0, 0);
  }
}

.menu {
  position: absolute;
  background: #43627d;
  border-radius: 3px;
  left: 50px;
  top: 65px;
  width: 170px;
  height: 270px;
  transition: 0.5s ease-in-out;
  transform: translate3d(20px, 0, 0);
  box-shadow: 5px 5px 8px 0 rgba(0, 0, 0, 0.3);

  &_open {
    transform: translate3d(0, 0, 0);
  }
}

.dash-top {
  width: 20px;
  height: 3px;
  background: #b2daff;
  border-radius: 3px;
  position: absolute;
  top: 0;
  transition: 0.3s background;
}

.dash-bottom {
  width: 29px;
  height: 3px;
  background: #b2daff;
  border-radius: 3px;
  position: absolute;
  top: 12px;
  transition: 0.3s background;
}

.circle {
  height: 7px;
  width: 7px;
  border-radius: 50%;
  background: #b2daff;
  position: absolute;
  right: 0;
  top: -2px;
  transition: 0.3s background;
}

.search-field {
  position: absolute;
  left: 18px;
  transition: 0.3s ease-in-out;
  transform: translateX(30px);
  visibility: hidden;
  opacity: 0;

  &_visible {
    opacity: 1;
    transform: translateX(0);
    visibility: visible;
  }

  & > input {
    border-radius: 20px;
    border: none;
    padding: 9px 15px;
    width: 235px;
    font-size: 13px;
    outline: none;
  }
}

.point {
  height: 11px;
  width: 11px;
  background: #fff;
  border: 2px solid #5f98cd;
  box-shadow: 0 0 0 3px #fff;
  border-radius: 6px;
}

.date {
  font-size: 11px;
  line-height: 11px;
  margin-bottom: 2px;
  position: absolute;
  top: 0;
  left: 20px;
  color: #666;
  transition: 0.3s;
}

.text {
  font-size: 15px;
  line-height: 20px;
  color: #666;
  margin-left: 20px;
  margin-top: 2px;
  max-width: 235px;
  transition: 0.3s;
}

@keyframes visibility {
  0% {
    transform: translate3d(0, 50px, 0);
    opacity: 0;
  }

  100% {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}
</style>
