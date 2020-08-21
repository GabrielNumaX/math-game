import React from 'react';

import '../../Sass/Loader.scss'

const Loader = (props) => {
    return ( 
        props.visible 
        ?
        <div className="DivLoader">
            <div className="LoaderRing">

                Loading
                <span className="Span"></span>                  
            </div> 
        </div>
        :
        props.children
     );
}
 
export default Loader;