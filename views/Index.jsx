const React = require('react')
class Index extends React.Component{
    render(){
        const captainLogs = this.props.captainLogs
        return(
            <>
            <nav>
                <a href="/logs/new">Create a Log</a>
            </nav>
            <ul>
                {
                   this.props.captainLogs.map((captainLog, i)=>{
                    return(
                        <li key={i}>
                            <a href={`/logs/{captainLog.id}`}>{captainLog.title}</a>
                            {' '} entry from {captainLog.entry} <br/>
                            {captainLog.shipIsBroken?
                            'It is Broken':
                            'It is not Broken'}
                        </li>
                    )
                   }) 
                }
            </ul>
            </>
        )
    }
}
module.exports = Index