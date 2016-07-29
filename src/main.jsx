import Cycle from '@cycle/xstream-run';
import {makeDOMDriver} from '@cycle/dom';
import {html} from 'snabbdom-jsx';

function main(sources) {
    return {
        DOM: sources.DOM.select('.myinput').events('input')
            .map(ev => ev.target.value)
            .startWith('')
            .map(name =>
                <div>
                    <label>Name: </label>
                    <input className="myinput" type="text" />
                    <hr/>
                    <h1>hello {name}</h1>
                </div>
            )
    };
}

Cycle.run(main, {
    DOM: makeDOMDriver('#main-container')
});