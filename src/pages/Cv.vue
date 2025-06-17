<template>
  <section class="profile">
    <header>
      <h1>MINGRINO Maria Paola</h1>
      <h2>Conceptrice Développeuse d’Applications – Alternance </h2>
      <h3 class="titre">Déterminée, Esprit d’analyse, Adaptable</h3>
    </header>

    <div class="info-table">
      <div class="photo-col">
        <img :src="mingrinoPhoto" alt="C'est Moi" class="photo" />
      </div>

      <div class="contacts">
        <p class="allignement">
          <span class="material-symbols-outlined">home</span>
          <span>14, Rue Jean Luis Barrault 26000 Valence</span>
        </p>
        <p class="allignement">
          <span class="material-symbols-outlined">call</span>
          <span class="classtel">07 52 02 92 37</span>
        </p>
        <p class="allignement">
          <span class="material-symbols-outlined">alternate_email</span>
          <span class="email">mariapaolamingrino88@gmail.com</span>
        </p>
      </div>

      <div class="accroche">
        <p>
          Développeuse web diplômée (Bac+2), actuellement inscrite en formation de 
          Concepteur Développeur d’Applications à CESI Grenoble. Curieuse, rigoureuse 
          et motivée, je recherche une alternance pour mettre mes compétences front-end 
          et back-end au service de projets concrets et innovants. 
        </p>
      </div>
    </div>

<details open>
  <summary><h2>Diplômes</h2></summary>
  <ul class="list">
    <li>2025– 2026: Concepteur Développeur d’Applications bac +3</li>
    <li>2022-2024: Développeur Web et Web Mobile CCI Valence (France) Bac +2 <a href="/pdfs/dwwm.pdf" target="_blank" class="diploma-link">
        📄 Voir le certificat
      </a> </li>
    <li>2002-2027: BAC au Lycée Socio Psycho Pédagogique D. Alighieri (Italie)</li>
  </ul>
</details>

<details open>
  <summary><h2>Certificats</h2></summary>
  <ul class="list">
    <li>
      2024 Google Career Certificate: Data Analysis<br />
      <a href="/pdfs/google_Data_Analytics.pdf" target="_blank" class="diploma-link">
        📄 Voir le certificat
      </a>
    </li>
    <li>
      2024 FreeCodeCamp: Responsive Web Design<br />
 <a href="https://www.freecodecamp.org/certification/MaryGothique/responsive-web-design" target="_blank" rel="noopener" class="diploma-link">
    📄 Voir le certificat
  </a>
    </li>
    <li>
      2023 Udemy Teoria e pratica Ux/Ui Design con adobe XD ( Theory et Pratique Ux/Ui Design avec Adobe XD)<br />
      <a href="/pdfs/UxUi Design.pdf" target="_blank" class="diploma-link">
        📄 Voir le certificat
      </a>
    
      </li>
  </ul>
</details>


    <details open>
      <summary><h2>Compétences</h2></summary>
      <ul class="list">
        <li>Maquetter une application avec Adobe XD</li>
        <li>HTML5, CSS3, JavaScript</li>
        <li>Bootstrap, Git & GitHub</li>
        <li>PHP, MySQL, Symfony</li>
        <li>Java, Python, Vue.js en autodidacte</li>
        <li>WordPress, Trello</li>
        <li>Adobe Photoshop, Illustrator, InDesign</li>

      </ul>
    </details>
<details open>
  <summary><h2>Soft Skills</h2></summary>
  <ul class="list">
    <li>Déterminée : Capacité à poursuivre mes objectifs avec ténacité, même face aux obstacles.</li>
    <li>Esprit d’analyse : Apte à comprendre rapidement des situations complexes et à proposer des solutions pertinentes.</li>
    <li>Adaptable : À l’aise dans des environnements changeants, je m’intègre facilement et apprends rapidement.</li>
  </ul>
</details>
    <details open>
      <summary><h2>Expériences</h2></summary>
      <ul class="list">
        <li>06/03/2025: Damour Nettoyage- Agent de Nettoyage</li>
        <li>02/01/2025: Valence Romans Agglo- Animatrice Petite Enfance</li>
        <li>01/12/2024: 20/12/2024- Capra Solutions : Projet front en Vue.js</li>
        <li>03/05/2024: Casino/Auchan- Mise en rayon</li>
        <li>03/04/2024: People&baby- Auxiliaire Puericultrice</li>
        <li>2023: CV-Portfolio (en ligne, versionné avec Git)</li>
        <li>08/2022 : Bistro André Valence-Serveuse</li>
        <li>03/2022 - 05/2022 :GSF Valence- Agent de service, </li>
        <li>08/2020 - 09/2020 : Euroservice Mariace- Animatrice (Italie)</li>
      </ul>
    </details>

    <details open>
      <summary><h2>Centres d'intérêts</h2></summary>
      <ul class="list">
        <li>Cosmétique, Manucure, Codage</li>
        <li>Jeux Vidéo, Lecture, Musique Métal</li>
        <li>Fitness, Bullet Journal</li>
      </ul>
    </details>

    <details open>
      <summary><h2>Langues</h2></summary>
      <ul class="list">
        <li>Italien (Maternelle)</li>
        <li>Français (Intermédiaire)</li>
        <li>Anglais (Intermédiaire)</li>
        <li>Allemand (Élémentaire)</li>
      </ul>
    </details>
  </section>
</template>

<script setup>
import mingrinoPhoto from '../assets/MINGRINO_002.jpg'
</script>

<style scoped>
.profile {
  padding: 2rem;
  color: aliceblue;
  background-color: black;
}

header, .info-table, .contacts, .accroche {
  margin-bottom: 2rem;
}

.titre {
margin-left: 1rem;
  color: rgb(165, 132, 207);
  text-shadow: 0 0 10px #4c1d7a, 0 0 20px #9933ff;
  font-family: 'Segoe UI', sans-serif;
  display: flex;
  justify-content: center;
}

.info-table {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  align-items: flex-start;
  justify-content: center;
}

.photo {
  width: 100px;
  margin: 1rem;
}

.contacts .allignement {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: revert;
}

.accroche p {
  color: rgb(165, 132, 207);
  font-size: 1.1rem;
  font-family: 'Segoe UI', sans-serif;
}

h1 {
  font-family: 'Orbitron', sans-serif;
  text-align: center;
  color: white;
  text-shadow: 0 0 10px #4c1d7a, 0 0 20px #9933ff;
}

h2 {
  font-family: 'Courier New', Courier, monospace;
  text-align: center;
  color: #9933ff;
  border-bottom: 1px dashed #9933ff;
  text-shadow: 0 0 5px #4c1d7a, 0 0 10px #9933ff;
  margin: 1rem 0;
}
details {
  margin-bottom: 1.5rem;
  padding: 1rem;
  border-radius: 5px;
  background-color: #1a1a1a;
}
ul.list {
  list-style: disc;
  padding-left: 2rem;
  color: azure;
  font-family: Arial, sans-serif;
}
.diploma-link {
  display: inline-block;
  color: rgb(165, 132, 207);
  font-size: 0.9rem;
  margin-top: 0.2rem;
  text-decoration: none;
}

.diploma-link:hover {
  text-decoration: underline;
  color: #9933ff;
}

.material-symbols-outlined {
  font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 48;
}
</style>
