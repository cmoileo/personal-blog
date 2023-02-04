
export default function LeaveComments() {
  return (
    <div className="leave-comments-container">
        <h1 className="main-title">Leave a comment</h1>
            <form className="leave-comments-container__form">
                <div className="">
                    <input type="leave-comments-form__name" className="name" placeholder="Name"/>
                    <input type="leave-comments-form__email" className="email" placeholder="Email"/>
                </div>
                <textarea className="leave-comments-form__textarea" placeholder="Comment..."></textarea>
                <button onClick={(e) => e.preventDefault()} className="newsletter-cta__button leave-comments-form__button">Submit</button>
            </form>
    </div>
  )
}
