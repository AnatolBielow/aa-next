import { Card } from '../Card';
import { CardItem, CardList } from "./CardSection.styled";
import { cards } from '../../Helpers';
import Link from 'next/link';

export const CardSection = () => {
  return (
    <section>
      <CardList>
        {cards.map((card) => (
          <CardItem key={card.id}>
            <Link href={card.id}>
              <a>
              <Card item={card} />
            </a>
            </Link>
            
            
          </CardItem>
        ))}
      </CardList>
    </section>
  );
};
