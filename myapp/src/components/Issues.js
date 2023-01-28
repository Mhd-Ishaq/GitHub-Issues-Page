import React from 'react'

const Issues = ({issues}) => {

  return (
    <div>
      <ul className="list-container">
          {issues.map((issue) => (
            <li key={issue.id}>
              <div className="list">
                <div>
                  <span className='icon'>⊙</span>
                  <a href={issue.html_url}>{issue.title}</a>
                  <p>
                    # {issue.number} opened on {issue.updated_at} by
                    <a href={issue.user.html_url}> {issue.user.login}</a>
                  </p>
                </div>
                <p className="comment">✉{issue.comments} comments</p>
              </div>
            </li>
          ))}
        </ul>
    </div>
  )
}

export default Issues