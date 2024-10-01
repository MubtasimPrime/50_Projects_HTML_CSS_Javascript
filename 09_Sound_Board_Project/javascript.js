const sound = ['Applause', 'Boo', 'Gasp', 'Tada', 'Victory', 'Wrong']

sound.forEach(sounds => {
    const btn = document.createElement('button')
    btn.classList.add('btn')

    btn.innerText = sounds

    btn.addEventListener('click', () => {
        stopSongs()
        document.getElementById(sounds).play()
    })

    document.getElementById('buttons').appendChild(btn)
})

function stopSongs() {
    sound.forEach(sound => {
        const song = document.getElementById(sound)

        song.pause()
        song.currenTime = 0
    })
}