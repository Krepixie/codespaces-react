const express = require("express")
const cors = require("cors")
const productRoute = require("./routes/products")

const app = express()
app.use(express.json())
app.use(cors({origin:"*"}))

app.use('/products', productRoute)

const port = 3001

app.listen(port, () => {
    console.log(`Escutando a porta ${port}`)
})