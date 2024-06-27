<template>
    <div class="grid-container">
        <div v-for="item in items" :key="item.id" class="grid-item">
            <img :src="item.image" :alt="item.title" :sytle="imageStyle" @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave" @click="goToProject(item.id)" />
            <p class="item-description">{{ item.description }}</p>
        </div>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { ref, computed } from 'vue';

const router = useRouter();

const items = ref([
    {id: 1, image: 'src/assets/projects/thumbnails/hikvision-us-thumbnail.png', title: 'Hikvision Official Website', description: 'Hikvision Official Website'},
    {id: 2, image: 'src/assets/projects/thumbnails/hikvision-us-legacy-thumbnail.png', title: 'Hikvision Legacy Website', description: 'Hikvision Legacy Website'},
    {id: 3, image: 'src/assets/projects/thumbnails/alc-ppp-thumbnail.png', title: 'ALC PPP Portal', description: 'ALC PPP Portal'},
    {id: 4, image: 'src/assets/projects/thumbnails/rmdsai-thumbnail.png', title: 'RMDSLab AI Community', description: 'RMDSLab AI Community'}
])

const isHovered = ref(false);

// 计算属性
const imageStyle = computed(() => ({
    transform: isHovered.value ? 'scale(1.2)' : 'scale(1)',
    transition: 'transform 0.35s ease-in-out',
}))

// Methods
const handleMouseEnter = () => {
    isHovered.value = true;
}

const handleMouseLeave = () => {
    isHovered.value = false;
}

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
    grid-template-columns: repeat(4, 300px);  /* 4列布局 */
    grid-template-rows: 1fr, 1fr;     /* 1行布局 */
    gap: 10px;    /* 格子之间的间隔 */
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
}

.grid-item img {
  width: 40vw; /* 图片宽度为容器的40% */
  height: 40vh; /* 图片高度为容器的20% */
  object-fit: contain; /* 保持图片比例 */
}

.hover-zoom {
    transition: transform 0.3s ease-in-out;
    width: 40%; /* 响应式宽度 */
    height: auto;
    transform: scale(1);

}

.hover-zoom:hover {
    transform: scale(1.1); /* 放大效果 */
}

.item-description {
    text-align: center; /* 文字居中 */
    margin-top: 10px; /* 与图片的间距 */
}
</style>
