import React from 'react'
import s from "./Footer.module.css"
import InstagramIcon from '../../icons/InstagramIcon'
import WhatsAppIcon from '../../icons/WhatsAppIcon'

const Footer = () => {
  return (
    <footer className={s.footer}>
        <address className={s.container}>
            <div className={s.contact}>
                <h2>Contact</h2>
                <a className={s.tel} href="tel:+49 999 999 99 99">+49 999 999 99 99</a>
                <div className={s.social_media_container}>
                    <a href='https://www.instagram.com/' className={s.social_media}>
                        <InstagramIcon />
                        <h3>Instagram</h3>
                    </a>
                    <a href='https://www.whatsapp.com/?lang=eng' className={s.social_media}>
                        <WhatsAppIcon />
                        <h3>WhatsApp</h3>
                    </a>
                </div>
            </div>
            <div className={s.address}>
                <h2>Address</h2>
                <a className={s.address_link} href="https://www.google.com/maps/place/Starta+Institute+by+Tel-Ran/@52.5079361,13.3724698,17z/data=!3m2!4b1!5s0x47a851cbc6be2f3b:0x7edf0a3a9c29227c!4m6!3m5!1s0x47a8515353a68755:0xd0866511db4f838f!8m2!3d52.5079329!4d13.3750447!16s%2Fg%2F11sb3nrbfl?entry=ttu"><span className={s.line1}>Linkstraße 2, 8 OG, 10785,</span><br/> <span className={s.line2}>Berlin, Deutschland</span></a>
                <div className={s.working_hours}>
                    <h3>Working Hours:</h3>
                    <p >24 hours a day</p>
                </div>
            </div>
        </address>
        <iframe className={s.map} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2428.4090427798637!2d13.372469776947067!3d52.507936137122286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a8515353a68755%3A0xd0866511db4f838f!2sStarta%20Institute%20by%20Tel-Ran!5e0!3m2!1sru!2sde!4v1690809764790!5m2!1sru!2sde"allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </footer>
  )
}

export default Footer