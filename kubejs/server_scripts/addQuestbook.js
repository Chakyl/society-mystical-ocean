console.info('[SOCIETY] addQuestbook.js loaded')

PlayerEvents.loggedIn(e => {
  if (!e.player.stages.has('starting_items')) {
    e.player.stages.add('starting_items')
    e.player.give('ftbquests:book')
  }
})