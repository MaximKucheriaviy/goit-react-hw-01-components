import PropTypes from 'prop-types';
import TransactionInfo from 'components/TransactionInfo/TransactionInfo';
import css from './TransactionHistory.module.scss'

const TransactionHistory = ({transactions}) =>{
    return(
        <table className={css.transactionHistory}>
            <thead>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>
            <tbody>
                {transactions.map(({id, type, amount, currency}) => <TransactionInfo key={id} type={type} amount={amount} currency={currency}/>)}
            </tbody>
        </table>
    )
}

export default TransactionHistory;

TransactionHistory.propTypes = {
    transactions: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            type: PropTypes.string,
            amount: PropTypes.string,
            currency: PropTypes.string
        })
    )
}