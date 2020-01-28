import React from "react";

export class Condition extends React.Component {
  state = {
    types: {
      animals: ["tiger", "lion", "cheetha"],
      birds: ["kingfisher", "pigeon"]
    },

    selectedType: ""
  };
  selectedValue(e) {
    this.setState({ selectedType: e.target.value });
  }

  render() {
    const subTypes =
      this.props.onSelectType === "Animal"
        ? this.state.types.animals
        : this.state.types.birds;

    console.log(this.props.onSelectType, "fgbgb");

    return (
      <div>
        <select
          value={this.state.selectedType}
          onChange={e => this.selectedValue(e)}
        >
          {subTypes.map(function(item) {
            return (
              <option key={item} value={item}>
                {item}
              </option>
            );
          })}
        </select>

        <p>{this.state.selectedType}</p>
      </div>
    );
  }
}