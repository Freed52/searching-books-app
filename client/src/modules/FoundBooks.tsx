import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, shallowEqual, } from 'react-redux'
import { BookCardComponent, TotalCount } from '../components'
import styles from '../styles/FoundBooks.module.css'

const FoundBooks: FC = (props: any) => {

    const books = useSelector((state: any) => state.books.books, shallowEqual)
    const totalItems = useSelector((state: any) => state.books.totalItems, shallowEqual)

    const getMoreBooks = () => {
        let incrementStartIndex = ++props.match.params.index
        props.history.push(`/books/${incrementStartIndex}`)
    }

    return (
        <div className={styles.foundbooks_wrapper}>
            <TotalCount {...{ children: totalItems }} />
            <div className={styles.morebooks_button}>
                <button onClick={() => { getMoreBooks() }}>Еще</button>
            </div>
            <div className={styles.books}>
                {books.length ? books.map((book: any) =>
                    <Link key={book.etag} to={`/book/${book.id}`}>
                        <BookCardComponent {...{ children: book }} />
                    </Link>
                ) : <div className={styles.warn}>No Books Found</div>}
            </div>
        </div>
    )
}

export const FoundBooksModule = React.memo(FoundBooks)