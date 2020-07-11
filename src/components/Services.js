import React, { Component } from 'react'
import {FaCocktail,FaHiking,FaShuttleVan,FaBeer} from 'react-icons/fa'
import Title from './Title'
export default class Services extends Component {
    state={
        services:[
            {
                icon:<FaCocktail></FaCocktail>,
                title:"free cocktails",
                info:"Lorem ipsum dolor sit smet consed adf dgdkd dwMagni dow corpois dyeyq"
            },
            {
                icon:<FaHiking />,
                title:"Endless Hiking",
                info:"Lorem ipsum dolor sit smet consed adf dgdkd dwMagni dow corpois dyeyq"
            },
            {
                icon:<FaShuttleVan/>,
                title:"free Shuttle",
                info:"Lorem ipsum dolor sit smet consed adf dgdkd dwMagni dow corpois dyeyq"
            },
            {
                icon:<FaBeer/>,
                title:"Strong as Beer",
                info:"Lorem ipsum dolor sit smet consed adf dgdkd dwMagni dow corpois dyeyq"
            }
        ]
    }
    render() {
        return (
            <section className="services">
                <Title title="services"></Title>
                <div className="services-center">
                    {
                        this.state.services.map((item,index)=>{
                            return <article key={index} className="service">
                                <span>{item.icon}</span>
                                <h6>{item.title}</h6>
                        <p>{item.info}</p>
                            </article>
                        })
                    }
                </div>
            </section>
        )
    }
}
