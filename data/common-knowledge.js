const quizData = {
  title: "Quize app Application"
};

const questions = [
  {
    text: "Which of the following is a client site language?",
    type: "mc",
    answers: [
      { text: "Java", correct: false },
      { text: "C", correct: false },
      { text: "Python", correct: false },
      { text: "JavaScript", correct: true }
    ]
  },
  {
    text: "What does HTML stand for?",
    type: "mc",
    answers: [
      { text: "Hypertext Markup Language", correct: true },
      { text: "Cascading Style Sheet", correct: false },
      { text: "Jason Object Notation", correct: false },
      { text: "Helicopters Terminals Motorboats Lamborginis", correct: false }
    ]
  },
  {
    text: "What year was JavaScript launched?",
    type: "mc",
    answers: [
      { text: "1996", correct: false },
      { text: "1995", correct: true },
      { text: "1994", correct: false },
      { text: "none of the above", correct: false }
    ]
  },
  {
    text: "What does CSS stands for?",
    type: "mc",
    answers: [
      { text: "Hypertext Markup Language", correct: false },
      { text: "Cascading Style Sheet", correct: true },
      { text: "Jason Object Notation", correct: false },
      { text: "Helicopters Terminals Motorboats Lamborginis", correct: false }
    ]
  },
  {
    text: "Inside which HTML element do we put the JavaScript?",
    type: "mc",
    answers: [
      { text: "js", correct: false },
      { text: "scripting", correct: false },
      { text: "script", correct: true },
      { text: "javascript", correct: false }
    ]
  },
  {
    text: "What is the full form of DBMS?",
    type: "mc",
    answers: [
      { text: "Data of Binary Management System", correct: false },
      { text: "Database Management System", correct: true },
      { text: "Database Management Service", correct: false },
      { text: "Data Backup Management System", correct: false }
    ]
  },
  {
    text: "Who created the first DBMS?",
    type: "mc",
    answers: [
      { text: "Edgar Frank Codd", correct: false },
      { text: "Charles Bachman", correct: true },
      { text: "Charles Babbage", correct: false },
      { text: "Sharon B. Codd", correct: false }
    ]
  },
  {
    text: "What is an operating system?",
    type: "mc",
    answers: [
      { text: "interface between the hardware and application programs", correct: false },
      { text: "collection of programs that manages hardware resources", correct: false },
      { text: "system service provider to the application programs", correct: false },
      { text: "all of the mentioned", correct: true }
    ]
  },
  {
    text: "In Operating Systems, which of the following is/are CPU scheduling algorithms?",
    type: "mc",
    answers: [
      { text: "Priority", correct: false },
      { text: "Round Robin", correct: false },
      { text: "Shortest Job First", correct: false },
      { text: "All of the mentioned", correct: true }
    ]
  },
  {
    text: "Which one of the following errors will be handled by the operating system?",
    type: "mc",
    answers: [
      { text: "lack of paper in printer", correct: false },
      { text: "connection failure in the network", correct: false },
      { text: "power failure", correct: false },
      { text: "all of the mentioned", correct: true }
    ]
  },
  {
    text: "What is a computer network?",
    type: "mc",
    answers: [
      { text: "A device used to display information on a computer screen", correct: false },
      { text: "A collection of interconnected computers and devices that can communicate and share resources", correct: true },
      { text: "A type of software used to create documents and presentations", correct: false },
      { text: "The physical casing that protects a computer’s internal components", correct: false }
    ]
  },
  {
    text: "What is internet?",
    type: "mc",
    answers: [
      { text: "A network of interconnected local area networks", correct: false },
      { text: "A collection of unrelated computers", correct: false },
      { text: "Interconnection of wide area networks", correct: true },
      { text: "A single network", correct: false }
    ]
  },
  {
    text: "What is the full form of OSI?",
    type: "mc",
    answers: [
      { text: "optical service implementation", correct: false },
      { text: "open service Internet", correct: false },
      { text: "open system interconnection", correct: true },
      { text: "operating system interface", correct: false }
    ]
  },
  {
    text: "Which one of the following is not a function of the network layer?",
    type: "mc",
    answers: [
      { text: "congestion control", correct: false },
      { text: "error control", correct: true },
      { text: "routing", correct: false },
      { text: "inter-networking", correct: false }
    ]
  },
  {
    text: "Which of the following is not an example of DBMS?",
    type: "mc",
    answers: [
      { text: "MySQL", correct: false },
      { text: "Microsoft Access", correct: false },
      { text: "IBM DB2", correct: false },
      { text: "Google", correct: true }
    ]
  },
  {
    text: "var js = (function(x) {return x*x;}(10));",
    type: "mc",
    answers: [
      { text: "Exception will be thrown", correct: false },
      { text: "Memory leak", correct: false },
      { text: "Error", correct: false },
      { text: "Yes, perfectly", correct: true }
    ]
  },
  {
    text: "Which of the following scoping types does JavaScript use?",
    type: "mc",
    answers: [
      { text: "Sequential", correct: false },
      { text: "Segmental", correct: false },
      { text: "Lexical", correct: true },
      { text: "Literal", correct: false }
    ]
  },
  {
    text: "What is the reason for avoiding the attributes property in the HTML DOM?",
    type: "mc",
    answers: [
      { text: "Found unnecessary", correct: false },
      { text: "Attributes don’t have attributes", correct: true },
      { text: "Attributes have attributes", correct: false },
      { text: "Considered irrelevant", correct: false }
    ]
  },
  {
    text: "How is everything treated in HTML DOM?",
    type: "mc",
    answers: [
      { text: "Node", correct: true },
      { text: "Attributes", correct: false },
      { text: "Elements", correct: false },
      { text: "Arrays", correct: false }
    ]
  },
  {
    text: "How are the objects organized in the HTML DOM?",
    type: "mc",
    answers: [
      { text: "Class-wise", correct: false },
      { text: "Queue", correct: false },
      { text: "Hierarchy", correct: true },
      { text: "Stack", correct: false }
    ]
  }
];

module.exports = { quizData, questions };
