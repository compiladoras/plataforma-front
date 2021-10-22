import React from 'react';
import { Container, Title, Divisor, Description } from './card.style';
import { Icon, Button, Icons } from '..';

interface CardProps {
  id: string;
  brandIcon: Icons;
  title: string;
  description: string;
  icon: Icons;
  link: string;
}

export const Card = ({
  id,
  brandIcon,
  title,
  description,
  icon,
  link,
}: CardProps): React.ReactElement => (
  <Container id={id}>
    <Icon icon={brandIcon} />

    <Title>{title}</Title>

    <Divisor />

    <Description>{description}</Description>

    <Button text="Entrar" icon={icon} />
  </Container>
);
