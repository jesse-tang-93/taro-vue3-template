<template>
  <view>
    <text class="title">{{ counter.count }}</text>
    <div class="button" @tap="onAdd">ADD</div>
  </view>
</template>

<script>
import { useCounterStore } from '../stores/counter'

export default {
  name: 'CounterPage',
  setup() {
    const counter = useCounterStore()

    const onAdd = (e) => {
      console.log(e)
      counter.count++

      // with autocompletion ✨
      // counter.$patch({count: counter.count + 1})

      // or using an action instead
      // counter.increment()
    }

    return {
      counter,
      onAdd
    }
  }
}
</script>

<style>
.title {
  font-size: 32px;
}
.button {
  border: 1px solid lightgray;
  padding: 5px 10px;
}
</style>
