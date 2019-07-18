import * as React from 'react';
import Routes from './route';

interface IComponentProps {
    compiler: string;
    library: string;
}
const App = ({
    compiler,
    library,
}: IComponentProps) => {
    return (
        <div>
            <div>welcome to {library} {compiler} world</div>
            <Routes />
        </div>
    );
};

export default App;
