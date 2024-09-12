<template>
  <div class="form-container">
    <h2>Formulario de Registro</h2>
    <div class="form-group">
      <label for="nombre">Nombre:</label>
      <input
        id="nombre"
        type="text"
        v-model="nombre"
        @input="clearError('nombre')"
        placeholder="Ingrese su nombre"
      />
      <p v-if="errores.nombre" class="error">{{ errores.nombre }}</p>
    </div>
    <div class="form-group">
      <label for="correo">Correo Electrónico:</label>
      <input
        id="correo"
        type="email"
        v-model="correo"
        @input="clearError('correo')"
        placeholder="Ingrese su correo electrónico"
      />
      <p v-if="errores.correo" class="error">{{ errores.correo }}</p>
    </div>
    <div class="form-group">
      <label for="contrasena">Contraseña:</label>
      <input
        id="contrasena"
        type="password"
        v-model="contrasena"
        @input="clearError('contrasena')"
        placeholder="Ingrese su contraseña"
      />
    </div>
    <div class="form-group">
      <label for="repetirContrasena">Repetir Contraseña:</label>
      <input
        id="repetirContrasena"
        type="password"
        v-model="repetirContrasena"
        @input="clearError('repetirContrasena')"
        placeholder="Repita su contraseña"
      />
      <p v-if="errores.repetirContrasena" class="error">{{ errores.repetirContrasena }}</p>
    </div>
    <button @click="registrar">Registrar</button>
    <p v-if="registroMensaje">{{ registroMensaje }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nombre: '',
      correo: '',
      contrasena: '',
      repetirContrasena: '',
      registroMensaje: '',
      errores: {}
    };
  },
  methods: {
    validar() {
      this.errores = {};
      if (!this.nombre || /\d/.test(this.nombre) || /[\W_]/.test(this.nombre)) {
        this.errores.nombre = 'El nombre debe ser válido y no contener números ni signos.';
      }
      if (!this.validarCorreo(this.correo)) {
        this.errores.correo = 'El correo electrónico no es válido.';
      }
      if (this.contrasena !== this.repetirContrasena) {
        this.errores.repetirContrasena = 'Las contraseñas deben coincidir.';
      }
      return Object.keys(this.errores).length === 0;
    },
    validarCorreo(correo) {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(correo);
    },
    registrar() {
      if (this.validar()) {
        this.registroMensaje = 'Registro exitoso';
      } else {
        this.registroMensaje = '';
      }
    },
    clearError(field) {
      if (this.errores[field]) {
        this.errores[field] = '';
      }
    }
  }
};
</script>

<style>
.form-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #222;
  border-radius: 10px;
}

h2 {
  text-align: center;
  color: #fff;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  color: #fff;
  margin-bottom: 5px;
}

input {
  width: 100%;
  padding: 10px;
  border: 1px solid #333;
  border-radius: 5px;
  background-color: #444;
  color: #fff;
}

button {
  width: 100%;
  padding: 10px;
  background-color: #03a9f4;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #0288d1;
}

.error {
  color: #f44336;
  font-size: 0.875em;
  margin-top: 5px;
}
</style>
