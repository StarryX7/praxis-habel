<template>
  <div class="card shadow-lg rounded-4">
    <div class="card-body">
      <h3 class="card-title text-primary">{{ title }}</h3>
      <p class="text-muted">Kategorie: {{ category }} | Veröffentlicht am: {{ date }}</p>
      
      <!-- Inhaltsverzeichnis -->
      <div class="table-of-contents mb-4">
        <h4>Inhaltsverzeichnis</h4>
        <ol class="toc-list">
          <li v-for="(section, index) in tableOfContents" :key="'toc-'+index">
            <a href="#" @click.prevent="scrollToSection(section.id)">{{ section.title }}</a>
          </li>
        </ol>
      </div>

      <!-- Einleitung -->
      <div id="introduction" class="mb-4">
        <p>{{ introduction }}</p>
      </div>

      <!-- Hauptinhalt -->
      <div class="frankincense-content">
        <!-- Weihrauch als Kulturgut -->
        <div id="culture" class="mb-4">
          <h4>Weihrauch als Kulturgut</h4>
          
          <h5>In Religion ...</h5>
          <p>{{ cultureReligion }}</p>
          
          <h5>Weihrauch in der traditionellen Medizin</h5>
          <p>{{ cultureTraditionalMedicine }}</p>
          <ul class="list-unstyled">
            <li v-for="(use, index) in traditionalUses" :key="'use-'+index" class="mb-1">
              {{ use }}
            </li>
          </ul>
        </div>

        <!-- Neues Interesse an Weihrauch als Heilpflanze -->
        <div id="new-interest" class="mb-4">
          <h4>Neues Interesse an Weihrauch als Heilmittel</h4>
          <p>{{ newInterest }}</p>
        </div>

        <!-- Wie wirkt Weihrauch -->
        <div v-if="showDetails" id="how-it-works" class="mb-4">
          <h4>Wie wirkt Weihrauch</h4>
          <p>{{ howItWorks }}</p>
        </div>

        <!-- Anwendungsbereiche -->
        <div v-if="showDetails" id="applications" class="mb-4">
          <h4>Anwendungsbereiche für Weihrauch-Extrakt</h4>
          <p>{{ applications }}</p>
        </div>

        <!-- Dosierung -->
        <div v-if="showDetails" id="dosage" class="mb-4">
          <h4>Dosierung</h4>
          <p>{{ dosage }}</p>
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
      default: "Weihrauch – ein natürliches Heilmittel bei chronischen Entzündungen"
    },
    category: {
      type: String,
      default: "Naturheilkunde"
    },
    date: {
      type: String,
      default: "3. März 2025"
    }
  },
  data() {
    return {
      showDetails: false,
      tableOfContents: [
        { id: "culture", title: "Weihrauch als Kulturgut" },
        { id: "new-interest", title: "Neues Interesse an Weihrauch als Heilpflanze" },
        { id: "how-it-works", title: "Wie wirkt Weihrauch" },
        { id: "applications", title: "Anwendungsbereiche für Weihrauch-Extrakt" },
        { id: "dosage", title: "Dosierung" }
      ],
      introduction: "Großes Interesse haben kürzliche Medienberichte über den therapeutischen Einsatz von Weihrauch bei der Behandlung von chronischen Entzündungen ausgelöst. \"Was ist dran am Weihrauch?\", fragen verständlicherweise vor allem die von solchen Leiden Betroffenen. Über die erstaunlich lange Tradition des \"heiligen Harzes\" in der indischen Heilkunde, neue Forschungsergebnisse und Erfahrungen in der Anwendung sowie über den gegenwärtigen Stand der Diskussion informiert der folgende Bericht.",
      cultureReligion: "Mit dem Wort \"Weihrauch\" verbinden wir gewöhnlich die Vorstellung einer prächtigen katholischen Messe, Priester im Ornat, das Schwenken des Weihrauch-Kessels, den Rauch und den typischen intensiven Duft. Und wir erinnern uns, dass Weihrauch – neben Myrrhe und Gold – zu den Gaben der Heiligen Drei Könige aus dem Morgenland gehörte. Weihrauch, der in der Antike zu den kostbarsten Spezereien zählte, wurde bereits im 4. Jahrhundert n. Chr. als Ehrenrevis für Bischöfe in Prozessionen verwendet. Sein Gebrauch im Kultus anderer Religionen reicht jedoch noch viel weiter zurück: Den orientalischen Göttern wurde Weihrauch schon vor 7000 Jahren geopfert. Die Ägypter verwendeten Weihrauch nicht nur im Kultus, sondern auch zum Einbalsamieren, als Räuchermittel und zu reinigenden (desinfizierenden) Zwecken.",
      cultureTraditionalMedicine: "Weniger bekannt ist, dass das Harz des indischen Weihrauchbaumes (Boswellia serrata) in der traditionellen indischen Naturheilkunde des Ayurveda (\"Wissenschaft vom gesunden Leben\") seit über 3000 Jahren als wichtiges Heilmittel eingesetzt wird. Als Salbe wurde \"Guggul\" (alte Sanskrit-Bezeichnung der Pflanze) bei Entzündungen angewendet, insbesondere bei:",
      traditionalUses: [
        "Gelenkentzündungen",
        "Knochenbrüchen",
        "Drüsenschwellungen",
        "Geschwüren"
      ],
      newInterest: "In jüngster Zeit wurde in verschiedenen Presse-Veröffentlichungen und auch im Fernsehen auf erstaunliche Erfolge bei der Behandlung von rheumatischen Erkrankungen mit Weihrauch-Extrakt (400 mg Trockenextrakt pro Tablette) berichtet. Bei diesen Erkrankungen spielen chronische Entzündungen eine entscheidende Rolle. Jeder Betroffene weiß, dass herkömmliche Rheuma-Mittel gerade bei längerer oder gar dauerhaftem Gebrauch schwere Nebenwirkungen haben können.",
      howItWorks: "Die Wirkungsweise von Weihrauch bei chronischen Entzündungen basiert auf seinen Boswelliasäuren, die entzündungshemmende Eigenschaften besitzen. Sie hemmen spezifisch das Enzym 5-Lipoxygenase, welches bei Entzündungsprozessen eine zentrale Rolle spielt. Anders als herkömmliche entzündungshemmende Medikamente blockiert Weihrauch nicht die Prostaglandin-Synthese, was erklärt, warum es keine typischen Nebenwirkungen wie Magenreizungen verursacht.",
      applications: "Weihrauch-Extrakt wird heute bei verschiedenen chronisch-entzündlichen Erkrankungen eingesetzt. Klinische Studien zeigen positive Ergebnisse bei rheumatoider Arthritis, Morbus Crohn, Colitis ulcerosa, Asthma bronchiale und anderen entzündlichen Erkrankungen. Besonders bemerkenswert sind die Erfolge bei der Behandlung von entzündlichen Darmerkrankungen, wo Weihrauch-Extrakt eine echte Alternative zu herkömmlichen Medikamenten darstellen kann.",
      dosage: "Die empfohlene Tagesdosis liegt bei 3 x 400 mg Weihrauch-Trockenextrakt, standardisiert auf Boswelliasäuren. Die Einnahme sollte über einen längeren Zeitraum erfolgen, da die entzündungshemmende Wirkung erst nach einigen Wochen eintritt. Bei akuten Beschwerden kann die Dosis nach Rücksprache mit dem behandelnden Arzt erhöht werden."
    };
  },
  methods: {
    toggleDetails() {
      this.showDetails = !this.showDetails;
    },
    scrollToSection(sectionId) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
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
  margin-top: 1rem;
}

.table-of-contents {
  background-color: #f8f9fa;
  padding: 1rem;
  border-radius: 0.5rem;
  margin-bottom: 2rem;
}

.toc-list {
  margin-bottom: 0;
}

.toc-list a {
  color: #007bff;
  text-decoration: none;
}

.toc-list a:hover {
  text-decoration: underline;
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