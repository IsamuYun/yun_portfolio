<template>
<header class="text-gray-700 body-font border-b border-gray-200">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items=center">
    <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0" href="#" target="_blank">
      <img src="../assets/icons/36-tech-freedom-64px.png" />
      <span class="ml-3 text-xl">36-TECH FREEDOM</span>
    </a>
    <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <ul class="nav-list">
        <li class="mr-5 hover:text-gray-1200">
            <font-awesome-icon :icon="['fas', 'sign-hanging']" class="mr-1 hover:text-gray-900" />
            About
        </li>
        <li class="mr-5 hover:text-gray-1200">
            <font-awesome-icon :icon="['fas', 'scroll']" class="mr-1 hover:text-gray-900" />
            Portfolio
        </li>
        <li class="mr-5 hover:text-gray-1200">
            <font-awesome-icon :icon="['fas', 'cube']" class="mr-1 hover:text-gray-900" />
            Coding Skill
        </li>
        <li class="mr-5 hover:text-gray-1200">
            <font-awesome-icon :icon="['fas', 'terminal']" class="mr-1 hover:text-gray-900"/>
            Expreience
        </li>
        
      </ul>
    </nav>
    <button class="inline-flex items-center bg-blue-200 border-0 py-1 px-3 focus:outline-none hover:bg-blue-300 rounded text-base mt-4 md:mt-0">
        <font-awesome-icon icon="envelope" class="mr-2" />
        Contact
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </button> 
  </div>
</header>

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
.nav-list {
  /*font-family: "Poppins", Arial, Helvetica, sans-serif;*/
  list-style: none;
  display: flex;
}

.blue {
  background-color: #4169E1;
  color: white;
  
}

.blue:hover {
  background-color: rgba(240, 249, 255, 0.65);
  color: #4169E1;
}

.white {
  background-color: #F0F9FF;
  color: black;
}

.white:hover {
  color: white;
  background-color: rgba(65, 105, 241, 0.65);
}


</style>