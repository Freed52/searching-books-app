import React, { FC, useState, useEffect } from 'react'
import { useSelector, useDispatch, shallowEqual, } from 'react-redux'
import { setSelectorsDataAC, getBooksAC, clearBooksListAC } from '../actions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import styles from '../styles/Header.module.css'

export const FormComponent: FC = (props: any) => {

    const { index } = props.match.params

    const dispatch = useDispatch()

    const selectors = useSelector((state: any) => state.selectors.selectors, shallowEqual)
    const books = useSelector((state: any) => state.books, shallowEqual)

    const [inputValue, setInputValue] = useState('')
    const [startIndex, setStartIndex] = useState(index)

    const onFocusForm = (event: any) => {
        event.preventDefault()
    }

    const submitForm = (e: any) => {
        e.preventDefault()
        const { value } = e.target['myInput']
        const category = e.target['categories'].value
        const filter = e.target['sorting'].value
        dispatch(getBooksAC(value, category, filter, startIndex))
        props.history.push(`/books/${startIndex}`)
    }

    const onChangeForm = (event: any) => {
        event.preventDefault()
        const { value } = event.target
        setInputValue(value)
    }

    const onFocusSelect = (event: any) => {
        event.preventDefault()
        dispatch(setSelectorsDataAC(event.target.value))
    }

    const onChangeSelect = (event: any) => {
        event.preventDefault()
        dispatch(clearBooksListAC(books.keywords))
        dispatch(setSelectorsDataAC(event.target.value))
    }

    useEffect(() => {
        setStartIndex(0)
        dispatch(clearBooksListAC(inputValue))
    }, [inputValue, dispatch])

    useEffect(() => {
        if (index) {
            return setStartIndex(index)
        }
    }, [index])

    useEffect(() => {
        const { category, filter } = books
        if (category && filter) {
            books.totalPages > startIndex
                ? dispatch(getBooksAC(inputValue, category, filter, startIndex))
                : console.log('that\'s all folks')
        }
        setInputValue(books.keywords)
    }, [startIndex, dispatch])

    return (
        <form onSubmit={(event) => submitForm(event)} className={styles.form}>
            <div className={styles.searchline}>
                <input
                    id={'myInput'}
                    value={`${inputValue}`}
                    onFocus={(event) => onFocusForm(event)}
                    onChange={(event) => onChangeForm(event)}
                    placeholder={`Начать поиск...`} />
                <button type='submit'><FontAwesomeIcon icon={faSearch} /></button>
            </div>
            <div className={styles.selectors}>
                {selectors.map((selector: any) =>
                    <label key={selector.label}>{selector.label}
                        <select
                            id={selector.orderBy}
                            value={selector.choosen}
                            onFocus={(event) => onFocusSelect(event)}
                            onChange={(event) => onChangeSelect(event)}>
                            {selector.categories.map((categorie: string) =>
                                <option
                                    key={categorie}
                                    value={categorie}>{categorie}</option>)}
                        </select>
                    </label>)}
            </div>
        </form>
    )
}
