import React from "react";
import "./Home.css"

import Card from "../../Reusable-Components/Card";
import { useNavigate } from "react-router-dom";


function Home() {
    const navigate = useNavigate()


    const VoltarLogin = () => {
        return navigate("/")
    }

    const ProfileCardPath = () => {
        return navigate("/profile")
    }


    const Home = [
        {
            title: "Login",
            icon: "",
            onclick: () => navigate("/")
        },
         {
            title: "Activities",
            icon: "",
            onclick: () => navigate("/activities")
        },
        {
            title: "Profile",
            icon: "",
            onclick: () => navigate("/profile")
        },
    ]


    return (
       <>
            {Home.map((home) => {
                <Card
                    title={home.title}
                    icon={home.icon}
                    onclick= {home.onclick}
                />
            })}
        </>
    )
}

export default Home;