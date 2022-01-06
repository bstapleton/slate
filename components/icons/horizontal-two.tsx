import styles from '../../scss/components/icon.module.scss';
import {Outline} from "./outline";

type IconProps = {
    symbolOnly: boolean,
}

export const HorizontalTwo = ({ symbolOnly }: IconProps) => {
    return(
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
            {!symbolOnly ?
                <Outline />
            : null}
            <g className={styles.symbol}>
                <rect x="45" y="34" width="10" height="50" rx="5" ry="5" transform="translate(-9 109) rotate(-90)"/>
                <rect x="45" y="16" width="10" height="50" rx="5" ry="5" transform="translate(9 91) rotate(-90)"/>
            </g>
        </svg>
    )
}

HorizontalTwo.defaultProps = {
    symbolOnly: false,
}
