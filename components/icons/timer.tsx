import styles from '../../scss/components/icon.module.scss';
import {Outline} from "./outline";

type IconProps = {
    symbolOnly: boolean,
}

export const Timer = ({ symbolOnly }: IconProps) => {
    return(
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
            {!symbolOnly ?
                <Outline />
            : null}
            <g className={styles.symbol}>
                <g className={styles.background}>
                    <path d="M60,65.68a18,18,0,0,0-19.94,0,12.37,12.37,0,0,0-1.92,5.65H61.89A12.61,12.61,0,0,0,60,65.68Z"/>
                    <path d="M50,37.83A18.44,18.44,0,0,1,40,34.9C40,40.45,45.61,47,50,47s10-6.55,10-12.1A18.44,18.44,0,0,1,50,37.83Z"/>
                </g>
                <path d="M65.5,71.33h-.59C64.27,61.15,60,52.79,54.21,50,60,47.21,64.27,38.85,64.91,28.67h.59a2.5,2.5,0,0,0,0-5h-31a2.5,2.5,0,0,0,0,5h.59c.64,10.18,5,18.54,10.7,21.33-5.74,2.79-10.06,11.15-10.7,21.33H34.5a2.5,2.5,0,0,0,0,5h31a2.5,2.5,0,0,0,0-5ZM39.11,28.67H60.89C60.17,38.45,55.58,46,50,46S39.83,38.45,39.11,28.67Zm0,42.66C39.83,61.55,44.42,54,50,54s10.17,7.55,10.89,17.33Z"/>
            </g>
        </svg>
    )
}

Timer.defaultProps = {
    symbolOnly: false,
}
