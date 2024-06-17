<template>
    <div class="introduction">
        <h1>Full Stack Developer</h1>
        <h1>{{ animatedText1 }}</h1>
        <h1 class="green">{{ animatedText2 }}</h1>
        <h1>{{ animatedText3 }}</h1>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const text1 = "Hello! My name is";

const text2 = "Chunnan Yun";

const text3 = "I design and code beautifully simple things, and I love what I do."

const animatedText1 = ref("");
const animatedText2 = ref("");
const animatedText3 = ref("");

let index1 = 0;
let index2 = 0;
let index3 = 0;

const animateText = () => {
    
    if (index1 < text1.length) {
        animatedText1.value += text1[index1];
        index1++;
        setTimeout(animateText, 100);   // 每个字的显示间隔为100毫秒
    }
    else {
        animateText2();
    }
}

const animateText2 = () => {
    if (index2 < text2.length) {
        animatedText2.value += text2[index2];
        index2++;
        setTimeout(animateText2, 100);   // 每个字的显示间隔为100毫秒
    }
    else {
        animateText3();
    }
}

const animateText3 = () => {
    if (index3 < text3.length) {
        animatedText3.value += text3[index3];
        index3++;
        setTimeout(animateText3, 100);   // 每个字的显示间隔为100毫秒
    }
}

onMounted(() => {
    animateText();
});
</script>

<style scoped>

.introduction {
  font-family: "Roboto", Arial, Helvetica, sans-serif;
  font-size: 4em;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
}

.green {
    color: green;
}
</style>