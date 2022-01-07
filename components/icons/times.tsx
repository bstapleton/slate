import styles from '../../scss/components/icon.module.scss';
import {Outline} from "./outline";

type IconProps = {
    symbolOnly: boolean,
}

export const Times = ({ symbolOnly }: IconProps) => {
    return(
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
            {!symbolOnly ?
                <Outline />
            : null}
            <g className={styles.symbol}>
                <path d="M74.75,67.68h0L57.07,50,74.75,32.32a5,5,0,0,0-7.07-7.07L50,42.93,32.32,25.25a5,5,0,0,0-7.07,7.07L42.93,50,25.25,67.68a5,5,0,0,0,7.07,7.07L50,57.07,67.68,74.75a5,5,0,0,0,7.07-7.07"/>
            </g>
        </svg>
    )
}

Times.defaultProps = {
    symbolOnly: false,
}
