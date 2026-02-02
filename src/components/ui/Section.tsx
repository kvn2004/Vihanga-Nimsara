import React from 'react';
import { cn } from '../../lib/utils';
import { Container } from './Container';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  id?: string;
}

export const Section: React.FC<SectionProps> = ({ id, className, children, ...props }) => {
  return (
    <section
      id={id}
      className={cn('py-20 md:py-32', className)}
      {...props}
    >
      <Container>
        {children}
      </Container>
    </section>
  );
};
