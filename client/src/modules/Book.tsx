import React, { FC, useEffect } from 'react'
import { useSelector, useDispatch, shallowEqual, } from 'react-redux'
import { getChoosenBookAC } from '../actions'
import { DetailsBookComponent } from '../components'
import styles from '../styles/Book.module.css'

const Book: FC = (props: any) => {

    const dispatch = useDispatch()

    const book = useSelector((state: any) => state.chooseBook.book, shallowEqual)

    const { volumeInfo } = book

    useEffect(() => {
        dispatch(getChoosenBookAC(props.match.params.id))
    }, [props.match.params.id, dispatch])

    return (
        <div className={styles.book_wrapper}>
            {volumeInfo ?
                <DetailsBookComponent {...{ children: volumeInfo }} /> : <div className={styles.warn}>No results</div>}
        </div>
    )
}

export const BookModule = React.memo(Book)