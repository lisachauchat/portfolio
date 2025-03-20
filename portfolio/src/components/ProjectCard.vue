<script setup>
defineProps({
  id : Number,
  title: String,
  image: String,
  linkToVue: String,
  linkToGIT: String
});
</script>

<template>
  <div class="card">
    <img :src="image" alt="Illustration" class="card-image" />
    <h3 class="card-title">{{ title }}</h3>
    <div class="card-links">
      <router-link :to="'/project/' + id" class="btn-primary">En savoir +</router-link>
      <a :href="linkToGIT" target="_blank" class="btn-secondary">👨‍💻 GIT</a>
    </div>
  </div>
</template>

<style scoped>
/* .card {
  background-color: #1e1e1e;
  color: white;
  border-radius: 10px;
  padding: 16px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s ease-in-out;
} */
.card:hover {
  transform: scale(1.05);
}
.card-image {
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 8px;
}
.card-title {
  font-size: 1.2rem;
  font-weight: bold;
  margin-top: 12px;
}
.card-links {
  display: flex;
  gap: 10px;
  margin-top: 14px;
}
.btn-primary {
  background-color: #007bff;
  padding: 8px 16px;
  border-radius: 5px;
  color: white;
  font-weight: bold;
  text-decoration: none;
  /* transition: background 0.2s; */
}
.btn-primary:hover {
  background-color: #0056b3;
}
.btn-secondary {
  background-color: #333;
  padding: 8px 16px;
  border-radius: 5px;
  color: white;
  font-weight: bold;
  text-decoration: none;
  /* transition: background 0.2s; */
}
.btn-secondary:hover {
  background-color: #555;
}
</style>
