<template>
  <div class="card shadow-lg rounded-4">
    <div class="card-body">
      <h3 class="card-title text-primary">Spermidin</h3>
      <p class="text-muted">Kategorie: Gesundheit & Anti-Aging | Veröffentlicht am: 3. März 2025</p>
      
      <!-- Was ist Spermidin -->
      <div class="mb-4">
        <h4>Was ist Spermidin?</h4>
        <p>Spermidin ist ein körpereigenes Polyamin, welches zur Erhaltung der Gesundheit beiträgt und die Funktionsfähigkeit des Körpers unterstützt. Erstmals fand man Spermidin in der männlichen Samenflüssigkeit, daher auch der Name der Substanz. Mit zunehmendem Alter nimmt der Spermidin-Gehalt in unserem Körper jedoch ab.</p>
      </div>

      <!-- Was bewirkt Spermidin -->
      <div class="mb-4">
        <h4>Was genau bewirkt Spermidin?</h4>
        <p>Spermidin trägt zur Mobilisation und Gesunderhaltung der Zellen bei. Unsere Zellen sind die Grundlage unseres Lebens. In den kleinsten Bausteinen laufen lebensnotwendige Prozesse ab, die nötig sind, um alle Vorgänge des Lebens am Laufen zu halten. Bei diesen Vorgängen sammelt sich in den Zellen „Zellmüll", der die Zellen müde und träge macht und so verschiedenen Krankheiten den Weg ebnet. Nur aktive und fitte Zellen können ihre optimale Funktion ausüben. Ohne wirksame Reinigung kann dieser Prozess im Hintergrund ablaufen und ist ein Wegbereiter für ernstere Krankheiten. Jedoch kann man in diesen Prozess eingreifen und die Autophagie der Zelle dank Spermidin fördern bzw. auslösen.</p>
      </div>

      <!-- Autophagie -->
      <div class="mb-4">
        <h4>Was ist unter dem Wort "Autophagie" zu verstehen?</h4>
        <p>Die sogenannte Autophagie ist eine Art Recyclingsystem, das überflüssige oder beschädigte Bestandteile der Zelle abbaut und wiederverwertet und darüber hinaus die DNA stabilisiert. Dieser molekulare Aufräummechanismus hält die Zellen fit und schützt vor vielen Krankheiten.</p>
        <blockquote class="blockquote">
          <p class="mb-0">"Die vermehrte Aufnahme von Spermidin signalisiert der Zelle, den Selbstreinigungsprozess zu starten und schützt damit vor Ablagerungen und vorzeitiger Alterung."</p>
          <footer class="blockquote-footer">Neurologe Stefan Kiechl</footer>
        </blockquote>
        <p>Für die Erforschung der Autophagie hat der japanische Zellbiologe Yoshinori Ohsumi den Nobelpreis in Medizin im Jahr 2016 erhalten.</p>
      </div>

      <!-- Aktionsschaltflächen -->
      <div class="mt-4 d-flex justify-content-between">
        <button class="btn btn-outline-primary">Teilen</button>
        <button class="btn btn-outline-success" @click="toggleMoreInfo">
          {{ showMoreInfo ? 'Weniger anzeigen' : 'Mehr zu Spermidin' }}
        </button>
      </div>
      
      <!-- Erweiterte Informationen -->
      <div v-if="showMoreInfo">
        <!-- Spermidin und das Herz -->
        <div class="mb-4 mt-4">
          <h4>Spermidin und das Herz</h4>
          <p>Neueste Entdeckungen der Anti-Aging-Forschung belegen die positive Wirkung auf die Herz-Kreislaufgesundheit sowie den schützenden Effekt auf die Nervenverbindungen des Gehirns.</p>
          <p>Studien zeigen, dass Spermidin die Herzzellen vor Alterungsprozessen schützt. Bei Mäusen wurde beobachtet, dass die Herzzellen durch den Spermidin-Autophagie-Mechanismus sauber und jung bleiben.</p>
          <p>Zusätzlich wurde festgestellt, dass durch die Gabe von Spermidin bei Mäusen der Blutdruck gesenkt werden konnte, nachdem dieser durch eine salzreiche Ernährung erhöht war.</p>
          <p>In einer weiteren Studie mit Ratten aus dem Jahr 2019 wurde gezeigt, dass Spermidin die Heftigkeit eines Herzinfarkts abfedern kann. Dies geschieht, indem der positive Spermidin-Autophagie-Mechanismus das Absterben wichtiger Herzmuskelgewebe reduziert.</p>
          <p>Ein weiterer bemerkenswerter Aspekt ist, dass Spermidin in Laborversuchen die Viruslast im Lungengewebe signifikant um bis zu 85 % senken konnte.</p>
        </div>

        <!-- Spermidin und unser Gehirn -->
        <div class="mb-4">
          <h4>Spermidin und unser Gehirn</h4>
          <p>Ein weiterer Pluspunkt für Spermidin ist, dass es einen wertvollen Beitrag zur Erhaltung der Hirngesundheit und kognitiven Fähigkeiten leistet.</p>
          <p>Aus biochemischer Sicht steht die Gesunderhaltung des Gehirns und der Gedächtnisleistung in engem Zusammenhang mit dem positiven Spermidin-Autophagie-Mechanismus des Körpers.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showMoreInfo: false
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

h3, h4 {
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

blockquote {
  border-left: 4px solid #007bff;
  padding-left: 1rem;
  margin-bottom: 1.5rem;
  font-style: italic;
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