import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useRef, useState, useEffect } from "react"
import { useMediaQuery } from '@react-hook/media-query';

function HomePage() {
  const questions = [
    {
      question: "Who is eligible to participate in the hackathon?",
      answer: "The hackathon is open to all high school students and individuals of or under the age of 18. Participants from South Carolina and other states or countries are welcome to attend. Individuals must reserve a ticket in advance."
    },
    {
      question: "What measures are in place to ensure safety during the event?",
      answer: "We take the safety of our participants very seriously. We will have active security measures in place to ensure the safety of all attendees. If you have any further concerns or questions, please do not hesitate to contact us via email."
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

  const videoRef = useRef(null);


  const unmute = () => {
    const video = videoRef.current;

    video.muted = false;
  }

  const [isClient, setIsClient] = useState(false); // initialize isClient state to false
  const isMobile = useMediaQuery('(max-width: 768px)'); // check if the viewport width is less than or equal to 768px

  useEffect(() => {
    setIsClient(true); // set isClient state to true on client mount
  }, []);

  return (
    <>
    <Head>
<title>Carolina Hacks</title>
<meta name="title" content="Carolina Hacks"/>
<meta name="description" content="Carolina Hacks is a social coding marathon designed for high school coders to come together, build projects, and discover the joy of coding. Our event is fiscally sponsored by Hack Club, a 501(c)3 non-profit helping high schoolers form coding groups within their school and local communities. At the beginning of the event, we will release a prompt for the hackathon, and teens will form teams to create projects based on that prompt. At the end of the event, teams will demo their projects in mini-table booths, and teens will be given a bag of candies which they can use as votes for their favorite projects."/>

<meta property="og:type" content="website"/>
<meta property="og:url" content="https://carolinahacks.com/"/>
<meta property="og:title" content="Carolina Hacks"/>
<meta property="og:description" content="Carolina Hacks is a social coding marathon designed for high school coders to come together, build projects, and discover the joy of coding. Our event is fiscally sponsored by Hack Club, a 501(c)3 non-profit helping high schoolers form coding groups within their school and local communities. At the beginning of the event, we will release a prompt for the hackathon, and teens will form teams to create projects based on that prompt. At the end of the event, teams will demo their projects in mini-table booths, and teens will be given a bag of candies which they can use as votes for their favorite projects."/>
<meta property="og:image" content="https://iili.io/HO9A1P2.md.png"/>

<meta property="twitter:card" content="summary_large_image"/>
<meta property="twitter:url" content="https://carolinahacks.com/"/>
<meta property="twitter:title" content="Carolina Hacks"/>
<meta property="twitter:description" content="Carolina Hacks is a social coding marathon designed for high school coders to come together, build projects, and discover the joy of coding. Our event is fiscally sponsored by Hack Club, a 501(c)3 non-profit helping high schoolers form coding groups within their school and local communities. At the beginning of the event, we will release a prompt for the hackathon, and teens will form teams to create projects based on that prompt. At the end of the event, teams will demo their projects in mini-table booths, and teens will be given a bag of candies which they can use as votes for their favorite projects."/>
<meta property="twitter:image" content="https://iili.io/HO9A1P2.md.png"/>
    </Head>
  <div className={styles.videoContainer}>
    {isClient && !isMobile ? ( // render video element only on the client and if not on a mobile device
      <video ref={videoRef} style={{width: "100vw"}} muted autoPlay loop className={styles.video}>
        <source src="https://telegrade.b-cdn.net/8mb.mp4" type="video/mp4" className={styles.videoSource}/>
      </video>
    ) : (
      <img src={"https://iili.io/HO901YQ.jpg"} className={styles.video} />
    )}
  </div>

    <main onTouchMove={unmute}>

      <a href="https://forms.gle/sUP8ixVM7GJu5K9E8" className={styles.buttonTicket}>
        Reserve a Ticket
      </a>
      <div className={styles.hero}></div>
      <div className={styles.eventInfo}> 
      <div style={{display: "flex", flexDirection: "row", alignItems: "center"}}>

      
      <Image
          src="/logo.png"
          width={128}
          height={128}
          style={{
            backgroundColor: "#013161",
            borderRadius: 48,
          }}
          ></Image>
        <h1 style={{marginLeft: 16}} className={styles.logo}>Carolina <br/> Hacks</h1>
      </div>
        <p className={styles.descriptionText}>
          Carolina Hacks is South Carolina's first student-led Hackathon for
          high schoolers.
        </p>

        <p className={styles.descriptionText}>
          At our hackathon, high schoolers will come together for a Saturday of
          forming friendships, developing unique projects, and shipping their
          creations to the world.
        </p>
        <div>
        
        {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d104797.3577615438!2d-82.36283045!3d34.8331685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88578f6662fa1105%3A0xd8aa9d77bf257696!2sGreenville%2C%20SC!5e0!3m2!1sen!2sus!4v1673733383509!5m2!1sen!2sus" width="100%" style={{"border" :0, borderRadius: "16px"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}

          <p className={styles.descriptionText}>📍 Location: Spartanburg, South Carolina</p>
          <p className={styles.descriptionText}>🏢 Venue: <a style={{textDecoration: "underline", color: "#046FEC"}} href="https://goo.gl/maps/LPKyAK1D8yZRsBoPA">Spartanburg County Public Library</a></p>
          <p className={styles.descriptionText}>📆 Date: April 22nd 2023 from 9:30 AM to 5:30 PM</p>
          <p className={styles.descriptionText}>💬 Hack Club Slack Channel: <a style={{color: "#046FEC", textDecoration: "underline"}} href="https://hackclub.com/slack/?continent=North%20America">#carolina-hacks</a></p>
        </div> 

        <div className={styles.contentGroup}>
          <h2>Learn & Bond by Building</h2>
          <p>Carolina Hacks is all about getting your hands dirty with code. Come join a community of like-minded high schoolers for a Saturday of learning by doing. Whether you're a seasoned hacker or just starting out, you'll walk away with new skills and lifelong friends.</p>
          <Image
          src="/building.jpg"
          width={256}
          height={142}
          style={{
            objectFit: "cover",
            borderRadius: 16,
          }}
          ></Image>
        </div>
        <div className={styles.contentGroup}>
          <h2>Find Your Creative Coding Community</h2>
          <p>You'll get the chance to collaborate with high schoolers from all over South Carolina (& the world) who share your passion for creative coding. From brainstorming ideas to working through tough coding challenges, you'll build lasting connections with a community that supports and inspires you.</p>
          <Image
          src="/community.jpg"
          width={256}
          height={256}
          style={{
            objectFit: "cover",
            borderRadius: 16,
          }}
          ></Image>
        </div>
        <div className={styles.contentGroup}>
          <h2>Build a Project You'll be Proud Of</h2>
          <p>Over the course of the day, you'll work with a team to build a project that you're passionate about. Whether it's a game, an app, or something totally out-of-the-box, you'll walk away feeling proud of what you've accomplished.</p>
          <Image
          src="/project.jpg"
          width={256}
          height={256}
          style={{
            objectFit: "cover",
            borderRadius: 16,
          }}
          ></Image>
        </div>
        <div className={styles.contentGroup}>
          <h2>Additional Perks</h2>
          <li>Food and Beverages</li>
          <li>Collaboration Spaces</li>
          <li>High-speed WiFi Access</li>
          <li>Exclusive Merch & Stickers</li>
          <li>Secret Prizes</li>
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
    </>
  );
}

export default HomePage;
