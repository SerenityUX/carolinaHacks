import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

function HomePage() {
  const questions = [
    {
      question: "Who is eligible to participate in the hackathon?",
      answer: "The hackathon is open to all high school students and individuals under the age of 18. Participants from South Carolina and other states or countries are welcome to attend. It is recommended that individuals reserve a ticket in advance."
    },
    {
      question: "What measures are in place to ensure safety during the event?",
      answer: "We take the safety of our participants very seriously. We will have active security measures in place to ensure the safety of all attendees. Additionally, we will have accommodations and a hotline available for participants to contact at any time during the event for assistance. If you have any further concerns or questions, please do not hesitate to contact us via email."
    },
    {
      question: "Is prior coding experience required to participate in the hackathon?",
      answer: "No prior coding experience is required to participate in the hackathon. We welcome beginners and will provide resources to help participants get started. However, some prior experience is recommended."
    },
    {
      question: "Will there be prizes awarded at the conclusion of the hackathon?",
      answer: "Yes, there will be prizes awarded to the winners of the hackathon. While we cannot disclose the specific prizes at this time, we can assure you they will be of high value and not limited to software."
    },
    {
      question: "I have a question that has not been answered in this information.",
      answer: "If you have any further questions that have not been addressed, please do not hesitate to contact us via email. We will be happy to assist you."
    },   
  ]
  return (
    <main>
      <a href="https://forms.gle/sUP8ixVM7GJu5K9E8" className={styles.buttonTicket}>
        Reserve a Ticket
      </a>
      <div className={styles.hero}></div>
      <div className={styles.eventInfo}>
        <h1 className={styles.logo}>Carolina Hacks</h1>
        <p className={styles.descriptionText}>
          Carolina Hacks is South Carolina's first student-led Hackathon for
          high schoolers.
        </p>
        <p className={styles.descriptionText}>
          At our hackathons, high schoolers will come together for a weekend of
          forming friendships, developing unique projects, and shipping their
          creations to the world.
        </p>
        <div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d104797.3577615438!2d-82.36283045!3d34.8331685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88578f6662fa1105%3A0xd8aa9d77bf257696!2sGreenville%2C%20SC!5e0!3m2!1sen!2sus!4v1673733383509!5m2!1sen!2sus" width="100%" style={{"border" :0, borderRadius: "16px"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

          <p className={styles.descriptionText}>📍 Location: City TBD, South Carolina</p>
          <p className={styles.descriptionText}>🏢 Venue: TBD</p>
          <p className={styles.descriptionText}>📆 Dates: April 7-9th 2023</p>
          <p className={styles.descriptionText}>💬 Discord: <a style={{color: "#046FEC", textDecoration: "underline"}} href="https://discord.gg/MGQe5sHt">https://discord.gg/MGQe5sHt</a></p>
        </div>

        <div className={styles.contentGroup}>
          <h2>Free Perks</h2>
          <li>Food and Beverages</li>
          <li>Collaboration Spaces</li>
          <li>Quiet Gender-Separated Sleeping Spaces</li>
          <li>24/7 High-speed WiFi Access</li>
          <li>Exclusive Shirt & Stickers</li>
        </div>

        <div className={styles.contentGroup}>
          <h2>Frequently Asked Questions</h2>
          {questions.map((question) => {
            return(
            <div className={styles.innerContentGroup}>
            <strong style={{textDecoration: "underline"}}>{question.question}</strong>
            <p>{question.answer}</p>
            </div>)
          })}
        </div>

        <div className={styles.contentGroup}>
          <h2>Contact</h2>
          <p>Feel free to send Thomas Stubblefield (an organizer of Carolina Hacks) an email if you have any questions
          <a style={{color: "#046FEC", paddingLeft: "8px", textDecoration: "underline"}} href="mailto: thomas@serenidad.app">thomas@serenidad.app</a>
          </p>
        </div>

        <div style={{marginBottom: "64px"}}>
          <i>
          Our event is totally free for students and we're currently accepting donations!

          <br></br>
          <p>Visit our <a href="https://bank.hackclub.com/donations/start/carolina-hacks" style={{color: "#046FEC", textDecoration: "underline"}}>Donation Page</a></p>
          Carolina Hacks is a proud member of the Hack Club community and is fiscally
          sponsored by Hack Club, a 501(c)(3) nonprofit (EIN: 81-2908499) 
          </i>
          
        </div>
      </div>
    </main>
  );
}

export default HomePage;
