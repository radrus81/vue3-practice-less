<template>
  <app-page title="Список заявок">
    <template #header>
      <button class="btn primary" @click="modal = true">Создать</button>
    </template>
    <request-table :requests="requests"></request-table>
    <teleport to="body">
      <app-modal v-if="modal" title="Создать заявку" @close="modal = false">
        <request-modal @created="modal = false"></request-modal> </app-modal
    ></teleport>
  </app-page>
</template>

<script>
import { ref, computed } from 'vue'
import AppPage from '../components/ui/AppPage.vue'
import RequestTable from '../components/request/RequestTable'
import RequestModal from '../components/request/RequestModal'
import AppModal from '../components/ui/AppModal'
import { useStore } from 'vuex'

export default {
  setup() {
    const modal = ref(false)
    const store = useStore()
    const requests1 = computed(() => {
      store.getters['request/requests']
    })
    console.log(requests1.value)
    const requests = []

    return {
      modal,
      requests,
    }
  },
  components: { AppPage, RequestTable, AppModal, RequestModal },
}
</script>
