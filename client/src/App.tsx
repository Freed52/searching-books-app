import React, { FC } from 'react'
import { withRouter, Switch, Route } from 'react-router-dom'
import { HomePage, BookPage, RootPage } from './pages/index'
import './App.css'

const App: FC = (props: any) => {
  return (
    <div className="App">
      <Switch>
        <Route path='/' exact render={(props: any) =>
          <RootPage {...props} />} />
        <Route path='/books/:index' exact render={(props: any) =>
          <HomePage {...props} />} />
        <Route path='/book/:id' exact render={(props: any) =>
          <BookPage {...props} />} />
      </Switch>
    </div>
  )
}

export default withRouter(App)
