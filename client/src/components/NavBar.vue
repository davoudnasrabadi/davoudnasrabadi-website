<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
   

    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">
    
      <a class="navbar-item" href="/">
           <router-link to="/">Home</router-link> 
      </a>

      <a class="navbar-item" href="/about">
        About me
      </a>

       <a class="navbar-item">
        Weblog (In persian)
      </a>

      <a class="navbar-item" href="/contact">
        Contact me
      </a>
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <a class="button is-primary">
            <strong>Sign up</strong>
          </a>
          <a class="button is-light">
            Log in
          </a>
        </div>
      </div>
    </div>
  </div>
</nav>
</template>

<script>
export default {
    
}
</script>

<style scoped>

</style>