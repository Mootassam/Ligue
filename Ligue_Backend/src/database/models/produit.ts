import mongoose from 'mongoose';
import FileSchema from './schemas/fileSchema';
const Schema = mongoose.Schema;

export default (database) => {
  try {
    return database.model('produit');
  } catch (error) {
    // continue, because model doesnt exist
  }

  const ProduitSchema = new Schema(
    {
      titre: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      publish: {
        type: Boolean,
        default: false
      },
      category: [{
        type: Schema.Types.ObjectId,
        ref: 'produitCategorie',
      }],
      stockable: {
        type: Boolean,
        default: false
      },
      prix: {
        type: Number,
        required: true,
      },
      photos: [FileSchema],
      stock: {
        type: Number,
        required: false,
      },
      tenant: {
        type: Schema.Types.ObjectId,
        ref: 'tenant',
        required: true
      },
      createdBy: {
        type: Schema.Types.ObjectId,
        ref: 'user',
      },
      updatedBy: {
        type: Schema.Types.ObjectId,
        ref: 'user',
      },
      importHash: { type: String },
    },
    { timestamps: true },
  );

  ProduitSchema.index(
    { importHash: 1, tenant: 1 },
    {
      unique: true,
      partialFilterExpression: {
        importHash: { $type: 'string' },
      },
    },
  );



  ProduitSchema.virtual('id').get(function () {
    // @ts-ignore
    return this._id.toHexString();
  });

  ProduitSchema.set('toJSON', {
    getters: true,
  });

  ProduitSchema.set('toObject', {
    getters: true,
  });

  return database.model('produit', ProduitSchema);
};
