import React, { useEffect } from 'react'
import s from "./Catalog.module.css"
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import CategoriesContainer from '../CategoriesContainer/CategoriesContainer';

const Catalog = () => {
    const categories = useSelector((state) => state.categories.categories);
    const catalogCategories = categories.slice(0, 4);

    return (
        <section className={s.section} id='catalog'>
        <div className={s.title}>
            <h2 className={s.title_name}>Catalog</h2>
            <Link className={s.title_button} to="/categories/all">All categories</Link>
        </div>
        <CategoriesContainer categories_data={catalogCategories}/>
        </section>
    );
    };

export default Catalog;