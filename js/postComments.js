'use strict';

class PostCommentsForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      emailAddress: "",
      text: "",
      isSending: false,
      sent: false
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailAddressChange = this.handleEmailAddressChange.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNameChange(event) {
    this.setState({ name: event.target.value });
  }

  handleEmailAddressChange(event) {
    this.setState({ emailAddress: event.target.value });
  }

  handleTextChange(event) {
    this.setState({ text: event.target.value });
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    this.setState({ isSending: true });

    const payload = {
      name: this.state.name,
      emailAddress: this.state.emailAddress,
      text: this.state.text
    };

    await fetch(
      "https://n6ecipestf.execute-api.eu-west-2.amazonaws.com/prod/comments",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });

    this.setState({ isSending: false, sent: true });
  }

  render() {
    if (this.state.sent) {
      return (
        <div class="alert alert-success" role="alert">
          Thank you for your comment! It will appear here shortly.
        </div>
      );
    }

    const spinner = this.state.isSending ? <div className="spinner-border spinner-border-sm ml-3" role="status"></div> : null;

    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group row">
          <label htmlFor="name" className="col-sm-2 col-form-label">Name</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" id="name" value={this.state.name} onChange={this.handleNameChange} />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="emailAddress" className="col-sm-2 col-form-label">Email address</label>
          <div className="col-sm-10">
            <input type="email" className="form-control" id="emailAddress" aria-describedby="emailHelp" value={this.state.emailAddress} onChange={this.handleEmailAddressChange} />
            <small id="emailHelp" className="form-text text-muted">This field is for validation purposes and is not stored.</small>
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="text" className="col-sm-2 col-form-label">Comment</label>
          <div className="col-sm-10">
            <textarea className="form-control" id="text" rows="3" value={this.state.text} onChange={this.handleTextChange} />
          </div>
        </div>
        <button type="submit" className="btn btn-primary">Post comment</button>
        {spinner}
      </form>
    );
  }
}

const domContainer = document.querySelector('#postCommentForm');
ReactDOM.render(React.createElement(PostCommentsForm), domContainer);