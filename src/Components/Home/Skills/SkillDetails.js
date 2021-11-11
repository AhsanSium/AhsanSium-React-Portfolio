import React from 'react';

const SkillDetails = ({skill}) => {
    return (
        
                
            <div className="col ">
                    <div className="h-100 skill-card">
                        <img src={skill.image} class="card-img-top" style={{width:'120px', height:'125px'}} alt="..." />
                        <div className=" ">
                            <h5 className="card-title">{skill.name}</h5>
                            <p className="card-text text-start text-muted">{skill.description}</p>
                        </div>
                    </div>
            </div>
    );
};

export default SkillDetails;
