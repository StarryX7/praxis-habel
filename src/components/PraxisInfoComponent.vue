<template>
  <div class="card shadow-lg rounded-4">
    <div class="card-body">
      <h3 class="card-title text-primary">{{ title }}</h3>
      <p class="text-muted">Kategorie: {{ category }} | Veröffentlicht am: {{ date }}</p>
      
      <!-- Hauptinhalt -->
      <div class="practice-content">
        <!-- Einleitung -->
        <div class="mb-4 doctor-intro">
          <h4>{{ doctorName }} – {{ doctorTitle }}</h4>
          <p class="specializations">{{ specializations }}</p>
        </div>

        <!-- Tests und Diagnostik -->
        <div class="mb-4">
          <h4>HSI-Spagyrik/CEIA-Test</h4>
          <p>{{ hsiDescription }}</p>
          <p>{{ hsiAdvantage }}</p>
          
          <h5 class="mt-4">Das Biodynamische Eiweißprofil – CEIA</h5>
          <p>{{ ceiaDescription }}</p>
        </div>

        <!-- Nahrungsmittel-Immunprofil -->
        <div class="mb-4">
          <h4>Nahrungsmittel-Immunprofil Imu Pro 300</h4>
          <p>{{ imuproQuestion }}</p>
          <p>{{ imuproAnswer }}</p>
          
          <h5 class="mt-3">Symptome bei Nahrungsmittel-Unverträglichkeiten</h5>
          <ul class="list-unstyled">
            <li v-for="(symptom, index) in imuproSymptoms" :key="'symptom-'+index" class="mb-1">
              {{ symptom }}
            </li>
          </ul>
          <p>{{ imuproTestBenefit }}</p>
        </div>

        <!-- Vollblutanalyse -->
        <div class="mb-4">
          <h4>Vollblutanalyse</h4>
          <p>{{ bloodAnalysis }}</p>
        </div>

        <!-- Chelat-Therapie -->
        <div class="mb-4">
          <h4>Die Chelat-Therapie</h4>
          <p>Die Chelat-Therapie hilft bei:</p>
          
          <ul class="list-unstyled">
            <li v-for="(benefit, index) in chelatBenefits" :key="'benefit-'+index" class="mb-1">
              {{ benefit }}
            </li>
          </ul>
          
          <p>{{ chelatUsage }}</p>
          <p>{{ chelatGermany }}</p>
        </div>

        <!-- Diagnose- und Therapieverfahren -->
        <div class="mb-4">
          <h4>Diagnose- und Therapieverfahren:</h4>
          <div class="row">
            <div class="col-md-6">
              <ul class="list-unstyled">
                <li v-for="(procedure, index) in diagnosticProcedures.slice(0, Math.ceil(diagnosticProcedures.length/2))" :key="'proc1-'+index" class="mb-2">
                  {{ procedure }}
                </li>
              </ul>
            </div>
            <div class="col-md-6">
              <ul class="list-unstyled">
                <li v-for="(procedure, index) in diagnosticProcedures.slice(Math.ceil(diagnosticProcedures.length/2))" :key="'proc2-'+index" class="mb-2">
                  {{ procedure }}
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Kontakt -->
        <div class="contact-info p-3 bg-light rounded">
          <h4>Kontakt:</h4>
          <p><strong>{{ doctorName }}</strong> – {{ doctorTitle }}</p>
          <p>{{ address }}</p>
          <p>{{ insuranceInfo }}</p>
          <p>📞 {{ phone }}</p>
          <p>✉️ {{ email }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "Praxis für Integrative Medizin"
    },
    category: {
      type: String,
      default: "Praxisinformationen"
    },
    date: {
      type: String,
      default: "3. März 2025"
    },
    doctorName: {
      type: String,
      default: "Reinald Habel"
    },
    doctorTitle: {
      type: String,
      default: "Arzt für Integrative Medizin"
    },
    specializations: {
      type: String,
      default: "Akupunktur | Naturheilverfahren | Spagyrik | Homöopathie"
    }
  },
  data() {
    return {
      hsiDescription: "Kristallographie (Vollbluttest) und CEIA (Serum-Bluttest) gehen von der Vorstellung aus, dass im Blut eines Menschen wichtige Informationen über den Zustand des Organismus enthalten sind.",
      hsiAdvantage: "Die frühzeitige Erkennung krankheitsverursachender Prozesse ermöglicht es, bereits zu einem Zeitpunkt zu reagieren, an dem klassische Diagnosen noch unauffällige Ergebnisse liefern. Das HSI-Spagyrik ist ein modernes, ganzheitliches Verfahren zur Krankheitsdiagnostik und Therapie. Der Test kann wichtige Informationen über den Stoffwechsel, Durchblutungsstörungen oder Belastungen durch Umweltgifte liefern.",
      ceiaDescription: "Ein Verfahren zur Diagnostik von Stoffwechselstörungen. Es kann wertvolle Hinweise zur Früherkennung liefern.",
      imuproQuestion: "Gesunde Ernährung kann krank oder dick machen?",
      imuproAnswer: "Dies trifft zu bei Nahrungsmittel-Unverträglichkeiten. Der Körper reagiert mit Beschwerden auf ansonsten harmlose Nahrungsmittel.",
      imuproSymptoms: [
        "Müdigkeit",
        "Chronische Magen-Darm-Erkrankungen",
        "Hauterkrankungen",
        "Kopfschmerzen"
      ],
      imuproTestBenefit: "Ein Test des Blutes zur Ermittlung von Nahrungsmittel-Unverträglichkeiten ergibt eine Grundlage für eine effektive Ernährung ohne negative Folgen.",
      bloodAnalysis: "Individuelle Vollblutanalyse zur Ermittlung des persönlichen Vitamin- und Mineralstoffbedarfs inklusive Schadstoffanalyse.",
      chelatBenefits: [
        "Arteriosklerose (Gefäßverkalkung)",
        "Kalk-Ablagerungen im Körper",
        "Arthritis, Arthrose",
        "Diabetes"
      ],
      chelatUsage: "Sie wird seit Jahrzehnten weltweit praktiziert. In den USA behandeln über 1000 Ärzte mehr als 300.000 Patienten jährlich.",
      chelatGermany: "Die Chelat-Therapie ist eine bewährte Methode und wird in Deutschland als medizinische individuelle Heilbehandlung angewendet.",
      diagnosticProcedures: [
        "Klassische schulmed. Labor- und Diagnostikmethoden",
        "Chelat-Therapie",
        "Homöopathie / Spagyrik",
        "Biodynamisches Eiweißprofil",
        "Traditionelle chinesische Medizin / Akupunktur",
        "Schmerztherapie",
        "Sauerstoffmehrschritt-Therapie (HOT Ozon)",
        "Darmsanierung (Colon-Hydrotherapie)",
        "Haar- und Mineralstoffanalyse",
        "Ernährungsberatung / Gewichtsreduktion",
        "Adjuvante Krebstherapie",
        "Orthomolekulare Medizin"
      ],
      address: "Bauernstraße 36, 31275 Immensen (Lehrte)",
      insuranceInfo: "Privat und Privatkassen",
      phone: "0175 52 68 493",
      email: "habelmed@aol.com"
    };
  }
};
</script>

<style scoped>
.card {
  padding: 20px;
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

.contact-info {
  border-left: 4px solid #28a745;
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