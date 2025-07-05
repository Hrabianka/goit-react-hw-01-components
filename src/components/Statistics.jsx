import css from "../css modules/Statistics.module.css";

const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};
const Statistics = ({title, stats}) =>{
    return (
    <div className={css.statistics}>
        <h2 className={css.title}>{title}</h2>
        <ul className={css.statlist}>
            {stats.map(stat => {
                const randomColor = getRandomColor()
                return (<li className={css.listitem} key={stat.id} style={{ backgroundColor: randomColor }}>
                    <span className={css.label}>{stat.label}</span>
                    <span className={css.percentage}>{stat.percentage}%</span>
                </li>)
            })}
        </ul>
    </div>
    );
 };

export default Statistics