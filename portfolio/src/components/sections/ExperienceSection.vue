<template>
  <div class="experience-section">
    <div v-for="company in experiences" :key="company.id" class="card">
      <h2 class="company-name">{{ company.companyName }}</h2>
      
      <div class="company-location">
        <div class="location-details">
          <span>{{ company.companyLocation.city }}</span>
          <span>({{ company.companyLocation.CP }})</span>
          <span>{{ company.companyLocation.country }}</span>
        </div>
      </div>

      <div v-for="(exp, index) in company.experiences" 
           :key="index" 
           class="accordion accordion-primary">
        <div class="accordion-header" @click="toggleExperience(company.id, index)">
          <h3>{{ exp.position }}</h3>
          <button class="accordion-toggle">
            {{ isExperienceOpen(company.id, index) ? '▼' : '▲' }}
          </button>
        </div>
        
        <transition name="expand">
          <div v-if="isExperienceOpen(company.id, index)" class="accordion-content">
            <div class="experience-period">
              <span class="experience-type">{{ exp.type }}</span>
              <span class="experience-year">{{ exp.year }}</span>
              <span class="experience-duration">({{ exp.duration }})</span>
            </div>
            <ul class="tasks-list">
              <li v-for="(task, taskIndex) in exp.tasks" 
                  :key="taskIndex">
                {{ task }}
              </li>
            </ul>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { experiences } from '@/store/experience.js'

export default {
  name: 'ExperienceSection',
  setup() {
    const openExperiences = ref(new Set());

    const toggleExperience = (companyId, expIndex) => {
      const key = `${companyId}-${expIndex}`;
      if (openExperiences.value.has(key)) {
        openExperiences.value.delete(key);
      } else {
        openExperiences.value.add(key);
      }
    };

    const isExperienceOpen = (companyId, expIndex) => {
      return openExperiences.value.has(`${companyId}-${expIndex}`);
    };

    return {
      experiences,
      toggleExperience,
      isExperienceOpen
    }
  }
}
</script>

<style lang="scss" scoped>
.experience-section {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.company-card {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  overflow: hidden;
  padding: 1.5rem;
}

.company-name {
  font-size: 1.8rem;
  color: var(--color-primary);
  margin-bottom: 1rem;
  text-align: center;
}

.company-location {
  background: rgba(255, 255, 255, 0.03);
  padding: 0.8rem;
  border-radius: 8px;
  margin-bottom: 1.5rem;
  
  .location-details {
    display: flex;
    justify-content: center;
    gap: 0.5rem;
    font-size: 1rem;
    color: #cccccc;
  }
}

.experience-item {
  margin-bottom: 1rem;
  background: rgba(255, 255, 255, 0.02);
  border-radius: 8px;
  overflow: hidden;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  cursor: pointer;
  background: rgba(74, 158, 255, 0.1);
  
  h3 {
    margin: 0;
    font-size: 1.2rem;
  }

  &:hover {
    background: rgba(74, 158, 255, 0.15);
  }
}

.toggle-btn {
  background: none;
  border: none;
  color: #4a9eff;
  cursor: pointer;
  font-size: 1.2rem;
}

.experience-details {
  padding: 1rem;
}

.experience-period {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
  color: var(--color-primary);
  
  .experience-type {
    font-weight: bold;
  }
}

.tasks-list {
  list-style-type: none;
  padding-left: 1.5rem;
  
  li {
    position: relative;
    margin-bottom: 0.5rem;
    
    &::before {
      content: "•";
      color: var(--color-primary);
      position: absolute;
      left: -1rem;
    }
  }
}

.expand-enter-active,
.expand-leave-active {
  transition: all 0.3s ease-in-out;
  max-height: 500px;
  overflow: hidden;
}

.expand-enter-from,
.expand-leave-to {
  max-height: 0;
  opacity: 0;
}
</style>
