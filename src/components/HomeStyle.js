import React, {Component}  from 'react';
import axios from 'axios'
import Home from './Home'
import App from './App'
class HomeStyle extends Component {
    //create State
    state ={
        posts: []
    }
    //get all post
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response =>{
                this.setState({
                    posts: response.data
                })
            //console.log(response)
        })
    }
    // end 
    render(){
        const posts = this.state.posts.map(post =>{
            return <Home key= {post.id} title={post.title}/> 
        })

        return(
            <App>
            <div>
                {posts}
            </div>
            </App>
        );
    }
}

export default HomeStyle

