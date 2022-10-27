import React from "react"
import { useState } from "react"
import { useEffect } from "react"
import Link from "./Link"

const Profile = ({ width }) => {
  const [src, setSrc] = useState("")
  useEffect(() => {
    if (window.innerWidth < 768) setSrc("/img/icon-menu.svg")
    else setSrc("/img/icon-back.svg")
  })

  return (
    <header className="profile">
      <img
        src="/img/profile.png"
        id="profile__img"
        width={"88px"}
        height={"88px"}
      />
      <p>Chukwudumebi Orji</p>
      <Link id={"twitter"} name={"@Hennessyfarda"} url={""} />
      <Link id={"slack"} name={"morj"} url={""} />
      <img src={src} id="menu__icon" />
    </header>
  )
}

export default Profile
