<template>
  <div class="day template">
    <div class="content">
      <div class="profile">
        <div class="profile__avatar">
          <img
            class="profile__avatar-image"
            src="https://100dayscss.com/codepen/jessica-potter.jpg"
          />
          <div class="profile__avatar-circle circle-1" />
          <div class="profile__avatar-circle circle-2" />
        </div>

        <div class="profile__avatar-name">Jessica Potter</div>
        <div class="profile__avatar-job">Visual Artist</div>

        <div class="profile__button">Follow</div>
        <div class="profile__button">Message</div>
      </div>
      <div class="stats">
        <div class="stats__info">
          <div class="stats__info-label">523</div>
          <div class="stats__info-value">Posts</div>
        </div>
        <div class="stats__info">
          <div class="stats__info-label">1387</div>
          <div class="stats__info-value">Likes</div>
        </div>
        <div class="stats__info">
          <div class="stats__info-label">146</div>
          <div class="stats__info-value">Follower</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap');

.template {
  display: flex;
  background: linear-gradient(to top right, #eebe6c 0%, #ca7c4e 100%);
  font-family: 'Open Sans', Helvetica, sans-serif;
}
.content {
  margin: auto;
  background: #fff;
  border-radius: 3px;
  height: 299px;
  width: 320px;
  display: flex;
  box-shadow: 10px 10px 15px 0 rgba(0, 0, 0, 0.3);
}

.profile {
  width: 200px;
  height: 320px;
  display: flex;
  flex-direction: column;
  align-items: center;

  &__button {
    padding: 5px;
    cursor: pointer;
    text-align: center;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 120px;
    border-radius: 15px;
    font-size: 12px;
    font-weight: 600;
    transition: 0.3s;
    color: #786450;
    border: 1px solid #786450;
    margin-bottom: 10px;
    transition: 0.6s background, 0.6s color;

    &:hover {
      color: #fff;
      background: #786450;
    }
  }

  &__avatar {
    color: #786450;
    position: relative;
    cursor: pointer;
    height: 70px;
    margin-top: 38px;
    margin-bottom: 20px;

    &:hover {
      .circle-1 {
        transform: rotate(360deg);
      }
      .circle-2 {
        transform: rotate(-360deg);
      }
    }
  }

  &__avatar-image {
    margin-bottom: 17px;
    width: 70px;
    height: 70px;
    border-radius: 50%;
  }

  &__avatar-circle {
    position: absolute;
    border: 1px solid;
    border-radius: 50%;
    transition: all 1.5s ease-in-out;
  }

  &__avatar-name {
    font-size: 15px;
    font-weight: 600;
  }

  &__avatar-job {
    font-size: 11px;
    line-height: 15px;
    margin-bottom: 33px;
  }
}

.circle-1 {
  width: 82px;
  height: 82px;
  top: -6px;
  left: -6px;
  border-color: #786450 transparent #786450 #786450;
}
.circle-2 {
  width: 76px;
  height: 76px;
  top: -3px;
  left: -3px;
  border-color: #786450 #786450 #786450 transparent;
}

.stats {
  width: 120px;
  background: #f5e8df;
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-columns: 1fr;

  &__info {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    cursor: pointer;
    transition: 0.3s background;

    &:not(:last-child) {
      border-bottom: 1px solid #fff;
    }

    &:hover {
      background: #e1cfc2;
    }
  }

  &__info-label {
    font-size: 18px;
    font-weight: 600;
    margin-top: -11px;
    color: #786450;
  }

  &__info-value {
    font-size: 11px;
    color: #786450;
  }
}
</style>
