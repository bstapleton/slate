import styles from '../../scss/components/icon.module.scss';
import {Outline} from "./outline";

type IconProps = {
    symbolOnly: boolean,
}

export const Renew = ({ symbolOnly }: IconProps) => {
    return(
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
            {!symbolOnly ?
                <Outline />
            : null}
            <g className={styles.symbol}>
                <path d="M77.5,46.14h-19a2.51,2.51,0,0,0-2.5,2.5v19a2.5,2.5,0,0,0,2.5,2.5h19a2.51,2.51,0,0,0,2.5-2.5v-19A2.51,2.51,0,0,0,77.5,46.14Zm-2.5,19H61v-14H75Z"/>
                <path d="M41.5,46.14h-19a2.51,2.51,0,0,0-2.5,2.5v19a2.5,2.5,0,0,0,2.5,2.5h19a2.51,2.51,0,0,0,2.5-2.5v-19A2.51,2.51,0,0,0,41.5,46.14Zm-2.5,19H25v-14H39Z"/>
                <path d="M73,29.1l-4.88,13L55.36,36.55a2.49,2.49,0,0,1,.43-4.4L60,30.35A15.48,15.48,0,0,0,34.64,40a2.5,2.5,0,0,1-4.95-.73A20.48,20.48,0,0,1,65,28.24l4.49-1.89A2.5,2.5,0,0,1,73,29.1Z"/>
            </g>
        </svg>
    )
}

Renew.defaultProps = {
    symbolOnly: false,
}
