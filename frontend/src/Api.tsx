import axios from "axios";


export const startInterview = async (type: string): Promise<string>  =>{
    try {
        const response = await axios.get(`${process.env.REACT_APP_API_LINK}/start_interview/${type}`); 
    return response.data.question;
  } catch (error) {
    throw error;
  }
}

export const getQuestion = async (): Promise<string>  =>{
    try {
        const response = await axios.get(`${process.env.REACT_APP_API_LINK}/interview_question`); 
        // if(response.data.question.redirect){
        //     return "interview is over!";
        // }else{
        
            return response.data.question;
        // }
  } catch (error) {
    throw error;
  }
}
export const sendAnswer = async (value: string):  Promise<any>=>{
 
    try {
      
        const response = await axios.post(`${process.env.REACT_APP_API_LINK}/submit_response`, {response: value}); 
            return response.data;
  } catch (error) {
    throw error;
  }
}


export const getFeedback = async (): Promise<string>  =>{
    try {
        const response = await axios.get(`${process.env.REACT_APP_API_LINK}/interview_feedback`); 
            return response.data.feedback;
  } catch (error) {
    throw error;
  }
}