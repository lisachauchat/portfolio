<template>
  <section id="about" class="section">
    <div class="container">
      <div class="image">
        <img :src="about.image" alt="Photo de Lisa Chauchat">
      </div>
      <div class="content">
        <h2>{{ about.name }}</h2>
        <h3>{{ about.title }}</h3>
        <div class="description card">
          <p v-for="(paragraph, index) in about.description" 
          :key="index" 
          class="fade-in"
          v-html="parseMarkdown(paragraph)">
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { about } from "../../store/about.js";
import { marked } from 'marked';

export default {
  name: "AboutSection",
  data() {
    return { 
      about,
    };
  },
  methods: {
    parseMarkdown(text) {
      // Configure marked pour ne gérer que le gras
      marked.setOptions({
        gfm: true,
        breaks: true
      });
      // Convertit les ** en balises <strong>
      return marked(text);
    }
  }
};
</script>

<style scoped>
.section {
  padding: var(--spacing-xl);
}

.container {
  display: flex;
  gap: var(--spacing-lg);
  align-items: center;
}

.image img {
  width: 250px;
  border-radius: 50%;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
}

h2 {
  color: var(--color-primary);
  margin-bottom: var(--spacing-xs);
}

h3 {
  color: var(--color-text);
  margin-bottom: var(--spacing-sm);
}

.description p {
  margin-bottom: var(--spacing-sm);
}

.bold-text {
  font-weight: 700;
  color: red;
}

:deep(strong) {
  font-weight: 700;
  color: var(--color-primary);
}

@media (max-width: 768px) {
  .container {
    flex-direction: column;
    text-align: center;
  }

  .image {
    margin-bottom: var(--spacing-md);
  }

  .image img {
    width: 200px;
  }
}
</style>
