// Silhouettes partagées par les affiches (chauves-souris, oiseaux, toiles).
const ns = 'http://www.w3.org/2000/svg'

function add(parent, tag, attrs) {
  const el = document.createElementNS(ns, tag)
  for (const [k, v] of Object.entries(attrs)) el.setAttribute(k, v)
  document.getElementById(parent).appendChild(el)
  return el
}

const BAT = 'M100 30C92 18 82 14 78 20 66 8 40 2 0 12c24 8 32 24 30 44 12-8 26-6 32 6 8-8 20-8 26 4 4-6 8-8 12-4 4-4 8-2 12 4 6-12 18-12 26-4 6-12 20-14 32-6-2-20 6-36 30-44C160 2 134 8 122 20c-4-6-14-2-22 10Z M88 22l4-16 8 12z M112 22l-4-16-8 12z'
const BIRD = 'M0 12C10 2 20 0 30 10 40 0 50 2 60 12 50 8 40 10 30 20 20 10 10 8 0 12Z'

// Place une silhouette plusieurs fois : [[x, y, échelle, rotation], ...]
function scatter(parent, d, list) {
  list.forEach(([x, y, s, r]) => add(parent, 'path', { d, transform: `translate(${x} ${y}) rotate(${r}) scale(${s})` }))
}

// Toile d'araignée dans un coin : rayons + fils en arc (dir = 1 coin gauche, -1 coin droit)
function web(parent, cx, cy, dir, size = 1) {
  const spokes = 7
  const angle = (i) => (dir > 0 ? 0 : Math.PI) + dir * (Math.PI / 2) * (i / (spokes - 1)) * 0.98 + dir * 0.02
  const pt = (i, r) => [cx + Math.cos(angle(i)) * r * size, cy + Math.sin(angle(i)) * r * size]
  for (let i = 0; i < spokes; i++) {
    const [x, y] = pt(i, 390)
    add(parent, 'path', { d: `M${cx} ${cy}L${x} ${y}` })
  }
  for (const r of [95, 170, 245, 320]) {
    let d = ''
    for (let i = 0; i < spokes - 1; i++) {
      const [x1, y1] = pt(i, r)
      const [x2, y2] = pt(i + 1, r)
      const [mx, my] = pt(i + 0.5, r * 0.82)
      d += `${i === 0 ? `M${x1} ${y1}` : ''}Q${mx} ${my} ${x2} ${y2}`
    }
    add(parent, 'path', { d })
  }
}
