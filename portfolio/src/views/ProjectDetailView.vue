<script setup>
import { computed, ref } from 'vue';
import { useRoute } from 'vue-router';

import { projects } from "@/store/projects.js";

// Récupérer l'ID du projet depuis l'URL
const route = useRoute();
const project = computed(() => projects.find(p => p.id === parseInt(route.params.id)));

const isObjectivesOpen = ref(false);

const toggleObjectives = () => {
  isObjectivesOpen.value = !isObjectivesOpen.value;
};

const isContextOpen = ref(false);
const isTechOpen = ref(false);
const isWorkDoneOpen = ref(false);

const toggleSection = (section) => {
  switch(section) {
    case 'context': isContextOpen.value = !isContextOpen.value; break;
    case 'tech': isTechOpen.value = !isTechOpen.value; break;
    case 'objectives': isObjectivesOpen.value = !isObjectivesOpen.value; break;
    case 'workDone': isWorkDoneOpen.value = !isWorkDoneOpen.value; break;
  }
};

// Ajout de la fonction openImage pour agrandir les images si nécessaire
const openImage = (imageSrc) => {
  // Ouvre l'image en grand dans un nouvel onglet
  window.open(imageSrc, '_blank');
};

// Ajout de l'importation des images
const getImageUrl = (path) => {
  return new URL(path, import.meta.url).href;
};
</script>

<template>
  <div v-if="project" class="project-detail">
    <!-- Modification de l'affichage de l'image d'illustration -->
    <img v-if="project.illustration" 
         :src="getImageUrl(project.illustration)" 
         :alt="project.title" 
         class="project-image">
    <h1 class="project-title">{{ project.title }}</h1>

    <!-- Context Section -->
    <div class="accordion accordion-primary">
      <div class="accordion-header" @click="toggleSection('context')">
        <h3>Contexte</h3>
        <button class="accordion-toggle">{{ isContextOpen ? "▲" : "▼" }}</button>
      </div>
      <transition name="expand">
        <div v-if="isContextOpen" class="accordion-content">
          <ul class="context-list">
            <li v-for="(item, index) in project.context" :key="index">{{ item }}</li>
          </ul>
        </div>
      </transition>
    </div>

    <!-- Technologies Section -->
    <div v-if="project.technologies?.length" class="accordion accordion-primary">
      <div class="accordion-header" @click="toggleSection('tech')">
        <h3>Technologies utilisées</h3>
        <button class="accordion-toggle">{{ isTechOpen ? "▲" : "▼" }}</button>
      </div>
      <transition name="expand">
        <div v-if="isTechOpen" class="accordion-content">
          <div class="tech-grid">
            <div v-for="tech in project.technologies" :key="tech.techTitle" class="tech-item">
              <h4 class="tech-title">{{ tech.techTitle }}</h4>
              <p class="tech-description">{{ tech.techDescription }}</p>
            </div>
          </div>
        </div>
      </transition>
    </div>

    <!-- Objectives Section -->
    <div class="accordion accordion-primary">
      <div class="accordion-header" @click="toggleSection('objectives')">
        <h3>Objectifs</h3>
        <button class="accordion-toggle">{{ isObjectivesOpen ? "▲" : "▼" }}</button>
      </div>
      <transition name="expand">
        <div v-if="isObjectivesOpen" class="accordion-content">
          <div v-if="project.objectives.technical">
            <h4>Techniques</h4>
            <ul class="objectives-list">
              <li v-for="(obj, index) in project.objectives.technical" :key="index">🎯 {{ obj }}</li>
            </ul>
          </div>
          <div v-if="project.objectives.personal">
            <h4>Personnels</h4>
            <ul class="objectives-list">
              <li v-for="(obj, index) in project.objectives.personal" :key="index">🎯 {{ obj }}</li>
            </ul>
          </div>
        </div>
      </transition>
    </div>

    <!-- Work Done Section -->
    <div class="accordion accordion-primary">
      <div class="accordion-header" @click="toggleSection('workDone')">
        <h3>Réalisations</h3>
        <button class="accordion-toggle">{{ isWorkDoneOpen ? "▲" : "▼" }}</button>
      </div>
      <transition name="expand">
        <div v-if="isWorkDoneOpen" class="accordion-content">
          <div class="work-grid">
            <div v-for="(work, index) in project.workDone" :key="index" class="work-item">
              <h4>✓ {{ work.workTitle }}</h4>
              <img v-if="work.workPicture" 
                   :src="getImageUrl(work.workPicture)" 
                   :alt="work.workTitle" 
                   class="work-image"
                   @click="openImage(getImageUrl(work.workPicture))">
              <ul v-if="work.workDescription" class="work-description-list">
                <li v-for="(desc, descIndex) in work.workDescription" :key="descIndex">{{ desc }}</li>
              </ul>
            </div>
          </div>
        </div>
      </transition>
    </div>

    <div class="project-links">
      <a :href="project.linkToGIT" target="_blank" class="btn">👨‍💻 GIT</a>
    </div>
  </div>
  <!-- TODO  faire une page 404-->
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
  max-height: 400px;
  object-fit: contain; /* Changed from cover to contain */
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.1); /* Fond subtil pour les images transparentes */
  padding: 10px;
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

.context-box {
  background: rgba(255, 255, 255, 0.05);
  padding: 20px;
  border-radius: 8px;
  margin: 20px 0;
}

.context-list {
  list-style: none;
  padding: 0;
}

.context-list li {
  margin: 10px 0;
  line-height: 1.6;
}

.objectives-section {
  background: rgba(128, 128, 128, 0.1);
  border-radius: 8px;
  margin: 20px 0;
  overflow: hidden;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  cursor: pointer;
  background: rgba(128, 128, 128, 0.2);
}

.objectives-content {
  padding: 20px;
}

.objectives-content h4 {
  margin: 10px 0;
  color: #4a9eff;
}

.objectives-content ul {
  list-style: none;
  padding-left: 20px;
}

.objectives-content li {
  margin: 8px 0;
  position: relative;
}

.objectives-content li::before {
  content: "•";
  color: #4a9eff;
  position: absolute;
  left: -15px;
}

.work-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  margin: 20px 0;
}

.work-item {
  background: rgba(255, 255, 255, 0.05);
  padding: 15px;
  border-radius: 8px;
  text-align: center;
}

.work-image {
  width: 100%;
  max-height: 300px;
  height: auto; /* Allow natural height */
  object-fit: contain; /* Changed from cover to contain */
  border-radius: 6px;
  margin: 10px 0;
  cursor: pointer;
  transition: transform 0.3s ease;
  background-color: rgba(0, 0, 0, 0.1);
  padding: 8px;
}

.work-image:hover {
  transform: scale(1.05);
}

.expand-enter-active,
.expand-leave-active {
  transition: max-height 0.3s ease-in-out;
  overflow: hidden;
}

.expand-enter-from,
.expand-leave-to {
  max-height: 0;
}

.expand-enter-to,
.expand-leave-from {
  max-height: 500px;
}

.tech-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  margin: 1rem 0;
}

.tech-item {
  background: rgba(255, 255, 255, 0.05);
  padding: 1rem;
  border-radius: 8px;
  text-align: left;
}

.tech-title {
  color: #4a9eff;
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
}

.tech-description {
  color: #cccccc;
  font-size: 0.9rem;
}

.work-description-list {
  text-align: left;
  padding-left: 1.5rem;
  margin-top: 1rem;
}

.work-description-list li {
  margin: 0.5rem 0;
  position: relative;
}

.work-description-list li::before {
  content: "•";
  color: #4a9eff;
  position: absolute;
  left: -1rem;
}

@media (max-width: 768px) {
  .tech-grid {
    grid-template-columns: 1fr;
  }
  
  .work-grid {
    grid-template-columns: 1fr;
  }
  
  .work-image {
    max-height: 200px;
  }

  .project-image {
    max-height: 300px;
  }
}

@media (max-width: 480px) {
  .work-image {
    max-height: 150px;
  }

  .project-image {
    max-height: 200px;
  }
}

.section-wrapper {
  background: rgba(128, 128, 128, 0.1);
  border-radius: 8px;
  margin: 20px 0;
  overflow: hidden;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  cursor: pointer;
  background: rgba(128, 128, 128, 0.2);
}

.section-content {
  padding: 20px;
}

.objectives-list {
  list-style: none;
  padding-left: 20px;
}

.objectives-list li {
  margin: 8px 0;
  position: relative;
  padding-left: 25px;
}

.objectives-list li::before {
  content: "";
  position: absolute;
  left: 0;
}
</style>
