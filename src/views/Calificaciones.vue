<template>
  <div class="form-container">
    <h2>Cálculo de calificaciones</h2>
    <form @submit.prevent="calcular">
      <div class="form-group">
        <label for="nota1">Nota 1:</label>
        <input type="number" id="nota1" v-model="nota1" min="10" max="70" />
        <p v-if="errores.nota1" class="error">{{ errores.nota1 }}</p>
      </div>
      <div class="form-group">
        <label for="nota2">Nota 2:</label>
        <input type="number" id="nota2" v-model="nota2" min="10" max="70" />
        <p v-if="errores.nota2" class="error">{{ errores.nota2 }}</p>
      </div>
      <div class="form-group">
        <label for="nota3">Nota 3:</label>
        <input type="number" id="nota3" v-model="nota3" min="10" max="70" />
        <p v-if="errores.nota3" class="error">{{ errores.nota3 }}</p>
      </div>
      <div class="form-group">
        <label for="asistencia">Asistencia:</label>
        <input type="number" id="asistencia" v-model="asistencia" min="0" max="100" />
        <p v-if="errores.asistencia" class="error">{{ errores.asistencia }}</p>
      </div>
      <button type="submit">Calcular</button>
      <p v-if="resultado">{{ resultado }}</p>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nota1: null,
      nota2: null,
      nota3: null,
      asistencia: null,
      resultado: '',
      errores: {}
    };
  },
  methods: {
    validar() {
      this.errores = {};
      if (this.nota1 < 10 || this.nota1 > 70) {
        this.errores.nota1 = 'La nota 1 debe estar entre 10 y 70.';
      }
      if (this.nota2 < 10 || this.nota2 > 70) {
        this.errores.nota2 = 'La nota 2 debe estar entre 10 y 70.';
      }
      if (this.nota3 < 10 || this.nota3 > 70) {
        this.errores.nota3 = 'La nota 3 debe estar entre 10 y 70.';
      }
      if (this.asistencia < 0 || this.asistencia > 100) {
        this.errores.asistencia = 'La asistencia debe estar entre 0 y 100.';
      }
      return Object.keys(this.errores).length === 0;
    },
    calcular() {
      if (this.validar()) {
        let promedio = (this.nota1 * 0.35) + (this.nota2 * 0.35) + (this.nota3 * 0.30);
        if (promedio >= 40 && this.asistencia >= 80) {
          this.resultado = `Aprobado. Promedio: ${promedio.toFixed(2)}`;
        } else {
          this.resultado = 'Reprobado';
        }
      } else {
        this.resultado = '';
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
}
</style>
