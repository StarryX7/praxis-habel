<template>
  <div class="card shadow-lg rounded-4">
    <div class="card-body">
      <h3 class="card-title text-primary">{{ title }}</h3>
      <p class="text-muted">Kategorie: {{ category }} | Veröffentlicht am: {{ date }}</p>
      
      <!-- Einleitung -->
      <div v-if="introduction" class="introduction mb-4">
        <p>{{ introduction }}</p>
      </div>

      <!-- Hauptinhalt -->
      <div class="histamine-content">
        <!-- Betroffene Bereiche -->
        <div class="affected-areas mb-4">
          <h4>Histamin-Intoleranz und betroffene Bereiche:</h4>
          
          <div v-for="(area, index) in affectedAreas" :key="'area-'+index" class="mb-4">
            <h5>{{ area.title }}:</h5>
            <ul class="list-unstyled">
              <li v-for="(symptom, sIndex) in area.symptoms" :key="'symptom-'+sIndex" class="mb-1">
                {{ symptom }}
              </li>
            </ul>
          </div>
        </div>

        <!-- Therapieoptionen -->
        <div class="therapy-options mb-4">
          <h4>Therapieoptionen bei einer Histamin-Intoleranz</h4>
          
          <div v-for="(option, index) in therapyOptions" :key="'therapy-'+index" class="mb-4">
            <h5>{{ index + 1 }}. {{ option.title }}</h5>
            <p>{{ option.description }}</p>
            
            <div v-if="option.foods && option.foods.length > 0">
              <h6 class="mt-3">{{ option.foodsTitle }}:</h6>
              <ul class="histamine-foods">
                <li v-for="(food, fIndex) in option.foods" :key="'food-'+fIndex">
                  {{ food }}
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Fazit -->
        <div v-if="conclusion" class="conclusion mt-4">
          <h4>Fazit:</h4>
          <p>{{ conclusion }}</p>
        </div>
      </div>

      <!-- Aktionsschaltflächen -->
      <div class="mt-4 d-flex justify-content-between">
        <button class="btn btn-outline-primary">Teilen</button>
        <button class="btn btn-outline-success" @click="toggleDetails">
          {{ showDetails ? 'Weniger anzeigen' : 'Mehr Details anzeigen' }}
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
      default: "Histamin-Intoleranz"
    },
    introduction: {
      type: String,
      default: null
    },
    category: {
      type: String,
      default: "Ernährung & Gesundheit"
    },
    date: {
      type: String,
      default: "3. März 2025"
    },
    conclusion: {
      type: String,
      default: null
    }
  },
  data() {
    return {
      showDetails: false,
      affectedAreas: [
        {
          title: "Haut",
          symptoms: [
            "Juckreiz",
            "Flush",
            "Hautrötungen",
            "Quaddelbildung",
            "Mastocytose",
            "Heftige Reaktion auf Insektenstiche"
          ]
        },
        {
          title: "Magen-Darm-Trakt",
          symptoms: [
            "Durchfall",
            "Weicher Stuhl",
            "Übelkeit, bis hin zu Erbrechen",
            "Bauchschmerzen",
            "Blähungen"
          ]
        },
        {
          title: "Herz-Kreislauf-System",
          symptoms: [
            "Niedriger Blutdruck",
            "Herzrhythmusstörungen",
            "Herzrasen"
          ]
        },
        {
          title: "Genitaltrakt",
          symptoms: [
            "Regelschmerzen"
          ]
        },
        {
          title: "Atmung",
          symptoms: [
            "Asthma bronchiale",
            "Rinnende oder verstopfte Nase"
          ]
        },
        {
          title: "Zentrales Nervensystem",
          symptoms: [
            "Kopfschmerzen",
            "Migräne",
            "Erschöpfung",
            "Müdigkeit",
            "Schwindel"
          ]
        }
      ],
      therapyOptions: [
        {
          title: "Meiden aller relevanten Nahrungsmittel",
          description: "Bis zur Besserung der Symptome – optimalerweise bis zur Beschwerdefreiheit – sollten Sie alle Nahrungsmittel meiden, die den Histamin-Spiegel anheben.",
          foodsTitle: "Besonders histaminreiche oder Histamin-freisetzende Lebensmittel sind",
          foods: [
            "Alkoholische Getränke",
            "Käse (gereifter Hartkäse wie Parmesan, Emmentaler, Gouda, Camembert, Bergkäse, Blauschimmelkäse)",
            "Wurstwaren (besonders geräucherter Schinken, Salami)",
            "Kakao und kakaohaltige Produkte (z. B. Schokolade)",
            "Rote Weintrauben",
            "Nüsse, insbesondere Cashew und Walnüsse",
            "Tomaten, Ketchup",
            "Hülsenfrüchte",
            "Erdbeeren, Bananen, Ananas, Kiwi",
            "Sauerkraut",
            "Spinat",
            "Weizenkeime",
            "Essig"
          ]
        }
      ]
    };
  },
  methods: {
    toggleDetails() {
      this.showDetails = !this.showDetails;
    }
  }
};
</script>

<style scoped>
.card {
  padding: 20px;
}

h3, h4, h5, h6 {
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

.introduction {
  font-size: 1.1rem;
  border-left: 4px solid #007bff;
  padding-left: 1rem;
  margin-bottom: 1.5rem;
}

.conclusion {
  background-color: #f8f9fa;
  padding: 1rem;
  border-radius: 0.5rem;
}

.histamine-foods {
  columns: 2;
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
  
  .histamine-foods {
    columns: 1;
  }
}
</style>