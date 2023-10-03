const React = require('react')
class Show extends React.Component {
    render(){
        const captainLog = this.props.captainLog
        console.log(captainLog)
        return(
            <div>
                <h1>Captain Log Show Page</h1>
                The {captainLog.title} entry from {captainLog.entry}.{' '} {captainLog.shipIsBroken
                ? "It is Broken"
            :"It is not Broken"} <br/>
            <a href='/logs'>Back</a>
            </div>
        )
    }
}