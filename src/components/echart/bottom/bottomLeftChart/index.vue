<template>
  <div>
    <Chart :cdata="cdata" />
  </div>
</template>

<script>
import Chart from './chart.vue'
export default {
  data () {
    return {
      cdata: {
        category: [
          "day1",
          "day2",
          "day3",
          "day4",
          "day5",
          "day6",
          "day7",
          "day8",
          "day9",
          "day10",
          "day11",
          "day12",
          "day13",
          "day14",
          "day15",
          "day16",
          "day17",
          "day18",
          "day19",
          "day20",
          "day21",
          "day22",
          "day23",
          "day24",
          "day25",
          "day26",
          "day27",
          "day28",
          "day29",
          "day30",
          "day31",
          "day32",
          "day33"
        ],
        // lineData: [
        //   18092,
        //   20728,
        //   24045,
        //   28348,
        //   32808,
        //   36097,
        //   39867,
        //   44715,
        //   48444,
        //   50415,
        //   56061,
        //   62677,
        //   59521,
        //   67560,
        //   18092,
        //   20728,
        //   24045,
        //   28348,
        //   32808,
        //   36097,
        //   39867,
        //   44715,
        //   48444,
        //   50415,
        //   36097,
        //   39867,
        //   44715,
        //   48444,
        //   50415,
        //   50061,
        //   32677,
        //   49521,
        //   32808
        // ],
        lineData:[
          // 22,
          // 24,
          // 26,
          // 28,
          // 25,
          // 20,
          // 24,
          // 28,
          // 29,
          // 30,
          // 26,
          // 26,
          // 28,
          // 21,
          // 26,
          // 20,
          // 23,
          // 27,
          // 28,
          // 27,
          // 27,
          // 25,
          // 24,
          // 15,
          // 17,
          // 17,
          // 15,
          // 24,
          // 27,
          // 21,
          // 27,
          // 21,
          // 28
        ],
        barData: [
          22,
          24,
          26,
          28,
          25,
          20,
          24,
          28,
          29,
          30,
          26,
          26,
          28,
          21,
          26,
          20,
          23,
          27,
          28,
          27,
          27,
          25,
          24,
          15,
          17,
          17,
          15,
          24,
          27,
          21,
          27,
          21,
          28
        ],
        rateData: []
      }
    };
  },
  components: {
    Chart,
  },
  mounted () {
    this.setData();
  },
  methods: {
    // 根据自己的业务情况修改
    setData () {
      for (let i = 0; i < this.cdata.barData.length -1; i++) {
        let rate = this.cdata.barData[i] / this.cdata.lineData[i];
        this.cdata.rateData.push(rate.toFixed(2));
      }
    },
  }
};
</script>

<style lang="scss" scoped>
</style>