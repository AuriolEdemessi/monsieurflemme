// Toutes les infos de l'événement en cours.
// Pour un prochain événement du Flemmard Club, on duplique ce fichier et on change les valeurs.

export const event = {
  club: 'Flemmard Club',
  title: 'Ciné Club',
  subtitle: 'Édition Pyjama',
  tagline: 'Canapé, popcorn, film et bonne compagnie.',
  motto: 'Même quand on a la flemme, on sait faire la fête.',

  // Heure locale du Bénin (UTC+1)
  startsAt: '2026-11-20T20:00:00+01:00',
  dateLong: 'Vendredi 20 novembre 2026',
  dateShort: 'Ven. 20 nov.',
  time: '20h strict',
  doors: 'Portes dès 19h30',

  venue: 'Le Yao',
  area: 'Akpakpa-Centre',
  city: 'Cotonou',
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Le+Yao+Akpakpa+Cotonou',

  price: 3000,
  duoPrice: 5000,
  currency: 'F',
  capacity: 30,
  maxTicketsPerOrder: 2,

  dressCode: 'Viens en pyjama, ramène ton plaid.',
  dressCodeShort: 'Viens en pyjama !',
  slogan: 'Un canapé, un film, zéro prise de tête.',

  program: [
    { icon: 'film', title: 'Projection', text: 'Le film surprise, sur grand écran. Chut.' },
    { icon: 'debrief', title: 'Débriefing', text: 'On refait le film à chaud, sans filtre.' },
    { icon: 'undercover', title: 'Undercover', text: 'Le jeu de rôles qui fait parler tout le monde.' },
    { icon: 'mic', title: 'Karaoké', text: 'Micro ouvert après la séance. Assume ton tube.' },
    { icon: 'popcorn', title: 'Popcorn & drink', text: 'Popcorn chaud et boisson offerts. Évidemment.' },
  ],

  pillars: ['Cinéma', 'Jeux', 'Karaoké', 'Popcorn', 'Pyjama'],

  // Affiches : dérivées de l'affiche officielle (dossier event/ à la racine)
  posters: [
    { src: '/events/cine/affiche-officielle.jpg', label: "L'affiche officielle" },
    { src: '/events/cine/affiche-detail.jpg', label: 'Le canapé' },
    { src: '/events/cine/affiche-titre.jpg', label: 'Le titre' },
  ],
  heroVisual: '/events/cine/affiche-officielle.jpg',
  ambianceVisual: '/events/cine/affiche-detail.jpg',

  // Numéro WhatsApp de réservation (format international, sans +) : +229 01 91 31 93 57
  whatsapp: '2290191319357',

  // Ajouter les liens quand ils sont prêts, ex : { label: 'Instagram', url: 'https://instagram.com/...' }
  socials: [],
}

export function formatPrice(amount) {
  return `${amount.toLocaleString('fr-FR').replace(/[\s\u202F\u00A0]/g, ' ')} ${event.currency}`
}
