import "./app-info.css";

const AppInfo = ({increased, employees}) => {
    return (
        <div className="app-info">
            <h1>Облік співробітників в ресторані Vinoteca Praha</h1>
            <h2>Загальна кількість працівників: {employees}</h2>
            <h2>Отримає премію: {increased}</h2>
        </div>
    )
}

export default AppInfo;