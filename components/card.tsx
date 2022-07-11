import { Button, Card } from "react-daisyui";

const MyCard = () => {
  return (
    <Card /*{...args}*/>
      <Card.Image
        src="https://api.lorem.space/image/shoes?w=400&h=225"
        alt="Shoes"
      />
      <Card.Body>
        <Card.Title tag="h2">Shoes!</Card.Title>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <Card.Actions className="justify-end">
          <Button color="primary">Buy Now</Button>
        </Card.Actions>
      </Card.Body>
    </Card>
  );
};

export default MyCard;
