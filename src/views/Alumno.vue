<template>
    <div>
      <sidebar-Alumno></sidebar-Alumno>
      <dashboard-alumno></dashboard-alumno>
    </div>
</template>

<script>

import sidebarAlumno from '../components/Alumno/Sidebar.vue'
import dashboardAlumno from '../components/Alumno/Dashboard.vue'
export default {

    components: {
        sidebarAlumno,
        dashboardAlumno
    }

}
</script>

<style>

</style>
