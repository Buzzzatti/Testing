import React from "react";
import {MuiPickersUtilsProvider} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import ruLocale from "date-fns/locale/ru";
import Main from './components/Main'
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import AuthPage from './components/AuthPage/AuthPage.jsx';
import Album from "./components/Album";

//смотри. то, что здесь мы сделали, это маршрутизацию
// компонент Router постоянно следит за твой урл строкой. и если путь меняется, то он смотрит, то какоой путь в данном path
// и ремндерит тот компонент у которого у него присвоение

const App = () => {
    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils} locale={ruLocale}>
            <Router>
                <Switch>
                    //то есть в данном случае как это работает( если path равен /, то отображать компонент Main)
                    <Route exact path='/' component={Main}/>
                    //а если path меняется на например auther, то закрыть Main, потому что обернуто все в Switch, поэтому он свитчит компоненты
                    // так и вот, если айфер паф, то открыть айфпейдж
                    <Route path='/auther' component={AuthPage}/>
                    <Route path='/album' component={Album}/>
                </Switch>
            </Router>
        </MuiPickersUtilsProvider>
  );
};

export default App;