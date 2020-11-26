<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    name: 'Scroll',
    data() {
      return {
        scroll: null,
      }
    },
    props: {
      probeType: {
        type: Number,
        default: 0
      },
      pullUpLoad: {
        type: Boolean,
        default: false
      }
    },
    mounted() {
      // 创建scroll对象
      this.scroll = new BScroll(this.$refs.wrapper, {
        probeType: this.probeType,
        // 就是因为这个true才解决了流行新款精选的点击
        click: true,
        pullUpLoad: this.pullUpLoad
      })

      // 监听位置
      if(this.probeType == 2 || this.probeType == 3) {
        this.scroll.on('scroll', (position) => {
          // console.log(position);
          this.$emit('scroll', position);
        })
      }


      // console.log(this.scroll);

      // 监听上拉加载事件
      if(this.pullUpLoad) {
        this.scroll.on('pullingUp', () => {
          // console.log("上拉加载更多");
          this.$emit('pullingUp');
          // setTimeout(() => {
          //   this.scroll.finishPullUp();
          // }, 1000)
        })
      }

    },
    methods: {
      // 这个time默认值不传的话就是300ms
      scrollTo(x, y, time = 300) {
        this.scroll && this.scroll.scrollTo && this.scroll.scrollTo(x, y, time);
      },
      finishPullUp() {
        this.scroll && this.scroll.finishPullUp && this.scroll.finishPullUp();
      },
      refresh() {
        // console.log("----");
        this.scroll && this.scroll.refresh && this.scroll.refresh();
      }
    }
  }
</script>

<style>
</style>
