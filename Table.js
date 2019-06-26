import React from "react";

 class Table extends React.Component {
    constructor(props) {
        super(props);
    }
  
    render(){
        const element = this.props.data.map((item, index) => {
            return(
                <div key={index}>
                    <table>
                        <tbody>
                        <tr>
                            <td>{item.name}</td>
                            <td>{item.grade}</td>
                            <td>{item.salary}</td>
                            <td>{item.year}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            )
        });
        return (
            <div>
                {element}
            </div> 
        );
    }
}
export default Table;