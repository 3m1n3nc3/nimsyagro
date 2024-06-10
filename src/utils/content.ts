import iconCleanEnergy from "@/assets/icons/clean-energy.png"
import iconClimateAction from "@/assets/icons/climate-action.png"
import iconNoHunger from "@/assets/icons/no-hunger.png"
import iconNoPoverty from "@/assets/icons/no-poverty.png"
import image21 from '@/assets/images/transfer_money.svg'
import image22 from '@/assets/images/wind_turbine.svg'
import image23 from '@/assets/images/environment-rafiki.svg'
import image24 from '@/assets/images/healthy-food.svg'
import slide1 from "@/assets/products/1_nimsy_solar_pumps.png"
import slide1_o from "@/assets/products/1_nimsy_solar_pumps_o.png"
import slide2 from "@/assets/products/2_nimsy_solar_thresher.png"
import slide2_o from "@/assets/products/2_nimsy_solar_thresher_o.png"
import slide3 from "@/assets/products/3_nimsy_solar_mill.png"
import slide3_o from "@/assets/products/3_nimsy_solar_mill_o.png"
import slide4 from "@/assets/products/4_nimsy_solar_dryer.png"
import slide4_o from "@/assets/products/4_nimsy_solar_dryer_o.png"
import slide5 from "@/assets/products/5_rural_solar_hub.jpg"
import slide5_o from "@/assets/products/5_rural_solar_hub_o.jpg"

export const oldSlides = [
    {
        id: 'np1-solar-irrigation-pump',
        image: '/assets/img/slide-1.jpg',
        style: 1,
        demo: 'https://www.youtube.com/watch?v=psXp6ounOto',
        title: 'Nimsy Solar Pump (NP1)',
        info: 'Optimized for 1-2 acres of farm land, pumps up to 10,000 liters per hour, comes with a 300 watts foldable solar panel, battery back up and can be used to charge phones and lighten homes with led bulbs.'
    },
    {
        id: 'np2-solar-irrigation-pump',
        image: '/assets/img/slide-3.jpg',
        style: 2,
        demo: 'https://www.youtube.com/watch?v=NnW_rDERu-w',
        title: 'Nimsy Solar Pump (NP 2)',
        info: 'Optimized for over 10 acres of farm land, pump up to 30,000 liters of water per hour, 900 watts retractable solar panel mounted on two-wheeled cart for easy mobility.'
    },
    {
        id: 'solar-thresher',
        image: '/assets/img/slide-4.jpg',
        style: 1,
        demo: 'https://www.youtube.com/watch?v=DjZfEEquksc',
        title: 'Nimsy Solar Thresher',
        info: 'Threshes 300kg of grains per hour particularly maize and rice, 1,200 watts retractable solar panel mounted on a four-wheeled cart for mobility, produces 2.5KVA of power and the excess are stored in batteries that can lighten 7 homes in off-grid rural communities. Waste products of maize cob and rice stalk are recycled into clean charcoal briquettes for cooking.'
    },
    {
        id: 'solar-dryer',
        image: '/assets/img/slide-2.jpg',
        style: 2,
        demo: 'https://www.youtube.com/watch?v=BbFBVyVA2WE',
        title: 'Nimsy Solar Dryer',
        info: 'Dries grains and vegetables faster and hygienically, equipped with 300 watts solar panel, air blower and drying compartment mounted on a four-wheeled cart for easy mobility.'
    }
]

export const slides = [
    {
        id: 'nimsy_solar_pumps',
        image: slide1,
        image_o: slide1_o,
        icon: 'fa-solid fa-water',
        style: 1,
        demo: 'https://www.youtube.com/watch?v=Cx_D8gs4MbU',
        title: 'Nimsy Solar Pumps',
        info: 'It is mobile and optimized for over 10 acres of farmland, pumps 30,000 liters of irrigation water per hour. It is helping smallholder farmers cultivate crops all year and save over $55 in fuel cost per month.'
    },
    {
        id: 'nimsy_solar_thresher',
        image: slide2,
        image_o: slide2_o,
        icon: 'fa-solid fa-wheat-awn',
        style: 2,
        demo: 'https://www.youtube.com/watch?v=fI2yUcBOqsM&t=2s',
        title: 'Nimsy Solar Thresher',
        info: 'It threshes over 500kg of multiple grains such as rice, maize, soybean and sorghum per hour. It is increasing the efficiency and productivity of farmers as it threshes grains 75 times faster than manual methods.'
    },
    {
        id: 'nimsy_solar_mill',
        image: slide3,
        image_o: slide3_o,
        icon: 'fa-solid fa-sun',
        style: 1,
        demo: 'https://www.youtube.com/watch?v=cKOCR3rFa0k',
        title: 'Nimsy Solar Mill',
        info: 'It mills 50 kg of grains per hour and can be powered by the solar thresher system.'
    },
    {
        id: 'nimsy_solar_dryer',
        image: slide4,
        image_o: slide4_o,
        icon: 'fa-solid fa-wind',
        style: 2,
        demo: 'https://www.youtube.com/watch?v=oKEyq-RQyI4',
        title: 'Nimsy Solar Dryer',
        info: 'It dries perishables like tomatoes and fruits faster and hygienically and increases their shelf life of perishables from 3 days to 12 months.'
    },
    {
        id: 'rural_solar_hub',
        image: slide5,
        image_o: slide5_o,
        icon: 'fa-solid fa-solar-panel',
        style: 2,
        demo: null,
        title: 'Rural Solar Hub',
        info: `This is a centralized facility from which we provide solar agricultural services to smallholder farmers on a pay-per-use model. Services offered are solar irrigation pumps rental, solar grain threshing, solar drying and solar milling. Our Rural solar hubs contribute to environmental sustainability by reducing farmers' reliance on fossil fuels, minimizing greenhouse gas emissions, and mitigating the adverse impacts of climate change.`
    }
]

export const impactPotential = [
    {
        image: iconNoPoverty,
        image2: image21,
        title: 'No Poverty',
        info: 'Improving farmers incoming and curtail high operating cost from using fuel agric equipment. Farmers will be able to save up to $60 monthly',
    },
    {
        image: iconCleanEnergy,
        image2: image22,
        title: 'Affordable and Clean Energy',
        info: 'Small holder farmers will have access to our Affordable and Clean Energy agricultural equipment and services.',
    },
    {
        image: iconClimateAction,
        image2: image23,
        title: 'Climate Action',
        info: 'Reducing over 5000 Mt of carbon emission into the atmosphere, thus slowing down climate change.',
    },
    {
        image: iconNoHunger,
        image2: image24,
        title: 'Zero Hunger',
        info: 'Increase food production through affordable irrigation and drying services to help farmers grow food all season and curtail high post harvest cost.',
    },
]

export const socials = [
    {
        name: 'Facebook',
        icon: 'fab fa-facebook',
        link: 'https://facebook.com/nimsyagrosolar'
    },
    {
        name: 'Facebook',
        icon: 'fab fa-instagram',
        link: 'https://www.instagram.com/nimsyagrosolar'
    },
    {
        name: 'Facebook',
        icon: 'fab fa-youtube',
        link: 'https://www.youtube.com/@NimsysolarAgro'
    },
    {
        name: 'Facebook',
        icon: 'fab fa-linkedin',
        link: 'https://www.linkedin.com/company/nimsy-agro-solar'
    },
    {
        name: 'Facebook',
        icon: 'fab fa-x-twitter',
        link: 'https://x.com/nimsyagrosolar'
    },
]