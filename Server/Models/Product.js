// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;
// const slug = require('mongoose-slug-updater');
// const mongooseDelete = require('mongoose-delete');

// const PriceSchema = new Schema(
//     {
//         original: { type: Number, required: true },
//         discount: { type: Number, required: true },
//         discount_quantity: { type: Number, required: true },
//         currency: { type: String, required: true },
//     },
//     {
//         _id: false,
//         timestamps: false,
//     },
// );

// const ProductSchema = new Schema(
//     {
//         product_type_id: { type: Schema.Types.ObjectId, required: true, ref: 'ProductType' },
//         name: { type: String, required: true },
//         price: { type: PriceSchema, required: true },
//         thumb: { type: String, required: true },
//         ship: { type: Number, required: true },
//         quantity: { type: Number, required: true },
//         material_id: [{ type: Schema.Types.ObjectId, ref: 'Material' }],
//         category_id: [{ type: Schema.Types.ObjectId, ref: 'Category' }],
//         slug: { type: String, slug: 'name', require: true },
//     },
//     {
//         timestamps: {
//             createdAt: 'created_at',
//             updatedAt: 'updated_at',
//         },
//         collection: 'product',
//     },
// );

// mongoose.plugin(slug);
// ProductSchema.plugin(mongooseDelete, { overrideMethods: 'all', deletedAt: true });

// module.exports = mongoose.model('Product', ProductSchema);
