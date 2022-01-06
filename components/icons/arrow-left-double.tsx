import styles from '../../scss/components/icon.module.scss';
import {Outline} from "./outline";

type IconProps = {
    symbolOnly: boolean,
}

export const ArrowLeftDouble = ({ symbolOnly }: IconProps) => {
    return(
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
            {!symbolOnly ?
                <Outline />
            : null}
            <g className={styles.symbol}>
                <path d="M20.77,51.77,41.68,72.68a5,5,0,1,0,7.07-7.07L34.91,51.77a2.5,2.5,0,0,1,0-3.54L48.75,34.39a5,5,0,1,0-7.07-7.07L26.07,42.93h0l-5.3,5.3A2.5,2.5,0,0,0,20.77,51.77Z"/>
                <path d="M50.07,42.93l-5.3,5.3a2.5,2.5,0,0,0,0,3.54L65.68,72.68a5,5,0,1,0,7.07-7.07L58.91,51.77a2.5,2.5,0,0,1,0-3.54L72.75,34.39a5,5,0,0,0-7.07-7.07L50.07,42.93Z"/>
            </g>
        </svg>
    )
}

ArrowLeftDouble.defaultProps = {
    symbolOnly: false,
}
