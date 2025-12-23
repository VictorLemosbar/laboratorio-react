import Card from "../../Reusable-Components/Card"
import { useNavigate } from "react-router-dom"

const Activities = () => {
    const navigate = useNavigate()


    const activities = [
        {
            title: "Counter",
            icon: "",
            onclick: () => navigate("/books")
        },
        {
            title: "Book Shelf",
            icon: "",
            onclick: () => navigate("/contador")
        },
    ]

    return (
        <>
            {activities.map((activitiy) => (
                <Card
                    title={activitiy.title}
                    icon={activitiy.icon}
                    onclick= {activitiy.onclick}
                />
            ))}
        </>
    )
}

export default Activities