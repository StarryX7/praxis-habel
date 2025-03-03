<template>
  <div class="container">
    <h1 class="text-center mb-4">Unsere Leistungen</h1>
    
    <div class="row">
      <div class="col-lg-12">
        <div class="card shadow-lg rounded-4 mb-4">
          <div class="card-body">
            <!-- Einleitung -->
            <div class="mb-4 doctor-intro">
              <h3 class="card-title text-primary">Praxis für Integrative Medizin</h3>
              <h4>Reinald Habel – Arzt für Integrative Medizin</h4>
              <p class="specializations">Akupunktur | Naturheilverfahren | Spagyrik | Homöopathie</p>
            </div>

            <!-- Tests und Diagnostik -->
            <div class="mb-4">
              <h4>HSI-Spagyrik/CEIA-Test</h4>
              <p>Kristallographie (Vollbluttest) und CEIA (Serum-Bluttest) gehen von der Vorstellung aus, dass im Blut eines Menschen wichtige Informationen über den Zustand des Organismus enthalten sind.</p>
              <p>Die frühzeitige Erkennung krankheitsverursachender Prozesse ermöglicht es, bereits zu einem Zeitpunkt zu reagieren, an dem klassische Diagnosen noch unauffällige Ergebnisse liefern. Das HSI-Spagyrik ist ein modernes, ganzheitliches Verfahren zur Krankheitsdiagnostik und Therapie. Der Test kann wichtige Informationen über den Stoffwechsel, Durchblutungsstörungen oder Belastungen durch Umweltgifte liefern.</p>
              
              <h5 class="mt-4">Das Biodynamische Eiweißprofil – CEIA</h5>
              <p>Ein Verfahren zur Diagnostik von Stoffwechselstörungen. Es kann wertvolle Hinweise zur Früherkennung liefern.</p>
            </div>

            <!-- Nahrungsmittel-Immunprofil -->
            <div class="mb-4">
              <h4>Nahrungsmittel-Immunprofil Imu Pro 300</h4>
              <p>Gesunde Ernährung kann krank oder dick machen?</p>
              <p>Dies trifft zu bei Nahrungsmittel-Unverträglichkeiten. Der Körper reagiert mit Beschwerden auf ansonsten harmlose Nahrungsmittel.</p>
              
              <h5 class="mt-3">Symptome bei Nahrungsmittel-Unverträglichkeiten</h5>
              <ul class="list-unstyled">
                <li class="mb-1">Müdigkeit</li>
                <li class="mb-1">Chronische Magen-Darm-Erkrankungen</li>
                <li class="mb-1">Hauterkrankungen</li>
                <li class="mb-1">Kopfschmerzen</li>
              </ul>
              <p>Ein Test des Blutes zur Ermittlung von Nahrungsmittel-Unverträglichkeiten ergibt eine Grundlage für eine effektive Ernährung ohne negative Folgen.</p>
            </div>

            <!-- Vollblutanalyse -->
            <div class="mb-4">
              <h4>Vollblutanalyse</h4>
              <p>Individuelle Vollblutanalyse zur Ermittlung des persönlichen Vitamin- und Mineralstoffbedarfs inklusive Schadstoffanalyse.</p>
            </div>

            <!-- Chelat-Therapie -->
            <div class="mb-4">
              <h4>Die Chelat-Therapie</h4>
              <p>Die Chelat-Therapie hilft bei:</p>
              
              <ul class="list-unstyled">
                <li class="mb-1">Arteriosklerose (Gefäßverkalkung)</li>
                <li class="mb-1">Kalk-Ablagerungen im Körper</li>
                <li class="mb-1">Arthritis, Arthrose</li>
                <li class="mb-1">Diabetes</li>
              </ul>
              
              <p>Sie wird seit Jahrzehnten weltweit praktiziert. In den USA behandeln über 1000 Ärzte mehr als 300.000 Patienten jährlich.</p>
              <p>Die Chelat-Therapie ist eine bewährte Methode und wird in Deutschland als medizinische individuelle Heilbehandlung angewendet.</p>
            </div>

            <!-- Diagnose- und Therapieverfahren -->
            <div class="mb-4">
              <h4>Diagnose- und Therapieverfahren:</h4>
              <div class="row">
                <div class="col-md-6">
                  <ul class="list-unstyled">
                    <li class="mb-2">Klassische schulmed. Labor- und Diagnostikmethoden</li>
                    <li class="mb-2">Chelat-Therapie</li>
                    <li class="mb-2">Homöopathie / Spagyrik</li>
                    <li class="mb-2">Biodynamisches Eiweißprofil</li>
                    <li class="mb-2">Traditionelle chinesische Medizin / Akupunktur</li>
                    <li class="mb-2">Schmerztherapie</li>
                  </ul>
                </div>
                <div class="col-md-6">
                  <ul class="list-unstyled">
                    <li class="mb-2">Sauerstoffmehrschritt-Therapie (HOT Ozon)</li>
                    <li class="mb-2">Darmsanierung (Colon-Hydrotherapie)</li>
                    <li class="mb-2">Haar- und Mineralstoffanalyse</li>
                    <li class="mb-2">Ernährungsberatung / Gewichtsreduktion</li>
                    <li class="mb-2">Adjuvante Krebstherapie</li>
                    <li class="mb-2">Orthomolekulare Medizin</li>
                  </ul>
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
  name: 'Servicespage'
}
</script>

<style scoped>
.container {
  padding-top: 2rem;
  padding-bottom: 2rem;
}

h3, h4, h5 {
  font-weight: bold;
}

h3 {
  margin-bottom: 1rem;
}

h4 {
  color: #495057;
  margin-top: 1.5rem;
  margin-bottom: 1rem;
}

h5 {
  color: #6c757d;
  font-size: 1.1rem;
}

.doctor-intro {
  border-left: 4px solid #007bff;
  padding-left: 1rem;
}

.specializations {
  font-style: italic;
  color: #6c757d;
}

.card {
  padding: 20px;
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