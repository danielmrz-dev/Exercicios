import React from "react";
import s from './StatsCard.module.scss';

interface StatsCardProps {
  title: string;
  value: number;
}

export const StatsCard: React.FC<StatsCardProps> = ({ title, value }) => {
  return (
    <article className={s.card}>
      <h2>{title}</h2>
      <span>{value}</span>
    </article>
  );
}
