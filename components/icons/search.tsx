import styles from '../../scss/components/icon.module.scss';
import {Outline} from "./outline";

type IconProps = {
    symbolOnly: boolean,
}

export const Search = ({ symbolOnly }: IconProps) => {
    return(
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
            {!symbolOnly ?
                <Outline />
            : null}
            <g className={styles.symbol}>
                <path d="M59.08,20.88A20,20,0,0,0,43,52.77l-9.36,9.36a5,5,0,0,0-4.22,1.39L22.37,70.6a5,5,0,0,0,7.08,7.07l7.07-7.07a5,5,0,0,0,1.39-4.23L47.29,57A20,20,0,1,0,59.08,20.88Zm0,35a15,15,0,1,1,15-15A15,15,0,0,1,59.08,55.88Z"/>
            </g>
        </svg>
    )
}

Search.defaultProps = {
    symbolOnly: false,
}
