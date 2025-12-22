import React from "react";
import "./Home.css"

import Card from "../../Reusable-Components/Card";
import { useNavigate } from "react-router-dom";

import profileicon from "../../assets/Home/noun-profile-card-7509958.png"

function Home() {
    const navigate = useNavigate()


    const VoltarLogin = () => {
        return navigate("/")
    }

    const ProfileCardPath = () => {
        return navigate("/profile")
    }


    const homeCards = [
        {
            title: "Login",
            icon: profileicon,
            onClick: () => navigate("/")
        },
         {
            title: "Activities",
            icon: profileicon,
            onclick: () => navigate("/activities")
        },
        {
            title: "Profile",
            icon: profileicon,
            onclick: () => navigate("/profile")
        },
    ]


    return (
        <>
            {homeCards.map((home) => (
                <Card
                    key={home.title}
                    title={home.title}
                    icon={home.icon}
                    onclick={home.onclick}
                />
            ))}
        </>
    )
}

export default Home;