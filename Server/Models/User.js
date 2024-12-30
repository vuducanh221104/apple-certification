// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

// const UserSchema = new Schema(
//     {
//         fullName: { type: String, required: true },
//         username: { type: String, required: true, unique: true },
//         email: { type: String, required: true, unique: true },
//         password: { type: String, required: true },
//         type: { type: String, required: true, enum: ['WEBSITE', 'GOOGLE', 'FACEBOOK'], default: 'WEBSITE' },
//         role: { type: Number, required: true, default: 0 }, // Role (0) User , (1) Manger (2) Admin
//         gender: { type: String, enum: ['male', 'female', 'other'], required: false },
//         phoneNumber: { type: String, required: true },
//         address: {
//             street: { type: String },
//             city: { type: String },
//             country: { type: String },
//         },
//         avatar: { type: String },
//         dateOfBirth: { type: Date },
//         status: { type: Number, required: true, default: 0 }, // Trạng thái (1: active, 0: inactive)
//     },
//     {
//         timestamps: {
//             createdAt: 'created_at',
//             updatedAt: 'updated_at',
//         },
//         collection: 'user',
//     },
// );

// module.exports = mongoose.model('User', UserSchema);
