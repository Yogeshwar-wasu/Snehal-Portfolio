<template>
  <section id="projects">
    <Heading :title="'My Projects'" :subtitle="'Have a look at'" />

    <section class="project-container container-fluid">
      <div v-for="(project, index) in projects" :key="index" class="card px-0">

        <div class="card-body shadow">
            <h5 class="card-title">{{ project.title }}</h5>
            <p class="card-text">{{ project.description }}</p>
            <div class="mb-3">
              <span v-for="(tech, i) in project.technologies" :key="i" class="badge rounded-pill px-3 py-2 mx-2 border border-dark">
                {{ tech }}
              </span>
            </div>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
  import VueSlickCarousel from 'vue-slick-carousel'
  import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
  import Heading from "./common/heading.vue";
 
  export default {
    name: 'MyComponent',
    components: { VueSlickCarousel, Heading },
    methods: {
      viewUrl(url) {
        window.location.href = url;
      }
    },
    data() {
      return {
        projects: [
  {
    title: "True Value",
    description: `End-to-end development of a robust application architecture including frontend, backend, and database layers. Used React.js, ASP.Net, ASP.Net Core, MVC, Git, and MySQL.`,
    image: "/projects/project_truevalue.png", // replace with your actual image path
    live: "", // Add live link if available
    github: "", // Add GitHub link if available
    technologies: ["React.js", "ASP.Net", "ASP.Net Core", "MVC", "MySQL", "Git"],
  },
  {
    title: "Baloise Insurance",
    description: `Handled full-stack development using React.js, ASP.Net, ASP.Net Core, Git, and MySQL to build enterprise-grade insurance modules.`,
    image: "/projects/project_baloise.png", // replace with your actual image path
    live: "",
    github: "",
    technologies: ["React.js", "ASP.Net", "ASP.Net Core", "MySQL", "Git"],
  },
  {
    title: "Leave Management System",
    description: `Developed and deployed a Leave Management System using React.js and ASP.Net Core. Ensured smooth UI, API integration, and database performance.`,
    image: "/projects/project_leave_mgmt.png", // replace with your actual image path
    live: "",
    github: "",
    technologies: ["React.js", "ASP.Net Core", "MySQL", "Git"],
  },
  {
    title: "Canteen Management System",
    description: `Built a complete web application for managing canteen orders, menus, and billing using React.js and ASP.Net Core.`,
    image: "/projects/project_canteen.png", // replace with your actual image path
    live: "",
    github: "",
    technologies: ["React.js", "ASP.Net Core", "MySQL", "Git"],
  },
  {
    title: "COJAG TALENT CARE",
    description: `Developed a static web application for COJAG TALENT CARE using HTML and CSS during internship.`,
    image: "/projects/project_cojag.png", // replace with your actual image path
    live: "",
    github: "",
    technologies: ["HTML", "CSS"],
  }
]

      };
    }
  }
</script>

<style scoped lang="scss">
.project-container {
  gap:20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  .card {
    width:30rem;
    transition: transform 0.3s ease-in-out;
    background: transparent;

    &:hover{
      transform: scale(1.02);
      z-index:2;
    }
    a:hover {
      text-decoration: underline;
    }
  }
}
</style>