import {connect} from 'react-redux'
import {people, phones} from '../../data/store/slices'
import PeopleScreen from "./component";
import uuid from 'uuid/v4'

const mapStateToProps = state => {
    const {people} = state;
    return {people}
};

const mapDispatchToProps = dispatch => {

    function addPerson(name, defaultPhone) {
        const id = uuid();
        dispatch(people.actions.addPerson({id, name, defaultPhone}));
        return id
    }

    function addPhone(personId, number, type) {
        dispatch(phones.actions.addPhone({personId, number, type}))
    }

    return {
        addPerson,
        addPhone
    }
};

const PeopleContainer = connect(mapStateToProps, mapDispatchToProps)(PeopleScreen);

export default PeopleContainer;