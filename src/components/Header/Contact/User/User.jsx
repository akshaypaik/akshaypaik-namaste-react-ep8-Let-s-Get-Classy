import React from "react";


// this is class based component (old way of writing react components)
class UserClass extends React.Component {

    // always we receive props in this constructor
    // this will be called first in component life cycle
    constructor(props) {
        // we must do this super(props) so that we can use it anywhere in the class using this keyword like line number 18.
        super(props);

        // this is the way to create state variable in class based components. Earlier there was no react hooks like useState().
        // this is new react equivalent of const [count] = useState(0);
        this.state = {
            count: 0
        }
    }

    // this is called once the component is fully loaded that is component is mounted.
    // this will be called after render() in component life cycle
    // api calls will be done here
    componentDidMount(){
        console.log("component did mount");
    }

    // write jsx piece of code in render() method
    // this will be called second in component life cycle
    render() {
        return (
            <>
                {/* using state in jsx */}
                <h1>{this.state.count}</h1>
                <button onClick={() => {
                    // this is the way to update state variable in old react
                    this.setState({
                        count: this.state.count + 1
                    })
                }}>
                    Increase Count
                </button>
                <div>
                    Name: {this.props.name}
                </div>
                <div>
                    Location: Bangalore
                </div>
            </>
        )
    }
}

export default UserClass;