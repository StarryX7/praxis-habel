<template>
    <div class="container mt-5">
      <h1 class="text-center mb-4">Gesundheitsbeiträge</h1>
      
      <div class="row justify-content-center">
        <div class="col-md-8">
          <PostComponent 
            title="Die Übersäuerung des Körpers macht krank!"
            :content="acidContent"
            :sourceList="sources"
            category="Gesundheit"
            date="12. Februar 2025"
          />
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import PostComponent from "../components/PostComponent.vue";
  
  export default {
    components: {
      PostComponent,
    },
    data() {
      return {
        acidContent: `
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
      };
    }
  };
  </script>
  
  <style scoped>
  h1 {
    font-weight: bold;
  }
  </style>
  