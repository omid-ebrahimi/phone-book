import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Card, {CardPrimaryContent} from '@material/react-card';
import {Fab} from '@material/react-fab';
import MaterialIcon from "@material/react-material-icon";
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

        const personId2 =
            this.props.addPerson('Arman Ebrahimi', '09155246598');
        this.props.addPhone(personId2, '09155246598', 'Mobile');
    }

    render() {
        const {people} = this.props;
        return (
            <main>
                <section className='cards-container'>
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
                </section>
                <div className='fab-container'><Fab textLabel='Add Contact' icon={<MaterialIcon icon="add"/>}/></div>
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