const paintings = [
    { title: "Au jardin", category: "animaux", img: "img/animaux/au-jardin.jpg" },
    { title: "Au musée", category: "animaux", img: "img/animaux/au-musee.jpg" },
    { title: "Caméleon", category: "animaux", img: "img/animaux/cameleon.jpg" },
    { title: "Caramel", category: "animaux", img: "img/animaux/caramel.jpg" },
    { title: "Chaton aux perles", category: "animaux", img: "img/animaux/chaton-aux-perles.jpg" },
    { title: "Chaton", category: "animaux", img: "img/animaux/chaton.jpg" },
    { title: "Chats persans", category: "animaux", img: "img/animaux/chats-persans.jpg" },
    { title: "Dauphins", category: "animaux", img: "img/animaux/dauphins.jpg" },
    { title: "Etre parents", category: "animaux", img: "img/animaux/etre-parents.jpg",top: true },
    { title: "Farandole de chatons", category: "animaux", img: "img/animaux/farandole-de-chatons.jpg" },
    { title: "Gaby desmares", category: "animaux", img: "img/animaux/gaby-desmares.jpg" },
    { title: "Iguane", category: "animaux", img: "img/animaux/iguane2.jpg" },
    { title: "La famille guepard", category: "animaux", img: "img/animaux/la-famille-guepard.jpg" },
    { title: "La panthère", category: "animaux", img: "img/animaux/la-panthere.jpg" },
    { title: "Lapinou", category: "animaux", img: "img/animaux/lapinou.jpg" },
    { title: "Les chats de la famille", category: "animaux", img: "img/animaux/les-chats-de-la-famille.jpg" },
    { title: "Les gnous", category: "animaux", img: "img/animaux/les-gnous.jpg" },
    { title: "Les grands-ducs bis", category: "animaux", img: "img/animaux/les-grands-ducs-bis.jpg" },
    { title: "Les grands-ducs", category: "animaux", img: "img/animaux/les-grands-ducs.jpg" },
    { title: "Les koalas", category: "animaux", img: "img/animaux/les-koalas.jpg" },
    { title: "Les renards", category: "animaux", img: "img/animaux/les-renards.jpg" },
    { title: "Maman et ses petits", category: "animaux", img: "img/animaux/maman-et-ses-petits.jpg" },
    { title: "Manchots empereurs sur la banquise", category: "animaux", img: "img/animaux/manchots-empereurs-sur-la-banquise.jpg" },
    { title: "Ours polaires sur la banquise", category: "animaux", img: "img/animaux/ours-polaires-sur-la-banquise.jpg" },
    { title: "Panthere des neiges", category: "animaux", img: "img/animaux/panthere-des-neiges.jpg" },
    { title: "Premiere neige", category: "animaux", img: "img/animaux/premiere-neige.jpg" },
    { title: "Premieres escapades", category: "animaux", img: "img/animaux/premieres-escapades.jpg" },
    { title: "Rats des champs", category: "animaux", img: "img/animaux/rats-des-champs.jpg" },
    { title: "Rex", category: "animaux", img: "img/animaux/rex.jpg" },
    { title: "Sanglier des ardennes", category: "animaux", img: "img/animaux/sanglier-des-ardennes.jpg" },
    { title: "Symphonie en blanc", category: "animaux", img: "img/animaux/symphonie-en-blanc.jpg" },
    { title: "Tendres moments", category: "animaux", img: "img/animaux/tendres-moments.jpg" },
    { title: "Tigre dans la neige", category: "animaux", img: "img/animaux/tigre-dans-la-neige.jpg" },
    { title: "Tigre royal du bengal", category: "animaux", img: "img/animaux/tigre-royal-du-bengal.jpg", top: true },
    { title: "Tigres de sibérie", category: "animaux", img: "img/animaux/tigres-de-siberie.jpg" },
    { title: "Wolf", category: "animaux", img: "img/animaux/wolf.png" },
    { title: "Château de Saint Fargeau sous la neige", category: "paysages", img: "img/paysages/chateau-de-saint-fargeau-sous-la-neige1.jpg" },
    { title: "Château de Vizille", category: "paysages", img: "img/paysages/chateau-de-vizille.jpg" },
    { title: "En attendant l'orage", category: "paysages", img: "img/paysages/en-attendant-l-orage.jpg" },
    { title: "Jardin du maître des filets", category: "paysages", img: "img/paysages/jardin-du-maitre-des-filets.jpg" },
    { title: "La Baie d'Along", category: "paysages", img: "img/paysages/la-baie-d-along.jpg" },
    { title: "Le château de Conwey", category: "paysages", img: "img/paysages/le-chateau-de-conwey.jpg" },
    { title: "Le temple du savoir", category: "paysages", img: "img/paysages/le-temple-du-savoir.jpg", },
    { title: "Machu Pichu", category: "paysages", img: "img/paysages/machu-pichu.jpg" },
    { title: "Mélancolie", category: "paysages", img: "img/paysages/melancolie.jpg" },
    { title: "Paris la nuit", category: "paysages", img: "img/paysages/paris-la-nuit.jpg" },
    { title: "Paysage de Lozère", category: "paysages", img: "img/paysages/paysage-de-lozere.jpg" },
    { title: "Squires Castle", category: "paysages", img: "img/paysages/squires-castle.jpg" },
    { title: "Temple d'or", category: "paysages", img: "img/paysages/temple-d-or.jpg" },
    { title: "Venise", category: "paysages", img: "img/paysages/venise.jpg" },
    { title: "Au pays de l'enfance", category: "feerique", img: "img/feerique/au-pays-de-l-enfance.jpg" },
    { title: "Carnaval de Venise", category: "feerique", img: "img/feerique/carnaval-de-venise.jpg" },
    { title: "Danseuse aux papillons", category: "feerique", img: "img/feerique/danseuse-aux-papillons.jpg" },
    { title: "De l'autre côté du mirroir", category: "feerique", img: "img/feerique/de-l-autre-cote-du-mirroir.jpg", top: true },
    { title: "De l'ombre à la lumière", category: "feerique", img: "img/feerique/de-l-ombre-a-la-lumiere.jpg" },
    { title: "Il était une fois", category: "feerique", img: "img/feerique/il-etait-une-fois.jpg" },
    { title: "Jeux d'enfants", category: "feerique", img: "img/feerique/jeux-d-enfants.jpg" },
    { title: "Kandinsky", category: "feerique", img: "img/feerique/kandinsky.jpg" },
    { title: "L'antre du dragon", category: "feerique", img: "img/feerique/l-antre-du-dragon.jpg" },
    { title: "La fresque des kangourous", category: "feerique", img: "img/feerique/la-fresque-des-kangourous.jpg" },
    { title: "Le sanctuaire des loups", category: "feerique", img: "img/feerique/le-sanctuaire-des-loups.jpg" },
    { title: "Marionnettes Thailandaises", category: "feerique", img: "img/feerique/marionnettes-thailandaises.jpg" },
    { title: "Masque de Venise", category: "feerique", img: "img/feerique/masque-de-venise.jpg" },
    { title: "Mona Loa", category: "feerique", img: "img/feerique/mona-loa.jpg" },
    { title: "Rêves de palais", category: "feerique", img: "img/feerique/reves-de-palais.jpg" },
    { title: "Smaug", category: "feerique", img: "img/feerique/smaug.jpg" },
    { title: "Vortex", category: "feerique", img: "img/feerique/vortex.jpg" },
    { title: "Bébé du Noursitan", category: "portraits", img: "img/portraits/bebe-du-noursitan.jpg" },
    { title: "Jeune moine boutanais", category: "portraits", img: "img/portraits/jeune-moine-boutanais.jpg" },
    { title: "Jim Morrison", category: "portraits", img: "img/portraits/jim-morrison.jpg" },
    { title: "Jon et fantôme", category: "portraits", img: "img/portraits/jon-et-fantome.jpg" },
    { title: "La petite chinoise", category: "portraits", img: "img/portraits/la-petite-chinoise.jpg", top: true },
    { title: "Le corbeau - Edgar Allan Poe", category: "portraits", img: "img/portraits/le-corbeau-edgar-allan-poe.jpg" },
    { title: "Paul Mc Cartney", category: "portraits", img: "img/portraits/paul-mc-cartney.jpg" },
    { title: "Pauline et Jean-baptiste", category: "portraits", img: "img/portraits/pauline-et-jean-baptiste.jpg" },
    { title: "Ragnar Lothbroc", category: "portraits", img: "img/portraits/ragnar-lothbroc.jpg" },
    { title: "Stephen King", category: "portraits", img: "img/portraits/stephen-king.jpg" },
    // Ajoute tes tableaux ici
];

// 1. DÉMARRAGE DU SITE
document.addEventListener('DOMContentLoaded', () => {
    
    // Gestion de la Galerie
    const grid = document.getElementById('gallery-grid');
    if (grid) {
        const params = new URLSearchParams(window.location.search);
        const cat = params.get('category');
        const titleDisplay = document.getElementById('category-title');

        if (cat) {
            titleDisplay.textContent = cat.toUpperCase();
            const filtered = paintings.filter(p => p.category === cat);
            render(filtered);
        } else {
            render(paintings);
        }
    }

    // Gestion de la Navbar (Cacher l'onglet actif)
    const params = new URLSearchParams(window.location.search);
    const currentCat = params.get('category');
    if (currentCat) {
        const navLinks = document.querySelectorAll('.nav-links a');
        navLinks.forEach(link => {
            if (link.href.includes(`category=${currentCat}`)) {
                link.parentElement.style.display = 'none';
            }
        });
    }

    // Lancement du Carrousel
    initCarousel();
});

// 2. LES FONCTIONS (À l'extérieur pour la clarté)

function initCarousel() {
    const container = document.getElementById('carousel');
    if (!container) return;

    const selection = paintings.filter(p => p.top === true);

    if (selection.length > 0) {
        container.innerHTML = selection.map((paint, index) => `
            <div class="slide ${index === 0 ? 'active' : ''}" 
                 style="background-image: url('${paint.img}')">
            </div>
        `).join('');
    }

    const slides = document.querySelectorAll('.slide');
    if (slides.length < 2) return;

    let currentIndex = 0;
    setInterval(() => {
        slides[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % slides.length;
        slides[currentIndex].classList.add('active');
    }, 5000);
}

function render(data) {
    const grid = document.getElementById('gallery-grid');
    if (!grid) return;

    grid.innerHTML = data.map(item => `
        <div class="paint-card" onclick="openModal(\`${item.img}\`, \`${item.title}\`)">
            <img src="${item.img}" alt="${item.title}" loading="lazy">
            <div class="paint-info">
                <h3>${item.title}</h3>
            </div>
        </div>
    `).join('');
}

function openModal(imgSrc, title) {
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('img-full');
    const captionText = document.getElementById('caption');
    
    modal.style.display = "flex"; // "flex" pour bien centrer
    modalImg.src = imgSrc;
    captionText.innerHTML = title;
    document.body.style.overflow = "hidden";
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = "none";
    document.body.style.overflow = "auto";
}

const burger = document.getElementById('burger');
const nav = document.getElementById('nav-links');

if (burger) {
    burger.addEventListener('click', () => {
        nav.classList.toggle('active'); // On ajoute/enlève la classe active
        
        // Bonus : Animation des barres du burger en "X"
        burger.classList.toggle('toggle-burger');
    });
}