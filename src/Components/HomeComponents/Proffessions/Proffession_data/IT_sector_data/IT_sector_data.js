import webdeveloper from './IT_demo_resumes.js/Webdeveloper'
import Graphic_designer from './IT_demo_resumes.js/Graphic_designer'
import Digital_marketer from './IT_demo_resumes.js/Digital_marketer'

function IT_sector_data() {

    const IT_sector_data = [
        {
            "id": 0,
            "branch_name": "web developer",
            "branch_resume": webdeveloper(),
        },
        {
            "id": 1,
            "branch_name": "graphic designer",
            "branch_resume": Graphic_designer()
        },
        {
            "id": 2,
            "branch_name": "digital marketer",
            "branch_resume": Digital_marketer()
        },

    ]

    return IT_sector_data

}

export default IT_sector_data