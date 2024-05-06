"use client"
import Script from "next/script";
import { useEffect } from "react";
import Matter from "matter-js"
export default function Home() {
useEffect(()=>{


  
  let container = document.getElementById("matter-container")
  
  
      var Engine = Matter.Engine,
          Render = Matter.Render,
          Runner = Matter.Runner,
          MouseConstraint = Matter.MouseConstraint,
          Mouse = Matter.Mouse,
          Composite = Matter.Composite,
          Bodies = Matter.Bodies;
  
  
  
      // create engine
      var engine = Engine.create(),
          world = engine.world;
  
      // create renderer
      var render = Render.create({
          element: container,
          engine: engine,
          options: {
              width: container.clientWidth,
              height: container.clientHeight,
              wireframes: false,
              background: "#151515",
          }
      });
  
      Render.run(render);
  
      // create runner
      var runner = Runner.create();
      Runner.run(runner, engine);
  let leftWall =  Bodies.rectangle(-25, container.clientHeight/2 , 50, container.clientHeight, { isStatic: true })
  let ground = Bodies.rectangle(container.clientWidth/2, container.clientHeight+25 , container.clientWidth, 50, { isStatic: true })
  let rightWall = Bodies.rectangle(container.clientWidth+50, container.clientHeight/2 , 100, container.clientHeight, { isStatic: true })
  let roof =  Bodies.rectangle(container.clientWidth/2,-50 , container.clientWidth, 50, { isStatic: true })

      Composite.add(world, [
          rightWall,ground,leftWall,roof
      ]);
  

      function createBalls(amount,radius){
          for (let i = 0; i < amount; i++) {
              Composite.add(engine.world,Bodies.circle((i*4), 0, radius,{restitution:1, friction:0.3,frictionAir:0.001}))
          }
      }
      createBalls(500,7)
  
      var mouse = Mouse.create(render.canvas),
          mouseConstraint = MouseConstraint.create(engine, {
              mouse: mouse,
              constraint: {
                  stiffness: 0.2,
                  render: {
                      visible: false
                  }
              }
          });
  
      Composite.add(world, mouseConstraint);
      

window.addEventListener("resize",()=>{
  render.canvas.width = container.clientWidth
  render.canvas.height = container.clientHeight



  Matter.Body.setPosition(
  rightWall,
  Matter.Vector.create(
      container.clientWidth+50,
      container.clientHeight/2
  )
  )

})

},[])




  return (
  <div>
        <div className="header"><h1>Coming Soon</h1></div>
        <div id="matter-container"></div>
        <Script src="main.js" />
  </div>
  );
}
