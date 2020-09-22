import React from 'react';
import ShopItem from './ShopItem';
// **** useStore import
import useStore from '../useStore';
import { useObserver } from 'mobx-react';

const items = [
    {
        name: '생수',
        price: 580,
    },
    {
        name: '신라면',
        price: 900,
    },
    {
        name: '포카칩',
        price: 1500,
    },
    {
        name: '새우깡',
        price: 1200,
    },
    {
        name: '감자깡',
        price: 1000,
    },
];

const ShopItemList = () => {
    // **** useStore에서 market 연결
    const { market } = useStore();
    const onPut = (name, price) => {
        market.put(name, price);
    };

    // const itemList = items.map((item) => <ShopItem {...item} key={item.name} onPut={onPut} />);
    // return <div>{itemList}</div>;

    return useObserver(() => {
        const itemList = items.map((item) => <ShopItem {...item} key={item.name} onPut={onPut} />);
        return <div>{itemList}</div>;
    });
};

export default ShopItemList;
