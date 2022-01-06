import styles from '../../scss/components/icon.module.scss';
import {Outline} from "./outline";

type IconProps = {
    symbolOnly: boolean,
}

export const Clock = ({ symbolOnly }: IconProps) => {
    return(
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
            {!symbolOnly ?
                <g>
                    <Outline />
                    <g className={styles.symbol}>
                        <path d="M70.91,63,55,47.06V19a5,5,0,0,0-10,0V52a5,5,0,0,0,.08.78s0,.08,0,.13a5,5,0,0,0,1.59,2.8L62.42,71.45a6,6,0,0,0,8.49,0h0A6,6,0,0,0,70.91,63Z"/>
                    </g>
                </g>
            :
                <g className={styles.symbol}>
                    <path d="M62,57.73l-9-9V31.94a3,3,0,0,0-6,0v18h0a3,3,0,0,0,.87,2.13l9.9,9.9A3,3,0,0,0,62,57.73Z"/>
                    <path d="M50,20A30,30,0,1,0,80,50,30,30,0,0,0,50,20Zm0,55A25,25,0,1,1,75,50,25,25,0,0,1,50,75Z"/>
                </g>
            }
        </svg>
    )
}

Clock.defaultProps = {
    symbolOnly: false,
}
