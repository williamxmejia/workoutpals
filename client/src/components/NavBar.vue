<template>
    <div>
        <ul class="nav-list">
            <router-link to="/"><li class="nav-item">Home</li></router-link>
            <router-link to="/profile"><li class="nav-item">Profile</li></router-link>
            <router-link to="/workouts"><li class="nav-item">Workouts</li></router-link>
            <router-link to="lifestyle"><li class="nav-item">Life style</li></router-link>
        </ul>
    </div>
</template>

<style scoped>
    .nav-list {
        display: flex;
        list-style: none;

        justify-content: center;
        /* margin: 20px; */
    }

    .nav-item {
        margin: 20px;
    }
</style>