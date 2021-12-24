import styles from '../scss/components/table.module.scss'

type Props = {
    headings: Array<string>,
    data: Array<Array<any>>,
}

const Table = ({ headings, data }: Props) => {
    return (
        <table className={styles.table}>
            <thead>
            <tr className={styles.table__header}>
                {headings.map((heading) => (
                    <th className={styles.tables__headerCell}>
                        {heading}
                    </th>
                ))}
            </tr>
            </thead>
            <tbody>
            {data.map((row) => {
                <tr className={styles.table__row}>
                    {/*{row.map((cell) => {*/}
                    {/*    <td className={styles.table__cell}>{cell}</td>*/}
                    {/*}})*/}
                </tr>
            })}
            </tbody>
        </table>
    )
}

export default Table
