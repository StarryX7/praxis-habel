<template>
  <div class="card shadow-lg rounded-4">
    <div class="card-body">
      <h3 class="card-title text-primary">{{ title }}</h3>
      <p class="text-muted">Kategorie: {{ category }} | Veröffentlicht am: {{ date }}</p>

      <p class="card-text">{{ content }}</p>

      <h5 class="mt-4">Säurebildende Nahrungsmittel</h5>
      <table class="table table-striped mt-2">
        <thead>
          <tr>
            <th>Lebensmittel</th>
            <th>Umgewandelte Säure</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in sourceList" :key="index">
            <td>{{ item.from }}</td>
            <td>{{ item.to }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    content: String,
    sourceList: Array,
    category: String,
    date: String
  }
};
</script>

<style scoped>
.card {
  padding: 20px;
}

h3 {
  font-weight: bold;
}
</style>