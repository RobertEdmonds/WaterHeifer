import "../styles/Home.css";

export default function Home() {
  return (
    <>
      <div className="topHome">
        <h1 className="topTitle">Water Heifer Unlimited</h1>
        <h3 style={{ color: "white", fontFamily: "Copperplate" }}>
          Your Home For Alaska Fishing
        </h3>
      </div>
      <div className="missionHome">
        <h1 style={{ fontFamily: "Copperplate" }}>Mission Statement</h1>
        <h4 style={{ width: "50%" }}>
          Here at Water Heifers Unlimited we strive to be the most knowledgeable
          anglers in the great white north. With more than 1,000 hours logged on
          the streams, rivers and ocean in Alaska. We know the weather, time of
          year, and lunar cycle to give our customers the best chance of
          catching a trophy fish. Water Heifers also believe in wild life
          conservation. We have teamed up with several non-profits to keep
          nature preserved so we can have our kids and grand-kids see the woods
          the same way we saw it as children.
        </h4>
      </div>
      <div className="founderHome">
        <div className="founderWriting">
          <h1 style={{ fontFamily: "Copperplate" }}>About The Founder</h1>
          <h4>
            Hi my name is Alex Easley. I moved up to Alaska and was taken back
            by the nature. It made me think this was the way god wanted to keep
            the earth. I've been fishing all over the world. Here in Alaska with
            all the monster salmon and giant tuna, it has to be a destination
            for every anglers bucket list. Also something that I have that no
            other angler has is an extreme laziness. I had three weeks to think
            up what I was going to say on here. Instead of doing that I had my
            friend that built this webpage think it up for me.
          </h4>
        </div>
      </div>
    </>
  );
}
