﻿import styles from '../../scss/components/icon.module.scss';
import {Outline} from "./outline";

type IconProps = {
    symbolOnly: boolean,
}

export const Email = ({ symbolOnly }: IconProps) => {
    return(
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
            {!symbolOnly ?
                <Outline />
            : null}
            <g className={styles.symbol}>
                <path className={styles.background} d="M54.92,50.31a8.5,8.5,0,0,0-.34,2.22,3,3,0,0,0,.28,1.34,1.38,1.38,0,0,0,.73.66,3.07,3.07,0,0,0,2.7-.34,4.6,4.6,0,0,0,1.39-1.42,7.66,7.66,0,0,0,1-2.2,12.17,12.17,0,0,0-.44-7.21A8.62,8.62,0,0,0,58,40.24a9.16,9.16,0,0,0-3.29-1.88,13.29,13.29,0,0,0-4.1-.62,11.24,11.24,0,0,0-4.52.92,11.45,11.45,0,0,0-3.67,2.54A12,12,0,0,0,40,45a12.55,12.55,0,0,0-.91,4.83,13.91,13.91,0,0,0,1,5.37,11.15,11.15,0,0,0,2.63,3.88,11,11,0,0,0,3.91,2.36,14.65,14.65,0,0,0,4.83.79,17.63,17.63,0,0,0,4.83-.6,14.79,14.79,0,0,0,3.63-1.51.78.78,0,0,1,.63-.13.6.6,0,0,1,.39.4l.47,1.19a16.44,16.44,0,0,1-4.4,2,19,19,0,0,1-5.55.74,16.7,16.7,0,0,1-5.82-1,13.44,13.44,0,0,1-4.65-2.85A13.17,13.17,0,0,1,37.81,56a15.79,15.79,0,0,1-1.12-6.12,14.35,14.35,0,0,1,1.89-7.18,14.46,14.46,0,0,1,2.16-2.88,13.73,13.73,0,0,1,6.15-3.67,13.49,13.49,0,0,1,3.73-.51,14.49,14.49,0,0,1,3.24.36,13.19,13.19,0,0,1,3,1.06,12.24,12.24,0,0,1,2.59,1.74,11.1,11.1,0,0,1,3.38,5.36,12.73,12.73,0,0,1,.48,3.57,11.12,11.12,0,0,1-.55,3.59,9.17,9.17,0,0,1-1.51,2.86A7.12,7.12,0,0,1,59,56.05a6.08,6.08,0,0,1-2.82.68,3.61,3.61,0,0,1-2.26-.67A3.17,3.17,0,0,1,52.74,54a6.4,6.4,0,0,1-2.25,2.07,5.65,5.65,0,0,1-2.64.63A4.47,4.47,0,0,1,46,56.33a3.59,3.59,0,0,1-1.33-1,4.4,4.4,0,0,1-.78-1.56,7.05,7.05,0,0,1-.26-1.94,8.75,8.75,0,0,1,.58-3.09,8.44,8.44,0,0,1,1.74-2.8,8.91,8.91,0,0,1,2.86-2,9.3,9.3,0,0,1,4-.79,10.4,10.4,0,0,1,2.13.19,8,8,0,0,1,1.72.55Zm-1.11-5a7.45,7.45,0,0,0-1.55-.16,5.42,5.42,0,0,0-2.48.57,6.41,6.41,0,0,0-1.93,1.48,7.15,7.15,0,0,0-1.27,2.11,6.59,6.59,0,0,0-.46,2.43,3.34,3.34,0,0,0,.6,2.08,2.06,2.06,0,0,0,1.76.78,3.64,3.64,0,0,0,1.12-.18,3.16,3.16,0,0,0,1.1-.63,4.6,4.6,0,0,0,1-1.22,8.18,8.18,0,0,0,.76-1.95Z"/>
                <path className={styles.background} d="M42.33,48a11.49,11.49,0,0,1,.92-1.86L42,45.42c-.06.12-.12.24-.17.37a10.57,10.57,0,0,0-.76,4.07v0l.69.4A11.68,11.68,0,0,1,42.33,48Z"/>
                <path className={styles.background} d="M56.86,50.82c0,.11,0,.2-.08.3L58.71,50A9,9,0,0,0,59,47.71a10.35,10.35,0,0,0-.33-2.66l-.36.2Z"/>
                <path className={styles.background} d="M48.48,52.57a1.72,1.72,0,0,0,.52-.09,1.1,1.1,0,0,0,.41-.25,2.55,2.55,0,0,0,.54-.7,5.42,5.42,0,0,0,.55-1.44l.14-.53a2.12,2.12,0,0,1-1.72-.18l-.14-.08a5.6,5.6,0,0,0-.33.7,4.68,4.68,0,0,0-.33,1.71,1.67,1.67,0,0,0,.17.85Z"/>
                <path d="M80,30H20a5,5,0,0,0-5,5V65a5,5,0,0,0,5,5H80a5,5,0,0,0,5-5V35A5,5,0,0,0,80,30Zm0,35H59.1c-.52.2-1.05.4-1.6.56a21.18,21.18,0,0,1-6.12.82,18.7,18.7,0,0,1-6.51-1.11c-.22-.08-.42-.18-.63-.27H20V37.86l15,8.59c.07-.3.13-.6.21-.9a17,17,0,0,1,1.27-3.25L23.75,35H44.18a15.53,15.53,0,0,1,6.44-1.38A16.67,16.67,0,0,1,54.3,34a15.29,15.29,0,0,1,2.86,1H76.25l-12.1,6.91a13.65,13.65,0,0,1,1.09,4.38L80,37.86Z"/>
            </g>
        </svg>
    )
}

Email.defaultProps = {
    symbolOnly: false,
}
