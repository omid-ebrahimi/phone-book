import React, {Component} from 'react';
import PropTypes from 'prop-types';

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
                        person => (<div key={person.id}>{person.name}<br/>{person.defaultPhone}</div>)
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