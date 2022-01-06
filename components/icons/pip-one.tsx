import styles from '../../scss/components/icon.module.scss';
import {Outline} from "./outline";

type IconProps = {
    symbolOnly: boolean,
}

export const PipOne = ({ symbolOnly }: IconProps) => {
    return(
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
            {!symbolOnly ?
                <Outline />
            : null}
            <g className={styles.symbol}>
                <path d="M50,12.5a10,10,0,1,0,10,10A10,10,0,0,0,50,12.5Zm0,15a5,5,0,1,1,5-5A5,5,0,0,1,50,27.5Z"/>
                <path d="M63.71,23.32a13.71,13.71,0,0,1-1.27,5,25,25,0,1,1-24.88,0,13.71,13.71,0,0,1-1.27-5,30,30,0,1,0,27.42,0Z"/>
            </g>
        </svg>
    )
}

PipOne.defaultProps = {
    symbolOnly: false,
}
