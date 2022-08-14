import { faker } from '@faker-js/faker'
import express, {json} from 'express'
import { Router } from 'express'

const app = express()
const router = Router()
app.use(json())
app.use(express.urlencoded({ extended: true }))



router.post('/login', async (req, res) => {
    const {inpUsuario} = req.body
    req.session.user = inpUsuario
    //console.log(req.session.user)
    //res.json(req.session.user)
    //sessionActiva = req.session.user
    res.redirect('/')
    return
})

router.get('/api/productos-test', (req, res) => {
    let cant = 5
    //console.log(cant)
    faker.locale ="es"
    let productos = []
    for(let i=0; i<cant; i++)
    {
        productos.push ({
            id: i+1,
            title:faker.commerce.product(),
            price: faker.commerce.price(),
            thumbnail: faker.image.imageUrl()
        })
    }
    res.json(productos)
})

export default router