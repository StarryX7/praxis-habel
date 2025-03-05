<template>
  <div class="about-container">
    <div class="container py-5">
      <div class="row">
        <div class="col-lg-4 mb-4 mb-lg-0">
          <div class="profile-container">
            <img src="../assets/Habel.jpg" alt="Dr. Reinald Habel" class="profile-image img-fluid rounded shadow">
            <div class="doctor-info mt-4 p-3 bg-light rounded shadow-sm">
              <h3 class="text-center">Reinald Habel</h3>
              <p class="mb-2"><i class="bi bi-calendar3"></i> Geboren am 20.02.1950</p>
              <p class="mb-2"><i class="bi bi-geo-alt"></i> Geburtsort: Bayreuth</p>
              <p class="mb-0"><i class="bi bi-hospital"></i> Facharzt für Naturheilverfahren</p>
            </div>
          </div>
        </div>
        
        <div class="col-lg-8">
          <div class="content-container p-4 bg-white rounded shadow">
            <h1 class="border-bottom pb-3 mb-4">Curriculum Vitae</h1>
            
            <div class="timeline">
              <div class="timeline-item">
                <div class="timeline-year">1966</div>
                <div class="timeline-content">Mittlere Reife an der Löns Realschule Einbeck</div>
              </div>
              <div class="timeline-item">
                <div class="timeline-year">1969</div>
                <div class="timeline-content">Abitur am Felix-Klein Gymnasium Göttingen</div>
              </div>
              <div class="timeline-item">
                <div class="timeline-year">1970-1974</div>
                <div class="timeline-content">Offiziersausbildung bei der Deutschen Luftwaffe</div>
              </div>
              <div class="timeline-item">
                <div class="timeline-year">1974-1980</div>
                <div class="timeline-content">Humanmedizin Studium an der Georg August Universität Göttingen</div>
              </div>
              <div class="timeline-item">
                <div class="timeline-year">1980</div>
                <div class="timeline-content">Approbation als Arzt durch das Niedersächsische Landesprüfungsamt</div>
              </div>
              <div class="timeline-item">
                <div class="timeline-year">1980-1982</div>
                <div class="timeline-content">Zusatzausbildung in Naturheilverfahren in Deutschland und Österreich</div>
              </div>
              <div class="timeline-item">
                <div class="timeline-year">1981-1991</div>
                <div class="timeline-content">Leitender Arzt verschiedener Institute und Kurheime mit Naturheilkunde</div>
              </div>
              <div class="timeline-item">
                <div class="timeline-year">1992-heute</div>
                <div class="timeline-content">Niedergelassener Arzt in eigener Praxis in Braunschweig</div>
              </div>
              <div class="timeline-item">
                <div class="timeline-year">Seit 1992</div>
                <div class="timeline-content">Verheiratet, zwei Kinder</div>
              </div>
              <div class="timeline-item">
                <div class="timeline-year">Seit 1994</div>
                <div class="timeline-content">Wissenschaftlicher Beirat der Gesellschaft für biologische Medizin und Kybernetik</div>
              </div>
              <div class="timeline-item">
                <div class="timeline-year">Seit 2000</div>
                <div class="timeline-content">Dozententätigkeit bei der Medizinischen Woche Baden Baden und dem International Institute for Advanced Studies in System Research and Cybernetics (University of Windsor Ontario) Canada</div>
              </div>
              <div class="timeline-item">
                <div class="timeline-year">Seit 2006</div>
                <div class="timeline-content">Fortbildungsreferent für Enzymtherapie in Apotheken</div>
              </div>
              <div class="timeline-item">
                <div class="timeline-year">Seit 2013</div>
                <div class="timeline-content">Leitender Arzt der klinischen Validierungsstudie „Präventiometer", genehmigt vom Bundesinstitut für Arzneimittel und Medizinprodukte, in Zusammenarbeit mit der Universität Greifswald (ipex5.net)</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AboutPage',
  mounted() {
    // Stellen sicher, dass Bootstrap Icons geladen werden
    document.head.innerHTML += '<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">';
  }
});
</script>
  
<style scoped>
.about-container {
  background-color: #f8f9fa;
  min-height: calc(100vh - 120px); /* Abzüglich Header/Footer */
}

.profile-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.profile-image {
  width: 100%;
  height: 450px;
  object-fit: cover;
  object-position: top;
  border: 5px solid white;
  border-radius: 8px;
  transition: transform 0.3s ease;
}

.profile-image:hover {
  transform: scale(1.02);
}

.doctor-info {
  width: 100%;
  border-left: 4px solid #0d6efd;
}

.content-container {
  height: 100%;
}

.timeline {
  position: relative;
  margin-top: 20px;
}

.timeline-item {
  display: flex;
  margin-bottom: 20px;
  position: relative;
}

.timeline-item:before {
  content: '';
  position: absolute;
  left: 100px;
  height: 100%;
  width: 2px;
  background-color: #dee2e6;
  z-index: 0;
}

.timeline-item:last-child:before {
  display: none;
}

.timeline-year {
  width: 100px;
  font-weight: bold;
  color: #0d6efd;
  text-align: right;
  padding-right: 15px;
}

.timeline-content {
  flex: 1;
  background-color: #f8f9fa;
  padding: 10px 15px;
  border-radius: 5px;
  border-left: 3px solid #0d6efd;
  margin-left: 15px;
  position: relative;
  z-index: 1;
}

/* Responsive Anpassungen */
@media (max-width: 991px) {
  .profile-container {
    margin-bottom: 30px;
  }
}

/* iOS Safari Fix */
@supports (-webkit-touch-callout: none) {
  .about-container {
    min-height: -webkit-fill-available;
  }
}
</style>