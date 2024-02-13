let that = 'hello world';

const awesomeFunction = (req, res) => {

    res.send(that)


}


const makeBtn = (req, res) => {

    res.send('<button id="btn">PRESS ME</button>')

    document.querySelector('#btn').addEventListener('click', (e) => {


    })

    console.log('sucess')
}

module.exports = { awesomeFunction, makeBtn }


