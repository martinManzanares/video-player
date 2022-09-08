
const $video = document.querySelector('#video')
const $play = document.querySelector('#play')
const $pause = document.querySelector('#pause')
const $forward = document.querySelector('#forward')
const $backward = document.querySelector('#backward')

$play.addEventListener('click', handlePlay)
$pause.addEventListener('click', handlePause)
$forward.addEventListener('click', handleForward)
$backward.addEventListener('click', handleBackward)

function handlePlay(){
    $video.play()
    $play.hidden = true
    $pause.hidden = false
    console.log('Le diste click al boton de Play')

}

function handlePause(){
    $video.pause()
    $pause.hidden = true
    $play.hidden = false
    console.log('Le diste clicl al boton de Pause')
}

function handleForward(){
    $video.currentTime += 10
    console.log('Para adelante 10 segundos')
}

function handleBackward(){
    $video.currentTime -= 10
    console.log('Para atras 10 segundos')
}

const $progress = document.querySelector('#progress')
$video.addEventListener('loadedmetadata', handleLoaded)
$video.addEventListener('timeupdate', handleTime)


function handleLoaded(){
    $progress.max = $video.duration
    console.log('ha cargado mi video', $video.duration)
}

function handleTime(){
    $progress.value = $video.currentTime
   // console.log('tiempo actual', $video.currentTime)
}

$progress.addEventListener('input', handleInput)

function handleInput(){
    $video.currentTime = $progress.value
    console.log($progress.value)
}