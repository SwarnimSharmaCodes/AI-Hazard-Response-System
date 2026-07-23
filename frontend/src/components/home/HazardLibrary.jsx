import { useState } from "react";

import {
    Flame,
    Zap,
    Factory,
    Droplets
} from "lucide-react";

import "./home.css";

const hazards = [

    {
        id:1,

        icon:Flame,

        title:"Fire",

        risk:"High",

        ppe:[
            "Helmet",
            "Fire-resistant gloves",
            "Respirator"
        ],

        emergency:[
            "Evacuate area",
            "Use extinguisher",
            "Inform supervisor"
        ]
    },

    {
        id:2,

        icon:Zap,

        title:"Electrical",

        risk:"High",

        ppe:[
            "Insulated gloves",
            "Helmet",
            "Safety boots"
        ],

        emergency:[
            "Disconnect power",
            "Restrict access",
            "Call electrician"
        ]
    },

    {
        id:3,

        icon:Factory,

        title:"Machinery",

        risk:"Medium",

        ppe:[
            "Helmet",
            "Safety glasses",
            "Gloves"
        ],

        emergency:[
            "Stop machine",
            "Isolate equipment",
            "Report incident"
        ]
    },

    {
        id:4,

        icon:Droplets,

        title:"Chemical Spill",

        risk:"High",

        ppe:[
            "Chemical suit",
            "Mask",
            "Gloves"
        ],

        emergency:[
            "Evacuate",
            "Contain spill",
            "Notify emergency team"
        ]
    }

];

function HazardLibrary(){

    const [openId,setOpenId]=useState(null);

    function toggle(id){

        setOpenId(openId===id?null:id);

    }

    return(

<section className="hazards">

<div className="section-heading">

<span>KNOWLEDGE BASE</span>

<h2>Industrial Hazard Library</h2>

<p>

Explore common industrial hazards,
recommended PPE and emergency response
procedures.

</p>

</div>

<div className="hazard-list">

{hazards.map((hazard)=>{

const Icon=hazard.icon;

return(

<div
key={hazard.id}
className="hazard-card"
>

<button
className="hazard-header"
onClick={()=>toggle(hazard.id)}
>

<div className="hazard-title">

<Icon size={26}/>

<h3>{hazard.title}</h3>

</div>

<span>

{openId===hazard.id?"▲":"▼"}

</span>

</button>

{openId===hazard.id && (

<div className="hazard-content">

<h4>Risk Level</h4>

<p>{hazard.risk}</p>

<h4>Recommended PPE</h4>

<ul>

{hazard.ppe.map((item,index)=>

<li key={index}>{item}</li>

)}

</ul>

<h4>Emergency Response</h4>

<ul>

{hazard.emergency.map((item,index)=>

<li key={index}>{item}</li>

)}

</ul>

</div>

)}

</div>

);

})}

</div>

</section>

);

}

export default HazardLibrary;