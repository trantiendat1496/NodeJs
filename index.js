const express = require('express')
const app = express()

const productRoutes = require('./routes/products.route') 




const port = 9000;



app.set('view engine', 'pug')
app.set('views', './views')

app.use(express.static('public'));


app.get('/', (req, res) => {
    res.render('index');
})




app.use('/products', productRoutes);





app.listen(port, () => {
  console.log(`Example app listening at ` + port)
})