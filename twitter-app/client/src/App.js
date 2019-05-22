import React, { Component } from 'react';
import { Alert, Card, Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import Tweet from './Tweet';
import apiClient from './apiClient';

import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
    state = {
        tweets: [],
        showError: false,
    };

    async componentDidMount() {
        try {
            const tweets = await apiClient.getTweets();
            this.setState({ tweets });
        } catch {
            this.setState({ showError: true });
        }
    }

    render() {
        const { showError, tweets } = this.state;

        return (
            <Container className="m-3" fluid>
                <Row>
                    <Col className="d-flex justify-content-center" sm={12}>
                        <Card className="bg-light">
                            <Card.Body>
                                <Card.Title>Tweets by @Casetabs</Card.Title>
                                {showError && (
                                    <Alert
                                        variant="danger"
                                        onClose={() => this.setState({ showError: false })}
                                        dismissible
                                    >
                                        <FontAwesomeIcon className="mr-2" icon={faExclamationCircle} />
                                        <span>Unable to load tweets</span>
                                    </Alert>)}
                                <div className="overflow-auto" style={{ maxHeight: '500px' }}>
                                    {tweets.map(tweet => (
                                        <Tweet key={tweet.id} {...tweet} />
                                    ))}
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        );
    }
}
export default App;