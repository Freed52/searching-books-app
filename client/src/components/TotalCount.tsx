import React, { FC } from 'react'
import styles from '../styles/FoundBooks.module.css'

export const TotalCount: FC = (props: any) => {

    return (
        <div className={styles.totalcount}>{'Всего найдено: '}<span>{props.children}</span></div>
    )
}
