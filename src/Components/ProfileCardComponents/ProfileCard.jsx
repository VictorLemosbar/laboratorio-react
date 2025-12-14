import ProfileImage from "./ProfileImage"
import ProfileBody from "./ProfileBody"
import ProfileCharts from "./ProfileCharts"


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