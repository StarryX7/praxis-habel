<template>
  <div class="card shadow-lg rounded-4">
    <div class="card-body">
      <h3 class="card-title text-primary">{{ title }}</h3>
      <p class="text-muted">Kategorie: {{ category }} | Veröffentlicht am: {{ date }}</p>

      <!-- Hauptinhalt -->
      <div class="ubiquinol-content">
        <!-- Long-Covid-Herz -->
        <div class="mb-4">
          <h4>Long-Covid-Herz</h4>
          <p>{{ longCovidIntro }}</p>

          <div class="statistics mb-3">
            <p>{{ statisticsText }}</p>
            <ul class="list-unstyled">
              <li v-for="(symptom, index) in symptoms" :key="'symptom-' + index" class="mb-2">
                {{ symptom }}
              </li>
            </ul>
          </div>

          <p>{{ workImpact }}</p>
        </div>

        <!-- Q10 als Unterstützung -->
        <div class="mb-4">
          <h4>Q10 als Unterstützung bei Long-Covid</h4>
          <p>{{ q10Support }}</p>
          <p>{{ q10Benefits }}</p>
        </div>

        <!-- Wissenschaftliche Erkenntnisse -->
        <div class="mb-4">
          <h4>Wissenschaftliche Erkenntnisse zu Q10</h4>
          <p>{{ scientificFindings }}</p>

          <div class="study-results mt-3">
            <p>{{ studyIntro }}</p>
            <ul class="list-unstyled">
              <li v-for="(result, index) in studyResults" :key="'result-' + index" class="mb-2">
                {{ result }}
              </li>
            </ul>
          </div>

          <p>{{ nyhaConfirmation }}</p>
        </div>

        <!-- Long-Covid-Herz – Fortsetzung -->
        <div v-if="showMoreInfo" class="mb-4">
          <h4>Long-Covid-Herz – Fortsetzung</h4>
          <p>{{ continuationResults }}</p>
          <p>{{ ubiquinolRecommendation }}</p>
          <p>{{ treatmentDuration }}</p>
        </div>

        <!-- Empfohlene Dosierung -->
        <div v-if="showMoreInfo" class="mb-4">
          <h4>Empfohlene Dosierung und Angebot</h4>
          <p>{{ dosageOffer }}</p>
          <p>{{ optimalSupply }}</p>

          <div class="scientific-sources mt-4">
            <h5>Zusätzliche wissenschaftliche Quellen:</h5>
            <div class="mt-4 d-flex justify-content-end">
              <button class="btn btn-outline-success" @click="toggleDetails">
                {{ showDetails ? 'Weniger anzeigen' : 'Mehr Details anzeigen' }}
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Aktionsschaltflächen -->
      <div class="mt-4 d-flex justify-content-between">
        <button class="btn btn-outline-success" @click="toggleMoreInfo">
          {{ showMoreInfo ? 'Weniger anzeigen' : 'Mehr Informationen' }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "Ubiquinol / Coenzym Q10"
    },
    category: {
      type: String,
      default: "Long-Covid & Herzgesundheit"
    },
    date: {
      type: String,
      default: "3. März 2025"
    }
  },
  data() {
    return {
      showMoreInfo: false,
      longCovidIntro: "Mindestens 10% aller nach einer SARS-CoV-2-Infektion Erkrankten leiden an diversen anhaltenden oder neu auftretenden gesundheitlichen Beschwerden. Statistisch sind diese Personen genesen, sind tatsächlich jedoch chronisch krank.",
      statisticsText: "Betroffene leiden unter:",
      symptoms: [
        "Extremer Kraftlosigkeit, permanenter Müdigkeit und Antriebslosigkeit.",
        "Ihr Alltag ist dadurch stark eingeschränkt.",
        "Selbst \"normale\" körperliche Aktivitäten wie Kochen, Duschen oder Telefonieren werden oft als kaum durchführbar empfunden."
      ],
      workImpact: "Vielen Erkrankten fällt es schwer, ihre Arbeit gut zu bewältigen oder sind dauerhaft arbeitsunfähig.",
      q10Support: "Studien deuten darauf hin, dass Q10 aufgrund seiner antioxidativen Eigenschaften und seiner Rolle bei der Energieproduktion bei der Behandlung von Long- und Post-COVID-Symptomen wirksam sein kann.",
      q10Benefits: "Eine erhöhte Zufuhr des Coenzyms könnte beispielsweise helfen, Müdigkeit und Muskelschwäche zu reduzieren, indem es die Energieproduktion in den Mitochondrien unterstützt und Schäden durch freie Radikale reduziert.",
      scientificFindings: "Bei dem chronischen Erschöpfungssyndrom zeigt sich nachweislich ein Abfall des Q10-Spiegels.",
      studyIntro: "In einer Studie mit 207 Patienten führte eine Gabe von 200 mg Q10 über einen Zeitraum von 12 Wochen zu:",
      studyResults: [
        "Einer Verringerung der mentalen Erschöpfung und allgemeinen Ermüdungswahrnehmung",
        "Einer Verbesserung der Lebens- und Schlafqualität"
      ],
      nyhaConfirmation: "Was verschiedene Studien bereits bestätigt haben, so bestätigt auch die NYHA (New York Heart Association), dass es durch die Einnahme von mehr als 300 mg Q10 täglich zu einem signifikanten Anstieg des Q10-Plasmaspiegels von durchschnittlich 1,6 auf 6,5 µg/ml kommt.",
      continuationResults: "Die gesundheitliche Situation der Patienten verbesserte sich spektakulär (von NYHA Klasse IV auf Klasse II*) mit signifikanter Verbesserung der Pumpfunktion des Herzens und Anstieg der Ejektionsfraktion von 22 auf 39%.",
      ubiquinolRecommendation: "Es empfiehlt sich, Ubiquinol als Q10 einzunehmen, da es sich um die umgewandelte Form des Coenzyms Q10 handelt. Die hochakive Form von Ubiquinol / Coenzym Q10 wird sofort vom Organismus aufgenommen.",
      treatmentDuration: "Studienergebnisse deuten darauf hin, dass es etwa 2-3 Monate dauert, bis die gezielte Coenzym Q10-Zufuhr bei chronisch erkrankten Patienten und Coenzym Q10-Mangel wirksam wird.",
      dosageOffer: "Um Sie in Ihrer Gesundheitsfürsorge zu unterstützen, bieten wir Ihnen 3x 90 Kapseln Ubiquinol / Coenzym Q10 zu einem Preis von 2 Dosen an.",
      optimalSupply: "So können Sie Ihren Körper täglich optimal mit 300 mg Ubiquinol / Coenzym Q10 versorgen.",
      nyhaExplanation: "* Die NYHA-Klassifikation ist ein ursprünglich von der New York Heart Association veröffentlichtes Schema zur Einteilung von Herzkrankheiten nach ihrem Schweregrad.",
      scientificSources: [
        "Anna Di Lorenzo et al.: Klinische Evidenz für eine Q10-Coenzym-Supplementation bei Herzinsuffizienz: Von der Energetik zur Funktionsverbesserung. Journal of Clinical Medicine 2020.",
        "Q-Symbio-Studie, Prof. Dr. med. Svend Aage Mortensen (2019) Bestätigung durch eine Follow-up-Studie."
      ]
    };
  },
  methods: {
    toggleMoreInfo() {
      this.showMoreInfo = !this.showMoreInfo;
    }
  }
};
</script>

<style scoped>
.card {
  padding: 20px;
}

h3,
h4,
h5 {
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
  font-size: 1.1rem;
  margin-top: 1rem;
}

.statistics,
.study-results {
  background-color: #f8f9fa;
  padding: 1rem;
  border-radius: 0.5rem;
}

.scientific-sources {
  border-top: 1px solid #e9ecef;
  padding-top: 1rem;
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