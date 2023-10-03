const React = require('react')
class Edit extends React.Component{
    render(){
        return(
            <div>
            <h1>Edit Page</h1>
            {/* <form action={`/logs/${this.props.captainLog._id}?_method=PUT`} method="POST"></form> */}
            <form action={`/logs/${this.props.captainLog._id}?_method='PUT`} method="POST">
          Title: <input type="text" name="title" defaultValue={this.props.captainLog.title}/><br/>
          Entry: <input type="text" name="entry"  defaultValue={this.props.captainLog.entry}/><br/>
         Is Ship Broken:
              { this.props.captainLog.shipIsBroken? <input type="checkbox" name="shipIsBroken" defaultChecked />: <input type="checkbox" name="shipIsBroken"/> }
          <br/>
          <input type="submit" value="Submit Changes"/>
      </form>
            </div>
        )
    }
}
module.exports = Edit