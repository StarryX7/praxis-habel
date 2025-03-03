<template>
<div class="container">
  <h1 class="text-center mb-4">Gesundheits-Blog</h1>
  
  <!-- Kategorie-Filter -->
  <div class="row mb-4">
    <div class="col-12">
      <div class="category-filter d-flex flex-wrap justify-content-center">
        <button 
          v-for="(cat, index) in categories" 
          :key="index" 
          class="btn m-1" 
          :class="selectedCategory === cat ? 'btn-primary' : 'btn-outline-primary'"
          @click="filterByCategory(cat)"
        >
          {{ cat }}
        </button>
        <button 
          class="btn m-1" 
          :class="selectedCategory === null ? 'btn-primary' : 'btn-outline-primary'"
          @click="filterByCategory(null)"
        >
          Alle anzeigen
        </button>
      </div>
    </div>
  </div>
  
  <!-- Artikel Grid -->
  <div class="row">
    <!-- Bestehender Post -->
    <div class="col-lg-6 mb-4" v-if="showPost('Gesundheit')">
      <PostComponent 
        title="Die Übersäuerung des Körpers macht krank!"
        :content="posts.acid.content"
        :sourceList="posts.acid.sources"
        category="Gesundheit"
        date="12. Februar 2025"
      />
    </div>

    <!-- Präventiometer -->
    <div class="col-lg-6 mb-4" v-if="showPost('Gesundheitsvorsorge')">
      <PreventiometerComponent />
    </div>

    <!-- Alzheimer -->
    <div class="col-lg-6 mb-4" v-if="showPost('Gesundheit')">
      <AlzheimerComponent />
    </div>

    <!-- Histamin-Intoleranz -->
    <div class="col-lg-6 mb-4" v-if="showPost('Ernährung & Gesundheit')">
      <HistaminIntoleranceComponent />
    </div>

    <!-- Spermidin -->
    <div class="col-lg-6 mb-4" v-if="showPost('Gesundheit & Anti-Aging')">
      <SpermidinComponent />
    </div>

    <!-- Weihrauch -->
    <div class="col-lg-6 mb-4" v-if="showPost('Naturheilkunde')">
      <WeihrauschComponent />
    </div>

    <!-- ImuPro -->
    <div class="col-lg-6 mb-4" v-if="showPost('Diagnostik & Allergien')">
      <ImuProComponent />
    </div>

    <!-- Ubiquinol -->
    <div class="col-lg-6 mb-4" v-if="showPost('Long-Covid & Herzgesundheit')">
      <UbiquinolComponent />
    </div>

    <!-- Vitamin D -->
    <div class="col-lg-6 mb-4" v-if="showPost('Ernährung & Prävention')">
      <VitaminDComponent />
    </div>
  </div>

  <!-- Keine Ergebnisse Meldung -->
  <div class="row" v-if="filteredPostsCount === 0">
    <div class="col-12 text-center py-5">
      <h4>Keine Beiträge in dieser Kategorie gefunden.</h4>
      <button class="btn btn-primary mt-3" @click="filterByCategory(null)">
        Alle Beiträge anzeigen
      </button>
    </div>
  </div>
</div>
</template>

<script>
import PostComponent from "../components/PostComponent.vue";
import PreventiometerComponent from "../components/PreventiometerComponent.vue";
import AlzheimerComponent from "../components/AlzheimerComponent.vue";
import HistaminIntoleranceComponent from "../components/HistaminIntoleranceComponent.vue";
import SpermidinComponent from "../components/SpermidinComponent.vue";
import WeihrauschComponent from "../components/WeihrauschComponent.vue";
import ImuProComponent from "../components/ImuProComponent.vue";
import UbiquinolComponent from "../components/UbiquinolComponent.vue";
import VitaminDComponent from "../components/VitaminDComponent.vue";

export default {
  name: 'Postspage',
  components: {
    PostComponent,
    PreventiometerComponent,
    AlzheimerComponent,
    HistaminIntoleranceComponent,
    SpermidinComponent,
    WeihrauschComponent,
    ImuProComponent,
    UbiquinolComponent,
    VitaminDComponent
  },
  data() {
    return {
      // Kategoriefilter
      selectedCategory: null,
      
      // Kategorien für die Filter
      categories: [
        "Gesundheit",
        "Gesundheitsvorsorge",
        "Ernährung & Gesundheit",
        "Gesundheit & Anti-Aging",
        "Naturheilkunde",
        "Diagnostik & Allergien",
        "Long-Covid & Herzgesundheit",
        "Ernährung & Prävention"
      ],
      
      // Flag für Inhalte
      showAdditionalContent: true,
      
      // Bestehender Post in eine strukturierte Form gebracht
      posts: {
        acid: {
          content: `
    Wenn der Körper es nicht schafft, diese Säuren zu neutralisieren, weil sie im Übermaß durch den Verzehr
    denaturierter Nahrung gebildet werden, dann lagert er sie mit Fett ummantelt ein. So entsteht das leidliche
    Übergewicht. Außerdem schwächen Säuren die Vitalität unseres Körpers. Sie werden mir das bestätigen, wenn 
    sie es schaffen, eine Woche auf diese Produkte zu verzichten.
          `,
          sources: [
            { from: "Käse", to: "Salpetersäure" },
            { from: "Fleisch", to: "Harnsäure" },
            { from: "Fisch", to: "Harnsäure" },
            { from: "Zucker", to: "Essigsäure" },
            { from: "Schokolade", to: "Oxalsäure" },
            { from: "Weißmehl", to: "Essigsäure" },
            { from: "Margarine", to: "Essigsäure" },
            { from: "Getränke mit Kohlensäure", to: "Kohlensäure" },
            { from: "Softdrinks", to: "Phosphorsäure" },
            { from: "Rotwein, Kaffee, Schwarzer Tee", to: "Gerb- u. Salzsäure" },
            { from: "Stress, Angst, Ärger", to: "Salzsäure" },
            { from: "Schweinefleisch", to: "Schwefelsäure" },
            { from: "Gepökeltes Fleisch", to: "Salpetersäure" },
            { from: "Nicht abgelassene Blähungen", to: "Salpetersäure" },
            { from: "Antibiotika", to: "Salpetersäure" },
            { from: "Hormone (synthetisch)", to: "Salpetersäure" },
            { from: "Süßstoff", to: "Ameisensäure" },
            { from: "Schmerzmittel", to: "Acetylsalizylsäure" },
            { from: "Rauchen", to: "Nikotin" },
            { from: "Muskelkater", to: "Milchsäure" },
          ]
        }
      },
      
      // Zusätzliche Posts für zukünftige Erweiterungen
      additionalPosts: [
        {
          title: "Präventiometer: Umfassende Gesundheitsvorsorge",
          content: "",
          category: "Gesundheitsvorsorge",
          date: "3. März 2025"
        }
      ]
    };
  },
  computed: {
    filteredPostsCount() {
      if (!this.selectedCategory) return 9; // Anzahl aller Komponenten ohne PraxisInfo
      
      let count = 0;
      if (this.selectedCategory === "Gesundheit") count += 2; // Säure + Alzheimer
      if (this.selectedCategory === "Gesundheitsvorsorge") count += 1; // Präventiometer
      if (this.selectedCategory === "Ernährung & Gesundheit") count += 1; // Histamin
      if (this.selectedCategory === "Gesundheit & Anti-Aging") count += 1; // Spermidin
      if (this.selectedCategory === "Naturheilkunde") count += 1; // Weihrauch
      if (this.selectedCategory === "Diagnostik & Allergien") count += 1; // ImuPro
      if (this.selectedCategory === "Long-Covid & Herzgesundheit") count += 1; // Ubiquinol
      if (this.selectedCategory === "Ernährung & Prävention") count += 1; // Vitamin D
      
      return count;
    }
  },
  methods: {
    // Filter nach Kategorien
    filterByCategory(category) {
      this.selectedCategory = category;
    },
    
    // Hilfsmethode zum Anzeigen von Posts basierend auf Kategorie
    showPost(category) {
      return this.selectedCategory === null || this.selectedCategory === category;
    }
  }
};
</script>

<style scoped>
/* Komponenten-spezifische Stile */
.container {
  padding-top: 2rem;
  padding-bottom: 2rem;
}

.category-filter {
  margin-bottom: 2rem;
}

@media (max-width: 768px) {
  .category-filter .btn {
    font-size: 0.9rem;
    padding: 0.375rem 0.5rem;
  }
}
</style>