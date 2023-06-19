import { Table } from "./TransactionHistory.style";
import { TableHead } from "./TransactionHistory.style";
import { Row } from "./TransactionHistory.style";
import PropTypes from 'prop-types'; 

export const TransactionHistory = ({ transactions }) => {
    return (
      <Table  className="transaction-history">
        <TableHead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </TableHead>
        <tbody>
          {transactions.map(({ id, type, amount, currency }) => (
            <Row key={id}>
              <td>{type}</td>
              <td>{amount}</td>
              <td>{currency}</td>
            </Row>
          ))}
        </tbody>
      </Table>
    )
  };

  TransactionHistory.prototypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.number.isRequired,
        currency: PropTypes.string.isRequired,
      })
    ).isRequired,
  };