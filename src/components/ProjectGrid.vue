<template>
    <div class="grid-container">
        <div v-for="item in items" :key="item.id" class="grid-item">
            <img :src="item.image" :alt="item.title" @click="goToProject(item.id)" />
            <p class="item-description">{{ item.description }}</p>
        </div>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { ref, computed } from 'vue';

const router = useRouter();

const items = ref([
    {id: 1, image: 'src/assets/projects/thumbnails/hikvision-us-small.png', title: 'Hikvision Official Website', description: 'Hikvision Official Website'},
    {id: 2, image: 'src/assets/projects/thumbnails/hikvision-us-legacy-small.png', title: 'Hikvision Legacy Website', description: 'Hikvision Legacy Website'},
    {id: 3, image: 'src/assets/projects/thumbnails/alc-ppp-small.png', title: 'ALC PPP Portal', description: 'ALC PPP Portal'},
    {id: 4, image: 'src/assets/projects/thumbnails/rmdslab-small.png', title: 'RMDSLab AI Community', description: 'RMDSLab AI Community'}
])

const goToProject = (id) => {
    if (id == 1) {
        router.push({ path: '/projects/hikvision' });
    }
    else {
        console.log(id);
    }
}

</script>

<style scoped>
.grid-container {
    display: grid;
    grid-template-columns: repeat(3, 400px);  /* 4列布局 */
    grid-template-rows: 2fr, 1fr;     /* 1行布局 */
    gap: 36px;    /* 格子之间的间隔 */
    justify-content: center; 
    align-items: center;
}

.grid-item {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
    box-shadow: 5px 5px 8px 0px blue;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.4s;
}

.grid-item:hover {
    transform: scale(1.08);
}

.grid-item img {
  width: 390px; /* 图片宽度为容器的40% */
  height: 190px; /* 图片高度为容器的20% */
  object-fit: contain; /* 保持图片比例 */
  margin: 5px 5px 5px 5px;
}

.item-description {
    text-align: center; /* 文字居中 */
    margin-top: 10px; /* 与图片的间距 */
}
</style>
