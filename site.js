import React from 'react';

class Site extends React.Component {
    render() {
        return <html>
            <head>
                <title>Example App</title>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" />
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootswatch/4.5.2/sketchy/bootstrap.min.css" />
            </head>
            <body>
                <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                    <span className="navbar-brand">
                        Example App
                    </span>
                </nav>
                <main className="container">
                    <h1 className="display-1">
                        {this.props.greeting}
                    </h1>
                </main>
            </body>
        </html>;
    }
}

export default Site;