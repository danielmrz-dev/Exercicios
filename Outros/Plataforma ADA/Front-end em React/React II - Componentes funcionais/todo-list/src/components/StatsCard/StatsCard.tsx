import style from "./style.module.scss";

interface StatsCardProps {
    titulo: string;
    valor: number;
}

export const StatsCard: React.FC<StatsCardProps> = ({ titulo, valor }) => {
    return (
        <article className={style.stats_card}>
            <h2>{titulo}</h2>
            <span>{valor}</span>
        </article>
    )    
}