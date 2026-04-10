const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())

const carros = {
    tipos: [
        {
            nombre: 'carrera',
            autos: [
                {
                    nombre: 'McLaren P1',
                    marca: 'McLaren',
                    año: 2020,
                    precio: 200000,
                    color: 'rojo',
                    potencia: 900,
                    velocidadMax: 350,
                    combustible: 'gasolina',
                    imagen: 'https://i.ibb.co/Xk7j6qvh/Mclaren.jpg'
                },
                {
                    nombre: 'Lamborghini Huracán',
                    marca: 'Lamborghini',
                    año: 2021,
                    precio: 180000,
                    color: 'verde',
                    potencia: 850,
                    velocidadMax: 325,
                    combustible: 'gasolina',
                    imagen: 'https://i.ibb.co/sp738Nmh/lamborghini.jpg'
                },
                {
                    nombre: 'Ferrari F1',
                    marca: 'Ferrari',
                    año: 2022,
                    precio: 300000,
                    color: 'rojo',
                    potencia: 1000,
                    velocidadMax: 360,
                    combustible: 'gasolina',
                    imagen: 'https://i.ibb.co/vCqTpVqk/ferrari.jpg'
                }
            ]
        },
        {
            nombre: 'clasico',
            autos: [
                {
                    nombre: 'Ford Mustang 1967',
                    marca: 'Ford',
                    año: 1967,
                    precio: 50000,
                    color: 'amarillo',
                    potencia: 300,
                    velocidadMax: 200,
                    combustible: 'gasolina',
                    imagen: 'https://i.ibb.co/3m3sfW6Q/ford-mustang.jpg'
                },
                {
                    nombre: 'Chevrolet Camaro 1969',
                    marca: 'Chevrolet',
                    año: 1969,
                    precio: 45000,
                    color: 'negro',
                    potencia: 320,
                    velocidadMax: 210,
                    combustible: 'gasolina',
                    imagen: 'https://i.ibb.co/rRf6Vh1N/chevrolet-camaro.jpg'
                },
                {
                    nombre: 'Volkswagen Escarabajo',
                    marca: 'Volkswagen',
                    año: 1970,
                    precio: 20000,
                    color: 'azul',
                    potencia: 100,
                    velocidadMax: 140,
                    combustible: 'gasolina',
                    imagen: 'https://i.ibb.co/dssgWCym/escarabajo.avif'
                }
            ]
        },
        {
            nombre: 'todoterreno',
            autos: [
                {
                    nombre: 'Toyota Land Cruiser',
                    marca: 'Toyota',
                    año: 2021,
                    precio: 60000,
                    color: 'gris',
                    potencia: 400,
                    velocidadMax: 220,
                    combustible: 'diesel',
                    imagen: 'https://i.ibb.co/67gmGypN/Toyota-land.jpg'
                },
                {
                    nombre: 'Jeep Wrangler',
                    marca: 'Jeep',
                    año: 2022,
                    precio: 55000,
                    color: 'naranja',
                    potencia: 350,
                    velocidadMax: 200,
                    combustible: 'gasolina',
                    imagen: 'https://i.ibb.co/DP5zczM6/jeep.jpg'
                },
                {
                    nombre: 'Ford Raptor',
                    marca: 'Ford',
                    año: 2023,
                    precio: 70000,
                    color: 'negro',
                    potencia: 450,
                    velocidadMax: 230,
                    combustible: 'gasolina',
                    imagen: 'https://i.ibb.co/VpW8bqv0/ford-raptor.avif'
                }
            ]
        },
        {
            nombre: 'deportivo',
            autos: [
                {
                    nombre: 'Porsche 911',
                    marca: 'Porsche',
                    año: 2022,
                    precio: 120000,
                    color: 'negro',
                    potencia: 500,
                    velocidadMax: 310,
                    combustible: 'gasolina',
                    imagen: 'https://i.ibb.co/ybQcF73/porche.jpg'
                },
                {
                    nombre: 'Audi R8',
                    marca: 'Audi',
                    año: 2021,
                    precio: 140000,
                    color: 'gris',
                    potencia: 570,
                    velocidadMax: 330,
                    combustible: 'gasolina',
                    imagen: 'https://i.ibb.co/wNZ8Jqwy/audi-r8.jpg'
                },
                {
                    nombre: 'Nissan GTR',
                    marca: 'Nissan',
                    año: 2020,
                    precio: 110000,
                    color: 'blanco',
                    potencia: 600,
                    velocidadMax: 315,
                    combustible: 'gasolina',
                    imagen: 'https://i.ibb.co/N67GD3Wh/nissan-gtr.jpg'
                }
            ]
        },
        {
            nombre: 'lujo',
            autos: [
                {
                    nombre: 'Mercedes-Benz Clase S',
                    marca: 'Mercedes-Benz',
                    año: 2023,
                    precio: 100000,
                    color: 'blanco',
                    potencia: 450,
                    velocidadMax: 250,
                    combustible: 'gasolina',
                    imagen: 'https://i.ibb.co/7dxq0W9M/Mercedes-Benz-Clase-S-2018-18.jpg'
                },
                {
                    nombre: 'BMW Serie 7',
                    marca: 'BMW',
                    año: 2022,
                    precio: 95000,
                    color: 'negro',
                    potencia: 400,
                    velocidadMax: 250,
                    combustible: 'gasolina',
                    imagen: 'https://i.ibb.co/67hmdKsL/BMW-7-Series-black-3.jpg'
                },
                {
                    nombre: 'Audi A8',
                    marca: 'Audi',
                    año: 2021,
                    precio: 90000,
                    color: 'gris',
                    potencia: 420,
                    velocidadMax: 250,
                    combustible: 'gasolina',
                    imagen: 'https://i.ibb.co/ZRQspc9j/Audi-A8-L-D5-IMG-0066.jpg'
                }
            ]
        },
        {
            nombre: 'familiar',
            autos: [
                {
                    nombre: 'Toyota Sienna',
                    marca: 'Toyota',
                    año: 2022,
                    precio: 40000,
                    color: 'azul',
                    potencia: 250,
                    velocidadMax: 180,
                    combustible: 'hibrido',
                    imagen: 'https://i.ibb.co/fz5JsHF5/toyota.jpg'
                },
                {
                    nombre: 'Honda Odyssey',
                    marca: 'Honda',
                    año: 2021,
                    precio: 38000,
                    color: 'gris',
                    potencia: 240,
                    velocidadMax: 175,
                    combustible: 'gasolina',
                    imagen: 'https://i.ibb.co/K8P1D68/honda-odyssey.jpg'
                },
                {
                    nombre: 'Kia Carnival',
                    marca: 'Kia',
                    año: 2023,
                    precio: 39000,
                    color: 'blanco',
                    potencia: 260,
                    velocidadMax: 180,
                    combustible: 'gasolina',
                    imagen: 'https://i.ibb.co/D3Ww6vJ/Kia-Carnival.jpg'
                }
            ]
        },
        {
            nombre: 'electrico',
            autos: [
                {
                    nombre: 'Tesla Model 3',
                    marca: 'Tesla',
                    año: 2023,
                    precio: 50000,
                    color: 'rojo',
                    potencia: 350,
                    velocidadMax: 225,
                    combustible: 'electrico',
                    imagen: 'https://i.ibb.co/9mRxhP0T/Tesla-Model-3.jpg'
                },
                {
                    nombre: 'Tesla Model X',
                    marca: 'Tesla',
                    año: 2022,
                    precio: 90000,
                    color: 'blanco',
                    potencia: 500,
                    velocidadMax: 250,
                    combustible: 'electrico',
                    imagen: 'https://i.ibb.co/LXcPNj5B/Tesla-Model-X.jpg'
                },
                {
                    nombre: 'Nissan Leaf',
                    marca: 'Nissan',
                    año: 2021,
                    precio: 30000,
                    color: 'verde',
                    potencia: 200,
                    velocidadMax: 160,
                    combustible: 'electrico',
                    imagen: 'https://i.ibb.co/JW8Td63K/Nissan-Leaf.avif'
                }
            ]
        }
    ]
}



app.get('/', (req, res) => {
    res.send('api de carros funcionando')
})

app.get('/carros', (req, res) => {
    res.json(carros)
})

app.get('/carros/tipo/:nombre', (req, res) => {
    const nombre = req.params.nombre.toLowerCase()

    const tipoEncontrado = carros.tipos.find(tipo => tipo.nombre === nombre)

    if (tipoEncontrado) {
        res.json(tipoEncontrado.autos)
    } else {
        res.status(404).json({ error: 'Tipo no encontrado' })
    }
})

app.listen(3000, () => {
    console.log('Servidor corriendo en puerto 3000')
})

