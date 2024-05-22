import React from 'react';
//import { Link } from 'react-router-dom';
const goToHome = (event) => {
    window.location.href = '/';
};

function AcceptingCookies() {
    return (
        <div>
            <center>
            
    <div className="user-guidelines">
        <br></br>
      <h1>User Guidelines for GamesHub</h1>
      <br></br>
      <p>
        Welcome to GamesHub, a platform dedicated to enhancing your computational thinking skills through engaging and educational games. To ensure a positive and productive experience for everyone, please adhere to the following guidelines:
      </p>
      <br></br>

      <h2>1. Respect Others</h2>
      <br></br>
      <ul>
        <li><strong>Be Kind and Courteous:</strong> Treat all users with respect and courtesy. Harassment, bullying, or any form of abuse will not be tolerated.</li>
        <li><strong>Constructive Feedback:</strong> Provide constructive feedback on games and other users' comments. Criticism should be respectful and aimed at helping others improve.</li>
      </ul>
<br></br>
      <h2>2. Play Fairly</h2>
      <br></br>
      <ul>
        <li><strong>No Cheating:</strong> Play the games fairly and do not use any cheats, hacks, or exploits. Cheating undermines the learning experience for everyone.</li>
        <li><strong>Follow the Rules:</strong> Adhere to the rules and guidelines specific to each game. These are designed to ensure a fair and enjoyable experience for all users.</li>
      </ul>
      <br></br>

      <h2>3. Maintain a Safe Environment</h2>
      <br></br>
      <ul>
        <li><strong>No Inappropriate Content:</strong> Do not post or share any content that is inappropriate, offensive, or harmful. This includes, but is not limited to, obscene language, images, or links.</li>
        <li><strong>Privacy Protection:</strong> Do not share personal information (yours or others) such as addresses, phone numbers, or email addresses in public areas of the site.</li>
      </ul>
<br></br>
      <h2>4. Engage Positively</h2>
      <br></br>
      <ul>
        <li><strong>Positive Participation:</strong> Engage positively in forums, chats, and discussions. Share your knowledge and help others with their learning journey.</li>
        <li><strong>Report Issues:</strong> If you encounter any issues, inappropriate behavior, or content, report it to the site moderators immediately.</li>
      </ul>
<br></br>
      <h2>5. Respect Intellectual Property</h2>
      <br></br>
      <ul>
        <li><strong>Original Content:</strong> Only upload content that you own or have permission to use. Respect the intellectual property rights of others.</li>
        <li><strong>Citations and Credits:</strong> Give proper credit when using or referring to content created by others.</li>
      </ul>
<br></br>
      <h2>6. Technical Etiquette</h2>
      <br></br>
      <ul>
        <li><strong>Avoid Spamming:</strong> Do not spam forums, chat rooms, or other communication channels with repetitive or irrelevant messages.</li>
        <li><strong>Bug Reporting:</strong> If you encounter a bug or technical issue, report it through the appropriate channels. Provide as much detail as possible to help us resolve the issue.</li>
      </ul>
<br></br>
      <h2>7. Account Security</h2>
      <br></br>
      <ul>
        <li><strong>Secure Passwords:</strong> Use a strong, unique password for your account and do not share it with others.</li>
        <li><strong>Unauthorized Access:</strong> Do not attempt to access another user's account or personal information.</li>
      </ul>
<br></br>
      <h2>8. Follow Legal Requirements</h2>
      <br></br>
      <ul>
        <li><strong>Age Restrictions:</strong> Adhere to age restrictions and parental consent requirements as specified by the website.</li>
        <li><strong>Compliance with Laws:</strong> Ensure your activities on the site comply with local, national, and international laws.</li>
      </ul>
<br></br>
      <h2>9. Feedback and Improvement</h2>
      <br></br>
      <ul>
        <li><strong>Suggestions Welcome:</strong> We welcome feedback and suggestions to improve our games and website. Please use the designated channels to share your ideas.</li>
        <li><strong>Continuous Learning:</strong> Strive to continuously improve your computational thinking skills and help others do the same.</li>
      </ul>

      <p>
        By following these guidelines, you contribute to a positive, respectful, and productive learning environment for all users. Thank you for being a part of our community!
      </p>
      <br></br>

      <p>
        <strong>Happy Learning and Playing!</strong>
        <br />
        <strong>GamesHub Team</strong>
        <br></br>
      </p>
      <br></br>
    </div>
                <button onClick={goToHome}>Back to Home</button>
                <br></br>
                <br></br>

        
            </center>
        </div>
    );
}

export default AcceptingCookies;
