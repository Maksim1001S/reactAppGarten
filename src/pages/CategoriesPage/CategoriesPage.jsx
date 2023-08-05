import React from 'react'
import { useSelector } from 'react-redux'
import s from "./CategoriesPage.module.css"
import CategoriesContainer from '../../components/CategoriesContainer/CategoriesContainer';

const CategoriesPage = () => {
  const categories = useSelector(state => state.categories.categories);
  return (
    <section className={s.section}>
      <CategoriesContainer categories_data={categories}/>
    </section>
  )
}

export default CategoriesPage