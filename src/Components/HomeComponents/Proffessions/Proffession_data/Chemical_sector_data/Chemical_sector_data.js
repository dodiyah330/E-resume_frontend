import Industrial_Research_Scientist from "./Chemical_demo_resume.js/Industrial_Research_Scientist."
import Chemical_engineer from "./Chemical_demo_resume.js/Chemical_engineer"
import Lab_assistant from "./Chemical_demo_resume.js/Lab_assistant"

function Chemical_sector_data() {

    const Chemical_sector_data = [
        {
            "id": 0,
            "branch_name": "Industrial Research Scientist.",
            "branch_resume" : Industrial_Research_Scientist()
        },
        {
            "id": 1,
            "branch_name": "Chemical engineer",
            "branch_resume" : Chemical_engineer()
        },
        
        {
            "id": 2,
            "branch_name": "lab assistant",
            "branch_resume" : Lab_assistant()
        },
        
    ]

    return Chemical_sector_data
}

export default Chemical_sector_data