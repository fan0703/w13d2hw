const React = require('react')
class Index extends React.Component{
    render(){
        const captainLogs = this.props.captainLogs
        return(
            <>
            <h1>Captain Log Index Page</h1>
            <nav>
                <a href="/logs/new">Create a Log</a>
            </nav>
            <ul>
                {
                   this.props.captainLogs.map((captainLog, i)=>{
                    return(
                        <li key={i}>
                            <a href={`/logs/${captainLog.id}`}>{captainLog.title}</a>
                            {' '} entry from {captainLog.entry} <br/>
                            {captainLog.shipIsBroken?
                            'It is Broken':
                            'It is not Broken'}
                            <form action={`/logs/${captainLog._id}?_method=DELETE`} method="POST">
                                <input type="submit" value="DELETE"/>
                            </form>
                            <a href={`/logs/${captainLog._id}/edit`}>Edit This Log</a>
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