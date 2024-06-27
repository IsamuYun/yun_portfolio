<template>
<div class="navbar-wapper">
    <nav class="navbar">
      <ul class="nav-list">
        <li class="nav-item blue">
            <font-awesome-icon :icon="['fas', 'terminal']" />
        </li>
        <li class="nav-item white">Portfolio</li>
        <li class="nav-item white">Coding Skill</li>
        <li class="nav-item white">Experience</li>
        <li class="nav-item blue">
          <font-awesome-icon icon="envelope" />
        </li>
      </ul>
    </nav>
</div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

export default {
  components: {
    FontAwesomeIcon
  }
}
</script>

<style scoped>
.navbar-wapper {
  font-family: "Roboto", Arial, Helvetica, sans-serif;
  font-size: 1em;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 16px;
}

.navbar {
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 3px;
  border-top: 2px solid #4169E1;
  border-bottom: 2px solid #4169E1;
}

.nav-list {
  list-style: none;
  display: flex;
  padding: 0;
  margin: 0;
  width: 100%;
  justify-content: space-evenly;
}

.nav-item {
  width: 12vw;
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 2px;
  padding-top: 2px;
  height: 36px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
}

.blue {
  width: 4vw;
  background-color: #4169E1;
  color: white;
}

.white {
  background-color: white;
  color: black;
  
}

.white:hover {
  color: white;
  background-color: rgba(65, 105, 241, 0.65);
}
</style>