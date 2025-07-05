import css from "../css modules/TransactionHistory.module.css";

const TransactionHistory = ({transactions}) => {
    return (
        <div className={css.container}>
            <table className={css.transactionsHistory}>
                <thead>
                    <tr>
                        <th>Type</th>
                        <th>Amount</th>
                        <th>Currency</th>
                    </tr>
                </thead>

                <tbody>
                    {transactions.map(transaction => {
                        const {id, type, amount, currency} = transaction;
                        return (<tr className={css.row} key={id}>
                            <td>{type}</td>
                            <td>{amount}</td>
                            <td>{currency}</td>
                        </tr>)
                    })}
                </tbody>
            </table>
        </div>

    );
};
export default TransactionHistory