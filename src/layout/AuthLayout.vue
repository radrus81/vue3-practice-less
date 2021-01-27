<template>
  <div class="container">
    <app-message></app-message>
    <div class="card">
      <router-view />
    </div>
  </div>
</template>

<script>
import AppMessage from "../components/ui/AppMessage";

export default {
  components: {
    AppMessage
  }
};
</script>

<style>
</style>