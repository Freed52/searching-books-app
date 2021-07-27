import React, { FC } from 'react'
import { HeadLineComponent, FormComponent } from '../components'
import styles from '../styles/Header.module.css'

const Header: FC = (props: any) => {

    return (
        <div className={styles.header}>
            <div className={styles.header_filter__pad}></div>
            <HeadLineComponent />
            <FormComponent {...props} />
        </div>
    )
}

export const HeaderModule = React.memo(Header)