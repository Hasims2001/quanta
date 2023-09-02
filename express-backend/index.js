const express = require("express");
require("dotenv").config();
const OpenAI = require("openai");
const app = express();
const cors = require("cors");
const session = require("express-session");
const bodyParser = require("body-parser");
const {AbortController} =  require("node-abort-controller");

global.AbortController = AbortController;
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(
  session({
    secret: process.env.OPENAI_SECRET_KEY,
    resave: false,
    saveUninitialized: true,
  })
);

const openai = new OpenAI({
  apiKey: process.env.OPENAI_SECRET_KEY,
});

const codingQuestions = [
  {
    question: "Explain the difference between 'let', 'const', and 'var' in JavaScript.",
    category: "JavaScript"
  },
  {
    question: "What is the purpose of a 'callback' function in JavaScript, and how does it work?",
    category: "JavaScript"
  },
  {
    question: "What is a closure in programming? Provide an example.",
    category: "JavaScript"
  },
  {
    question: "Explain the concept of 'hoisting' in JavaScript.",
    category: "JavaScript"
  },
  {
    question: "What is the difference between 'null' and 'undefined' in JavaScript?",
    category: "JavaScript"
  },
  {
    question: "What is the DOM (Document Object Model) in web development?",
    category: "Web Development"
  },
  {
    question: "What is an API (Application Programming Interface), and how is it used in web development?",
    category: "Web Development"
  },
  {
    question: "What is the purpose of CSS 'box-sizing' property? How does it affect layout?",
    category: "Web Development"
  },
  {
    question: "Explain the concept of 'RESTful APIs' and their characteristics.",
    category: "Web Development"
  },
  {
    question: "What is a SQL database, and how does it differ from a NoSQL database?",
    category: "Databases"
  },
  {
    question: "What is normalization in database design, and why is it important?",
    category: "Databases"
  },
  {
    question: "What is the difference between 'GET' and 'POST' HTTP methods?",
    category: "Web Development"
  },
  {
    question: "Explain the concept of 'Big O notation' in algorithm analysis.",
    category: "Algorithms"
  },
  {
    question: "What is a linked list, and how does it differ from an array?",
    category: "Data Structures"
  },
  {
    question: "What are the advantages and disadvantages of using a binary search tree?",
    category: "Data Structures"
  },
  {
    question: "Explain the concept of 'recursion' in programming with an example.",
    category: "Algorithms"
  },
  {
    question: "What is the purpose of 'try', 'catch', and 'finally' in exception handling?",
    category: "Programming Concepts"
  },
  {
    question: "What is version control, and why is it essential in collaborative coding projects?",
    category: "Software Development"
  },
  {
    question: "Explain the concept of 'inheritance' in object-oriented programming.",
    category: "Object-Oriented Programming"
  },
  {
    question: "What is 'polymorphism' in object-oriented programming? Provide an example.",
    category: "Object-Oriented Programming"
  },
];

const dsaQuestions = [
  { question: "What is a data structure?", category: "DSA" },
  { question: "Explain the difference between an array and a linked list.", category: "DSA" },
  { question: "What is an algorithm?", category: "DSA" },
  { question: "What is the time complexity of linear search?", category: "DSA" },
  { question: "What is a stack and how does it work?", category: "DSA" },
  { question: "Explain the concept of recursion.", category: "DSA" },
  { question: "What is a binary tree and its properties?", category: "DSA" },
  { question: "What is the purpose of hash tables in data structures?", category: "DSA" },
  { question: "What is the difference between BFS and DFS?", category: "DSA" },
  { question: "Explain dynamic programming and provide an example.", category: "DSA" },
  { question: "What is the Big O notation and why is it important?", category: "DSA" },
  { question: "What is the difference between best-case, average-case, and worst-case time complexity?", category: "DSA" },
  { question: "What is an AVL tree and why is it useful?", category: "DSA" },
  { question: "Explain the concept of hashing and collision resolution techniques.", category: "DSA" },
  { question: "What is the traveling salesman problem (TSP) and how can it be solved?", category: "DSA" },
  { question: "What are greedy algorithms and when are they used?", category: "DSA" },
  { question: "Explain the concept of divide and conquer with an example.", category: "DSA" },
  { question: "What is memoization in the context of dynamic programming?", category: "DSA" },
  { question: "What is a priority queue and its applications?", category: "DSA" },
  { question: "What are the advantages and disadvantages of various sorting algorithms?", category: "DSA" },
];

const generalQuestions = [
  { question: "Tell me about yourself.", category: "General" },
  { question: "What is your greatest strength?", category: "General" },
  { question: "What is your greatest weakness?", category: "General" },
  { question: "Why do you want to work for this company?", category: "General" },
  { question: "What do you know about our products/services?", category: "General" },
  { question: "Why should we hire you?", category: "General" },
  { question: "Where do you see yourself in 5 years?", category: "General" },
  { question: "Can you describe a challenging situation you faced at work and how you handled it?", category: "General" },
  { question: "What are your salary expectations?", category: "General" },
  { question: "How do you handle stress and pressure?", category: "General" },
  { question: "What motivates you?", category: "General" },
  { question: "Do you work better in a team or independently?", category: "General" },
  { question: "What is your preferred work environment?", category: "General" },
  { question: "How do you stay organized and manage your time effectively?", category: "General" },
  { question: "Can you give an example of a time when you had to adapt to change?", category: "General" },
  { question: "What do you like to do outside of work?", category: "General" },
  { question: "Tell me about a book or article you've recently read.", category: "General" },
  { question: "How do you stay up-to-date with industry trends?", category: "General" },
  { question: "What is your preferred method of communication?", category: "General" },
  { question: "Do you have any questions for us?", category: "General" },
];


function getRandomQuestions(arr, numQuestions) {
  const randomQuestions = [];
  const questionIndices = [];

  while (questionIndices.length < numQuestions) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    if (!questionIndices.includes(randomIndex)) {
      questionIndices.push(randomIndex);
      randomQuestions.push(arr[randomIndex]);
    }
  }

  return randomQuestions;
}
const generateQuestions = async(type)=>{
  try {
    const prompt = `write the ${process.env.TOTAL_QUESTIONS} basic interview theoretical questions for ${type}.`;
    let response = await  openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "system", content: prompt }],
      max_tokens: 100,
    })
    return response.choices[0].message.content;
  } catch (error) {
   return error;
  }
}


// endpoints
app.get("/", (req, res) => {
  res.send("Welcome to the Interview");
});

session.userResponses = [];
session.questions = [];
session.currentQuestionIndex = 0;
app.get("/start_interview/:type", async (req, res) => {
  const {type} = req.params;
  // if(type === "coding"){
  //   session.questions = getRandomQuestions(codingQuestions, 3);
  // }else if(type === "dsa"){
  //   session.questions = getRandomQuestions(dsaQuestions, 3);
  // }else{
  //   session.questions = getRandomQuestions(generalQuestions, 3);
  // }

  let que  = await generateQuestions(type);
  que = que.split("\n");
  for(let i = 0; i < que.length; i++){
    if(que[i] !== "" && que[i] !== " "){
      session.questions.push(que[i]);
    }
    
  }



  const currentQuestion = session.questions[0];
  res.json({ question: currentQuestion });
});

app.get("/interview_question", async (req, res) => {
  // if (req.session.currentQuestionIndex < req.session.questions.length) {
  //   const currentQuestion =
  //     req.session.questions[req.session.currentQuestionIndex];

  if (session.currentQuestionIndex < session.questions.length) {
        const currentQuestion =
          session.questions[session.currentQuestionIndex];
          
    res.json({ question: currentQuestion, redirect: false });
  } else {
    res.json({question: "questions are completed! click on end interview", redirect: true})
  }
});

app.post("/submit_response", async (req, res) => {
  const userResponse = req.body.response;
 
  session.userResponses.push(userResponse);
  session.currentQuestionIndex++;
  res.json({ submit: true, message: "Great!" });
});

app.get("/interview_feedback", async(req, res) => {

  const userResponses = session.userResponses;
  const userQuestions = session.questions;


  let prompt = `take an role of interviewer. your task is to give feedback to the candidate. below there are question and their answer give appropiate feedback.also give hiring status. Hiring criteria : Options are Reject, Waitlist, Hire and Strong Hire. \n`;

  for (let i = 0; i < userResponses.length; i++) {
    prompt += userQuestions[i].question + " : " + userResponses[i] + "\n";
  }

  //dynamic feedback from openai
  // const feedback = getFeedback(prompt);
  // let feedback = "";
  //   openai.chat.completions.create({
  //     model: "gpt-3.5-turbo",
  //     messages: [{ role: "system", content: prompt }],
  //     max_tokens: 30,
  //   }).then(chatCompletion =>{
  //     feedback = chatCompletion.choices[0].message.content;
  //     console.log(feedback);
  //     if(feedback){
  //       session.destroy((err) => {
  //         if (err) {
  //           res.json({ error: err, session_destroy: false });
  //         } else {
  //           res.json({ feedback: feedback, session_destroy: true });
  //         }
  //       });
  //     }
  //   }).catch((error)=>{
  //     res.json({ error: error, session_destroy: false });
  //   })
   
  try {
    let response = await  openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "system", content: prompt }],
      max_tokens: 50,
    })
    session.userResponses = [];
    session.questions = [];
    session.currentQuestionIndex = 0;
    res.json({ feedback: response.choices[0].message.content, session_destroy: true });

  } catch (error) {
    res.json({ error: error, session_destroy: false });
  }

 
});

app.listen(8080, () => {
  console.log("Listening on port 8080");
});
