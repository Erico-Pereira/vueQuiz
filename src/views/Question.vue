<script setup>

import {useRoute,RouterLink, useRouter} from "vue-router"
import {ref, watch, computed} from "vue"
import questions from "../data/quizes.json"
import questionOpiton from "../components/QuestionOption.vue"
import questionHeader from "../components/QuestionHeader.vue"
import Result from "../components/Result.vue"

const route = useRoute()
const router = useRouter()

const currentQuestionIndex = ref(0)
const numberOfCorrectAnswers = ref(0)
const showResult = ref(false)

// const questionStatus = ref(`${currentQuestionIndex.value}/${question.questions.length}`)

// watch(function(){return currentQuestionIndex.value}, function(){ return questionStatus.value = `${currentQuestionIndex.value}/${question.questions.length}` } )

const question = questions.find(function(questions){ return questions.id == parseInt(route.params.id)})


const questionStatus = computed( function() {
    return `${currentQuestionIndex.value}/${question.questions.length}`
 })

 const barPercentege = computed( function() {
    return `${currentQuestionIndex.value/question.questions.length * 100}%`
 })

 

 function onOptionSelect(isCorrect){
    if(isCorrect){
        numberOfCorrectAnswers.value++;
    }
    if(currentQuestionIndex.value == question.questions.length -1){
        showResult.value = true
    }
    currentQuestionIndex.value++;
    
 }

</script>

<template>
    <div>
            <questionHeader :questionStatus = "questionStatus" :barPercentege = "barPercentege"/>
        <div>
            <questionOpiton v-if="!showResult" @selectOption="onOptionSelect" :question="question.questions[currentQuestionIndex]"/>
            
            <Result v-else :numberOfCorrectAnswers="numberOfCorrectAnswers" :questionLenth="question.questions.length"/>
        </div>
        
    </div>
</template>


