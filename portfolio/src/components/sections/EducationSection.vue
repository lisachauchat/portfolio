<template>
    <section id="education" class="section">
        <h2 class="section-title">🎓 Formations</h2>
  
        <div class="education-list">
          <div v-for="item in education" :key="item.id" class="education-card">
            <h3 class="education-title">{{ item.title }}</h3>
            <h4 class="education-institution">{{ item.institution }}</h4>
            <p class="education-location">{{ item.location }}</p>
            <p class="education-status">{{ item.status }}</p>
            <p class="education-date">{{ item.date }}</p>
            <p class="education-description">{{ item.description }}</p>
  
            <div v-if="item.specialties">
              <h4>Spécialités :</h4>
              <div class="specialties">
                <div v-for="specialty in item.specialties" :key="specialty.name" class="specialty-card">
                  <h5>{{ specialty.name }}</h5>
                  <h6>{{ specialty.fullName }}</h6>
                  <ul>
                    <li v-for="desc in specialty.description" :key="desc">{{ desc }}</li>
                  </ul>
                </div>
              </div>
            </div>
  
            <div v-if="item.extra">
              <h4>Autres options :</h4>
              <div class="specialties">
                <div v-for="extra in item.extra" :key="extra.name" class="specialty-card">
                  <h5>{{ extra.name }}</h5>
                  <h6>{{ extra.fullName }}</h6>
                  <p v-if="Array.isArray(extra.description)">
                    <ul>
                      <li v-for="desc in extra.description" :key="desc">{{ desc }}</li>
                    </ul>
                  </p>
                  <p v-else>{{ extra.description }}</p>
                </div>
              </div>
            </div>
  
          </div>
        </div>
    </section>
  </template>
  
  <script>
  import { education } from "@/store/education.js";
  
  export default {
    name: "EducationSection",
    data() {
      return { education };
    }
  };
  </script>
  
  <style lang="scss" scoped>
  .section {
    padding: var(--spacing-xl);
    margin: auto;
  }
  .section-title {
    font-size: 2rem;
    text-align: center;
    margin-bottom: 2rem;
    font-weight: bold;
  }
  
  .education-list {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
  
  .education-card {
    background: rgba(255, 255, 255, 0.05);
    padding: 1.5rem;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.1);
  }
  
  .education-title {
    font-size: 1.5rem;
    font-weight: bold;
    color: #4a9eff;
  }
  
  .education-institution,
  .education-location,
  .education-status,
  .education-date,
  .education-description {
    font-size: 1rem;
    margin: 0.3rem 0;
  }
  
  .specialties{
    margin-top: 1rem;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }
  
  .specialty-card{
    flex: 1;
    background: rgba(74, 158, 255, 0.2);
    padding: 1rem;
    border-radius: 8px;
  }
  
  .specialty-card h5{
    font-size: 1.2rem;
    font-weight: bold;
  }
  
  .specialty-card h6{
    font-size: 1rem;
    font-weight: normal;
    opacity: 0.8;
  }
  
  ul {
    padding-left: 1.2rem;
  }
  
  li {
    list-style: disc;
  }
  </style>
  