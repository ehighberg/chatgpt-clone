import { config as envconfig } from 'dotenv'
import { Configuration, OpenAIApi } from "openai"

const configuration = new Configuration({
    organization: "org-brmCUWqjyEqs9ItpcPDiCBKn",
    apiKey: process.env.OPENAI_API_KEY,
})
const openai = new OpenAIApi(configuration)
// const response = await openai.listEngines()