
import "./Profile.css"
import ProfileCard from "../ProfileCard/ProfileCard/ProfileCard"

const Profile = () => {

    const placeholders = {
        name: "Victor",
        description: "My name is Victor, I am 18 years old, and I am currently learning React. I am focused on understanding core concepts such as components, props, state, and data handling. I enjoy building small projects to practice and improve my skills, always aiming to follow good practices and write clean, readable code.",
        programmingLanguages: ["JavaScript"],
        frameworks: ["React", "Node"],
        github: "GitHub"
    };

    return (
        <div className="page">
                <ProfileCard placeholders={placeholders} />
        </div>
    )
}

export default Profile