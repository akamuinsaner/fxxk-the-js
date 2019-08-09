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
}: IComponentProps) => {
    const cors = () => {
        fetch(
            'http://localhost:3000/cors',
        ).then((res) => {
            res.blob().then((blob) => {
                const filename = 'test.json';
                const a = document.createElement('a');
                const url = window.URL.createObjectURL(blob);
                a.href = url;
                a.download = filename;
                document.body.appendChild(a);
                a.click();
                window.URL.revokeObjectURL(url);
                document.body.removeChild(a);
            });
        });
    };
    return (
        <div>
            <button onClick={cors}>add</button>
            <button onClick={subCount}>sub</button>
            <button onClick={clearCount}>clear</button>
            <div>{home.count}</div>
        </div>
    )
};

export default connect((state: any) => ({
    home: state.home,
}), {
    addCount,
    clearCount,
    subCount,
})(Home);
