<template>
  <syntax-theme id="atom-city-lights" data-author="atomiks"></syntax-theme>
</template>

<script>
class CityLights {
  constructor() {
    this.data = {
      string: 'Hello from https://github.com',
      boolean: true && false,
      number: 100 && 2e5,
      nil: null || undefined,
      regex: /^test$/,
      selectAll(selector) {
        return [...document.querySelectorAll(selector)]
      }
    }
  }
}
</script>

<style scoped>
#id .class::after {
  content: '';
  color: rgba(0, 32, 128, 0.2);
  font-size: 1.5rem;
}
</style>
