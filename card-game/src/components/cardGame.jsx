import React,{useState} from "react";
import './styles.css';
export const CardGame = () => {
    const [greenCardState, setGreenCardState] = useState(1); // Обработка количества зелёных карт
    const [redCardState, setRedCardState] = useState(1); // Обработка количества красных кар
    const [resultState, setResultState] = useState("🟥🟩"); // Обработка вывода результата
    const setGreenCardValue = (event) => { // Сеттер значения зелёных карт
        setGreenCardState(event.target.value);
    }
    const setRedCardValue = (event) => { // Сеттер значения красных карт
        setRedCardState(event.target.value);
    }

    let result = []; // Массив для формирования результата
    let max = Math.max(greenCardState,redCardState);
    let min = Math.min(greenCardState,redCardState);

    const checkGameInterest = () => { // Фунцкия проверки игры на "интересность"

        // 1 условие: если карт равное количество, либо разница в 1 карту
        if(max - min === 1 ||  max === min){
            for (let i = 0; i < min; i++){
                result.push("🟩🟥");
            }
            if (greenCardState == max && max !== min){
                result.push("🟩");
            } else if (max !== min) {
                result.unshift("🟥");
            }
            setResultState(result);
        }

        // 2 условие: если зелёных карт больше чем красных в 2 раза, но не более чем на 2
        else if (greenCardState >= redCardState * 2 && greenCardState <= redCardState * 2 + 2) {
            for (let i = 0; i < min; i++){
                result.push("🟥🟩🟩");
            }
            if (greenCardState == max){
                let difference = greenCardState - redCardState * 2;
                 while (difference !== 0) {
                     result.unshift("🟩");
                     difference--;
                 }
            } else if (redCardState == max) {
                let difference = redCardState - greenCardState * 2;
                while (difference !== 0) {
                    result.unshift("🟥");
                    difference--;
                }
            }
            setResultState(result);
        }

        // 3 условие: если зелёных карт больше чем красных и разница менее чем в 2 раза
        else if (max < min * 2 && max == greenCardState){
            for (let i = 0; i < max - min; i++){
                result.push("🟥🟩🟩");
            }
            for (let i = 0; i < min - (max - min); i++){
                result.push("🟥🟩")
            }
            setResultState(result);
        }
        else {
            setResultState("Игра не интересная :("); // Если ни одно условие не выполнено, то игра не интересная
        }
    }

    return (
        <div className="cardGame-wrapper">
            <h1>Карточная игра</h1>
            <p>Введите количество зёлёных и красных карт, а приложение определит, будет ли данная игра интересной.</p>
            <p>Игра считается интересной если:
                <ul>
                    <li>Не существует двух и более лежащих рядом <b>красных</b> карт</li>
                    <li>Не существует трёх и более лежащих рядом <b>зелёных</b> карт</li>
                </ul>
            </p>
            <form className="cardGame-form">
                <label>Зелёные карты<input className="cardGame-element" type="number" name="greenCard" value={greenCardState} onChange={setGreenCardValue} min="1" required></input></label>
                <label>Красные карты<input className="cardGame-element" type="number" name="redCard" value={redCardState} onChange={setRedCardValue} min="1" required></input></label>
                <button className="cardGame-element" type="button" onClick={checkGameInterest}>Проверить</button>
                <div className="cardGame-wrapper">
                    <div>{resultState}</div>
                </div>
            </form>
        </div>
    )

}