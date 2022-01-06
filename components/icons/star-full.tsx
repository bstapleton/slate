import styles from '../../scss/components/icon.module.scss';
import {Outline} from "./outline";

type IconProps = {
    symbolOnly: boolean,
}

export const StarFull = ({ symbolOnly }: IconProps) => {
    return(
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
            {!symbolOnly ?
                <Outline />
            : null}
            <g className={styles.symbol}>
                <path d="M49.14,71.45,31.67,79.76a1,1,0,0,1-1.42-1l2.51-19.18a2,2,0,0,0-.53-1.63L18.93,43.87a1,1,0,0,1,.54-1.67l19-3.54a2,2,0,0,0,1.39-1l9.25-17a1,1,0,0,1,1.76,0l9.25,17a2,2,0,0,0,1.39,1l19,3.54a1,1,0,0,1,.54,1.67L67.77,57.92a2,2,0,0,0-.53,1.63l2.51,19.18a1,1,0,0,1-1.42,1L50.86,71.45A2.07,2.07,0,0,0,49.14,71.45Z"/>
            </g>
        </svg>
    )
}

StarFull.defaultProps = {
    symbolOnly: false,
}
