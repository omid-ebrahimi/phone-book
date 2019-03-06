import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Card, {CardPrimaryContent} from '@material/react-card';

class PeopleScreen extends Component {
    // For Test
    componentDidMount() {
        const personId =
            this.props.addPerson('Omid Ebrahimi', '09104588100');
        this.props.addPhone(personId, '09104588100', 'Mobile');
    }

    render() {
        const {people} = this.props;
        return (
            <div>
                {
                    Object.values(people).map(
                        person => (
                            <Card key={person.id}>
                                <CardPrimaryContent>
                                    <h1>{person.name}</h1>
                                    <p>Phone: {person.defaultPhone}</p>
                                </CardPrimaryContent>
                            </Card>)
                    )
                }
            </div>
        );
    }
}

PeopleScreen.propTypes = {
    people: PropTypes.object.isRequired,
    addPerson: PropTypes.func.isRequired,
    addPhone: PropTypes.func.isRequired
};

export default PeopleScreen;