import React, { FC } from 'react'
import { StartButtonComponent } from '../../components/StartButton'
import styles from '../../styles/RootPage.module.css'

const Root: FC = (props: any) => {
    return (
        <div className={styles.rootpage_wrapper}>
            <StartButtonComponent />
        </div>
    )
}

export const RootPage = React.memo(Root)