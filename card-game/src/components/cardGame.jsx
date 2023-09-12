import React,{useState} from "react";
import './styles.css';
export const CardGame = () => {
    const [greenCardState, setGreenCardState] = useState(1);
    const [redCardState, setRedCardState] = useState(1);
    const [resultState, setResultState] = useState("🟥🟩");
    const setGreenCardValue = (event) => {
        setGreenCardState(event.target.value);
    }
    const setRedCardValue = (event) => {
        setRedCardState(event.target.value);
    }

    let cardBuffer = [];
    let result = [];
    let max = Math.max(greenCardState,redCardState);
    let min = Math.min(greenCardState,redCardState);

    const checkGameInterest = () => {
        if(max - min === 1){
            for (let i = 0; i < min; i++){
                result.push("🟩🟥");
            }
            if (greenCardState == max){
                result.push("🟩");
            } else {
                result.unshift("🟥");
                console.log("else: ", result);
            }
            setResultState(result);
        }

    }

    return (
        <div className="cardGame-wrapper">
            <h1>Карточная игра</h1>
            <p>Введите количество зёлёных и красных карт, а приложение определит, будет ли данная игра интересной</p>
            <form className="cardGame-form">
                <label>Зелёные карты<input className="cardGame-element" type="number" name="greenCard" value={greenCardState} onChange={setGreenCardValue} min="1"></input></label>
                <label>Красные карты<input className="cardGame-element" type="number" name="redCard" value={redCardState} onChange={setRedCardValue} min="1"></input></label>
                <button className="cardGame-element" type="button" onClick={checkGameInterest}>Проверить</button>
                <div className="cardGame-wrapper">
                    <div>{resultState}</div>
                </div>
            </form>
        </div>
    )

}