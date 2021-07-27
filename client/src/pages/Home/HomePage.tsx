import React, { FC } from 'react'
import { HeaderModule, FoundBooksModule } from '../../modules'
import styles from '../../styles/HomePage.module.css'

const Home: FC = (props: any) => {
    return (
        <div className={styles.home_page_wrapper}>
            <HeaderModule {...props} />
            <FoundBooksModule {...props} />
        </div>
    )
}

export const HomePage = React.memo(Home)