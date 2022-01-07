import styles from '../../scss/components/icon.module.scss';
import {Outline} from "./outline";

type IconProps = {
    symbolOnly: boolean,
}

export const Sms = ({ symbolOnly }: IconProps) => {
    return(
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
            {!symbolOnly ?
                <Outline />
            : null}
            <g className={styles.symbol}>
                <path className="background" d="M31.5,79a2,2,0,0,0,2,2h33a2,2,0,0,0,2-2V72.33h-37Z"/>
                <path
                    d="M68.5,15h-37a4,4,0,0,0-4,4V81a4,4,0,0,0,4,4h37a4,4,0,0,0,4-4V19A4,4,0,0,0,68.5,15Zm-35,4h33a2,2,0,0,1,2,2V79a2,2,0,0,1-2,2h-33a2,2,0,0,1-2-2V21A2,2,0,0,1,33.5,19Z"/>
                <rect x="44.01" y="73.67" width="12" height="6" rx="2"/>
                <path
                    d="M58,22H35.5a2,2,0,0,0-2,2V36a2,2,0,0,0,2,2H58a2,2,0,0,0,2-2V22ZM50.5,32h-13a1,1,0,0,1,0-2h13a1,1,0,0,1,0,2ZM56,27.33H37.5a1,1,0,0,1,0-2H56a1,1,0,0,1,0,2Z"/>
                <circle cx="64.05" cy="23.5" r="2.5"/>
            </g>
        </svg>
    )
}

Sms.defaultProps = {
    symbolOnly: false,
}
