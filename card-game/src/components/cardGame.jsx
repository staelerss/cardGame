import React,{useState} from "react";
import './styles.css';
export const CardGame = () => {
    const [greenCardState, setGreenCardState] =useState(0);
    const [redCardState, setRedCardState] = useState(0);

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
                <label>Зелёные карты<input className="cardGame-element" type="number" name="greenCard" value={greenCardState} onChange={setGreenCardValue} min="0" required></input></label>
                <label>Красные карты<input className="cardGame-element" type="number" name="redCard" value={redCardState} onChange={setRedCardValue} min="0" required></input></label>
                <button className="cardGame-element" type="submit">Отправить</button>
                <div className="cardGame-wrapper">
                    <output placeholder="123"></output>
                </div>
            </form>
        </div>
    )

}