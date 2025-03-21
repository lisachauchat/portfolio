<template>
  <nav :class="['navbar', { 'scrolled': hasScrolled }]">
    <div class="navbar-content">
      <div class="navbar-brand">
        <a href="#" @click="scrollToTop">LC</a>
      </div>
      
      <button class="menu-toggle" @click="toggleMenu" :class="{ 'active': isMenuOpen }">
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div class="nav-links" :class="{ 'active': isMenuOpen }">
        <a v-for="section in sections" 
           :key="section.id" 
           :href="`#${section.id}`"
           @click.prevent="navigateToSection(section.id)"
           :class="{ 'active': activeSection === section.id }">
          {{ section.icon }} {{ section.title }}
        </a>
        <a href="/chauchatlisaCV.pdf" 
           target="_blank" 
           rel="noopener noreferrer" 
           class="cv-button">
          📄 CV
        </a>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {
      isMenuOpen: false,
      hasScrolled: false,
      activeSection: 'about',
      sections: [
        { id: 'about', title: 'À propos', icon: '👤' },
        { id: 'education', title: 'Formation', icon: '🎓' },
        { id: 'skills', title: 'Compétences', icon: '📚' },
        { id: 'experience', title: 'Expériences', icon: '💼' },
        { id: 'projects', title: 'Projets', icon: '🌟' }
      ]
    }
  },
  computed: {
    isHomeRoute() {
      return this.$route.path === '/'
    }
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    handleScroll() {
      this.hasScrolled = window.scrollY > 50;
      this.updateActiveSection();
    },
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    navigateToSection(sectionId) {
      this.isMenuOpen = false;
      
      // Si on n'est pas sur la page d'accueil, rediriger d'abord
      if (!this.isHomeRoute) {
        this.$router.push({ path: '/', hash: `#${sectionId}` });
        return;
      }

      // Navigation sur la même page
      const element = document.getElementById(sectionId);
      if (element) {
        const navHeight = this.$el.offsetHeight;
        const elementPosition = element.offsetTop - navHeight;
        window.scrollTo({
          top: elementPosition,
          behavior: 'smooth'
        });
        
        history.pushState(null, '', `/#${sectionId}`);
        this.activeSection = sectionId;
      }
    },
    handleNavClick(event, sectionId) {
      event.preventDefault();
      this.isMenuOpen = false;
      this.$router.push('/' + sectionId)
    },
    updateActiveSection() {
      const sections = this.sections.map(s => document.getElementById(s.id));
      const navHeight = this.$el.offsetHeight;
      const scrollPosition = window.scrollY + navHeight + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        if (sections[i] && sections[i].offsetTop <= scrollPosition) {
          this.activeSection = this.sections[i].id;
          break;
        }
      }
    }
  },
  mounted() {
    // Initialiser la section active basée sur le hash de l'URL
    const hash = window.location.hash.slice(1);
    if (hash && this.sections.some(s => s.id === hash)) {
      this.activeSection = hash;
      this.$nextTick(() => {
        this.navigateToSection(hash);
      });
    }
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  background: rgba(26, 26, 46, 0.8);
  backdrop-filter: blur(10px);
  z-index: 1000;
  transition: all 0.3s ease;

  &.scrolled {
    height: 60px;
    background: rgba(26, 26, 46, 0.95);
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }
}

.navbar-content {
  max-width: 1200px;
  margin: 0 auto;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
}

.navbar-brand {
  a {
    font-size: 1.8rem;
    font-weight: 700;
    color: #4a9eff;
    text-decoration: none;
    letter-spacing: 2px;
  }
}

.nav-links {
  display: flex;
  gap: 2rem;

  a {
    color: #fff;
    text-decoration: none;
    font-size: 0.95rem;
    padding: 0.5rem 0;
    position: relative;
    transition: color 0.3s ease;

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      height: 2px;
      background: #4a9eff;
      transition: width 0.3s ease;
    }

    &:hover, &.active {
      color: #4a9eff;

      &::after {
        width: 100%;
      }
    }
  }

  .cv-button {
    padding: 0.5rem 1rem;
    background: #4a9eff;
    color: white;
    text-decoration: none;
    border-radius: 6px;
    font-weight: 500;
    transition: background 0.3s ease;
    
    @media (min-width: 769px) {
      margin-left: 1rem;
    }

    &:hover {
      background: #3282db;
    }
  }
}

.menu-toggle {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 21px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  span {
    width: 100%;
    height: 2px;
    background-color: #fff;
    transition: all 0.3s ease;
  }

  &.active {
    span {
      &:first-child {
        transform: rotate(45deg) translate(6px, 6px);
      }
      &:nth-child(2) {
        opacity: 0;
      }
      &:last-child {
        transform: rotate(-45deg) translate(6px, -6px);
      }
    }
  }
}

@media (max-width: 768px) {
  .menu-toggle {
    display: flex;
  }

  .nav-links {
    position: fixed;
    top: 70px;
    left: 0;
    right: 0;
    background: rgba(26, 26, 46, 0.95);
    backdrop-filter: blur(10px);
    flex-direction: column;
    align-items: center;
    padding: 2rem;
    gap: 1.5rem;
    transform: translateY(-100%);
    opacity: 0;
    transition: all 0.3s ease;
    visibility: hidden;

    &.active {
      transform: translateY(0);
      opacity: 1;
      visibility: visible;
    }

    .cv-button {
      margin: 0;
      width: auto;
    }
  }
}
</style>