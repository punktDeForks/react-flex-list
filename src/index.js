import React, {Fragment} from 'react';
import PropTypes from "prop-types";

import StandardList from './components/standardList';
import AsyncList from './components/asyncList';
import SimpleList from "./components/simpleList";

const ListTypes = {
    'standard': StandardList,
    'async': AsyncList,
    'simple': SimpleList
};

const FlexList = React.forwardRef((props, ref) => {
    let {type, ...listProps} = props;
    listProps.ref = ref;
    return <Fragment>{React.createElement(ListTypes[type] ? ListTypes[type] : ListTypes.standard,  listProps)}</Fragment>;
});

FlexList.propsTypes = {
    type: PropTypes.string
};

FlexList.defaultProps = {
    type: 'standard'
};

export default FlexList;
