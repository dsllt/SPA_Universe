import { Router } from './router.js'

const router = new Router()

router.add('/', 'pages/home.html')
router.add('/universe', 'pages/universe.html')
router.add('/explore', 'pages/explore.html')
router.add(404, 'pages/404.html')

router.handle()
window.onpopstate = () => router.handle()
window.route = () => router.route()

//event listener
const homeBtn = document.querySelector('.nav-home')
const universeBtn = document.querySelector('.nav-universe')
const exploreBtn = document.querySelector('.nav-explore')
const body = document.querySelector('body')

homeBtn.addEventListener('click', () => {
  homeBtn.classList.add('focus')
  universeBtn.classList.remove('focus')
  exploreBtn.classList.remove('focus')
  body.classList.remove('bg_universe')
  body.classList.remove('bg_explore')
})

universeBtn.addEventListener('click', () => {
  homeBtn.classList.remove('focus')
  universeBtn.classList.add('focus')
  exploreBtn.classList.remove('focus')
  body.classList.add('bg_universe')
  body.classList.remove('bg_explore')
})

exploreBtn.addEventListener('click', () => {
  homeBtn.classList.remove('focus')
  universeBtn.classList.remove('focus')
  exploreBtn.classList.add('focus')
  body.classList.remove('bg_universe')
  body.classList.add('bg_explore')
})
