import * as React from 'react';
import * as styles from './index.less';
import { connect } from 'react-redux';
import { addCount, subCount, clearCount } from '../../models/home/actions';

interface IComponentProps {
    home: any;
    addCount: () => any;
    clearCount: () => any;
    subCount: () => any;
}
const Home = ({
    home,
    addCount,
    clearCount,
    subCount,
}: IComponentProps) => (
    <div>
        <button onClick={addCount}>add</button>
        <button onClick={subCount}>sub</button>
        <button onClick={clearCount}>clear</button>
        <div>{home.count}</div>
    </div>
);

export default connect((state: any) => ({
    home: state.home,
}), {
    addCount,
    clearCount,
    subCount,
})(Home);
