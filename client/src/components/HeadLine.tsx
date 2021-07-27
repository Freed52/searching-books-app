import React, { FC } from 'react'
import styles from '../styles/Header.module.css'

export const HeadLineComponent: FC = (props: any) => {
    return (
        <div className={styles.headline}>
            <h1>
                Search for books
            </h1>
        </div>
    )
}
