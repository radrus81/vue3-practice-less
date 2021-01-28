<template>
  <div>
    <the-navbar></the-navbar>
    <div class="container with-nav">
      <app-message></app-message>
      <div class="card">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import TheNavbar from '../components/TheNavbar'
import AppMessage from '../components/ui/AppMessage'
export default {
  components: {
    TheNavbar,
    AppMessage,
  },
}
</script>
