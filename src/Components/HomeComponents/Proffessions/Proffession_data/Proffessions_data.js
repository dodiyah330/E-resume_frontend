import IT from './Proffessions_images/IT.jpg'
import agri from './Proffessions_images/agri.jpg'
import chemistry from './Proffessions_images/chemistry.jpg'
import mechanical from './Proffessions_images/mechanical.jpg'
import teacher from './Proffessions_images/teacher.jpg'
import doctor from './Proffessions_images/doctor.jpg'
import Agri_sector_data from './Agri_sector_data/Agri_sector_data'
import IT_sector_data from './IT_sector_data/IT_sector_data.js'
import Mechanical_sector_data from './Mechanical_sector_data/Mechanical_sector_data.js'
import Medical_sector_data from './Medical_sector_data/Medical_sector_data'
import Teacher_sector_data from './Teaching_sector_data/Teaching_sector_data'
import Chemical_sector_data from './Chemical_sector_data/Chemical_sector_data'

function Proffessions_data() {

    const prof_data = [
        {
            "id": 0,
            "prof_name": "it sector",
            "img_url": IT,
            "sector_data":IT_sector_data(),
        },
        {
            "id": 1,
            "prof_name": "mechanical sector",
            "img_url": mechanical,
            "sector_data":Mechanical_sector_data(),

        },
        {
            "id": 2,
            "prof_name": "medical sector",
            "img_url": doctor,
            "sector_data":Medical_sector_data(),

        },
        {
            "id": 3,
            "prof_name": "teaching sector",
            "img_url": teacher,
            "sector_data":Teacher_sector_data(),

        },
        {
            "id": 4,
            "prof_name": "agri sector",
            "img_url": agri,
            "sector_data":Agri_sector_data(),

        },
        {
            "id": 5,
            "prof_name": "chemical sector",
            "img_url": chemistry,
            "sector_data":Chemical_sector_data(),

        },
    ]

    return prof_data

}

export default Proffessions_data