// import { display } from "@mui/system";
import React, { useState } from "react";
import {
  FloatingLabel,
  Form,
  Button,

} from "react-bootstrap";

import "./YourQuestion.css";

let arrayCopyOfDiv;


function YourQuestion({ showTheModal }) {

  //----State for Primary info----
  const [primaryInfo, setprimaryInfo] = useState({
    candidateName: "",
    department: "",
    clientName: "",
    technology: "",
  });

  //----State For Array of questions.----
  const [arrayOfDivs, setArrayOfDivs] = useState([{
    question: '',
    answer: '',
    difficultylevel: ''
  }]);

  //----State for question error----
  const [questionError, setquestionError] = useState('');
  const [difficultyLevelError, setdifficultyLevelError] = useState('');

  const [questionErrorBeforeSubmitting, setquestionErrorBeforeSubmitting] = useState('')
  const [difficultyErrorBeforeSubmitting, setdifficultyErrorBeforeSubmitting] = useState('')

  const [candidateNameError, setcandidateNameError] = useState('');
  const [departmentError, setdepartmentError] = useState('');
  const [clientNameError, setclientNameError] = useState('');
  const [technologyError, settechnologyError] = useState('');


  /* Validation part starts here.  */
  let regex = /^[a-zA-Z ]+$/;
  let isCanNameValid;

  const validateCandidateName = () => {
    let validCandidateName = primaryInfo.candidateName;

    if (validCandidateName) {
      if (regex.test(validCandidateName)) {
        console.log('hello');
        // console.log(validCandidateName);
        setcandidateNameError('');
        return true;
      } else {
        console.log(validCandidateName);
        console.log('hi');
        isCanNameValid = true;
        setcandidateNameError('Please enter a valid candidate name.');
      }
    } else {
      setcandidateNameError('Please enter your name here.');
    }
    isCanNameValid = false;
    return false;
  }

  const validateClientName = () => {
    let validClientName = primaryInfo.clientName;
    let regex = /^[a-zA-Z]+$/;

    if (validClientName) {
      if (regex.test(validClientName)) {
        setclientNameError('');
        return true;
      } else {
        setclientNameError('Please enter a valid client Name name.');
      }
    } else {
      setclientNameError('Please enter a client name here.');
    }
    return false;
  }

  const validateDepartment = () => {
    if (primaryInfo.department) {
      setdepartmentError('');
      return true;
    } else {
      setdepartmentError('Please select a department');
    }
    return false;
  }
  const validateTechnology = () => {
    if (primaryInfo.technology) {
      settechnologyError('');
      return true;
    } else {
      settechnologyError('Please select a technology');
    }
    return false;
  }

  //Function to validate the question.
  const validateQuestion = (index) => {
    // let regex = /^[a-zA-Z]+$/;
    let question = arrayOfDivs[index].question;
    if (question) {
      setquestionError('');
      return true;
    } else {
      setquestionError('Please enter a question in the question box')
    }
    return false;
  }

  //Function to validate the difficulty level

  const validateDifficultyLevel = (index) => {
    let difficultyLevel = arrayOfDivs[index].difficultylevel;
    if (difficultyLevel) {
      setdifficultyLevelError('');
      return true;
    } else {
      setdifficultyLevelError('Please enter a difficulty level')
    }
    return false;
  }


  //----To add a new div of question answer and interview level----
  const addNewQuestion = (previousIndex) => {
    // console.log(primaryInfo);
    let isQuestionValid = validateQuestion(previousIndex);
    let isDifficultyLevelValid = validateDifficultyLevel(previousIndex);
    if (isQuestionValid && isDifficultyLevelValid) {
      arrayCopyOfDiv = [...arrayOfDivs];
      // console.log(arrayCopyOfDiv);
      arrayCopyOfDiv.push({
        question: '',
        answer: '',
        difficultylevel: ''
      });

      setArrayOfDivs(arrayCopyOfDiv);
      // console.log(arrayCopyOfDiv);
      console.log(arrayCopyOfDiv);
      setdifficultyLevelError('');
      setquestionError('');
    }
    setquestionErrorBeforeSubmitting('')
    setdifficultyErrorBeforeSubmitting('')

  }

  //To delete a single div of question answer and interview level
  const deleteTheGivenInputDiv = (index) => {
    console.log("i:", index)
    arrayOfDivs.splice(index, 1);
    setArrayOfDivs([...arrayOfDivs]);
    console.log(arrayOfDivs);
  };

  //----Update the question in the object----
  const updateTheQuestion = (event, index) => {

    console.log(index);
    const arrayCopyOfDiv = [...arrayOfDivs]
    arrayCopyOfDiv[index].question = event.target.value;
    setArrayOfDivs(arrayCopyOfDiv)
    // console.log(event.target.value);
  }

  //----Update the answer in the object----
  const updateTheAnswer = (event, index) => {
    console.log(index);

    const arrayCopyOfDiv = [...arrayOfDivs]
    arrayCopyOfDiv[index].answer = event.target.value;
    setArrayOfDivs(arrayCopyOfDiv)

    console.log(event.target.value);
  }

  //----Update the difficultyLevel in the object----
  const updateTheDifficultyLevel = (event, index) => {
    console.log(index);

    const arrayCopyOfDiv = [...arrayOfDivs]
    arrayCopyOfDiv[index].difficultylevel = event.target.value;
    setArrayOfDivs(arrayCopyOfDiv)

    console.log(event.target.value);
  }

  //----Update the values of primary info.----
  const updateTheGivenValues = (event) => {
    console.log(event.target.value);
    setprimaryInfo({
      ...primaryInfo,
      [event.target.name]: event.target.value
    }
    );
    console.log(primaryInfo);
  }

  const validateAllTheObjectsInTheEnd = () => {
    let count = 0;
    arrayOfDivs.forEach((val, index) => {
      if (!val.question) {
        setquestionErrorBeforeSubmitting(`Please enter a question before submitting at question number
         ${index + 1}`);
        count++;

      } if (!val.difficultylevel) {
        setdifficultyErrorBeforeSubmitting(`Please enter difficulty level before submitting at question number ${index + 1} `);
        count++;

      }
    });


    if (count > 0) {

      return false;
    }

    setquestionErrorBeforeSubmitting('');
    setdifficultyErrorBeforeSubmitting('');
    setquestionError('');
    setdifficultyLevelError('');
    return true;
  }


  const sendTheData = () => {
    let isCandidateNameValid = validateCandidateName();
    let isClientNameValid = validateClientName();
    let isDepartmentValid = validateDepartment();
    let isTechnologyValid = validateTechnology();
    let areAllTheObjectsValid = validateAllTheObjectsInTheEnd();


    if (isCandidateNameValid &&
      isClientNameValid &&
      isDepartmentValid &&
      isTechnologyValid &&
      areAllTheObjectsValid) {
      console.log('Your from submitted successfully!');
      showTheModal();

      return
    }
  }

//============================================== return ===================================================


  return (
    <div>
      <form className="m-5">
        <div className="YQ-Container p-3">
          <div className="row d-flex">
            <p id="header">Upload Your Questions</p>

            <div id="field1" className="col-md-3 mb-1">
              <FloatingLabel
                controlid="floatingInput"
                label="Candidate Name"
              // className="mb-3"
              >
                <Form.Control type="text" placeholder="Candidate Name" value={primaryInfo.candidateName} onChange={(event) => { updateTheGivenValues(event) }}
                  name='candidateName'
                />
                <small>{candidateNameError}</small>
              </FloatingLabel>
            </div>
            <div id="field1" className="col-md-3 mb-1">
              <FloatingLabel label="Select Department" >
                <Form.Select value={primaryInfo.department} onChange={(event) => { updateTheGivenValues(event) }}
                  name='department'
                  controlid="floatingInput">
                  <option value="" >Department</option>
                  <option value="hr">HR</option>
                  <option value="it">IT</option>
                </Form.Select>
                <small>{departmentError}</small>
              </FloatingLabel>
            </div>



            {/* <div className="col-md-6"> */}
            <div id="field1" className="col-md-3 mb-1">
              <FloatingLabel
                controlid="floatingInput"
                label="Client Name"
                className=""
              >
                <Form.Control type="text" value={primaryInfo.clientName} placeholder="Client Name" onChange={(event) => { updateTheGivenValues(event) }}
                  name='clientName'
                />
                <small>{clientNameError}</small>
              </FloatingLabel>
            </div>
            <div id="field1" className="col-md-3 mb-1">
              <FloatingLabel label="Select Technology" controlid="floatingSelect">
                <Form.Select aria-label="" value={primaryInfo.technology} onChange={(event) => { updateTheGivenValues(event) }}
                  name='technology'
                >
                  <option value="" >Technology</option>
                  <option value="Reactjs">React js</option>
                  <option value="Angular">Angular</option>
                  <option value="Python">Python</option>
                  <option value="Vuejs">Vue js</option>
                  <option value="Javascript">JavaScript</option>
                </Form.Select>
                <small>{technologyError}</small>
              </FloatingLabel>
              <br />
            </div>
            {/* </div> */}

          </div>


          {arrayOfDivs.map((val, index) => {
            return (
              <div key={index} className="row d-flex">
                <div className="col">


                  <div className="row  ">
                    <div className="col-md-9 mb-1">
                      <FloatingLabel
                        controlid="floatingTextarea"
                        label="Questions"
                        className='floatingContainer'
                      >
                        <Form.Control
                          as="textarea"
                          style={{ height: '62px' }}
                          placeholder="Leave a comment here"
                          onChange={(event) => { updateTheQuestion(event, index) }}
                          value={val.question}
                        />
                        <small>{arrayOfDivs.length === (index + 1) ? questionError : ''}</small>
                        <br />
                        <small>{questionErrorBeforeSubmitting}</small>
                      </FloatingLabel>
                    </div>

                    <div className="col-md-3 mb-2" >
                      <FloatingLabel label="Difficulty Level" controlid="floatingSelect" className='floatingContainer'>
                        <Form.Select aria-label=""
                          onChange={(event) => { updateTheDifficultyLevel(event, index) }}
                          value={val.difficultylevel}
                        >
                          <option value="" >Level</option>
                          <option value="Easy">Easy</option>
                          <option value="Intermediate">Intermediate</option>
                          <option value="Expert">Expert</option>
                        </Form.Select>
                        <small>{arrayOfDivs.length === (index + 1) ? difficultyLevelError : ''}</small>
                        <br />
                        <small>{difficultyErrorBeforeSubmitting}</small>
                      </FloatingLabel>
                    </div>

                  </div>



                  <div className="row g-3  d-flex">
                    <div className="col-md-9 mb-2" >
                      <FloatingLabel
                        controlid="floatingTextarea2"
                        label="Answers"
                      >
                        <Form.Control
                          onChange={(event) => { updateTheAnswer(event, index) }}
                          as="textarea"
                          placeholder="Leave a comment here"
                          style={{ height: "150px" }}
                          value={val.answer}
                        />
                      </FloatingLabel>
                    </div>
                    <div className="col-md-3 mb-2 addButton">

                      {arrayOfDivs.length === index + 1 ? <Button
                        onClick={() => { addNewQuestion(index) }}
                        className="btn btn-warning"
                        style={{ color: "#fff" }}
                      >
                        <i className="fa fa-plus-circle"></i> Add
                      </Button> : ''}
                      {arrayOfDivs.length === index + 1 ? '' : <Button
                        onClick={() => { deleteTheGivenInputDiv(index) }}
                        className='btn btn-warning'
                        style={{ color: "#fff" }}
                      >
                      <i class="fas fa-trash"></i>delete
                      </Button>}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div>
          <br />
          <br />
          <Button
           
            className="btn btn-warning submitbtn"
            style={{ float: "right", margin: "12px", color: '#fff' }}
            variant="contained"
            onClick={sendTheData}
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
}

export default YourQuestion;

//=============================================== End ==================================================
