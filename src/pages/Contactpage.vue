vue
<template>
  <div class="container">
    <h1 class="text-center mb-5">Kontakt</h1>
    <div class="row justify-content-center mb-2">
      <div class="col-lg-8">
        <div class="card shadow-lg rounded-4">
          <div class="card-body">
            <div class="contact-info p-4">
              <h3 class="text-primary mb-4">Reinald Habel – Arzt für Integrative Medizin</h3>
              <div class="row mb-4">
                <div class="col-md-6">
                  <h4>Adresse</h4>
                  <p>Bauernstraße 36<br>31275 Immensen (Lehrte)</p>
                </div>
                <div class="col-md-6">
                  <h4>Versicherung</h4>
                  <p>Privat und Privatkassen</p>
                </div>
              </div>
              <div class="row mb-4">
                <div class="col-md-6">
                  <h4>Telefon</h4>
                  <p><a href="tel:01755628493" class="text-decoration-none">📞 0175 5628493</a></p>
                </div>
                <div class="col-md-6">
                  <h4>E-Mail</h4>
                  <p><a href="mailto:habelmed@aol.com" class="text-decoration-none">✉️ info@praxis-habel.de
                    </a></p>
                </div>
              </div>
              <div class="row mt-5">
                <div class="col-12">
                  <h4>Öffnungszeiten</h4>
                  <table class="table">
                    <tbody>
                      <tr>
                        <td>Montag - Freitag</td>
                        <td>Nach Vereinbarung</td>
                      </tr>
                      <tr>
                        <td>Sonntag</td>
                        <td>Geschlossen</td>
                      </tr>
                    </tbody>
                  </table>
                  <p class="text-muted mt-5"><small>Bitte vereinbaren Sie einen Termin.</small></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Contactpage'
}
</script>
<style scoped>
.container {
  padding-top: 2rem;
  padding-bottom: 2rem;
}

h3,
h4 {
  font-weight: bold;
}

h4 {
  color: #495057;
}

.contact-info h4 {
  margin-bottom: 0.5rem;
  color: #007bff;
}

.card {
  border: none;
}

@media (max-width: 768px) {
  .card {
    padding: 15px;
  }

  h3 {
    font-size: 1.5rem;
  }

  h4 {
    font-size: 1.25rem;
  }
}
</style>
