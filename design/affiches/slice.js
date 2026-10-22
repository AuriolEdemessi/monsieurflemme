// Découpe chaque titre .sliced en trois bandes décalées (effet « tranché »).
for (const el of document.querySelectorAll('.sliced')) {
  const text = el.textContent
  el.innerHTML = `<span class="ghost-text">${text}</span>` +
    `<span class="band">${text}</span>`.repeat(3)
}
