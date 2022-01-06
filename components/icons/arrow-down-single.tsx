import styles from '../../scss/components/icon.module.scss';
import {Outline} from "./outline";

type IconProps = {
    symbolOnly: boolean,
}

export const ArrowDownSingle = ({ symbolOnly }: IconProps) => {
    return(
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
            {!symbolOnly ?
                <Outline />
            : null}
            <g className={styles.symbol}>
                <path d="M51.77,67.32,72.68,46.41a5,5,0,1,0-7.07-7.07L51.77,53.18a2.5,2.5,0,0,1-3.54,0L34.39,39.34a5,5,0,0,0-7.07,7.07L42.93,62h0l5.3,5.3A2.5,2.5,0,0,0,51.77,67.32Z"/>
            </g>
        </svg>
    )
}

ArrowDownSingle.defaultProps = {
    symbolOnly: false,
}
