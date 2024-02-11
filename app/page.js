"use client"
import Magnet from './magnet';
import React, { useEffect } from 'react';

export default function Main() {


  useEffect(() => {
    function boxFill(quantity) {
      const container = document.getElementById("container");
      container.innerHTML = '';

      for (let i = 0; i < quantity; i++) {
        let box = document.createElement("div");
        box.classList.add("box");
        container.appendChild(box);
      }
    }

    function updateGrid() {
      const newRows = Math.floor(document.body.clientHeight /40);
      const newColumns = Math.floor(document.body.clientWidth /40);

      const container = document.getElementById("container");
      container.style.setProperty("--columns", newColumns);
      container.style.setProperty("--rows", newRows);

      boxFill(newRows * newColumns);
    }

    updateGrid();

    window.addEventListener("resize", updateGrid);

    return () => {
      window.removeEventListener("resize", updateGrid);
    };

  }, []); 

  return (
    <div>
    <div id='container' className="container"></div>
    <div className='nav'>
      <Magnet>
        <div className='expand'>
           <a target='_blank' href='https://youtube.com/@artimum'>Youtube</a>
        </div>
      </Magnet>

      <Magnet>
        <div className='expand'>        
        <a target='_blank' href='https://github.com/artimum1/'>Github</a> 
        </div>
      </Magnet>

      <Magnet>
      <div className='expand'>       
       <a target='_blank' href='https://www.instagram.com/artimum1/'>Instagram</a> 
      </div>

      </Magnet>

      <Magnet>
      <div className='expand'>
      <a target='_blank' href='https://discord.gg/c57Z8f8ec6'>Discord</a> 
      </div>
      </Magnet>
    </div>
    </div>
  );
}
