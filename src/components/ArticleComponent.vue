<template>
  <div class="card shadow-lg rounded-4">
    <div class="card-body">
      <h3 class="card-title text-primary">{{ title }}</h3>
      <p class="text-muted">{{ category ? 'Kategorie: ' + category : '' }} {{ date ? '| Veröffentlicht am: ' + date : '' }}</p>
      
      <!-- Einleitung/Zusammenfassung -->
      <div v-if="introduction" class="introduction mb-4">
        <p class="lead">{{ introduction }}</p>
      </div>

      <!-- Hauptinhalt -->
      <div class="article-content">
        <!-- Wenn der Inhalt als Array von Abschnitten übergeben wird -->
        <template v-if="Array.isArray(content)">
          <div v-for="(section, sIndex) in content" :key="'section-'+sIndex" class="content-section mb-4">
            <h4 v-if="section.title" class="section-title">{{ section.title }}</h4>
            
            <!-- Text-Absatz -->
            <p v-if="section.text">{{ section.text }}</p>
            
            <!-- Liste (ungeordnet) -->
            <ul v-if="section.list && section.listType !== 'ordered'" class="list-unstyled">
              <li v-for="(item, iIndex) in section.list" :key="'list-'+sIndex+'-'+iIndex" class="mb-2">
                <span v-if="section.checkmarks" class="text-success me-2">✅</span>
                {{ item }}
              </li>
            </ul>
            
            <!-- Liste (geordnet) -->
            <ol v-if="section.list && section.listType === 'ordered'">
              <li v-for="(item, iIndex) in section.list" :key="'list-'+sIndex+'-'+iIndex" class="mb-2">
                {{ item }}
              </li>
            </ol>
            
            <!-- Tabelle -->
            <div v-if="section.table" class="table-responsive">
              <table class="table table-striped mt-2">
                <thead v-if="section.tableHeaders">
                  <tr>
                    <th v-for="(header, hIndex) in section.tableHeaders" :key="'header-'+hIndex">{{ header }}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(row, rIndex) in section.table" :key="'row-'+rIndex">
                    <td v-for="(cell, cIndex) in row" :key="'cell-'+rIndex+'-'+cIndex">{{ cell }}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <!-- Quelle / Referenz -->
            <div v-if="section.source" class="source text-muted mt-2">
              <small>Quelle: {{ section.source }}</small>
            </div>
          </div>
        </template>
        
        <!-- Wenn der Inhalt als einfacher String übergeben wird -->
        <p v-else class="card-text">{{ content }}</p>
      </div>

      <!-- Fazit -->
      <div v-if="conclusion" class="conclusion mt-4">
        <h5>Fazit:</h5>
        <p>{{ conclusion }}</p>
      </div>

      <!-- Quellen/Referenzen -->
      <div v-if="sources && sources.length > 0" class="sources mt-4">
        <h5>Quellen:</h5>
        <ul class="list-unstyled">
          <li v-for="(source, index) in sources" :key="'source-'+index" class="mb-2">
            {{ source }}
          </li>
        </ul>
      </div>

      <!-- Kontaktinformationen -->
      <div v-if="contactInfo" class="contact-info mt-4">
        <h5>Kontakt:</h5>
        <p v-html="formatContactInfo(contactInfo)"></p>
      </div>

      <!-- Aktionsschaltflächen -->
      <div class="mt-4 d-flex justify-content-between">
        <button class="btn btn-outline-primary">Teilen</button>
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
      required: true
    },
    introduction: {
      type: String,
      default: null
    },
    content: {
      type: [String, Array],
      required: true
    },
    conclusion: {
      type: String,
      default: null
    },
    category: {
      type: String,
      default: null
    },
    date: {
      type: String,
      default: null
    },
    sources: {
      type: Array,
      default: () => []
    },
    contactInfo: {
      type: Object,
      default: null
    }
  },
  methods: {
    formatContactInfo(info) {
      let formattedInfo = '';
      if (info.name) formattedInfo += `<strong>${info.name}</strong>`;
      if (info.title) formattedInfo += ` – ${info.title}<br>`;
      if (info.address) formattedInfo += `${info.address}<br>`;
      if (info.phone) formattedInfo += `📞 ${info.phone}<br>`;
      if (info.email) formattedInfo += `✉️ ${info.email}`;
      return formattedInfo;
    }
  }
};
</script>

<style scoped>
.card {
  padding: 20px;
  margin-bottom: 30px;
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

.sources {
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