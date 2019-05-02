import React, {Component} from 'react';
import MenuSurface, {Corner} from '@material/react-menu-surface/dist/index';
import Button from '@material/react-button/dist/index';
import List, {ListItem, ListItemText} from '@material/react-list/dist/index';
import PropTypes from "prop-types";

class SelectMenu extends Component {
    state = {
        open: false,
        anchorElement: null
    };

    setAnchorElement = (element) => {
        if (this.state.anchorElement) {
            return;
        }
        this.setState({anchorElement: element});
    };

    render() {
        const {items, selectedItem, onSelectItem} = this.props;
        return (
            <div
                className='mdc-menu-surface--anchor'
                ref={this.setAnchorElement}
            >
                <Button onClick={() => this.setState({open: true})}>{selectedItem}</Button>

                <MenuSurface
                    open={this.state.open}
                    anchorCorner={Corner.BOTTOM_LEFT}
                    onClose={() => this.setState({open: false})}
                    anchorElement={this.state.anchorElement}
                >
                    <List handleSelect={(selectedIndex) => onSelectItem(items[selectedIndex])}>
                        {
                            items.map((item, index) => (
                                <ListItem key={index}>
                                    <ListItemText primaryText={item}/>
                                </ListItem>
                            ))
                        }
                    </List>
                </MenuSurface>
            </div>
        );
    }
}

SelectMenu.propTypes = {
    items: PropTypes.array.isRequired,
    selectedItem: PropTypes.string.isRequired,
    onSelectItem: PropTypes.func.isRequired
};

export default SelectMenu;