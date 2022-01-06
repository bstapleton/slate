import styles from '../../scss/components/icon.module.scss';
import {Outline} from "./outline";

type IconProps = {
    symbolOnly: boolean,
}

export const ArrowRightSingle = ({ symbolOnly }: IconProps) => {
    return(
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
            {!symbolOnly ?
                <Outline />
            : null}
            <g className={styles.symbol}>
                <path d="M67.32,48.23,46.41,27.32a5,5,0,1,0-7.07,7.07L53.18,48.23a2.5,2.5,0,0,1,0,3.54L39.34,65.61a5,5,0,1,0,7.07,7.07L62,57.07h0l5.3-5.3A2.5,2.5,0,0,0,67.32,48.23Z"/>
            </g>
        </svg>
    )
}

ArrowRightSingle.defaultProps = {
    symbolOnly: false,
}
