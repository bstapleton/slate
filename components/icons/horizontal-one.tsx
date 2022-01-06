import styles from '../../scss/components/icon.module.scss';
import {Outline} from "./outline";

type IconProps = {
    symbolOnly: boolean,
}

export const HorizontalOne = ({ symbolOnly }: IconProps) => {
    return(
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
            {!symbolOnly ?
                <Outline />
            : null}
            <g className={styles.symbol}>
                <rect x="45" y="25" width="10" height="50" rx="5" ry="5" transform="translate(0 100) rotate(-90)"/>
            </g>
        </svg>
    )
}

HorizontalOne.defaultProps = {
    symbolOnly: false,
}
