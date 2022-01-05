import styles from '../../scss/components/icon.module.scss';
import {Outline} from "./outline";

type IconProps = {
    symbolOnly: boolean,
}

export const ArrowRightDouble = ({ symbolOnly }: IconProps) => {
    return(
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
            {!symbolOnly ?
                <Outline />
            : null}
            <g className={styles.symbol}>
                <path d="M76.23,48.23,55.32,27.32a5,5,0,1,0-7.07,7.07L62.09,48.23a2.5,2.5,0,0,1,0,3.54L48.25,65.61a5,5,0,1,0,7.07,7.07L70.93,57.07h0l5.3-5.3A2.5,2.5,0,0,0,76.23,48.23Z" />
                <path d="M46.93,57.07l5.3-5.3a2.5,2.5,0,0,0,0-3.54L31.32,27.32a5,5,0,0,0-7.07,7.07L38.09,48.23a2.5,2.5,0,0,1,0,3.54L24.25,65.61a5,5,0,1,0,7.07,7.07L46.93,57.07Z" />
            </g>
        </svg>
    )
}

ArrowRightDouble.defaultProps = {
    symbolOnly: false,
}
