import React from 'react'

// apI import
import youtube from '../apis/youtube'

// Components
import SearchBar from './SearchBar'
import VideoList from './VideoList'
import VideoDetail from './VideoDetail'

class App extends React.Component {

        state = {
            videos: [],
            selectedVideo: null,
        }


    componentDidMount() {
        this.onTermSubmit('React Js')
    }



    KEY = 'AIzaSyDBcI4pVCubJU5ekfFbFbVnMaH7VJD42oc'


    onTermSubmit = async term => {

        const response = await youtube.get('/search', {
            params: {
                q: term,
                key: this.KEY
            }

        })

        this.setState({
            videos: response.data.items,
            selectedVideo: response.data.items[0]
        })


    }

    onVideoSelect = (video) => {
        console.log('From the App!, ', video)
        this.setState({ selectedVideo: video })
    }



    render() {
        return (
            <div className="ui container">
                <SearchBar onTermSubmit={this.onTermSubmit} />


                <div className="ui grid">

                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.selectedVideo} />
                        </div>

                        <div className="five wide column">
                            <h4>Results: {this.state.videos.length}</h4>

                            <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App