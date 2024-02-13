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
                    <script></script>

                </html>`)

}

module.exports = { awesomeFunction, makeBtn }


