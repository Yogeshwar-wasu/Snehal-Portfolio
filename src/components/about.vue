<template>
  <section id="about" class="container">
    <Heading :title="'About Me'" :subtitle="'Want to know me'" />

    <div class="position-relative">
      <div class="verticle-line position-absolute"></div>
      <div data-aos="fade-left" data-aos-duration="1000" class="mt-4 ml-5">
        <h2 class='mb-4'> <i class="fa-solid fa-briefcase"></i> Experience - {{calculatedExperience}}</h2>
        <div class='w-100 text-green'>
          <h4 class='d-inline'> Software Engineer - 2022-present</h4>
        </div>
        <h6> <a class='text-blue'> Hexaware Technologies Ltd. Pune, Maharashtra </a></h6>
        <ul>
          <li> Working on Baloise Insurance Project. </li>
          <li> Full stack developer. </li>
          <li> Knowledge of Web development, Asp.net, Asp.net core, MVC, Ajax, cshtml,C#, Oops concepts, WCF, Rest, wsdl, Json, jQuery, JavaScript. </li>
          <li> Knowledge of Tool VS Code, Git, MySQL, postman. </li>
          <li> Certificate of Microsoft azure fundamental AZ-900. </li>
          <li> Certificate of Microsoft azure fundamental PL-900. </li>


        </ul>
        <div class="skills mb-5">
          <span class="badge rounded-pill px-3 py-2 mx-2 border border-dark">Asp.net</span>
          <span class="badge rounded-pill px-3 py-2 mx-2 border border-dark">Asp.net core</span>
          <span class="badge rounded-pill px-3 py-2 mx-2 border border-dark">MVC</span>
          <span class="badge rounded-pill px-3 py-2 mx-2 border border-dark">Ajax</span>
          <span class="badge rounded-pill px-3 py-2 mx-2 border border-dark">cshtml</span>
          <span class="badge rounded-pill px-3 py-2 mx-2 border border-dark">jQuery</span>
          <span class="badge rounded-pill px-3 py-2 mx-2 border border-dark">JavaScript</span>

        </div>

        <h4 class='text-green'> Training Developer (Internship) - 08/2021 - 10/2021</h4>
        <h6> <a class='text-blue'>COJAG Technologies Pvt. Nagpur, Maharashtra</a> </h6>
      </div>
    </div>

    <div class="position-relative mt-5">
      <div class="verticle-line position-absolute"></div>

      <div data-aos="fade-left" data-aos-duration="1000" class="mt-4 ml-5">
        <h2 class='mb-4'><i class="fa-solid fa-user-graduate"></i> Education </h2>
        
        <h4 class='text-green'> BE ( ELECTRICAL ENGINEERING ) - SBJITMR - 2022 </h4>
        <h6><a class='text-blue'> S. B. Jain Institute of technology, Management and Research, Nagpur </a></h6>

        <h4 class='text-green mt-4'> HSC - 2018</h4>
        <h6><a class='text-blue' >Bhalerao jr clg, Saoner</a>  </h6>

        <h4 class='text-green mt-4'> SSC - 2016</h4>
        <h6><a class='text-blue' >Saraswat public school, Saoner </a>  </h6>
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
      activeSection: 'experience',
      startDate: "2022-06-09"
    };
  },
  computed: {
  calculatedExperience() {
    const startDate = new Date(this.startDate);
    const currentDate = new Date();

    let years = currentDate.getFullYear() - startDate.getFullYear();
    let months = currentDate.getMonth() - startDate.getMonth();
    let days = currentDate.getDate() - startDate.getDate();

    // Adjust months and years if the day hasn't reached yet
    if (days < 0) {
      months -= 1;
    }

    if (months < 0) {
      years -= 1;
      months += 12;
    }

    return `${years} year${years !== 1 ? 's' : ''} ${months} month${months !== 1 ? 's' : ''}`;
  }
}
,
  methods: {
    setActiveSection(section) {
      this.activeSection = section;
    },
  },
};
</script>

<style scoped>
.about-containers {
  gap: 2rem;
}
.details-container {
  padding: 1.5rem;
  flex: 1;
  width: 15vw;
  border-radius: 2rem;
  border: rgb(53, 53, 53) 0.1rem solid;
  border-color: rgb(163, 163, 163);
  text-align: center;
}
.details-container:hover {
  cursor: pointer;
  background: lightgrey;
}

ul {
  line-height: 30px;
  font-size: 1.2rem;
}

.verticle-line{
  width: 15px;
  height: 100%;
  background: linear-gradient(to right, #47BA87 50%, #34495E 50%);
}
.verticle-line-right{
  right:0;
}

.text-green{
  color: #47BA87;
}
.text-blue{
  color: #34495E;
  text-decoration: underline;
}

@media screen and (max-width: 375px) {
  .details-container h3 {
    font-size: 14px;
  }
}
</style>
