const React = require("react");
class New extends React.Component {
  render() {
    return (
      <div>
        <form action="/logs" method="POST">
          Title: <input type="text" name="title" /> <br />
          Entry: <input type="textarea" name="entry" /> <br />
          shipIsBroken: <input type="checkbox" name="shipIsBroken"/><br />
          <input type="submit" value="Creat a log" />
        </form>
      </div>
    );
  }
}
module.exports = New
