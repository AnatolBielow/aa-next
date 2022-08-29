// import { popup } from "leaflet";
import { BackButton } from "../BackButton";
import meeting from "../../Images/meeting.jpg";
import { addresses } from "../../Helpers";
import {
  Title,
  City,
  AddressWrapper,
  Street,
  Date,
  Time,
  AddressContainer,
  Section,
  MapContainer,
  GroupName,
  OpenDay,
  OpenDayTitle,
  Link,
} from "./Meetings.styled";
import React from "react";
// import dynamic from "next/dynamic";


// const Map = dynamic(() => import("../../Components/Map/"), {

//   // Do not import in server side

//   ssr: false,

// })
export function Meetings() {


  // React.useEffect(() => {
  //   // window is accessible here.
  //   console.log("window.innerHeight", window.innerHeight);
  // }, [])

  return (
    <Section img={meeting}>
      <Title>Mityngi AA</Title>
      {addresses.map((address, index) => (
        <AddressWrapper key={index}>
          <AddressContainer>
            <City>{address.city}</City>
            <GroupName>&quot;{address.groupName}&quot;</GroupName>
            <Street>{address.street}</Street>

            <Date>
              {address.date}: <Time>{address.time}</Time>
            </Date>
            <OpenDayTitle>Mityng otwarty:</OpenDayTitle>
            <OpenDay>{address.openDay}</OpenDay>
          </AddressContainer>
          
        </AddressWrapper>
      ))}
      {/* <MapContainer>
            <Map center={addresses[0].coordinate} popup={addresses[0].popup} />
          </MapContainer> */}
      <Link href="https://spis.aa.org.pl/index.php/meetings/?tsml-day=any&tsml-region=szwecja">
        Spis Mityngów w Szwecji
      </Link>
      <BackButton />
    </Section>
  );
}
