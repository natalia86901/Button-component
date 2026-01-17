import styles from './Button.module.scss';
import { Ellipsis } from 'lucide-react';
import { getStyle } from '../../shared/lib/getStyle.jsx'

export const Button  =  (props) => {
const {
children,
className,
color = 'primary', 
circle,//boolean 
cta, // boolean
loading, //booolean
...otherProps
} = props;

const mode = {
    [styles.circle]: circle,
    [styles.cta]: cta,
}; 

const additional = [
    className, 
    styles[color],
];

return (
    <button 
    className={getStyle(styles.button, mode, additional)}
    {...otherProps}
    >

    {!cta && <div
    className={styles.underLine}/>}
    {loading 
        ? <Ellipsis
    className={styles.loading}/>  
    :children
    } 
    </button>  
    )
};
