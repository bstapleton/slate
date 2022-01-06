import styles from '../../scss/components/icon.module.scss';
import {Outline} from "./outline";

type IconProps = {
    symbolOnly: boolean,
}

export const Exclamation = ({ symbolOnly }: IconProps) => {
    return(
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
            {!symbolOnly ?
                <Outline />
            : null}
            <g className={styles.symbol}>
                <rect x="45" y="20.33" width="10" height="41" rx="5" ry="5"/>
                <rect x="43" y="66.33" width="14" height="14" rx="7" ry="7"/>
            </g>
        </svg>
    )
}

Exclamation.defaultProps = {
    symbolOnly: false,
}
