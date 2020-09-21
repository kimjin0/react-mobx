import React from 'react';
import BasketItem from './BasketItem';

const BasketItemList = () => {
    return (
        <div>
            <BasketItem name="포카칩" price={1500} count={2} />
            <BasketItem name="생수" price={1500} count={2} />
            <hr />
            <p>
                <b>종합 : </b> 6,000원
            </p>
        </div>
    );
};
export default BasketItemList;
