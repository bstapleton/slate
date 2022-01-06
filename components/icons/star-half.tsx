import styles from '../../scss/components/icon.module.scss';
import {Outline} from "./outline";

type IconProps = {
    symbolOnly: boolean,
}

export const StarHalf = ({ symbolOnly }: IconProps) => {
    return(
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
            {!symbolOnly ?
                <Outline />
            : null}
            <g className={styles.symbol}>
                <path d="M81.07,43.89a1,1,0,0,0-.54-1.67l-19-3.55a2,2,0,0,1-1.39-1l-9.25-17a1,1,0,0,0-.9-.52h0a1,1,0,0,0-.86.52l-9.25,17a2,2,0,0,1-1.39,1l-19,3.54a1,1,0,0,0-.81.94,1,1,0,0,0,.27.75l13.3,14a2,2,0,0,1,.53,1.62L30.25,78.73h0a1,1,0,0,0,1.42,1l17.47-8.31a2,2,0,0,1,1.72,0l17.47,8.31a1,1,0,0,0,1.42-1L67.24,59.57a2,2,0,0,1,.53-1.64ZM63.84,72.11,50,65.5v-36L57.28,43l15,2.86L61.86,56.89Z"/>
            </g>
        </svg>
    )
}

StarHalf.defaultProps = {
    symbolOnly: false,
}
