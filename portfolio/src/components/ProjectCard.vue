<script setup>
defineProps({
  id : Number,
  title: String,
  image: String,
  linkToVue: String,
  linkToGIT: String
});
const getImageUrl = (path) => {
  return new URL(path, import.meta.url).href;
};
</script>

<template>
  <div class="card">
    <h3 class="card-title">{{ title }}</h3>
    <img :src="getImageUrl(image)" alt="Illustration" class="card-image" />
    <div class="card-links">
      <router-link :to="'/project/' + id" class="btn-primary">En savoir +</router-link>
      <a :href="linkToGIT" target="_blank" class="btn-secondary">👨‍💻 GIT</a>
    </div>
  </div>
</template>

<style scoped>
.card:hover {
  transform: scale(1.05);
}
.card-image {
  width: 100%;
  height: 180px;
  object-fit: contain;
  border-radius: 8px;
}

.card-title {
  font-size: 1.5rem;
  font-weight: bold;
  margin-top: 12px;
  color: #007bff;
  text-transform: uppercase;
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
