import ProfileBody from "../Body/ProfileBody"
import ProfileCharts from "../Charts/ProfileCharts"
import ProfileImage from "../Image/ProfileImage"


import "./ProfileCard.css"

const ProfileCard = ({ placeholders }) => {


    return (
        <div className="profile-card">
            <ProfileImage />

            <ProfileBody
                name={placeholders.name}
                description={placeholders.description}
            />

            <ProfileCharts
                language={placeholders.programmingLanguages}
                framework={placeholders.frameworks}
                github={placeholders.github}
            />
        </div>

    )
}

export default ProfileCard