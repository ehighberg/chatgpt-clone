import { config as envconfig } from 'dotenv'
import { Configuration, OpenAIApi } from "openai"
import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'

envconfig()

const configuration = new Configuration({
    organization: "org-brmCUWqjyEqs9ItpcPDiCBKn",
    apiKey: process.env.OPENAI_API_KEY,
})
const openai = new OpenAIApi(configuration)


const app = express()
app.use(bodyParser.json())
app.use(cors())
const port = 3080

app.post('/', async (req, res) => {
    const { message } = req.body
    console.log(message)
    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: "Say this is a test",
        max_tokens: 7,
        temperature: 0,
    })
    // console.log(response.data.choices[0].text)
    res.json({
        // data: response.data
        data: message
    })
})

app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`)
})