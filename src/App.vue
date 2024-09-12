<template>
  <div id="app">
    <header class="navbar">
      <div class="container">
        <div class="logo">
          <a href="/">Programación Frontend</a>
        </div>
        <nav>
          <router-link to="/calificaciones" class="nav-link">Cálculo de calificaciones</router-link>
          <router-link to="/registro" class="nav-link">Formulario de registro</router-link>
        </nav>
        <div class="search-bar">
          <input type="text" placeholder="Buscar...">
          <button>Buscar</button>
        </div>
      </div>
    </header>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style>
body {
  margin: 0;
  font-family: Arial, sans-serif;
  background-color: #111;
  color: #eee;
}

.navbar {
  background-color: #000;
  color: #fff;
  padding: 15px 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo a {
  font-size: 1.5em;
  color: #fff;
  text-decoration: none;
  font-weight: bold;
}

nav {
  display: flex;
}

.nav-link {
  margin: 0 15px;
  text-decoration: none;
  color: #fff;
  padding: 8px 15px;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.nav-link:hover {
  background-color: #333;
}

.search-bar {
  display: flex;
  align-items: center;
}

.search-bar input {
  padding: 8px;
  border: none;
  border-radius: 4px 0 0 4px;
  outline: none;
  color: #333;
}

.search-bar button {
  padding: 8px 12px;
  border: none;
  border-radius: 0 4px 4px 0;
  background-color: #03a9f4;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.search-bar button:hover {
  background-color: #0288d1;
}

main {
  padding: 20px;
}
</style>
