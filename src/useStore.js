import { counter } from './stores/counter';
import { market } from './stores/market';
const userStore = () => {
    return { counter, market };
};

export default userStore;
