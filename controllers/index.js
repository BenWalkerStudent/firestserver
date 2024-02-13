let that = 'hello world';

const awesomeFunction = (req, res) => {

    res.send(that)


}


const makeBtn = (req, res) => {

    res.send('Tooele tech rules')

    document.querySelector('#btn').addEventListener('click', (e) => {


    })

    console.log('sucess')
}

const game = (req, res) => {

    res.send(`<!DOCTYPE html>
        < html lang = "en" >

        <head>
            <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Document</title>
                    <link rel="stylesheet" href="style.css">
                    </head>

                    <body>
                        <p id="adlib">plants</p>
                    </body>
                    <script>
                    
//prompts the questions

let noun = prompt("give me a noun")

let nounPlural = prompt("give me plural noun")

let verb = prompt("give me a verb (don't end it in ing or s)")

let adjective = prompt("give me an adjective")

let person = prompt("give me a person")


//picks a random adlib


let num = Math.floor(Math.random() * 2);

//stores the adlibs
let adlibs = [${verb}ing is an ${adjective} way to attract ${nounPlural}!, ${person} uses ${noun} to attract ${nounPlural} all the time!,
${person} often ${verb}s as a part of his ${noun}, he does it to earn ${nounPlural} so he can buy ${adjective} clown noses,
${person} advises you often ${verb}, to be at your best possible ${adjective}ness.${noun} often play a key role in this and this plays a major role in getting ${nounPlural}]



//generates your adlib
document.getElementById("adlib").innerHTML = adlibs[num]</script>

                </html>`)

}

module.exports = { awesomeFunction, makeBtn }


