import { model, Schema } from 'mongoose';

const CarSchema = new Schema({
	name: String,
});

export default model('cars', CarSchema);
