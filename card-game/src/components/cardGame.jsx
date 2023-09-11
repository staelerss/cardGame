import React,{useState} from "react";
import './styles.css';
export const CardGame = () => {
    const [greenCardState, setGreenCardState] =useState(0);
    const [redCardState, setRedCardState] = useState(0);

    let result = [];

    for (let i = 0; i < greenCardState; i++) {
        result.push("🟩");
    }
    for (let i = 0; i < redCardState; i++) {
        result.push("🟥");
    }
    //🟩🟥

    const setGreenCardValue = (event) => {
        setGreenCardState(event.target.value);
    }
    const setRedCardValue = (event) => {
        setRedCardState(event.target.value);
    }

    return (
        <div className="cardGame-wrapper">
            <h1>Карточная игра</h1>
            <p>Введите количество зёлёных и красных карт, а приложение определит, будет ли данная игра интересной</p>
            <form className="cardGame-form">
                <label>Зелёные карты<input className="cardGame-element" type="number" name="greenCard" value={greenCardState} onChange={setGreenCardValue} min="0"></input></label>
                <label>Красные карты<input className="cardGame-element" type="number" name="redCard" value={redCardState} onChange={setRedCardValue} min="0"></input></label>
                <div className="cardGame-wrapper">
                    <output name="result">{result}</output>
                </div>
            </form>
        </div>
    )

}