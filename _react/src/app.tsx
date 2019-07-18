import * as React from 'react';

interface IComponentProps {
    compiler: string;
    library: string;
}
const App = ({
    compiler,
    library,
}: IComponentProps) => {
    return (
        <div>welcome to {library} {compiler} world</div>
    );
};

export default App;
