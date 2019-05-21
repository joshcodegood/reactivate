import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  onFormSubmit = event => {
    event.preventDefault();

    this.props.uponSubmission(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Image Sorch</label>
            <input
              type="text"
              value={this.state.term}
              onChange={e => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;

// class Car {
//     setDriveSound(sound) {
//       this.sound = sound;
//     }

//     drive() {
//       return this.sound;
//     }
//   }

//   const car = new Car();
//   car.setDriveSound('vroom');

//   const drive = car.drive;

//   car.drive()

//   drive()
