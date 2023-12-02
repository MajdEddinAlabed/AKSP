export default function Question() {
    return (
      <main>
        {/* Question header */}
        <div>
          {/* Question title */}
          <div>
            <div>
              <h1>Question number 1</h1>
            </div>
            <div>ask question button</div>
          </div>
          {/* Question prop */}
          <div>
            <p>Asked: today Modified today Viewed 2 times</p>
          </div>
          {/* divider */}
        </div>
        {/* Question body */}
        <div>
          {/* Question content */}
          <div>
            <div>
                <p>This is the content of the question</p>
            </div>
          </div>
          {/* Question side prop */}
          <div>
            <div>upvote</div>
            <div>number of vote</div>
            <div>down vote</div>
            <div>save</div>
          </div>
        </div>
      </main>
    );
  }
  