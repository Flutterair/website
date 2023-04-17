import React from "react";
import Hero from "../../Components/Sections/Hero";
import Three from "../../Components/Sections/Three";
import Card from "../../Components/Sections/Card";
import International from "../../Components/Sections/International";
import CardFlex from "../../Components/Sections/CardFlex";

export default function LandingPage() {
  return (
    <div>
      <Hero />
      <Three />
      <Card />
      <International />
      <CardFlex />
    </div>
  );
}
