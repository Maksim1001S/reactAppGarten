import React, { useState } from 'react'
import s from "./Sort.module.css"
import { useDispatch, useSelector } from 'react-redux'
import { addDiscountedSort, addPriceFilter, addSortedBy } from '../../store/slice/sortSlice'

const Sort = ({allDiscounted}) => {
    const dispatch = useDispatch()
    const sort_data = useSelector(state => state.sort)
    const [priceFrom, setPriceFrom] = useState('');
    const [priceTo, setPriceTo] = useState('');
    const [inputError, setInputError] = useState(false);

    const handlePriceChange = (e) => {
        const { name, value } = e.target;
    
        if (name === 'priceFrom') {
          setPriceFrom(value);
        } else if (name === 'priceTo') {
          setPriceTo(value);
        }

        setInputError(false);
    };
    const handleDiscountedChange = (e) => {
        dispatch(addDiscountedSort(e.target.checked));
    };
    const handleSortedByChange = (e) => {
        dispatch(addSortedBy(e.target.value));
    }



    const handleFilter = () => {
        const parsedPriceFrom = parseFloat(priceFrom);
        const parsedPriceTo = parseFloat(priceTo);
    
        if (!isNaN(parsedPriceFrom) && !isNaN(parsedPriceTo) && parsedPriceFrom > parsedPriceTo) {
          setInputError(true); 
        return;
        } else {
          setInputError(false);
          dispatch(addPriceFilter({ priceFrom: parsedPriceFrom, priceTo: parsedPriceTo }));
        }
      };
  return (
    <div className={s.sort_products_container}>
        <div className={s.price_fromTo}>
            <h3>Price</h3>
            <input className={`${s.price_fromTo_input} ${inputError ? s.input_error : ""}`} type="number" placeholder='from' name='priceFrom' value={priceFrom} onChange={handlePriceChange}/>
            <input className={`${s.price_fromTo_input} ${inputError ? s.input_error : ""}`} type="number" placeholder='to' name='priceTo' value={priceTo} onChange={handlePriceChange}/>
            <button onClick={handleFilter}>Apply</button>
        </div>
        {
            allDiscounted
            ?  ""
            :   <div className={s.discounted}>
                    <h3   h3>Discounted items</h3>
                    <input type="checkbox" onChange={handleDiscountedChange}/>
                    <span className={s.checkbox_custom}></span>
                </div>
        }
        
        <div className={s.sorted}>
            <h3>Sorted</h3>
            <select id="sortedBy" onChange={handleSortedByChange}>
                <option value="byDefault">by default</option>
                <option value="byDesc">by descending</option>
                <option value="byAsc">by ascending</option>
            </select>
        </div>
    </div>
  )
}

export default Sort