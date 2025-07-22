import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useGlobalContext } from '../context/globalContext';

function History() {
  const { transactionHistory } = useGlobalContext(); // assumed to be wrapped in useCallback
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const data = await transactionHistory();
        setHistory(data);
      } catch (err) {
        console.error(err);
        setError('Failed to fetch transaction history.');
      } finally {
        setLoading(false);
      }
    };

    fetchHistory();
  }, [transactionHistory]); // ✅ included dependency to satisfy React rules

  if (loading) return <HistoryStyled><p>Loading...</p></HistoryStyled>;
  if (error) return <HistoryStyled><p className="error">{error}</p></HistoryStyled>;

  return (
    <HistoryStyled>
      <h2>Recent History</h2>
      {history.length === 0 ? (
        <p>No transactions found.</p>
      ) : (
        history.map(({ _id, title, amount, type }) => (
          <div key={_id} className="history-item">
            <p style={{ color: type === 'expense' ? 'red' : 'var(--color-green)' }}>
              {title}
            </p>
            <p style={{ color: type === 'expense' ? 'red' : 'var(--color-green)' }}>
              {type === 'expense' ? `-${Math.max(amount, 0)}` : `+${Math.max(amount, 0)}`}
            </p>
          </div>
        ))
      )}
    </HistoryStyled>
  );
}

const HistoryStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .history-item {
    background: #FCF6F9;
    border: 2px solid #FFFFFF;
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
    padding: 1rem;
    border-radius: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .error {
    color: red;
    font-weight: 500;
  }
`;

export default History;
