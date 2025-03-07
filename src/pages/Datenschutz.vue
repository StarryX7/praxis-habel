vue
||| c:/Users/qweto/Documents/GitHub/praxis-habel/src/pages/Datenschutz.vue |||
<template>
  <div class="datenschutz-page">
    <div class="container py-5">
      <h1 class="mb-4">Datenschutzerklärung</h1>
      <h2 class="mt-4">1. Datenschutz auf einen Blick</h2>
      <h3>Allgemeine Hinweise</h3>
      <p>
        Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.
      </p>
      <h3>Datenerfassung auf dieser Website</h3>
      <h4>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</h4>
      <p>
        Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.
      </p>
      <h4>Wie erfassen wir Ihre Daten?</h4>
      <p>
        Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z.B. um Daten handeln, die Sie in ein Kontaktformular eingeben.
        Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z.B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs).
      </p>
      <h4>Wofür nutzen wir Ihre Daten?</h4>
      <p>
        Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.
      </p>
      <h4>Welche Rechte haben Sie bezüglich Ihrer Daten?</h4>
      <p>
        Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben, können Sie diese Einwilligung jederzeit für die Zukunft widerrufen. Außerdem haben Sie das Recht, unter bestimmten Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
      </p>
      <h2 class="mt-4">2. Allgemeine Hinweise und Pflichtinformationen</h2>
      <h3>Datenschutz</h3>
      <p>
        Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
      </p>
      <h3>Hinweis zur verantwortlichen Stelle</h3>
      <p>
        Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:<br><br>
        Reinald Habel<br>
        Arzt für Integrative Medizin<br>
        Bauernstraße 36<br>
        31275 Lehrte/Immensen<br><br>
        Telefon: 0175 5628493<br>
        E-Mail: info@praxis-habel.de
      </p>
      <h2 class="mt-4">3. Datenerfassung auf dieser Website</h2>
      <h3>Cookies</h3>
      <p>
        Die Internetseiten verwenden teilweise so genannte Cookies. Cookies richten auf Ihrem Rechner keinen Schaden an und enthalten keine Viren. Cookies dienen dazu, unser Angebot nutzerfreundlicher, effektiver und sicherer zu machen. Cookies sind kleine Textdateien, die auf Ihrem Rechner abgelegt werden und die Ihr Browser speichert.
      </p>
      <h3>Server-Log-Dateien</h3>
      <p>
        Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:
      </p>
      <ul>
        <li>Browsertyp und Browserversion</li>
        <li>verwendetes Betriebssystem</li>
        <li>Referrer URL</li>
        <li>Hostname des zugreifenden Rechners</li>
        <li>Uhrzeit der Serveranfrage</li>
        <li>IP-Adresse</li>
      </ul>
      <p>
        Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen.
      </p>
      <h2 class="mt-4">4. Plugins und Tools</h2>
      <h3>Google Web Fonts</h3>
      <p>
        Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten so genannte Web Fonts. Beim Aufruf einer Seite lädt Ihr Browser die benötigten Web Fonts in ihren Browsercache, um Texte und Schriftarten korrekt anzuzeigen.
      </p>
      <h2 class="mt-4">5. Ihre Rechte</h2>
      <h3>Recht auf Auskunft, Löschung und Sperrung</h3>
      <p>
        Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung, Sperrung oder Löschung dieser Daten.
      </p>
      <p class="mt-4">
        Stand: März 2024
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Datenschutz',
  metaInfo: {
    title: 'Datenschutz - Praxis Habel'
  }
}
</script>
<style scoped>
.datenschutz-page h1 {
  color: #005e7c;
}
.datenschutz-page h2 {
  color: #005e7c;
  font-size: 1.5rem;
  margin-top: 2rem;
}
.datenschutz-page h3 {
  font-size: 1.2rem;
  margin-top: 1.5rem;
}
.datenschutz-page h4 {
  font-size: 1.1rem;
  margin-top: 1.2rem;
}
.datenschutz-page ul {
  list-style-type: disc;
  margin-left: 20px;
}
</style>