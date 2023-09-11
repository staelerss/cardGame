import React,{useState} from "react";
import './styles.css';
export const CardGame = () => {
    const [greenCardState, setGreenCardState] =useState(1);
    const [redCardState, setRedCardState] = useState(1);
    const [resultState, setResultState] = useState("🟥🟩");

    let max = Math.max(greenCardState,redCardState);
    let min = Math.min(greenCardState,redCardState);



    const setGreenCardValue = (event) => {
        setGreenCardState(event.target.value);
    }
    const setRedCardValue = (event) => {
        setRedCardState(event.target.value);
    }
    const setResultValue = (event) => {
        setResultState(event.target.value);
    }

    return (
        <div className="cardGame-wrapper">
            <h1>Карточная игра</h1>
            <p>Введите количество зёлёных и красных карт, а приложение определит, будет ли данная игра интересной</p>
            <form className="cardGame-form">
                <label>Зелёные карты<input className="cardGame-element" type="number" name="greenCard" value={greenCardState} onChange={setGreenCardValue} min="1"></input></label>
                <label>Красные карты<input className="cardGame-element" type="number" name="redCard" value={redCardState} onChange={setRedCardValue} min="1"></input></label>
                <div className="cardGame-wrapper">
                    <output name="result" onChange={setResultValue}>{resultState}</output>
                </div>
            </form>
        </div>
    )

}