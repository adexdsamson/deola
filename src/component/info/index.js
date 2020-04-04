import React from 'react';

const Folio = ({views}) => {

    return ( 
        <div style={{margin: 'auto'}} className="row contact-info">

            {views.map(view => (
                <div style={{margin: 'auto'}} className="col-four tab-full">

                    <div className="icon">
                        <i className={view.icon}></i>
                    </div>

                    <h5>{view.title}</h5>

                    <p className="text-white lead">
                        {view.body}
                    </p>

                </div>
            ))}

        </div>
    );
}
 
export default Folio;