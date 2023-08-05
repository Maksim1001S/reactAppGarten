import React from 'react'
import s from "./CategoryItem.module.css"
import { Link } from 'react-router-dom'

const CategoryItem = ({title, image, id}) => {
  return (
    <li key={id} className={s.category_item}>
        <Link to={`/categories/${id}`}>
            <img src={`https://gartenservice.onrender.com${image}`} alt={title} />
            <div className={s.overlay}>
                <h3>{title}</h3>
            </div>
        </Link>   
    </li>
  )
}

export default CategoryItem