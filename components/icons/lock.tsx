import styles from '../../scss/components/icon.module.scss';
import {Outline} from "./outline";

type IconProps = {
    symbolOnly: boolean,
}

export const Lock = ({ symbolOnly }: IconProps) => {
    return(
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
            {!symbolOnly ?
                <Outline />
            : null}
            <g className={styles.symbol}>
                <path d="M70,40.63H67.5v-4.5c0-11-7.84-18-17.5-18s-17.5,7-17.5,18v4.5H30a5,5,0,0,0-5,5v25a5,5,0,0,0,5,5H70a5,5,0,0,0,5-5v-25A5,5,0,0,0,70,40.63ZM53.84,66.49a1,1,0,0,1-1,1.14h-5.7a1,1,0,0,1-1-1.14l1.39-9.71a4,4,0,1,1,4.9,0Zm9.28-25.86H36.88v-4.5c0-8.28,5.87-13,13.12-13s13.12,4.72,13.12,13Z"/>
            </g>
        </svg>
    )
}

Lock.defaultProps = {
    symbolOnly: false,
}
