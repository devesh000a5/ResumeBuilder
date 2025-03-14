// import axios from "axios";
// import { response } from "express";


import React from 'react';
import {useState,useEffect} from 'react'
import image2 from '../image.jpg'

let Backend =()=>{

    let[data,setdata]= useState([]);

    useEffect(()=>{
        fetch('http://localhost:3000/details')
            .then((response)=>{
                return response.json();
            })
            .then((data)=>{
                setdata(data);
            })
            .catch(()=>{
                console.log("error fetching data")
            })
    },[])
    // axios.get("http://localhost:3000/details")


    return(
        <div>
            {data.map((x)=>{

                return(
                  <div className='temp-body'>
                  <div class="full">
                      <div class="left">
                          <div class="image">
                              <img  id='image-person' src={image2} alt="gfg-logo"/>
                          </div>
                          <div class="Contact">
                              <h2>Contact</h2>
                              <p>
                                    <b>Email id:</b>{x.email}
                                </p>
                              <p>
                                    <b>Mobile no :</b>{x.phone}
                                </p>
                          </div>
                          <div class="Skills">
                              <h2>Skills</h2>
                              <ul>
                                  <li>
                                        <b>Programming Languages :
                                          Python, Java, C++</b>
                                    </li>
                                  <li>
                                        <b>Frontend : HTML5, CSS3,
                                          JavaScript, React</b>
                                    </li>
                                  <li>
                                        <b>Backend : Node.js</b>
                                    </li>
                              </ul>
                          </div>
                          <div class="Language">
                              <h2>Language</h2>
                              <ul>
                                  <li>English</li>
                                  <li>Hindi</li>
                              </ul>
                          </div>
                          <div class="Hobbies">
                              <h2>Hobbies</h2>
                              <ul>
                                  <li>Playing cricket</li>
                                  <li>Swimming</li>
                              </ul>
                          </div>
                      </div>
                      <div class="right">
                          <div class="name">
                              <h1>Devesh Singh</h1>
                          </div>
                          <div class="title">
                              <p>Web Developer</p>
                          </div>
                          <div class="Summary">
                              <h2>Summary</h2>
                              <p>
                                    To secure a challenging position in a
                                  reputable organization
                                  to expand my learning knowledge and skill
                              </p>
                          </div>
                          <div class="Experience">
                              <h2>Experience</h2>
                              <h3>Abc webdev pvt ltd - Senior Web Developer</h3>
                              <p>January 2022 to Present</p>
                              <ul>
                                  <li>
                                      Actively engaged in web creative
                                      design and development.
                                    </li>
                                  <li>
                                      Designing project & planning
                                    </li>
                              </ul>
                              <h3>Xyz webdev pvt ltd - junior web developer</h3>
                              <p>August 2021 to December 2021</p>
                              <ul>
                                  <li>
                                        Actively engaged in web creative
                                      design and development.
                                    </li>
                                  <li>Designing project & planning</li>
                                  <li>Working on designing</li>
                              </ul>
                          </div>
                          <div class="Education">
                              <h2>Education</h2>
                              <table>
                                  <tr>
                                      <th>University/college  </th>
                                      <th>Passing year  </th>
                                      <th>percentage/cgpa</th>
                                  </tr>
                                  <tr>
                                      <td>xyz</td>
                                      <td>2020</td>
                                      <td>8.9</td>
                                  </tr>
                                  <tr>
                                      <td>pqr</td>
                                      <td>2018</td>
                                      <td>89%</td>
                                  </tr>
                              </table>
                          </div>
                          <div class="project">
                              <ul>
                                  <li>
                                      <h2>Project1</h2>
                                      <p>
                                            This project is based on html
                                          & used React
                                        </p>
                                  </li>
                                  <li>
                                      <h2>Project2</h2>
                                      <p>
                                            This project is based on html
                                          & used React
                                        </p>
                                  </li>
                              </ul>
                          </div>
                      </div>
                  </div>
              </div>
                )
            }
            )
            }
        </div>
    )



}
export default Backend
