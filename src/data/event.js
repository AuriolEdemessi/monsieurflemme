// Toutes les infos de l'événement en cours.
// Pour un prochain événement du Flemmard Club, on duplique ce fichier et on change les valeurs.

export const event = {
  club: 'Flemmard Club',
  title: 'Halloween',
  subtitle: 'Special Edition',
  tagline: 'Frissons, beats et bonne énergie !',
  motto: 'Même quand on a la flemme, on sait faire la fête.',

  // Heure locale du Bénin (UTC+1)
  startsAt: '2026-10-31T18:00:00+01:00',
  dateLong: 'Samedi 31 octobre 2026',
  dateShort: 'Sam. 31 oct.',
  time: 'Dès 18h',

  venue: 'Le Yao',
  area: 'Akpakpa-Centre',
  city: 'Cotonou',
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Le+Yao+Akpakpa+Cotonou',

  price: 5000,
  currency: 'F',
  capacity: 30,
  maxTicketsPerOrder: 4,

  dj: 'Big H',
  dressCode: 'Viens en ton artiste préféré !',
  slogan: 'Deux ambiances, un seul club !',

  program: [
    { icon: 'film', title: "Film d'horreur", text: 'Frissons sur grand écran.' },
    { icon: 'mic', title: 'Karaoké', text: 'Monte sur scène et exprime ton talent.' },
    { icon: 'popcorn', title: 'Popcorn & Bissap', text: 'Des saveurs pour accompagner la vibe.' },
    { icon: 'games', title: 'Jeux', text: 'Des jeux et animations pour tous.' },
    { icon: 'makeup', title: 'Atelier maquillage', text: 'Transformation spéciale Halloween.' },
    { icon: 'costume', title: 'Déguisement', text: 'Viens dans le style de ton artiste préféré !' },
  ],

  pillars: ['Cinéma', 'Musique', 'Jeux', 'Créativité', 'Rencontres'],

  // Série d'affiches (sources dans design/affiches, rendu : sh design/affiches/render.sh)
  posters: [
    { src: '/events/halloween/affiche-teaser.jpg', label: 'Le teaser' },
    { src: '/events/halloween/affiche-infos.jpg', label: 'Toutes les infos' },
  ],
  heroVisual: '/events/halloween/mascotte-citrouille.webp',
  ambianceVisual: '/events/halloween/photo-dj.webp',

  // Numéro WhatsApp de réservation (format international, sans +) : +229 01 91 31 93 57
  whatsapp: '2290191319357',

  // Ajouter les liens quand ils sont prêts, ex : { label: 'Instagram', url: 'https://instagram.com/...' }
  socials: [],
}

export function formatPrice(amount) {
  return `${amount.toLocaleString('fr-FR').replace(/ | /g, ' ')} ${event.currency}`
}
