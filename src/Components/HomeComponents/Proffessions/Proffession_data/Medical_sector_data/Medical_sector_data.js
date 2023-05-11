import Doctor from './Medical_demo_resume/Doctor'
import Nurse from './Medical_demo_resume/Nurse'
import Sergeon from './Medical_demo_resume/Sergeon'
import Lab_assistance from './Medical_demo_resume/Lab_assiatance'

function Medical_sector_data() {

    const Medical_sector_data = [
        {
            "id": 0,
            "branch_name": "doctor",
            "branch_resume": Doctor(),
        },
        {
            "id": 1,
            "branch_name": "nurse",
            "branch_resume": Nurse(),
        },
        {
            "id": 2,
            "branch_name": "Lab assistance",
            "branch_resume": Lab_assistance(),
        },

        {
            "id": 3,
            "branch_name": "sergeon",
            "branch_resume": Sergeon(),
        },

    ]

    return Medical_sector_data

}

export default Medical_sector_data