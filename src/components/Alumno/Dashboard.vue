<template>
    <div>
        <div class="main-content" style="margin-left:250px">
    <!-- Top navbar -->
    <nav class="navbar navbar-top navbar-expand-md navbar-dark" id="navbar-main">
      <div class="container-fluid">
        <!-- Brand -->
        <h2 class="h4 mb-0 text-white text-uppercase d-none d-lg-inline-block">Inicio</h2>
        <!-- Form -->
        <!-- <form class="navbar-search navbar-search-dark form-inline mr-3 d-none d-md-flex ml-lg-auto">
          <div class="form-group mb-0">
            <div class="input-group input-group-alternative">
              <div class="input-group-prepend">
                <span class="input-group-text"><i class="fas fa-search"></i></span>
              </div>
              <input class="form-control" placeholder="Search" type="text">
            </div>
          </div>
        </form> -->
        <!-- User -->
        <ul class="navbar-nav align-items-center d-none d-md-flex">
          <li class="nav-item dropdown">
            <a class="nav-link pr-0" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <div class="media align-items-center">
                <span class="avatar avatar-sm rounded-circle">
                  <img alt="Image placeholder" src="../../assets/img/theme/team-4-800x800.jpg">
                </span>
                <div class="media-body ml-2 d-none d-lg-block">
                  <span class="mb-0 text-sm  font-weight-bold">Andrés Carrillo</span>
                </div>
              </div>
            </a>
            <div class="dropdown-menu dropdown-menu-arrow dropdown-menu-right">
              <div class=" dropdown-header noti-title">
                <h6 class="text-overflow m-0">Welcome!</h6>
              </div>
              <a href="./examples/profile.html" class="dropdown-item">
                <i class="ni ni-single-02"></i>
                <span>My profile</span>
              </a>
              <a href="./examples/profile.html" class="dropdown-item">
                <i class="ni ni-settings-gear-65"></i>
                <span>Settings</span>
              </a>
              <a href="./examples/profile.html" class="dropdown-item">
                <i class="ni ni-calendar-grid-58"></i>
                <span>Activity</span>
              </a>
              <a href="./examples/profile.html" class="dropdown-item">
                <i class="ni ni-support-16"></i>
                <span>Support</span>
              </a>
              <div class="dropdown-divider"></div>
              <a href="#!" class="dropdown-item">
                <i class="ni ni-user-run"></i>
                <span>Logout</span>
              </a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
    <!-- Header -->
    <div class="header bg-gradient-primary pb-8 pt-5 pt-md-8">
      
    </div>
    <!-- Page content -->
    <div class="container-fluid mt--7">
      <div class="row">
        <div class="col-xl-7 mb-5 mb-xl-0">
          <div class="card shadow">
            <div class="card-header bg-transparent">
              <div class="row align-items-center">
                <div class="col">
                <div class="d-flex flex-row justify-content-between align-items-center">
                     <h2 class="mb-0">Información del Evento</h2>
                     <h3 class="mb-0">23 de Abril de 2019</h3>
                </div>
                 
                </div>
             
              </div>
            </div>
            <div class="card-body">
                <div class="d-flex flex-row justify-content-between">
                    <img src="../../assets/img/theme/dia-libro.jpg" style="border-radius:50%;" alt="Logo dia libro">
                    <div class="text-right">
                        <h3>Día del libro</h3>
                    <p>La institución Educativa Maria concepción Loperena invita a la jornada de la Mañana a celebrar el día del libro con la participación de la 9 edición del Cuento</p>

                    </div>
                </div>
            </div>
          </div>
        </div>
        <div class="col-xl-5">
          <div class="card shadow">
            <div class="card-header bg-transparent">
              <div class="row align-items-center">
                <div class="col">
                  
                      <h2 class="mb-0">Próximos Eventos</h2>
                  
                  

                </div>
              </div>
            </div>
            <div class="card-body">
                <div class="table-responsive">
  <table class="table align-items-center table-hover">
    <thead class="thead-light">
        <tr>
            <th scope="col" class="text-center">Nombre del Evento</th>
            
        </tr>
    </thead>
    <tbody>
        <tr>
            <th scope="row">
                  <div class="row">
                      <div class="col-md-4 text-center">
                        <i class="fas fa-book fa-2x"></i>
                      </div>
                      <div class="col-md-8 text-center">
                         <span class="mb-0 text-sm">Dia del Libro</span>
                       </div>
                  </div>
            </th>
           
            
     
        </tr>
        <tr>
            <th scope="row">

                 <div class="row">
                      <div class="col-md-4 text-center">
                        <i class="fas fa-address-card  fa-2x"></i>
                      </div>
                      <div class="col-md-8 text-center">
                         <span class="mb-0 text-sm">Jornada de Carnetización</span>
                       </div>
                  </div>
            </th>
          
        
        </tr>
        <tr>
            <th scope="row">
                  <div class="row">
                      <div class="col-md-4 text-center">
                        <i class="fas fa-medkit fa-2x"></i>
                      </div>
                      <div class="col-md-8 text-center">
                         <span class="mb-0 text-sm">Jornada de Salud</span> 
                      </div>
                  </div>
               
            </th>
          
        </tr>    
    </tbody>
  </table>
</div>
              
            </div>
          </div>
        </div>
      </div>
   
      <!-- Footer -->
      <footer class="footer">
        <div class="row align-items-center justify-content-xl-between">
          <div class="col-xl-6">
            <div class="copyright text-center text-xl-left text-muted">
              &copy; 2019 <a href="https://www.creative-tim.com" class="font-weight-bold ml-1" target="_blank">Creative Tim</a>
            </div>
          </div>
          <div class="col-xl-6">
            <ul class="nav nav-footer justify-content-center justify-content-xl-end">
              <li class="nav-item">
                <a href="https://www.creative-tim.com" class="nav-link" target="_blank">Creative Tim</a>
              </li>
              <li class="nav-item">
                <a href="https://www.creative-tim.com/presentation" class="nav-link" target="_blank">About Us</a>
              </li>
              <li class="nav-item">
                <a href="http://blog.creative-tim.com" class="nav-link" target="_blank">Blog</a>
              </li>
              <li class="nav-item">
                <a href="https://github.com/creativetimofficial/argon-dashboard/blob/master/LICENSE.md" class="nav-link" target="_blank">MIT License</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
