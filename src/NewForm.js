import React, { Component } from 'react';
import { Condition } from "./Condition";

export class NewForm extends Component {
state = {
selectedSpecies:"Animal",
species: ["Animal","Birds"]
} 

handleChange(e){
this.setState({name:e.target.value})
}

changeDropDown(e){
this.setState({selectedSpecies:e.target.value});
}

render() {
return (
<div>
<select value={this.state.selectedSpecies} onChange={e =>this.changeDropDown(e)}>
{this.state.species.map(function (item){
    return <option value={item} key={item}>   {item}   </option>
  })}
</select>

<p>{this.state.selectedSpecies}</p> 
{this.state.selectedSpecies ? <Condition onSelectType={this.state.selectedSpecies}  />: ""}
</div>
);
}
}