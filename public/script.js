text1 = baffle(".baffle")
text1.set(
  {
    characters: '▒░▓ ▒<██/ >▓█░░ ▒█▒ █<░░▒ █░▒░ <▓▓ ▓▒',
    speed:120
}
)

text1.start()
text1.reveal(1000)
setTimeout(() => {
    document.querySelector(".baffle").innerHTML = `my name is artimum and i'm a 17 year old web-developer , i'm interested in math , physics , computer stuff , chess and art. i do some code demos sometimes , check them on my <a class="linky" href="https://github.com/artimum1">Github</a> or on <a class="linky" href="https://replit.com/artimum">Replit</a> , i share my arts usually on my <a class="linky" href="https://instagram.com/artimum1">Instagram</a> by the way if you are interested also , lets be friends contact me on discord i always reply`
}, 1090);