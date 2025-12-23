import "./ProfileCharts.css"

const ProfileCharts = ({ language, framework, github }) => {


    const react = framework.filter(item => item.startsWith("React"))
    const node = framework.filter(item => item.startsWith("Node"))


    return (
        <div className="profile-charts">
            <div className="profile-language">
                <span className="placeholder">Programming Language:</span>
                <span className="profile-data">
                    {language
                        .filter(item => item.startsWith("Java"))
                        .map(item => (
                            <span key={item} className="tag">
                                {item}
                            </span>
                        ))}
                </span>
                <div></div>
            </div>
            <div className="profile-framework">
                <span className="placeholder">Framework:</span>
                <span className="profile-data">
                    {react.map(item => (
                            <span key={item} className="tag">
                                {item}
                            </span>
                        ))}
                </span>
                <span className="profile-data">
                    {node.map(item => (
                            <span key={item} className="tag">
                                {item}
                            </span>
                        ))}
                </span>
                <div></div>
            </div>
            <div className="profile-github">
                <span className="placeholder"> Github:</span>
                <span className="profile-data">{github}</span>
            </div>
        </div >
    )
}

export default ProfileCharts