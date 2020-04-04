import React, { Fragment} from 'react';

const Service  = ({views}) => {

    return ( 
        <Fragment >
            {views.map(view => (

                <div class="col-lg-4 col-md-4 col-sm-6">		
       	            <a href="#" class="gtco-card-item">
							
                        <div class="gtco-text">
                            <h2 className="mt-4">{view.title}</h2>
                            <p className="lead">{view.body}</p>
                        </div>
					</a>

                </div> 
            ))}
        
        </Fragment>

    );
}
 
export default Service;