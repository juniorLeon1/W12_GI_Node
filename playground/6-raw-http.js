const http = require('http')
const url = 'http://api.weatherstack.com/current?access_key=78656fb6b96de019a8ebb61a6a440ec9&query=45,-75&units=f'

const request = http.request(url, (response) => {
    let data = ''

    response.on('data', (chunk) => {
        data = data + chunk.toString()
    })

    response.on('end', () => {
        const body = JSON.parse(data)
        console.log(data)
    })

})


request.on('error', (error) => {
    console.log('An error', error)
})

request.end()