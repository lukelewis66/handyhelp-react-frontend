import React from "react";
import { Image } from "react-bootstrap";

const AboutPage = () => {
  return (
    <div class="screen">
      <div margin="5vw">
        <div className="infoPanelCon2">
          <div class="profile-info3">
            <h1>About Us</h1>
            <hr></hr>
            <h4>
              A group of 4 students from UCSB that have made an online
              marketplace where clients can meet individuals with unique
              skillsets and those people can find work from clients.
            </h4>
          </div>
        </div>
        <div className="infoPanelCon2">
          <div class="profile-info3">
            <p>
              Project Overview: Many people will have common household tasks or
              issues that they might not be able to do on their own, such as
              common repairs, yardwork, construction projects, etc. With
              HandyHelp, they can search for other people with specific
              skillsets that can help with their tasks. These users can make
              listings which describe the work needed, and other (contractor)
              users can respond and offer their help. Therefore, there will be
              two types of users-- clients and contractors. Clients can make
              listings that contractors can respond to, as well as look up
              specific contractors to contact. Contractors can advertise
              themselves and their own skillsets, which can be seen by clients.
              Both contractors and clients can make reviews/ratings of each
              other. As of now, discussion of payments and the actual payments
              will be done at the client/contractor discretion. There could be
              possible integration of PayPal/Stripe API to make payments in the
              app in the future.
            </p>
          </div>
        </div>
        <div class="aboutnames">
          <div className="infoPanelabout">
            <div class="profile-info2">
              <h2>Hank</h2>
              <Image src={"/HankProfilePicture.JPG"} height="100px"></Image>
              <p>
                Made navbar redirects and restrictions. Created the individual
                listing and contracter pages. Created the reviews for
                contractors. Most importanly, made this about page.
              </p>
            </div>
          </div>
          <div className="infoPanelabout">
            <div class="profile-info2">
              <h2>Luke</h2>
              <Image
                src={"/62552412445__A9074697-3254-4234-9D3A-12D231E54C7F.JPG"}
                height="100px"
              ></Image>
              <p>
                Our Fearless leader. Created the well organized structure for
                the code. Made search listings and contractors with filters.
                Used Google Maps API for location based searching.
              </p>
            </div>
          </div>
          <div className="infoPanelabout">
            <div class="profile-info2">
              <h2>Noa</h2>
              <Image src={"/20201106_185724.jpg"} height="100px"></Image>
              <p>
                Was faced with the immense task of getting the images to save on
                AmazonS3 and using Email.js to create our messaging system
                between contractors and clients
              </p>
            </div>
          </div>
          <div className="infoPanelabout">
            <div class="profile-info2">
              <h2>Simon</h2>
              <Image src={"/Simambe.png"} height="100px"></Image>
              <p>
                Our very own Simambe created of the look of the website
                including colors and boxes and created the client and contractor
                profiles.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
