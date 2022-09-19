import React, { Component } from "react";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 0,
    };
  }

  formEdit = () => (
    <div>
      <div className="mb-3">
        <label className="form-label">Edit Amount</label>
        <input
          type="text"
          className="form-control"
          id="amount"
          placeholder="Amount"
          defaultValue={this.props.amount}
        />
      </div>
      <div>
        <button className="btn btn-outline-success" onClick={()=> this.onClickSave()}>Save</button>
      </div>
    </div>
  );

  formButton = () => (
    <div className="btn-group">
      <button className="btn btn-outline-primary" onClick={() => this.onClickEdit()}>
        Edit
      </button>
      <button className="btn btn-outline-danger">Remove</button>
    </div>
  );

  displayCheck = () => {
    if (this.state.status === 0) {
      return this.formButton();
    } else {
      return this.formEdit();
    }
  };

  onClickEdit = () => (
    this.setState({status: 1})
  );

  onClickSave = () => (
    this.setState({status: 0})
  );

  render() {
    return (
      <div className="card" style={{ width: "18rem" }}>
        <img
          src="https://via.placeholder.com/150C"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{this.props.cardTitle}</h5>
          <p className="card-text">{this.props.cardDes}</p>
          <p className="card-text">Amount : {this.props.amount}</p>
        </div>
        <div>
          {this.displayCheck()}
        </div>
      </div>
    );
  }
}

export default Card;
