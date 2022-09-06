import PropTypes from 'prop-types';
import css from './style.module.css';

const Statistics = ({title, data}) => {
    return (
        <section className={css.statistics}>
            {title && (<h2 className="title">{title}</h2>)}
            <ul className={css.statList}>
                {data.map(item => <li style={{backgroundColor:  generateGandomColor()}} className={css.item} key={item.id}>
                        <span className="label">{item.label}</span>
                        <span className="percentage">{item.percentage}%</span>
                </li>)}
            </ul>
        </section>
    )
}
export default Statistics;

function generateGandomColor(){
    const r = Math.round(Math.random() * 255);
    const g = Math.round(Math.random() * 255);
    const b = Math.round(Math.random() * 255);
    return `#${r.toString(16)}${g.toString(16)}${b.toString(16)}`
}

Statistics.propTypes = {
    title: PropTypes.string,
    data: PropTypes.array
}

