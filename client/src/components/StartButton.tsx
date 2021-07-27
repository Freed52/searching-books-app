import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import styles from '../styles/StartButton.module.css'

export const StartButtonComponent: FC = (props: any) => {
    return (
        <Link className={styles.button} to={`/books/0`}>Start</Link>
    )
}
