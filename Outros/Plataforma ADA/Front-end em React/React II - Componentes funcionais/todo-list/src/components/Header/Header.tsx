import style from "./Header.module.css";

export const Header: React.FC = () => {
    return (
        <header className={style.header}>
            <h1>My Todo</h1>
            <span>Bem vindo, Daniel!</span>

            <div>
                {/* Cards */}
            </div>
        </header>


    )
}