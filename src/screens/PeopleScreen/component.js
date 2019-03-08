import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Card, {CardPrimaryContent} from '@material/react-card';
import './component.css';

class PeopleScreen extends Component {
    // For Test
    componentDidMount() {
        const personId =
            this.props.addPerson('Omid Ebrahimi', '09104588100');
        this.props.addPhone(personId, '09104588100', 'Mobile');

        const personId1 =
            this.props.addPerson('Azam Ebrahimi', '09195036341');
        this.props.addPhone(personId1, '09195036341', 'Mobile');
    }

    render() {
        const {people} = this.props;
        return (
            <main>
                {
                    Object.values(people).map(
                        person => (
                            <Card key={person.id} className='card'>
                                <CardPrimaryContent className='card-primary-content'>
                                    <h1>{person.name}</h1>
                                    <p>Phone: {person.defaultPhone}</p>
                                </CardPrimaryContent>
                            </Card>)
                    )
                }
            </main>
        );
    }
}

PeopleScreen.propTypes = {
    people: PropTypes.object.isRequired,
    addPerson: PropTypes.func.isRequired,
    addPhone: PropTypes.func.isRequired
};

export default PeopleScreen;