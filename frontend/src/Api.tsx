import axios from "axios";


export const startInterview = async (): Promise<string>  =>{
    try {
        const response = await axios.get("http://localhost:8080/start_interview"); 
    return response.data.question.question;
  } catch (error) {
    throw error;
  }
}

export const getQuestion = async (): Promise<string>  =>{
    try {
        const response = await axios.get("http://localhost:8080/interview_question"); 
        if(response.data.question.redirect){
            return "interview is over!";
        }else{
            return response.data.question.question;
        }
  } catch (error) {
    throw error;
  }
}
export const sendAnswer = async (value: string):  Promise<string>=>{
 
    try {
        const response = await axios.post("http://localhost:8080/submit_response", value); 
            return response.data;
  } catch (error) {
    throw error;
  }
}


export const getFeedback = async (): Promise<string>  =>{
    try {
        const response = await axios.get("http://localhost:8080/interview_feedback"); 
            return response.data.question.feedback;
  } catch (error) {
    throw error;
  }
}