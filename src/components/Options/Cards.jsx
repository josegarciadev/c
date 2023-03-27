import React from 'react';
import { CardItem } from './CardItem';

const card = [{
    id: 1,
    title: "CAMPUS COACH",
    description: "Graduate knowing all of your options",
}, 
{   id: 2,
    title: "JOB SEARCH",
    description: "Resume, interviewing & identify your passions",},
{   id: 3,
    title: "GETTING A JOB",
    description: "Negotiating an offer, promotion or reviewing a contract ",
},{
    id: 4,
    title: "LEAVING A JOB",
    description: "Voluntarily, involuntarily understanding right & severance package",
},
,{
    id: 5,
    title: "STARTING A FAMILY",
    description: "Maternity, paternity, adopting and family leave rights",
},
,{
    id: 6,
    title: "WORKPLACE GUIDANCE",
    description: "General help or navigating a questionable situation",
}
];



export const Cards = () => {
  return (
    <>
    {
        card.map( (card) => (
          <CardItem key={card.id }
          {...card} />
        ))

    }
    </>
  )
}

