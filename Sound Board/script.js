const sounds = ['Aai Cha Sohala', 'Gomu Maherla', 'Karle Vithai', 'Koliwada Jingla', 'Kolivaryachi Por', 'Love Mashup']

sounds.forEach(sound =>{
    const btn = document.createElement('button')
    btn.classList.add('btn')
    btn.innerText = sound

    document.getElementById('button').appendChild(btn)

    btn.addEventListener('click',()=>{
        stopSound()
        document.getElementById(sound).play()
    })
})

function stopSound(){
    sounds.forEach(sound =>{
        const song = document.getElementById(sound)
        song.pause()
        song.currentTime = 0
    })
}