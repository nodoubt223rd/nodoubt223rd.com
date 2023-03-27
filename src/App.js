import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
  Link
} from 'react-router-dom';
import {
  PageSite, 
  PostSite, 
  PostsSite,
  TopNav
} from './components';

function App() {
  return (
    <Router>
        <TopNav />    

        <div className='container'>
            <Switch>
                <Route path='/' exact>
                    <PostsSite />
                </Route>
                <Route path='/blog' exact>
                    <PostsSite />
                </Route>
                <Route path='/blog/:id/:slug/'>
                    <PostSite />
                </Route>
                <Route path='/pages/:slug/'>
                    <PageSite />
                </Route>
                <Route render={_ =>
                    <Redirect to='/blog' />
                } />
            </Switch>
        </div>
    </Router>
);
}

export default App;
