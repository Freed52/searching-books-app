import React, { FC } from 'react'
import { ReactComponent as WarnLogo } from '../not-applicable.svg'
import parse from 'html-react-parser'
import styles from '../styles/Book.module.css'

export const DetailsBookComponent: FC = (props: any) => {

    const { title, imageLinks, authors, categories, description } = props.children

    return (
        <div className={styles.details_bookcard}>
            <div className={styles.upper}>
                {imageLinks ?
                    <img className={styles.cover} src={`${imageLinks.thumbnail || imageLinks.smallThumbnail}`} alt='book cover' /> :
                    <WarnLogo />}
                <span className={styles.title}>{title}</span>
            </div>
            <div className={styles.mid}>
                <div className={styles.authors}>
                    {authors ? authors.map((name: string) => <span key={name}>{name}</span>) : <span>Authors not specified</span>}
                </div>
                <div className={styles.categories}>
                    {categories ? categories.map((category: string) => <span key={category}>{category}</span>) : <span>Categories not specified</span>}
                </div>
            </div>
            <div className={styles.low}>
                <span className={styles.desc}>{description ? parse(description) : 'no description'}</span>
            </div>
        </div>
    )
}
