<template>
  <section id="education" class="section">
    <div class="education-list">
      <div v-for="item in education" :key="item.id" class="card">
        <h3 class="education-title">{{ item.title }}</h3>
        <h4 class="education-institution">{{ item.institution }}</h4>
        <p class="education-location">🧭 {{ item.location }}</p>
        <p class="education-status">🎓 {{ item.status }}</p>
        <p class="education-date">📆 {{ item.date }}</p>
        <p class="education-description">{{ item.description }}</p>

        <!-- Spécialités -->
        <div v-if="item.specialties">
          <h4>Spécialités :</h4>
          <div class="specialties">
            <div 
              v-for="(specialty, index) in item.specialties" 
              :key="specialty.name" 
              class="specialty-card"
            >
              <div class="specialty-header" @click="toggleSection(item, index, 'specialty')">
                <h5>{{ specialty.name }}</h5>
                <button class="toggle-btn">
                  {{ isSectionOpen(item, index, 'specialty') ? "▲" : "▼" }}
                </button>
              </div>
              <transition name="expand">
                <div v-if="isSectionOpen(item, index, 'specialty')" class="specialty-details">
                  <h6>{{ specialty.fullName }}</h6>
                  <ul>
                    <li v-for="desc in specialty.description" :key="desc">{{ desc }}</li>
                  </ul>
                </div>
              </transition>
            </div>
          </div>
        </div>

        <!-- Autres options -->
        <div v-if="item.extra">
          <h4>Autres options :</h4>
          <div class="specialties">
            <div 
              v-for="(extra, index) in item.extra" 
              :key="extra.name" 
              class="specialty-card"
            >
              <div class="specialty-header" @click="toggleSection(item, index, 'extra')">
                <h5>{{ extra.name }}</h5>
                <button class="toggle-btn">
                  {{ isSectionOpen(item, index, 'extra') ? "▲" : "▼" }}
                </button>
              </div>
              <transition name="expand">
                <div v-if="isSectionOpen(item, index, 'extra')" class="specialty-details">
                  <h6>{{ extra.fullName }}</h6>
                  <ul v-if="Array.isArray(extra.description)">
                    <li v-for="desc in extra.description" :key="desc">{{ desc }}</li>
                  </ul>
                  <p v-else>{{ extra.description }}</p>
                </div>
              </transition>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script>
import { ref } from "vue";
import { education } from "../../store/education.js";

export default {
  name: "EducationSection",
  setup() {
    const openSections = ref({});

    const toggleSection = (item, index, type) => {
      const key = `${item.id}-${type}-${index}`;
      openSections.value[key] = !openSections.value[key];
    };

    const isSectionOpen = (item, index, type) => {
      return openSections.value[`${item.id}-${type}-${index}`] || false;
    };

    return { education, toggleSection, isSectionOpen };
  }
};
</script>

<style lang="scss" scoped>
/* Section principale */
.section {
  padding: var(--spacing-xl);
  margin: auto;
}

.education-list {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.education-title {
  font-size: var(--text-xl);
  color: var(--color-primary);
  margin-bottom: var(--spacing-xs);
}

.education-institution {
  font-size: var(--text-large);
  color: var(--color-light);
  margin-bottom: var(--spacing-xs);
}

.education-location,
.education-status,
.education-date,
.education-description {
  font-size: var(--text-base);
  color: var(--color-muted);
  margin-bottom: var(--spacing-xs);
}

/* Spécialités */
.specialties {
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

/* Carte Spécialité */
.specialty-card {
  background: rgba(74, 158, 255, 0.2);
  padding: 1rem;
  border-radius: 8px;
  transition: 0.3s;
}

/* En-tête de spécialité */
.specialty-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  padding: 0.5rem;
  font-size: 1.2rem;
  font-weight: bold;
  color: var(--color-primary);
}

.specialty-header h5 {
  font-size: var(--text-medium);
  color: var(--color-light);
}

/* Bouton Toggle */
.toggle-btn {
  background: none;
  border: none;
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
  color: var(--color-primary);
  transition: transform 0.3s;
}

.toggle-btn:hover {
  color: var(--color-accent);
}

/* Fullname et Description */
.specialty-details {
  background: rgba(255, 255, 255, 0.1);
  padding: 1rem;
  border-radius: 6px;
  margin-top: 0.5rem;
  transition: all 0.3s ease-in-out;

  h6 {
    font-size: var(--text-base);
    color: var(--color-primary);
  }
  
  li {
    font-size: var(--text-base);
    color: var(--color-light);
  }
}

/* Fullname en grand */
.specialty-details h6 {
  font-size: 1.2rem;
  font-weight: bold;
  color: #4a9eff;
  margin-bottom: 0.5rem;
}

/* Description format liste */
.specialty-details ul {
  padding-left: 1.5rem;
  margin: 0;
}

.specialty-details li {
  list-style-type: "✅ ";
  margin-bottom: 0.3rem;
  font-size: 1rem;
}

/* Animation d'ouverture */
.expand-enter-active,
.expand-leave-active {
  transition: max-height 0.4s ease-in-out, opacity 0.3s ease;
}

.expand-enter-from,
.expand-leave-to {
  max-height: 0;
  opacity: 0;
}

.expand-enter-to,
.expand-leave-from {
  max-height: 300px;
  opacity: 1;
}

/* Responsive */
@media (max-width: 768px) {
    .section {
      padding: var(--spacing-md);
    }

    .education-title {
      font-size: 1.3rem;
    }

    .specialty-header {
      font-size: 1.1rem;
    }

    .specialty-details h6 {
      font-size: 1rem;
    }
  }
/* Mobile (480px and below) */
@media (max-width: 480px) {
  .education-title {
    font-size: var(--text-md);
  }

  .education-description {
    font-size: var(--text-sm);
  }

  .specialty-details h6 {
    font-size: var(--text-sm);
  }

  .specialty-details li {
    font-size: var(--text-xs);
  }

  .toggle-btn {
    font-size: 1rem;
  }
}
</style>
