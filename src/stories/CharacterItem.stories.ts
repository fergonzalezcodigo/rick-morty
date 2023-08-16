import type { Meta, StoryObj } from '@storybook/react';

import CharacterItem from '../components/pages/characters/CharacterItem';

const meta = {
    title: 'Pages/CharacterItem',
    component: CharacterItem,
  } satisfies Meta<typeof CharacterItem>;
  
  export default meta;
  type Story = StoryObj<typeof meta>;

  export const Primary: Story = {
    args: {
      status: 'Dead',
      id: 1,
      image: 'https://www.returngis.net/wp-content/uploads/2015/11/VS-Code.png',
      name: 'Fernanfloo',
      species: 'Human'
    },
  };
  