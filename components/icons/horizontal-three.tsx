import styles from '../../scss/components/icon.module.scss';
import {Outline} from "./outline";

type IconProps = {
    symbolOnly: boolean,
}

export const HorizontalThree = ({ symbolOnly }: IconProps) => {
    return(
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
            {!symbolOnly ?
                <Outline />
            : null}
            <g className={styles.symbol}>
                <rect x="45" y="25" width="10" height="50" rx="5" ry="5" transform="translate(100 0) rotate(90)"/>
                <rect x="45" y="43" width="10" height="50" rx="5" ry="5" transform="translate(118 18) rotate(90)"/>
                <rect x="45" y="7" width="10" height="50" rx="5" ry="5" transform="translate(82 -18) rotate(90)"/>
            </g>
        </svg>
    )
}

HorizontalThree.defaultProps = {
    symbolOnly: false,
}
