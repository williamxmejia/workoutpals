<script setup>
const props = defineProps(['title'])

console.log(props.title)
</script>

<template>
    <div>
      <!-- <h1>Workouts</h1> -->
      <ul>
        <li v-for="(workout, x) in workouts" :key="x">
        <h3>{{workout.name}}</h3>
        <p>{{ workout.sets }} X {{ workout.reps }}</p>
        </li>
      </ul>
    </div>
  </template>
  <script>
  export default {
    name: 'Test',
    data (){
      return {
        workouts: [
         {name: "Bench Press", reps: '5', sets: '5'},
         {name: 'Should side lateral raises', reps: '10', sets: '4'},
         {name: 'Bicep Curls', reps: '10', sets: '4'},
         {name: 'Tricep Pushdowns', reps: '10', sets: '4'},
         {name: 'Pull Ups', reps: '10', sets: '4'},
        ]
      }
    }
  }
  </script>
  