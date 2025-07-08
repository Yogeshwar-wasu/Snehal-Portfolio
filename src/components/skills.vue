<template>
  <section id="practicle_skills">
    <Heading :title="'Practical Skills'" :subtitle="'Explore My'" />
    <div class="container">
      <div class="d-flex justify-content-center flex-wrap">
        <article
          class="position-relative"
          v-for="(skill, index) in skills"
          :key="index"
          data-aos="zoom-in" :data-aos-duration="getAosDuration(index)"
          @mouseover="toggleSkillLevel(index, true)"
          @mouseout="toggleSkillLevel(index, false)"
        >
          <h3>
            <img 
              :src="`/icons/${skill.imageSrc}.png`" 
              class="skill-image mr-3"
            />

            {{ skill.name }}
          </h3>
        </article>
      </div>
     
    </div>
  </section>
</template>

<script>
import Heading from "./common/heading.vue";
export default {
  components: {
    Heading,
  },
  data() {
  return {
    skills: [
      // Front End Development
      { name: 'HTML5', imageSrc: 'html' },
      { name: 'CSS3', imageSrc: 'css' },
      { name: 'JavaScript', imageSrc: 'js' },
      { name: 'TypeScript', imageSrc: 'typescript' },
      { name: 'jQuery', imageSrc: 'jquery' },
      { name: 'Bootstrap', imageSrc: 'bootstrap' },
      { name: 'React.js', imageSrc: 'react' },

      // Back End Development
      { name: 'ASP.Net', imageSrc: 'aspnet' },
      { name: 'ASP.Net Core', imageSrc: 'aspnetcore' },

      // Programming Languages
      { name: 'C', imageSrc: 'c' },
      { name: 'C++', imageSrc: 'c++' },

      // Database Management
      { name: 'MS SQL Server', imageSrc: 'mssql' },
      { name: 'MySQL', imageSrc: 'mysql' },

      // Web Services
      { name: 'JSON', imageSrc: 'json' },
      { name: 'REST APIs', imageSrc: 'REST APIs' },
      { name: 'Postman', imageSrc: 'postman' },

      // Frameworks / Tools
      { name: 'Git', imageSrc: 'git' },
      { name: 'BitBucket', imageSrc: 'bitbucket' },
      { name: 'JIRA', imageSrc: 'jira' },
      { name: 'Visual Studio (2019/2022)', imageSrc: 'visual studio' },
      { name: 'VS Code', imageSrc: 'vs code' },
    ],
  };
},

  methods: {
    toggleSkillLevel(index) {
      this.$set(this.skills, index, { ...this.skills[index], showLevel: !this.skills[index].showLevel });
    },
    getAosDuration(index) {
      return index * 400;
    },
  },
};
</script>

<style scoped>

article {
  width: 15rem;
  height: 5rem;
  gap: 0.5rem;

}
.skill-image{
  height:30px;
  width:30px;
}
</style>