import React from "react";
import { Card } from "react-bootstrap";

export default function Services() {
  const cardInfo = [
    {
      title: "01",
      text:
        "I enjoy taking on challenges and engaging with the resources around me and the provision of solutions and sharing with my teammates",
    },
    {
      title: "02",
      text:
        "I enjoy taking on challenges and engaging with the resources around me and the provision of solutions and sharing with my teammates",
    },
    {
      title: "03",
      text:
        "I enjoy taking on challenges and engaging with the resources around me and the provision of solutions and sharing with my teammates",
    },
    {
      title: "04",
      text:
        "I enjoy taking on challenges and engaging with the resources around me and the provision of solutions and sharing with my teammates",
    },
  ];

  const renderCard = (card, index) => {
    return (
      <Card style={{ width: "18rem" }} key={index} className="box">
        <Card style={{ width: "18rem" }} key={index} />
        <Card src={card.number} />

        <Card.Body>
          <Card.Title style={{ textAlign: "center" }}>{card.title}</Card.Title>
          <Card.Text style={{ textAlign: "center" }}>{card.text}</Card.Text>
        </Card.Body>
      </Card>
    );
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div className="services">
        <p style={{ color: "yellow", textAlign: "center" }}>Services</p>
        <p style={{ color: "yellow", textAlign: "center" }}>
          We can serve you better
        </p>
      </div>

      <div style={{ marginTop: "2%" }}>
        <p style={{ textAlign: "center", fontWeight: "bold" }}>Why Choose Us</p>
        <p style={{ textAlign: "center" }}>
          IformByte or Bytehiveguru offers cool services
        </p>
      </div>
      <div className="serve">
        <p style={{ color: "yellow", textAlign: "center" }}>Services</p>
        <p style={{ color: "yellow", textAlign: "center" }}>
          We can serve you better
        </p>
      </div>
      <div className="serve">
        <p style={{ color: "yellow", textAlign: "center" }}>Services</p>
        <p style={{ color: "yellow", textAlign: "center" }}>
          We can serve you better
        </p>
      </div>
      {/* <div className="grid">{cardInfo.map(renderCard)}</div> */}
    </div>
  );
}
