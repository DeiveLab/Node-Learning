console.log('Client-side JS is loaded')

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')


weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    window.open(`/weather?address=${search.value}`, '_self')

})