import styles from '../../scss/components/icon.module.scss';
import {Outline} from "./outline";

type IconProps = {
    symbolOnly: boolean,
}

export const Plus = ({ symbolOnly }: IconProps) => {
    return(
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
            {!symbolOnly ?
                <Outline />
            : null}
            <g className={styles.symbol}>
                <path d="M80,45H55V20a5,5,0,0,0-10,0V45H20a5,5,0,0,0,0,10H45V80a5,5,0,0,0,10,0V55H80a5,5,0,0,0,0-10"/>
            </g>
        </svg>
    )
}

Plus.defaultProps = {
    symbolOnly: false,
}
