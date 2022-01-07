import styles from '../../scss/components/icon.module.scss';
import {Outline} from "./outline";

type IconProps = {
    symbolOnly: boolean,
}

export const FaceUnhappy = ({ symbolOnly }: IconProps) => {
    return(
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
            {!symbolOnly ?
                <Outline />
            : null}
            <g className={styles.symbol}>
                <path d="M27.5,73.68a2,2,0,0,0,2.9-.09,26.68,26.68,0,0,1,39.22,0,2,2,0,0,0,2.9.09l.3-.31a2,2,0,0,0,.12-2.72,30,30,0,0,0-45.86,0,2,2,0,0,0,.11,2.72Z"/>
                <circle cx="65.01" cy="35" r="5"/>
                <circle cx="35.01" cy="35" r="5"/>
            </g>
        </svg>
    )
}

FaceUnhappy.defaultProps = {
    symbolOnly: false,
}
