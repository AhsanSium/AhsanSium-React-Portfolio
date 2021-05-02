import React from 'react';

const SkillDetails = ({skill}) => {
    return (
        
                
            <div class="col ">
                    <div class="h-100 skill-card">
                        <img src={skill.image} class="card-img-top" style={{width:'120px', height:'125px'}} alt="..." />
                        <div class=" ">
                            <h5 class="card-title">{skill.name}</h5>
                            <p class="card-text text-start text-muted">{skill.description}</p>
                        </div>
                    </div>
            </div>
    );
};

export default SkillDetails;
