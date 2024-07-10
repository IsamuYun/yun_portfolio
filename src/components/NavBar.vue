<template>
<div class="navbar-wapper">
    <nav class="navbar">
      <ul class="nav-list">
        <li class="nav-item blue">
            <div class="nav-text">About</div>
            <font-awesome-icon :icon="['fas', 'terminal']" class="nav-icon"/>
            
        </li>
        <li class="nav-item white">Portfolio</li>
        <li class="nav-item white">Coding Skill</li>
        <li class="nav-item white">Experience</li>
        <li class="nav-item blue">
          <div class="nav-text">Contact</div>
          <font-awesome-icon icon="envelope" class="nav-icon" />
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
  font-family: "Poppins", Arial, Helvetica, sans-serif;
  line-height: 1.8;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 4px;
  margin-right: 4px;
  margin-top: 48px;
  position: fixed;   /* 固定位置 */
  top: 0;            /* 距离视口顶部0像素 */
  width: 100%;       /* 元素宽度 */
  z-index: 1000;     /* 确保元素在顶层 */
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
  width: 10vw;
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
  width: 6vw;
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

.nav-text {
  transform: scale(1);
  transition-delay: 0ms;
  border-radius: 50%;
}



/* hover - hide text */
.nav-item:focus-visible .nav-text:first-of-type,
.nav-item:hover .nav-text:first-of-type {
  transform: scale(0);
}

/* place button items on top of each other */
.nav-icon {
  transition: all 300ms ease-in-out;
  grid-area: stack;
}
.nav-icon:last-of-type {
  transform: scale(0);
  transition-delay: 0ms;
  border-radius: 50%;
}
/* hover - hide text */
.nav-item:focus-visible .nav-icon:first-of-type,
.nav-item:hover .nav-icon:first-of-type {
  transform: scale(0);
}
/* hover -reveal icon */
.nav-item:focus-visible .nav-icon:last-of-type,
.nav-item:hover .nav-icon:last-of-type {
  transform: scale(1);
}



</style>