import Auto_mechanic from './Mechanical_demo_resume/Auto_mechanic'
import Senior_mechanical from './Mechanical_demo_resume/Senior_mechanical'
import Research_and_developement from './Mechanical_demo_resume/Research_and_developement'

function Mechanical_sector_data() {

    const Mechanical_sector_data = [
        {
            "id": 0,
            "branch_name": " Auto machanic",
            "branch_resume": Auto_mechanic(),
        },
        {
            "id": 1,
            "branch_name": "senior machanical engineer",
            "branch_resume":Senior_mechanical() ,
        },
        {
            "id": 2,
            "branch_name": "Research and develpement engineer",
            "branch_resume": Research_and_developement(),
        },
        
    ]

    return Mechanical_sector_data

}

export default Mechanical_sector_data