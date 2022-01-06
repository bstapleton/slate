import styles from '../../scss/components/icon.module.scss';
import {Outline} from "./outline";

type IconProps = {
    symbolOnly: boolean,
}

export const Edit = ({ symbolOnly }: IconProps) => {
    return(
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
            {!symbolOnly ?
                <Outline />
            : null}
            <g className={styles.symbol}>
                <path d="M79.41,29.33l-4.24-4.24a2,2,0,0,0-2.83,0l-2.12,2.12,7.07,7.07,2.12-2.12A2,2,0,0,0,79.41,29.33Z"/>
                <path d="M43.69,53.74a2,2,0,0,0-.49.79l-2.75,8.26a1,1,0,0,0,1.26,1.26L50,61.3a2,2,0,0,0,.79-.49L75.17,36.4,68.1,29.33Z"/>
                <path d="M66.5,48.9V70.5h-33v-41h28a5.16,5.16,0,0,1,1.52.26L66.76,26A9.86,9.86,0,0,0,61.5,24.5h-30a3,3,0,0,0-3,3v45a3,3,0,0,0,3,3h37a3,3,0,0,0,3-3V43.9Z"/>
            </g>
        </svg>
    )
}

Edit.defaultProps = {
    symbolOnly: false,
}
