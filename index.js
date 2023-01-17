// Tableau pour stocker les informations des diapositives
const slidesData = [
  {
    id: '1',
    title: 'Grande épée',
    content: 'La Grande Epée est une très bonne arme possédant des dégats immenses notemment grâce à son attaque chargée',
    img: 'epee.png',
  },
  {
    id: '2',
    title: "Épée longue",
    content: "L'Épée longue",
    img: 'katana.png',
  },
  {
    id: '3',
    title: 'Épée & bouclier',
    content: "l'Épée-bouclier",
    img: 'sns.png',
  },
  {
    id: '4',
    title: 'Doubles lames',
    content: 'Les Doubles Lames',
    img: 'db.png',
  },
  {
    id: '5',
    title: ' 	Marteau',
    content: 'Le Marteau',
    img: 'marteau.png',
  },
  {
    id: '6',
    title: 'Lance',
    content: 'La Lance',
    img: 'lance.png',
  },
  {
    id: '7',
    title: 'Lancecanon',
    content: 'La Lancecanon',
    img: 'lcanon.png',
  },
  {
    id: '8',
    title: 'Fusarbalète léger',
    content: 'Le Fusarbalète léger',
    img: 'lbg.png',
  },
  {
    id: '9',
    title: 'Fusarbalète lourd',
    content: 'Le Fusarbalète lourd',
    img: 'hbg.png',
  },
  {
    id: '10',
    title: 'Arc',
    content: "L'Arc",
    img: 'bow.png',
  },
  {
    id: '11',
    title: 'Morpho-hache',
    content: 'La Morpho-hache',
    img: 'switch.png',
  },
  {
    id: '12',
    title: 'Volto-hache',
    content: 'La Volto-hache',
    img: 'cb.png',
  },
  {
    id: '13',
    title: 'Corne de chasse',
    content: 'La Corne de chasse',
    img: 'hh.png',
  },
  {
    id: '14',
    title: 'Insectoglaive',
    content: "L'Insectoglaive",
    img: 'insect.png',
  },
]

// Génère les options du sélecteur à partir des données du tableau
function generateSelectOptions() {
  let options = ''
  for (let i = 0; i < slidesData.length; i++) {
    options += `<option value="${slidesData[i].id}">${slidesData[i].title}</option>`
  }
  return options
}

let currentSlideIndex = 0

const slideSelector = document.getElementById('slide-selector')
const slideContainer = document.getElementById('slide-container')
const prevButton = document.getElementById('prev-button')
const nextButton = document.getElementById('next-button')

// Ajoutez les options générées au sélecteur
slideSelector.innerHTML = generateSelectOptions()

// Affiche la diapositive courante
function displayCurrentSlide() {
  const currentSlideData = slidesData[currentSlideIndex]
  slideSelector.value = currentSlideData.id
  slideContainer.innerHTML = `<h2>${currentSlideData.title}</h2><img src="images/${currentSlideData.img}"><p>${currentSlideData.content}</p>`
}

// Ajoutez un écouteur d'événements sur le sélecteur pour détecter les changements de sélection
slideSelector.addEventListener('change', (event) => {
  currentSlideIndex = slidesData.findIndex(
    (slide) => slide.id === event.target.value,
  )
  displayCurrentSlide()
})

prevButton.addEventListener('click', () => {
  currentSlideIndex =
    currentSlideIndex === 0 ? slidesData.length - 1 : currentSlideIndex - 1
  displayCurrentSlide()
})

nextButton.addEventListener('click', () => {
  currentSlideIndex =
    currentSlideIndex === slidesData.length - 1 ? 0 : currentSlideIndex + 1
  displayCurrentSlide()
})