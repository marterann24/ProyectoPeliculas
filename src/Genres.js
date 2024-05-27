import cienciaFiccion  from './Components/img/ficcion1.jpeg'
import action  from './Components/img/accion2.jpeg'
import comedy  from './Components/img/comedy.jpg'
import drama  from './Components/img/drama2.webp'
import horror  from './Components/img/terror.webp'

export const genres = [
    {
        id:1,
        title:'Ciencia Ficcion',
        description:'Experimenta aventuras espaciales y viajes en el tiempo.',
        image:`${cienciaFiccion}`
    },
    {
        id:2,
        title:'Action',
        description:'Haz que tu pulso se acelere con acción de alto riesgo',
        image:`${action}`
    },
    {
        id:3,
        title:'Comedy',
        description:'Ríete a carcajadas con las películas y series más divertidas.',
        image:`${comedy}`
    },
    {
        id:4,
        title:'Drama',
        description:'Sumérgete en historias apasionantes y personajes complejos.',
        image:`${drama}`
    },
    {
        id:5,
        title:'Horror',
        description:'Grita junto con terroríficos thrillers y sustos sobrenaturales',
        image:`${horror}`
    }
]