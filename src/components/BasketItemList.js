import React from 'react';
import BasketItem from './BasketItem';
import { useObserver } from 'mobx-react';
import useStore from '../useStore';

const BasketItemList = () => {
    const { market } = useStore();
    const onTake = (name) => {
        market.take(name);
    };
    return useObserver(() => {
        const itemList = market.selectedItems.map((item) => <BasketItem item={item} key={item.name} onTake={onTake} />);
        return (
            <div>
                {itemList}
                {/* TotalPrice.js 분리 */}
                {/* <hr />
                <p>
                    <b>종합 : </b> {market.total}원
                </p> */}
            </div>
        );
    });
};
export default BasketItemList;
