import { CollectionConfig } from 'payload/types';

export const Authors: CollectionConfig = {
  slug: 'authors',
  admin: {
    useAsTitle: 'fullName',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'fullName',
      type: 'text',
      unique: true,
      required: true,
    },
    {
      name: 'country',
      type: 'relationship',
      relationTo: 'countries',
      required: true,
    },
  ],
};
