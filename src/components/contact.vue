<template>
  <div>
    <footer class="mt-5 text-lg-start" id="contact">
      <hr class="my-4"/>
        <section class="row">
            <div class="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
              <h6 class="text-uppercase mb-4 font-weight-bold">Contact Details</h6>
              <p>
                <a href="https://www.linkedin.com/in/snehal-dhote-03653221b/" target="_blank">
                  <i class="fab fa-linkedin"></i> LinkedIn
                </a>
              </p>
              <p>
                <a href="mailto:Snehaldhote42@gmail.com">
                  <i class="fas fa-envelope"></i> Snehaldhote42@gmail.com
                </a>
              </p>
              <p>
                <i class="fas fa-map-marker-alt"></i> Nagpur, Maharashtra
              </p>
            </div>

            <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
              <h6 class="text-uppercase mb-4 font-weight-bold">Services</h6>
              <p>Website Development</p>
              <p>App Development</p>
              <p>Others</p>
            </div>

            <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
              <h6 class="text-uppercase mb-4 font-weight-bold">Links</h6>
              <p class="scroll-to" @click="scrollToSection('summary')">Summary</p>
              <p class="scroll-to" @click="scrollToSection('about')">About</p>
              <p class="scroll-to" @click="scrollToSection('practicle_skills')">Skills</p>
              <p class="scroll-to" @click="scrollToSection('projects')">Projects</p>
            </div>

            <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
              <h6 class="text-uppercase mb-4 font-weight-bold">Follow us</h6>
              <a class="btn btn-floating m-1" href="https://www.linkedin.com/in/snehal-dhote-03653221b/" role="button">
                <i class="fab fa-linkedin-in"></i>
              </a>
            </div>
        </section>
      <hr/>
      <div class="text-center p-3">
        © 2025 Made with 
        Vue.js
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "FooterComponent",
  methods: {
     scrollToSection(sectionId) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }
};
</script>

<style scoped>
.scroll-to {
  cursor: pointer;
}
footer {
  section.row p a {
    color: black;
  }
}
</style>
