<div class="hero">

<h1>DrawBot A4</h1>

<p>Machine à dessiner automatisée<br>Projet d’ingénierie – Groupe 07</p>

<a class="btn" href="#project">Découvrir le projet</a>

</div>


<div class="section fade" id="project">

<h2>Le projet</h2>

<p>
Le DrawBot A4 est une machine capable de transformer des mouvements mécaniques
en tracés graphiques précis sur une feuille A4.
</p>

<img src="images/drawbot.png">

</div>


<div class="section section-dark fade">

<h2>Modèle 3D interactif</h2>

<iframe
height="500"
width="100%"
src="https://modelembedder.net/embed?did=e069393fab7baea4fdb59362&wvm=v&wvmid=7b5e182986723ef343886fa5&eid=e6b6ce24fbb03acfda1a5889&elementType=ASSEMBLY"
frameborder="0">
</iframe>

</div>


<div class="section fade">

<h2>Poster du projet</h2>

<img src="images/poster_drawbot_a4.png">

</div>


<div class="section section-dark fade">

<h2>Vidéo de présentation</h2>

<video controls width="70%">
<source src="images/video_drawbot_a4.mp4" type="video/mp4">
</video>

</div>

<style>

body{
margin:0;
font-family: system-ui, sans-serif;
}

.hero{
height:100vh;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
text-align:center;
background: linear-gradient(120deg,#0f172a,#1e293b);
color:white;
padding:40px;
}

.hero h1{
font-size:70px;
margin-bottom:20px;
}

.hero p{
font-size:22px;
max-width:700px;
opacity:0.9;
}

.btn{
background:#6366f1;
padding:14px 30px;
border-radius:8px;
color:white;
text-decoration:none;
margin-top:30px;
font-weight:600;
}

.section{
padding:120px 10%;
text-align:center;
}

.section-dark{
background:#0f172a;
color:white;
}

.section img{
max-width:900px;
width:100%;
border-radius:12px;
box-shadow:0 10px 40px rgba(0,0,0,0.3);
margin-top:40px;
}

video{
border-radius:12px;
margin-top:30px;
}

.fade{
opacity:0;
transform:translateY(40px);
transition: all 0.8s ease;
}

.fade.visible{
opacity:1;
transform:translateY(0);
}

</style>


<div class="hero">

<h1>DrawBot A4</h1>

<p>
Machine à dessiner automatisée  
Projet d’ingénierie – Groupe 07
</p>

<a class="btn" href="#project">Découvrir le projet</a>

</div>


<div class="section fade" id="project">

<h2>Le projet</h2>

<p>
Le DrawBot A4 est une machine capable de transformer des mouvements mécaniques
en tracés graphiques précis sur une feuille A4.
</p>

<img src="images/drawbot.png">

</div>


<div class="section section-dark fade">

<h2>Modèle 3D interactif</h2>

<iframe
height="500"
width="100%"
src="https://modelembedder.net/embed?did=e069393fab7baea4fdb59362&wvm=v&wvmid=7b5e182986723ef343886fa5&eid=e6b6ce24fbb03acfda1a5889&elementType=ASSEMBLY"
frameborder="0">
</iframe>

</div>


<div class="section fade">

<h2>Poster du projet</h2>

<img src="images/poster_drawbot_a4.png">

</div>


<div class="section section-dark fade">

<h2>Vidéo de présentation</h2>

<video controls width="80%">
<source src="images/video_drawbot_a4.mp4" type="video/mp4">
</video>

</div>


<script>

const observer = new IntersectionObserver(entries=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
entry.target.classList.add("visible")
}
})
})

document.querySelectorAll(".fade").forEach(el=>{
observer.observe(el)
})

</script>
