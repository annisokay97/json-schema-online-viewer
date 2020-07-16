import React from 'react';
import {ThemeProvider} from 'ustudio-ui/theme';
import {Button, TextArea, Text} from 'ustudio-ui';
import {JsonSchemaParser} from 'u-json-docs';

import './App.css';

function App() {
    const [saved, setSaved] = React.useState(false);
    const [schema, setSchema] = React.useState(JSON.stringify({}))

    const handleChange = (value) => {
        setSchema(value)
    }

    return (
        <ThemeProvider>
            <>
                {!saved && <div className="container">
                    <Text variant="h1">Hello, Ruslan!</Text>
                    <Text variant="h3">Just paste your json-schema and save it</Text>
                    <TextArea rows="25" onChange={handleChange}/>

                    <Button className="button" onClick={() =>setSaved(true)}>Save!</Button>

                </div>}

                {saved && <JsonSchemaParser schema={JSON.parse(schema)} title="Your schema"/>}

            </>
        </ThemeProvider>
    );
}

export default App;
