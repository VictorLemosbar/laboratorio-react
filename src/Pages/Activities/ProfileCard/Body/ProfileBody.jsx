import "./ProfileBody.css"

const ProfileBody = ({name, description}) => {

    return (
        <div className="profile-body">
            <p className="profile-name">{name}</p>
            <p className="profile-description">{description}</p>
        </div>
    )

}

export default ProfileBody