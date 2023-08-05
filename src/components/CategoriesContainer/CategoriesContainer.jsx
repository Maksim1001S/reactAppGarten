import React from 'react'
import s from "./CategoriesContainer.module.css"
import CategoryItem from '../CategoryItem/CategoryItem'

const CategoriesContainer = ({categories_data}) => {
  return (
    <ul className={s.categories_container}>
        {
            categories_data.map(el => <CategoryItem key={el.id} {...el}/>)
        }
    </ul>
  )
}

export default CategoriesContainer