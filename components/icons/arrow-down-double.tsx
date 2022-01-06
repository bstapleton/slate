import styles from '../../scss/components/icon.module.scss';
import {Outline} from "./outline";

type IconProps = {
    symbolOnly: boolean,
}

export const ArrowDownDouble = ({ symbolOnly }: IconProps) => {
    return(
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
            {!symbolOnly ?
                <Outline />
            : null}
            <g className={styles.symbol}>
                <path d="M51.77,79.23,72.68,58.32a5,5,0,1,0-7.07-7.07L51.77,65.09a2.5,2.5,0,0,1-3.54,0L34.39,51.25a5,5,0,1,0-7.07,7.07L42.93,73.93h0l5.3,5.3A2.5,2.5,0,0,0,51.77,79.23Z"/>
                <path d="M42.93,49.93l5.3,5.3a2.5,2.5,0,0,0,3.54,0L72.68,34.32a5,5,0,1,0-7.07-7.07L51.77,41.09a2.5,2.5,0,0,1-3.54,0L34.39,27.25a5,5,0,0,0-7.07,7.07L42.93,49.93Z"/>
            </g>
        </svg>
    )
}

ArrowDownDouble.defaultProps = {
    symbolOnly: false,
}
