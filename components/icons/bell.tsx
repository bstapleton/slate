import styles from '../../scss/components/icon.module.scss';
import {Outline} from "./outline";

type IconProps = {
    symbolOnly: boolean,
}

export const Bell = ({ symbolOnly }: IconProps) => {
    return(
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
            {!symbolOnly ?
                <Outline />
            : null}
            <g className={styles.symbol}>
                <path d="M78.59,69.09,69.48,60a3,3,0,0,1-.87-2.36L70,40.5A20,20,0,0,0,51.91,20.6a2.5,2.5,0,1,0-3.82,0A20,20,0,0,0,30,40.5l1.39,17.12A3,3,0,0,1,30.52,60l-9.11,9.11a2,2,0,0,0,1.42,3.41H42.5a7.5,7.5,0,0,0,15,0H77.17A2,2,0,0,0,78.59,69.09ZM50,74.92a2.5,2.5,0,0,1-2.49-2.42h5A2.5,2.5,0,0,1,50,74.92ZM30.5,67.5l4.39-5.12A6,6,0,0,0,36.31,58L35,40.5a15,15,0,0,1,30,0L63.69,58a6,6,0,0,0,1.42,4.35L69.5,67.5Z"/>
            </g>
        </svg>
    )
}

Bell.defaultProps = {
    symbolOnly: false,
}
