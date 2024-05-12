import React from 'react';
import { Link } from 'react-router-dom';
const goToRegister = (event) => {
    window.location.href = '/Register';
};

function TandC() {
  return (
    <div>
        <center>
      <h2>Terms and Conditions</h2>
      <br></br>
      <p>Welcome to our website! These terms and conditions outline the rules and regulations for the use of our website.</p>
      <hr></hr>
      <br></br>
      <h3>1. Acceptance of Terms</h3>
      <p>By accessing or using our website, you agree to be bound by these terms and conditions.</p>
      <hr></hr>
      <br></br>
      <h3>2. User Accounts</h3>
      <p>In order to access certain features of our website, you may be required to create a user account. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.</p>
      <hr></hr>
      <br></br>
      <h3>3. Content</h3>
      <p>Our website allows users to post, link, store, share, and otherwise make available certain information, text, graphics, videos, or other material. You are responsible for the content that you post on our website and for ensuring that it complies with applicable laws and regulations.</p>
      <hr></hr>
      <br></br>
      <h3>4. Intellectual Property</h3>
      <p>The content on our website, including but not limited to text, graphics, logos, images, and software, is protected by intellectual property rights. You may not use, reproduce, distribute, or create derivative works based on this content without our prior written consent.</p>
      <hr></hr>
      <br></br>
      <h3>5. Limitation of Liability</h3>
      <p>We shall not be liable for any direct, indirect, incidental, special, or consequential damages arising out of or in any way connected with the use of our website or the inability to use our website, including but not limited to damages for loss of profits, goodwill, use, data, or other intangible losses.</p>
      <hr></hr>
      <br></br>
      <h3>6. Governing Law</h3>
      <p>These terms and conditions shall be governed by and construed in accordance with the laws of [your jurisdiction], and you hereby submit to the exclusive jurisdiction of the courts in [your jurisdiction].</p>
      <hr></hr>
      <br></br>
      <p>By using our website, you agree to these terms and conditions. If you do not agree to these terms and conditions, you may not use our website.</p>
      <br></br>
      <button onClick={goToRegister}>Back to Register</button>
      </center>
    </div>
  );
}

export default TandC;
