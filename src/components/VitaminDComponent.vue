<template>
  <div class="card shadow-lg rounded-4">
    <div class="card-body">
      <h3 class="card-title text-primary">{{ title }}</h3>
      <p class="text-muted">Kategorie: {{ category }} | Veröffentlicht am: {{ date }}</p>
      
      <!-- Hauptinhalt -->
      <div class="vitamin-d-content">
        <!-- Einleitung -->
        <div class="mb-4">
          <p class="lead">{{ introduction }}</p>
        </div>

        <!-- Symptome bei Mangel -->
        <div class="mb-4">
          <p>{{ symptomsIntro }}</p>
          <div class="bg-light p-3 rounded">
            <p>{{ improvementPossibility }}</p>
          </div>
        </div>

        <!-- Risiken bei langfristigem Mangel -->
        <div class="mb-4">
          <p>{{ longTermRiskIntro }}</p>
          <ul class="list-unstyled">
            <li v-for="(risk, index) in longTermRisks" :key="'risk-'+index" class="mb-2">
              {{ risk }}
            </li>
          </ul>
          <p>{{ preventionAdvice }}</p>
        </div>
      </div>

      <!-- Aktionsschaltflächen -->
      <div class="mt-4 d-flex justify-content-between">
        <button class="btn btn-outline-success">Mehr erfahren</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "Vitamin-D-Mangel ist Ursache vieler Erkrankungen"
    },
    category: {
      type: String,
      default: "Ernährung & Prävention"
    },
    date: {
      type: String,
      default: "3. März 2025"
    }
  },
  data() {
    return {
      introduction: "Vitamin-D-Mangel ist Ursache vieler Erkrankungen und weit verbreitet.",
      symptomsIntro: "Starker Mangel kann zu Krämpfen, Muskelzucken und Muskelschmerzen führen, zu Unruhe, Schlafstörungen und Depression, zu Erschöpfung, Schwäche, Rücken- und Kopfschmerzen, Kältegefühl in Händen und Füßen sowie Kreislauf- und Durchblutungsstörungen.",
      improvementPossibility: "Bei all diesen Beschwerden und Erkrankungen ist oft eine schnelle Besserung und dauerhafte Heilung möglich.",
      longTermRiskIntro: "Bleibt der Vitamin-D-Mangel lange Zeit bestehen, erhöht sich das Risiko für:",
      longTermRisks: [
        "Bluthochdruck",
        "Diabetes",
        "Osteoporose",
        "Autoimmunerkrankungen",
        "Multiple Sklerose",
        "Krebs"
      ],
      preventionAdvice: "Um dies zu vermeiden, ist ein optimaler Vitamin-D-Spiegel ganzjährig anzustreben."
    };
  }
};
</script>

<style scoped>
.card {
  padding: 20px;
}

h3 {
  font-weight: bold;
  margin-bottom: 1rem;
}

.lead {
  font-size: 1.1rem;
  font-weight: 400;
  border-left: 4px solid #007bff;
  padding-left: 1rem;
}

@media (max-width: 768px) {
  .card {
    padding: 15px;
  }
  
  h3 {
    font-size: 1.5rem;
  }
}
</style>