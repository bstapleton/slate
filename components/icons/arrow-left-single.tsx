import styles from '../../scss/components/icon.module.scss';
import {Outline} from "./outline";

type IconProps = {
    symbolOnly: boolean,
}

export const ArrowLeftSingle = ({ symbolOnly }: IconProps) => {
    return(
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
            {!symbolOnly ?
                <Outline />
            : null}
            <g className={styles.symbol}>
                <path d="M32.68,51.77,53.59,72.68a5,5,0,1,0,7.07-7.07L46.82,51.77a2.5,2.5,0,0,1,0-3.54L60.66,34.39a5,5,0,0,0-7.07-7.07L38,42.93h0l-5.3,5.3A2.5,2.5,0,0,0,32.68,51.77Z"/>
            </g>
        </svg>
    )
}

ArrowLeftSingle.defaultProps = {
    symbolOnly: false,
}
