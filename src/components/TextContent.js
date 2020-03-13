import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import '../index.css';
import Typography from '@material-ui/core/Typography';

const databaseURL = "https://wordcloud-f11ee.firebaseio.com";

class TextContent extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            textContent:'',
            textName: ''
        }
       
    }

    _getText(){
        fetch(`${databaseURL}/texts/${this.props.match.params.textID}.json`).then(res => {
            if(res.status != 200){
                throw new Error(res.statusText);
            }
            return res.json();
        }).then(text => this.setState({textContent: text['textContent'], textName: text['textName']}));
    }

    componentDidMount(){
        this._getText()
    }

    render(){
        return(
            <div>
                <Card>
                    <CardContent>
                        <Typography variant="h5" component="h2">
                            {this.state.textName}
                        </Typography><br/>
                        <Typography color="textSecondary" gutterBottom>
                            {this.state.textContent}
                        </Typography>   
                    </CardContent>
                </Card>
            </div>
        )
    }
}

export default TextContent;