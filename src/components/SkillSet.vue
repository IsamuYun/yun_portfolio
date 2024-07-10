<template>
    <div class="skill-container">
        <div class="skill-title-1">Coding Skill</div>
        <div class="skill-title-1">Front-End</div>
        <div class="skill-grid-container">
            <div class="skill-item">
                <img src="../assets/icons/web-development-set.png" alt="Web Development Set" />
                <p class="skill-description">HTML5 / CSS3 / JS</p>
            </div>
            <div class="skill-item">
                <img src="../assets/icons/vue-js.png" alt="Vue.js" />
                <p class="skill-description">Vue</p>
            </div>
            <div class="skill-item">
                <img src="../assets/icons/react-native.png" alt="React Native" />
                <p class="skill-description">React</p>
            </div>
            <div class="skill-item">
                <img src="../assets/icons/drupal.png" alt="Drupal" />
                <p class="skill-description">Drupal</p>
            </div>
            <div class="skill-item">
                <img src="../assets/icons/ios.png" alt="iOS" />
                <p class="skill-description">iOS</p>
            </div>
            <div class="skill-item">
                <img src="../assets/icons/android-studio.png" alt="Android" />
                <p class="skill-description">Android</p>
            </div>
        </div>
        <div class="skill-title-1">Back-End</div>
        <div class="skill-grid-container">
            <div class="skill-item">
                <img src="../assets/icons/python.png" alt="Python" />
                <p class="skill-description">Python</p>
            </div>
            <div class="skill-item">
                <img src="../assets/icons/java.png" alt="Java" />
                <p class="skill-description">Java</p>
            </div>
            <div class="skill-item">
                <img src="../assets/icons/node-js-docker.png" alt="Node.js" />
                <p class="skill-description">Node.js</p>
            </div>
            <div class="skill-item">
                <img src="../assets/icons/php.png" alt="PHP" />
                <p class="skill-description">PHP</p>
            </div>
            <div class="skill-item">
                <img src="../assets/icons/c-sharp.png" alt="C#" />
                <p class="skill-description">C#</p>
            </div>
            <div class="skill-item">
                <img src="../assets/icons/c++.png" alt="C++" />
                <p class="skill-description">C++</p>
            </div>
            <div class="skill-item">
                <img src="../assets/icons/flask.png" alt="Flask" />
                <p class="skill-description">Flask</p>
            </div>
            <div class="skill-item">
                <img src="../assets/icons/mysql-database.png" alt="MySQL" />
                <p class="skill-description">MySQL</p>
            </div>
            <div class="skill-item">
                <img src="../assets/icons/nginx.png" alt="Nginx" />
                <p class="skill-description">Nginx</p>
            </div>
            <div class="skill-item">
                <img src="../assets/icons/bash.png" alt="VMS" />
                <p class="skill-description">VMS</p>
            </div>
        </div>
        
            
        
    </div>
</template>


<style scoped>
.skill-container {

    font-family: "Roboto", Arial, Helvetica, sans-serif;
    font-size: 16px;
    font-weight: bold;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 16px;
}

.skill-title-1 {
    display: inline-block;
    text-align: center;
    height: 32px;
    width: 1200px;
}

.skill-title-2 {
    font-size: 14px;
    display: inline-block;
    text-align: center;
    height: 32px;
    width: 1200px;
}


.skill-grid-container {
    width: 1200px;
    display: grid;
    grid-template-columns: repeat(6, 160px);  /* 4列布局 */
    grid-template-rows: auto;
    gap: 12px;    /* 格子之间的间隔 */
    justify-content: center; 
    align-items: center;
}

.skill-item {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.skill-item img {
    width: 64px;
    height: 64px;    
    object-fit: contain; /* 保持图片比例 */
    border-radius: 6px;
    border: 1px solid rgba(0, 0, 0, 0.8);
}

.skill-description {
    text-align: center; /* 文字居中 */
    margin-top: 12px; /* 与图片的间距 */
    font-size: 14px;
    font-weight: bold;
    width: 100%;
}
</style>
