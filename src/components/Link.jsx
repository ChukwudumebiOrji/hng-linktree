import React from "react"

const Link = ({ url, name, id }) => {
  return (
    <li>
      <a href={url} id={id}>
        {name}
      </a>
    </li>
  )
}

export default Link
