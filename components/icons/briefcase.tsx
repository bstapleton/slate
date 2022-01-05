import styles from '../../scss/components/icon.module.scss';
import {Outline} from "./outline";

type IconProps = {
    symbolOnly: boolean,
}

export const Briefcase = ({ symbolOnly }: IconProps) => {
    return(
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
            {!symbolOnly ?
                <Outline />
            : null}
            <g className={styles.symbol}>
                <path d="M75,31.5H60V28a3.5,3.5,0,0,0-3.5-3.5h-13A3.5,3.5,0,0,0,40,28v3.5H25a5,5,0,0,0-5,5v30a5,5,0,0,0,5,5H75a5,5,0,0,0,5-5v-30A5,5,0,0,0,75,31.5Zm-31-3a1,1,0,0,1,1-1H55a1,1,0,0,1,1,1v3H44Zm31,38H25v-16H44v3a1,1,0,0,0,1,1H55a1,1,0,0,0,1-1v-3H75Zm0-20H25v-10H75Z"/>
            </g>
        </svg>
    )
}

Briefcase.defaultProps = {
    symbolOnly: false,
}
