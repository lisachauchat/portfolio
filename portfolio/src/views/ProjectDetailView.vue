<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

import { projects } from "@/store/projects.js";

// Récupérer l'ID du projet depuis l'URL
// const route = useRoute();
// const project = computed(() => projects.find(p => p.id === route.params.id));
</script>

<template>
  <div v-if="project" class="project-detail">
    <img :src="project.image" alt="Illustration du projet" class="project-image">
    <h1 class="project-title">{{ project.title }}</h1>
    <p class="project-description">{{ project.description }}</p>

    <h3 class="project-subtitle">Technologies utilisées :</h3>
    <ul class="tech-list">
      <li v-for="tech in project.technologies" :key="tech">{{ tech }}</li>
    </ul>

    <div class="project-links">
      <!-- <a :href="project.linkToVue" target="_blank" class="btn-primary">Démo</a> -->
      <a :href="project.linkToGIT" target="_blank" class="btn-secondary">👨‍💻 GIT</a>
    </div>
  </div>
  <!--  TODO faire une page 404 -->
  <div v-else class="not-found"> 
    <h2>Projet non trouvé 😕</h2>
  </div>
</template>

<style scoped>
.project-detail {
  max-width: 800px;
  margin: 40px auto;
  padding: 20px;
  background-color: #1e1e1e;
  color: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  text-align: center;
}
.project-image {
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 10px;
}
.project-title {
  font-size: 2rem;
  margin: 20px 0;
}
.project-description {
  font-size: 1.2rem;
  line-height: 1.5;
}
.project-subtitle {
  font-size: 1.5rem;
  margin-top: 20px;
}
.tech-list {
  list-style: none;
  padding: 0;
}
.tech-list li {
  display: inline-block;
  background-color: #333;
  padding: 8px 12px;
  border-radius: 5px;
  margin: 5px;
}
.project-links {
  margin-top: 20px;
}
.btn-primary, .btn-secondary {
  display: inline-block;
  margin: 10px;
  padding: 10px 20px;
  border-radius: 5px;
  font-weight: bold;
  text-decoration: none;
}
/* .btn-primary {
  background-color: #007bff;
  color: white;
}
.btn-primary:hover {
  background-color: #0056b3;
} */
.btn-secondary {
  background-color: #444;
  color: white;
}
.btn-secondary:hover {
  background-color: #666;
}
.not-found {
  text-align: center;
  margin-top: 50px;
  font-size: 1.5rem;
}
</style>
