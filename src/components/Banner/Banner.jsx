import React from 'react'
import s from "./Banner.module.css"

const Banner = () => {
  return (
    <section className={s.section}>
        <div className={s.bg_img}>
            <div className={s.container}>
                <h2 className={s.title}>Sale <br/>
                    <span>New season</span>
                </h2>
                <a href="/sales" className={s.btnLink_to_sale}>Sale</a>
            </div>
        </div>
    </section>
  )
}

export default Banner