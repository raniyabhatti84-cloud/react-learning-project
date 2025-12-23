import React from 'react';
import Header from "./Components/Nav.jsx";
import Page1 from "./Components/HeroSection.jsx";
import Section2 from "./Components/Clients.jsx";
import Section4 from "./Components/Unlock.jsx";
import Section5 from "./Components/Costumers.jsx";
import Section6 from "./Components/Community.jsx";
import Footer from "./Components/Footer.jsx";
import image from "../public/pana12x.png";

function App() {
  return (
    <>
      <Header />

      <Page1 />
      <Section2 />
      <Section4 image={image}
        h1='How to design your site footer like'
        par="Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida." />
      <Section5 />
      <Section6
        h1='Caring is the new marketing'
        par="The Nextcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and 
        lot's more."/>
      <Footer />
    </>
  );
}

export default App;