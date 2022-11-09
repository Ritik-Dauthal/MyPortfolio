import React from "react";
import MyWorks from "./MyWorks";

function App() {
  return (
    <div className="overflow-y-scroll">
      <div className="bg-gray-800 flex flex-col justify-center items-center h-screen">
        <div className="flex ">
          <img
            className="w-64 rounded-full px-4 "
            src="https://media.discordapp.net/attachments/1005128452661321848/1022785620281655307/pic.jpg?width=514&height=422"
          />
          <div className=" text-white text-6xl font-mono ">
            Hello I'm Ritik Dauthal!
            <div className="text-3xl flex gap-2 mt-4">
              LET'S CONNECT:
              <a href="https://www.facebook.com/ritik.dauhal.9">
                {" "}
                <img
                  className="w-8"
                  src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYqOHVZeytDooa9TcF3bFeZ4BYd9Bggc2ovQ&usqp=CAU
"
                />
              </a>
              <a href="https://instagram.com/dauthal_rishub?igshid=YmMyMTA2M2Y=">
                <img
                  className="w-8 "
                  src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFt5NVH4VeXeNXNSTGehFk2s8h4reyHjP_W4VBCNYq1eG6nKPm0p-Z07A&s=10"
                />
              </a>
              <a href="https://twitter.com/DauthalRitik?s=08">
                {" "}
                <img
                  className="w-8"
                  src="https://cdn-icons-png.flaticon.com/512/81/81609.png"
                />
              </a>
              <a href="https://www.linkedin.com/in/ritik-dauthal-93525b22b">
                {" "}
                <img
                  className="w-8"
                  src="https://seeklogo.com/images/L/linkedin-black-icon-logo-ECC426C572-seeklogo.com.png
"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-200 flex flex-col items-center justify-center h-screen px-4">
        <h1 className="text-indigo-600 font-normal text-8xl">WHO AM I ?</h1>
        <h1 className="font-normal  text-black text-4xl mt-2">
          I am Ritik,<span className="px-2">Front-End Web Developer </span>
        </h1>
        <p className="text-2xl  text-gray-500 font-thin mt-2 px-10 ">
          Hi, I'm Ritik Dauthal,and I graduated from the Kumaun University in
          2021 with a degree in Bachelor of Science. My interests are in Front
          End development, and I love to create beautiful and performant
          products with delightful user experiences.
        </p>
        <div className="text-xl  text-indigo-600 flex gap-2 mt-4">
          CONNECT WITH ME :
          <a href="https://www.facebook.com/ritik.dauhal.9">
            {" "}
            <img
              className="w-8"
              src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYqOHVZeytDooa9TcF3bFeZ4BYd9Bggc2ovQ&usqp=CAU
"
            />
          </a>
          <a href="https://instagram.com/dauthal_rishub?igshid=YmMyMTA2M2Y=">
            <img
              className="w-8 "
              src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFt5NVH4VeXeNXNSTGehFk2s8h4reyHjP_W4VBCNYq1eG6nKPm0p-Z07A&s=10"
            />
          </a>
          <a href="https://twitter.com/DauthalRitik?s=08">
            {" "}
            <img
              className="w-8"
              src="https://cdn-icons-png.flaticon.com/512/81/81609.png"
            />
          </a>
          <a href="https://www.linkedin.com/in/ritik-dauthal-93525b22b">
            {" "}
            <img
              className="w-8"
              src="https://seeklogo.com/images/L/linkedin-black-icon-logo-ECC426C572-seeklogo.com.png
"
            />
          </a>
        </div>
      </div>
      <div className="bg-gray-800 h-screen ">
        <div className=" text-white text-6xl flex justify-center items-start font-semibold">
          HERE'S WHAT I'M GOOD AT
        </div>
        <div className="flex flex-col justify-center items-center mt-10">
          <div className="flex gap-5">
            {" "}
            <img
              className="w-40"
              src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_1280.png"
            />{" "}
            <img
              className="w-40 "
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQziz5PjH3pK1AMRygc8LTksuwYaVTIOvOUAW4R_5lS&s"
            />
            <img
              className="w-40 "
              src="https://1000logos.net/wp-content/uploads/2020/09/JavaScript-Logo.png"
            />{" "}
          </div>

          <div className="flex mt-10 gap-5">
            {" "}
            <img
              className="w-40 "
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS03kU4dJIELF0cQ2-3RDOdddELLgszn2inLQ&usqp=CAU"
            />
            <img
              className="w-40  "
              src="https://miro.medium.com/max/816/1*TpbxEQy4ckB-g31PwUQPlg.png"
            />
          </div>
        </div>
      </div>
      <div className="bg-gray-300 overflow-y-scroll h-screen ">
        <div className=" text-gray-800 text-6xl flex justify-center items-start font-semibold py-5 hover:text-green-700">
          Featured Works
        </div>
        <div className="flex px-10 py-5 ">
          <MyWorks
            image={
              "https://images.cdn1.stockunlimited.net/preview1300/shopping-bag-with-many-items-on-sale_1805299.jpg"
            }
            children="E-commerce Project"
            netlify={"https://charlie-bazaar.netlify.app/"}
            about=" In this Project i have created an E-commerce website using
                React."
          />
          <MyWorks
            image={
              "https://st4.depositphotos.com/1813303/23536/v/1600/depositphotos_235365756-stock-illustration-multiplication-table-chart-multiplication-table.jpg"
            }
            children="Table Project"
            netlify={"https://tableassignment.netlify.app/"}
            about=" In this project i have created a table calculator ."
          />
          <MyWorks
            image={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMSQMZVXYWVQj4fguGMS-Ervz3MfSDvyksIw&usqp=CAU"
            }
            about=" In this project i have created a To-Do List maker ."
            netlify={"https://listmaketo-do.netlify.app/"}
            children="To-Do Project"
          />
        </div>
        <div className="flex px-10 py-5 ">
          <MyWorks
            image={
              "https://image.shutterstock.com/image-vector/weather-forecast-widget-concept-temperature-260nw-1944970438.jpg"
            }
            about="In this project I have created a Weather-Check site"
            netlify={"https://weather-check-charlie.netlify.app/"}
            children="Weather-Report Project"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
