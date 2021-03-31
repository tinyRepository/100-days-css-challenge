<template>
  <div class="statistics template">
    <div class="chart">
      <div class="header">
        <div class="header__title">WEEKLY REPORT</div>
        <div class="header__date">01. Feb - 07. Feb</div>
        <div class="header__revenue-label">Revenue</div>
        <div class="header__revenue">$ 3621.79</div>
      </div>
      <div class="content">
        <div class="legenda">
          <div class="legenda__views">Views</div>
          <div class="legenda__purchases">Purchases</div>
        </div>
        <div class="data">
          <svg class="graph-1">
            <polyline
              points="9,46 50,12 90,23 130,11 171,38 211,48 251,19"
            ></polyline>
          </svg>
          <div class="points points-1">
            <div class="point point-1">
              <div class="tooltip">458</div>
            </div>
            <div class="point point-2">
              <div class="tooltip">812</div>
            </div>
            <div class="point point-3">
              <div class="tooltip">746</div>
            </div>
            <div class="point point-4">
              <div class="tooltip">877</div>
            </div>
            <div class="point point-5">
              <div class="tooltip">517</div>
            </div>
            <div class="point point-6">
              <div class="tooltip">434</div>
            </div>
            <div class="point point-7">
              <div class="tooltip">458</div>
            </div>
          </div>
        </div>

        <div class="data">
          <svg class="graph-2">
            <polyline
              points="9,61 50,50 90,65 130,55 171,61 211,74 251,64"
            ></polyline>
          </svg>
          <div class="points points-2">
            <div class="point point-1">
              <div class="tooltip">26</div>
            </div>
            <div class="point point-2">
              <div class="tooltip">41</div>
            </div>
            <div class="point point-3">
              <div class="tooltip">22</div>
            </div>
            <div class="point point-4">
              <div class="tooltip">36</div>
            </div>
            <div class="point point-5">
              <div class="tooltip">25</div>
            </div>
            <div class="point point-6">
              <div class="tooltip">13</div>
            </div>
            <div class="point point-7">
              <div class="tooltip">20</div>
            </div>
          </div>
        </div>

        <div class="horizontal-line horizontal-line-1"></div>
        <div class="horizontal-line horizontal-line-2"></div>
        <div class="horizontal-line horizontal-line-3"></div>

        <div class="days">
          <div class="day" v-for="(day, index) in days" :key="index">
            {{ day }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    };
  },
};
</script>

<style lang="scss" scoped>
.statistics {
  background: #42a7a1;
  font-family: 'Open Sans', Helvetica, sans-serif;
  display: flex;
}

.chart {
  width: 280px;
  height: 220px;
  margin: auto;
  border-radius: 3px;
  background: #ffff;
  box-shadow: 10px 10px 15px 0 rgba(0, 0, 0, 0.3);
  overflow: hidden;
}

.header {
  width: 100%;
  height: 60px;
  background: #f1ba64;
  position: relative;
  color: #fff;

  &__title {
    font-weight: 600;
    font-size: 14px;
    letter-spacing: -0.7px;
    text-transform: uppercase;
    position: absolute;
    top: 11px;
    left: 14px;
  }

  &__date {
    position: absolute;
    font-weight: 400;
    font-size: 11px;
    letter-spacing: -0.1px;
    top: 31px;
    left: 15px;
  }

  &__revenue {
    font-weight: 600;
    font-size: 14px;
    text-transform: uppercase;
    position: absolute;
    right: 15px;
    top: 28px;
  }

  &__revenue-label {
    position: absolute;
    font-weight: 400;
    font-size: 11px;
    right: 15px;
    top: 15px;
  }
}

.content {
  height: 160px;
  position: relative;
}

.graph-1 {
  position: absolute;
  z-index: 1;
  top: 42px;
  left: 10px;

  polyline {
    stroke: #fa7373;
    fill: none;
    stroke-width: 2;
    stroke-linecap: round;
  }
}

.graph-2 {
  position: absolute;
  z-index: 1;
  top: 42px;
  left: 10px;

  polyline {
    stroke: #7ba2ff;
    fill: none;
    stroke-width: 2;
    stroke-linecap: round;
  }
}

.horizontal-line {
  height: 1px;
  width: 260px;
  left: 10px;
  position: absolute;
  background: #f2f2f2;
}

.horizontal-line-1 {
  top: 42px;
}

.horizontal-line-2 {
  top: 82px;
}

.horizontal-line-3 {
  top: 122px;
}

.days {
  display: flex;
  justify-content: space-between;
  max-width: 260px;
  margin: auto;
  position: relative;
  top: 123px;
}

.legenda {
  font-size: 9px;
  color: #606060;
  line-height: 13px;
  position: absolute;
  right: 10px;
  top: 16px;
  display: flex;

  &__purchases {
    position: relative;

    &::before {
      content: '';
      width: 11px;
      height: 3px;
      left: -20px;
      top: 5px;
      border-radius: 3px;
      position: absolute;
      background: #7ba2ff;
    }
  }

  &__views {
    position: relative;
    margin-right: 40px;

    &::before {
      content: '';
      width: 11px;
      height: 3px;
      left: -20px;
      top: 5px;
      border-radius: 3px;
      position: absolute;
      background: #fa7373;
    }
  }
}

.day {
  font-size: 9px;
  color: #949494;
  line-height: 30px;
  text-transform: uppercase;
  text-align: center;
}

.data {
  position: relative;
}

.points-1 {
  position: relative;

  .tooltip {
    background: #fa7373;
    &::after {
      background: #fa7373;
    }
  }

  & > .point {
    background: #fa7373;
  }

  .point-1 {
    top: 85px;
    left: 17px;
  }
  .point-2 {
    top: 51px;
    left: 58px;
  }
  .point-3 {
    top: 62px;
    left: 98px;
  }
  .point-4 {
    top: 50px;
    left: 138px;
  }
  .point-5 {
    top: 77px;
    left: 179px;
  }
  .point-6 {
    top: 87px;
    left: 219px;
  }
  .point-7 {
    top: 58px;
    left: 259px;
  }
}

.points-2 {
  position: relative;

  .tooltip {
    background: #7ba2ff;
    &::after {
      background: #7ba2ff;
    }
  }

  & > .point {
    background: #7ba2ff;
  }

  .point-1 {
    top: 100px;
    left: 17px;
  }
  .point-2 {
    top: 89px;
    left: 58px;
  }
  .point-3 {
    top: 104px;
    left: 98px;
  }
  .point-4 {
    top: 94px;
    left: 138px;
  }
  .point-5 {
    top: 100px;
    left: 179px;
  }
  .point-6 {
    top: 113px;
    left: 219px;
  }
  .point-7 {
    top: 103px;
    left: 259px;
  }
}

.point {
  position: absolute;
  cursor: pointer;
  width: 6px;
  height: 6px;
  border-radius: 3px;
  z-index: 10;

  &:hover {
    .tooltip {
      transform: translate3d(-50%, 0, 0);
      opacity: 1;
      visibility: visible;
    }
  }
}

.tooltip {
  font-size: 11px;
  line-height: 11px;
  color: #fff;
  position: absolute;
  bottom: 13px;
  left: 50%;
  padding: 8px 6px;
  border-radius: 3px;
  opacity: 0;
  visibility: hidden;
  transform: translate3d(-50%, 10px, 0);
  transition: transform 0.4s ease-out 0s, opacity 0.4s ease-out 0s;

  &::after {
    position: absolute;
    display: block;
    content: '';
    height: 6px;
    width: 6px;
    left: 50%;
    margin-left: -3px;
    bottom: -3px;
    transform: rotate(45deg);
  }
}
</style>
