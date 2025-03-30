<script setup>
import ProjectCard from '../ProjectCard.vue';
import { projects } from '@/store/projects.js';
</script>

<template>
    <section class="projects-section">
        <div class="projects-grid">
            <div v-for="project in projects" :key="project.id">
                <ProjectCard 
                    :id="project.id"
                    :title="project.title"
                    :image="project.illustration"
                    :linkToVue="project.linkToVue"
                    :linkToGIT="project.linkToGIT"
                />
            </div>
        </div>
    </section>
</template>

<style scoped>
.projects-section {
  padding: 50px 20px;
  color: white;
  text-align: center;
}
.section-title {
  font-size: var(--text-xl);
  color: var(--color-primary);
  margin-bottom: var(--spacing-md);
}
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  max-width: 1200px;
  margin: 0 auto;
}
</style>