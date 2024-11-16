import { Component } from 'react';
import './index.css';
import Review from '../Review'

class ReviewsCarousel extends Component {
    state={index:0}
    

    goBackReview=()=>{
        const {index}=this.state
        if(index>0){
            this.setState(prev=>({index:prev.index-1}))
        }
    }
    goForward=()=>{
        const {reviewsList}=this.props
        const {index}=this.state
        if(index<reviewsList.length-1){
            this.setState(prev=>({index:prev.index+1}))
        }
    }
  render() {
    const {index}=this.state
    const {reviewsList}=this.props
    const currentIndex=reviewsList[index]
    
  

    return (

      <div className="bg-container">
        <h1 className="heading">Reviews</h1>
        <div className="review-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
            alt="left arrow"
            className="arrow"
            onClick={this.goBackReview}
          />
          <Review details={currentIndex}/>
          <img
            src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
            alt="right arrow"
            className="arrow"
            onClick={this.goForward}
          />
        </div>
      </div>
    );
  }
}

export default ReviewsCarousel;
