import React from 'react'

const ContentItem = ({ description, title, url, image }) => (
  <div>
    <h3 className="title_item">{title}</h3>
    <img src={image} />
    <p className="p_description">{description}</p>
    <button type>
      <a href={url} target="_blank">
        View project
      </a>
    </button>
  </div>
)

export default ContentItem
