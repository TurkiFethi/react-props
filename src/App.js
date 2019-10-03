import React from 'react';
import './App.css';
import Cards from '../src/Cards'

let tab=[
  {
    image:"https://static.independent.co.uk/s3fs-public/thumbnails/image/2019/09/24/12/Ronaldo-missed-out-on-the-top-prize.jpg",
    firstName:"Cristano",
    lastName:"Ronaldo",
    age:34
  },
  {
    image:"http://cdr.topmercato.com/medias/images2017/2019-05-02-lionel-messi.jpg",
    firstName:"Lionel",
    lastName:"Messi",
    age:33
  },
  {
    image:"https://static.cnews.fr/sites/default/files/styles/image_640_360/public/football_mohamed_salah_liverpool_kylian_mbappe_5d0225b8b9eb1.jpg?itok=VYyttjq2",
    firstName:"Mohamed",
    lastName:"Salah",
    age:28
  }
]




function App() {
  return (
    <div>

        <Cards list={tab} job="football player"/>
    


      
    </div>
  );
}

export default App;
