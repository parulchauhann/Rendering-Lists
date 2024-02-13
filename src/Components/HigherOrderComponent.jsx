import React, { Component } from 'react'
import '../HigherOrderComponents.css'

export class HigherOrderComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userData: [
                { id: '1', name: 'Joe', user_type: 'Developer', age: 31, years: 11 },
                { id: '2', name: 'Hill', user_type: 'Designer', age: 26, years: 4 },
                { id: '3', name: 'John', user_type: 'Teacher', age: 24, years: 2 },
                { id: '4', name: 'Sam', user_type: 'Entreprenuer', age: 58, years: 25 },
                { id: '5', name: 'Jack', user_type: 'Designer', age: 43, years: 18 }

            ]
        }
    }

    renderItems = () => {
        const data = this.state.userData
        const allItems = data.map((item) => (
            <React.Fragment key={item.id}>
                <li>
                    <div className="id">Id: {item.id}</div>
                    <div className="name">Name: {item.name}</div>
                    <div className="user_type">User Type: {item.user_type}</div>
                </li>
            </React.Fragment>
        ))
        return allItems
    }

    renderbyUserType = () => {
        const type = "Designer"
        const data = this.state.userData
        const filteredItems = data.filter((item) => item.user_type  == type)
        const allItems = filteredItems.map((item) => (
            <React.Fragment key={item.id}>
                <li>
                    <div className="id">Id: {item.id}</div>
                    <div className="name">Name: {item.name}</div>
                    <div className="user_type">User Type: {item.user_type}</div>
                </li>
            </React.Fragment>
        ))
        return allItems
    }

    renderfilterJ = () => {
        const data = this.state.userData
        const filteredItems = data.filter((item) => item.name[0] == "J") // check the first index if it is J or not
        const allItems = filteredItems.map((item) => (
            <React.Fragment key={item.id}>
                <li>
                     {/* Giving it a unIque key */}
                    <div className="id">Id: {item.id}</div> 
                    <div className="name">Name: {item.name}</div>
                    <div className="user_type">User Type: {item.user_type}</div>
                </li>
            </React.Fragment>
        ))
        return allItems
    }

    // Age to be greater than 28 and less than or equal to 50
    renderbyAge = () => {
        const data = this.state.userData
        const filteredItems = data.filter((item) => item.age > 28 && item.age <= 50)
        const allItems = filteredItems.map((item) => (
            <React.Fragment key={item.id}>
                <li>
                    <div className="id">Id: {item.id}</div>
                    <div className="name">Name: {item.name}</div>
                    <div className="user_type">User Type: {item.user_type}</div>
                </li>
            </React.Fragment>
        ))
        return allItems
    }

    renderbyExperience = () => {
        const type = "Designer"
        const data = this.state.userData
        const filteredItems = data.filter((item) => item.user_type  == type)
        const allItems = filteredItems.reduce((init, item) => init+item.years, 0)
        return (
            <React.Fragment>
                {allItems}
            </React.Fragment>
        )
    }

    render() {
        return (
    <div className='section'>

        <h2 className="title">Display all items</h2>
        <ul className="list">{this.renderItems()}</ul>

        <h2 className="title">Display based on user type</h2>
        <ul className="list">{this.renderbyUserType()}</ul>

        <h2 className="title">Filter all data starting with J</h2>
        <ul className="list">{this.renderfilterJ()}</ul>

        <h2 className="title">Filter all data based on age greater than 28 and age less than or equal to 50</h2>
        <ul className="list">{this.renderbyAge()}</ul>

        <h2 className="title">Find the total years of the designers</h2>
        <ul className="list">{this.renderbyExperience()}</ul>

    </div>
        )
    }
}

export default HigherOrderComponent