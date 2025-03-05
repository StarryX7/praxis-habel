<template>
  <div class="card shadow-lg rounded-4">
    <div class="card-body">
      <h3 class="card-title text-primary">{{ title }}</h3>
      <p class="text-muted">Kategorie: {{ category }} | Veröffentlicht am: {{ date }}</p>

      <!-- Einleitung -->
      <div class="mb-4">
        <h4>{{ personName }}</h4>
        <p>{{ introduction }}</p>
      </div>

      <!-- Untersuchungsprozess -->
      <div class="mb-4">
        <h4>Untersuchungsprozess und Messungen</h4>
        <ul class="list-unstyled">
          <li v-for="(item, index) in processSteps" :key="'process-' + index" class="mb-2">
            {{ item }}
          </li>
        </ul>
      </div>

      <!-- Weitere Tests -->
      <div class="mb-4">
        <h4>Weitere Tests im Programm</h4>
        <ul class="list-unstyled">
          <li v-for="(item, index) in additionalTests" :key="'test-' + index" class="mb-2">
            {{ item }}
          </li>
        </ul>
      </div>

      <!-- Arztgespräch -->
      <div class="mb-4">
        <h4>Arztgespräch – und alles bleibt vertraulich</h4>
        <p>{{ doctorConsultation }}</p>
      </div>

      <!-- Zusatzangebote -->
      <div class="mb-4">
        <h4>Zusätzliche Angebote</h4>
        <ul class="list-unstyled">
          <li v-for="(item, index) in additionalServices" :key="'service-' + index" class="mb-2">
            {{ item }}
          </li>
        </ul>
        <p>{{ conclusion }}</p>
      </div>

      <!-- Leistungsspektrum -->
      <div class="mb-4">
        <h4>Leistungsspektrum eines Präventiometers</h4>
        <ul class="list-group mt-3">
          <li v-for="(item, index) in serviceSpectrum" :key="'spectrum-' + index" class="list-group-item">
            <span class="text-success me-2">✅</span> {{ item }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "Präventiometer: Umfassende Gesundheitsvorsorge"
    },
    category: {
      type: String,
      default: "Gesundheitsvorsorge"
    },
    date: {
      type: String,
      default: "3. März 2025"
    },
    personName: {
      type: String,
      default: "Celina Vogt"
    },
    introduction: {
      type: String,
      default: "Celina Vogt, eine der systemischen Präventionscoaches, hat bereits Körperumfang sowie Puls gemessen und die Körpergröße erfragt. Danach geht fast alles automatisch, der Teilnehmer muss nur mittels zweier Knöpfe die Messungen bestätigen oder eine neue Etappe einleiten."
    },
    processSteps: {
      type: Array,
      default: () => [
        "Gewicht inkl. Körperfettgehalt wird ermittelt.",
        "Körperkerntemperatur sowie Sauerstoffsättigung im Blut werden schmerzfrei gemessen.",
        "Die Blutanalyse erfolgt durch eine kleine Kanüle mit einem Gerät, sodass das Ergebnis nach wenigen Tagen vorliegt."
      ]
    },
    additionalTests: {
      type: Array,
      default: () => [
        "Sehtest und Hörtest",
        "Venöse Fotoplethysmografie (Messung der Venendurchlässigkeit)",
        "Messung der Herz-Raten-Variabilität (HRV) zur Stressanalyse"
      ]
    },
    doctorConsultation: {
      type: String,
      default: "Alle Untersuchungsergebnisse werden in einem persönlichen Gespräch mit dem Arzt besprochen. Der Arzt erstellt einen Überblick über die Blutwerte sowie eine Bewertung von Normal- bis Risikowerten."
    },
    additionalServices: {
      type: Array,
      default: () => [
        "Balance-Programme für Muskelentspannung",
        "Coaching und Gesundheitsberatung"
      ]
    },
    conclusion: {
      type: String,
      default: "Daraus kann Celina Vogt den Check-up-Bericht für den Arbeitgeber erstellen. Die Ergebnisse können anonym oder auf Wunsch mit dem Mitarbeiter persönlich besprochen werden."
    },
    serviceSpectrum: {
      type: Array,
      default: () => [
        "Urinuntersuchung",
        "Blutentnahme",
        "Blutanalyse",
        "Ruhe-EKG",
        "Lungenfunktion",
        "Ultraschall Schilddrüse",
        "Ultraschall Carotis",
        "PSA-Test",
        "Bewegungsapparat",
        "Körperfettmessung (BMI / Gewicht / Körpergröße / Blutdruck)",
        "Metabolischer Test",
        "Hörtest",
        "Sehtest",
        "Knochendichte",
        "Venentest",
        "Ausdruck der Ergebnisse"
      ]
    }
  }
};
</script>

<style scoped>
.card {
  padding: 20px;
}

h3,
h4 {
  font-weight: bold;
}

h4 {
  color: #495057;
  margin-top: 1.5rem;
  margin-bottom: 1rem;
}

.list-group-item {
  border-left: none;
  border-right: none;
}
</style>