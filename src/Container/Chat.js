import React, { Component } from 'react';
import Input from "../Components/Input";
import './Chat.css';
import firstImage from '../Assets/1.jpeg';
import secondImage from '../Assets/2.jpeg';
import thirdImage from '../Assets/3.jpeg';
import fourthImage from '../Assets/4.jpeg';
import cancelImg from '../Assets/cancel.png';


export class Chat extends Component {
	state = {
		nameList: [{
			id: 0,
			name: "John",
			active: false,
			img: firstImage,
			text: [],
			chatText: ''
		},
		{
			id: 1,
			name: "Jenifer",
			active: false,
			img: secondImage,
			text: [],
			chatText: ''
		},
		{
			id: 2,
			name: "Ram",
			active: false,
			img: thirdImage,
			text: [],
			chatText: ''
		},
		{
			id: 3,
			name: "Laksham",
			active: false,
			img: fourthImage,
			text: [],
			chatText: ''
		}],
		chatBox: true,
		individualName: '',
		nameId: '',
		popUp: 0
	}

	handleCancle = (item) => {
		this.setState({
			nameList: this.state.nameList.map(el => (el.name === item.name ? { ...el, active: false } : el))
		})
	}

	handleClick = (item, nameListIndex) => {
		this.setState({
			chatBox: false,
			individualName: item,
			nameId: nameListIndex,
		})

		this.setState({
			nameList: this.state.nameList.map(el => (el.name === item.name ? { ...el, active: true } : el))
		});

		if (this.state.popUp < this.state.nameList.length) {
			let popUp = this.state.popUp;
			this.setState({ popUp: ++popUp })
		}

	}

	handleChange = (e, item) => {
		this.setState({
			nameList: this.state.nameList.map(el => (el.id === item.id ? { ...el, chatText: e.target.value, } : el))
		})
	}

	handleSubmit = (e, newItem, item) => {
		e.preventDefault();
		this.setState(this.state.nameList.map(el =>
			(el.id === item.id ? (el.chatText = ' ', el.text = [...el.text, newItem]) : el)))
	}

	render() {
		return (
			<div>
				{this.state.nameList.map((item, i) => {
					return (
						<div className="listOfNames" key={i} onClick={() => this.handleClick(item, i)}>
							<img src={item.img} className="profileImage" alt="" /> {item.name}
						</div>
					)
				})}

				{!this.state.chatBox &&
					<div className="boxes">
						{this.state.nameList.map((item, i) => {
							if (item.active === true) {
								return (
									<div className="chatBox-wrapper" key={i}>
										<h4 className="heading">
											<img src={item.img} className="profileImage" alt="" />
											{item.name}
											<img alt="" onClick={() => this.handleCancle(item)} src={cancelImg} className="cancelImage" />
										</h4>
										<form onSubmit={e => this.handleSubmit(e, item.chatText, item)}>
											<div className="chatBox">
												<ul>
													{item.text.map((eachItem, i) => {
														return (
															<li key={i} className="showChat">{eachItem}</li>
														)
													}
													)
													}
												</ul>
											</div>
											<div>
												<Input
													className="inputField"
													type="text"
													value={item.chatText}
													onChange={(e) => this.handleChange(e, item)}
													placeHolder="Enter message here..." />
											</div>
										</form>
									</div>)
							}
						})}
					</div>
				}
			</div>
		)
	}
}

// export default Chat;

