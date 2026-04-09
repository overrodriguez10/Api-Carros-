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
                    imagen: 'https://ibb.co/5xrGCPfN'
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
                    imagen: 'https://ibb.co/ZR9TqFL3'
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
                    imagen: 'https://ibb.co/xKLBWXL6'
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
                    imagen: 'https://ibb.co/hF6MXHQw'
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
                    imagen: 'https://ibb.co/zTHRzg0D'
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
                    imagen: 'https://ibb.co/6ccBn95X'
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
                    imagen: 'https://ibb.co/NdZsfFk7'
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
                    imagen: 'https://ibb.co/Q7rpSpHq'
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
                    imagen: 'https://ibb.co/S7XpH3KD'
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
                    imagen: 'https://ibb.co/gBRLZhn'
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
                    imagen: 'https://ibb.co/3y5VfbM1'
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
                    imagen: 'https://ibb.co/FbndZW8v'
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
                    imagen: 'https://ibb.co/395nPNJ6'
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
                    imagen: 'https://ibb.co/tTf4d0CF'
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
                    imagen: 'https://ibb.co/9mxXkyPD'
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
                    imagen: 'https://ibb.co/v6G9SkqG'
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
                    imagen: 'https://ibb.co/8QChbMQ'
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
                    imagen: 'https://ibb.co/hp92n46'
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
                    imagen: 'https://ibb.co/twy0zR6s'
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
                    imagen: 'https://ibb.co/VczNwnmb'
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
                    imagen: 'https://ibb.co/RGtKSrj9'
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

