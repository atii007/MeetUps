import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUP = [
  {
    id: "m1",
    title: "First Meetup",
    image:
      "https://i.postimg.cc/L4J3Qzd3/praveen-gupta-ptf91j8-SFi-M-unsplash.jpg",
    address: "London, England",
    decription: "Here is the First Meetup!",
  },
  {
    id: "m2",
    title: "Second Meetup",
    image:
      "https://i.postimg.cc/Jn2tBDP1/louis-hansel-y-LUvn-CFI500-unsplash.jpg",
    address: "New York, United States of America ",
    decription: "Here is the First Meetup!",
  },
];

function HomePage(props) {
  return <MeetupList meetups={props.meetups} />;
}

// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;
//   return {
//     props: {
//       meetups: DUMMY_MEETUP,
//     },
//   };
// }

export async function getStaticProps() {
  return {
    props: {
      meetups: DUMMY_MEETUP,
    },
    revalidate: 1,
  };
}

export default HomePage;
