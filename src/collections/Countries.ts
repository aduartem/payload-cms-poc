import { CollectionConfig } from 'payload/types';

export const Countries: CollectionConfig = {
  slug: 'countries',
  auth: false,
  admin: {
    useAsTitle: 'name',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      unique: true,
      required: true,
    }
  ],
};
