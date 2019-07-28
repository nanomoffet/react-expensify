import React from 'react';
import { Link } from 'react-router-dom';

const ExpenseListItem = ({
    id,
    description,
    amount,
    createdAt,
}: {
    id: string;
    description: string;
    amount: number;
    createdAt: number;
}) => (
    <div>
        <Link to={`/edit/${id}`}>
            <h3>{description}</h3>
        </Link>
        <p>
            {amount} - {createdAt}
        </p>
    </div>
);

export default ExpenseListItem;
