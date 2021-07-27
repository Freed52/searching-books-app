import React, { FC } from 'react'
import { HeaderModule, BookModule } from '../../modules'


const Book: FC = (props: any) => {
    return (
        <div>
            <HeaderModule {...props} />
            <BookModule {...props} />
        </div>
    )
}

export const BookPage = React.memo(Book)