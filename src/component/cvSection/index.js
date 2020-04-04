import React from 'react';

const Resume = ({views}) => {

    return ( 
        <div class="timeline-wrap">
            {views.map(view => (
                <div class="timeline-block">

                    <div class="timeline-ico">
                        {view.icon}
                    </div>
                    
                    <div class="timeline-header">
                        <h3 className='h03'>{view.title}</h3>
                        <p className='lead'>{view.date}</p>
                    </div>

                    <div class="timeline-content">

                        <h4 className='h04'>{view.contentHead}</h4>
                        <p className='lead'>{view.content}</p>
                    </div>

                </div>
            ))}
        </div>
    );
}
 
export default Resume;