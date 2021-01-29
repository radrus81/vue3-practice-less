<template>
  <h4 v-if="requests.length === 0" class="text-center">заявок пока нет</h4>
  <table v-else class="table">
    <thead>
      <tr>
        <th>#</th>
        <th>ФИО</th>
        <th>Телефон</th>
        <th>Сумма</th>
        <th>Статус</th>
        <th>Действия</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="data in requests" :key="data.id">
        <td></td>
        <td>{{ data.fio }}</td>
        <td>{{ data.phone }}</td>
        <td>{{ data.sum }}</td>
        <td>{{ data.status }}</td>
        <td></td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: ["requests"]
};
</script>

<style></style>
