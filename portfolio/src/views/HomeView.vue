<template>
    <div class="home">
      <section v-for="(section, index) in sections" 
               :key="index" 
               :id="section.id"
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
  import ProjectsSection from '../components/sections/ProjectsSection.vue'
  import ExperienceSection from '../components/sections/ExperienceSection.vue'
  
  export default {
    name: 'HomeView',
    props: {
      initialSection: {
        type: String,
        default: null
      }
    },
    components: {
      AboutSection,
      EducationSection,
      SkillsSection,
      ProjectsSection,
      ExperienceSection
    },
    data() {
      return {
        sections: [
          { id: 'about', title: '👤 À propos de moi', component: 'AboutSection' },
          { id: 'education', title: '🎓 Formations', component: 'EducationSection' },
          { id: 'skills', title: '📚 Compétences', component: 'SkillsSection' },
          { id: 'experience', title: '💼 Expériences', component: 'ExperienceSection' },
          { id: 'projects', title: '🌟 Projets', component: 'ProjectsSection' }
        ]
      }
    },
    mounted() {
      if (this.initialSection) {
        const element = document.getElementById(this.initialSection)
        if (element) {
          const navHeight = 70
          const elementPosition = element.offsetTop - navHeight
          window.scrollTo({
            top: elementPosition,
            behavior: 'smooth'
          })
        }
      }
      // Gérer le scroll initial si un hash est présent dans l'URL
      if (window.location.hash) {
        const targetId = window.location.hash.substring(1);
        const element = document.getElementById(targetId);
        if (element) {
          setTimeout(() => {
            const navHeight = 70;
            const elementPosition = element.offsetTop - navHeight;
            window.scrollTo({
              top: elementPosition,
              behavior: 'smooth'
            });
          }, 100);
        }
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