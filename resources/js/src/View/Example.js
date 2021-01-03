import React from 'react';

function App() {
    return (
        <div>Hi</div>
    );
}

export default App;

if (document.getElementById('example')) {
    ReactDOM.render(<App />, document.getElementById('example'));
}
