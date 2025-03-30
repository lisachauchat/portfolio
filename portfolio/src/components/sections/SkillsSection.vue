<template>
    <section id="skills" class="section">
        <div class="skills-list">
            <div v-for="(category, catIndex) in skills" :key="category.id" class="skill-category">

                <div class="category-header" @click="toggleSection(catIndex)">
                    <h3>{{ category.globalTitle }}</h3>
                    <button class="toggle-btn">{{ isSectionOpen(catIndex) ? "▲" : "▼" }}</button>
                </div>

                <transition name="expand">
                <div v-if="isSectionOpen(catIndex)" class="category-content">
                    
                    <!--  Description générale -->
                    <p v-if="category.globalDefinition" class="category-description">
                    {{ category.globalDefinition }}
                    </p>

                    <!--  Liste des sous-catégories -->
                    <div v-for="(subcategory, subIndex) in category.globalSkillsList" :key="subIndex" class="subcategory">
                    
                        <div class="subcategory-header" @click="toggleSubSection(catIndex, subIndex)">
                            <h4>
                                <span v-if="subcategory.skillIcon">
                                    <i :class="subcategory.skillIcon" class="skill-icon"></i>
                                </span>
                                {{ subcategory.skillTitle }}
                            </h4>
                            <button class="toggle-btn">{{ isSubSectionOpen(catIndex, subIndex) ? "▲" : "▼" }}</button>
                        </div>

                        <transition name="expand">
                            <div v-if="isSubSectionOpen(catIndex, subIndex)" class="subcategory-content">
                                <!--  Description sous-catégorie -->
                                <p v-if="subcategory.skillDefinition" class="subcategory-description">
                                    {{ subcategory.skillDefinition }}
                                </p>

                                <!--  Liste des compétences -->
                                <div class="skills-container">
                                    <div v-for="(skill, skillIndex) in subcategory.skillsList" :key="skillIndex" class="skill-item">
                                        <div class="skill-header">
                                            <span class="skill-title">{{ skill.skillLevelTitle }}</span>
                                            <div v-if="skill.skillLevelValue" class="skill-bar">
                                                <div class="skill-progress" :style="{ width: skill.skillLevelValue + '%' }">
                                                    {{ skill.skillLevelValue }}%
                                                </div>
                                            </div>
                                        </div>
                                        <p v-if="skill.skillLevelDefinition" class="skill-definition">
                                            {{ skill.skillLevelDefinition.join(", ") }}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </transition>
                    </div>
                </div>
                </transition>
            </div>
        </div>
    </section>
</template>
  
  
<script>
  import { ref } from "vue";
  import { skills } from "../../store/skills.js";
  
  export default {
    name: "SkillsSection",
    setup() {
      const openSections = ref({});
      const openSubSections = ref({});
  
      const toggleSection = (index) => {
        openSections.value[index] = !openSections.value[index];
      };
  
      const isSectionOpen = (index) => {
        return openSections.value[index] || false;
      };
  
      const toggleSubSection = (catIndex, subIndex) => {
        const key = `${catIndex}-${subIndex}`;
        openSubSections.value[key] = !openSubSections.value[key];
      };
  
      const isSubSectionOpen = (catIndex, subIndex) => {
        return openSubSections.value[`${catIndex}-${subIndex}`] || false;
      };
  
      return { skills, toggleSection, isSectionOpen, toggleSubSection, isSubSectionOpen };
    }
  };
</script>

<style lang="scss" scoped>
    /*  Section principale */
    .section {
    padding: var(--spacing-xl);
    margin: auto;
    max-width: 900px;
    }

    /* Catégorie principale */
    .skill-category {
    background: rgba(255, 255, 255, 0.05);
    border-radius: 10px;
    margin-bottom: 1.5rem;
    overflow: hidden;
    }

    .category-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.2rem;
    background: rgba(74, 158, 255, 0.2);
    cursor: pointer;
    font-size: 1.3rem;
    font-weight: bold;
    }

    .category-header h3 {
      font-size: var(--text-xl);
      color: var(--color-primary);
    }

    .category-content {
    padding: 1.2rem;
    }

    .category-description {
    font-size: 1rem;
    margin-bottom: 1rem;
    color: var(--color-muted);
    }

    /* 🔽 Sous-catégorie */
    .subcategory {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 8px;
    margin-bottom: 1rem;
    padding: 1rem;
    }

    .subcategory-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    background: rgba(255, 255, 255, 0.15);
    cursor: pointer;
    font-size: 1.2rem;
    border-radius: 6px;
    }

    .subcategory-header h4 {
      font-size: var(--text-medium);
      color: var(--color-light);
    }

    .subcategory-description {
      font-size: var(--text-base);
      color: var(--color-muted);
    }

    .skills-container {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    padding-top: 1rem;
    }
    /*  Icônes */
    .skill-icon {
    font-size: 1.5rem;
    margin-right: 10px;
    vertical-align: middle;
    }
    /* Élément individuel des compétences */
    .skill-item {
    background: rgba(255, 255, 255, 0.08);
    border-radius: 6px;
    padding: 1rem;
    flex: 1;
    min-width: 220px;
    max-width: 300px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    }

    .skill-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 0.5rem;
    }

    .skill-title {
      font-size: var(--text-base);
      color: var(--color-light);
    }

    /* Barre de progression*/
    .skill-bar {
    background: rgba(255, 255, 255, 0.15);
    height: 14px;
    border-radius: 6px;
    overflow: hidden;
    width: 100px;
    margin-left: 10px;
    display: flex;
    align-items: center;
    }

    .skill-progress {
    height: 100%;
    background: #4a9eff;
    text-align: center;
    font-size: 0.75rem;
    font-weight: bold;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    }

    /* Définition de la compétence */
    .skill-definition {
      font-size: var(--text-small);
      color: var(--color-muted);
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
  
    /* Responsive */
    @media (max-width: 768px) {
    .skills-container {
    flex-direction: column;
    }

    .skill-item {
    max-width: 100%;
    }

    .skill-bar {
    width: 80px;
    }
    }
    @media (max-width: 480px) {
    .section-title {
    font-size: 1.5rem;
    }

    .category-header {
    font-size: 1.1rem;
    padding: 1rem;
    }

    .subcategory-header {
    font-size: 1rem;
    padding: 0.8rem;
    }

    .skill-title {
    font-size: 0.9rem;
    }

    .skill-bar {
    width: 80px;
    height: 14px;
    }

    .toggle-btn {
    font-size: 1rem;
    }
    }
</style>
