<template>
  <section id="about" class="section">
    <div class="container">
      <div class="image">
        <img :src="about.image" alt="Photo de Lisa Chauchat">
      </div>
      <div class="content">
        <h2>{{ about.name }}</h2>
        <h3>{{ about.title }}</h3>
        <div class="description">
          <p v-for="(paragraph, index) in about.description" 
          :key="index" 
          class="fade-in">
            <!-- <span v-html="formatText(paragraph)"></span> -->
            <span v-html="paragraph"></span>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { about } from "@/store/about.js";

export default {
  name: "AboutSection",
  data() {
    return { about };
  },
  // methods: {
  //   formatText(text) {
  //     return text.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
  //   }
  // }
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
/* .fade-in {
  opacity: 0;
  transform: translateY(10px);
  animation: fadeInUp 0.8s ease-in-out forwards;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
} */
</style>
