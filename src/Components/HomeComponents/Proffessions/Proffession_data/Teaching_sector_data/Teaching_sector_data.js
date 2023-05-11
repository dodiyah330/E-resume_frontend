import Teacher from './Teaching_demo_resume/Teacher'
import Principal from './Teaching_demo_resume/Principal'

function Teaching_sector_data() {

    const Teaching_sector_data = [
        {
            "id": 0,
            "branch_name": "teacher",
            "branch_resume": Teacher(),
        },
        {
            "id": 1,
            "branch_name": "principal",
            "branch_resume": Principal(),
        },

     

    ]

    return Teaching_sector_data

}

export default Teaching_sector_data