export default {
	Query: {
		cars: async (parent, args, { Car }) => {
			const cars = await Car.find();
			return cars.map((car) => {
				car._id = car._id.toString();
				return car;
			});
		},
	},
	Mutation: {
		createCar: async (parent, args, { Car }) => {
			const car = await new Car(args).save();
			if (!car) return { status: 500, msg: 'Car Not Saved' };
			car._id = car._id.toString();
			return car;
		},
	},
};
