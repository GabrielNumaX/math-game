import React from 'react';

import {connect} from 'react-redux';

import css from './Sidebar.module.css';

const Sidebar = (props) => {


    return(
        <div className={css.DivSidebar}>

            <h1>Your Score</h1>


        </div>
    )
}


// this reads from STORE
const mapGlobalStateToProps = (globalState) => {
    return {
        score: globalState.score,
    }
}

export default connect(mapGlobalStateToProps, null)(Sidebar);
// export default Sidebar;