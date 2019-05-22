import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card, Image, OverlayTrigger, Popover } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faDove } from '@fortawesome/free-solid-svg-icons';
import moment from 'moment';

class Tweet extends Component {
    static propTypes = {
        createdAt: PropTypes.string,
        text: PropTypes.string,
        user: PropTypes.shape({
            id: PropTypes.number,
            name: PropTypes.string,
            screenName: PropTypes.string,
            description: PropTypes.string,
            followersCount: PropTypes.number,
            statusesCount: PropTypes.number,
        }).isRequired,
    };

    static defaultProps = {
        user: {}
    };

    render() {
        const { createdAt, text, user } = this.props;

        return (
            <Card className="my-3">
                <Card.Body className="d-flex flex-row">
                    <div className="mr-3">
                        <Image
                            src="https://pbs.twimg.com/profile_images/861658508084731904/Hul8JOOX_bigger.jpg"
                            rounded
                        />
                    </div>
                    <div className="d-flex flex-column">
                        <div>
                            <strong className="mr-1">
                                {user.name}
                            </strong>
                            <OverlayTrigger
                                trigger="hover"
                                placement="right"
                                overlay={(
                                    <Popover id={`user-info-${user.id}`} placement="auto">
                                        <p>{user.description}</p>
                                        <div>
                                            <span className="text-info mr-1">
                                                <FontAwesomeIcon icon={faUser}/> {user.followersCount}
                                            </span>
                                            <span className="text-info">
                                                <FontAwesomeIcon icon={faDove}/> {user.statusesCount}
                                            </span>
                                        </div>
                                    </Popover>
                                )}
                            >
                                <span className="btn-link mr-1">
                                    &#64;{user.screenName}
                                </span>
                            </OverlayTrigger>
                            <span className="mr-1">
                                &middot; {moment(createdAt).format('MMM D')}
                            </span>
                        </div>
                        <div>
                            <p>{text}</p>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        );
    }
}
export default Tweet;