<template>
  <div class="card shadow-lg rounded-4">
    <div class="card-body">
      <h3 class="card-title text-primary">{{ title }}</h3>
      <p class="text-muted">Kategorie: {{ category }} | Veröffentlicht am: {{ date }}</p>
      
      <!-- Autor -->
      <div class="author-section mb-4">
        <h4 class="author-name">{{ author }}</h4>
      </div>

      <!-- Hauptinhalt -->
      <div class="alzheimer-content">
        <div class="main-content mb-4">
          <h4>{{ subtitle }}</h4>
          <p class="lead">{{ mainContent }}</p>
        </div>

        <div class="approach mb-4">
          <p>{{ approach }}</p>
        </div>

        <div class="conclusion mb-4">
          <p>{{ conclusion }}</p>
        </div>
      </div>

      <!-- Weiterführende Informationen zu Spermidin und Alzheimer -->
      <div v-if="showSpermidinInfo" class="spermidin-section mt-5">
        <h4>Spermidin und Alzheimer</h4>
        
        <div v-for="(section, index) in spermidinSections" :key="'spermidin-'+index" class="mb-4">
          <p>{{ section.content }}</p>
          
          <div v-if="section.sources && section.sources.length > 0" class="sources mt-3">
            <h5>Quellen:</h5>
            <ul class="list-unstyled">
              <li v-for="(source, sIndex) in section.sources" :key="'source-'+sIndex" class="mb-2 small">
                {{ source }}
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Aktionsschaltflächen -->
      <div class="mt-4 d-flex justify-content-between">
        <button class="btn btn-outline-success" @click="toggleSpermidinInfo">
          {{ showSpermidinInfo ? 'Weniger anzeigen' : 'Mehr zu Spermidin und Alzheimer' }}
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
      default: "Alzheimer ist heilbar"
    },
    author: {
      type: String,
      default: "Dr. med. Michael Nehls"
    },
    subtitle: {
      type: String,
      default: "Die Wahrheit über Alzheimer"
    },
    mainContent: {
      type: String,
      default: "Jährlich über 200.000 Alzheimer-Neuerkrankungen allein in Deutschland – bisher ohne Hoffnung auf Heilung. Kein Wunder, dass die Angst vor Alzheimer wächst."
    },
    approach: {
      type: String,
      default: "Doch Dr. med. Michael Nehls beweist, dass Alzheimer keine Folge des Älterwerdens ist, sondern durch eine Lebensweise verursacht wird, die unsere natürlichen Bedürfnisse ignoriert."
    },
    conclusion: {
      type: String,
      default: "Er präsentiert einen ganzheitlichen Ansatz, mit dem man sich nicht nur effektiv vor Alzheimer schützen, sondern die Krankheit in einem frühen Stadium sogar besiegen kann. Eine hoffnungsvolle und richtungsweisende Erkenntnis, die dazu animiert, das Leben selbstverantwortlich in die Hand zu nehmen."
    },
    category: {
      type: String,
      default: "Gesundheit"
    },
    date: {
      type: String,
      default: "3. März 2025"
    }
  },
  data() {
    return {
      showSpermidinInfo: false,
      spermidinSections: [
        {
          content: "So konnte in Tierstudien zwischen 2013–2017 festgestellt werden, dass sich durch den positiven Spermidin-Autophagie-Mechanismus der Alterungsprozess des Gehirns der Fruchtfliege verlangsamte. Interessanterweise ist dieser Alterungsprozess mit dem menschlichen Gehirn vergleichbar.",
          sources: []
        },
        {
          content: "Dank des positiven Spermidin-Autophagie-Mechanismus werden Ablagerungen im Gehirn konstant verhindert und die Alterung der Synapsen wesentlich ausgebremst. So stehen unsere Synapsen für die milliardenfache und ständige Kommunikation der Nervenzellen ungehindert zur Verfügung.",
          sources: ["Nat Neurosci. 2013 Oct;16(10): 1453-60.doi: 10.1038/nn.3512; Epub 2013 Sep 1. Restoring polyamines protects from age-induced memory impairment in an autophagy-dependent manner"]
        },
        {
          content: "Wenn man den positiven Spermidin-Autophagie-Mechanismus versteht, begreift man, dass sich dieser Mechanismus grundsätzlich auf viele Krankheitsbilder anwenden lassen könnte. Spermidin leistet einen wertvollen Beitrag für eine gesunde und leistungsfähige Zelle.",
          sources: [
            "T. Eisenberg et al.: \"Induction of autophagy by spermidine promotes longevity\", Nature Cell Biology, vol. 11, no. 11, pp. 1305-1314, 2009. Accessed: 12 January 2022.",
            "I. Ghosh et al.: \"Spermidine, an autophagy inducer as a therapeutic strategy in neurological disorders\", Neuropeptides, vol. 83, Oct. 2020. Accessed: 12 January 2022.",
            "T. Pekar et al.: \"The positive effect of spermidine in older adults suffering from dementia: First results of a 3-month trial\", Weiner Science (New York, N.Y.), vol. 359, no. 6374, Jan. 2018.",
            "M. Madeo et al.: \"Spermidine in health and disease.\" Accessed: 19 January 2022.",
            "N. Gassen et al.: \"Analysis of SARS-CoV-2-controlled autophagy reveals spermidine, MK-2206, and niclosamide as putative antiviral therapeutics\", bioRxiv, p. 2020.041.5997254, Apr. 2020. Accessed: 19 January 2022."
          ]
        }
      ]
    };
  },
  methods: {
    toggleSpermidinInfo() {
      this.showSpermidinInfo = !this.showSpermidinInfo;
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

.author-name {
  color: #007bff;
  margin-bottom: 0.5rem;
}

.main-content {
  border-left: 4px solid #007bff;
  padding-left: 1rem;
}

.lead {
  font-size: 1.1rem;
  font-weight: 400;
}

.sources {
  background-color: #f8f9fa;
  padding: 1rem;
  border-radius: 0.5rem;
  font-size: 0.9rem;
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