<template>
    <div>
     <nav class="navbar navbar-top navbar-expand-md navbar-dark" id="navbar-main">
      <div class="container-fluid">
        <!-- Brand -->
        <h2 class="h4 mb-0 text-white text-uppercase d-none d-lg-inline-block">Inicio</h2>
        <!-- User -->
        <ul class="navbar-nav align-items-center d-none d-md-flex">
          <li class="nav-item dropdown">
            <a class="nav-link pr-0" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <div class="media align-items-center">
                <span class="avatar avatar-sm rounded-circle">
                  <img alt="Image placeholder" src="../../assets/img/theme/nina-adolescente.jpg">
                </span>
                <div class="media-body ml-2 d-none d-lg-block">
                  <span class="mb-0 text-sm  font-weight-bold">Diana Lopez</span>
                </div>
              </div>
            </a>
            <div class="dropdown-menu dropdown-menu-arrow dropdown-menu-right">
              <div class=" dropdown-header noti-title">
                <h6 class="text-overflow m-0">Bienvenido</h6>
              </div>
              <a href="./examples/profile.html" class="dropdown-item">
                <i class="ni ni-single-02"></i>
                <span>Mi perfil</span>
              </a>
              <a href="#!" class="dropdown-item">
                <i class="fas fa-sign-out-alt"></i>
                <span>Cerrar Sesión</span>
              </a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
