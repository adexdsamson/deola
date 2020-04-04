import React from 'react';

const Folio = ({views}) => {

    return ( 
        <div id="folio-wrapper" class="block-1-2 block-mob-full stack">
            {views.map(view => (
                <div class="bgrid folio-item">
                    <div class="item-wrap">
                        <img src={view.img} alt={view.title}/>
                        <a style={{textDecoration: "none"}} href={view.modal} class="overlay">	                  	           
                            <div class="folio-item-table">
                                <div class="folio-item-cell">
                                    <h3 class="folio-title">{view.title}</h3>	     					    
                                        <span class="folio-types">
                                        {view.type}
                                    </span>
                                </div>	                      	
                            </div>                    
                        </a>
                    </div>	               
                </div> 
            ))}
            {views.map(view => (
                <div id={view.modal} class="popup-modal slider mfp-hide">	

                    <div class="media">
                        <img src={view.img} alt="" />
                    </div>      	
        
                    <div class="description-box">
                        <h4>{view.title}</h4>		      
                        <p>{view.body}</p>
        
                        <div class="categories">{view.category}</div>			               
                    </div>
        
                    <div class="link-box">
                    <a href={view.link}>Details</a>
                        <a href="#" class="popup-modal-dismiss">Close</a>
                    </div>		      
        
                </div> 
            ))}

        </div>
    );
}
 
export default Folio;