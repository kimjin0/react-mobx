import { observable } from 'mobx';

const market = observable({
    selectedItems: [],
    put(name, price) {
        const exists = this.selectedItems.find((item) => item.name === name);
        if (!exists) {
            this.selectedItems.push({
                name,
                price,
                count: 1,
            });
            return;
        }
        exists.count++;
        console.log(exists);
    },
    take(name) {
        const itemToTake = this.selectedItems.find((item) => item.name === name);
        console.log('itemToTake', itemToTake);
        itemToTake.count--;
        if (itemToTake.count === 0) {
            // 갯수가 0 이면
            this.selectedItems.remove(itemToTake); //배열에서 제거처리합니다.
        }
    },
});

export { market };
