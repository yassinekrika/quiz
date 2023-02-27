export default function ChooseBtn (props) {
    return (
        <button className="chooseBtn" onClick={props.handle}>{props.answer}</button>
    )
}