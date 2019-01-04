import React from 'react'
import './Article.scss'

const Article = ({article}) => {
  return (
    <article className='article'>
      <img src={article.imagePath} alt={article.description} className="article-image" />
      <h3>{article.title}</h3>
      <h5>By: {article.author}</h5>
      <p>{article.content}</p>
      <p>{article.date}</p>
    </article>
  )
}

export default Article

// "Emily Price"
// "People in the military and active veterans can now score a bit of a discount on Apple products. Apple launched a new online store in the United States this week, specifically for veterans and active military personnel to purchase Apple products at a discount.… [+795 chars]"
// "2018-12-06T20:13:00Z"
// "Photo: Spencer Platt/Getty Images People in the military and active veterans can now score a bit of a discount on Apple products. Apple launched a new online store in the United States this week, specifically for veterans and active military personnel to purc…"
// "https://i.kinja-img.com/gawker-media/image/upload/s--j981yuG7--/c_fill,fl_progressive,g_center,h_900,q_80,w_1600/oaxbtvx1kunhllf8lbww.jpg"
// "Lifehacker.com"
// "Active Military and Veterans Can Get Big Discounts on Apple Products"
// "https://lifehacker.com/active-military-and-veterans-can-get-big-discounts-on-a-1830915985"