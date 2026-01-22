<template>
  <div class="flex-wrapper">
    <div class="column column-2">
      <div class="card about-me-card">
        <h4 class="card-header">About Me</h4>
        <div class="card-body">
          <img src="./../../assets/images/dan_stucky.png" />
          <p>
            I have been working as a Full-Stack Web Dev for 6 years and am
            currently employed by a smaller software company named Storable. Our
            stack primarily consists of Rails with Postgres, but I get to play
            with JS/React pretty often and recently even dabbled with
            <a href="https://vuejs.org/" target="_blank">Vue.js</a>
            and <a href="https://www.rust-lang.org/" target="_blank">Rust</a>. I
            love writing software and working on projects that have a positive
            and meaningful influence on people's lives. Prior to software
            development, I obtained a M.S. in molecular genetics and I'd like to
            someday combine my knowledge in these two fields, but have not yet
            found the right opportunity.
          </p>
          <p>
            I built this site to provide some info on myself and keep a record
            of a few fun projects I have engaged in outside of my employment.
            Take a look around and feel free to reach out.
          </p>
        </div>
      </div>

      <div class="card education-card">
        <h4 class="card-header">Education</h4>
        <div class="card-body">
          <ul class="list-unstyled">
            <li><i class="fas fa-graduation-cap" /> B.S. Computer Science</li>
            <li class="text-secondary">
              University of Missouri Kansas City (2016)
            </li>
          </ul>
          <ul class="list-unstyled">
            <li><i class="fas fa-graduation-cap" /> M.S. Molecular Genetics</li>
            <li class="text-secondary">Kansas State University (2013)</li>
          </ul>
          <ul class="list-unstyled">
            <li><i class="fas fa-graduation-cap" /> B.S. Biology</li>
            <li class="text-secondary">Truman State University (2011)</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="column column-2">
      <div class="card skills-card">
        <h4 class="card-header">Skills</h4>
        <div class="card-body">
          <HorizontalBarChart
            :data="skillData"
            :chart-options="{
              chartId: 'skills-graph-container',
              chartWidth: 500,
              style: { barColor: '#3c8373', barHoverColor: '#63ac99' },
            }"
          />
        </div>
      </div>

      <div class="card contact-info-card">
        <h4 class="card-header">Contact</h4>
        <div class="card-body">
          <p><i class="fas fa-map-marker-alt" /> Kansas City, MO</p>
          <p>
            <i class="fab fa-linkedin" />
            <a
              href="https://www.linkedin.com/in/daniel-stucky-580464a8/"
              target="_blank"
            >
              LinkedIn</a
            >
          </p>
          <p>
            <i class="fab fa-github" />
            <a href="https://github.com/danfstucky" target="_blank"
              >My GitHub</a
            >
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HorizontalBarChart from "./../shared/HorizontalBarChart.vue";

export default {
  components: {
    HorizontalBarChart,
  },
  data() {
    return {
      skillData: [
        { text: "Ruby/Rails", score: 10 },
        { text: "JavaScript", score: 9 },
        { text: "React", score: 9 },
        { text: "Vue.js", score: 5 },
        { text: "Java", score: 4 },
        { text: "Python", score: 6 },
        { text: "Postgres/SQL", score: 8 },
        { text: "HTML/CSS", score: 10 },
        { text: "git", score: 9 },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.flex-wrapper {
  display: flex;
  .column {
    padding: 0px 10px;
  }

  .card {
    margin: 10px;
  }

  .column-2 {
    flex: 2;
  }
  .about-me-card {
    img {
      float: left;
      padding-right: 10px;
    }
  }
}
</style>
