import BTech_engineer from './Agri_demo_resume.js/BTech_engineer'
import Horticulturer from './Agri_demo_resume.js/Horticulturer'


function Agri_sector_data() {

    const Agri_sector_data = [
        {
            "id": 0,
            "branch_name": "B.tech engineer",
            "branch_resume" : BTech_engineer()
        },
        {
            "id": 1,
            "branch_name": "horticulturer",
            "branch_resume" : Horticulturer()
        }, 

    ]

    return Agri_sector_data

}

export default Agri_sector_data