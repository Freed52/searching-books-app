import React, { FC } from 'react'
import styles from '../styles/FoundBooks.module.css'
import { ReactComponent as WarnLogo } from '../not-applicable.svg'

export const BookCardComponent: FC = (props: any) => {

    const { title, imageLinks, authors, categories } = props.children.volumeInfo

    return (
        <div className={styles.book_card}>
            <span className={styles.title}>{title}</span>
            {imageLinks ? <img className={styles.cover} src={`${imageLinks.thumbnail || imageLinks.smallThumbnail}`} alt='book cover' /> :
                //<div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
                <WarnLogo />}
            <ul className={styles.authors}>
                {authors ? authors.map((a: any, i: number) => <li key={i}>{a}</li>) : <li className={styles.plug}>Author don't specified</li>}
            </ul>
            {categories ? <div className={styles.category}>{categories[0]}</div> : <div className={styles.plug}>Category don't specified</div>}
        </div>
    )
}
