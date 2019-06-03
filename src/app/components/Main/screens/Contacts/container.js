import {connect} from 'react-redux';
import ContactsScreen from './component';

const mapStateToProps = state => {
    const {contacts} = state;
    return {contacts}
};

export default connect(mapStateToProps)(ContactsScreen);