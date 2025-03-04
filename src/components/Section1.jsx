import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

let Section1 = ()=>{

    const navigate = useNavigate();

    let gotoTemplate=()=>{
        navigate('/tempalte');
    }

    let[name,setname]=useState("");
    let[phone,setphone]=useState("");
    let[email,setemail]=useState("");
    let[skills,setskills]=useState("");
    let[frskills,setskills_fr]=useState("");
    let[brskills,setskills_br]=useState("");
    let[language,setlang]=useState("");
    let[hobbies,sethobi]=useState("");
   
    
   let handlename= (e)=>{
        setname(e.target.value);
    }
    let handlephone = (e)=>{
        setphone(e.target.value);
    }

    let handleemail = (e)=>{
        setemail(e.target.value);
    }

    let handleskills = (e)=>{
        setskills(e.target.value);
    }

    let handle_front =(e)=>{
        setskills_fr(e.target.value);
    }
    let handle_back =(e)=>{
        setskills_br(e.target.value);
    }
    let handle_lang =(e)=>{
        setlang(e.target.value);
    }
    let handle_hobi =(e)=>{
        sethobi(e.target.value);
    }

    // function handlename(e){

    // }
    let handlesubmit= (e)=>{
        e.preventDefault();

        let payloade={name,phone,email,skills}
        axios.post("http://localhost:3000/details",payloade)
        // console.log(name);
        // console.log(phone);
        // console.log(email);
        // console.log(skills);
        // let mail=email;
        // console.log(mail);
    }
    return( 
        <div className="bodyform">
            <div className="form-container">
            <form  onSubmit={handlesubmit}className="form-body">
                <div className="form-left">
                  <div className="form-group">
                   <label htmlFor="image-person">Profile Picture:</label>
                   <input type="file" id="image-person" name="profilePicture" />
                  </div> 
        <div className="form-group">
      
            <h2>Contact</h2>
            <label htmlFor="email">Email:</label>
            <textarea id="email" name="email" placeholder="example@gmail.com" value={email} onChange={handleemail}></textarea>

            <label htmlFor="phone">Mobile Number:</label>
            <textarea id="phone" name="phone" placeholder="phone" value={phone} onChange={handlephone}></textarea>
        </div>

    <div className="form-group">
      <h2>Skills</h2>
      <label htmlFor="skills-programming">Programming Languages:</label>
      <textarea id="skills-programming" name="programmingSkills" placeholder="Python, Java, C++" value={skills} onChange={handleskills}></textarea>

      <label htmlFor="skills-frontend">Frontend:</label>
      <textarea id="skills-frontend" name="frontendSkills" placeholder="HTML5, CSS3, JavaScript, React" value={frskills} onChange={handle_front}></textarea>

      <label htmlFor="skills-backend">Backend:</label>
      <textarea id="skills-backend" name="backendSkills" placeholder="Node.js" value={brskills} onChange={handle_back} ></textarea>
    </div>

    <div className="form-group">
      <h2>Language</h2>
      <label htmlFor="languages">Languages Known:</label>
      <textarea id="languages" name="languages" placeholder="English, Hindi" value={language} onChange={handle_lang}></textarea>
    </div>

    <div className="form-group">
      <h2>Hobbies</h2>
      <label htmlFor="hobbies">Hobbies:</label>
      <textarea id="hobbies" name="hobbies" placeholder="Playing cricket, Swimming" value={hobbies} onChange={handle_hobi}></textarea>
    </div>

    </div>
      <div className="form-right">
        <div className="form-group">
          <label htmlFor="name">Full Name:</label>
          <textarea id="name" name="name" placeholder="Devesh Singh" value={name} onChange={handlename}></textarea>
        </div>
        <div className="form-group">
      <label htmlFor="title">Title:</label>
      <textarea id="title" name="title" placeholder="Web Developer"></textarea>
    </div>

    <div className="form-group">
      <h2>Summary</h2>
      <label htmlFor="summary">Summary:</label>
      <textarea id="summary" name="summary"></textarea>
    </div>

    <div className="form-group">
      <h2>Experience</h2>
      <label htmlFor="experience1">Experience 1:</label>
      <textarea id="experience1" name="experience1"></textarea>

      <label htmlFor="experience2">Experience 2:</label>
      <textarea id="experience2" name="experience2"></textarea>
    </div>

    <div className="form-group">
      <h2>Education</h2>
      <label htmlFor="education">Education Details:</label>
      <textarea
        id="education"
        name="education"
      ></textarea>
    </div>

    <div className="form-group">
      <h2>Projects</h2>
      <label htmlFor="project1">Project 1:</label>
      <textarea id="project1" name="project1" ></textarea>

      <label htmlFor="project2">Project 2:</label>
      <textarea id="project2" name="project2"></textarea>
    </div>

       </div>
       <button onClick={gotoTemplate} className="Section1btn">Submit</button>
       </form>
     </div>
    </div>
    )
}
export default Section1