<template>
    <div>
      <Banner />
      <NavBar />
      <Introduction />
      <ProjectGrid />
    </div>
</template>

<script>
import Banner from '@/components/Banner.vue';
import ProjectGrid from '@/components/ProjectGrid.vue';
import NavBar from '@/components/NavBar.vue';
import Introduction from '@/components/Introduction.vue';

export default {
    components: {
        Banner,
        NavBar,
        Introduction,
        ProjectGrid,
    }
}
</script>