<template>
  <section id="summary" class="section section_1 py-5 w-100 row">
    <div data-aos="fade-right" data-aos-duration="1000" class="section__text text-center px-3 py-5 col-lg-6 col-sm-12 d-flex justify-content-center align-items-center flex-column">
      <p>Hey! I'm</p>
      <h1>Snehal Dhote</h1>
      <vue-typer text='FullStack Developer'></vue-typer>
      <p class="intro-para mt-2"> 
        I am a skilled software developer delivering high-quality solutions across diverse projects. My expertise spans front-end and back-end development, including React.js, ASP.Net,
Asp.Net Core, and related technologies.
      </p>
      <p class='intro-para'>
        I specialize in creating user-friendly interfaces and scalable systems to meet client needs. My passion lies in solving complex challenges with and effective solutions.
      </p>
      <div class="btn-container mt-3">
        <button @click="downloadResume" class="btn btn-color-2 btn-black">
  Download Resume
</button>
        <button class="btn btn-color-1" @click="scrollToSection('contact')">
          Contact Info
        </button>
      </div>
      <div id="socials-container">
        <i class="fa-brands fa-linkedin icon" @click="redirectTo('https://www.linkedin.com/in/snehal-dhote-03653221b/')"></i>
      </div>
    </div>
    <div class="pic_container col-lg-6 col-sm-12 d-flex justify-content-center alig-items-center">
      <div class='pic_container_inner'>
        <div class='green-bg'></div>
        <img data-aos="fade-left" data-aos-duration="1000" zoomtastic src="../assets/my.png" alt="profile pic" />
      </div>

    </div>
  </section>
</template>

<script>
import { VueTyper } from 'vue-typer';
import html2pdf from 'html2pdf.js';

export default {
  components: {
    'vue-typer': VueTyper,
  },
  methods: {
    downloadResume() {
      const fileUrl = '/assets/snehal-dhote-resume.pdf';

      const link = document.createElement('a');
      link.href = fileUrl;
      link.setAttribute('download', 'snehal-dhote-resume.pdf');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    },
    redirectTo(url) {
      window.location.href = url;
    },
    scrollToSection(sectionId) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.section__text {
  height: 100%;
  .intro-para {
    max-width: 450px;
  }
}
.pic_container {
  height: 75vh;

.pic_container_inner {
    height: 420px;
    width: 360px;
    position: relative;
    .green-bg{
      position: absolute;
      height:350px;
      width:350px;
      bottom: 20px;
      border-radius:50%;
      background: #47BA87;
    } 

  }
}

#socials-container {
  display: flex;
  justify-content: center;
  margin-top: 1rem;
  gap: 1rem;
}

.icon {
  cursor: pointer;
  height: 2rem;
}
.btn-container {
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.btn {
  font-weight: 600;
  transition: all 300ms ease;
  padding: 1rem;
  border-radius: 2rem;
}

.btn-color-1,
.btn-color-2 {
  border: rgb(53, 53, 53) 0.1rem solid;
}

.btn-color-1:hover,
.btn-color-2:hover {
  cursor: pointer;
}

.btn-color-1,
.btn-color-2:hover {
  background: rgb(53, 53, 53);
  color: white;
}
.btn-color-1:hover {
  background: rgb(0, 0, 0);
}
.btn-color-2:hover {
  border: rgb(255, 255, 255) 0.1rem solid;
}
.btn-container {
  gap: 1rem;
}
</style>
