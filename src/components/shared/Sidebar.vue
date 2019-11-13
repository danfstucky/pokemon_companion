<template>
  <nav class='sidebar'>
    <div class='sidebar-header'>
      <h1>Dan Stucky</h1>
      <h5>Software Engineer</h5>
    </div>
    <ul class='list-unstyled'>
      <router-link to='/' active-class='active' exact>
        <li>Who I Am</li>
      </router-link>
      <router-link to='/dev-projects' active-class='active'>
        <li>Dev Projects</li>
      </router-link>
      <router-link to='/pokemon' active-class='active'>
        <li>Pokemon Stuff</li>
      </router-link>
      <router-link to='/research' active-class='active'>
        <li>Biology Research</li>
      </router-link>
    </ul>
  </nav>
</template>

<script>
export default {

};
</script>

<style lang="less" scoped>
  @import (css) url('https://fonts.googleapis.com/css?family=ZCOOL+QingKe+HuangYou&display=swap');

  .sidebar {
    width: 250px;
    min-width: 250px;
    height: 100vh;
    z-index: 999;
    border-right: 1px solid rgba(0, 0, 0, 0.2);
    position: sticky;
    top: 0;
    background: #e1ece8;
    color: #63ac99;
    font-family: 'ZCOOL QingKe HuangYou', serif;

    .sidebar-header {
      text-align: center;
      padding: 20px;
    }
    a {
      text-decoration: none;

      li {
        color: #63ac99;
        font-size: 24px;
        text-align: left;
        padding: 15px;
        border-bottom: 1px solid rgba(0, 0, 0, 0.2);

        &:hover {
          cursor: pointer;
          background: #63ac99;
          color: white;
        }
      }
    }

    .active li {
      background: #63ac99;
      color: white;
      border: 3px solid #3c8373;
      
      &:after{
        float: right;
        font-family: "Font Awesome 5 Free"; font-weight: 900; content: "\f101";
      }
    }
  }
</style>
