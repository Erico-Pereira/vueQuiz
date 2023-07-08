<script setup>
    import { defineProps } from 'vue';
    import { RouterLink } from 'vue-router';


    const {numberOfCorrectAnswers, questionLenth } = defineProps(["numberOfCorrectAnswers","questionLenth" ])

</script>


<template>
    <div class="results">
        <p>Your Results...</p>
        <h1>
            {{numberOfCorrectAnswers}}/{{ questionLenth }}
        </h1>
    </div>

    <RouterLink to="/"> Go Back</RouterLink>
</template>

<style scoped>
 

    .results{
        text-align: center;
        padding:100px 0
    
    }

    p{
        font-size: 25px;
    }
    h1{
        font-size: 80px;
    }


</style>