import React, { Component } from "react";
import { consultarFaturamento } from "./../../services/faturamento"; 


class Faturamento extends Component{

    constructor(props){
        super(props);
        this.state = {
            'Meta Data': {
                "1. Information": 0 ,
                "2. Symbol": 0 ,
                "3. Last Refreshed":0 ,
                "4. Output Size": 0 ,
                "5. Time Zone": "US/Eastern"
              }  
        };
    }

   

    

    componentDidMount(){
        consultarFaturamento().then(dados => this.setState(dados));
    }

    render(){
        return(
            <div>
           
                {this.state.TIME_SERIES_DAILY.map((item) => {
                                    return(
                                            <td>{item}</td>
                                    )

                                }                     
                                                                
                                )}


            </div>
        )
    }

}

export default Faturamento;