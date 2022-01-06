import styles from '../../scss/components/icon.module.scss';
import {Outline} from "./outline";

type IconProps = {
    symbolOnly: boolean,
}

export const PipTwo = ({ symbolOnly }: IconProps) => {
    return(
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
            {!symbolOnly ?
                <Outline />
            : null}
            <g className={styles.symbol}>
                <path d="M87.5,50a10,10,0,1,0-10,10A10,10,0,0,0,87.5,50Zm-15,0a5,5,0,1,1,5,5A5,5,0,0,1,72.5,50Z"/>
                <path d="M28.32,37.56a25,25,0,0,1,43.36,0,13.71,13.71,0,0,1,5-1.27,30,30,0,0,0-53.36,0A13.71,13.71,0,0,1,28.32,37.56Z"/>
                <path d="M76.68,63.71a13.71,13.71,0,0,1-5-1.27,25,25,0,0,1-43.36,0,13.71,13.71,0,0,1-5,1.27,30,30,0,0,0,53.36,0Z"/>
                <path d="M12.5,50a10,10,0,1,0,10-10A10,10,0,0,0,12.5,50Zm15,0a5,5,0,1,1-5-5A5,5,0,0,1,27.5,50Z"/>
            </g>
        </svg>
    )
}

PipTwo.defaultProps = {
    symbolOnly: false,
}
