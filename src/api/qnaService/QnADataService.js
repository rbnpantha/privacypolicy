import axios from "axios";
import { QA_API_URL } from "../../Constants";

class QnADataService {
  retrieveAllQnAs() {
    console.log("executed service");
    return axios.get(`${QA_API_URL}/qa/all`);
  }

  retrieveQnAsByType(languageType) {
    console.log("executed service");
    return axios.get(`${QA_API_URL}/qa/language/` + languageType);
  }

  retrieveQnA(id) {
    //console.log('executed service')
    return axios.get(`${QA_API_URL}/users/todos/${id}`);
  }

  deleteQnA(id) {
    //console.log('executed service')
    return axios.delete(`${QA_API_URL}/users/todos/${id}`);
  }

  updateQnA(id, questionAnswerTO) {
    //console.log('executed service')
    return axios.put(`${QA_API_URL}/users/todos/${id}`, questionAnswerTO);
  }

  createQnA(questionAnswerTO) {
    console.log("executed service");
    return axios.post(`${QA_API_URL}/qa/add`, questionAnswerTO);
  }
}

export default new QnADataService();
