<template>
    <section class="projects-section">
        <div class="projects-grid">
        <ProjectCard 
            v-for="project in projects" 
            :key="project.id"
            :title="project.title"
            :image="project.image"
            :linkToVue="project.linkToVue"
            :linkToGIT="project.linkToGIT"
        />
        </div>
    </section>
</template>

<script setup>
import ProjectCard from '../ProjectCard.vue';
</script>
<script >
import { projects } from '../../store/projects.js';
export default {
  data() {
    return { projects };
  },
};
</script>

<style scoped>
.projects-section {
  padding: 50px 20px;
  color: white;
  text-align: center;
}
.section-title {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 30px;
}
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  max-width: 1200px;
  margin: 0 auto;
}
</style>