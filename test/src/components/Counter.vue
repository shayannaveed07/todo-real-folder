<template>
    <div>
   <div class="counter" :style="{ color: $store.state.color }">
      <h1>Count is {{ $store.state.count }}</h1>
    </div>
    <div class="counter-squrae">
      {{ $store.state.count }}
      <sup>2</sup>=
      {{ $store.getters.square }}
    </div>
</div>
</template>

<script>
export default {

}
</script>

<style>

</style>