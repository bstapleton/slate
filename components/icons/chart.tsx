import styles from '../../scss/components/icon.module.scss';
import {Outline} from "./outline";

type IconProps = {
    symbolOnly: boolean,
}

export const Chart = ({ symbolOnly }: IconProps) => {
    return(
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
            {!symbolOnly ?
                <Outline />
            : null}
            <g className={styles.symbol}>
                <path d="M80,28.5a7.51,7.51,0,0,0-6.55,11.16L62.7,52A7.36,7.36,0,0,0,60,51.5a7.48,7.48,0,0,0-6,3.07l-6.48-1.93a7.49,7.49,0,0,0-15,.36,7.72,7.72,0,0,0,.1,1.18L25,58.4A7.49,7.49,0,1,0,27.5,64a7,7,0,0,0-.11-1.22L35,58.57a7.47,7.47,0,0,0,11-1.14l6.48,1.92a7.49,7.49,0,1,0,14-4.09L77.21,43A7.5,7.5,0,1,0,80,28.5Zm-60,38A2.5,2.5,0,1,1,22.5,64,2.5,2.5,0,0,1,20,66.5Zm20-11A2.5,2.5,0,1,1,42.5,53,2.5,2.5,0,0,1,40,55.5Zm20,6A2.5,2.5,0,1,1,62.5,59,2.5,2.5,0,0,1,60,61.5Zm20-23A2.5,2.5,0,1,1,82.5,36,2.5,2.5,0,0,1,80,38.5Z"/>
            </g>
        </svg>
    )
}

Chart.defaultProps = {
    symbolOnly: false,
}
