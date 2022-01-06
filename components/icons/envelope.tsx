import styles from '../../scss/components/icon.module.scss';
import {Outline} from "./outline";

type IconProps = {
    symbolOnly: boolean,
}

export const Envelope = ({ symbolOnly }: IconProps) => {
    return(
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
            {!symbolOnly ?
                <Outline />
            : null}
            <g className={styles.symbol}>
                <path d="M80,30H20a5,5,0,0,0-5,5V65a5,5,0,0,0,5,5H80a5,5,0,0,0,5-5V35A5,5,0,0,0,80,30Zm-3.75,5L51.08,49.38a2.14,2.14,0,0,1-2.16,0L23.75,35ZM80,65H20V37.86L48.92,54.38a2.14,2.14,0,0,0,2.16,0L80,37.86Z"/>
            </g>
        </svg>
    )
}

Envelope.defaultProps = {
    symbolOnly: false,
}
