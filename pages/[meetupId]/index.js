import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails(props) {
  return (
    <MeetupDetail
      image="https://i.postimg.cc/Jn2tBDP1/louis-hansel-y-LUvn-CFI500-unsplash.jpg"
      title="First Meetup"
      address="London, England"
      description="This is First Meetup"
    />
  );
}

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;
  console.log(meetupId);

  return {
    props: {
      meetupData: {
        image:
          "https://i.postimg.cc/Jn2tBDP1/louis-hansel-y-LUvn-CFI500-unsplash.jpg",
        id: meetupId,
        title: "First Meetup",
        address: "London, England",
        description: "This is First Meetup",
      },
    },
  };
}

export default MeetupDetails;
