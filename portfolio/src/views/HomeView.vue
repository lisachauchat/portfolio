<template>
    <div class="home">
      <section v-for="(section, index) in sections" 
               :key="index" 
               :class="['section', section.id]">
        <div class="section-title">{{ section.title }}</div>
        <component :is="section.component" />
      </section>
    </div>
  </template>
  
  <script>
  import AboutSection from '../components/sections/AboutSection.vue'
  import EducationSection from '../components/sections/EducationSection.vue'
  import SkillsSection from '../components/sections/SkillsSection.vue'
  // import ProjectsSection from '../components/sections/ProjectsSection.vue'
  
  export default {
    name: 'HomeView',
    components: {
      AboutSection,
      EducationSection,
      SkillsSection,
      // ProjectsSection
    },
    data() {
      return {
        sections: [
          { id: 'about', title: '👤 À propos de moi', component: 'AboutSection' },
          { id: 'education', title: '🎓 Formations', component: 'EducationSection' },
          { id: 'skills', title: '📚 Compétences', component: 'SkillsSection' },
          // { id: 'projects', title: '🌟 Projets', component: 'ProjectsSection' }
        ]
      }
    }
  }
  </script>
  
  <style lang="scss" scoped>
  .home {
    width: 100%;
    
    .section {
      width: 100%;
      padding: var(--spacing-xl) var(--spacing-lg);
    }
  }
  .section-title {
  font-size: 2rem;
  text-align: center;
  margin-bottom: 2rem;
  font-weight: bold;
  }

  </style>