import React from "react"
import Link from "./Link"
// import { Link } from "react-router-dom"

const linksData = [
  {
    url: "https://training.zuri.team/",
    name: "Zuri Team",
    id: "btn__zuri",
  },
  {
    url: "http://books.zuri.team ",
    name: "Zuri Books",
    id: "books",
  },
  {
    url: "https://books.zuri.team/python-for-beginners?ref_id=morj",
    name: "Python Books",
    id: "book__python",
  },
  {
    url: "https://background.zuri.team",
    name: "Background Check for Coders",
    id: "pitch",
  },
  {
    url: "https://books.zuri.team/design-rules ",
    name: "Design Books",
    id: "book__design",
  },
]

const Links = () => {
  return (
    <main>
      <ul className="links">
        {linksData.map((link, i) => {
          return <Link key={i} {...link} />
        })}
        <Link url="/contact" name={"Contact Me"} id="contact"></Link>
      </ul>
      <section className="img__links">
        <a>
          <img src="/img/icon-slack.svg" alt="" />
        </a>
        <a>
          <img src="/img/icon-github.svg" alt="" />
        </a>
      </section>
    </main>
  )
}

export default Links
