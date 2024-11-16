import './index.css'
const Review=(props)=>{
    const {details}=props
    const {imgUrl,username,companyName,description}=details
    return(
        <div className="container">
            <img src={imgUrl} alt={username} className="image"/>
            <p className="name">{username}</p>
            <p className="company">{companyName}</p>
            <p className="company">{description}</p>
        </div>
    )
}

export default Review