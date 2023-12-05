import icons from "./icons"
import images from "./images"

const navData = [
    {
        name: 'Home',
        link: 'home'
    },
    {
        name: 'Cars',
        link: 'cars'
    },
    {
        name: 'About',
        link: 'about'
    },
    {
        name: 'Why us',
        link: 'why'
    },
    {
        name: 'Testimonials',
        link: 'testimonials'
    },
    {
        name: 'Contact',
        link: 'contact'
    },
]


const locationData = [
    "Main Street 123, United States",
    "Business Avenue 456, Canada",
    "Park Road 789, United Kingdom"
]


const brandsData = [
    {
        img: icons.Audi,
        alt: 'Audi',
        width: 85,
        height: 50   
},
    {
        img: icons.BMW,
        alt: 'BMW',
        width: 60,
        height: 60    
},
    {
        img: icons.Ford,
        alt: 'Ford',
        width: 85,
        height: 32   
},
    {
        img: icons.Mazda,
        alt: 'Mazda',  
        width: 62,
        height: 50  
},
    {
        img: icons.Mecedes,
        alt: 'Mecedes',
        width: 60,
        height: 60

    },
    {
        img: icons.Skoda,
        alt: 'Skoda',
        width: 60,
        height: 60  
},
    {
        img: icons.VW,
        alt: 'VW',    
        width: 60 ,
        height: 60    
},
]


const carsData = [
    {
        type: "Hatchback",
        name: 'Ford Focus',
        price: 29,
        stars: 3.5,
        img: images.Car1,
        info: [
            {
                icon: icons.GearShift,
                text: 'Manual'
            },
            {
                icon: icons.Seat,
                text: '5 Seats'
            },
            {
                icon: icons.Gas,
                text: 'Gas'
            },
            {
                icon: icons.Engine,
                text: '1600 HP'
            },
            {
                icon: icons.Wheel,
                text: 'Front'
            },
        ]
    },
    {
        type: "Sedan",
        name: 'Toyota Corolla',
        price: 25,
        stars: 5,
        img: images.Car2,
        info: [
            {
                icon: icons.GearShift,
                text: 'Manual'
            },
            {
                icon: icons.Seat,
                text: '5 Seats'
            },
            {
                icon: icons.Gas,
                text: 'Gas'
            },
            {
                icon: icons.Engine,
                text: '1600 HP'
            },
            {
                icon: icons.Wheel,
                text: 'Front'
            },
        ]
    },
    {
        type: "SUV",
        name: 'Honda CR-V',
        price: 35,
        stars: 4.5,
        img: images.Car3,
        info: [
            {
                icon: icons.GearShift,
                text: 'Automatic'
            },
            {
                icon: icons.Seat,
                text: '5 Seats'
            },
            {
                icon: icons.Gas,
                text: 'Gas'
            },
            {
                icon: icons.Engine,
                text: '1600 HP'
            },
            {
                icon: icons.Wheel,
                text: 'Front'
            },
        ]
    },
    {
        type: "Convertible",
        name: 'Mazda MX-5',
        price: 32,
        stars: 4.9,
        img: images.Car2 ,
        info: [
            {
                icon: icons.GearShift,
                text: 'Manual'
            },
            {
                icon: icons.Seat,
                text: '5 Seats'
            },
            {
                icon: icons.Gas,
                text: 'Gas'
            },
            {
                icon: icons.Engine,
                text: '1600 HP'
            },
            {
                icon: icons.Wheel,
                text: 'Front'
            },
        ]
    },
]

const data = {
    navData,
    locationData,
    brandsData,
    carsData
}


export default data