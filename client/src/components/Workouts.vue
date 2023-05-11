<template>
    <div>
        <h1>Workouts</h1>
        <WorkoutDisplay title="test" />
    </div>
</template>

<script>
import WorkoutDisplay from './WorkoutDisplay.vue'
export default {
  name: 'app',
  components: {
    WorkoutDisplay
  }
}
</script>