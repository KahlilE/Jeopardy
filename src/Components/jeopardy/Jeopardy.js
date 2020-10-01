import React, { Component } from 'react';
//import our service
import JeopardyService from "../../Services/jeopardyService";
class Jeopardy extends Component {
    //set our initial state and set up our service as this.client on this component
    constructor(props) {
        super(props);
        this.client = new JeopardyService();
        this.state = {
            data: {},
            score: 0,
            formData: {
                firstName: "",
                lastName: "",
                email: "",
                answer: ""
            }


        }
    }
    //get a new random question from the API and add it to the data object in state
    getNewQuestion() {
        return this.client.getQuestion().then(result => {
            this.setState({
                data: result.data[0]
            })
        })
    }
    //when the component mounts, get a the first question
    componentDidMount() {
        this.getNewQuestion();
    }

    handleChange = (event) => {
        let formData = this.state.formData;
        formData[event.target.name] = event.target.value;
        this.setState({formData});
    }
    handleSubmit = (event) => {
        let newScore = 0
        event.preventDefault();
        if(this.state.data.answer === this.state.formData.answer){
            newScore = this.setState({score: newScore})
        }
        this.getNewQuestion()
    }
    

    //display the results on the screen
    render() {
        let category = 'loading'

        if (this.state.data && this.state.data.category) {
            category = this.state.data.category.title
        }

        
        


        if(this.state.submitted){
            
            return (
                
                
                <div>
                    
                    
                    <button onClick={this.resetForm}>Reset Form</button>
                    
                </div>
            )
        }



        return (
            <div>
                <strong>Question: </strong>{(this.state.data.question)}<br></br>
                <strong>Value: </strong>{this.state.data.value}<br></br>
                <strong>Category: </strong>{category}<br></br>
                <strong>Score: </strong>{this.state.score}<br></br>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>Answer: </label>
                        <input onChange={this.handleChange} 
                        type="text" 
                        name="answer" 
                        value={this.state.formData.name} />
                    </div>
                    <button>Submit Answer</button> <br/>
                    
                    
                    


                </form>

                
                
                {/* <strong>Answer: </strong> <input type="text"
                    value={this.state.value}
                    onChange={this.handleChange} //https://stackoverflow.com/questions/52915543/how-to-create-a-text-box-in-react
                />
                <button>Submit Answer</button> */}
            </div>



        );
    }
}
export default Jeopardy;